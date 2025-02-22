'use client'

import Particle from "@/components/Particle";
import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import BeproSubthemeItem from "./BeproSubthemeItem";
import { beproSubtheme } from "@/consts/events";
import { motion } from "framer-motion";

const BeproSubtheme = () => {
    return (
        <Box
            w="full"
            minH={{
                base: "180vh",
                md: "120vh",
                lg: "140vh"
            }}
            bgGradient="linear-gradient(primaryYellow.600, saturationRed.200)"
            position="relative"
            overflow="hidden"
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
                className="opacity-30"
            />
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
                        lg: "20% 5%",
                    }}
                />
                <Particle
                    image="star-white.svg"
                    size={{
                        base: 30,
                        md: 70,
                        lg: 75,
                    }}
                    bgPosition={{
                        base: "30% 15%",
                        md: "5% 5%",
                        lg: "65% 57%",
                    }}
                />
                <Particle
                    image="star-white.svg"
                    size={{
                        base: 30,
                        lg: 25
                    }}
                    bgPosition={{
                        base: "50% 72%",
                        sm: "75% 60%",
                        md: "72% 40%",
                        lg: "10% 42%",
                    }}
                    className="z-[5]"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: "5%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, amount: 0.1 }}
                className="absolute z-0 inset-0"
            >
                <Box
                    w={{
                        base: "90%",
                        lg: "80%"
                    }}
                    mx="auto"
                    color="white"
                    py={{
                        base: 5,
                        lg: 10
                    }}
                >
                    <Heading
                        textAlign="center"
                        fontSize={{
                            base: 48,
                            md: 56,
                            lg: 72
                        }}
                        zIndex={19921}
                        color="saturationRed.900"
                    >
                        MATERIAL
                    </Heading>
                    <Flex
                        mx="auto"
                        w={{
                            base: "full",
                            md: "90%",
                        }}
                        gap={4}
                        mt={{
                            base: 4,
                            md: 8,
                            lg: 10
                        }}
                        justifyContent="center"
                        alignItems="center"
                        flexWrap="wrap"
                    >
                        {beproSubtheme.map((subtheme, index) => {
                            return (
                                <BeproSubthemeItem
                                    w={{
                                        base: "full",
                                        md: "30%"
                                    }}
                                    key={index}
                                    h={subtheme.h}
                                    px={5}
                                >
                                    <Image
                                        alt="icon"
                                        w={70}
                                        h={70}
                                        src={subtheme.icon}
                                        ignoreFallback
                                    />
                                    <Text
                                        zIndex={10}
                                        textAlign="center"
                                        fontSize={{
                                            base: "lg",
                                            lg: "xl"
                                        }}
                                        fontWeight={{
                                            base: "bold",
                                        }}
                                        color="saturationRed.900"
                                    >
                                        {subtheme.text}
                                    </Text>
                                </BeproSubthemeItem>
                            );
                        })}
                    </Flex>
                </Box>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: "5%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, amount: 0.1 }}
                className="absolute z-0 inset-0"
            >
                <Particle
                    image="sunset-cloud.svg"
                    size={{
                        base: "100%"
                    }}
                    bgPosition={{
                        base: "center bottom",
                        lg: "center bottom"
                    }}
                />
            </motion.div>
        </Box>
    );
}

export default BeproSubtheme;