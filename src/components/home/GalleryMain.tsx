import { Flex, Grid, Heading } from "@chakra-ui/react";
import GalleryItem from "./GalleryItem";

const GalleryMain = () => {
    return (
        <Flex
            direction="column"
            w="80%"
            mx="auto"
            mt={{
                base: 32,
                sm: 40,
                md: 64,
                lg: 72
            }}
            mb={{
                base: 32
            }}
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
                    lg: 56
                }}
                mb={{
                    base: 5,
                    md: 3,
                    lg: 0
                }}
            >
                Excitement Past Year
            </Heading>
            <Grid
                mx="auto"
                w="full"
                templateRows={{
                    base: "repeat(1, 1fr)",
                }}
                templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(6, 1fr)",
                    lg: "repeat(7, 1fr)"
                }}
                gap={4}
                mt={{
                    base: 4,
                    md: 8,
                    lg: 10
                }}
            >
                <GalleryItem
                    rowSpan={{
                        base: 1
                    }}
                    colSpan={{
                        base: 1,
                        md: 6,
                        lg: 4
                    }}
                    bgImage="/images/gallery/1.jpg"
                    bgSize="cover"
                />
                <GalleryItem
                    rowSpan={{
                        base: 1,
                    }}
                    colSpan={{
                        base: 1,
                        md: 3,
                        lg: 3
                    }}
                    bgImage="/images/gallery/2.jpg"
                    bgSize="cover"
                />
                <GalleryItem
                    rowSpan={{
                        base: 1,
                    }}
                    colSpan={{
                        base: 1,
                        md: 3,
                        lg: 2
                    }}
                    bgImage="/images/gallery/3.jpg"
                    bgSize="cover"
                />
                <GalleryItem
                    rowSpan={{
                        base: 1,
                    }}
                    colSpan={{
                        base: 1,
                        md: 3,
                        lg: 3
                    }}
                    bgImage="/images/gallery/4.jpg"
                    bgSize="cover"
                />
                <GalleryItem
                    rowSpan={{
                        base: 1,
                    }}
                    colSpan={{
                        base: 1,
                        md: 3,
                        lg: 2
                    }}
                    bgImage="/images/gallery/5.jpg"
                    bgSize="cover"
                />
            </Grid>
        </Flex>
    )
}

export default GalleryMain;