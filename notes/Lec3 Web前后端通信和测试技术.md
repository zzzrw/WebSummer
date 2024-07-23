# Lec3 Web前后端通信和测试技术

## HTTP Params

### 1. Router Params

> 指路径参数，嵌入url路径的参数，用以标识特定资源。在定义路由时用冒号标记，并在请求时通过实际值替换

```ts
import { Body, Controller, Get, Param, Post } from "@midwayjs/core"

@Controller('/task')
export class TaskController {
    
    @Get("/:taskid/summary")
    public async taskSummary(@Param("taskid") taskid: string) {
        console.log(taskid);
    }
}

```

最终得到e.g: http://localhost:7001/task/233/summary

### 2. Query String

> 查询字符串，通过在url末尾添加键值对，来传递额外信息。查询字符串以?开头，用&分隔

```
@Get("/summary")
public async summary(@Query("state") state: string){
	console.log(state);
}
```

最终得到e.g. http://localhost:7001/task/summary?state=finished

### 3. Body Params

> 请求体参数，通过HTTP请求传递数据，这些数据可以通过POST、PUT、PATCH等方法，发送大量或敏感信息。不同于上述通过url传参。传输的数据不会出现在url中，更安全，同时能传递大量复杂数据。

```ts
@Post('/create')
public async create(@Body() form:{
	name: string;
	description: string;
}){
	console.log(form);
}

```

最终 POST e.g http://localhost:7001/task/creat

## HTTP RESTful API

> RESTful (Representational State Transfer 表征状态转移)，用于设计网络应用的 API。RESTful API 使用 **HTTP** 请求来访问和操作资源，并遵循一组简单的原则和约定。RESTful 风格的 API 具有良好的可读性和易用性，被广泛应用于 Web 服务的设计中，作为一种设计架构。

### 指令

- GET：读取（READ）
- POST：新建（CREATE）
- PUT：更新（UPDATE）
- PATCH：更新（UPDATE）部分更新
- DELETE：删除（DELETE）

### 特点

- **资源导向**：每个URL代表一个资源，通过HTTP方法对资源操作
- **无状态**：不储存客户端状态，每个请求都是独立无关的
- **易扩展性**

### 实现

#### 修饰器

```ts
@Controller() //定义控制器基础路由路径
@Get() //处理Get请求，
@Post()
@Put()
@Delete()
@Param('id') //提取路由参数'id'
@Body() //提取请求体数据
```

#### Axios库

> Axios是基于Promise API的通信工具库

```ts
import * as axios from 'axios';

const client = axios.default;

client.get('http://127.0.0.1:7001').then((response) => {
 	console.log(response);   
})

client.post("http://127.0.0.1:7001/task/create", {
    name:"界面设计",
    description: "设计敏捷看板的界面"
},
    {
    	headers: {
        	'Content-Type': 'application/json'
    	}  
}
           ).then((response) => {
    console.log(response);
})

```



## Test

- 前端：Vitest

- 后端：Jest