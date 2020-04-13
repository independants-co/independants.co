# Stage 1
FROM node:lts-alpine as build

ARG CONTENTFUL_SPACE_ID
ARG CONTENTFUL_ACCESS_TOKEN

WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN yarn install

COPY . ./

RUN yarn build && yarn export

# Stage 2
FROM nginx:alpine
COPY --from=build /usr/app/out /usr/share/nginx/html
