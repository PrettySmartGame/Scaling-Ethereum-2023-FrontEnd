import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";

import { WallyButton } from "../components/WallyButton.js";

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
          <Container
            w="100"
            bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
            borderTopRadius={"xl"}
            padding={"30"}
          >
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
              width={{ base: "full", md: "md", lg: "lg", xl: "xl" }}
            >
              <Box
                bg="bg-surface"
                px={{ base: "4", md: "6" }}
                pt="5"
                borderColor="accent"
              >
                <Stack
                  spacing="4"
                  direction={{ base: "column", sm: "row" }}
                  justify="center"
                >
                  <HStack spacing="4">
                    <Box>
                      <HStack>
                        <Heading
                          as="h1"
                          size="2xl"
                          noOfLines={1}
                          textStyle="h1"
                          color={"#00B5D8"}
                          fontFamily={"mono"}
                        >
                          Wally Wallet
                        </Heading>
                      </HStack>
                      <Text
                        fontFamily={"mono"}
                        margin={"4"}
                        fontSize="lg"
                        fontWeight="medium"
                      >
                        A educational game like no other
                      </Text>

                      {/* <Text color="muted" fontSize="sm">
                      user@ETHGlobal.com
                    </Text> */}
                    </Box>
                  </HStack>
                </Stack>
              </Box>
              <Box
                bg="bg-surface"
                px={{ base: "4", md: "6" }}
                pb="5"
                borderColor="accent"
              >
                <Stack direction="row" spacing="3">
                  <ConnectButton />
                </Stack>
              </Box>
            </VStack>
          </Container>

          {/* <Container maxW="3xl"></Container> */}

          <Container
            w="100%"
            borderBottomRadius={"xl"}
            bgGradient="linear(to-r, #F6F0EA, #F1DFD1)"
          >
            <Box bg="bg-surface" borderRadius="lg" p={{ base: "4", md: "6" }}>
              {/* If we need to use small text we can use as below: */}
              {/* <Stack
              spacing="5"
              divider={<StackDivider />}
              borderBottomColor={"black"}
            >
              {mainComponent.map((x, id) => (
                <Stack
                  key={id}
                  justify="space-between"
                  direction="row"
                  spacing="4"
                >
                  <Stack spacing="0.5" fontSize="sm">
                    <Text fontWeight="medium">{x.title}</Text>
                    <Text color="muted">{x.description}</Text>
                  </Stack>

                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    spacing={{ base: "0", sm: "1" }}
                  ></Stack>
                </Stack>
              ))}
            </Stack> */}
            </Box>
            <Stack justify="center" direction="row" padding={"5"}>
              {/* <Button
                variant="solid"
                backgroundColor={"#00B5D8"}
                color={"black"}
                size={"lg"}
                boxShadow={"20px"}
                borderColor={"#9DECF9"}
                borderBottomRadius={"10px"}
                borderBottomRightRadius={"10px"}
                borderBottomWidth={"thick"}
                borderRightWidth={"12px"}
              >
                Mint
              </Button> */}

              <WallyButton boxShadow='xl' mx={6}>Mint 1</WallyButton>
              <WallyButton boxShadow='xl' mx={6}>Mint 2</WallyButton>
            </Stack>
          </Container>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Landing;
