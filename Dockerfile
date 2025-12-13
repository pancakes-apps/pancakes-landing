# Build Stage
FROM node:20-slim AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Production Stage
FROM node:20-slim

WORKDIR /app

COPY --from=builder /app/.output ./.output

COPY --from=builder ./app/package*.json ./

RUN npm ci --only=production

EXPOSE 3000

ENV NODE_ENV=production

CMD [ "node", ".output/server/index.mjs" ]

