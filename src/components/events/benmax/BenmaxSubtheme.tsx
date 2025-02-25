'use client'

import Particle from "@/components/Particle";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import BenmaxSubthemeItem from "./BenmaxSubthemeItem";
import { benmaxSubtheme } from "@/consts/events";
import { motion } from "framer-motion";

const BenmaxSubtheme = () => {
    return (
        <Box
            w="full"
            minH={{
                base: "230vh",
                md: "180vh",
                lg: "180vh"
            }}
            bgGradient="linear-gradient(saturationBlue.700, primaryblue.700)"
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
                    >
                        THEME
                    </Heading>
                    <Grid
                        mx="auto"
                        w="full"
                        templateRows={{
                            base: "repeat(1, 1fr)",
                        }}
                        templateColumns={{
                            base: "repeat(1, 1fr)",
                            md: "repeat(2, 1fr)",
                            lg: "repeat(15, 1fr)"
                        }}
                        gap={4}
                        mt={{
                            base: 4,
                            md: 8,
                            lg: 10
                        }}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {benmaxSubtheme.map((subtheme, index) => {
                            return (
                                <BenmaxSubthemeItem
                                    key={index}
                                    colSpan={subtheme.colSpan}
                                    h={subtheme.h}
                                    px={5}
                                >
                                    <Text
                                        zIndex={10}
                                        textAlign="center"
                                        fontSize={{
                                            base: "lg",
                                            lg: "xl"
                                        }}
                                        fontWeight={{
                                            base: "medium",
                                        }}
                                    >
                                        {subtheme.text}
                                    </Text>
                                </BenmaxSubthemeItem>
                            );
                        })}
                    </Grid>
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
                    image="seashore-clean.svg"
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

export default BenmaxSubtheme;