import {
  Box,
  Container,
  VStack,
  HStack,
  StackDivider,
  Stack,
  Text,
  Heading,
  Center,
} from "@chakra-ui/react";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export const WallyHeader = () => (
  <Container
    maxW="container.lg"
    bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
    borderTopRadius={"2xl"}
    padding={"30"}
  >
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
      <Box>
        <Stack
          spacing="4"
          direction={{ base: "column", sm: "row" }}
          justify="center"
        >
          <HStack spacing="4">
            <Box>
              <HStack>
                <Heading
                  paddingBottom={"3"}
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
      <Box>
        <Center>
          <ConnectButton />
        </Center>
      </Box>
    </VStack>
  </Container>
);

export default WallyHeader;
