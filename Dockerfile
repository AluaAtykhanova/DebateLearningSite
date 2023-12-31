# Установка зависимостей для фронтенда
FROM node:20.3.0 as frontend


WORKDIR /project_metaverse

COPY . .

# COPY frontend/package*.json ./
RUN npm install

CMD ["npm", "run", "dev"]