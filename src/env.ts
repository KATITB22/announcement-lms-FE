require("dotenv").config();

const getEnv = (varName: string, defaultValue?: string): string => {
  const val = process.env[varName] || defaultValue;
  if (val) return val;
  throw new Error(`process.env.${varName} is required but not set`);
};

export default {
    VITE_APP_TITLE: getEnv("VITE_APP_TITLE", "OSKM 2022"),
    GHOST_API_URL: getEnv("GHOST_API_URL", "http://localhost:2368"),
    GHOST_API_CONTENT_API_KEY: getEnv("GHOST_API_CONTENT_API_KEY"),
    GHOST_ADMIN_API_KEY: getEnv("GHOST_ADMIN_API_KEY")
};
