#### `==` 计算规则如下：
+ 如果两个值类型一致，则使用 === 进行判断
+ 如果一个值是 null，另一个值是 undefined，则两者相等
+ 如果一个值是 number，另一个值是 string，则把 string 转换为 number 再进行比较
+ 如果其中一个值为 boolean，则把它转换为 number，在比较
+ 如果一个值 object，另一个值是 number 或者 string，则把 object 转换为 primitive 在进行比较
+ 其他类型之间比较均不相等

#### JS原始值转换算法---toPrimitive()
(https://blog.csdn.net/suxuelengyin/article/details/82759437#commentBox)


```js
[] + {} // "[object Object]"
{} + [] // 0
[] == 0 // true 
[] == '' // true
{} == 0 // Uncaught SyntaxError: Unexpected token '=='
```
```js
`{}`可以看成是代码块，所以执行`+[]`，因为`[]`是对象，所以`toPrimitive->valueOf->toString`为`''`，结果就是`+''===0`
```