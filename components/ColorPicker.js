import { Box } from "@chakra-ui/react";
import { ChromePicker } from "react-color";

const ColorPicker = ({ color, setColor }) => {
  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  return (
    <Box padding={"13px"}>
      <ChromePicker
        color={color}
        onChangeComplete={handleChangeComplete}
        width={"260px"}
      />
    </Box>
  );
};

export default ColorPicker;
