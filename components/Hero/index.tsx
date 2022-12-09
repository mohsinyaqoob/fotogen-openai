import React from "react";
import { Box, HStack, VStack, Heading, Text, Button, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

const Hero = () => {
  return (
    <VStack alignItems={"center"} justifyContent={"center"} gap={8}>
      <Heading
        letterSpacing={-2}
        textAlign={"center"}
        size={{ base: "2xl", md: "3xl", lg: "3xl" }}
        w={{ base: "320px", md: "820px", lg: "820px" }}
      >
        Realistic images and art created from a description in
        <Text
          bgGradient="linear(to-r, secondary, primary)"
          bgClip="text"
          fontWeight="extrabold"
          py={1.5}
        >
          Natural Language.
        </Text>
      </Heading>
      <Text
        color={useColorModeValue("muted", "white")}
        textAlign={"center"}
        w={{ base: "300px", md: "3xl", lg: "4xl" }}
      >
        Powered by OpenAI, this tool allows you to  create original, realistic images and art from a
text description. <br/> It can combine concepts, attributes, and styles.
      </Text>
      <HStack gap={2}>
        <Link href={"/generate"}>
          <Button
          size={"lg"}
            color={"#fff"}
            bg={"primary"}
            _hover={{
              opacity: "0.8",
            }}
          >
            Get Started
          </Button>
        </Link>
      </HStack>
    </VStack>
  );
};

export default Hero;
