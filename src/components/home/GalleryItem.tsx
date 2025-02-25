import { GridItem, GridItemProps } from "@chakra-ui/react";

const GalleryItem = (props: GridItemProps) => {
    return (
        <GridItem
            h={{
                base: 200,
                lg: 300
            }}
            borderRadius={{
                base: "lg",
                lg: "xl"
            }}
            overflow="hidden"
            {...props}
        />
    )
}

export default GalleryItem;