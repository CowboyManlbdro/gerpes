const questionnaires = document.querySelectorAll(".questionnaire__wrapper"),
    pacient = document.querySelector("#pacient"),
    modal = document.querySelector('.modal');

const today = document.querySelector('#today');
let date = new Date();
let output = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();
today.textContent = output;

const fadeIn = (el, timeout, display) => {
    el.style.opacity = 0;
    el.style.display = display || 'block';
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
        el.style.opacity = 1;
    }, 10);
};

const fadeOut = (el, timeout) => {
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;
    setTimeout(() => {
        el.style.display = 'none';
    }, timeout);
};

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let name_p = getRandomIntInclusive(100,300);
let lastname = getRandomIntInclusive(100,300);
pacient.textContent = name_p + "" + lastname;

const ip1 = [
    'Лимфоузлы',
    'Аденоиды',
    'Миндалины',
];

const ip2 = [
    'Аденоиды',
    'Миндалины',
    'Фарингит',
];

const ip4 = [
    'Печень',
    'Селезенка',
    'Лимфоузлы',
    'Аденоиды',
    'Миндалины',
];

function questionnaireSubmit() {
    let sum_ip1 = 0;
    let sum_ip2 = 0;
    let sum_ip4 = 0;
    let sum_anamnes = 0;


        let radioList = document.querySelectorAll(
            'input[data-theme="anamnes"]'
        );
        for (let i = 0; i < radioList.length; i++) {
            if (radioList[i].checked) {
                sum_anamnes += Number(radioList[i].value);
            }
        }

    for (let j = 0; j < ip1.length; j++) {
        let radioList = document.getElementsByName(
            ip1[j]
        );
        for (let i = 0; i < radioList.length; i++) {
            if (radioList[i].checked) {
                sum_ip1 += Number(radioList[i].value);
            }
        }
    }

    for (let j = 0; j < ip2.length; j++) {
        let radioList = document.getElementsByName(
            ip2[j]
        );
        for (let i = 0; i < radioList.length; i++) {
            if (radioList[i].checked) {
                sum_ip2 += Number(radioList[i].value);
            }
        }
    }

    for (let j = 0; j < ip4.length; j++) {
        let radioList = document.getElementsByName(
            ip4[j]
        );
        for (let i = 0; i < radioList.length; i++) {
            if (radioList[i].checked) {
                sum_ip4 += Number(radioList[i].value);
            }
        }
    }

    let conclusion;
    if ((sum_ip1 >= 5)||(sum_ip2 >= 3)||(sum_ip4 >= 6)||(sum_anamnes > 0)){
        conclusion = "Риск наличия активной герпесвирусной инфекции высокий, необходимо обследование на герпесвирусные инфекции (определение ДНК вирусов EBV, CMV, HHV-6 в крови методом ПЦР)";
    } 
    else conclusion = "Риск наличия активной герпесвирусной инфекции низкий, дополнительное обследование пациента не требуется";

    let resultModal = document.getElementById("modal__body");
    resultModal.innerText = conclusion;

    console.log(sum_anamnes);
    console.log(sum_ip1);
    console.log(sum_ip2);
    console.log(sum_ip4);
    fadeIn(modal,500);
}

document
    .querySelector(".modal__btn-close")
    .addEventListener("click", () => fadeOut(modal,500));
document
    .querySelector(".close")
    .addEventListener("click", () => fadeOut(modal,500));
