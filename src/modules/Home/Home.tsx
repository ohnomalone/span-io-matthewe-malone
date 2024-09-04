import {
  Button,
  Container,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Bar = () => {
  return <LinearProgress variant="determinate" value={0} />;
};

export const Home = () => {
  const [bars, setBars] = useState<number[]>([]);
// TODO: hold state of which LinearProgress bar is filling
// then update the state to the next one when that finishes

  const handleClick = () => {
    setBars([...bars, 1]);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1">
        Home
      </Typography>
      <Container maxWidth="sm">
        <Stack spacing={2}>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Add Bar
          </Button>
          {bars.map(() => (
            <Bar />
          ))}
        </Stack>
      </Container>
    </Container>
  );
};
