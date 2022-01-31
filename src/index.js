
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if ( arguments.length==0){return []}
  else{
  let newArr=[];
 if ( matrix==[]) {return []}
 else{
  for (let i=0; i<matrix.length; i++){
      matrix[i].sort((a, b) => a - b );
        if (i%2 != 0){
      matrix[i].reverse();
    //  console.log('revers', matrix[i]);
    }
  }
  matrix.forEach(item => { newArr=newArr.concat(item);});
  return newArr;}
}
}
