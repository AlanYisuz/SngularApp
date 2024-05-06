//Funcion de ayuda para saber si el numero es primo
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
       return false;
      }
    }
    return true;
   }
  
   //Funcion para encontrar n
   function findNPrime(termNumber) {
    let primeList = [];
    let count = 0;
    let num = 2;
    while (count < termNumber) {
      if (isPrime(num)) {
        primeList.push(num);
        count++;
      }
      num++;
    }
    return primeList;
   }

   //funcion para encontrar n de la serie 
   function findNTriangular(termNumber){
    let triangularSequence = [];
    for (let i=1; i<=termNumber; i++){
        triangularSequence.push(i * (i + 1) / 2)
    }
    return triangularSequence;
   }

   //function para encontrar el numero n de la serie fibonacci

   function findNFibonacci(n) {
    let fibList = [];
    if (n < 2) {
       fibList.push(0);
    } else {
       let prev = 0;
       let curr = 1;
       fibList.push(prev, curr);
       for (let i = 2; i < n; i++) {
           const next = prev + curr;
           prev = curr;
           curr = next;
           fibList.push(curr);
       }
    }
    return fibList;
    }

    function serieTerm(n){
        const primeList = findNPrime(n+1);
        const triangularList = findNTriangular(n);
        const fibList = findNFibonacci(n+1);
        const serieSequence = [];
        
        for(let i = 1; i<=n; i++){
            const serieList = primeList[i] - (2*triangularList[i-1]) + fibList[i];
            serieSequence.push(serieList);
        }
        
        return serieSequence;
    }

export {serieTerm};