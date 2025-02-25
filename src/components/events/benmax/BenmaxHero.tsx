'use client'

import ContactButton from "@/components/competitions/ContactButton";
import Particle from "@/components/Particle";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const BenmaxHero = () => {

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
            bgGradient="linear-gradient(saturationBlue.600, saturationBlue.700)"
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
                initial={{ opacity: 0, x: "-5%" }}
                whileInView={{ opacity: 0.7, x: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="absolute z-[1] inset-0"
            >
                <Particle
                    image="galaxy-white.svg"
                    size={{
                        base: "100%",
                        sm: "75%",
                        md: "50%",
                        lg: "50%"
                    }}
                    bgPosition={{
                        base: "left top",
                        lg: "left top"
                    }}
                />
                <Particle
                    image="galaxy-black.svg"
                    size={{
                        base: "50%",
                        sm: "40%",
                        md: "50%",
                        lg: "40%"
                    }}
                    bgPosition={{
                        base: "left center",
                        md: "left bottom",
                        lg: "left bottom",
                        xl: "left bottom"
                    }}
                    top={{
                        lg: 150
                    }}
                    zIndex={1992}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: "5%" }}
                whileInView={{ opacity: 0.7, x: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="absolute z-[1] inset-0"
            >
                <Particle
                    image="galaxy-white.svg"
                    size={{
                        base: "100%",
                        sm: "75%",
                        md: "50%",
                        lg: "50%"
                    }}
                    bgPosition={{
                        base: "0% 1%",
                        lg: "0% 250%",
                        xl: "0% 450%"
                    }}
                    className="rotate-180"
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
                    >
                        <Heading
                            fontSize={{
                                base: 48,
                                md: 56,
                                lg: 72
                            }}
                        >
                            BENMAX
                        </Heading>
                        <Text
                            fontSize={{
                                base: 16,
                                md: 18,
                                lg: 20
                            }}
                        >
                            An international scientific writing competition aimed
                            at undergraduate and diploma students (S1/D4/D3) with
                            a focus on innovative technology.
                        </Text>
                        <Flex
                            gap={4}
                        >
                            <ContactButton
                                linkTo="https://its.id/m/GUIDEBOOKBENMAX2024"
                                text="Guidebook"
                                dark={false}
                                icon={undefined}
                                borderRadius="full"
                            />
                            <ContactButton
                                linkTo="/benmax"
                                text="Register"
                                dark={true}
                                icon={undefined}
                                borderRadius="full"
                            />
                        </Flex>
                    </Flex>
                    <Box
                        w={{
                            base: "full",
                            md: "50%"
                        }}
                        zIndex={1902}
                    >
                        <Image
                            w={{
                                base: 72,
                                sm: 96,
                                md: "full"
                            }}
                            src="/images/banner-benmax.png"
                            ignoreFallback
                            mx="auto"
                            alt="banner-benmax"
                        />
                    </Box>
                </Box>
            </motion.div>
        </Box>
    );
}

export default BenmaxHero;