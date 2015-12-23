/*
* 每一个函数均包含一个prototype属性，这个属性指向一个对象的引用，这个对象称作“原型对象”。
* 每一个函数都包含不同的原型对象。
* 当函数用作构造函数的时候，新创建的对象会从原型对象上继承属性。
*/

/*
 * 任何JavaScript函数都可以用作构造函数，并且调用构造函数需要用到prototype属性。
 * 因此，每个JavaScript函数都自动拥有一个prototype属性。
 * 这个属性的值是一个对象，这个对象包含唯一一个不可枚举属性constructor。
 * constructor属性的值是一个函数对象，（这个函数就是这个构造函数）
 */

/*
 * JavaScript中基于原型的继承机制是动态的：对象从其原型继承属性，如果创建对象之后原型的属性发生改变，
 * 也会影响到这个原型的所有实例对象。
 */