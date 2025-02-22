import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Particle from "../Particle";

const AboutMain = () => {
  return (
    <Flex
      h="full"
      direction="column"
      justifyContent={{
        base: "start",
        lg: "start",
      }}
      alignItems={{
        base: "center",
        lg: "start",
      }}
      pt={{
        base: 48,
        md: 40,
        lg: 72,
      }}
    >
      <Box
        ml={{
          base: 0,
          lg: 44,
          xl: 64,
        }}
        borderRadius="xl"
        bgGradient="linear-gradient(primaryYellow.100, secondaryBlue.500)"
        w={{
          base: "80%",
          xl: 878,
        }}
        h={{
          base: 530,
          md: 400,
          lg: 575,
        }}
        overflow="hidden"
        position="relative"
      >
        <Box position="relative" width="full" height="full" zIndex={1}>
          <Particle
            image="particles/home-about-main.svg"
            size={{
              base: "50%",
              sm: "40%",
              md: "35%",
              lg: "30%",
            }}
            bgPosition={{
              base: "100% 0%",
            }}
            className="z-0 inset-0"
          />
          <Particle
            image="beach-wave.svg"
            size={{
              base: "100%",
            }}
            bgPosition={{
              base: "0% 100%",
              md: "0% 200%",
              lg: "0% 100%",
            }}
            className="z-0 inset-0"
          />
        </Box>
        <Box
          width="full"
          height="full"
          p={{
            base: 5,
            md: 10,
          }}
          zIndex={100}
          position="absolute"
          inset={0}
        >
          <Heading>ABOUT BEACON</Heading>
          <Text
            fontSize={{
              base: "md",
              lg: "2xl",
            }}
            mt={{
              base: 7,
              sm: 20,
              md: 16,
              lg: 24,
            }}
            textAlign={{
              base: "left",
              md: "justify",
              lg: "justify",
            }}
            fontWeight="medium"
          >
            The BEACON: Biomedical Engineering Annual Contest, organized by the
            Biomedical Engineering Department of Institut Teknologi Sepuluh
            Nopember, is a series of competitions aimed at introducing culture
            and technology to the younger generation. This initiative is
            increasingly supported by the government to encourage the millennial
            generation to actively contribute to technological advancements,
            especially in the healthcare sector. BEACON features sub-events such
            as BEPRO and BENMAX.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default AboutMain;
