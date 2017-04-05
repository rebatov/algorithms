exports.array = function(n){
  let cntr = 0;
  let array = [];
  for (i = 0; i < n; i++) {
      array[i] = i + 1;
      cntr ++;
      if(cntr == n){
        return array;
      }
  }
}
