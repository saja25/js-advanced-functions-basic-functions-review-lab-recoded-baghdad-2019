// Your code here
function saturdayFun(input="roller-skate"){
  return `This Saturday, I want to ${input}!`
}
function mondayWork(input="go to the office"){
  return `This Monday, I will ${input}.`
}
function wrapAdjective(wrap="*"){
  return function (input="special"){
    return `You are ${wrap}${input}${wrap}!`
  }
}
const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b;
  }
}
function actionApplyer(int,arr){
  return arr=int
}