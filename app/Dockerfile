FROM node:15.1.0

ENV APP_ROOT /web
ENV NODE_ENV production

WORKDIR ${APP_ROOT}
COPY . ${APP_ROOT}

RUN npm ci
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]