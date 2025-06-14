import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
    ignores: ["/__test."],
      name: 'portfolio',
      rules: {
        // Reglas generales
        'no-debugger': 'error',
        'no-unused-vars': 'warn',
        'no-undef': 'error', 
        'quotes': ['error', 'single'], 
        'no-var': 'error', 
        'camelcase': 'warn', 
        // Reglas Vue específicas
        'vue/no-v-html': 'error', // Permite usar v-html (aunque puede implicar riesgos XSS).
        'vue/require-default-prop': 'off', // Permite props sin valor por defecto.
        'vue/html-self-closing': 'error', // Sugiere usar etiquetas autocerradas (<img />, <input />).
        'vue/max-attributes-per-line': ["error", { "singleline": { "max": 1 }, "multiline": {"max":1}}],
        'vue/require-prop-types': 'error', // Sugiere declarar los tipos de props.
        'vue/component-name-in-template-casing': ['error', 'PascalCase'], // Exige que los componentes en el template estén en PascalCase.
        'vue/no-mutating-props': 'error', // Evita modificar props directamente dentro del componente.
        'vue/attribute-hyphenation': ['error', 'never'], // Fuerza camelCase en atributos de componentes.
        //Reglas aparte
        'vue/no-async-in-computed-properties': 'error',
        'vue/no-computed-properties-in-data': 'error',
        'vue/no-dupe-keys': 'error',
        'vue/no-dupe-v-else-if': 'error',
        'vue/no-duplicate-attributes': ['error', { 'allowCoexistClass': true, 'allowCoexistStyle': true }],
        'vue/no-export-in-script-setup': 'error',
        'vue/no-reserved-component-names': 'error',
        'vue/return-in-computed-property': 'error',
        'vue/valid-attribute-name': 'error',
        'vue/valid-next-tick': 'error',
        'vue/valid-template-root': 'error',
        'vue/valid-v-cloak': 'error',
        'vue/valid-v-if': 'error',
        'vue/valid-v-else-if': 'error',
        'vue/valid-v-else': 'error',
        'vue/valid-v-for': 'error',
        'vue/valid-v-model': 'error',
        'vue/valid-v-show': 'error',
        'vue/valid-v-once': 'error',
        'vue/valid-v-slot': 'error',
        'vue/valid-v-text': 'error',
        'vue/valid-v-on': 'error',
        'vue/no-deprecated-data-object-declaration': 'error',
        'vue/no-deprecated-html-element-is': 'error',
        'vue/no-deprecated-v-is': 'error',
        'vue/no-deprecated-scope-attribute': 'error',
        'vue/no-deprecated-slot-attribute': 'error',
        'vue/no-lifecycle-after-await': 'error',
        'vue/no-v-for-template-key-on-child': 'error',
        'vue/no-watch-after-await': 'error',
        'vue/prefer-import-from-vue': 'error',
        // Reglas generales
        'no-console': 'warn', 
        'semi': ['error', 'always'],
        'prefer-const': 'warn', // Sugiere usar const si la variable no cambia.
        // Reglas Vue específicas
        'vue/multi-word-component-names': 'off', // Permite nombres de componentes como Home.vue en lugar de HomePage.vue.
        'vue/no-unused-components': 'warn', // Advierte sobre componentes registrados pero no usados.
        //Reglas aparte
        'vue/no-child-content': 'warn',
        'vue/html-indent': ['warn', 4, { 'baseIndent': 0, }],
        '@typescript-eslint/no-unused-vars': ['warn']
  }
});