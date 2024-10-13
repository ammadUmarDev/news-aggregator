import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AppLogo from "../../assets/logo.png";
import { PAGES } from "../../enum";
import UserMenu from "./UserMenu";

import NotificationsBar from "./NotificationsBar";

function Header() {
  const navigate = useNavigate();

  const getDashboardLinkColor = () => {
    if (["/dashboard/", "/dashboard"].includes(window.location.pathname)) {
      return "brand.main";
    }
    return "black";
  };
  const getProjectsLinkColor = () => {
    if (window.location.pathname.includes("/dashboard/projects")) {
      return "brand.main";
    }
    return "black";
  };


  return (
    <Box bg="white" boxShadow="1px 2px 5px 5px #0000000d">
      <Flex
        width="95vw"
        m="25px auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex justifyContent="space-between" w="50vw">
          <Image src={AppLogo} height={"8"} />
        </Flex>
        <Flex align="center" gap="7">
          <NotificationsBar />
          <UserMenu />
        </Flex>
      </Flex>
    </Box >
  );
}

export default Header;
