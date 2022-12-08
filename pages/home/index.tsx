import React from "react";
import { VStack, Divider } from "@chakra-ui/react";
import Hero from "../../components/Hero";
import SponsorList from "../../components/SponsorList";
import { sponsorList } from "../../data/sponsor-list";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <VStack gap={12}>
      <Hero />
      <Divider />
      <SponsorList sponsorList={sponsorList} />
    </VStack>
  );
};

export default HomePage;
