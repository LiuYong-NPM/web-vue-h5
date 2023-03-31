<!-- eslint-disable no-prototype-builtins -->
<!-- eslint-disable no-prototype-builtins -->
<!-- eslint-disable no-prototype-builtins -->
<!--
    @created by 刘勇 2023-03-22 14:18:34 星期三
    @Updated by 刘勇 2023-03-22 14:18:34 星期三
    @description JavaScript中对象（Object）的方法
-->

<template>
    <div class="demo-five">
        <van-nav-bar title="对象（Object）的方法" left-text="返回" left-arrow @click-left="onClickLeft" />

        <div class="demo-content">

            <h3>1、Object.getPrototypeOf(obj)</h3>
            <p class="font-style">
                Object.getPrototypeOf(obj)方法返回参数对象的原型。这是获取原型对象的标准方法。
            </p>

            <hr/>

            <h3>2、Object.setPrototypeOf(nowObject,originalObject)</h3>
            <p class="font-style">
                Object.setPrototypeOf(nowObject,originalObject)方法为参数对象设置原型，返回该参数对象。
                它接受两个参数，第一个是现有对象，第二个是原型对象。方法和new出来的对象类似。
            </p>

            <hr/>

            <h3>3、Object.create(obj)</h3>
            <p class="font-style">
                Object.create(obj)方法接受一个对象为参数，然后以它为原型，返回一个实例对象。该实例完全继承原型对象的属性、方法。
            </p>        
            
            <hr/>

            <h3>4、Object.prototype.isPrototypeOf()</h3>
            <p class="font-style">
                实例对象的isPrototypeOf方法，用来判断该对象是否为参数对象的原型。
            </p>

            <hr/>

            <h3>5、Object.getOwnPropertyNames()</h3>
            <p class="font-style">
                Object.getOwnPropertyNames方法返回一个数组，成员是参数对象本身的所有属性的键名，不包含继承的属性键名。
            </p>

            <hr/>

            <h3>6、Object.prototype.hasOwnProperty()</h3>
            <p class="font-style">
                对象实例的hasOwnProperty方法返回一个布尔值，用于判断某个属性定义在对象自身，还是定义在原型链上。
            </p>     

            <hr/>

            <h3>7、 Object.is()</h3>
            <p class="font-style">
                Object.is用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。
            </p>     

            <hr/>
            
            <h3>8、Object.assign(obj, obj1, obj2, ....)</h3>
            <p class="font-style">
                Object.assign()方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
                Object.assign()方法的第一个参数是目标对象，后面的参数都是源对象。
            </p>     

            <hr/>
            
            <h3>9、Object.getOwnPropertyDescriptors(obj)</h3>
            <p class="font-style">
                ES2017 引入了Object.getOwnPropertyDescriptors(obj)方法，返回指定对象所有自身属性（非继承属性）的描述对象.
                Object.getOwnPropertyDescriptor(对象, 属性名称)：指定返回对应属性的描述。
            </p>     

            <hr/>
            
            <h3>10、Object.keys(obj)</h3>
            <p class="font-style">
                Object.keys方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。
            </p>

            <hr/>

            <h3>11、Object.values(obj)</h3>
            <p class="font-style">
                Object.values方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。
            </p>

            <hr/>
            
            <h3>12、Object.entries(obj)</h3>
            <p class="font-style">
                Object.entries(obj)方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组（二维数组）。
            </p>

            <hr/>            
            
            <h3>13、Object.fromEntries(arr)</h3>
            <p class="font-style">
                Object.fromEntries(arr)和Object.entries(obj)配套，是将特定的数组对象转换成对象格式。
            </p>

            <hr/>            
            
            <h3>14、Object.defineProperty(obj, prop, desc)</h3>
            <p class="font-style">
                Object.defineProperty(obj, prop, desc)的作用就是直接在一个对象上定义一个新属性，或者修改一个已经存在的属性。
                obj：需要定义属性的当前对象；
                prop：当前需要定义的属性名；
                desc：属性描述符。
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "demoFive",
    trendsRoute: true,
    data() {
        return {
            
        };
    },
    created() {
        // Object.getPrototypeOf(obj)

        let Fun = function () {};
        let funObj = new Fun();
        console.log(Object.getPrototypeOf(funObj), Fun.prototype, Object.getPrototypeOf(funObj) === Fun.prototype); // true

        // 几种特殊对象的方法
        // 空对象的原型是 Object.prototype
        console.log('Object.getPrototypeOf({}) === Object.prototype：', Object.getPrototypeOf({}) === Object.prototype); // true

        // Object.prototype 的原型是 null
        console.log('Object.getPrototypeOf(Object.prototype) === null：', Object.getPrototypeOf(Object.prototype) === null); // true

        // 函数的原型是 Function.prototype
        console.log('Object.getPrototypeOf(Fun) === Function.prototype：', Object.getPrototypeOf(Fun) === Function.prototype); // true

        // -----------------------------------------------------------------------------------------------------------------

        // Object.setPrototypeOf(nowObject,originalObject)

        let a = {};
        let b = {x: 1};
        Object.setPrototypeOf(a, b);
        console.log('Object.getPrototypeOf(a) === b：', Object.getPrototypeOf(a) === b); // true
        console.log('a.x：', a.x); // 1

        // -----------------------------------------------------------------------------------------------------------------

        // Object.create(obj)

        // 原型对象
        let A = {
            print: function () {
                console.log('hello');
            }
        };
        let B = Object.create(A);
        console.log('Object.getPrototypeOf(B) === A：', Object.getPrototypeOf(B) === A);
        B.print();
        console.log('B.print() === A.print()：',B.print() === A.print());

        // -----------------------------------------------------------------------------------------------------------------

        // Object.prototype.isPrototypeOf()

        // eslint-disable-next-line no-prototype-builtins
        console.log('Object.prototype.isPrototypeOf({})：', Object.prototype.isPrototypeOf({})) // true
        // eslint-disable-next-line no-prototype-builtins
        console.log(Object.prototype.isPrototypeOf(Object.create(null)))

        // -----------------------------------------------------------------------------------------------------------------
        
        // Object.getOwnPropertyNames()
        console.log(Object.getOwnPropertyNames(Date));
        // [ 'length', 'name', 'prototype', 'now', 'parse', 'UTC' ]

        // Object.prototype.hasOwnProperty()
        // eslint-disable-next-line no-prototype-builtins
        console.log(Date.hasOwnProperty('length')); // true
         
        // eslint-disable-next-line no-prototype-builtins
        console.log(Date.hasOwnProperty('toString')); // false


        // -----------------------------------------------------------------------------------------------------------------

        // Object.is()

        let a1 = {major:'英语',class:'五年一班'};
        let aClone = { ...a1 }; //使用扩展运算符将对象a的数据复制到aClone1中
        console.log(aClone === a1); //false
        console.log(Object.is(aClone, a1)) //false，使用对象上的is进行判断是否相同

        // -----------------------------------------------------------------------------------------------------------------

        // Object.assign()

        const target = { a: 1 };
        const source1 = { b: 2 };
        const source2 = { c: 3,d:4 };
        Object.assign(target, source1, source2);
        console.log(target);// { a: 1, b: 2, c: 3, d: 4 }
        const source = { a: { b: 'hello' } }
        let obj = Object.assign(target, source)
        console.log(obj) //  { a: { b: 'hello' }} key相同时，后出现的value将会覆盖前边的value值

        // -----------------------------------------------------------------------------------------------------------------

        // Object.getOwnPropertyDescriptors(obj)
        // Object.getOwnPropertyDescriptor(对象, 属性名称);
        const obj1 = {
            id: 123,
            get bar(){
                return 'abc'
            }
        };
        let obj2 = Object.getOwnPropertyDescriptors(obj1)
        let obj21 = Object.getOwnPropertyDescriptor(obj1, 'id');
        console.log('obj2>>>>>>', obj2);
        console.log('obj21>>>>>>', obj21);

        // -----------------------------------------------------------------------------------------------------------------

        // Object.keys()、Object.values()、Object.entries()
        var obj3 = { foo: 'bar', baz: 42 };
        console.log('Object.keys(obj3)：', Object.keys(obj3)); // ["foo", "baz"]
        console.log('Object.values(obj3)：', Object.values(obj3)); // ["bar", 42]
        console.log('Object.entries(obj3)：', Object.entries(obj3)); // [ ["foo", "bar"], ["baz", 42] ]


        // -----------------------------------------------------------------------------------------------------------------

        // Object.fromEntries()
        // Object.fromEntries()和Object.entries()配套，是将特定的数组对象转换成对象格式

        const arr = [ [ 'foo', 'bar' ], [ 'baz', 42 ] ]
        /*
            数组对象中的数组只能有两个值，是类似键值对格式的数组，
            如果有多的将会被忽略不纳入转换的对象数据中，以前两个数据为准进行数据格式的转换
        */
        const arr1 = [ [ 'foo', 'bar','obj' ], [ 'baz', 42,'name','jerry' ] ] 
        console.log(Object.fromEntries(arr)) //{ foo: 'bar', baz: 42 }
        console.log(Object.fromEntries(arr1))//{ foo: 'bar', baz: 42 } 两个数组得到的是一样的

        // -----------------------------------------------------------------------------------------------------------------

        // Object.defineProperty(obj, prop, desc)
        // Object.defineProperty()的作用就是直接在一个对象上定义一个新属性，或者修改一个已经存在的属性
        let Person = {}
        // let temp = null;
        Object.defineProperty(Person, 'name', {
            // 默认值：value: undefined
            value: 'jack',

            // 默认值：writable: false
            writable: true,

            // 默认值：enumerable: false
            enumerable: true,

            // 默认值：configurable: false
            configurable: true,
        });

        // 注意： ！！！
        // value & writable 不能与 get & set 同时存在
        // Object.defineProperty(Person, 'name', {
        //     // 默认值：enumerable: false
        //     enumerable: true,

        //     // 默认值：configurable: false
        //     configurable: true,

        //     // 默认值：get: undefined
        //     get: function() {
        //         return temp;
        //     },

        //     // 默认值：set: undefined
        //     set: function(value) {
        //         temp = value;
        //     }
        // });

        // Person.name = 'Rose';
        console.log('Person>>>', Person, Object.getOwnPropertyDescriptors(Person));
        // configurable: false 时，不能删除当前属性，且不能重新配置当前属性的描述符(有一个小小的意外：可以把writable的状态由true改为false,但是无法由false改为true),但是在writable: true的情况下，可以改变value的值
        // configurable: true时，可以删除当前属性，可以配置当前属性所有描述符。

        // Object.preventExtensions(obj)：禁止扩展
        // 禁止一个对象添加新属性并且保留已有属性

        // Object.seal(obj)：密封
        // Object.seal()会创建一个密封的对象，这个方法实际上会在一个现有对象上调用object.preventExtensions(...)并把所有现有属性标记为configurable:false。

        // Object.freeze(obj)：冻结
        // Object.freeze()会创建一个冻结对象，这个方法实际上会在一个现有对象上调用Object.seal(),并把所有现有属性标记为writable: false,这样就无法修改它们的值。
    }
};
</script>

<style lang="less" scoped>
.demo-five {
    position: relative;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .demo-content {
        flex: 1;
        overflow: auto;

        h3 {
            word-break: break-all;
        }

        .font-style {
            text-indent: 2em;
            line-height: 200%;
        }
    }
}
</style>