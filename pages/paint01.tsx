import type { NextPage } from "next";

import { WallyButton } from "../components/WallyButton.js";
import { WallyHeader } from "../components/WallyHeader.js";

import Link from "next/link";

import PaintCanvas from "../components/PaintCanvas";
import ColorPicker from "../components/ColorPicker";
import ToolPicker from "../components/ToolPicker";
import LineWidthPicker from "../components/LineWidthPicker";

import ReactAudioPlayer from "react-audio-player";

import { Box, 
        Container, 
        Stack, 
        useBreakpointValue,
        Center } from "@chakra-ui/react";

import { Web3Storage } from 'web3.storage';
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

import { NFTS_MANAGEMENT_CONTRACT_MUMBAI } from "../utils/constants";
import NFTs_MANAGEMENT_ABI from "../assets/contracts/WallyWalletNFTs.json";
import { useRouter } from 'next/router'

type Props = {
  header: string;
  subHeader: string;
};

export const WEB3STORAGE_API_KEY = process.env.WEB3STORAGE_API_KEY || "";

const Paint: NextPage<Props> = (props) => {

  const { isConnected, address } = useAccount();
  const { chain, chains } = useNetwork();
  const { data: signer } = useSigner();
  const router = useRouter()


  const [color, setColor] = useState("#000000");
  const [lineWidth, setLineWidth] = useState(5);
  const [tool, setTool] = useState("pen");
  
  const [stepLevel, SetStepLevel] = useState(1);

  const [imageUrl, setImageUrl] = useState("../assets/paint/web3Identity.png");

  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });

  const canvasRef = useRef(null);
  
  const getFileURL = (cid: any) => {
    return `https://${cid}.ipfs.dweb.link/wallywalletpaint.png`;
  };
  
  const readImageAsPNG = async () => {
    const canvas = document.getElementById('myCanvas');
    if (canvas) {
      const pngDataUrl = canvas.toDataURL('image/png');

      const response = await fetch(pngDataUrl);
      const blob = await response.blob();
      const file = new File([blob], 'wallywalletpaint.png', { type: 'image/png' });
      const client = new Web3Storage({ token: `${process.env.NEXT_PUBLIC_WEB3_STORAGE_API_KEY!}` })

      const files = [file];
      const cid = await client.put(files);
      console.log(cid);
      console.log(getFileURL(cid));
      //return cid;

      minNFT("Paint Game", "Identity Web 3", cid, address!);


    }
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log("clicked");
    // router.push('/rewards1');
    readImageAsPNG();
  };

  const provider = useWebSocketProvider();

  const contract = useContract({
    address: NFTS_MANAGEMENT_CONTRACT_MUMBAI,
    abi: NFTs_MANAGEMENT_ABI,
    signerOrProvider: signer,
  })

  const minNFT = async (_title : string, _subTitle : string, _cid: string, _address : Address) => {
    const tx = await contract?.mintNFT(_address, _cid, _title, _subTitle, {
      maxPriorityFeePerGas: await provider?.send(
        "eth_maxPriorityFeePerGas",
        []
      ),
    });
    const txHash = tx.hash;
    console.log("txHash", txHash);
    if (txHash) {
      router.push('/rewards1')
    }
  };


  useEffect(() => {
    if(isConnected) {
      console.log("connected");

     }
    }
  , [isConnected]);  

  
  return (
    <>
      <Box maxH="100vh">
        <Box
          maxHeight={"80%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
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
            maxW={"container.lg"}
            bg="bg-surface"
            borderRadius="lg"
            p={{ base: "4", md: "6" }}
            borderBottomRadius={"xl"}
            bgGradient="linear(to-r, #F6F0EA, #F1DFD1)"
          >

            <Box display="flex" flexDirection={flexDirection} width="100%" alignItems="center" justifyContent="center">
              <Box margin={"25"}>

                <Box maxWidth={"360px"} maxHeight={"480px"}>
                  <PaintCanvas
                    width={"360"}
                    height={"480"}
                    color={color}
                    lineWidth={lineWidth}
                    tool={tool}
                    imageUrl={imageUrl} // Pass the imageUrl prop
                  />
                </Box>

              </Box>

              <Box margin={"15"}>

                <Box maxWidth={"320px"}>
                  <Stack>

                    <ToolPicker tool={tool} setTool={setTool} />

                    <LineWidthPicker
                        lineWidth={lineWidth}
                        setLineWidth={setLineWidth}
                      />

                    <ColorPicker color={color} setColor={setColor} />

                    <ReactAudioPlayer
                      src="../assets/paint/step1_IdentityInWeb3.ogg"
                      autoPlay={true}
                      controls
                      onPlay={(e) => console.log("onPlay")}
                    />

                  </Stack>

                </Box>

              </Box>
            </Box>

            <Stack justify="center" direction="row" padding={"5"}>
              {isConnected && (
                  <WallyButton boxShadow="xl" mx={6} onClick={handleClick}>
                  Mint
                </WallyButton>
            )}
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Paint;
