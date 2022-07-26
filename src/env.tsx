const getEnv = (varName: string, defaultValue?: string): string => {
  const val = process.env[varName] || defaultValue;
  if (val) return val;
  throw new Error(`process.env.${varName} is required but not set`);
};

export default {
  REACT_APP_VITE_APP_TITLE: getEnv("REACT_APP_VITE_APP_TITLE", "OSKM 2022"),
  REACT_APP_GHOST_API_URL: getEnv("REACT_APP_GHOST_API_URL", "http://localhost:2368"),
  REACT_APP_GHOST_API_CONTENT_API_KEY: getEnv("REACT_APP_GHOST_API_CONTENT_API_KEY"),
  REACT_APP_GHOST_ADMIN_API_KEY: getEnv("REACT_APP_GHOST_ADMIN_API_KEY")
};
