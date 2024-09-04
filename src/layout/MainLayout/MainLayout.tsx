import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const MainLayout = () => {
  return (
    <Stack direction="column" sx={{ height: "100vh", overflow: "hidden" }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, overflow: "auto" }}>
        <Outlet />
      </Box>
    </Stack>
  );
};

export default MainLayout;
