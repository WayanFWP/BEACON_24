import { RouteURL } from "@/consts/route";
import { Box, Divider, Flex, Image, Link, Text } from "@chakra-ui/react";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (pathname === RouteURL.bepro) {
    return (
      <Flex
        w="full"
        minH={{
          base: 40,
          md: 32,
          lg: 72,
        }}
        bg="saturationRed.800"
        direction="column"
      >
        <Flex
          w={{
            base: "90%",
            md: "80%",
          }}
          mx="auto"
          height={{
            base: "auto",
            lg: 52,
          }}
          p={{
            base: 5,
            lg: 7,
          }}
          pt={{
            lg: 10,
          }}
          justifyContent={{
            base: "start",
            lg: "space-between",
          }}
          alignItems={{
            base: "start",
            lg: "start",
          }}
          direction={{
            base: "column",
            lg: "row",
          }}
          gap={{
            base: 5,
            lg: 3,
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            gap={{
              base: 3,
              lg: 5,
            }}
          >
            <Box
              overflow="hidden"
              boxSize={{
                base: 50,
                lg: 100,
              }}
              position="relative"
            >
              <Image
                src="/images/svg/logo-light.svg"
                alt="logo"
                objectFit="fill"
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
                md: 24,
              }}
              color="white"
            >
              <Text>BEACON</Text>
              <Text>2024</Text>
            </Flex>
          </Box>
          <Flex
            direction="column"
            gap={{
              base: 3,
              lg: 5,
            }}
            mt={{
              base: 7,
              lg: 0,
            }}
          >
            <Text color="white" fontWeight="bold">
              Menu
            </Text>
            <Link
              color="white"
              href=""
              _hover={{
                textDecoration: "none",
                color: "secondaryBlue.500",
              }}
              fontWeight="medium"
            >
              Home
            </Link>
            <Link
              color="white"
              href="/#events"
              _hover={{
                textDecoration: "none",
                color: "secondaryBlue.500",
              }}
              fontWeight="medium"
            >
              Events
            </Link>
          </Flex>
          <Flex
            direction="column"
            gap={{
              base: 3,
              lg: 5,
            }}
            mt={{
              base: 7,
              lg: 0,
            }}
          >
            <Text color="white" fontWeight="bold">
              Contact
            </Text>
            <Text color="white" fontWeight="medium">
              +62 851-5653-8915
            </Text>
            <Link
              href="mailto:beacon.bme@gmail.com"
              color="white"
              fontWeight="medium"
              _hover={{
                textDecoration: "none",
                color: "secondaryBlue.500",
              }}
            >
              beacon.bme@gmail.com
            </Link>
          </Flex>
          <Box
            display={{
              base: "flex",
              lg: "none",
            }}
            mt={{
              base: 7,
              lg: 0,
            }}
          >
            <Link href="https://www.instagram.com/beacon_its">
              <IconBrandInstagram width={40} height={40} color="white" />
            </Link>
            <Link href="https://x.com/its_beacon">
              <IconBrandX width={40} height={40} color="white" />
            </Link>
            <Link href="https://www.linkedin.com/company/beacon-its/">
              <IconBrandLinkedin width={40} height={40} color="white" />
            </Link>
          </Box>
        </Flex>

        <Divider />

        <Flex
          w={{
            base: "90%",
            md: "80%",
          }}
          mx="auto"
          height={{
            base: 7,
            lg: 20,
          }}
          alignItems={{
            base: "center",
          }}
          justifyContent={{
            base: "start",
            lg: "space-between",
          }}
        >
          <Text
            color="white"
            fontSize={{
              base: "xs",
              md: "sm",
            }}
          >
            Copyright © 2024 BEACON Archives. All Rights Reserved
          </Text>
          <Box
            display={{
              base: "none",
              lg: "flex",
            }}
            mt={{
              base: 7,
              lg: 0,
            }}
            gap={3}
          >
            <Link href="https://www.instagram.com/beacon_its">
              <IconBrandInstagram width={40} height={40} color="white" />
            </Link>
            <Link href="https://x.com/its_beacon">
              <IconBrandX width={40} height={40} color="white" />
            </Link>
            <Link href="https://www.linkedin.com/company/beacon-its/">
              <IconBrandLinkedin width={40} height={40} color="white" />
            </Link>
          </Box>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex
      w="full"
      minH={{
        base: 40,
        md: 32,
        lg: 72,
      }}
      bg="saturationBlue.500"
      direction="column"
    >
      <Flex
        w={{
          base: "90%",
          md: "80%",
        }}
        mx="auto"
        height={{
          base: "auto",
          lg: 52,
        }}
        p={{
          base: 5,
          lg: 7,
        }}
        pt={{
          lg: 10,
        }}
        justifyContent={{
          base: "start",
          lg: "space-between",
        }}
        alignItems={{
          base: "start",
          lg: "start",
        }}
        direction={{
          base: "column",
          lg: "row",
        }}
        gap={{
          base: 5,
          lg: 3,
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          gap={{
            base: 3,
            lg: 5,
          }}
        >
          <Box
            overflow="hidden"
            boxSize={{
              base: 50,
              lg: 100,
            }}
            position="relative"
          >
            <Image
              src="/images/svg/logo-light.svg"
              alt="logo"
              objectFit="fill"
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
              md: 24,
            }}
            color="white"
          >
            <Text>BEACON</Text>
            <Text>2024</Text>
          </Flex>
        </Box>
        <Flex
          direction="column"
          gap={{
            base: 3,
            lg: 5,
          }}
          mt={{
            base: 7,
            lg: 0,
          }}
        >
          <Text color="white" fontWeight="bold">
            Menu
          </Text>
          <Link
            color="white"
            href=""
            _hover={{
              textDecoration: "none",
              color: "secondaryBlue.500",
            }}
            fontWeight="medium"
          >
            Home
          </Link>
          <Link
            color="white"
            href="/#events"
            _hover={{
              textDecoration: "none",
              color: "secondaryBlue.500",
            }}
            fontWeight="medium"
          >
            Events
          </Link>
        </Flex>
        <Flex
          direction="column"
          gap={{
            base: 3,
            lg: 5,
          }}
          mt={{
            base: 7,
            lg: 0,
          }}
        >
          <Text color="white" fontWeight="bold">
            Contact
          </Text>
          <Text color="white" fontWeight="medium">
            +62 851-5653-8915
          </Text>
          <Link
            href="mailto:beacon.bme@gmail.com"
            color="white"
            fontWeight="medium"
            _hover={{
              textDecoration: "none",
              color: "secondaryBlue.500",
            }}
          >
            beacon.bme@gmail.com
          </Link>
        </Flex>
        <Box
          display={{
            base: "flex",
            lg: "none",
          }}
          mt={{
            base: 7,
            lg: 0,
          }}
        >
          <Link href="https://www.instagram.com/beacon_its">
            <IconBrandInstagram width={40} height={40} color="white" />
          </Link>
          <Link href="https://x.com/its_beacon">
            <IconBrandX width={40} height={40} color="white" />
          </Link>
          <Link href="https://www.linkedin.com/company/beacon-its/">
            <IconBrandLinkedin width={40} height={40} color="white" />
          </Link>
        </Box>
      </Flex>

      <Divider />

      <Flex
        w={{
          base: "90%",
          md: "80%",
        }}
        mx="auto"
        height={{
          base: 7,
          lg: 20,
        }}
        alignItems={{
          base: "center",
        }}
        justifyContent={{
          base: "start",
          lg: "space-between",
        }}
      >
        <Text
          color="white"
          fontSize={{
            base: "xs",
            md: "sm",
          }}
        >
          Copyright © 2024 BEACON Archives. All Rights Reserved
        </Text>
        <Box
          display={{
            base: "none",
            lg: "flex",
          }}
          mt={{
            base: 7,
            lg: 0,
          }}
          gap={3}
        >
          <Link href="https://www.instagram.com/beacon_its">
            <IconBrandInstagram width={40} height={40} color="white" />
          </Link>
          <Link href="https://x.com/its_beacon">
            <IconBrandX width={40} height={40} color="white" />
          </Link>
          <Link href="https://www.linkedin.com/company/beacon-its/">
            <IconBrandLinkedin width={40} height={40} color="white" />
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Footer;
