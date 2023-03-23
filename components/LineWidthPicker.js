import { Box, Select, Tag, TagLabel } from "@chakra-ui/react";

const LineWidthPicker = ({ lineWidth, setLineWidth }) => {
  const lineWidthOptions = [2, 5, 10, 15, 20];

  const handleChange = (event) => {
    setLineWidth(parseInt(event.target.value, 10));
  };

  return (
    <Box padding={"13px"}>
      <Tag>
        <TagLabel borderRadius={"3px"} htmlFor="lineWidth" minH={"30px"}>
          Line width:{" "}
        </TagLabel>
      </Tag>
      <Select
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
    </Box>
  );
};

export default LineWidthPicker;
