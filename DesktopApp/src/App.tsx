import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import AppProvider from "./contexts/AppProvider";
import router from "./routes";

function App() {

  const queryClient = new QueryClient();
  return (
    <>
      <ToastContainer
        position={toast.POSITION.TOP_RIGHT}
        autoClose={5000}
        hideProgressBar
      />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

const AppWithContext = () => (
  <AppProvider>
    <App />
  </AppProvider>
);

export default AppWithContext;
