import type { NextPage } from "next";
import { useAccount } from "wagmi";

import { WallyHeader } from "../components/WallyHeader.js";

import * as BlockchainGame from "../assets/blockchaingame.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'

import { Box, Center, Container, Stack } from "@chakra-ui/react";
import Footer from "./Footer";
import WallyButton from "../components/WallyButton.js";

type Props = {
  header: string;
  subHeader: string;
};

const Landing: NextPage<Props> = (props) => {
  const { isConnected } = useAccount();

  const router = useRouter()

  const handleClick = (e: any) => {
    console.log("clicked") ;
    e.preventDefault();
    console.log("goToPaint");
    router.push('/explore');

  };

  return (
    <>
      <Box maxH="100vh">
        <Box
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
                <Image src={BlockchainGame} alt="logo" />
              </Center>
            </Box>

            <Stack justify="center" direction="row" padding={"5"}>
              {isConnected && (
                <WallyButton boxShadow="xl" mx={6} onClick={handleClick}>
                  Start Now
                </WallyButton>
            )}
            </Stack>
          </Container>
        </Box>
        {/* <Footer /> */}
      </Box>
    </>
  );
};

export default Landing;
