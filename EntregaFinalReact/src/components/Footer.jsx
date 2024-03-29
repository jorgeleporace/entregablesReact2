import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
	  <div>
            <Image
              borderRadius="full"
              boxSize="60px"
              justify={{ base: "center", md: "space-between" }}
              align={{ base: "center", md: "center" }}
			  src='./src/images/Logo_gls_512.png' alt='Global Language Solutions'
            ></Image>
			
          </div>
        <Text>All rights reserved. © 2023 www.onlinegls.com </Text>
        <Stack direction={"row"} spacing={6}>
          

          <SocialButton label={"Twitter"} href={"https://twitter.com/GLSArgentina"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"FaceBook"} href={"https://www.facebook.com/ONLINEGLS"}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"https://www.instagram.com/onlinegls/"}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
