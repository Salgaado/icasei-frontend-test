FROM node:22-alpine3.19
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm i -g nodemon
COPY . .
EXPOSE 3000
CMD ["npm", "start"]