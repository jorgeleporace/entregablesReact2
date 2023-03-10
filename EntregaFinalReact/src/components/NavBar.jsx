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
import { Link as RouterLink } from "react-router-dom";
import {
  Spacer,
  Heading,
  Container,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Links = ["Our Courses", "Translations", "Our Team"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

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

          <HStack spacing={8} alignItems={"center"}>
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
                <Link to={"/"}>GLS</Link>
              </Heading>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >


            </HStack>
          </HStack>
          <Box>
            <Menu>
              <Link to={"/translations"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="outline"
                  colorScheme="blue"
                  m="5"
                >
                  Translations
                </MenuButton>
              </Link>
            </Menu>
            <Menu>
              <Link to={"/ourteam"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="outline"
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
                size="lg"
                variant="outline"
                colorScheme="blue"
                rightIcon={<ChevronDownIcon />}
                m="5"
              >
                Our Courses
              </MenuButton>
              <MenuList className="menu-list">
                <Link to={`/courses/${"Beginner"}`}>
                  <MenuItem>Principiante</MenuItem>
                </Link>
                <Link to={`/category/${"Intermidiate"}`}>
                  <MenuItem>Intermedio</MenuItem>
                </Link>
                <Link to={`/category/${"All"}`}>
                  <MenuItem>TODOS</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <CartWidget />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>

            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Clases de Ingl??s Online</Box>
    </>
  );
}