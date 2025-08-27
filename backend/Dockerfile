#environment for backend
FROM node:20-alpine

#working directory
WORKDIR /app

#copy dependencies
COPY package*.json ./

#install dependencies
RUN npm install

#copy source code
COPY . .

#port to run
EXPOSE 3000

#run application
CMD ["node","index.js"]
