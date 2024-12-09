'use client'
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
// import { Link } from "react-router";
// import { Path } from "@/app/constant";
import Link from "next/link";
import { Path } from "../constant";

const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon />, path: Path.Home },
  { text: "Analytics", icon: <AnalyticsRoundedIcon />, path: Path.Dashboard },
  { text: "Clients", icon: <PeopleRoundedIcon />, path: Path.Chat },
  { text: "Tasks", icon: <AssignmentRoundedIcon />, path: "/tasks" },
];

const secondaryListItems = [
  { text: "Settings", icon: <SettingsRoundedIcon />, path: "/settings" },
  { text: "About", icon: <InfoRoundedIcon />, path: "/about" },
  { text: "Feedback", icon: <HelpRoundedIcon />, path: "/feedback" },
];
export default function MenuContent() {
  const [selected, setSelected] = React.useState(0);
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            // to={item.path}
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => setSelected(index)}
          >
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton selected={index === selected}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            // to={item.path}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Stack>
  );
}
