import React, { useState } from "react";
import {
  Box,
  Image,
  Flex,
  Heading,
  VStack,
  Input,
  Button,
  Text,
  Divider,
  CircularProgress,
  Code,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import SponsorList from "../../components/SponsorList";
import { sponsorList } from "../../data/sponsor-list";
import { saveAs } from "file-saver";

type Props = {};

const Generate = (props: Props) => {
  const [image, setImage] = useState("");
  const [keywords, setKeywords] = useState("");
  const [httpLoading, setHttpLoading] = useState(false);

  const handleLongerTime = () => {
    console.log("Long time method called.");
    setTimeout(() => {
      if (httpLoading) {
        console.log("Its taking longer. Let the AI do its thing.");
      }
    }, 3000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setHttpLoading(true);
    handleLongerTime();
    const response = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ keywords }),
    });
    const image = await response.json();
    setHttpLoading(false);
    setImage(image.url);
  };

  const handleChange = (event) => {
    setKeywords(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack gap={6} px={8}>
        <Heading textAlign={"center"} size={"2xl"}>
          Whats on your{" "}
          <Text
            as={"span"}
            bgGradient="linear(to-r, secondary, primary)"
            bgClip="text"
            fontWeight="extrabold"
          >
            mind
          </Text>
          ?
        </Heading>
        <Text align={"center"}>
          Type the description of the image you want to generate. For example:{" "}
          <Text as="span" fontWeight={"bold"}>
            A sunlit indoor lounge area with a pool containing a flamingo
          </Text>
        </Text>
        <Flex
          flexDir={{ base: "column", md: "row", lg: "row" }}
          gap={4}
          w={"full"}
        >
          <Input
            value={keywords}
            onChange={handleChange}
            name="keywords"
            placeholder="Type here..."
          />
          <Button
            disabled={!keywords || httpLoading}
            type={"submit"}
            color={"#fff"}
            bg={"primary"}
            leftIcon={
              httpLoading && (
                <CircularProgress
                  fontSize={0.5}
                  size={"24px"}
                  isIndeterminate
                  color="green.300"
                />
              )
            }
            _hover={{ opacity: 0.8 }}
          >
            {httpLoading ? <>Please wait...</> : "Generate"}
          </Button>
        </Flex>
        <Box display={"flex"}>
          {image ? (
            <Image
              placeholder="blur"
              rounded={"12px"}
              src={image}
              alt={"Image Render Failed"}
            />
          ) : null}
        </Box>
        {image && (
          <Button
            bg={"primary"}
            color={"#fff"}
            leftIcon={<DownloadIcon />}
            onClick={() => saveAs(image, keywords.replace(" ", "-") + ".png")}
          >
            Save Image
          </Button>
        )}
        <Divider />
        <Box pt={12}>
          <SponsorList sponsorList={sponsorList} />
        </Box>
      </VStack>
    </form>
  );
};

export default Generate;
