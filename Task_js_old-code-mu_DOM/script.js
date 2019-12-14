
//Дан HTML код (см. под задачей). Поменяйте содержимое 
//абзацев с классом zzz на их порядковый номер в коде.
    /* function func() {
        let elem = document.querySelectorAll('p.zzz');
        console.log(elem);     
        for(let i = 0 ; i<elem.length;i++){
            elem[i].innerHTML = i+1;
        }   
    } */

   /*  function func(){
        let elem = document.getElementById('text');
        elem.innerHTML = "Ку-ку! А я" ;
        elem.outerHTML = elem.innerHTML + '<b> жирный! </b>';
    
        }
 */

//transform paragraph on h3 tags
       /*  function clickMe(){
            let elem = document.getElementById('test1');
            elem.outerHTML = '<h3>' + elem.innerHTML + '</h3>';
        } */
//sum two numbers
        /* function result(){
            let elem1 = (document.getElementById('input1'));
            let elem2 = (document.getElementById('input2'));
            let elem3 = document.getElementById('p');
            let elem2value = Number(elem2.value)
            let elem1value = Number(elem1.value)
             
            let sum = elem2value + elem1value;
            elem3.innerHTML = "= " + sum;           
        } */

//rewrite the html text

        /* function test(){
            let arrOfelem = document.getElementsByTagName('p');
                for (let i = 0; i<arrOfelem.length; i++){
                    arrOfelem[i].innerHTML = 'KU-KU!';
                }
        } */

//Дан HTML код (см. под задачей). Поменяйте содержимое элементов 
//с классом www на их порядковый номер в коде.        

         /* function func(){
            let elemOfArr = document.querySelectorAll('p.www');
            console.log(elemOfArr);
            for (let i=0; i<elemOfArr.length; i++){
                elemOfArr[i].innerHTML = i+1;
            }
        } */ 


//setAtribute, removeAtribute, hasAttribute, getAttribute
            
        /* function func(){
            var elem = document.getElementById('class');
            alert(elem.getAttribute('class'));

        }

        function func2(){
            var elem = document.getElementById('class');
            elem.setAttribute('class', 'new-class');
            alert('class atribute is change');
        } */

//some example 1
      /*   function func(){
            let elem = document.getElementById('test').value;
            let paragraph = document.getElementById('test1');
            paragraph.innerHTML = elem;
        } */

//example2

       /*  function funnc(){
            let elemArr = document.getElementsByTagName('a');
            for (let i=0; i<elemArr.length; i++){
                elemArr[i].innerHTML =elemArr[i].innerHTML + elemArr[i].getAttribute('href') ;
            }
        } */
//example3
        /* function func(){
            let elem = document.getElementById('test');
            elem.innerHTML = 'rewriten text';
            elem.style.color = 'red';
            let button = document.getElementById('button');
            button.disabled = true;
        } */

//example4

       /*  function func(){
            let element = document.getElementsByTagName('p')
            for (let i = 0 ; i<element.length; i++){
                element[i].innerHTML = i+1 + '. ' +  element[i].innerHTML ;
            }
        } */

//example 5 method Date
var now = new Date();
var date = new Date(2015, 12, 4, 23, 59, 59);
var diff = now.getTime() - date.getTime();
alert(diff);