import { Box, BoxProps } from "@chakra-ui/react";

interface ParticleProps {
    image: string;
    size: {
        base?: number | string;
        sm?: number | string;
        md?: number | string;
        lg?: number | string;
        xl?: number | string;
    } | number;
    className?: string;
}

const Particle = (props: ParticleProps & BoxProps) => {
    return (
        <Box
            w="full"
            h="full"
            bgImage={`url('/images/svg/${props.image}')`}
            bgRepeat="no-repeat"
            bgSize={props.size}
            position="absolute"
            className={props?.className ?? ""}
            {...props}
        />
    )
}

export default Particle;