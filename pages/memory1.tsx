import type { NextPage } from "next";
import { useAccount } from "wagmi";

import { WallyButton } from "../components/WallyButton.js";
import  { WallyHeader } from "../components/WallyHeader.js";

import * as StartGame from "../assets/StartGame.png";
import * as ReadBook from "../assets/ReadBook.png";

import Image from "next/image";
import Link from 'next/link';

import { StepElement } from "../components/level1/stepElement";


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
  Center,
} from "@chakra-ui/react";
import { Footer } from "./Footer";

type Props = {
  header: string;
  subHeader: string;
};

type StepData = {
  title: string;
  active: boolean;
  complete: boolean;
  urlPath: string;
};

const Landing: NextPage<Props> = (props) => {

  const { isConnected } = useAccount();

  const currentStep = 1;

  const step1Data: StepData = {
    title: "Memory - Identity in Web 3",
    active: currentStep >= 1,
    complete: currentStep > 1,
    urlPath: "/memory-game"
  };
  const step2Data: StepData = {
    title: "Memory - Security",
    active: currentStep >= 2,
    complete: currentStep > 2,
    urlPath: "/memory-game"
  };
  const step3Data : StepData = {
    title: "Memory - Claim Your Tokens",
    active: currentStep >= 3,
    complete: currentStep > 3,
    urlPath: "/memory-game"
  };
  const step4Data: StepData = {
    title: "Memory - Transfer Tokens",
    active: currentStep >= 4,
    complete: currentStep > 4,
    urlPath: "/memory-game"
  };


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
            borderBottomRadius={"xl"}
            bgGradient="linear(to-r, #F6F0EA, #F1DFD1)"
            maxW="container.lg"
            >
              <Center>
                <Box bg="bg-surface" borderRadius="lg" p={{ base: "4", md: "6" }}>
                      <StepElement data={step1Data} />
                      <StepElement data={step2Data} />
                      <StepElement data={step3Data} />
                      <StepElement data={step4Data} />
                </Box>
              </Center>

            <Stack justify="center" direction="row" padding={"5"}>
            </Stack>
          </Container>
        </Box>
      </Box>
      <style jsx>{`
          .container-l1 {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 55vh;
            width: 50vw;
            background-image: url("../assets/map01.png");
          }

          .container2-l1 {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 55vh;
            width: 50vw;
          }
        `}</style>

    </>
  );
};

export default Landing;
