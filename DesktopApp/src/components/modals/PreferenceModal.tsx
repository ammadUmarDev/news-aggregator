import {
  Box,
  Text,
  useToast,
  Checkbox,
  CheckboxGroup,
  Stack,
} from "@chakra-ui/react";
import CustomModal from "../CustomModal";
import { useAppContext } from "../../contexts/AppProvider";
import { useEffect, useState } from "react";
import { displayToast } from "../../utils/helpers";
import { CATEGORIES, SOURCES } from "../../utils/helpers";

const PreferenceModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const toast = useToast();
  const { userPreference, setUserPreference } = useAppContext();

  const [selectedCategories, setSelectedCategories] = useState<string[]>(userPreference?.categories || []);
  const [selectedSources, setSelectedSources] = useState<string[]>(userPreference?.sources || []);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSelectedCategories(userPreference?.categories || []);
      setSelectedSources(userPreference?.sources || []);
    }
  }, [isOpen, userPreference]);

  const handleCategoryChange = (value: string[]) => {
    setSelectedCategories(value);
  };

  const handleSourceChange = (value: string[]) => {
    setSelectedSources(value);
  };

  const saveChanges = async () => {
    setSaving(true);
    const newPreference = {
      categories: selectedCategories,
      sources: selectedSources,
    };

    setUserPreference(newPreference);
    displayToast(toast, "Updated", "Preference updated!", "success");
    onClose();
    setSaving(false);
  };

  return (
    <CustomModal
      size="md"
      isOpen={isOpen}
      onClose={onClose}
      onSave={saveChanges}
      saveButtonText={saving ? "Saving..." : "Save"}
      headerText="Select Article Preferences"
      isScrollable={false}
      isSaveDisabled={saving}
    >
      <Box h="auto">
        <Text my={4} fontWeight="bold">Categories</Text>
        <CheckboxGroup
          colorScheme="teal"
          value={selectedCategories}
          onChange={handleCategoryChange}
        >
          <Stack spacing={2}>
            {CATEGORIES.map((category: string) => (
              <Checkbox key={category} value={category}>
                {category}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>

        <Text my={4} fontWeight="bold">Sources</Text>
        <CheckboxGroup
          colorScheme="teal"
          value={selectedSources}
          onChange={handleSourceChange}
        >
          <Stack spacing={2}>
            {SOURCES.map((source) => (
              <Checkbox key={source} value={source}>
                {source}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </Box>
    </CustomModal>
  );
};

export default PreferenceModal;
