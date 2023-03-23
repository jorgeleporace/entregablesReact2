import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Container,
  Box,
  Textarea,
  Center,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { CourseContext } from "../contexts/CourseContexts";
import SendOrder from "./SendOrder";

const Cart = () => {
  const [cart, setCart] = useContext(CourseContext);
  const [userName, setUserName] = useState("");
  let accum = 0;

  function sumTotal() {
    accum = cart.reduce((prev, next) => prev + next.price, 0);
    console.log(accum);
    return accum;
  }

  return (
    <>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Cart
        </Heading>
      </Center>
      {cart.map((item) => {
        return (
          <Container key={item.id} className="main-catalogue">
            <Card maxW="sm">
              <CardHeader>
                <Heading size="md">{item.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text as="b">Quantity: {item.quantity}</Text>
                <Text>Price: U$D {item.price} </Text>
              </CardBody>

              <CardFooter>
                <Button
                  colorScheme="red"
                  onClick={() => console.log("Eliminando")}
                >
                  Delete from cart
                </Button>
              </CardFooter>
            </Card>
          </Container>
        );
      })}

      <p>
        <strong>Total: </strong>
      </p>
      <strong>${sumTotal()}</strong>

      <SendOrder />
    </>
  );
};

export default Cart;
