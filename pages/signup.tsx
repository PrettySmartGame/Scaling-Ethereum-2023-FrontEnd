import type { NextPage } from "next";
import { useAccount, 
  useNetwork,
  useContract,
  useContractRead,
  useSigner,
  useContractWrite,
  useWebSocketProvider,
  usePrepareContractWrite,
  useProvider, 
  Address} from "wagmi";

import { WallyButton } from "../components/WallyButton.js";
import  { WallyHeader } from "../components/WallyHeader.js";

import * as BlockchainGame from "../assets/app/blockchaingame.png";

import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/router'

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

import { USER_MANAGEMENT_CONTRACT_MUMBAI } from "../utils/constants";
import USER_MANAGEMENT_ABI from "../assets/contracts/WallyWalletUsers.json";
import { useRef, useEffect, useState } from "react";

type Props = {
  header: string;
  subHeader: string;
};

const Landing: NextPage<Props> = (props) => {

  const { isConnected, address } = useAccount();
  const { chain, chains } = useNetwork();
  const { data: signer } = useSigner();

  const router = useRouter()

  // const { config } = usePrepareContractWrite({
  //   address: USER_MANAGEMENT_CONTRACT_MUMBAI,
  //   abi: USER_MANAGEMENT_ABI,
  //   functionName: 'registerUser',
  //   args: ["name", "email", address, 0, 0],
  // })  
  // const { data: registerUserCall, isLoading, isSuccess, write } = useContractWrite(config)

  const provider = useWebSocketProvider();

  const contract = useContract({
    address: USER_MANAGEMENT_CONTRACT_MUMBAI,
    abi: USER_MANAGEMENT_ABI,
    signerOrProvider: signer,
  })

  const registerUserCall = async (_name : string, _email : string, _address : Address) => {
    const tx = await contract?.registerUser(_name, _email, _address, 0, 0, {
      maxPriorityFeePerGas: await provider?.send(
        "eth_maxPriorityFeePerGas",
        []
      ),
    });
    const txHash = tx.hash;

    console.log("txHash", txHash);

    if (txHash) {
      router.push('/menu')
    }

  };

  // const { data: getUserInfoData , isError, isLoading} = useContractRead({
  //   address: USER_MANAGEMENT_CONTRACT_MUMBAI,
  //   abi: USER_MANAGEMENT_ABI,
  //   functionName: 'getUserInfo',
  //   args: [address],
  //   onSuccess(data) {
  //     console.log('Success', data)
  //   },    
  // });  

  useEffect(() => {
    if(isConnected) {
     console.log("check if user exist in the SC");
     console.log("address", address);
     console.log("chain:", chain);

     }
    }
  , [isConnected]);   

  const handleClick = (e: any) => {
    e.preventDefault();

    const inputElementName = inputRefName.current;
    const inputElementDoB = inputRefDoB.current;
    const inputElementEmail = inputRefEmail.current;
    const inputElementCheck1 = inputRefCheck1.current;
    const inputElementCheck2 = inputRefCheck2.current;

    let validForm = true;

    if (inputElementName) {
      if (inputElementName.value === "") {
        validForm = false;
        console.log("name is empty");
      } else {
        console.log("name", inputElementName.value);
      }
    }
    if (inputElementDoB) {
      if (inputElementDoB.value === "") {
        validForm = false;
        console.log("DoB is empty");
      } else {
        console.log("DoB", inputElementDoB.value);
      }
    }
    if (inputElementEmail) {
      if (inputElementEmail.value === "") {
        validForm = false;
        console.log("email is empty");
      } else {
        console.log("email", inputElementEmail.value);
      }
    }
    if (inputElementCheck1) {
      if (inputElementCheck1.checked === false) {
        validForm = false;
        console.log("check1 is empty");
      }
    }
    if (inputElementCheck2) {
      if (inputElementCheck2.checked === false) {
        validForm = false;
        console.log("check2 is empty");
      }
    }

    console.log("validForm", validForm);

    if (validForm && inputElementName && inputElementEmail && address) {
      registerUserCall(inputElementName.value, inputElementEmail.value, address);
    }


  };

  const inputRefName = useRef(null);
  const inputRefEmail = useRef(null);
  const inputRefDoB = useRef(null);
  const inputRefCheck1 = useRef(null);
  const inputRefCheck2 = useRef(null);

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
                      ref={inputRefName}
                    />

                    <Input
                      id="userDoB"
                      placeholder="Date of Birth"
                      size="md"
                      type="date"
                      width={'350'}
                      bgColor="white"
                      ref={inputRefDoB}
                      />

                    <Input id="userEmail"
                      type="email"
                      placeholder="Enter your email address"
                      width={'250'}
                      bgColor="white"
                      ref={inputRefEmail}
                    />
                    
                    <div>
                      <Checkbox 
                        id="check1" 
                        bgColor="white" 
                        marginRight={"4"}
                        ref={inputRefCheck1}>
                      </Checkbox>
                      <span>
                      I agree to the{" "}
                          <a href="#" className="text-blue-500">
                            Terms and Conditions
                          </a>
                      </span>
                    </div>

                    <div>
                      <Checkbox 
                        id="check2" 
                        bgColor="white" 
                        marginRight={"4"}
                        ref={inputRefCheck2}>
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
                  <WallyButton mx={6} onClick={handleClick}>Get Started</WallyButton>
              )}
            </Stack>
          </Container>
        </Box>
      </Box>

    </>
  );
};

export default Landing;
