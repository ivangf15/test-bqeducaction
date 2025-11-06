import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // Reglas personalizadas
  {
    rules: {
      // ✅ Desactiva el aviso por "any"
      '@typescript-eslint/no-explicit-any': 'off',

      // ⚙️ Mantén el formato Prettier
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          trailingComma: 'es5',
          endOfLine: 'auto',
          printWidth: 100,
        },
      ],

      // 🧹 Ajustes generales
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },

  // Ignorados
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
