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
            w="100%"
            borderBottomRadius={"xl"}
            bgGradient="linear(to-r, #F6F0EA, #F1DFD1)">

            <Box bg="bg-surface" borderRadius="lg" p={{ base: "4", md: "6" }}>

              <div className="py-1 flex flex-col items-center">
                <Image src={BlockchainGame} width="150" height={150} alt="logo" />
              </div>

              <div className="form-control">
              <label htmlFor="userName" className="text-sm text-gray-500">
                Name
              </label>
              <input
                id="userName"
                type="text"
                // value={userName}
                // onChange={onUserName}
                placeholder="Enter your Name"
                className="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent"
              />
            </div>

            <div className="form-control">
              <label htmlFor="userDoB" className="text-sm text-gray-500">
                Date of Birth
              </label>
              <input
                id="userDoB"
                type="date"
                // value={date}
                // onChange={onDate}
                className="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent"
              />
            </div>

            <div className="form-control">
              <label htmlFor="userEmail" className="text-sm text-gray-500">
                Email
              </label>
              <input
                id="userEmail"
                type="text"
                // value={email}
                // onChange={onEmail}
                placeholder="Enter your email address"
                className="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent"
              />
            </div>

            <div className="form-control">
              <label className="text-sm text-gray-500">
                <input
                  type="checkbox"
                  id="terms"
                  className="form-checkbox inline-block mr-2"
                />
                I agree to the{" "}
                <a href="#" className="text-blue-500">
                  Terms and Conditions
                </a>
              </label>
              <label className="text-sm text-gray-500 mt-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="form-checkbox inline-block mr-2"
                />
                I agree to the{" "}
                <a href="#" className="text-blue-500">
                  Privacy Policy
                </a>
              </label>
            </div>


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
