# base image 
FROM node:22-alpine

# set working directory
WORKDIR /app

#  copy all files from current directory to /app in container

COPY . .

# install dependencies
RUN npm install

EXPOSE 3000

# start app

CMD [ "node","index.js" ]

