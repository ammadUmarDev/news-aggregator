/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_MOBILE_URL: string;
  readonly VITE_DESKTOP_URL: string;
  readonly VITE_GRAPH_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
