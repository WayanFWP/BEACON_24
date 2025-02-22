'use client'

import React from "react"
import "@/app/globals.css";
import { Box, Container, Flex, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { IconBrandWhatsapp, IconMail } from "@tabler/icons-react";
import ContactButton from "@/components/competitions/ContactButton";
import { usePathname } from "next/navigation";
import { RouteURL } from "@/consts/route";
import { SessionProvider } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <Container
            minW="100vw"
            minH="100vh"
            position="relative"
            display="flex"
            overflow='hidden'
            padding={0}
            bgImage={pathname === RouteURL.beproRegister ? 
                "url('/images/bg-bepro.png')" : "url('/images/bg-benmax.png')"
            }
            bgColor={pathname === RouteURL.beproRegister ? 
                "primaryYellow.400" : "saturationBlue.800"
            }
            bgSize="cover"
        >
            <Flex
                w={{
                    base: '90%',
                    lg: '80%'
                }}
                h={{
                    base: '90vh',
                    lg: '600px',
                }}
                margin="auto"
                overflow={{
                    base: 'auto',
                    lg: 'hidden',
                }}
                borderRadius="xl"
                className="justify-center"
            >
                <Box
                    w={{
                        base: "100%",
                        xl: "40%",
                    }}
                    overflow="hidden"
                    display={{
                        base: "none",
                        lg: "block"
                    }}
                    px={16}
                    py={12}
                    position="relative"
                    bgColor="white"
                    bgImage={pathname === RouteURL.beproRegister ? 
                        "url('/images/svg/particles/contact-competition.svg')" : ""
                    }
                    bgSize="cover"
                >
                    <Heading>Contact Us</Heading>
                    <Text mt={8} mb={10}>
                        Get in touch with us if you have
                        any problems or questions about
                        the competition!
                    </Text>
                    <ContactButton
                        linkTo="mailto:beacon.bme@gmail.com"
                        text="beacon.bme@gmail.com"
                        dark={false}
                        icon={<IconMail />}
                    />
                    {
                        pathname === RouteURL.beproRegister ? (
                            <>
                                <ContactButton
                                    linkTo="https://wa.me/6285159233726/"
                                    text="Levy +62 851-5923-3726"
                                    dark={false}
                                    icon={<IconBrandWhatsapp />}
                                />
                                <ContactButton
                                    linkTo="https://wa.me/6283162936214/"
                                    text="Naulia +62 831-6293-6214"
                                    dark={false}
                                    icon={<IconBrandWhatsapp />}
                                />
                            </>
                        ) : (
                            <>
                                <ContactButton
                                    linkTo="https://wa.me/62895390188905/"
                                    text="Calia +62 895-3901-88905"
                                    dark={false}
                                    icon={<IconBrandWhatsapp />}
                                />
                            </>
                        )
                    }
                </Box>
                <Box
                    w={{
                        base: "100%",
                        xl: "60%"
                    }}
                    overflow="auto"
                    position="relative"
                    bgColor={pathname === RouteURL.beproRegister ? 
                        "saturationRed.600" : "saturationBlue.500"
                    }
                    color="#FFFFFF"
                    px={16}
                    py={12}
                >
                    <SessionProvider>
                        {children}
                    </SessionProvider>
                </Box>
            </Flex>
        </Container>
    )
}