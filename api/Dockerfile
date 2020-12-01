FROM node:15.1.0

ENV APP_ROOT /usr/src/app/

RUN mkdir -p ${APP_ROOT}
WORKDIR ${APP_ROOT}

#  вместо того, чтобы копировать весь рабочий каталог, мы копируем только файл package.json.
# Это позволяет воспользоваться кэшированием слоев в Docker. Здесь bitJudo дал хорошее объяснение того, как это работает:
# http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/
COPY package*.json ./

COPY . ${APP_ROOT}

RUN npm ci --only=production

EXPOSE 5000

CMD [ "node", "index" ]