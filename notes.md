### Instalasi Eslint Dicoding

1. `npm init @eslint/config@latest`
2. Jawaban CLI :
   - How would you like to use ESLint? -> To check syntax and find problems.
   - What type of modules does your project use? -> CommonJS (require/exports).
   - Which framework does your framework use? -> None of these.
   - Does your project use TypeScript? -> No.
   - Where does your code run? -> Node (pilih menggunakan spasi).
   - Would you like to …… (seluruh pertanyaan selanjutnya) -> Y.
3. `npm install --save-dev eslint-config-dicodingacademy`
4. Tambahkan kode berikut kedalam eslint.config.mjs

```javascript
import daStyle from "eslint-config-dicodingacademy";
exportdefault [
  daStyle,
  // other config style
];

```

