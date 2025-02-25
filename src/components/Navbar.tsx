import { 
    Box,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Hide,
    HStack,
    Link,
    LinkBox,
    LinkOverlay,
    ListItem,
    Show,
    Text,
    UnorderedList,
    useDisclosure,
    VStack
} from "@chakra-ui/react"
import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import { RouteURL } from "@/consts/route"
import ContactButton from "./competitions/ContactButton";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navbarRoute = [
    {
        title: "Home",
        route: RouteURL.index
    },
    {
        title: "Events",
        route: "/#events"
    },
    {
        title: "Login",
        route: RouteURL.login
    },
    {
        title: "Register",
        route: RouteURL.register
    },
]

export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const pathname = usePathname();

    if (pathname === RouteURL.bepro) {
        return (
        <Box
            w="full"
            h={{
                base: 20,
                md: 32
            }}
            bg="transparent"
            position="absolute"
            zIndex={1338}
        >
            <motion.div
                initial={{ top: "-100%" }}
                animate={{ top: 0 }}
                transition={{
                    duration: 0.7,
                }}
                className="z-[1337] absolute w-full h-20 md:h-32"
            >
            <Flex
                h="full"
                alignItems="center"
                justifyContent="space-between"
                px={{
                    base: 5,
                    md: 28
                }}
            >
                <Link 
                    href="/"
                    _hover={{
                        textDecoration: "none"
                    }}
                >
                    <Flex
                        gap={2}
                        alignItems="center"
                    >
                        <Box
                            overflow="hidden"
                            w={{
                                base: "55px",
                                md: "60px",
                            }}
                            h={{
                                base: "55px",
                                md: "60px",
                            }}
                            position="relative"
                        >
                            <Image
                                src="/images/svg/logo-red.svg"
                                alt="logo"
                                fill
                                sizes={undefined}
                                loading="lazy"
                                className="absolute w-full h-full"
                            />
                        </Box>
                        <Flex
                            direction="column"
                            fontWeight="bold"
                            fontSize={{
                                base: "md",
                                md: "lg"
                            }}
                            bgGradient="linear-gradient(primaryYellow.700, saturationRed.900, saturationRed.900, saturationRed.900)"
                            bgClip="text"
                        >
                            <Text>
                                BEACON
                            </Text>
                            <Text>
                                2024
                            </Text>
                        </Flex>
                    </Flex>
                </Link>
                <Show
                    below="lg"
                >
                    <IconMenu2
                        size={28}
                        onClick={onOpen}
                        cursor="pointer"
                        color="#E73646"
                    />
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                    >
                        <DrawerOverlay />
                        <DrawerContent
                            bg="saturationRed.800"
                        >
                            <DrawerHeader>
                                <Box
                                    overflow="hidden"
                                    w={{
                                        base: "55px",
                                        md: "60px",
                                    }}
                                    h={{
                                        base: "55px",
                                        md: "60px",
                                    }}
                                    position="relative"
                                >
                                    <Image
                                        src="/images/svg/logo-red.svg"
                                        alt="logo"
                                        fill
                                        sizes={undefined}
                                        loading="lazy"
                                        className="absolute w-full h-full"
                                    />
                                </Box>
                            </DrawerHeader>

                            <DrawerBody>
                                <VStack
                                    align="start"
                                    spacing={4}
                                    mt={10}
                                >
                                    {navbarRoute.map((route, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                href={route.route}
                                                _hover={{
                                                    textDecoration: "none",
                                                    color: "primaryYellow.700"
                                                }}
                                                fontWeight="semibold"
                                                color={route.route === pathname ? "primaryYellow.700"
                                                    : "primaryYellow.100"
                                                }
                                            >
                                                {route.title}
                                            </Link>
                                        )
                                    })}
                                    <ContactButton
                                        linkTo="mailto:beacon.bme@gmail.com"
                                        text={"Contact Us"}
                                        dark={false}
                                        icon={undefined}
                                    />
                                </VStack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Show>
                <Hide
                    below="lg"
                >
                    <HStack
                        spacing={14}
                    >
                    {navbarRoute.map((route, index) => {
                        return (
                            <React.Fragment key={index}> 
                                {route.route !== RouteURL.register ? (
                                    <Link
                                        key={index}
                                        href={route.route}
                                        _hover={{
                                            textDecoration: "none",
                                            color: "saturationRed.500"
                                        }}
                                        fontWeight="semibold"
                                        bgGradient="linear-gradient(primaryYellow.700, saturationRed.900, saturationRed.900)"
                                        bgClip="text"
                                    >
                                        {route.title}
                                    </Link>
                                ) : (
                                    <LinkBox
                                        py={2}
                                        px={8}
                                        borderRadius="full"
                                        border="3px solid"
                                        borderColor="saturationRed.900"
                                        fontWeight="bold"
                                    >
                                        <LinkOverlay
                                            href={route.route}
                                            bgGradient="linear-gradient(primaryYellow.700, saturationRed.900, saturationRed.900)"
                                            bgClip="text"
                                            _hover={{
                                                color: "saturationRed.500",
                                                transition: "200ms ease"
                                            }}
                                        >
                                            {route.title}
                                        </LinkOverlay>
                                    </LinkBox>
                                )}
                            </React.Fragment>
                        )
                    })}
                    </HStack>
                </Hide>
            </Flex>
            </motion.div>
        </Box>
        )
    }

    return (
        <Box
            w="full"
            h={{
                base: 20,
                md: 32
            }}
            bg="transparent"
            position="absolute"
            zIndex={1338}
        >
            <motion.div
                initial={{ top: "-100%" }}
                animate={{ top: 0 }}
                transition={{
                    duration: 0.7,
                }}
                className="z-[1337] absolute w-full h-20 md:h-32"
            >
            <Flex
                h="full"
                alignItems="center"
                justifyContent="space-between"
                px={{
                    base: 5,
                    md: 28
                }}
            >
                <Link 
                    href="/"
                    _hover={{
                        textDecoration: "none"
                    }}
                >
                    <Flex
                        gap={2}
                        alignItems="center"
                    >
                        <Box
                            overflow="hidden"
                            w={{
                                base: "55px",
                                md: "60px",
                            }}
                            h={{
                                base: "55px",
                                md: "60px",
                            }}
                            position="relative"
                        >
                            <Image
                                src="/images/svg/logo.svg"
                                alt="logo"
                                fill
                                sizes={undefined}
                                loading="lazy"
                                className="absolute w-full h-full"
                            />
                        </Box>
                        <Flex
                            direction="column"
                            fontWeight="bold"
                            fontSize={{
                                base: "md",
                                md: "lg"
                            }}
                        >
                            <Text>
                                BEACON
                            </Text>
                            <Text>
                                2024
                            </Text>
                        </Flex>
                    </Flex>
                </Link>
                <Show
                    below="lg"
                >
                    <IconMenu2
                        size={28}
                        onClick={onOpen}
                        cursor="pointer"
                    />
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                    >
                        <DrawerOverlay />
                        <DrawerContent
                            bg="primaryblue.500"
                            textColor="white"
                        >
                            <DrawerHeader>
                                <Box
                                    overflow="hidden"
                                    w={{
                                        base: "55px",
                                        md: "60px",
                                    }}
                                    h={{
                                        base: "55px",
                                        md: "60px",
                                    }}
                                    position="relative"
                                >
                                    <Image
                                        src="/images/svg/logo-light.svg"
                                        alt="logo"
                                        fill
                                        sizes={undefined}
                                        loading="lazy"
                                        className="absolute w-full h-full"
                                    />
                                </Box>
                            </DrawerHeader>

                            <DrawerBody>
                                <VStack
                                    align="start"
                                    spacing={4}
                                    mt={10}
                                >
                                    {navbarRoute.map((route, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                href={route.route}
                                                _hover={{
                                                    textDecoration: "none",
                                                    color: "secondaryBlue.100"
                                                }}
                                                fontWeight="semibold"
                                                color={route.route === pathname ? "secondaryBlue.100"
                                                    : "white"
                                                }
                                            >
                                                {route.title}
                                            </Link>
                                        )
                                    })}
                                    <ContactButton
                                        linkTo="mailto:beacon.bme@gmail.com"
                                        text={"Contact Us"}
                                        dark={false}
                                        icon={undefined}
                                    />
                                </VStack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Show>
                <Hide
                    below="lg"
                >
                    <HStack
                        spacing={14}
                    >
                    {navbarRoute.map((route, index) => {
                        return (
                            <React.Fragment key={index}> 
                                {route.route !== RouteURL.register ? (
                                    <Link
                                        key={index}
                                        href={route.route}
                                        _hover={{
                                            textDecoration: "none",
                                            color: "primaryblue.100"
                                        }}
                                        fontWeight="semibold"
                                    >
                                        {route.title}
                                    </Link>
                                ) : (
                                    <LinkBox
                                        py={2}
                                        px={8}
                                        borderRadius="full"
                                        border="3px solid black"
                                        fontWeight="bold"
                                        _hover={{
                                            bgColor: "secondaryBlue.400",
                                            transition: "200ms ease"
                                        }}
                                    >
                                        <LinkOverlay href={route.route}>
                                            {route.title}
                                        </LinkOverlay>
                                    </LinkBox>
                                )}
                            </React.Fragment>
                        )
                    })}
                    </HStack>
                </Hide>
            </Flex>
            </motion.div>
        </Box>
    )
}