import { Box } from "@mui/material";
import React from "react";
import Header from "../../Components/Header";
import BarChart from "../../Components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="BAR CHART" subtitle="Simple Bar chart of data" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
