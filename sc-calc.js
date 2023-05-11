/**
 * 
 * #calculatorLayer == menampilkan data >>> (single)
 * .btn_ac == all clear, hapus data keseluruhan >>> (single)
 * .btn_persen == untuk merubah menjadi persen atau membagi 100 >>> (single)
 * 
 * .btn_operator == untuk operator aritmatik >>> (multi)
 * .btn_angka == untuk memasukan angka >>> (multi)
 * 
 * .btn_koma == menambahkan koma >>> (single)
 * .btn_clear == untuk hapus data yg aktif >>> (single)
 * .samadengan == untuk menampilkan hasil atau melakukan operasi >>> (single)
 * 
 */

// single elem >>> (6)
let layer = document.querySelector('#calculatorLayer');
let ac = document.querySelector('.btn_ac');
let clear = document.querySelector('.btn_clear');
let equals = document.querySelector('.samadengan');
let koma = document.querySelector('.btn_koma');
let persen = document.querySelector('.btn_persen');

// multi elem >>> (2)
let btn_operator = document.querySelectorAll('.btn_operator');
let angka = document.querySelectorAll('.btn_angka');

// inisialisasi var tambahan
let datapertama = 0,
    datakedua = 0,
    operator = '';
    addToLayar(0);

//menambahkan ke bagian layar
function addToLayar(items) {
    layer.value = items;
}

//addEvent Listener Single
ac.addEventListener('click', ClearAll //All Clear
);
clear.addEventListener('click', SetClear //Clear
);
equals.addEventListener('click', handleEquals //Equals (Bagi)
);
koma.addEventListener('click', addKoma //Koma
);
persen.addEventListener('click', addPersen //Persen
);

//addEvent Listener Multi
for (const key in angka) { //angka

    if (Object.hasOwnProperty.call(angka, key)) {

        const element = angka[key];
        element.addEventListener('click', handleAngka);

    }

}
for (const key in btn_operator) { //operator

    if (Object.hasOwnProperty.call(btn_operator, key)) {
        const element = btn_operator[key];
        element.addEventListener('click', handleOperator);
    }

}

//handle angka
function handleAngka() {
    let elem = this;
    if (operator != '') {
        datakedua += elem.innerHTML;
        addToLayar(parseFloat(datapertama) + operator + parseFloat(datakedua));
    } else {
        datapertama += elem.innerHTML;
        addToLayar(parseFloat(datapertama));
    }
}

//handle operator
function handleOperator() {
    let elem = this;
    if (datapertama != '') {
        operator = elem.innerHTML;
        addToLayar(parseFloat(datapertama) + operator);
    }
}

//handle Aritmatik (+ X / -) // Hasil
function handleEquals() {

    let hasil = 0;

    if (datakedua != '') {
        if (operator == '+') {
            hasil = parseFloat(datapertama) + parseFloat(datakedua);
        } else if (operator == 'X') {
            hasil = parseFloat(datapertama) * parseFloat(datakedua);
        } else if (operator == '/') {
            hasil = parseFloat(datapertama) / parseFloat(datakedua);
        } else if (operator == '-') {
            hasil = parseFloat(datapertama) - parseFloat(datakedua);
        }
    }

    addToLayar(parseFloat(hasil));
    datakedua = '',
        operator = '';
    datapertama = hasil;
}

//handle clear all
function ClearAll() {
    datapertama = '',
        datakedua = '',
        operator = '';
    addToLayar(0);
}

//Handle Clear
function SetClear() {
    if (datakedua != '' && operator != '') {
        datakedua = '';
        addToLayar(parseFloat(datapertama) + operator);
    } else if (operator != '') {
        datakedua = '';
        operator = '';
        addToLayar(parseFloat(datapertama));
    } else {
        addToLayar(0);
        datapertama = '';
    }
}

//Handle Koma
function addKoma() {
    let elem = this;
    if (operator != '') {
        datakedua += elem.innerHTML;
        addToLayar(datapertama) + operator (datakedua);
    } else {
        datapertama += elem.innerHTML;
        addToLayar(datapertama);
    }
}

//Handle Persen
function addPersen() {
    let elem = this;
    if (operator != '') {
        datakedua = parseFloat(datakedua / 100);
        addToLayar(datapertama) + operator (datakedua);
    } else {
        datapertama = parseFloat(datapertama / 100);
        addToLayar(datapertama);
    }
}