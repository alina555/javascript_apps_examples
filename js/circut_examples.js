/**
 * cчётчик
 */
function counter() {
    var count = 0;
    return function () {
        count++;
    }
}


function counter() {
    var count = 0;
    return {
        add_count: function () {
            return count++
        },
        set: function (val) {
            count = val
        },
        reset: function () {
            count  = 0
        }
    }
}


function sum(a) {
    return function (b) {
        return a+b;
    }
}


function sum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return (a+b+c)*d;
            }
        }
    }
}
// alert( sum(1)(2)(7)(9));

/*
 Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:
 Создание объекта: var buffer = makeBuffer();.
 Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове buffer(value
 ) добавляет значение в некоторое внутреннее хранилище, а при вызове без аргументов buffer() –
 возвращает его.
 */

function makeBuffer() {
    var buffer = '';
    return function (val) {
        buffer += val||'';
        return buffer;
    }
}

var buffer = makeBuffer();

// добавить значения к буферу
// buffer('меня');
// buffer(' зовут');
// buffer(' Алина');
// получить текущее значение буфера
// alert( buffer() ); //


function makeBuffer1() {
    var buffer1 = '';
    return {
        clear: function () {
            buffer1 = '';
        },
        add: function (val) {
            buffer1 += val||'';
            return buffer1
        },
        print: function () {
            return buffer1

        }
    }
}
//
var buffer1 = makeBuffer1();

// добавить значения к буферу
buffer1.add('меня');
buffer1.add(' зовут');
buffer1.add(' Алина');
// получить текущее значение буфера
alert( buffer1.print() );

buffer1.clear();
alert( buffer1.print());





