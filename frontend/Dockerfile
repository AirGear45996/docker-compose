FROM node:15.1.0

# создание директории приложения
WORKDIR /usr/src/app

# установка зависимостей
# символ астериск ("*") используется для того чтобы по возможности
# скопировать оба файла: package.json и package-lock.json
COPY package*.json ./

RUN npm install
# Если вы создаете сборку для продакшн
# RUN npm ci --only=production

# копируем исходный код ( production режим ), если разрабатываем, то в docker-compose.yml используем volumes
COPY . .

EXPOSE 80
CMD [ "node", "index" ]