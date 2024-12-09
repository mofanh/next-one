"use client";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { Box, CssBaseline, Stack } from "@mui/material";
import Image from "next/image";
import { Path } from "../constant";
import Chat from "../chat/page";
import Dashboard from "../dashboard/page";
import AppTheme from "@/shared-theme/AppTheme";
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from "@/Layout/theme/customizations";
import AppNavbar from "@/Layout/components/AppNavbar";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function Home(props: { disableCustomTheme?: boolean, children: React.ReactNode; }) {
    const {children} = props;
  return (
    <AppTheme {...props} themeComponents={xThemeComponents as any}>
        <CssBaseline enableColorScheme />
      <BrowserRouter>
        <Box sx={{ display: "flex" }}>
          <SideMenu />
          <AppNavbar />
          <Stack
            spacing={2}
            sx={{
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
              flex: 1,
              flexDirection: "column",
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
              {/* <Routes>
                <Route path={Path.Home} element={<Chat />} />
                <Route path={Path.Dashboard} element={<Dashboard />} />
                <Route path={Path.Chat} element={<Chat />} />
              </Routes> */}
            </Box>
          </Stack>
        </Box>
      </BrowserRouter>
    </AppTheme>
  );
}
