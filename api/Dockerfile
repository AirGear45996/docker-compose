# Слой 1: операционная система
FROM node:15.1.0

# создать папку и сделать эту папку рабочей директорией
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

#  вместо того, чтобы копировать весь рабочий каталог, мы копируем только файл package.json.
# Это позволяет воспользоваться кэшированием слоев в Docker. Здесь bitJudo дал хорошее объяснение того, как это работает:
# http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/
COPY package*.json ./

# опируем исходный код
COPY . /usr/src/app/

# установка зависимостей
RUN npm i
# Если вы создаете сборку для продакшн
# RUN npm ci --only=production

# деклариуем что хотим пробросить порт наружу
EXPOSE 8080

# что нужно делать, когда запустим контейнер ( docker start, docker run )
CMD [ "node", "index" ]