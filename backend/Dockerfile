FROM node:14.4.0-alpine3.11

WORKDIR /app

COPY package.json package-lock.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

