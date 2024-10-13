import { Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function GoBack() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Button
      leftIcon={<ArrowBackIcon />}
      w="fit-content"
      variant="link"
      fontSize="md"
      fontWeight="light"
      color="brand.text"
      onClick={handleGoBack}
    >
      Back
    </Button>
  );
}

export default GoBack;
