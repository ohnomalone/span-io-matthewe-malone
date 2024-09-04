import { useEffect, useState } from "react";
import {
  Button,
  Container,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";

const Bar = ({ value }: { value: number }) => {
  return <LinearProgress variant="determinate" value={value} />;
};

export const Home = () => {
  const [bars, setBars] = useState<number[]>([]);
  const [currentProgressBarIndex, setCurrentProgressBarIndex] =
    useState<number>(-1);

  const handleClick = () => {
    setBars([...bars, 0]);
  };

  useEffect(() => {
    if (currentProgressBarIndex < bars.length - 1) {
      setCurrentProgressBarIndex(currentProgressBarIndex + 1);
    }
  }, [bars]);

  useEffect(() => {
    if (currentProgressBarIndex >= 0) {
      const updatedBars = [...bars];
      updatedBars[currentProgressBarIndex] = 100;
      setBars(updatedBars);
    }
  }, [currentProgressBarIndex]);
 
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
          {bars.map((value, index) => (
            <Bar key={index} value={value} />
          ))}
        </Stack>
      </Container>
    </Container>
  );
};
