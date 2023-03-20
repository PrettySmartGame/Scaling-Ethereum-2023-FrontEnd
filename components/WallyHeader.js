import React from 'react'
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

  import { ConnectButton } from "@rainbow-me/rainbowkit";
  
export const WallyHeader = () => (

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

    )

export default WallyHeader