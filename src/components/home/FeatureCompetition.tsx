import { motion } from "framer-motion";
import Particle from "../Particle";
import FeatureCompetitionDiscover from "./FeatureCompetitionDiscover";
import { Box } from "@chakra-ui/react";
import FeatureCompetitionEvent from "./FeatureCompetitionEvent";
import { RouteURL } from "@/consts/route";

const FeatureCompetition = () => {
    return (
        <Box
            h={{
                base: "80vh",
                md: "110vh",
                lg: "140vh"
            }}
            position="relative"
        >
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.8, x: "-5%" }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute z-0 inset-0 w-full h-screen top-32"
            >
                <Particle
                    image="particles/home-feature-cloud-2.svg"
                    size={{
                        base: 120,
                        lg: 250
                    }}
                    bgPosition={{
                        base: "0% 0%",
                        lg: "0% 0%"
                    }}
                />
            </motion.div>
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.8, x: "5%" }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute z-0 inset-0 w-full h-screen"
            >
                <Particle
                    image="bubbles.svg"
                    size={{
                        base: 300,
                        lg: "55%"
                    }}
                    bgPosition={{
                        base: "100% 20%",
                        lg: "100% 0%"
                    }}
                    className="z-[1]"
                />
                <Particle
                    image="particles/home-feature-blackhole.svg"
                    size={{
                        base: 300,
                        sm: 330,
                        md: 380,
                        lg: "55%"
                    }}
                    bgPosition={{
                        base: "210% 20%",
                        sm: "150% 20%",
                        md: "130% 20%",
                        lg: "120% 0%"
                    }}
                />
            </motion.div>
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, x: "-5%" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="relative z-0 inset-0 w-full"
            >
                <FeatureCompetitionDiscover />
            </motion.div>
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, x: "5%" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="relative z-[1] inset-0 w-full"
            >
                <FeatureCompetitionEvent
                    title="BEPRO"
                    description="Biomedical Engineering Prime Competition"
                    moreUrl={RouteURL.bepro}
                    logo="/images/banner-bepro.png"
                    borderStartRadius="xl"
                    ml="auto"
                    bg="primaryYellow.100"
                    bgImage="url('/images/svg/sunset-cloud.svg')"
                    bgSize="cover"
                />
            </motion.div>
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, x: "-5%" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="relative z-[1] inset-0 w-full"
            >
                <FeatureCompetitionEvent
                    title="BENMAX"
                    description="Biomedical Engineering Smart Exhibition"
                    moreUrl={RouteURL.benmax}
                    logo="/images/banner-benmax.png"
                    borderEndRadius="xl"
                    mr="auto"
                    bg="secondaryBlue.300"
                    bgImage="url('/images/svg/seashore.svg')"
                    bgSize="cover"
                />
            </motion.div>
        </Box>
    )
}

export default FeatureCompetition;