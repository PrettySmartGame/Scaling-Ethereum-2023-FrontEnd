import {
  Box,
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => (
  <Container
    as="footer"
    role="contentinfo"
    py={{ base: "8", md: "8" }}
    w={"500px"}
  >
    <Stack spacing={{ base: "4", md: "5" }} justify="space-between">
      <Stack justify="space-between" direction="row" align="center">
        {/* <Logo /> or robot image*/}
        <Box paddingRight={"400px"} />
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()}Wally-Wallet & Co.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="2rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub fontSize="2rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="2rem" />}
          />
        </ButtonGroup>
      </Stack>
    </Stack>
  </Container>
);

export default Footer;
