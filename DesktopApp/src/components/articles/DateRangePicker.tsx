import {
    Box,
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
} from "@chakra-ui/react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangePicker = ({ dateRange, setDateRange }: { dateRange: { startDate: Date; endDate: Date; }, setDateRange: any }) => {
    const handleDateRangeChange = (ranges: any) => {
        const { selection } = ranges;
        setDateRange({
            startDate: selection.startDate,
            endDate: selection.endDate,
        });
    };

    return (
        <Popover>
            <PopoverTrigger>
                <Button size="md" variant="outline" minW="150px" fontWeight="normal">
                    {dateRange.startDate && dateRange.endDate
                        ? `${format(dateRange.startDate, "dd/MM/yyyy")} - ${format(dateRange.endDate, "dd/MM/yyyy")}`
                        : "Select Date Range"}
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <Box p={4}>
                    <DateRange
                        editableDateInputs={true}
                        onChange={handleDateRangeChange}
                        moveRangeOnFirstSelection={false}
                        ranges={[{ ...dateRange, key: "selection" }]}
                        maxDate={new Date()}

                    />
                </Box>
            </PopoverContent>
        </Popover>
    );
};

export default DateRangePicker;
