function addNums(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) return false;
  else return Number(num1) + Number(num2);
}

export default addNums;
