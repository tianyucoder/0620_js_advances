###1.简述一下js有几种数据类型？

	//1.基础数据类型：
	null，undefined，boolean，number，string，symbol
	
	//2.对象(引用，复合)类型
	Object，Array，Function

###2.typeof的返回值有几种？typeof有什么特点？
>一个不正确：typeof null 的结果是object。
>一个不精确：typeof [] 的结果是object。
>一个没问题：typeof {} 的结果是object

	typeof 1 // 'number'
	typeof '1' // 'string'
	typeof undefined // 'undefined'
	typeof true // 'boolean'
	typeof console.log // 'function'
	typeof Symbol() // 'symbol'
	typeof [] // 'object'
	typeof {} // 'object'
	typeof null // 'object'

###3.说一下null与undefined？
>undefined：定义了，没赋值（一般不会将一个变量手动赋值为undefined，因为没有意义）

	var a;
	console.log(a)//undefined

>null：赋值了, 但是值很特殊，值为null（空）
	
	//一个约定俗称的小规矩，一般赋值为null代表这个变量接下来要存储的类型是对象
	var a = null 


###4.写出控制台输出结果
	var name = 'World!';
	  (function () {
	    if (typeof name === 'undefined') {
	      var name = 'Jack'
	      console.log(name)
	    } else {
	      console.log(name)
	    }
	  })()
	  //最终输出：Jack
	  /*
	  * 解析：
	  * 1.预处理结果，外部name是undefined，内部name是undefined。
	  *   这里值得注意的是：不管if判断是否为真，内部的name都会在预解析的时候变为undefined，ES6之前不存在块级作用域。
	  * 2.执行代码：外部name是World，内部是undefined。
	  * 3.进入if判断，内部name为Jack。
	  * */
	  * 
###5.写出控制台结果
	var c
	function c(c) {
      console.log(c)
	  var c = 3
	}
	c = 1
	console.log(c) // 1
	c(2) //报错  c is not a function
	/*
	* 解析：
	* 1.预处理的结果：c是function。
	* 2.正常执行代码，跳过function c（因为已经与解析完），后来c变成了1
	* 3.打印c是1，执行1，1明显不是函数，报错
	* */

###6.写出控制台结果
	  function fn() {
	    var i = 10
	    return function (n) {
	      console.log( n+ (i++))
	    }
	  }
	  var f = fn()
	  f(10) 
	  f(20) 
	  f(30)




