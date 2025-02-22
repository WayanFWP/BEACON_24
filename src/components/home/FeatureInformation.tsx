import { Box, Flex, Grid } from "@chakra-ui/react";
import FeatureInformationItem from "./FeatureInformationItem";

const FeatureInformation = () => {
    return (
        <Grid
            mx="auto"
            w="80%"
            h={{
                lg: "650px"
            }}
            templateRows={{
                base: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(8, 1fr)"
            }}
            templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(6, 1fr)",
                lg: "repeat(6, 1fr)"
            }}
            gap={4}
            mt={{
                base: 24,
                md: 0,
                lg: 72
            }}
        >
            <FeatureInformationItem
                rowSpan={{
                    base: 1,
                    lg: 3
                }}
                colSpan={{
                    base: 1,
                    md: 3,
                    lg: 2
                }}
                title="BEPRO"
                importantValue="51+ Teams"
                description="Joined BEPRO"
            />
            <FeatureInformationItem
                rowSpan={{
                    base: 1,
                    lg: 3
                }}
                colSpan={{
                    base: 1,
                    md: 3,
                    lg: 2
                }}
                title="BENMAX"
                importantValue="21+ Teams"
                description="Joined BENMAX"
            />
            <FeatureInformationItem
                rowSpan={{
                    base: 1,
                    lg: 4
                }}
                colSpan={{
                    base: 1,
                    md: 6,
                    lg: 2
                }}
                title="UNIVERSAL"
                importantValue="41+ School & 9+ Universities"
                description="Have Participated"
            />
            <FeatureInformationItem
                rowSpan={{
                    base: 1,
                    lg: 5
                }}
                colSpan={{
                    base: 1,
                    md: 6,
                    lg: 4
                }}
                gap={{
                    lg: 20
                }}
                title="THEME OF 2024 BEACON"
                description="Beyond Borders: Collaborative Solutions for Global Healthcare Improvements"
            />
            <FeatureInformationItem
                rowSpan={{
                    base: 1,
                    lg: 4
                }}
                colSpan={{
                    base: 1,
                    md: 6,
                    lg: 2
                }}
                title="Worldwide"
                importantValue="10+ Provinces & 4+ Countries"
                description="Have Joined"
            />
        </Grid>
    )
}

export default FeatureInformation;