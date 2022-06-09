import React from "react";

import { Box } from "@mui/material";
import { addDays, isSameDay, startOfMonth, isValid } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

const AdvoticsCalendar = () => {

  //Date picker
  var today = new Date();
  var yesterday = new Date();
  yesterday.setDate(today.getDate()-1);
  const [state, setState] = React.useState([
    {
      startDate: addDays(new Date(), -7),
      endDate: yesterday,
      key: 'selection'
    }
  ]);

  return (
    <Box>
      <DateRangePicker
        onChange={item => setState([item.selection])}
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
                isSameDay(range.startDate, yesterdayRange.startDate) &&
                isSameDay(range.endDate, yesterdayRange.endDate)
              );
            }
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
                isSameDay(range.startDate, weekRange.startDate) &&
                isSameDay(range.endDate, weekRange.endDate)
              );
            }
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
                isSameDay(range.startDate, thirtyRange.startDate) &&
                isSameDay(range.endDate, thirtyRange.endDate)
              );
            }
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
                isSameDay(range.startDate, monthRange.startDate) &&
                isSameDay(range.endDate, monthRange.endDate)
              );
            }
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
                !(isSameDay(range.startDate, yesterday) &&
                isSameDay(range.endDate, yesterday)) &&
                !(isSameDay(range.startDate, addDays(new Date(), -7)) &&
                isSameDay(range.endDate, yesterday)) &&
                !(isSameDay(range.startDate, addDays(new Date(), -30)) &&
                isSameDay(range.endDate, yesterday)) &&
                !(isSameDay(range.startDate, startOfMonth(new Date())) &&
                isSameDay(range.endDate, yesterday))
              );
            }
          },
          
        ]}
        rangeColors={['#00a351', '#3ecf8e', '#fed14c']}
        showDateDisplay={false}
      />
    </Box>
  );
}

export default AdvoticsCalendar;
