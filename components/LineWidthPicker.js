import { Box, 
        Select, 
        Tag, 
        TagLabel, 
        FormControl,
        FormLabel,
        } from "@chakra-ui/react";

const LineWidthPicker = ({ lineWidth, setLineWidth }) => {
  const lineWidthOptions = [1, 2, 4, 6, 10, 14, 18];

  const handleChange = (event) => {
    setLineWidth(parseInt(event.target.value, 10));
  };

  return (
    <Box padding={"13px"}>
      <FormControl>
        <FormLabel>Line width:{" "}</FormLabel>
        <Select
          backgroundColor={"white"}
          maxWidth={"100px"}
          id="lineWidth"
          value={lineWidth}
          onChange={handleChange}
        >
          {lineWidthOptions.map((width) => (
            <option key={width} value={width}>
              {width}px
            </option>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default LineWidthPicker;
