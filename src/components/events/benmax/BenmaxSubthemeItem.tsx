import Particle from "@/components/Particle";
import { GridItem, GridItemProps } from "@chakra-ui/react"

const BenmaxSubthemeItem = ({
    children,
    ...props
}: { children: React.ReactNode } & GridItemProps) => {
    return (
        <GridItem
            bgColor="saturationBlue.800"
            zIndex={10}
            borderRadius="xl"
            position="relative"
            overflow="hidden"
            display="flex"
            justifyContent="center"
            alignItems="center"
            {...props}
        >
            <Particle
                className="z-[10]"
                image="particles/events-benmax-blackhole.svg"
                size={{
                    base: "50%"
                }}
                bgPosition={{
                    base: "center center",
                    lg: "center center"
                }}
            />
            <Particle
                className="z-[10]"
                image="particles/events-benmax-cloud-left.svg"
                size={{
                    base: 120
                }}
                bgPosition={{
                    base: "left bottom"
                }}
            />
            <Particle
                className="z-[10]"
                image="particles/events-benmax-cloud-right.svg"
                size={{
                    base: 120
                }}
                bgPosition={{
                    base: "right top"
                }}
            />
            <Particle
                className="z-[10]"
                image="particles/events-benmax-stars.svg"
                size={{
                    base: "40%"
                }}
                bgPosition={{
                    base: "center center",
                    lg: "center center"
                }}
            />
            {children}
        </GridItem>
    )
}

export default BenmaxSubthemeItem;