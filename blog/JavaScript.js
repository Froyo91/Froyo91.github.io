立即执行函数，即Immediately Invoked Function Expression (IIFE)，正如它的名字，就是创建函数的同时立即执行。它没有绑定任何事件，也无需等待任何异步操作：
(function() {
     // 代码
     // ...
})();
function(){…}是一个匿名函数，包围它的一对括号将其转换为一个表达式，紧跟其后的一对括号调用了这个函数。立即执行函数也可以理解为立即调用一个匿名函数。立即执行函数最常见的应用场景就是：将var变量的作用域限制于你们函数内，这样可以避免命名冲突。

对于闭包(closure)，当外部函数返回之后，内部函数依然可以访问外部函数的变量。
function f1()
{
    var N = 0; // N是f1函数的局部变量
    
    function f2() // f2是f1函数的内部函数，是闭包
    {
        N += 1; // 内部函数f2中使用了外部函数f1中的变量N
        console.log(N);
    }

    return f2;
}

var result = f1();

result(); // 输出1
result(); // 输出2
result(); // 输出3

代码中，外部函数f1只执行了一次，变量N设为0，并将内部函数f2赋值给了变量result。由于外部函数f1已经执行完毕，其内部变量N应该在内存中被清除，然而事实并不是这样：我们每次调用result的时候，发现变量N一直在内存中，并且在累加。为什么呢？这就是闭包的神奇之处了

通常，JavaScript开发者使用下划线作为私有变量的前缀。但是实际上，这些变量依然可以被访问和修改，并非真正的私有变量。这时，使用闭包可以定义真正的私有变量：

function Product() {

	var name;

    this.setName = function(value) {
        name = value;
    };

    this.getName = function() {
        return name;
    };
}

var p = new Product();
p.setName("Fundebug");

console.log(p.name); // 输出undefined
console.log(p.getName()); // 输出Fundebug

代码中，对象p的的name属性为私有属性，使用p.name不能直接访问。

每个JavaScript构造函数都有一个prototype属性，用于设置所有实例对象需要共享的属性和方法。prototype属性不能列举。JavaScript仅支持通过prototype属性进行继承属性和方法。
JavaScript并非模块化编程语言，至少ES6落地之前都不是。然而对于一个复杂的Web应用，模块化编程是一个最基本的要求。这时，可以使用立即执行函数来实现模块化，正如很多JS库比如jQuery以及我们Fundebug都是这样实现的。
