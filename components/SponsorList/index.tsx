import React from "react";
import { Grid, GridItem, VStack, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  sponsorList: {
    id: number;
    src: any;
    title: string;
    href: string;
  }[];
};

const SponsorList = (props: Props) => {
  return (
    props.sponsorList.length > 0 && (
      <VStack gap={8}>
        <Heading textAlign={"center"} size={"lg"}>
          Some awesome startups from {" "}
          <Text
           as={"span"}
            bgGradient="linear(to-r, secondary, primary)"
            bgClip="text"
            fontWeight="extrabold"
          >
            Kashmir
          </Text>
        </Heading>
        <Grid
          templateColumns={{
            base: `repeat(${2}, 1fr)`,
            md: `repeat(${3}, 1fr)`,
            lg: `repeat(${props.sponsorList.length}, 1fr)`,
          }}
          gap={{
            base: 12,
            md: 12,
            lg: 12,
          }}
        >
          {props.sponsorList?.map((sponsor) => (
            <GridItem key={sponsor.id}>
              <a href={sponsor.href} target={"blank"}>
                <Image
                  title={sponsor.title}
                  height={96}
                  src={sponsor.src}
                  alt={sponsor.title}
                />
              </a>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    )
  );
};

export default SponsorList;
