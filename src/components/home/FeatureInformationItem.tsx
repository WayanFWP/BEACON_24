import { Box, GridItem, GridItemProps, Heading, Text } from "@chakra-ui/react";

const FeatureInformationItem = ({ title, description, importantValue, ...props }: 
    { title: string, description: string, importantValue?: string } & GridItemProps
) => {
    return (
        <GridItem
            h={{
                base: "200px",
                lg: "auto"
            }}
            bgColor="secondaryBlue.100"
            bgImage="url('/images/svg/beach-wave.svg')"
            bgSize="cover"
            bgPosition="0% 100%"
            bgRepeat="no-repeat"
            zIndex={10}
            borderRadius="lg"
            borderRight="10px solid"
            borderRightColor="GrayText"
            p={{
                base: 3,
                lg: 5,
            }}
            display="flex"
            flexDirection="column"
            {...props}
        >
            <Heading
                fontSize={{
                    base: 28,
                    md: 32,
                }}
            >
                {title}
            </Heading>
            {importantValue && (
                <Text
                    fontSize={{
                        base: 24,
                        md: 32,
                        lg: 36,
                    }}
                    fontWeight="bold"
                    my={5}
                >
                    {importantValue}
                </Text>
            )}
            <Text
                fontSize={{
                    base: "md",
                    md: 18,
                    lg: 24,
                }}
                fontWeight="semibold"
                mt={2}
            >
                {description}
            </Text>
        </GridItem>
    )
}

export default FeatureInformationItem;