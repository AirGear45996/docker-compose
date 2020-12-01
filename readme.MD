
# Создание образа на основе в текущей директории
# -t  //
# .   // текущая диретория
# Помним, что при каждом запуске этой команды docker создаёт новый образ
# При этом старый не удаляется! Его нужно удалить в ручную через docker rmi $(docker images -q)
docker build -t hello-world .

# Проверяем что образ создался
docker images

# Запуск образа -> создаёт контейнер
# Контейнер работает до тех пор, пока работает прилоежение.
# В данном примере приложение отработало и завершилось. Тоже произошло и с контейнером.
docker run hello-world

# Запуск в фоне
docker run -d hello-world

# Запуск в фоне + установка NAMES
docker run -d --name hello hello-world

# Запуск в фоне + после остановки или завершения приложения удалится
docker run -d --rm --name hello hello-world

# -//- + указываем подключаем к порту 3000 ( на сервеер ) порт внутри контейнера
docker run -d --rm -p 3000:8080 --name hello hello-world

# Остановка
docker stop <container_id or names>

# Список всех контейнеров
docker ps -a

# Удаление всех контейнеров
docker rm $(docker ps -a -q)

# отобразить логи
$ docker logs <container_id>

# войти в контейнер в интерактивном режиме
$ docker exec -it <container id> /bin/bash

# Вы можете сделать запрос к вашему приложению с помощью утилиты curl
curl -i localhost:49160

# Получаем ip запущенного контейнреа
docker container list

# Удалить все контейнеры и образы
docker rm $(docker ps -aq) && docker rmi $(docker images -q)

# build images and start docker-compose
docker-compose build && docker-compose up

# Остановка и удаление всех контейнеров
docker-compose stop && docker-compose rm

----------------

#Режим разработки
docker-compose build && docker-compose up -d && cd app && npm run dev
