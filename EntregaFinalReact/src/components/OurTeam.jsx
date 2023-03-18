import React from "react";
import { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function OurTeam() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState();

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "Jorge Leporace",
      text: "English Teacher – ICAO Rater – UX UI Designer – Content Developer – Digital Marketing / Community Manager & Publicity / Growth Mkt – Full Stack Developer.",
	  image:"https://onlinegls.com/wp-content/uploads/2022/02/054B0747-27B5-43EC-A9E1-0F7F495095F2_1_201_a-scaled.jpeg",
    },
    {
      title: "Melody Penna",
      text: "English Teacher – BA in English Language – ICAO Rater – Content Developer – Academic Coordinator.",
      image:
        "https://onlinegls.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-10-at-3.02.22-PM.jpeg",
    },
    {
      title: "Laura Villan",
      text: "Certified Translator – Content Developer – ICAO Rater.",
      image:
        "https://onlinegls.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-10-at-3.54.49-PM.jpeg",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"900px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="20%"
                transform="translate(0, -50%)"
              >
                <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}color="Black"> 
                  {card.title}
                </Heading>
                <Text fontSize={{ base: "md", lg: "lg" }} color="Black">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
export default OurTeam;