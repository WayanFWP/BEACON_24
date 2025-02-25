import { Flex, Image, Text } from "@chakra-ui/react"
import ContactButton from "../competitions/ContactButton"

const HeroMain = () => {
    return (
        <Flex
            h="full"
            direction="column"
            alignItems="center"
            justifyContent="center"
            pt={{
                base: 4,
                lg: 20
            }}
        >
            <Image
                src="/images/beacon-text.png"
                w={{
                    base: 300,
                    md: 400,
                    lg: 450
                }}
                h={{
                    base: 112,
                    md: 134,
                    lg: 160
                }}
                ignoreFallback
                alt="beacon"
            />
            <Text
                align="center"
                maxW={{
                    base: "90%",
                    sm: "60%",
                    md: "50%",
                    lg: "55%",
                }}
                color="primaryblue.500"
                fontWeight="semibold"
                fontSize={{
                    base: "md",
                    md: 24,
                }}
            >
                Biomedical Engineering Annual Contest by Biomedical Engineering Department (Sepuluh Nopember Institute Of Technology)
            </Text>
            <Flex
                mt={4}
                gap={4}
            >
                <ContactButton
                    linkTo="/#events"
                    text="Events"
                    dark={false}
                    icon={undefined}
                    borderRadius="full"
                />
                <ContactButton
                    linkTo="/register"
                    text="Get Started"
                    dark={true}
                    icon={undefined}
                    borderRadius="full"
                />
            </Flex>
        </Flex>
    )
}

export default HeroMain;