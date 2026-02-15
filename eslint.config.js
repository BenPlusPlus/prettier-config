import { defineConfig } from 'eslint/config';
import baseConfig from '@excalsoft/eslint-config';

const config = defineConfig([
  baseConfig,
  {
    // your optional overrides here
  },
]);

export default config;
