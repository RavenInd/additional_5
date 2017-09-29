module.exports = function check(str, bracketsConfig) {
  var stack = [];
  var open = "";
  var close = "";
  str = str.split("");
  for(var i = 0; i < bracketsConfig.length; i++) {
      open += bracketsConfig[i][0];
      close += bracketsConfig[i][1];
  }
  var flag = true;
  for(var i = 0; i < str.length; i++) {
      if(open.indexOf(str[i]) == -1 && close.indexOf(str[i]) == -1){
          return false;
      } else if(close.indexOf(str[i]) !== -1 && stack[stack.length-1] == close.indexOf(str[i])) {
          stack.pop();
          continue;
      } else if(open.indexOf(str[i]) !== -1){
          stack.push(open.indexOf(str[i]))
          continue;
      } else return false;
  }
  if(stack.length == 0){
      return true;
  }
  return false;
}
