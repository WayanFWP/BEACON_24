'use client'

import ContactButton from "@/components/competitions/ContactButton";
import Particle from "@/components/Particle";
import { Box, Flex, Heading, Image, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const BeproHero = () => {

    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);

    return (
        <Box
            w="full"
            minH={{
                base: "100vh",
                lg: "100vh"
            }}
            bgGradient="linear-gradient(primaryYellow.200, primaryYellow.600)"
            position="relative"
            display="flex"
            alignItems="center"
        >
            <Particle
                image="abstract-background.svg"
                size={{
                    base: "cover"
                }}
                bgPosition={{
                    base: "center center",
                    lg: "center center"
                }}
            />
            <motion.div
                initial={{ opacity: 0, y: "-5%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="absolute z-0 inset-0"
            >
                <Particle
                    image="sunny-cloud.svg"
                    size={{
                        base: "100%",
                    }}
                    bgPosition={{
                        base: "center top",
                        lg: "center top"
                    }}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="absolute z-0 inset-0"
            >
                <Particle
                    image="star-white.svg"
                    size={{
                        base: 30,
                        md: 70,
                        lg: 75,
                    }}
                    bgPosition={{
                        base: "30% 15%",
                        lg: "40% 5%",
                    }}
                />
                <Particle
                    image="star-white.svg"
                    size={{
                        base: 30,
                        lg: 25
                    }}
                    bgPosition={{
                        base: "75% 50%",
                        sm: "75% 60%",
                        md: "50% 75%",
                        lg: "57% 78%",
                    }}
                    className="z-[5]"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: "5%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative z-[1] inset-0"
            >
                <Box
                    w={{
                        base: "90%",
                        lg: "80%"
                    }}
                    display="flex"
                    flexDirection={{
                        base: "column-reverse",
                        md: "row"
                    }}
                    mx="auto"
                    justifyContent={{
                        base: "center",
                        md: "space-between"
                    }}
                    gap={{
                        base: 5,
                        md: 3,
                        lg: 0,
                    }}
                >
                    <Flex
                        w={{
                            base: "full",
                            md: "50%"
                        }}
                        direction="column"
                        zIndex={971}
                        color="white"
                        gap={{
                            base: 4,
                            lg: 8
                        }}
                        justifyContent={{
                            base: "start",
                            md: "center"
                        }}
                        textColor="saturationRed.900"
                    >
                        <Heading
                            fontSize={{
                                base: 48,
                                md: 56,
                                lg: 72
                            }}
                        >
                            BEPRO
                        </Heading>
                        <Text
                            fontSize={{
                                base: 16,
                                md: 18,
                                lg: 20
                            }}
                            fontWeight="medium"
                        >
                            A competition to test the ability of high school
                            students of the same level in applying multidisciplinary
                            knowledge in accordance with the Department of Biomedical
                            Engineering.
                        </Text>
                        <Flex
                            gap={4}
                        >
                            <LinkBox
                                borderRadius="full"
                                color="saturationRed.900"
                                border="3px solid"
                                borderColor="saturationRed.900"
                                h={30}
                                px={7}
                                py={6}
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                _hover={{
                                    borderColor: "saturationRed.800",
                                    color: "saturationRed.800",
                                    transition: "200ms ease"
                                }}
                            >
                                <LinkOverlay
                                    href="https://its.id/m/GUIDEBOOKBEPRO2024"
                                    fontWeight="semibold"
                                    mx="auto"
                                >
                                    Guidebook
                                </LinkOverlay>
                            </LinkBox>
                            <LinkBox
                                bg="saturationRed.900"
                                borderRadius="full"
                                color="white"
                                border="3px solid"
                                borderColor="saturationRed.900"
                                h={30}
                                px={7}
                                py={6}
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                _hover={{
                                    borderColor: "saturationRed.700",
                                    bg: "saturationRed.700",
                                    transition: "200ms ease"
                                }}
                            >
                                <LinkOverlay
                                    href="/bepro"
                                    fontWeight="semibold"
                                    mx="auto"
                                >
                                    Register
                                </LinkOverlay>
                            </LinkBox>
                        </Flex>
                    </Flex>
                    <Box
                        w={{
                            base: "full",
                            md: "40%"
                        }}
                        zIndex={1902}
                    >
                        <Image
                            w={{
                                base: 72,
                                sm: 96,
                                md: "full"
                            }}
                            src="/images/banner-bepro.png"
                            ignoreFallback
                            mx="auto"
                            alt="banner bepro"
                        />
                    </Box>
                </Box>
            </motion.div>
        </Box>
    );
}

export default BeproHero;