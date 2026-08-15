# haedal-home


1. nvm 설치
2. nvm use 혹은 nvm install

---

### 레포지토리 구조

<img width="408" height="604" alt="image" src="https://github.com/user-attachments/assets/f09d2aa6-99c2-4def-8197-398f04c75c60" />

- 여기서 다 필요없고 /src 만 쓰면 됨 (나머지는 다 설정파일)

---

<img width="401" height="386" alt="image" src="https://github.com/user-attachments/assets/03dbe782-0366-4a8f-a6f0-4f3fccfadabd" />

- assets/ : 이미지 넣어놓는 곳
- data/ : 웹사이트에서 쓸 정보를 모아놓는 곳
- layouts/ : 공통 헤더, 푸터, 뼈대
- pages/ : 한 페이지 기준으로 나눠놓음
- pages/Home : 웹사이트 드가면 젤 처음 보이는 그 페이지 ㅇㅇㅇㅇ
- App.css, App.tsx, index.css, main.tsx : 일단 놔둬봅시다,,,

---

- <img width="381" height="463" alt="image" src="https://github.com/user-attachments/assets/d584839d-a4f7-4f2d-a422-43a1376022a9" />

- 메인페이지를 여러 섹션으로 나눠서 작업하고
- index.tsx에서 조립만 합니다

---















## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
