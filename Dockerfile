FROM node:16.15.0
LABEL authors="markov"

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install pm2 -g
RUN npm ci
COPY . .
EXPOSE 8080
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV NODE_ENV production
CMD ["npm", "run", "deploy"]
