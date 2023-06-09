import type { NextPage } from "next";
import { useAccount } from "wagmi";

import { WallyButton } from "../components/WallyButton.js";
import  { WallyHeader } from "../components/WallyHeader.js";

import * as StartGame from "../assets/app/StartGame.png";
import * as ReadBook from "../assets/app/ReadBook.png";

import Image from "next/image";
import Link from 'next/link';

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
  useBreakpointValue,
} from "@chakra-ui/react";
import { Footer } from "./Footer";

type Props = {
  header: string;
  subHeader: string;
};

const Landing: NextPage<Props> = (props) => {

  const { isConnected } = useAccount();

  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });

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

            <Box display="flex" flexDirection={flexDirection} width="100%" alignItems="center" justifyContent="center">
              <Box margin={"25"}>
                <Link href="/level1">
                  <Image src={StartGame} alt="Image 1" boxSize={{ base: '100%', md: '50%' }} />
                </Link>
              </Box>
              <Box margin={"25"}>
                <Link href="/memory1">
                  <Image src={ReadBook} alt="Image 2" boxSize={{ base: '100%', md: '50%' }} />
                </Link>
              </Box>
            </Box>

          </Container>
        </Box>
      </Box>

    </>
  );
};

export default Landing;
