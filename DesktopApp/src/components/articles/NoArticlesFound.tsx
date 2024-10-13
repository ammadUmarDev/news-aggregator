import { Flex, Text } from "@chakra-ui/react";

import { DetailIcon } from "../../bootstrap/icons";

const NoArticlesFound = () => {
    return (
        <Flex direction="column" align="center" justify="center">
            <DetailIcon w="50px" h="50px" />
            <Text fontSize="md" fontWeight="medium">
                No articles found
            </Text>
        </Flex>
    );
};

export default NoArticlesFound;
