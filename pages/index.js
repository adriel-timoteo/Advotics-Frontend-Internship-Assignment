import AdvoticsNavbar from "./navbar";
import AdvoticsSidebar from "./sidebar";
import { graphData, chartOptions } from "../demo-data/graph-data";

import React from "react";

import {
  Accordion,
  AccordionSummary,
  Box,
  Typography,
  Toolbar,
  createTheme,
  AccordionDetails,
  Paper,
  Grid,
  Link,
  IconButton,
  FormControl,
  MenuItem,
  Select,
  ClickAwayListener,
  Collapse,
  Button,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CloseIcon from "@mui/icons-material/Close";

import Head from "next/head";
import Image from "next/image";

import { addDays, isSameDay, startOfMonth, isValid, format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const theme = createTheme({
    typography: {
      h1: {
        fontFamily: "Source Sans pro",
        fontSize: 40,
        fontWeight: 600,
        color: "#707070C4",
        letterSpacing: 1,
      },
      h2: {
        fontFamily: "Open Sans",
        fontSize: 24,
        fontWeight: 700,
        color: "#4d4f5c",
      },
      h3: {
        fontFamily: "Source Sans Pro",
        fontSize: 20,
        fontWeight: 400,
        color: "#4D4F5C",
      },
      h4: {
        fontFamily: "Source Sans pro",
        fontSize: 20,
        fontWeight: 500,
        color: "white",
      },
      h5: {
        fontFamily: "Source Sans pro",
        fontSize: 14,
        fontWeight: 500,
        color: "#00000099",
      },
      h6: {
        fontFamily: "Open Sans",
        fontSize: 16,
        fontWeight: 400,
        color: "#8B8B8B",
      },
      subtitle1: {
        fontFamily: "Open Sans",
        fontSize: 14,
        fontWeight: 300,
      },
      subtitle2: {
        fontFamily: "Open Sans",
        fontSize: 12,
        fontWeight: 300,
        color: "#707070C4",
      },
      body1: {
        fontFamily: "Source Sans pro",
        fontSize: 16,
        fontWeight: 300,
        color: "#000000DE",
      },
      body2: {
        fontFamily: "Source Sans pro",
        fontSize: 12,
        fontWeight: 300,
        color: "#00000099",
      },
    },
  });

  // table range
  const [range, setRange] = React.useState("");
  const handleChange = (event) => {
    setRange(event.target.value);
  };

  // Period open/close
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const handleClickAway = () => {
    setOpen(false);
  };

  // Calendar
  var today = new Date();
  var yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  const [state, setState] = React.useState([
    {
      startDate: addDays(new Date(), -7),
      endDate: yesterday,
      key: "selection",
    },
  ]);

  var selectedStartDate = state[0].startDate.toLocaleDateString('id-ID', {year: 'numeric', month: 'long', day: 'numeric'});
  var selectedEndDate = state[0].endDate.toLocaleDateString('id-ID', {year: 'numeric', month: 'long', day: 'numeric'});

  function SKUcard(props) {
    if (props.main == true) {
      return (
        <Paper sx={{ backgroundColor: "#FFE7BD", my: 1 }}>
          <Box display="flex" sx={{ flexDirection: "row" }}>
            <Image
              src="/Product-Competitor.png"
              alt="product"
              width="90"
              height="90"
            />
            <Box
              display="flex"
              sx={{
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h3" sx={{ pt: 2, color: "black", pl: 2 }}>
                [Nama Product]
              </Typography>
              <Box
                display="flex"
                sx={{
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h5" sx={{ py: 2, pl: 2 }}>
                  Rp XXXX
                </Typography>
                <Typography variant="h5" sx={{ py: 2, pl: 2 }}>
                  [Jml terjual]
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      );
    } else {
      return (
        <Paper sx={{ my: 1 }}>
          <Box display="flex" sx={{ flexDirection: "row" }}>
            <Image
              src="/Product-Competitor.png"
              alt="product"
              width="70"
              height="70"
            />
            <Box
              display="flex"
              sx={{
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="body1" sx={{ pt: 1, color: "black", pl: 2 }}>
                [Nama Product]
              </Typography>
              <Box
                display="flex"
                sx={{
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Typography variant="body2" sx={{ py: 1, pl: 2 }}>
                  Rp XXXX
                </Typography>
                <Typography variant="body2" sx={{ py: 1, pl: 2 }}>
                  [Jml terjual]
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      );
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Head>
          <title>Advotics Dashboard</title>
          <meta
            name="description"
            content="Created for Frontend Internship Technical Test"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <AdvoticsNavbar />
        <AdvoticsSidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, pt: 4, pl: 12, pr: 3 }}
          backgroundColor="#F7F7F7"
          maxWidth="100vw"
          minHeight="100vh"
        >
          <Toolbar />
          <Box
            display="flex"
            sx={{
              flexDirection: "row",
              pb: 4,
            }}
          >
            <Typography variant="h1">Dashboard</Typography>
            <ClickAwayListener onClickAway={handleClickAway}>
              <Box
                sx={{ marginLeft: "auto" }}
                style={open ? { width: "1000px" } : { width: "600px" }}
              >
                <Paper sx={{ px: 2, py: 1, zIndex: 1, position: "absolute" }}>
                  <Collapse in={open} collapsedSize={40}>
                    <Collapse
                      in={open}
                      collapsedSize={500}
                      orientation="horizontal"
                    >
                      <Box
                        display="flex"
                        sx={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Image
                          src="/calendar.png"
                          alt="logo"
                          width="25"
                          height="25"
                        />
                        <Typography variant="h6" sx={{ px: 2 }}>
                          Period
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{ px: 1, color: "#6A6A6A" }}
                        >
                          {selectedStartDate} - {selectedEndDate}
                        </Typography>
                        <IconButton
                          aria-label="expand"
                          onClick={handleClick}
                          sx={{ marginLeft: "auto" }}
                          style={
                            open
                              ? { marginRight: "0px" }
                              : { marginRight: "390px" }
                          }
                        >
                          {open ? <CloseIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                      </Box>
                      <Box>
                        <DateRangePicker
                          onChange={(item) => setState([item.selection])}
                          showSelectionPreview={true}
                          moveRangeOnFirstSelection={false}
                          maxDate={yesterday}
                          minDate={addDays(new Date(), -180)}
                          months={2}
                          ranges={state}
                          direction="horizontal"
                          inputRanges={[]}
                          staticRanges={[
                            {
                              label: "Yesterday",
                              range: () => ({
                                startDate: yesterday,
                                endDate: yesterday,
                              }),
                              isSelected(range) {
                                const yesterdayRange = this.range();
                                return (
                                  isSameDay(
                                    range.startDate,
                                    yesterdayRange.startDate
                                  ) &&
                                  isSameDay(
                                    range.endDate,
                                    yesterdayRange.endDate
                                  )
                                );
                              },
                            },
                            {
                              label: "Last 7 days",
                              range: () => ({
                                startDate: addDays(new Date(), -7),
                                endDate: yesterday,
                              }),
                              isSelected(range) {
                                const weekRange = this.range();
                                return (
                                  isSameDay(
                                    range.startDate,
                                    weekRange.startDate
                                  ) &&
                                  isSameDay(range.endDate, weekRange.endDate)
                                );
                              },
                            },
                            {
                              label: "Last 30 days",
                              range: () => ({
                                startDate: addDays(new Date(), -30),
                                endDate: yesterday,
                              }),
                              isSelected(range) {
                                const thirtyRange = this.range();
                                return (
                                  isSameDay(
                                    range.startDate,
                                    thirtyRange.startDate
                                  ) &&
                                  isSameDay(range.endDate, thirtyRange.endDate)
                                );
                              },
                            },
                            {
                              label: "This Month",
                              range: () => ({
                                startDate: startOfMonth(new Date()),
                                endDate: yesterday,
                              }),
                              isSelected(range) {
                                const monthRange = this.range();
                                return (
                                  isSameDay(
                                    range.startDate,
                                    monthRange.startDate
                                  ) &&
                                  isSameDay(range.endDate, monthRange.endDate)
                                );
                              },
                            },
                            {
                              label: "Custom",
                              range: () => ({
                                startDate: new Date(),
                                endDate: new Date(),
                              }),
                              isSelected(range) {
                                return (
                                  isValid(range.startDate) &&
                                  isValid(range.endDate) &&
                                  !(
                                    isSameDay(range.startDate, yesterday) &&
                                    isSameDay(range.endDate, yesterday)
                                  ) &&
                                  !(
                                    isSameDay(
                                      range.startDate,
                                      addDays(new Date(), -7)
                                    ) && isSameDay(range.endDate, yesterday)
                                  ) &&
                                  !(
                                    isSameDay(
                                      range.startDate,
                                      addDays(new Date(), -30)
                                    ) && isSameDay(range.endDate, yesterday)
                                  ) &&
                                  !(
                                    isSameDay(
                                      range.startDate,
                                      startOfMonth(new Date())
                                    ) && isSameDay(range.endDate, yesterday)
                                  )
                                );
                              },
                            },
                          ]}
                          rangeColors={["#00a351", "#3ecf8e", "#fed14c"]}
                          showDateDisplay={false}
                        />
                      </Box>
                    </Collapse>
                  </Collapse>
                </Paper>
              </Box>
            </ClickAwayListener>
          </Box>

          <Accordion
            style={{ boxShadow: "none" }}
            defaultExpanded
            disableGutters
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{ color: "white", pointerEvents: "auto" }}
                />
              }
              aria-controls="marketinsights"
              id="marketinsightsheader"
              sx={{ backgroundColor: "#37B04C", pointerEvents: "none" }}
            >
              <Typography variant="h4" sx={{ flexGrow: 1 }}>
                MARKET INSIGHTS
              </Typography>
              <Image
                src="/Help.png"
                alt="logo"
                width="25"
                height="10"
                sx={{ flexGrow: 1 }}
              />
              <Link
                variant="subtitle1"
                sx={{ px: 1, color: "white", pointerEvents: "auto" }}
                color="inherit"
                href="#"
              >
                Click Here for Help
              </Link>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#F7F7F7", px: 0 }}>
              <Grid container sx={{ py: 2 }}>
                <Grid item xs={6} lg={4} xl={3}>
                  <Paper>
                    <Box
                      display="flex"
                      sx={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box sx={{ pb: 1 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ pl: 2, py: 1.5, color: "#707070C4" }}
                        >
                          Sales Turnover
                        </Typography>
                        <Typography variant="h2" sx={{ pl: 2 }}>
                          Rp 3,600,000
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ pl: 2, py: 1, color: "red" }}
                          display="inline"
                        >
                          <ArrowDownwardIcon sx={{ fontSize: 12 }} />
                          13.8%
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ pl: 1, py: 1 }}
                          display="inline"
                        >
                          last period in products sold
                        </Typography>
                      </Box>
                      <Box sx={{ alignSelf: "flex-end", py: 1 }}>
                        <Image
                          src="/Sales-Turnover.png"
                          alt="logo"
                          width="58"
                          height="50"
                        />
                      </Box>
                      <Box sx={{ py: 1.5, pr: 1 }}>
                        <IconButton aria-label="options">
                          <MoreVertIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Paper>
                    <Box
                      display="flex"
                      sx={{ flexDirection: "row", py: 2, alignItems: "center" }}
                    >
                      <Typography
                        variant="h3"
                        sx={{ px: 2, py: 1, color: "#707070C4" }}
                      >
                        AVERAGE PURCHASE VALUE
                      </Typography>
                      <FormControl
                        sx={{ m: 1, minWidth: 120, marginLeft: "auto" }}
                        size="small"
                      >
                        <Select
                          labelId="graph-range-select"
                          id="range-select"
                          value={range}
                          onChange={handleChange}
                          defaultValue={4}
                        >
                          <MenuItem value={1}>Yesterday</MenuItem>
                          <MenuItem value={2}>Last 7 days</MenuItem>
                          <MenuItem value={3}>Last 30 days</MenuItem>
                          <MenuItem value={4}>This month</MenuItem>
                          <MenuItem value={5}>Last 6 months</MenuItem>
                        </Select>
                      </FormControl>
                      <IconButton aria-label="options" sx={{ mr: 1 }}>
                        <MoreVertIcon />
                      </IconButton>
                    </Box>
                    <Bar data={graphData} height={150} options={chartOptions} />
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper>
                    <Box
                      display="flex"
                      sx={{ flexDirection: "column", py: 1, px: 1 }}
                    >
                      <Box
                        display="flex"
                        sx={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Typography
                          variant="h3"
                          sx={{ px: 2, py: 1, color: "#707070C4" }}
                        >
                          BEST SELLING SKU
                        </Typography>
                        <IconButton
                          aria-label="options"
                          sx={{ mr: 1, ml: "auto" }}
                        >
                          <MoreVertIcon />
                        </IconButton>
                      </Box>
                      <SKUcard main />
                      <SKUcard />
                      <SKUcard />
                      <SKUcard />
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper>
                    <Box
                      display="flex"
                      sx={{ flexDirection: "column", py: 1, px: 1 }}
                    >
                      <Box
                        display="flex"
                        sx={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Typography
                          variant="h3"
                          sx={{ px: 2, py: 1, color: "#707070C4" }}
                        >
                          TOP COMPETITOR SKU
                        </Typography>
                        <IconButton
                          aria-label="options"
                          sx={{ mr: 1, ml: "auto" }}
                        >
                          <MoreVertIcon />
                        </IconButton>
                      </Box>
                      <SKUcard main />
                      <SKUcard />
                      <SKUcard />
                      <SKUcard />
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
