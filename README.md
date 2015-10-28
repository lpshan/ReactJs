## ReactJs
ReactJs 入门练习

#### 需要先安装npm
npm install browserify -g

npm install --global babel

------Start-------
#### To install React DOM and build your bundle after installing browserify:

npm install --save react react-dom

$ browserify -t babelify main.js -o bundle.js     

#### 将jsx语法的js文件转化为javascript

babel src --out-dir build
