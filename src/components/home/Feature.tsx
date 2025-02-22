"use client";

import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import FeatureFunfact from "./FeatureFunfact";
import FeatureCompetition from "./FeatureCompetition";
import Particle from "../Particle";

const Feature = () => {
  return (
    <Box
      w="full"
      minH={{
        base: "220vh",
        lg: "250vh",
      }}
      bgGradient="linear-gradient(saturationBlue.100, primaryYellow.500)"
      position="relative"
      overflow="hidden"
    >
      <Particle
        image="sand.svg"
        size={{
          base: "cover",
        }}
        bgPosition={{
          base: "center center",
        }}
        className="opacity-80"
      />
      <FeatureFunfact />
      <FeatureCompetition />
    </Box>
  );
};

export default Feature;
