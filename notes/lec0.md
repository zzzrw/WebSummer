# Web应用基础知识

## 一、 发展历史

### 1. Web 1.0 (Read-only Web)

- 静态网页呈现 static pages connect to a system via hyperlinks

- 有限用户交互 get sents through email
- 内容生产者少
- 内容消费者多

### 2. Web 2.0 (Read-Write Web)

- 数据中心化

### 3. Web 3.0 (Read-Write-Own Web)

- 区块链技术和人工智能结合赋能
- 去中心化
- 应对Web 2.0 隐私保护和数据安全

## 二、基础知识

### Web App基本构成

- http(s): domain: port/path
  - 协议：http/https
  - 域名
  - 端口：http 80 https 443
  - 路径

### MIME

- 电子邮箱协议拓展，用于浏览器和服务器传输各种类型的数据

- Content-Typr: type/subtype
  - text/html
  - application/json
  - image/png
  - image/vnd.microsoft.com

## 三、网络页面

### 静态页面

- 内容固定

- 无数据库交互

- 加载速度快

- SEO友好
  - Search Engine Optimization 搜索引擎优化
  - 更快的加载速度
  - 更容易被搜索引擎爬取
  - url更简单友好
  - 没有数据库和服务器端脚本，更安全稳定

### 动效静态页面

- 在保持静态界面特性同时，使用动效增强用户体验

### 动态界面

- 内容动态生成
- 有服务器端处理和数据库交互
- 存在前端丰富交互

### 客户端渲染VS服务端渲染

#### 客户端渲染（CSR）

- 工作原理
  - 浏览器请求服务器，服务器返回基本html页面
  - 浏览器加载执行javascript代码，javascript向服务器发送请求数据
  - javascript处理接收的数据并动态更新DOM，并更新界面

#### 服务端渲染（SSR）

- 工作原理
  - 浏览器请求服务器，服务器处理请求并生成完整的HTML页面
  - 服务器将生成的HTML页面返回给服务器，浏览器渲染界面
  - 加载完成后，JavaScript继续提供动态交互功能

#### 分块渲染

提升性能，减少服务器的负担

### 前端三件套

#### HTML

- Hypertext Mark Language
- 定义网页内容的含义和结构

#### JavaScript

- 描述网页内容的功能和行为

#### CSS

- 描述HTML文件的呈现形式