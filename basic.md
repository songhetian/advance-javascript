```
graph LR
  A[构造函数]-->|同时创建|B[prototype 原型对象]
  B-->|自动创建|C(constructor属性)
  C-->A
  B-->E(其他属性和方法)
  B-->|继承|F(Object的属性和方法)
```
