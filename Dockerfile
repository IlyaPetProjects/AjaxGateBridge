FROM node:20-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev && npm cache clean --force

COPY . .

USER node

EXPOSE 8088

CMD ["node", "index.js"]
