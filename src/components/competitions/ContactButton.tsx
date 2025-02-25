import { LinkBox, LinkBoxProps, LinkOverlay } from "@chakra-ui/react"
import { IconMail } from "@tabler/icons-react"
import { ReactNode } from "react"

const ContactButton = ({
    linkTo,
    text,
    dark,
    icon,
    borderRadius="lg",
    ...props
}: {
    linkTo: string,
    text: string,
    dark: boolean,
    icon?: ReactNode,
    borderRadius?: string | number
} & LinkBoxProps) => {
    return (
        <LinkBox
            bg={dark ? "primaryblue.500" : "white"}
            _hover={dark ? {
                bg: "primaryblue.600"
            } : {
                bg: "#f8f8f8"
            }}
            color={dark ? "white" : "black"}
            py={props.py ?? 6}
            px={props.px ?? 5}
            height={props.h ?? 30}
            borderRadius={borderRadius}
            border={dark ? {
                border: "none"
            } : {
                border: "1px solid #9a9a9a"
            }}
            display="flex"
            gap={3}
            my={3}
            className="justify-start items-center"
            {...props}
        >
            {icon ?? ""}
            <LinkOverlay
                href={linkTo}
                fontWeight="semibold"
                mx="auto"
            >
                {text}
            </LinkOverlay>
        </LinkBox>
    )
}

export default ContactButton;