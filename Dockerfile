FROM node:10-alpine AS build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

FROM nginx:1.15.2-alpine
COPY --from=build-stage /app/build/ /var/www
COPY --from=build-stage /app/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
