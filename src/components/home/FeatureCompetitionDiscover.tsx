import { Box, Flex } from "@chakra-ui/react";

const FeatureCompetitionDiscover = () => {
    return (
        <Box
            id="events"
            width={{
                base: "80%",
                md: "75%",
                lg: "75%"
            }}
            height={{
                base: "100px",
                lg: "200px",
            }}
            background="saturationBlue.500"
            position="relative"
            fontSize={{
                base: "2xl",
                md: "3xl",
                lg: 64
            }}
            fontWeight="bold"
            display="flex"
            alignItems="center"
            color="white"
            justifyContent="end"
            pr={{
                base: 4,
                sm: 10,
                md: 24,
                lg: 20
            }}
            borderEndRadius={{
                base: "lg",
                lg: "3xl"
            }}
        >
            DISCOVER OUR EVENTS
        </Box>
    )
}

export default FeatureCompetitionDiscover;