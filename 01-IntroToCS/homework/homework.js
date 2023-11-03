'use strict';

function BinarioADecimal(num) {
   /* let toArr = num.split('')
   let arrReverse = toArr.reverse()

   let final = []

   for(let i = 0; i < arrReverse.length; i++){
      let result = 2 ** i * arrReverse[i]
      final.push(result)
   }

   let binToDecim = 0

   for(let i = 0; i<final.length; i++){
      binToDecim += final[i]
   }

   return binToDecim */


   let arrReverse = num.split('').reverse()
   let binToDecim = 0


   for(let i = 0; i < arrReverse.length; i++){
      binToDecim += ((2 ** i) * arrReverse[i])
      console.log(binToDecim)
      console.log(arrReverse[i])
   }

   return binToDecim 
}

   

function DecimalABinario(num) {

   let decim = ''

   while(num > 0){
      decim = (num % 2) + decim
      num = Math.floor(num / 2)
   }

   return decim

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};

BinarioADecimal('1010')


