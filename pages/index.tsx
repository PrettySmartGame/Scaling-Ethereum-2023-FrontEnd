import type { NextPage } from "next";

import { useAccount, 
        useNetwork,
        useContract,
        useContractRead,
        useSigner,
        useWebSocketProvider } from "wagmi";

import { WallyHeader } from "../components/WallyHeader.js";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'

import { Box, Center, Container, Stack } from "@chakra-ui/react";
import Footer from "./Footer";
import WallyButton from "../components/WallyButton.js";

import { useEffect } from 'react';
import { USER_MANAGEMENT_CONTRACT_MUMBAI } from "../utils/constants";
import USER_MANAGEMENT_ABI from "../assets/contracts/WallyWalletUsers.json";

import * as BlockchainGame from "../assets/app/blockchaingame.png";

type Props = {
  header: string;
  subHeader: string;
};

const Landing: NextPage<Props> = (props) => {

  const { isConnected, address } = useAccount();
  const { chain, chains } = useNetwork();
  const { data: signer } = useSigner();

  const router = useRouter()

  const { data: doesUserExistCall , isError, isLoading} = useContractRead({
    address: USER_MANAGEMENT_CONTRACT_MUMBAI,
    abi: USER_MANAGEMENT_ABI,
    functionName: 'doesUserExist',
    args: [address],
    onSuccess(data) {
      console.log('Success', data)
      if(data) {
        console.log("user exist in the SC");
        router.push('/menu');
      }       
    },    
  });  


  const handleClick = (e: any) => {
    e.preventDefault();
    router.push('/explore');
  };

  useEffect(() => {
     if(isConnected) {
      console.log("check if user exist in the SC");
      console.log("address", address);
      console.log("chain:", chain);
      let result = doesUserExistCall;
      console.log(result);
      // if(result) {
      //   console.log("user exist in the SC");
      //   router.push('/menu');
      // } 

      }
     }
   , [isConnected]); 

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
                <Image src={BlockchainGame} width={"350"} height={"350"} alt="logo" />
              </Center>
            </Box>

            <Stack justify="center" direction="row" padding={"5"}>
              {isConnected && (
                <WallyButton boxShadow="xl" mx={6} onClick={handleClick}>
                  Start Now
                </WallyButton>
            )}
              {!isConnected && (
                <Center>
                  <b>Connect your wallet to start playing.</b>
                </Center>
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
