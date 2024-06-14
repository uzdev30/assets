const range = document.getElementById("moneyRg");
const money = document.getElementById("money");
const rangeMo = document.getElementById("monthRg");
const month = document.getElementById("month");
const monthResult = document.getElementById("monthResult");
const PermonthResult = document.getElementById("permonthResult");
monthResult.textContent = (range.value * 21) / 100;
permonthResult.textContent = ((range.value * 21) / 100) * 12;
const CalcFn = () => {
  const c = (range.value * 21) / 100;
  const d = (range.value * 21) / 100 / rangeMo.value;
  monthResult.textContent = parseInt(c);
  PermonthResult.textContent = parseInt(d);
};
month.textContent = rangeMo.value;
money.textContent = range.value;
const changeFn = () => {
  const a = range.value;
  money.textContent = a;
};
const ChangeMo = () => {
  const b = rangeMo.value;
  month.textContent = b;
};
