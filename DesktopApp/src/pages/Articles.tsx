import {
  Box,
  Heading,
  Flex,
  Input,
  Select,
  IconButton,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";

import { ArticleService } from "../services";
import ArticlesTable from "../components/articles/ArticlesTable";
import { CATEGORIES, SOURCES } from "../utils/helpers";
import DateRangePicker from "../components/articles/DateRangePicker";
import { INewsArticle } from "../interface";
import NewsCarousel from "../components/articles/NewsCarousel";
import NoArticlesFound from "../components/articles/NoArticlesFound";
import { Loader } from "../components";
import { SearchIcon } from "@chakra-ui/icons";

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState<INewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [filters, setFilters] = useState({
    category: CATEGORIES[2],
    source: SOURCES[0],
    dateRange: {
      startDate: new Date(),
      endDate: new Date(),
    }
  });

  const isMobile = useBreakpointValue({ base: true, md: false }) || false;

  const handleFetchArticles = async () => {
    setLoading(true);
    setSearchPerformed(true);
    try {
      const fetchedArticles = await ArticleService.fetchArticles({
        query: searchQuery,
        category: filters.category,
        source: filters.source,
        from: filters.dateRange.startDate,
        to: filters.dateRange.endDate,
      });
      setArticles(fetchedArticles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex w="full" padding="20px" h="full" direction="column" gap="20px">
      <NewsCarousel />
      <Box h="full" minW={{ base: "100%" }}>
        <Flex
          direction="column"
          gap="10px"
          p="20px"
          h="full"
          backgroundColor="whiteAlpha.900"
          boxShadow="md"
          borderRadius="12px"
        >
          <Flex justifyContent="space-between">
            <Heading mb="20px" fontSize="xxl" fontWeight="bold">
              Search Articles
            </Heading>
          </Flex>

          <Flex
            direction={isMobile ? "column" : "row"}
            gap="10px"
            alignItems="center"
          >
            <Input
              type="text"
              placeholder="Specify keyword"
              w="100%"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />

            <Flex direction="row" gap="10px" w="full">
              <Select
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                maxW="100%"
                mb={isMobile ? "10px" : "0"}
              >
                {CATEGORIES.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </Select>

              <Select
                onChange={(e) => setFilters({ ...filters, source: e.target.value })}
                maxW="100%"
              >
                {SOURCES.map((source) => (
                  <option key={source} value={source}>{source}</option>
                ))}
              </Select>
            </Flex>

            <Flex direction="row" gap="10px" w="full">
              <DateRangePicker
                dateRange={filters.dateRange}
                setDateRange={(newRange: { startDate: Date; endDate: Date; }) => setFilters({ ...filters, dateRange: newRange })}
              />
              <IconButton
                bg="brand.main"
                color="white"
                fontSize="xs"
                fontWeight="medium"
                icon={<Icon as={SearchIcon} />}
                aria-label={"search"}
                onClick={handleFetchArticles}
                isDisabled={!searchQuery}
                _hover={{ "backgroundColor": "brand.main" }}
              />
            </Flex>

          </Flex>

          {searchQuery && searchPerformed && (
            <Flex
              w="full"
              p={isMobile ? "none" : "10px"}
              borderRadius="12px"
              border={isMobile ? "none" : "1px solid"}
              borderColor="gray.200"
              justify="center"
              mt={2}
            >
              {loading ? (
                <Loader size="lg" />
              ) : articles.length > 0 ? (
                <ArticlesTable articles={articles} />
              ) : searchPerformed ? (
                <NoArticlesFound />
              ) : null}
            </Flex>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Articles;

export const articleStyles = {
  articles: {
    projectColor: "#3182CE",
    activeColor: "#38A169",
    inActiveColor: "#4A5568",
  },
};
