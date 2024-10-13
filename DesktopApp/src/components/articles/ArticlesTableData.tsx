import { Box, Td, Link } from "@chakra-ui/react";

const ArticlesTableData = ({
  text,
  cursor,
  maxWidth,
  url,
  width,

}: {
  text: string;
  cursor?: string;
  url?: string;
  width?: string;
  maxWidth?: string;
}) => {
  return (
    <Td
      fontSize="sm"
      fontWeight="normal"
      cursor={cursor || (url ? "pointer" : "default")}
      textDecoration={"none"}
    >
      <Box
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="normal"
        noOfLines={3}
        w={width ? width : "full"}
        maxW={maxWidth ? maxWidth : "full"}
      >
        {url ? (
          <Link href={url} isExternal color="blue.500">
            {text}
          </Link>
        ) : (
          text
        )}
      </Box>
    </Td>
  );
};

export default ArticlesTableData;
