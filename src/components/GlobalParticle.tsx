'use client'

import { motion, MotionProps } from "framer-motion";
import Particle from "./Particle";
import { useRef } from "react";

interface GlobalParticleProps {
    image: string;
    size: {
        base?: number | string;
        sm?: number | string;
        md?: number | string;
        lg?: number | string;
        xl?: number | string;
    } | number;
    position: string | {
        base?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
    };
    className?: string;
}

const GlobalParticle = (props: GlobalParticleProps & MotionProps ) => {
    return (
        <motion.div
            className={`absolute z-0 inset-0`}
            {...props}
        >
            <Particle
                image={props.image}
                size={props.size}
                bgPosition={props.position}
                className={props.className}
            />
        </motion.div>
    )
}

export default GlobalParticle;