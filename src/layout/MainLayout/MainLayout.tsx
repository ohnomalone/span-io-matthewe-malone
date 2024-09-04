import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import HeaderNav from "../HeaderNav/HEaderNav";

const MainLayout = () => {
  return (
    <Stack direction="column" sx={{ height: "100vh", overflow: "hidden" }}>
      <HeaderNav />
      <Box component="main" sx={{ flexGrow: 1, overflow: "auto" }}>
        <Outlet />
      </Box>
    </Stack>
  );
};

export default MainLayout;
