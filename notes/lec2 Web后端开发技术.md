# lec2 Web后端开发技术

## Web应用架构

### 单体架构

> 所有功能模块和组件全部集成在一个整体应用的架构方式
>
> 服务端暴露给客户端的接口是统一的

![image-20240721101914797](E:\WebSummer\notes\img\image-20240721101914797.png)

### 分布式架构

> 计算任务分布在多个独立的计算节点
>
> 客户端可以通过代理或其他中介服务来对多个服务器端进行通信

![image-20240721102302329](E:\WebSummer\notes\img\image-20240721102302329.png)

### 微服务架构

> 客户端可能需要访问多个不同服务节点，每个独立的服务器处理一个或多个服务，通过API网关聚合请求，向服务器端访问

![image-20240721102929799](E:\WebSummer\notes\img\image-20240721102929799.png)

### Serverless(无服务架构)

> 开发者只需要编写和部署应用功能代码，不需要管理维护底层基础设施，依赖于云服务器提供商进行托管服务

![image-20240721103249809](E:\WebSummer\notes\img\image-20240721103249809.png)

## TypeScript

> TS是JS的一个超集，在JS的基础上添加了新的特性，可以理解为有类型的JS

```ts
// 对js访问不存在的属性，不会发生错误，只是返回undefined

// 对ts，由于对对象类型进行检查，访问不存在的属性回发生编译时错误
const user = {
    name:"xxx",
    email:"xxx",
};

console.log(user.age);
```

### 数据类型

- number, boolean, string
- number[], Array\<number\>
- any：变为动态类型
- interface, union

### 函数

```ts
function f1(p1: number, p2: string): string{
	return "Hello World!";
}
// 包含了参数类型和返回值类型
```

### 类

```ts
//成员属性、构造方法、成员方法
export class Task {
    name: string;
    description: string;
    createAt: Date;
    
    constructor(name: string, description: string, createAt: Date) {
        this.name = name;
        this.description = description;
        this.createAt = createAt;
    }
    
    public getName(): string {
        return this.name;
    }
}

```

### async函数 vs 同步函数

> `promise`是 JavaScript 中处理异步操作的一种**对象**。它代表一个可能尚未完成的操作，但最终会完成，并且提供操作结果或错误信息。`Promise` 提供了更清晰的方式来处理异步任务，尤其是当这些任务需要按顺序执行时。
>
> `promise`有三种状态：pending，fulfilled，rejected

> `async` 函数是 JavaScript 的一种用于简化异步操作的功能。它基于 `Promise` 设计，提供了一个更简单、更直观的方式来处理异步代码。`async` 和 `await` 是 ECMAScript 2017（ES8）引入的特性，目的是使异步编程变得更加同步化和易读。

```ts
@Controller('/')
export class HomeController {
    @Get('/')
	async home(): Promise<object> {
		return {
		message: 'Hello!',
		};
	}
} 
```

## 后端代码结构

## 