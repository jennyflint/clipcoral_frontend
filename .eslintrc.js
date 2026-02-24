module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',     // Essential rules for Vue 3
    'eslint:recommended',            // Recommended JS rules
    '@vue/eslint-config-typescript', // TypeScript integration
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:compat/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    polyfills: ['fetch', 'promises'],
    // iOS 14+ та Android 12+ (Chrome 96+)
    browsers: ['ios_saf >= 14', 'and_chr >= 96'] 
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    
    // Vue specific rules
    'vue/multi-word-component-names': 'warn',    // Ionic uses single-word component names (e.g., Home, Login)
    'vue/no-deprecated-slot-attribute': 'off',  // Ionic relies on slot="start/end" attributes
    
    // TypeScript specific rules
    '@typescript-eslint/no-explicit-any': 'warn', // Allowed for flexibility during early project stages
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignore unused variables starting with underscore
  },
}