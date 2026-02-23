FROM node:25-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

ENV HOST=0.0.0.0
ENV PORT=3005

EXPOSE 3005

CMD ["npm", "run", "dev"]