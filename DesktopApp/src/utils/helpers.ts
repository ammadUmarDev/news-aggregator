export const CATEGORIES = ["Business","Entertainment","General","Health","Sciences","Sports","Technology"];
export const SOURCES = ["All Sources", "NewsAPI", "GNews", "Guardian"];
export const displayToast = (
    toast: any,
    title: string,
    message: string,
    type: "success" | "error" | "warning",
  ) => {
    toast({
      title,
      description: message,
      status: type,
      duration: 4000,
      isClosable: true,
      position: "top",
    });
  };