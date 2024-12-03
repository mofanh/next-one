"use client";

import * as React from "react";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import type {} from "@mui/x-charts/themeAugmentation";
import type {} from "@mui/x-data-grid/themeAugmentation";
import type {} from "@mui/x-tree-view/themeAugmentation";
import { alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppNavbar from "./components/AppNavbar";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import AppTheme from "../shared-theme/AppTheme";
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from "./theme/customizations";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function Layout(props: {
  disableCustomTheme?: boolean;
  children: React.ReactNode;
}) {
  const { children } = props;
  return (
    <AppTheme {...props} themeComponents={xThemeComponents as any}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>
        <SideMenu />
        <AppNavbar />
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: "auto",
            minHeight: "100vh",
          })}
        >
          <Stack
            spacing={2}
            sx={{
              // alignItems: "center",
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
              flex: 1,
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Header />
            <Box
              sx={{
                flexGrow: 1, // 添加这一属性，让Box组件在Stack中占满剩余空间
                display: "flex",
                flexDirection: "column", // 明确Box内部也是垂直方向布局（根据实际需求确定）
                justifyContent: "space-between", // 这里可以根据需要保留或者去除，如果想让Box内部子元素有间隔分布效果可保留
              }}
            >
              {children}
            </Box>
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
