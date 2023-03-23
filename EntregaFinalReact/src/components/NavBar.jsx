import CartWidget from "./CartWidget";
import { Image } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Img,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { Spacer, Heading, Container } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={2} alignItems={"center"}>
            <Box>
              <Image
                borderRadius="full"
                boxSize="60px"
                src="/src/images/Logo_gls_512.png"
                alt="Global Language Solutions"
              />
            </Box>
            <Box p="10" w="300px" h="100">
              <Heading size="md">
                <Link as={NavLink} to={"/"}>HOME</Link>
              </Heading>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            ></HStack>
          </HStack>
          <Box>
            <Menu>
              <Link as={NavLink} to={"/translations"}>
                <MenuButton
                  as={Button}
                  size="md"
                  variant="solid"
                  colorScheme="blue"
                  m="5"
                >
                  Translations
                </MenuButton>
              </Link>
            </Menu>
            <Menu>
              <Link as={NavLink} to={"/ourteam"}>
                <MenuButton
                  as={Button}
                  size="md"
                  variant="solid"
                  colorScheme="blue"
                  m="5"
                >
                  Our Team
                </MenuButton>
              </Link>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                size="md"
                variant="solid"
                colorScheme="blue"
                rightIcon={<ChevronDownIcon />}
                m="5"
              >
                Category
              </MenuButton>
              <MenuList className="menu-list">
                <Link as={NavLink} to={`/courses/${"Professional"}`}>
                  <MenuItem>Professional</MenuItem>
                </Link>
                <Link as={NavLink} to={"/courses"}>
                  <MenuItem>All</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Flex alignItems={"center"}>
            <Menu>
            <Link as={NavLink} to={"/cart"}> 
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
               
              >
                 
                <CartWidget />
                
              </MenuButton>
              </Link>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}></Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Online English Classes</Box>
    </>
  );
}