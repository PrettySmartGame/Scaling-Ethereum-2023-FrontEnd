import type { NextPage } from "next";
import { useAccount } from "wagmi";

import { WallyButton } from "../components/WallyButton.js";
import  { WallyHeader } from "../components/WallyHeader.js";

import * as KidsWithTablet from "../assets/KidsWithTablet.png";
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
  Center,
} from "@chakra-ui/react";
import { Footer } from "./Footer";

type Props = {
  header: string;
  subHeader: string;
};

const Landing: NextPage<Props> = (props) => {

  const { isConnected } = useAccount();

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

            <Box bg="bg-surface" borderRadius="lg" p={{ base: "4", md: "6" }}>

                <Center>
                  <Image src={KidsWithTablet} alt="kids" />
                </Center>

            </Box>

            <Stack justify="center" direction="row" padding={"5"}>
              {isConnected && (
                <Link href="/signup">
                  <WallyButton boxShadow='xl' mx={6}>Explore for Free</WallyButton>
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
