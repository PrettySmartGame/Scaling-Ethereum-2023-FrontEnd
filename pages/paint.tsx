import type { NextPage } from "next";
import { useAccount } from "wagmi";

import { useState } from "react";

import { WallyButton } from "../components/WallyButton.js";
import { WallyHeader } from "../components/WallyHeader.js";

import Link from "next/link";

import PaintCanvas from "../components/PaintCanvas";
import ColorPicker from "../components/ColorPicker";
import ToolPicker from "../components/ToolPicker";
import LineWidthPicker from "../components/LineWidthPicker";

import { Box, Container, Stack } from "@chakra-ui/react";

type Props = {
  header: string;
  subHeader: string;
};

const Landing: NextPage<Props> = (props) => {
  const { isConnected } = useAccount();

  const [color, setColor] = useState("#000000");
  const [lineWidth, setLineWidth] = useState(5);
  const [tool, setTool] = useState("pen");
  const [imageUrl, setImageUrl] = useState("../assets/web3Identity.png");

  return (
    <>
      <Box maxH="100vh">
        <Box
          maxHeight={"80%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          as="section"
          pt={{ base: "4", md: "8" }}
          pb={{ base: "12", md: "24" }}
          bgGradient={[
            "linear(to-tr, teal.300, yellow.400)",
            "linear(to-t, blue.200, teal.500)",
            "linear(to-b, orange.100, purple.300)",
          ]}
        >
          <WallyHeader />

          <Container
            maxW={"container.lg"}
            bg="bg-surface"
            borderRadius="lg"
            p={{ base: "4", md: "6" }}
            borderBottomRadius={"xl"}
            bgGradient="linear(to-r, #F6F0EA, #F1DFD1)"
          >
            <Box className="flex" display={"flex"} flexDirection={"column"}>
              <PaintCanvas
                width={"200px"}
                height={"100px"}
                color={color}
                lineWidth={lineWidth}
                tool={tool}
                imageUrl={imageUrl} // Pass the imageUrl prop
              />

              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
              >
                <ToolPicker tool={tool} setTool={setTool} />

                <div className="flex-row my-2">
                  <LineWidthPicker
                    lineWidth={lineWidth}
                    setLineWidth={setLineWidth}
                  />
                </div>
                <div className="flex-row my-2">
                  <ColorPicker color={color} setColor={setColor} />
                </div>
              </Box>
            </Box>

            <Stack justify="center" direction="row" padding={"5"}>
              {isConnected && (
                <Link href="/rewards1">
                  <WallyButton boxShadow="xl" mx={6}>
                    Mint
                  </WallyButton>
                </Link>
              )}
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
