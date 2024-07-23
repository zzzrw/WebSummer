# lec0 Web技术栈演化

## 早期

- Dw + Php + JSP
  - 直接在前端界面运行后端代码

- MVC
  - ![image-20240719143542713](E:\WebSummer\notes\img\image-20240719143542713.png)
- SPA（Single Page Application）
  - 利用AJAX，不需要重新加载界面，而是动态替换内容和局部地更新

## 当下

- 前端框架和全栈开发
  - Vue前端 Node后端

## 工具 

### HTML

```html
基本结构标签
<title></title>
<style></style>
<meta/>
<link/>
<script></script>

文本格式化标签
<h1>标题</h1>
<p>段落</p>
<strong>加粗</strong>
...
链接标签
<a>定义超链接</a>
<a href=”http://www.nju.edu.cn” >NJU</a>

表单标签
<form></form>
<input></input>

多媒体标签
<img></img>

其他
<div>分区</div>
<span>行内</span>
<script src=” https://code.jquery.com/jquery-3.7.1.slim.min.js”></script>
```

### CSS

> 描述HTML文档的呈现方式

#### CSS Box Model

> 每个html元素可以被视作一个盒子，CSS 盒模型定义了这些盒子组成的部分，以及如何计算其大小和位置。
>
> 包括Content Padding Border Margin

```css
<tag class = ""> </tag>
<style>
.area {
	background-color: tomato;
	color: white;
	border: 2px solid black;
	margin: 20px;
	padding: 20px;
}
</style>

<div class="area">
	<h2>London</h2>
	<p>London is the capital of England</p>
</div>
```

### JavaScript

> 描述网页内容的功能与行为

#### 语法

> 弱类型的语言

- 声明
  - var：在函数定义的域或者全局域
  - let：块作用域，在最近的花括号有效，且不能声明同一个变量
  - const：块作用域，不可变性。对于对象和数组则是内存地址不可变

- 变量命名

  - 以字母 _  **$**为起始符  后跟字母/数字

- 类型

  - boolean
  - null 即空值
  - undefined 尚未定义的值
  - number
  - bigint
  - string
  - Symbol 表示独一无二的值

- 函数

  ```javascript
  function name(a){
      return a;
  }
  ```

  