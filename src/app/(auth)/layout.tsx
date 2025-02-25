import Image from "next/image"
import React from "react"
import "@/app/globals.css";
import { Box, Container, Flex, Text } from "@chakra-ui/react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Container
            minW="100vw"
            minH="100vh"
            display="flex"
            overflow="hidden"
            position="relative"
            className="items-start justify-center"
            padding={0}
        >
            <Box
                w={{
                    base: "100%",
                    lg: "560px",
                    xl: "760px"
                }}
                py={16}
                px={10}
            >
                <Flex
                    className="justify-center items-center"
                    gap={5}
                    mb={12}
                >
                    <Box
                        overflow="hidden"
                        w={{
                            base: "55px",
                            md: "60px",
                        }}
                        h={{
                            base: "55px",
                            md: "60px",
                        }}
                        position="relative"
                    >
                        <Image
                            src="/images/svg/logo.svg"
                            alt="logo"
                            fill
                            sizes={undefined}
                            loading="lazy"
                            className="absolute w-full h-full"
                        />
                    </Box>
                    <Box
                        flexDirection="column"
                    >
                        <Text
                            fontWeight="semibold"
                        >
                            BEACON
                        </Text>
                        <Text
                            fontWeight="semibold"
                        >
                            2024
                        </Text>
                    </Box>
                </Flex>
                {children}
            </Box>
            <Box
                w={{
                    lg: "720px",
                    xl: "1140px"
                }}
                h="100vh"
                display={{
                    base: "none",
                    lg: "block"
                }}
                position="relative"
            >
                <Image
                    src="/images/right-login.png"
                    alt="banner login"
                    fill
                    sizes="full"
                    loading="lazy"
                    className="absolute w-full h-full object-cover"
                />
            </Box>
        </Container>
    )
}