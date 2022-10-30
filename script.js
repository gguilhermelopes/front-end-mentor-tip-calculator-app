const billInput = document.querySelector(".bill-input");
const tipPercentageBtn = document.querySelectorAll(".tip button");
const tipAmount = document.querySelector(".tip-value");
const totalBill = document.querySelector(".total-value");
const peopleInput = document.querySelector(".people-input");
const resetButton = document.querySelector(".btn");
const billError = document.querySelector(".bill-amount .error");
const peopleError = document.querySelector(".people .error");
const customTipInput = document.querySelector(".tip-input");
let billValue;
let tipValue;
let customTipValue;
let finalTipValue;
let peopleValue;
let totalBillValue;
let totalTipValue;

const getValue = (event) => {
  billValue = +event.target.value;

  if (customTipValue) {
    finalTipValue = customTipValue;
  } else {
    finalTipValue = tipValue;
  }

  totalBillValue = String(
    ((billValue * finalTipValue + billValue) / peopleValue).toFixed(2)
  ).padStart(2, 0);
  totalTipValue = String(
    ((billValue * finalTipValue) / peopleValue).toFixed(2).padStart(2, 0)
  );

  if (billValue) {
    billError.classList.remove("active");
    billInput.classList.remove("error-active");
  } else {
    billError.classList.add("active");
    billInput.classList.add("error-active");
  }

  if (billValue && finalTipValue && peopleValue) {
    totalBill.innerText = `$${totalBillValue}`;
    tipAmount.innerText = `$${totalTipValue}`;
  } else {
    totalBill.innerText = "$0.00";
    tipAmount.innerText = "$0.00";
  }
};

billInput.addEventListener("change", getValue);

const activeButton = (event) => {
  event.preventDefault();
  tipValue = +event.target.innerText.replace("%", "") / 100;
  customTipInput.value = "";
  customTipValue = "";
  finalTipValue = tipValue;

  totalBillValue = String(
    ((billValue * finalTipValue + billValue) / peopleValue).toFixed(2)
  ).padStart(2, 0);
  totalTipValue = String(
    ((billValue * finalTipValue) / peopleValue).toFixed(2).padStart(2, 0)
  );

  tipPercentageBtn.forEach((button) => {
    button.classList.remove("active");
  });
  event.target.classList.add("active");

  if (billValue && finalTipValue && peopleValue) {
    totalBill.innerText = `$${totalBillValue}`;
    tipAmount.innerText = `$${totalTipValue}`;
  } else {
    totalBill.innerText = "$0.00";
    tipAmount.innerText = "$0.00";
  }
};

tipPercentageBtn.forEach((button) =>
  button.addEventListener("click", activeButton)
);

const setValues = (event) => {
  peopleValue = +event.target.value;
  finalTipValue = "";

  if (customTipValue) {
    finalTipValue = customTipValue;
  } else {
    finalTipValue = tipValue;
  }

  totalBillValue = String(
    ((billValue * finalTipValue + billValue) / peopleValue).toFixed(2)
  ).padStart(2, 0);
  totalTipValue = String(
    ((billValue * finalTipValue) / peopleValue).toFixed(2).padStart(2, 0)
  );

  if (billValue) {
    billError.classList.remove("active");
    billInput.classList.remove("error-active");
  } else {
    billError.classList.add("active");
    billInput.classList.add("error-active");
  }

  if (peopleValue) {
    peopleError.classList.remove("active");
    peopleInput.classList.remove("active");
  } else {
    peopleError.classList.add("active");
    peopleInput.classList.add("error-active");
  }

  if (billValue && finalTipValue && peopleValue) {
    totalBill.innerText = `$${totalBillValue}`;
    tipAmount.innerText = `$${totalTipValue}`;
  } else {
    totalBill.innerText = "$0.00";
    tipAmount.innerText = "$0.00";
  }
};

peopleInput.addEventListener("keyup", setValues);

const handleCustomTip = (event) => {
  customTipValue = +event.target.value / 100;
  tipPercentageBtn.forEach((button) => {
    button.classList.remove("active");
  });

  if (customTipValue) {
    finalTipValue = customTipValue;
  } else {
    finalTipValue = "";
  }

  totalBillValue = String(
    ((billValue * finalTipValue + billValue) / peopleValue).toFixed(2)
  ).padStart(2, 0);
  totalTipValue = String(
    ((billValue * finalTipValue) / peopleValue).toFixed(2).padStart(2, 0)
  );

  if (billValue && finalTipValue && peopleValue) {
    totalBill.innerText = `$${totalBillValue}`;
    tipAmount.innerText = `$${totalTipValue}`;
  } else {
    totalBill.innerText = "$0.00";
    tipAmount.innerText = "$0.00";
  }
};

customTipInput.addEventListener("change", handleCustomTip);

const resetSplitter = () => {
  billInput.value = "";
  peopleInput.value = "";
  totalBill.innerText = "$0.00";
  tipAmount.innerText = "$0.00";
  customTipInput.value = "";
  billValue = "";
  tipValue = "";
  peopleValue = "";
  customTipValue = "";
  tipPercentageBtn.forEach((button) => {
    button.classList.remove("active");
  });
  billError.classList.remove("active");
  billInput.classList.remove("error-active");
  peopleError.classList.remove("active");
  peopleInput.classList.remove("error-active");
};

resetButton.addEventListener("click", resetSplitter);
