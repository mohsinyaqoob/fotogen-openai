import Head from "next/head";
import { Box, VStack, Container } from "@chakra-ui/react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import MainLayout from "../layout/main";
import HomePage from "./home";

export default function Home() {
  return (
      <HomePage />
  );
}
