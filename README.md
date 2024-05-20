# 🥰 Futurealize with Tech！
`FwT`のメッセージ募集用サイトのリポジトリです

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
    ├── (.env)
    ├── .eslintrc.json
    ├── .gitignore
    ├── next-env.d.ts
    ├── next.config.js
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── tsconfig.json

## 🗒️ セットアップ方法
`FwT`のサイトのセットアップ方法は以下のとおりです。
### 1. リポジトリをクローン
指定のディレクトリで、以下のコマンドを実行。

    $ git clone https://github.com/Futurealize-with-Tech/fwt.git

### 2. npmパッケージをインストール
上記でクローンしたディレクトリに移動し、以下のコマンドを実行。

    $ npm install

### 3. Supabaseのセットアップ
2024年は`Supabase`を採用しましたが、RDBなら何でも構いません。
※ `PostgreSQL`だとコードを書き換えずに使用できます。

調べながらセットアップしてみてください！！！

### 4. 環境変数の用意
まずは、`.env`を作成してください。
そして、使っている環境変数は以下の二つです。
<br/>
デプロイする際には、環境変数に以下のものを指定しないとプロジェクトが機能しません。

```
- NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api/v1
- DATABASE_URL='DBのURL'
```
上記の`DATABASE_URL`には、セットアップしたDBのURLを入れてください。(`PostgreSQL`なら`postgres://postgres.`から始まるもの)

### 5. Prismaのセットアップ
`Prisma`をローカルでセットアップします。

    $ npx prisma generate

## 🍕 Prisma Studio
`Prisma Studio`という接続したDBをGUIで操作できるツールがあります。
下記のコマンドで実行できます。

    $ npx prisma studio

## ⚙️ 環境変数
- NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api/v1
- DATABASE_URL='DBのURL'

## メッセージ
このプロジェクトはOSSです！！
不具合などあればぜひ気軽に`issue`飛ばしてみてください！
<br />
<br />
質問したいことがあれば、[いのれん](https://twitter.com/inoren_lit)まで！（LiT!生ならフォロー返します！)
