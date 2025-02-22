'use client'

import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import Particle from "../Particle";
import { motion } from "framer-motion";
import AboutMain from "./AboutMain";

const About = () => {
    return (
        <Box
            w="full"
            h={{
                base: "100vh",
                lg: "130vh"
            }}
            bgGradient="linear-gradient(primaryYellow.500, saturationBlue.100)"
            position="relative"
            overflow="hidden"
        >
            <Particle
                image="sand.svg"
                size={{
                    base: "cover",
                }}
                bgPosition={{
                    base: "center center",
                }}
                className="opacity-80"
            />
            <motion.div
                viewport={{ once: true, amount: 0.2 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute z-0 inset-0 w-full h-full"
            >
                <Particle
                    image="stars.svg"
                    size={{
                        base: "cover",
                    }}
                    bgPosition={{
                        base: "center center",
                    }}
                />
            </motion.div>
            <motion.div
                viewport={{ once: true, amount: 0.2 }}
                initial={{ opacity: 0, scale: 0.8, x: "-5%" }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute z-0 inset-0 w-full h-screen top-1"
            >
                <Particle
                    image="particles/home-about-star.svg"
                    size={{
                        base: 120,
                        lg: 160
                    }}
                    bgPosition={{
                        base: "20% 13%",
                        lg: "10% 20%"
                    }}
                />
            </motion.div>
            <motion.div
                viewport={{ once: true, amount: 0.2 }}
                initial={{ opacity: 0, scale: 0.8, x: "5%" }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute z-0 inset-0 w-full h-screen top-1 lg:top-72"
            >
                <Particle
                    image="particles/home-feature-blackhole.svg"
                    size={{
                        base: "90%",
                        sm: "80%",
                        md: "80%",
                        lg: "60%"
                    }}
                    bgPosition={{
                        base: "400% 80%",
                        sm: "170% 80%",
                        md: "250% 90%",
                        lg: "120% 80%"
                    }}
                />
            </motion.div>
            <motion.div
                viewport={{ once: true, amount: 0.2 }}
                initial={{ opacity: 0, scale: 0.8, x: "-5%" }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                    duration: 1.5
                }}
                className="absolute z-0 inset-0 absolute z-0 inset-0 top-1"
            >
                <AboutMain />
            </motion.div>
        </Box>
    );
}

export default About;