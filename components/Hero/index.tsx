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
      >
        Create images from text using
        <Text
          bgGradient="linear(to-r, secondary, primary)"
          bgClip="text"
          fontWeight="extrabold"
          py={1.5}
        >
          Artificial Intelligence
        </Text>
      </Heading>
      <Text
        color={useColorModeValue("muted", "white")}
        textAlign={"center"}
        w={{ base: "300px", md: "3xl", lg: "4xl" }}
      >
        Powered by OpenAI, this tool allows you to generate images using the DALL·E models
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
