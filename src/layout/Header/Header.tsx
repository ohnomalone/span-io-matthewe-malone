import { AppBar, Toolbar, Typography, Stack } from "@mui/material";
import ElectricBoltIconIcon from "@mui/icons-material/ElectricBolt";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar disableGutters>
        <Stack direction="row" alignItems="center" spacing={2}>
          <ElectricBoltIconIcon sx={{ ml: 1 }} />
          <Typography>Span</Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
