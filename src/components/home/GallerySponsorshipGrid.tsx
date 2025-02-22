import { Grid, GridItem } from "@chakra-ui/react";

const GallerySponsorshipGrid = () => {
  return (
    <>
      <Grid
        mx="auto"
        w="full"
        templateRows={{
          base: "repeat(1, 1fr)",
        }}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
        mt={{
          base: 4,
          md: 8,
          lg: 10,
        }}
        mb={{
          base: 4,
          md: 8,
          lg: 10,
        }}
        justifyContent="center"
        alignItems="center"
      >
        <GridItem
          mx="auto"
          boxSize={150}
          bgImage="/images/sponsor/samudra-energy.png"
          bgSize="contain"
          bgPosition="center center"
          bgRepeat="no-repeat"
        />
        <GridItem
          mx="auto"
          boxSize={150}
          bgImage="/images/sponsor/expertest.png"
          bgSize="contain"
          bgPosition="center center"
          bgRepeat="no-repeat"
        />
        <GridItem
          mx="auto"
          boxSize={150}
          bgImage="/images/sponsor/wahana-rejeki-bersama.png"
          bgSize="contain"
          bgPosition="center center"
          bgRepeat="no-repeat"
        />
        <GridItem
          mx="auto"
          boxSize={150}
          bgImage="/images/sponsor/livoc-product.png"
          bgSize="contain"
          bgPosition="center center"
          bgRepeat="no-repeat"
        />
      </Grid>
      <Grid
        mx="auto"
        w="full"
        templateRows={{
          base: "repeat(1, 1fr)",
        }}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={1}
        mb={{
          base: 4,
          md: 8,
          lg: 10,
        }}
        justifyContent="center"
        alignItems="center"
      >
        <GridItem
          mx="auto"
          boxSize={150}
          bgImage="/images/sponsor/meditrans.png"
          bgSize="contain"
          bgPosition="center center"
          bgRepeat="no-repeat"
        />
        <GridItem
          mx="auto"
          boxSize={150}
          bgImage="/images/sponsor/level-garment.png"
          bgSize="contain"
          bgPosition="center center"
          bgRepeat="no-repeat"
        />
        <GridItem
          mx="auto"
          boxSize={150}
          bgImage="/images/sponsor/kui.png"
          bgSize="contain"
          bgPosition="center center"
          bgRepeat="no-repeat"
        />
      </Grid>
    </>
  );
};

export default GallerySponsorshipGrid;
