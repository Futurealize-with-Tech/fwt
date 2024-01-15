# 🥰 Futurealize with Tech
略称は【FWT】

## 🤩 概要
卒業メンターにメッセージを共有できるサービス！！
<br/>
ライフイズテックの卒業メンバーの[のぞみ](https://twitter.com/lit_n59)・[さっきー](https://twitter.com/am2525nyan)・[うしょう](https://twitter.com/usyou081)・[いのれん](https://twitter.com/inoren_lit)が作成してます。

## ⚒️ 使用した技術

- Next.js 14.0.4
- TypeScript
- Sass (スタイリング)
- Supabase (バックエンド)
- Prisma (ORM)
- framer-motion（アニメーション）

## 🌐 デプロイ
フロントエンド：Vercel

## 📁 ファイル構成
    .
    ├── public/
    │   ├── next.svg
    │   └── vercel.svg
    │
    ├── src/
    │   ├── app/
    │   │   ├── layout.js
    │   │   ├── template.js（ローディング画面）
    │   │   ├── page.js
    │   │   ├── global.scss
    │   │   ├── page.module.scss
    │   │   ├── favicon.ico
    │   │   ├── apple-touch-icon.png
    │   │   ├── opengraph-image.png
    │   │   └── twitter-image.png
    │   │
    │   ├── components/（以下のファイルは頭文字大文字）
    │   │   ├── XXX/ (XXXに関するコンポーネント)
    │   │   │
    │   │   └── UI/ (ボタンなど細々したUI)
    │   │       ├── Animation/（Lottieのコンポーネント）
    │   │       ├── Button/
    │   │       ├── Menu/
    │   │       ├── Modal/
    │   │       └── Screen/
    │   │
    │   ├── lib/（配列や関数などの処理）
    │   │   ├── Function/（関数）
    │   │   ├── Image/（画像配列）
    │   │   ├── Key/（ローカルストレージなどのkey）
    │   │   └── Site/（メディアのURL）
    │   │
    │   └── type/ (型定義)
    │
    ├── .eslintrc.json
    ├── .gitignore
    ├── next-env.d.ts
    ├── next.config.js
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── tsconfig.json

## 🪛 importの順番

1. ReactHooks
2. styles
3. motion (framer-motion)
4. next (Image, Link etc...)
5. context
6. ライブラリ
7. lib
8. react-icons
9. 画像系

## 👔 CSS styleの順番

1. box-sizing
2. width, height, max, min
3. position (relative以外)
4. display
5. margin
6. padding
7. font系
8. border系 (radiusなど)
9. outline
10. color (font → border → background)
11. 画像系
12. position: relative;
13. cursor

## 🌈 CSSの変数を使おう
`global.scss`の`:root`内で、色などを指定する。(できればRGB値で)
<br/>
<br/>
下記のように、指定する。

    :root {
        --primary-pink: 249, 193, 207;
    }

そうすると下記のように色を指定することができる。

    color: rgb(var(--primary-pink));

RGB値で変数にしたいのは、下記のようにopacityを自由に調整できるから。

    color: rgb(var(--primary-pink), 0.5);

メインの色には`--primary-色`のように命名する。

## 環境変数
使っている環境変数は`Supabase`で使う以下の二つです。
<br/>
デプロイする際には、環境変数に以下のものを指定しないとプロジェクトが機能しません。

- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY