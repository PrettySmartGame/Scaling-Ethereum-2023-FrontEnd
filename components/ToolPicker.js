import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faPaintBrush,
  faSprayCan,
  faEraser,
} from "@fortawesome/free-solid-svg-icons";
import { Box,
  FormControl,
  FormLabel,
 } from "@chakra-ui/react";

const ToolPicker = ({ tool, setTool }) => {
  const tools = [
    { name: "pen", icon: faPencilAlt },
    { name: "brush", icon: faPaintBrush },
    { name: "spray", icon: faSprayCan },
    { name: "eraser", icon: faEraser },
  ];

  return (
    <Box padding={"13px"}>
      <FormControl>
        <FormLabel>Select Tool:{" "}</FormLabel>
        {tools.map((t) => (
          <button
            key={t.name}
            onClick={() => setTool(t.name)}
            style={{
              backgroundColor: tool === t.name ? "lightgray" : "gray",
              color: tool === t.name ? "blue" : "black",
              margin: "6px",
              width: "50px",
              height: "50px",
              borderRadius: "5px",
              marginBottom: "8px",
            }}
          >
            <FontAwesomeIcon icon={t.icon} />
          </button>
        ))}
      </FormControl>
    </Box>
  );
};

export default ToolPicker;
