import { Box, BoxProps, Flex, Heading, Image, Text } from "@chakra-ui/react";
import ContactButton from "../competitions/ContactButton";

interface FeatureCompetitionEventProps {
  title: string;
  description: string;
  moreUrl: string;
  logo: string;
}

const FeatureCompetitionEvent = ({
  title,
  description,
  moreUrl,
  logo,
  ...props
}: FeatureCompetitionEventProps & BoxProps) => {
  return (
    <Box
      w={{
        base: "90%",
        sm: "80%",
        lg: "90%",
      }}
      height={{
        base: 150,
        md: 250,
        lg: 300,
      }}
      mt={{
        base: 7,
        md: 10,
        lg: 12,
      }}
      display="flex"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      gap={{
        base: 5,
        md: 2,
        lg: 3,
      }}
      p={{
        base: 3,
        md: 5,
        lg: 8,
      }}
      px={{
        lg: 12,
      }}
      {...props}
    >
      <Flex
        direction="column"
        gap={{
          md: 5,
        }}
        justifyContent="space-between"
      >
        <Box
          color={title === "BENMAX" ? "primaryblue.500" : "saturationRed.900"}
        >
          <Heading
            fontSize={{
              base: 24,
              md: 46,
              lg: 72,
            }}
          >
            {title}
          </Heading>
          <Text
            fontSize={{
              base: "sm",
              sm: "md",
              md: "lg",
              lg: "xl",
            }}
            fontWeight={{
              base: "semibold",
              md: "bold",
            }}
            pl={{
              md: 1,
            }}
          >
            {description}
          </Text>
        </Box>
        <ContactButton
          linkTo={moreUrl}
          text="More"
          dark={title === "BENMAX" ? false : true}
          bg={title === "BENMAX" ? "primaryblue.500" : "saturationRed.900"}
          color="white"
          _hover={{
            opacity: 0.9,
            transition: "200ms ease",
          }}
          icon={undefined}
          borderRadius="xl"
          w={{
            base: 90,
            md: 120,
          }}
          h={{
            base: 8,
          }}
          fontSize={{
            base: "md",
            md: "lg",
          }}
          zIndex={1024}
          px={{
            base: 5,
          }}
          py={{
            base: 5,
          }}
        />
      </Flex>
      <Box
        position="relative"
        boxSize={
          title === "BENMAX"
            ? {
                md: 205,
                lg: 250,
              }
            : {
                md: 135,
                lg: 180,
              }
        }
        display={{
          base: "none",
          md: "block",
        }}
      >
        <Image
          mt={
            title === "BENMAX"
              ? {
                  lg: 4,
                }
              : {
                  lg: 0,
                }
          }
          objectFit="cover"
          src={logo}
          alt={title}
          ignoreFallback
        />
      </Box>
    </Box>
  );
};

export default FeatureCompetitionEvent;
