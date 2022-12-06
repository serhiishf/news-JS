# webpack-start

## Run

npx webpack

npm start

- Start local server

npm run dev

- development mode

npm run build

- production mode

## Installation all dependences

npm i -D

## Loaders

https://www.youtube.com/watch?v=gVenbqg9Rww&list=PLuAtC_H_SM_6lUVUHF8QAArM0SHZ1qK9n&index=1&t=1645s

## additional info for viedo

### devServerЛена Киселева

у кого возникла проблема автоматической перезагрузке после изменения html
Необходимо добавить настройки devServer в module.exports

у меня работают следующие
devServer: {
open: true,
hot: true,
port: 'auto',
static: {
directory: './src',
watch: true,
},
},

и в скриптах
"start": "set NODE_ENV=development&&webpack serve",
без --open

### add second html page
