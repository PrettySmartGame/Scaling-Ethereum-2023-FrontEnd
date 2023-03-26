import type { NextPage } from "next";

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
} from "@chakra-ui/react";
import { Footer } from "./Footer";

import { NFTS_MANAGEMENT_CONTRACT_MUMBAI } from "../utils/constants";
import NFTs_MANAGEMENT_ABI from "../assets/contracts/WallyWalletNFTs.json";
import { useRef, useEffect, useState } from "react";

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
type Props = {
  header: string;
  subHeader: string;
};

const Landing: NextPage<Props> = (props) => {

  const { isConnected, address } = useAccount();
  const { chain, chains } = useNetwork();
  const { data: signer } = useSigner();

  const [images, setImages] = useState([{}]);

  const getFileURL = (cid: any) => {
    return `https://${cid}.ipfs.dweb.link/wallywalletpaint.png`;
  };


  const { data: getUserNFTs , isError, isLoading} = useContractRead({
    address: NFTS_MANAGEMENT_CONTRACT_MUMBAI,
    abi: NFTs_MANAGEMENT_ABI,
    functionName: 'tokenMetadataOfOwner',
    args: [address],
    onSuccess(data) {
      console.log('Success', data)
      if(data) {
        console.log("User NFTs");
        const myArray = Object.values(data);
        console.log(myArray);
        setImages(myArray);
      }       
    },    
  });  

  useEffect(() => {
     if(isConnected) {
      console.log("check if user exist in the SC");
      console.log("address", address);
      console.log("chain:", chain);
      let result = getUserNFTs;
      console.log(result);

      }
     }
   , [isConnected]); 

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
            maxW="container.lg"
            borderBottomRadius={"xl"}
            bgGradient="linear(to-r, #F6F0EA, #F1DFD1)">

            <Box bg="bg-surface" borderRadius="lg" p={{ base: "4", md: "6" }}>

              <h1><b>NFT Collection</b></h1>
              <br/>

              <div className="image-grid">
                {images && images.map((image, index) => (
                 <div>
                    <h1>{image.title}</h1>
                    <h1>{image.subtitle}</h1>
                    <img src={getFileURL(image.cid)} alt="image-{$index}" width={200} height={200} />
                  </div>
                ))}
              </div>              

            </Box>

            <Stack justify="center" direction="row" padding={"5"}>
              {isConnected && (
                <Link href="/menu">
                  <WallyButton boxShadow='xl' mx={6}>Keep Playing</WallyButton>
                </Link>
              )}
            </Stack>
          </Container>
        </Box>
      </Box>
      <style jsx>{`

            .image-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 1rem;
            }

            @media (max-width: 768px) {
              .image-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }

            @media (max-width: 480px) {
              .image-grid {
                grid-template-columns: repeat(1, 1fr);
              }
            }

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
