import {
    Box,
    Heading,
    Flex,
    Text,
    IconButton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { ArticleService } from "../../services";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { INewsArticle } from "../../interface";
import NoArticlesFound from "./NoArticlesFound";
import { AppContext, useAppContext } from "../../contexts/AppProvider";

const NewsCarousel = () => {
    const { userPreference } = useAppContext();
    const [latestNewsArticles, setLatestNewsArticles] = useState<INewsArticle[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const fetchLatestArticlesData = async () => {
        try {
            const fetchedArticles = await ArticleService.fetchLatestArticles(userPreference);
            setLatestNewsArticles(fetchedArticles);
        } catch (error) {
            console.error("Error fetching latest articles:", error);
        } finally {
        }
    };

    useEffect(() => {
        fetchLatestArticlesData();
    }, [userPreference]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === latestNewsArticles.length - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? latestNewsArticles.length - 1 : prevSlide - 1
        );
    };

    return (
        <Box w="full" h="full">
            <Box h="full" minW={{ base: "100%" }}>
                <Flex direction="column" gap="10px" p="20px" h="full" backgroundColor="whiteAlpha.900" boxShadow="md" borderRadius="12px">
                    <Flex justifyContent="space-between" alignItems="center">
                        <Heading mb="10px" fontSize="xxl" fontWeight="bold">
                            Latest News
                        </Heading>
                    </Flex>

                    <Flex justifyContent="space-between" alignItems="center">
                        {latestNewsArticles.length >= 1 && <IconButton
                            icon={<ArrowBackIcon />}
                            onClick={prevSlide}
                            aria-label="Previous Slide"
                            disabled={latestNewsArticles.length <= 1}
                            borderRadius="50%"
                        />}

                        <Box
                            w="full"
                            p="10px"
                            borderRadius="12px"
                            textAlign="center"
                            position="relative"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            h="200px"
                            overflow="hidden"
                        >
                            {latestNewsArticles.length >= 1 ? (
                                <Box textAlign="center">
                                    <Text fontWeight="bold" fontSize="lg" mb={2}>
                                        {latestNewsArticles[currentSlide].title}
                                    </Text>
                                    <Text fontSize="md" noOfLines={3}>
                                        {latestNewsArticles[currentSlide].description}
                                    </Text>
                                    <Text mt={2} fontSize="xs" color="gray.500">
                                        Source: {latestNewsArticles[currentSlide].source}
                                    </Text>
                                </Box>
                            ) : (
                                <NoArticlesFound />
                            )}
                        </Box>

                        {latestNewsArticles.length >= 1 && <IconButton
                            icon={<ArrowForwardIcon />}
                            onClick={nextSlide}
                            aria-label="Next Slide"
                            disabled={latestNewsArticles.length <= 1}
                            borderRadius="50%"
                        />}
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default NewsCarousel;
