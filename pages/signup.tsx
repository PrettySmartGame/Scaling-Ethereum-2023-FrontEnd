import type { NextPage } from "next";
import { useAccount } from "wagmi";

import { WallyButton } from "../components/WallyButton.js";
import  { WallyHeader } from "../components/WallyHeader.js";

import * as KidsWithTablet from "../assets/KidsWithTablet.png";
import * as BlockchainGame from "../assets/blockchaingame.png";

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
  Input,
  InputGroup,
  Checkbox,
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

              <Stack spacing={3}>

                <Center>
                  <Image src={BlockchainGame} width={'250'} height={'250'} alt="logo" />
                </Center>

                <Center>
                  <Box width={"300"}>
                    <Stack spacing={3}>

                      <Input id="userName"
                      type="text"
                      placeholder="Enter your Name"
                      width={'250'}
                      bgColor="white"
                    />

                    {/* <Input
                      placeholder="Date of Birth"
                      size="md"
                      type="date"
                      width={'350'}
                      bgColor="white"
                      /> */}

                    <Input id="userEmail"
                      type="email"
                      placeholder="Enter your email address"
                      width={'250'}
                      bgColor="white"
                    />
                    
                    <div>
                      <Checkbox bgColor="white" marginRight={"4"}>
                      </Checkbox>
                      <span>
                      I agree to the{" "}
                          <a href="#" className="text-blue-500">
                            Terms and Conditions
                          </a>
                      </span>
                    </div>

                    <div>
                      <Checkbox bgColor="white" marginRight={"4"}>
                      </Checkbox>
                      <span>
                      I agree to the{" "}
                      <a href="#" className="text-blue-500">
                        Privacy Policy
                        </a>
                      </span>
                    </div>

                    </Stack>
                  </Box>
                </Center>

              </Stack>

            </Box>

            <Stack justify="center" direction="row" padding={"5"}>
              {isConnected && (
                <Link href="/menu">
                  <WallyButton boxShadow='xl' mx={6}>Get Started</WallyButton>
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
