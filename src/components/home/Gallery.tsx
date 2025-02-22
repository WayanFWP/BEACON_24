'use client'

import { Box } from "@chakra-ui/react";
import Particle from "../Particle";
import GalleryMain from "./GalleryMain";
import { motion } from "framer-motion";
import GallerySponsorship from "./GallerySponsorship";

const Gallery = () => {
    return (
        <Box
            w="full"
            minH={{
                base: "120vh",
                lg: "200vh"
            }}
            bgColor="secondaryBlue.100"
            position="relative"
            overflow="hidden"
        >
            <Particle
                image="particles/home-gallery-wave.svg"
                size={{
                    base: "100%",
                    lg: "100%"
                }}
                bgPosition={{
                    base: "0% 0%",
                    lg: "0% 0%"
                }}
            />
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: "5%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="relative z-[1] inset-0 w-full"
            >
                <GalleryMain />
            </motion.div>
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: "5%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="relative z-[1] inset-0 w-full"
            >
                <GallerySponsorship />
            </motion.div>
        </Box>
    )
}

export default Gallery;