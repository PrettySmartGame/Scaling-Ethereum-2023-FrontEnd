import type { NextPage } from "next";
import { useAccount } from "wagmi";

import React, { useState } from 'react';

import { WallyButton } from "../components/WallyButton.js";
import  { WallyHeader } from "../components/WallyHeader.js";

import * as StartGame from "../assets/StartGame.png";
import * as ReadBook from "../assets/ReadBook.png";

import Image from "next/image";
import Link from 'next/link';

import { StepElement } from "../components/level1/stepElement";

import PaintCanvas from '../components/PaintCanvas';
import ColorPicker from '../components/ColorPicker';
import ToolPicker from '../components/ToolPicker';
import LineWidthPicker from '../components/LineWidthPicker';

import {
  Box,
  Button,
  Container,
  VStack,
  HStack,
  StackDivider,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/react";
import { Footer } from "./Footer";

type Props = {
  header: string;
  subHeader: string;
};

const Landing: NextPage<Props> = (props) => {

  const { isConnected } = useAccount();

  const [color, setColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(5);
  const [tool, setTool] = useState('pen');
  const [imageUrl, setImageUrl] = useState('../assets/web3Identity.png');


  return (
    <>
      <Box maxH="100vh">

        <Box
          h="100vh"
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
            w="100%"
            borderBottomRadius={"xl"}
            bgGradient="linear(to-r, #F6F0EA, #F1DFD1)">

            <Box bg="bg-surface" borderRadius="lg" p={{ base: "4", md: "6" }}>

            <div className="flex">
        <div className="w-1/2 bg-white-500 h-screen">
          <PaintCanvas
                width={500}
                height={600}
                color={color}
                lineWidth={lineWidth}
                tool={tool}
                imageUrl={imageUrl} // Pass the imageUrl prop
              />
        </div>
        <div className="w-1/2 flex flex-col">
          <div className="flex-row my-2">
            <ToolPicker tool={tool} setTool={setTool} />
          </div>
          <div className="flex-row my-2">
            <LineWidthPicker lineWidth={lineWidth} setLineWidth={setLineWidth} />
          </div>
          <div className="flex-row my-2">
            <ColorPicker color={color} setColor={setColor} />
          </div>
        </div>
      </div>

            </Box>

            <Stack justify="center" direction="row" padding={"5"}>
              {/* {isConnected && (
                <Link href="/menu">
                  <WallyButton boxShadow='xl' mx={6}>Get Started</WallyButton>
                </Link>
              )} */}
            </Stack>
          </Container>
        </Box>
      </Box>

    </>
  );
};

export default Landing;
