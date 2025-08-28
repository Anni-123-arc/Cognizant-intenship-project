#step 1
# import environmenr
FROM node:20-alpine AS build

#working directory
WORKDIR /app

# get dependencies
COPY package*.json ./

# intall dependencies
RUN npm install

# copy source code
COPY . .

# build production ready code
RUN npm run build -- --configuration production

#step 2
#create nginx env

FROM nginx:stable-alpine

# Copy built Angular app to Nginx html folder
COPY --from=build /app/dist/Ecom-FrontEnd/browser /usr/share/nginx/html


COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
