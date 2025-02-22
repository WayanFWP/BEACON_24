'use client'

import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import Particle from "../Particle";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import ContactButton from "../competitions/ContactButton";
import HeroMain from "./HeroMain";

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const blackholeY = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
    const starY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const zIndexY = useTransform(scrollYProgress, [0, 1], [10, 8]);

    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);

    return (
        <Box
            ref={ref}
            w="full"
            h="100vh"
            bgColor="secondaryBlue.100"
            position="relative"
            overflow="hidden"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.7
                }}
                style={{
                    y: blackholeY
                }}
                className="absolute z-0 inset-0 w-full h-screen"
            >
                <Particle
                    image="blackhole.svg"
                    size={{
                        base: "250%",
                        sm: "150%",
                        md: "contain",
                        lg: "76%",
                    }}
                    bgPosition={{
                        base: "65% 50%",
                        lg: "23% 33%"
                    }}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.7
                }}
                style={{
                    y: starY
                }}
                className="absolute z-0 inset-0"
            >
                <Particle
                    image="star.svg"
                    size={76}
                    bgPosition={"82% 50%"}
                />
                <Particle
                    image="star.svg"
                    size={76}
                    bgPosition={"18% 18%"}
                />
                <Particle
                    image="star.svg"
                    size={53}
                    bgPosition={"28% 64%"}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, top: "-10%", x: "10%" }}
                animate={{ opacity: 1, top: 0, x: 0 }}
                transition={{
                    duration: 0.7
                }}
                className="absolute z-0 inset-0 w-full h-screen"
            >
                <Particle
                    image="particles/home-banner-sunlight.svg"
                    size={{
                        base: 700,
                        md: 800,
                        lg: 1200
                    }}
                    bgPosition="right top"
                />
            </motion.div>
            <motion.div
                initial={{ top: "100%" }}
                animate={{ top: 0 }}
                transition={{
                    duration: 0.7,
                }}
                className="absolute z-[10] inset-0 w-full h-screen"
            >
                <Particle
                    image="particles/home-banner-wave.svg"
                    size={{
                        base: "contain"
                    }}
                    bgPosition="center bottom"
                    className="z-[10]"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, top: "100%" }}
                animate={{ opacity: 1, top: 0 }}
                transition={{
                    duration: 0.7
                }}
                style={{
                    y: textY,
                    zIndex: zIndexY
                }}
                className="absolute z-0 inset-0"
            >
                <HeroMain />
            </motion.div>
        </Box>
    )
}

export default Hero;