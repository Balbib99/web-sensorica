FROM node:lts AS build
WORKDIR /app
COPY . .

# Establece las variables de entorno necesarias
ENV SUPABASE_URL "https://xnvjmqnafhohnmpasyzx.supabase.co"
ENV SUPABASE_ANON_KEY "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhudmptcW5hZmhvaG5tcGFzeXp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxOTc2ODEsImV4cCI6MjAyNDc3MzY4MX0.MZ7kjD8KhQXZF4UE4fmY7x7Lerzbjzms1tsXK_ugqZs"


RUN npm install
RUN npm run build

# Verificar que la construcción se completó correctamente
RUN ls /app/dist

FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80
