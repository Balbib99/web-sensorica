FROM node:lts AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Verificar que la construcción se completó correctamente
RUN ls /app/dist

FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80
