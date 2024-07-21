# lec1 Web前端开发技术

## 概览

### 必要工具

#### npm

> 利用npm（node package manger）管理软件包，方便进行依赖的安装、更新、卸载，同时进行版本管理、运行脚本等

项目中包含package.json，是项目的配置文件，包含项目基本信息、依赖项、脚本等

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My first npm project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Your Name",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1" //^代表大版本一致的情况下可以安装新的版本
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}

```

> npm run dev
>
> 执行package.json中scripts部分定义的dev脚本

#### Vite+ReactJS

> 利用Vite+ReactJS框架构建前端
>
> Vite主要负责开发环境的构建，创建项目，配置开发环境，提供开发服务器
>
> React构建UI，创建各种小组件

## 项目结构

```lua
my-todo-app/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   └── TodoItem.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── package.json
├── README.md
├── vite.config.js

```

### 各目录和文件的功能

`node_modules/`

- **描述**：存放所有的项目依赖包。
- **功能**：当你运行 `npm install` 或 `yarn` 时，所有的依赖会被下载到这个目录。

`public/`

- **描述**：存放静态文件，这些文件不会被 Vite 处理。
- **功能**：其中的文件可以直接通过 URL 访问，例如 `index.html` 文件。
- 文件
  - `index.html`：项目的 HTML 模板文件。Vite 会自动将其作为入口文件。

`src/`

- **描述**：存放源代码，包括组件、样式和静态资源。

- **功能**：所有的应用代码都在这个目录下进行组织和开发。

- 目录和文件

  - assets/

    ：存放静态资源（如图片、字体等）。

    - `logo.png`：示例图片文件。

  - components/

    ：存放 React 组件。

    - `TodoItem.jsx`：示例组件文件，用于渲染单个待办事项。

  - `App.jsx`：主应用组件文件，定义了应用的整体结构和逻辑。

  - `index.css`：全局样式文件，定义了应用的全局样式。

  - `main.jsx`：应用入口文件，将 React 组件挂载到 DOM 中。

    - >  DOM（Document Object Model，文档对象模型）是 HTML 和 XML 文档的编程接口。它定义了文档的结构，使程序可以动态访问和更新文档的内容、结构和样式。DOM是浏览器内部表示网页的数据结构，将文档表现为树状结构，挂载就是将组件插入DOM树的某个节点。

`.gitignore`

- **描述**：Git 忽略文件列表。
- **功能**：定义哪些文件和目录不应该被包含在版本控制中。例如，`node_modules/` 目录通常会被忽略。

`package.json`

- **描述**：项目配置文件。
- **功能**：包含项目的基本信息、脚本、依赖等

`vite.config.js`

- **描述**：Vite 配置文件。
- **功能**：用于自定义 Vite 的构建和开发服务器配置。

## React Component

> App实际是一个React Component，也是JavaScript Function
>
> 各类组件实际都是JavaScript Function
>
> Component是React App的基本单元
>
> JavaSript数据模型可以嵌入Component，利用object.attr的方式来索引

- 函数定义两个方式

```jsx
function Mybutton() {
    return {
        <button>
        	text
        </button>
    }
}
function App(){
    return {
        <div>
        	<MyButton />
        </div>
    }
}

function App = () => {
    return {
        <div>
        	<Mybutton />
        </div>
    }
}
// lambda表达式

const user = {
    name: "南京大学",
    imageUrl: "http://domain:port",
    imageSize: 80,
};

//嵌入数据
export default function Profile() {
    return (
        <>
        	<h2>{user.name}</h2>
        	<img
                src = {user.imageUrl} //注意这里嵌入js表达式需要用到花括号
                alt = {user.name}
                style = {
                {
                    width: user.imageSize
                    height: user.imageSize
                }}
            />
        </>
    );
}

// 传参
const Hello = (props) => {
    return (
        <div>
        	<p>Hello {props.name}</p>
        </div>
    )
}

//利用useState进行状态管理
import {useState} from 'react';
const[count, setCount] = useState(0);
```

