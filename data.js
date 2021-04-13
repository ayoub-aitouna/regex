var list_container = document.querySelectorAll('.S8Y5s');
var list = new Array;
console.log(list.length);
for (let i = 0; i < list_container.length - 1; i++) {
    list[i] = {
        title: _title[i].innerHTML,
        details: list_container[i].innerHTML
    };


    //list.push(list_container[i].innerHTML);
}
console.log(list);