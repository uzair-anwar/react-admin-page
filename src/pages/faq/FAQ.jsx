import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Header from "../../Components/Header";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently asked questions page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Import Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            React Admin Dashboard Tutorial from scratch. We will be using React,
            Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid
            to build this entire application.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Import Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            React Admin Dashboard Tutorial from scratch. We will be using React,
            Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid
            to build this entire application.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
