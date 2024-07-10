const env = {
  development: {
    VITE_API_BASE_URL: 'https://dev.api.yourservice.com',
    VITE_PORT: 3000,
    OTHER_VARIABLE: 'value_for_dev'
  },
  staging: {
    VITE_API_BASE_URL: 'https://staging.api.yourservice.com',
    VITE_PORT: 3001,
    OTHER_VARIABLE: 'value_for_staging'
  },
  production: {
    VITE_API_BASE_URL: 'https://api.yourservice.com',
    VITE_PORT: 3002,
    OTHER_VARIABLE: 'value_for_production'
  },
  // Add more environments as needed
};

export default env
