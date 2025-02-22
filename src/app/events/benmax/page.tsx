'use client'

import BenmaxHero from "@/components/events/benmax/BenmaxHero";
import BenmaxSubtheme from "@/components/events/benmax/BenmaxSubtheme";
import BenmaxTimeline from "@/components/events/benmax/BenmaxTimeline";
import Particle from "@/components/Particle";
import { motion } from "framer-motion";

const BenmaxPage = () => {
    return (
        <>
            <BenmaxHero />
            <BenmaxSubtheme />
            <BenmaxTimeline />
        </>
    );
}

export default BenmaxPage;