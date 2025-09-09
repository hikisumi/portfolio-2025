# Node.jsの公式イメージを利用
FROM node:18-alpine

# 作業ディレクトリを作成
WORKDIR /app

# package.jsonとlockファイルを先にコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# プロジェクト全体をコピー
COPY . .

# デフォルトコマンド（開発サーバーを起動）
CMD ["npm", "run", "dev"]