import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`&.${breadcrumbsClasses.separator}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    margin: 1,
  },
  [`&.${breadcrumbsClasses.ol}`]: {
    alignItems: 'center',
  },
}));

export default function NavbarBreadcrumbs() {
  const pathname = usePathname();
  console.log('pathname--', pathname);
  const pathSegments = pathname?.split('/').filter(segment => segment !== '');
  console.log('pathSegments--', pathSegments);

  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      {pathSegments.map((segment, index) => (
        <Typography key={index} variant="body1" sx={{ color: index === pathSegments.length - 1? 'text.primary' : 'inherit', fontWeight: index === pathSegments.length - 1? 600 : 400 }}>
          {segment}
        </Typography>
      ))}
    </StyledBreadcrumbs>
  );
}