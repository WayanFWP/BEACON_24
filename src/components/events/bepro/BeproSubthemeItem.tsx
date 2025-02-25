import Particle from "@/components/Particle";
import { Box, BoxProps } from "@chakra-ui/react"

const BeproSubthemeItem = ({
    children,
    ...props
}: { children: React.ReactNode } & BoxProps) => {
    return (
        <Box
            bgGradient="linear-gradient(primaryYellow.700, primaryYellow.100, primaryYellow.700)"
            zIndex={10}
            borderRadius="xl"
            position="relative"
            overflow="hidden"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
            {...props}
        >
            <Particle
                className="z-[10]"
                image="particles/events-bepro-cloud.svg"
                size={{
                    base: "50%"
                }}
                bgPosition={{
                    base: "right top",
                    lg: "right top"
                }}
            />
            {children}
        </Box>
    )
}

export default BeproSubthemeItem;