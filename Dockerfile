FROM nginx:alpine

WORKDIR /app


COPY . /usr/share/nginx/html

EXPOSE 3000




# docker build -t ClickFast
#docker run -p 3000:3000 ClickFast
