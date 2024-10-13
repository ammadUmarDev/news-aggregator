import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Tbody,
  Th,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";

import ArticlesTableRow from "./ArticlesTableRow";
import { INewsArticle } from "../../interface";

const TableHeader = ({ text }: { text: string }) => {
  return (
    <Th fontSize="xs" fontWeight="medium">
      {text}
    </Th>
  );
};

const ArticlesTable = ({ articles }: { articles: INewsArticle[] }) => {
  const isMobile = useBreakpointValue({ base: true, md: false }) || false;

  return (
    <TableContainer w="full" h="full">
      {isMobile ? (
        <Box>
          {articles &&
            articles.map((article, i) => (
              <Box
                key={`mobile-article-${i}`}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                p={isMobile ? 0 : 4}
                mb={4}
              >
                <ArticlesTableRow article={article} isMobile={isMobile} />
              </Box>
            ))}
        </Box>
      ) : (
        <Table variant="simple" w="full">
          <Thead>
            <Tr>
              <TableHeader text="Title" />
              <TableHeader text="Description" />
              <TableHeader text="Author" />
              <TableHeader text="Published Date" />
              <TableHeader text="Source" />
            </Tr>
          </Thead>
          <Tbody>
            {articles &&
              articles.map((article, i) => (
                <ArticlesTableRow
                  key={`users-table-data-${i}`}
                  article={article}
                  isMobile={isMobile}
                />
              ))}
          </Tbody>
        </Table>
      )}
    </TableContainer>
  );
};

export default ArticlesTable;
