import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
        primaryblue: {
            100: "#004AB5",
            200: "#1B3888",
            300: "#1B3AAA",
            400: "#1B3BBB",
            500: "#1B3556",
            600: "#122338",
            700: "#0c2038",
            800: "#101c2b",
            900: "#0d1824",
        },
        secondaryBlue: {
            100: "#b4e7ff",
            200: "#91d9fa",
            300: "#80d1f7",
            400: "#81d2f8",
            500: "#6fbadd", 
            600: "#5ca8cb",
            650: "#3bb3d7",
            700: "#3e9ecb",
            800: "#2c6d8b",
            900: "#335c6f",
        },
        saturationBlue: {
            100: "#427abe",
            200: "#75c6cf",
            300: "#427e99",
            400: "#213d62",
            500: "#1f3b5f",
            600: "#2faed4",
            700: "#02418c",
            800: "#152841",
            900: "#39b2cc"
        },
        saturationRed: {
            100: "#F2938A",
            200: "#EC6866",
            300: "#F2938A",
            400: "#F2938A",
            500: "#a53a38",
            600: "#cd3f3d",
            700: "#f65350",
            800: "#913231",
            900: "#E73646",
        },
        primaryYellow: {
            100: "#FAE59C",
            200: "#FBF1CF",
            300: "#fff5d3",
            400: "#FFEEB5",
            500: "#d2cd7f",
            600: "#F1D05F",
            700: "#E8BE29",
        }
    },
})