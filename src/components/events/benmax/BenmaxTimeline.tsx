'use client'

import GallerySponsorship from "@/components/home/GallerySponsorship";
import Particle from "@/components/Particle";
import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const BenmaxTimeline = () => {
    return (
        <Box
            w="full"
            minH={{
                base: "65vh",
                sm: "70vh",
                md: "90vh",
                lg: "90vh"
            }}
            bgGradient="linear-gradient(saturationBlue.900, secondaryBlue.400)"
            position="relative"
            overflow="visible"
            pb={{
                lg: 20,
            }}
        >
            <Particle
                image="beach-wave.svg"
                size={{
                    base: "contain",
                    lg: "contain"
                }}
                bgPosition={{
                    base: "center top",
                    lg: "center top"
                }}
                className="opacity-70"
                zIndex={0}
                top={{
                    base: "-5%",
                    sm: "-6%",
                    lg: "-13%",
                    xl: "-15%"
                }}
            />
            <motion.div
                initial={{ opacity: 0, y: "5%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, amount: 0.1 }}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    gap={5}
                >    
                    <Heading
                        textAlign="center"
                        fontSize={{
                            base: 48,
                            md: 56,
                            lg: 72
                        }}
                        color="white"
                        zIndex={191}
                    >
                        TIMELINE
                    </Heading>
                    <Box
                        w="full"
                        h={{
                            base: 600,
                            sm: 650,
                            md: 900,
                            lg: 1100,
                            xl: 1400
                        }}
                        bgImage="url('/images/timeline-benmax.png')"
                        bgSize={{
                            base: "140%",
                            sm: "100%"
                        }}
                        bgPosition="center center"
                        bgRepeat="no-repeat"
                        zIndex={129}
                    />
                </Box>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: "5%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, amount: 0.1 }}
            >
                <GallerySponsorship />
            </motion.div>
        </Box>
    )
}

export default BenmaxTimeline;