import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import GallerySponsorshipGrid from "./GallerySponsorshipGrid";

const GallerySponsorship = () => {
  return (
    <Flex
      direction="column"
      w="60%"
      mx="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Heading
        color="primaryblue.500"
        textAlign="center"
        fontSize={{
          base: 28,
          sm: 42,
          md: 48,
          lg: 56,
        }}
        mb={{
          base: 5,
          md: 3,
          lg: 0,
        }}
      >
        OUR SPONSORS
      </Heading>
      <GallerySponsorshipGrid />
    </Flex>
  );
};

export default GallerySponsorship;
