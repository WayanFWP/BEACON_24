import { motion } from "framer-motion";
import Particle from "../Particle";
import FeatureInformation from "./FeatureInformation";
import { Box } from "@chakra-ui/react";

const FeatureFunfact = () => {
  return (
    <Box
      h={{
        base: "160vh",
        md: "120vh",
        lg: "180vh",
      }}
      position="relative"
    >
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, scale: 0.8, x: "5%" }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute z-0 inset-0 w-full h-screen top-1"
      >
        <Particle
          image="particles/home-feature-cloud.svg"
          size={{
            base: 200,
            lg: 300,
          }}
          bgPosition={{
            base: "100% 0%",
            lg: "100% 0%",
          }}
        />
        <Particle
          image="particles/home-feature-blackhole.svg"
          size={{
            base: 350,
            sm: 400,
            md: 500,
            lg: "60%",
          }}
          bgPosition={{
            base: "380% 80%",
            sm: "200% 80%",
            md: "140% 70%",
            lg: "80% 15%",
          }}
        />
        <Particle
          image="radio.svg"
          size={{
            base: 120,
            sm: 150,
            md: 200,
            lg: 350,
          }}
          bgPosition={{
            base: "100% 40%",
            sm: "100% 50%",
            md: "100% 40%",
            lg: "87% 70%",
          }}
        />
        <Particle
          image="bubbles.svg"
          size={{
            base: 400,
            sm: 600,
            md: 700,
            lg: "60%",
          }}
          bgPosition={{
            base: "100% 30%",
            sm: "100% 40%",
            md: "100% 70%",
            lg: "100% 70%",
          }}
        />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute z-[1] inset-0 w-full h-screen top-[500px]"
      >
        <Particle
          image="dots-vertical.svg"
          size={{
            base: 100,
            lg: 200,
          }}
          bgPosition={{
            base: "10% 20%",
            lg: "26% 80%",
          }}
        />
        <Particle
          image="dots.svg"
          size={{
            base: 200,
            lg: 400,
          }}
          bgPosition={{
            base: "100% 40%",
            lg: "85% 87%",
          }}
        />
      </motion.div>
      <Box position="relative">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute z-[1] inset-0 w-full h-screen top-1"
        >
          <FeatureInformation />
        </motion.div>
      </Box>
    </Box>
  );
};

export default FeatureFunfact;
