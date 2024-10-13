import { Tr, Flex, Text } from "@chakra-ui/react";
import ArticlesTableData from "./ArticlesTableData";
import { INewsArticle } from "../../interface";
import { format } from "date-fns";

const ArticlesTableRow = ({
  article,
  isMobile,
}: {
  article: INewsArticle;
  isMobile: boolean;
}) => {
  if (isMobile) {
    return (
      <Flex
        direction="column"
        p="4"
        borderRadius="md"
        overflow="hidden"
        maxW="100%"
      >
        <Text
          fontSize="md"
          fontWeight="bold"
          overflowWrap="break-word"
          wordBreak="break-word"
          whiteSpace="normal"
        >
          {article.title}
        </Text>
        <Text
          fontSize="sm"
          overflowWrap="break-word"
          wordBreak="break-word"
          whiteSpace="normal"
        >
          {article.description || article.content}
        </Text>
        <Text
          fontSize="sm"
          color="gray.600"
          overflowWrap="break-word"
          wordBreak="break-word"
          whiteSpace="normal"
        >
          Author: {article.author || "N/A"}
        </Text>
        <Text
          fontSize="sm"
          color="gray.600"
          overflowWrap="break-word"
          wordBreak="break-word"
          whiteSpace="normal"
        >
          Published: {format(new Date(article.publishedAt), "dd/MM/yyyy hh:mm a")}
        </Text>
        <Text
          fontSize="sm"
          color="gray.600"
          overflowWrap="break-word"
          wordBreak="break-word"
          whiteSpace="normal"
        >
          Source: {article.source || "N/A"}
        </Text>
      </Flex>
    );
  }

  return (
    <Tr>
      <ArticlesTableData text={article.title} url={article.url} />
      <ArticlesTableData
        text={article.description || article.content}
        maxWidth="650px"
      />
      <ArticlesTableData text={article.author || "N/A"} />
      <ArticlesTableData
        text={format(new Date(article.publishedAt), "dd/MM/yyyy hh:mm a")}
      />
      <ArticlesTableData text={article.source || "N/A"} />
    </Tr>
  );
};

export default ArticlesTableRow;
