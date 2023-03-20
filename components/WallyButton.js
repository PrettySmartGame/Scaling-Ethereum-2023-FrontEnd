import React from 'react'
import { Button as ChakraButton } from "@chakra-ui/react";

export const WallyButton = ({ children, ...props }) => (
  <ChakraButton
    variantColor="primary"
    color="black"
    borderWidth="3px"
    borderStyle="solid"
    borderColor="black"
    fontWeight="bold"
    px={3}
    py={2}
    display="block"
    height="auto"
    _hover={{
      backgroundColor: 'primary.300',
      color: 'black',
    }}
    _pressed={{
      backgroundColor: 'primary.700',
      color: 'white',
    }}
    {...props}
  >
    {children}
  </ChakraButton>
)

export default WallyButton