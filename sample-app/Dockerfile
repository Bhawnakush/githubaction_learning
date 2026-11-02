FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

# Run as non-root user (security best practice)
USER node

CMD ["node", "index.js"]
