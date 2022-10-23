"use strict";
window.onload = () => {
   mainFunction();
};

const sectionLogin = document.querySelector(".section-login");
const sectionTransaction = document.querySelector(".section-transaction");

const submit = document.querySelector(".form");
const dSubmit = document.querySelector(".dform");
const wSubmit = document.querySelector(".wform");

const deposited = document.querySelector(".d-money");
const widthrawed = document.querySelector(".w-money");
const balanced = document.querySelector(".b-money");

const dBox = document.querySelector(".d-box");
const wBox = document.querySelector(".w-box");

let totalDeposit = 0;
let totalWidthraw = 0;
let totalBalance = Number(balanced.innerText);

const printValue = function (element) {
   element === dBox
      ? (deposited.innerText = totalDeposit)
      : (widthrawed.innerText = totalWidthraw);
   balanced.innerText = totalBalance;
   element.value = "";
};

const mainFunction = function () {
   submit.addEventListener("submit", function () {
      sectionLogin.classList.add("hidden");
      sectionTransaction.classList.remove("hidden");
   });

   dSubmit.addEventListener("submit", function () {
      let dAmount = Number(dBox.value);
      totalDeposit += dAmount;
      totalBalance += dAmount;
      printValue(dBox);
   });
   wSubmit.addEventListener("submit", function () {
      let wAmount = Number(wBox.value);
      totalWidthraw += wAmount;
      totalBalance -= wAmount;
      printValue(wBox);
   });
};
