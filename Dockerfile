FROM nginx:1.15.10-alpine


## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY dist/poc-angular-hammer /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]


# docker build -t cgpcosmad/gesture-test:1 .
# docker run --rm -d -p 9191:80 cgpcosmad/gesture-test:1
# docker stop gesture_test
# docker rm gesture_test


# docker image save cgpcosmad/gesture-test:1 -o gesture_test_v1.tar
# docker load -i gesture_test_v1.tar




