

// let someText = document.querySelector('#someText');
// let button = document.querySelector('#button');
// let click = 1;

// button.addEventListener('click', function () {
//     someText.innerHTML = someText.innerHTML + ':' + click;
//     click++;
// });

// console.log('hello OOP Js');

// class Tank {
//     constructor(ammunition) {
//         this.ammunition = ammunition;
//     }
//     moveTo(x, y) {

//     }
//     fireTo(x, y) {
//         this.ammunition = this.ammunition - 1;
//     }

//     moveAndFire(moveX, moveY, fireX, fireY) {
//         this.moveTo(moveX, moveY);
//         this.fireTo(fireX, fireY);
//     }
//     _canFire(ammunition) {
//         if (ammunition > 0) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

// var tank = new Tank(10);
// console.log(tank.ammunition);

// tank.fireTo(10, 10);
// console.log(tank.ammunition);

// tank.fireTo(10, 10);
// console.log(tank.ammunition);

// tank.fireTo(10, 10);
// console.log(tank.ammunition);

// tank.fireTo(10, 10);
// console.log(tank.ammunition);

// tank.fireTo(10, 10);
// console.log(tank.ammunition);

// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector);
//     }

//     hide() {
//         this.$el.style.display = 'none';
//     }

//     show() {
//         this.$el.style.display = 'block';
//     }
// }

// class Box extends Component {
//     constructor(options) {
//         super(options.selector)
//         this.$el.style.width = this.$el.style.height = options.size + 'px';
//         this.$el.style.background = options.color;
//         this.$el.style.border = options.border;

//     }
// }


// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     color: 'red',
//     border: '2px solid black'
// })
// const box2 = new Box({
//     selector: '#box2',
//     size: 130,
//     color: 'yellow',
//     border: '2px solid black'
// })


// class Circle extends Box {
//     constructor(options) {
//         super(options)
//         this.$el.style.borderRadius = '50%'
//     }
// }

// const circle = new Circle({
//     selector: '#circle',
//     size: 80,
//     color: '#E2558D'
// })


// /*  Реализуйте класс Worker (Работник), 
// который будет иметь следующие свойства: name (имя), surname (фамилия), 
// rate (ставка за день работы), days (количество отработанных дней). 
// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. 
// Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. */


// class Worker{
//     constructor(options){
//         this.name=options.name
//         this.surname=options.surname
//         this.rate=options.rate
//         this.days=options.days
//     }
//     getsalary(){
//         return(
//             this.rate*this.days
//         )
//     }
//     getSum(){
//         return(this.getsalary()+this.getsalary())
//     }
// }


// const work1= new Worker({
//     name:'alex',
//     surname:'vacari',
//     rate:'500',
//     days:'15'
// })
// console.log(work1.name); //выведет 'Иван'
// console.log(work1.surname); //выведет 'Иванов'
// console.log(work1.rate); //выведет 10
// console.log(work1.days); //выведет 31
// console.log(work1.getsalary())
// const work2= new Worker({
//     name:'alex',
//     surname:'vacari',
//     rate:'300',
//     days:'15'
// })
console.log('hello world!');

/*  Реализуйте класс Worker (Работник),
который будет иметь следующие свойства:
name (имя), surname (фамилия), rate (ставка за день работы),
days (количество отработанных дней).
Также класс должен иметь метод getSalary(), 
который будет выводить зарплату работника. 
Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.

 */

/*class Worker{
    constructor(name, surname, rate, days){
        this._name=name
        this._surname=surname
        this._rate=rate
        this._days=days
    }
    get Salary(){
        return this._rate*this._days
    }
    get Name(){
        return this._name
    }
    get Surname(){
        return this._surname
    }
    set Rate(value){
        this._rate=value
    }
    set Days(value){
        this._days=value
    }
}

const work1=new Worker('alexei', 'vacari', 560,15);
const work2=new Worker('alexei2', 'vacari2', 300,5);
const work3=new Worker('alexei3', 'vacari3', 200,25);

console.log(`${work1.Name} ${work1.Surname} have a salary: ${work1.Salary}`);
console.log(`${work2.Name} ${work2.Surname} have a salary: ${work2.Salary}`);
console.log(`${work3.Name} ${work3.Surname} have a salary: ${work3.Salary}`);

work1.Rate=10;
work1.Days=10;
console.log(`${work1.Name} ${work1.Surname} have a salary: ${work1.Salary}`);*/

/*  Реализуйте класс MyString, который будет иметь следующие методы: 
метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, 
метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, 
сделав ее первую букву заглавной и метод ucWords, 
который принимает строку и делает заглавной первую букву каждого слова этой строки.

 */

/*class MyString {
    reverse(str) {
        return str.split('').reverse().join('');
    }
    ucFirst(str) {
        let arr=str.split('');
        arr[0]=arr[0].toUpperCase();
        return arr.join('');
    }
    ucWords(str) {
        let arr = str.split('');
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == ' ') {
                arr[i + 1] = arr[i + 1].toUpperCase();
            } else if(arr[0]){
                arr[0]=arr[0].toUpperCase();
            }
        }
        return arr.join('');
    }
}


const test1 = new MyString;

console.log(test1.reverse('который принимает строку и делает заглавной первую букву'));
console.log(test1.ucFirst('который принимает строку и делает заглавной первую букву'));
console.log(test1.ucWords('который принимает строку и делает заглавной первую букву'));*/

/*  Реализуйте класс Validator, 
который будет проверять строки. 
К примеру, у него будет метод isEmail параметром принимает строку и проверяет, 
является ли она корректным емейлом или нет. 
Если является - возвращает true, если не является - то false. 
Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, 
метод isDate для проверки даты и метод isPhone для проверки телефона:

 */


 class Validator{
     isEmail(strEmail){
         let mail;
        for(let element of strEmail){
            if(element=='@'){
                mail=true;
            }
        }
        return mail;
     }
 }

 const user=new Validator();

 console.log(`mail validator: ${user.isEmail('alesei@mail.ru')}`);