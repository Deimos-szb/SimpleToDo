FROM node:17-alpine3.14 as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react
RUN npm install react-redux
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
CMD ["npm", "start"]