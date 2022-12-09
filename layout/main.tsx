import React from "react";
import { Box, VStack, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import NavBar from "../components/NavBar";

type Props = {
  children: React.ReactElement;
};

const MainLayout = (props: Props) => {
  return (
    <Box
      w={"full"}
      h={"100vh"}
      bg={useColorModeValue("white", "#171717")}
      pb={8}
      px={4}
    >
      <Head>
        <title>FotoGen - Create photos using text keywords powered by AI</title>
        <meta name="description" content="Generate pictures using keywords." />

        <meta property="og:title" content="FotoGen - AI" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="http://fotogen.vercel.app/"
        />
        <meta property="og:image" content="https://res.cloudinary.com/mohsinyaqoob/image/upload/v1670566678/mohsinyaqoob.com/og-image.png" />
        <meta property="og:site_name" content="FotoGen" />
        <meta
          property="og:description"
          content="Powered by OpenAI, this tool allows you to generate images using the DALL·E models."
        />
      </Head>
      <VStack gap={16}>
        <NavBar />
        {props.children}
      </VStack>
    </Box>
  );
};

export default MainLayout;
