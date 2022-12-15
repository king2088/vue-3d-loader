FROM node:latest as builder
# create work dir
WORKDIR /
# copy pakcage.json and pakcage-lock.json
COPY package*.json /
# npm i
RUN npm i --registry=https://registry.npm.taobao.org
# copy local dir to docker work dir
COPY . /
# build production
RUN npm run build:docker

FROM nginx:latest
LABEL maintainer="Tony Tao<king6180@gmail.com>"
# COPY nginx.conf /etc/nginx/
# copy /examples-demo dir to nginx html dir
COPY --from=builder /examples-demo/ /usr/share/nginx/html/
# port 8010
EXPOSE 8010