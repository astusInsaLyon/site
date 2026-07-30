# Site statique : on construit avec Node, on sert le resultat avec nginx.
# L'image finale ne contient ni Node ni node_modules, juste les fichiers de out/.

FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Vide par defaut : l'image sert le site a la racine (http://localhost:8081/).
# Pour reproduire GitHub Pages : --build-arg NEXT_PUBLIC_BASE_PATH=/site
ARG NEXT_PUBLIC_BASE_PATH=""
ENV NEXT_PUBLIC_BASE_PATH=$NEXT_PUBLIC_BASE_PATH
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM nginx:alpine AS runtime
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 80
