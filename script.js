var list_container = document.querySelectorAll('.S8Y5s');
var _title = document.querySelectorAll('._28Jw2');
var search_bar = document.querySelector('#search');
var autoComplet_box = document.querySelector('.autoComplet');
var input_container = document.querySelector('.input_container');
let ul_container = document.querySelector('._2v5h0');
var search_icon = document.querySelector('i');

function resultlist(title, details) {
    return '<li class="_15gkk"><div class="_3FxKO TiBVh _3U--R"><div class="S8Y5s">' + details + '</div><div class="_28Jw2">' + title + '</div></div></li>';
}
search_bar.setAttribute('onkeyup', 'autoComplet()')

search_icon.setAttribute('onclick', 'remove_class()');

function remove_class() {
    input_container.classList.remove('active');
}

function autoComplet() {
    let _value = search_bar.value;
    var array = [];
    if (_value) {
        array = list.filter((data) => {
            if (data.details.toLocaleLowerCase().startsWith(_value.toLocaleLowerCase())) {
                return data.details.toLocaleLowerCase().startsWith(_value.toLocaleLowerCase());
            }
            return data.title.toLocaleLowerCase().startsWith(_value.toLocaleLowerCase())
        })
        setResult(array);
        array = array.map(
            (data) => {
                return '<li>' + data.title + ' : ' + data.details + '</li>';
            }
        )
        show(array);
        let LiHtml = autoComplet_box.querySelectorAll('li');
        input_container.classList.add('active');
        for (var i = 0; i < LiHtml.length; i++) {
            LiHtml[i].setAttribute('onclick', 'select(this)');
        }

    } else {
        input_container.classList.remove('active');

    }

}

function select(_value_) {
    search_bar.value = _value_.innerHTML;
    input_container.classList.remove('active');
    var res = _value_.innerHTML.split(" : ");
    ul_container.innerHTML = resultlist(res[0], res[1]);
}

function setResult(array) {
    ul_container.innerHTML = '';
    for (var i = 0; i < array.length; i++) {
        ul_container.innerHTML += resultlist(array[i].title, array[i].details);
    }
}

function show(array) {
    let htmlList;
    if (!array.length) {
        htmlList = '<li>' + search_bar.value + '</li>';
    } else {
        htmlList = array.join('');

    }
    autoComplet_box.innerHTML = htmlList;
}

function _list() {
    $('.view_wraper ul li div').css({
        'display': 'flex',
        /* flex-direction: column; */
        'flex-direction': 'row',
        'text-align': 'center',
        'position': 'relative',
        'width': '100%',
        'justify-content': 'center'
    });
    $("._2v5h0").css({
        'display': 'inline',

    });
    $("._15gkk").css({
        'background-color': ' #1c1b3d',
        'margin': '10px 10px',
        'width': '100%',
        'border - radius': '15 px'
    });
    $('.view_wraper ul li div div').css({
        'margin': '10 px 15 px',
        'padding': '10 px',
        'color': '#ffffff',
        'margin': '10px 15px',
        'box-sizing': 'border-box'
    });

}

function _gride() {
    $("._2v5h0").css({
        'display': 'flex',
        'flex-wrap': 'wrap'

    });
    $('.view_wraper ul li div').css({
        /* flex-direction: column; */
        'flex-direction': 'column',
        'color': '#000000',
        'text-align': 'center',
        'position': 'relative',
        'width': '100%',
        'justify-content': 'center'
    });


    $("._15gkk").css({
        'background-color': ' #1c1b3d',
        'margin': '10px 10px',
        'width': '180px',
        'border - radius': '15 px'
    });
    $('.view_wraper ul li div div').css({
        'margin': '10 px 15 px',
        'padding': '10 px',
        'color': '#ffffff',
        'margin': '0',
        'box-sizing': 'border-box'
    });

    function _search() {
        alert("sadas");
    }
}

function _search() {
    var ul = document.getElementById("ul");
    //ul.innerHTML = "";
    var j = 0;
    var _input = document.getElementById("search");
    //alert(_input.value);
    var current = document.getElementsByClassName("S8Y5s");
    var _current = document.getElementsByClassName("_28Jw2");

    for (var i = 0; i < current.length; i++) {
        var str = current[i].innerHTML;
        var _str = _current[i].innerHTML;

        //console.log(str);
        if (str.includes(_input.value) || _str.includes(_input.value)) {
            console.log("result is " + str + _str);
            current[j].innerHTML = str;
            _current[j].innerHTML = _str;
            j++;
        } else {
            current[i].parentElement.innerHTML = "";
            _current[i].parentElement.innerHTML = "";
        }
    }
}