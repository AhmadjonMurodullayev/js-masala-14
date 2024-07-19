// 1.Berilgan massiv ichida k indeksdagi elementni
//  oxirgi indeksdagi element bilan almashtiring.
function swapElements(arr, k) {
    arr.push(...arr.splice(k,1, arr.pop()))
    return arr
}

console.log(swapElements([1, 2, 3, 4, 5], 2)); // [1, 2, 5, 4, 3]


// 2.Berilgan massiv ichidagi barcha elementlarni
//  n marta takrorlang va yangi massiv qaytaring.
function repeatElements(arr, n) {
    let num = []
    for(let i = 0 ; i < n; i++){
        for(let g = 0; g < n; g++){
            num.push(arr[i])
        }
    }
    return num
}

console.log(repeatElements([1, 2, 3], 3)); // [1, 1, 1, 2, 2, 2, 3, 3, 3]


// 3.Berilgan massiv ichidagi juft indeksdagi
//  elementlar yig'indisini toping.

function sumEvenIndexedElements(arr) {
    let arr2 = []
   arr.forEach((item,index) =>{
         if(index % 2 == 0){
        arr2.push(arr[index])
         }
   })
    return arr2.reduce((a,b)=> a+ b, 0)
} 

console.log(sumEvenIndexedElements([1, 2, 3, 4, 5, 6])); // 9 (1 + 3 + 5)


// 4.Berilgan massiv ichidagi barcha unikal
//  (takrorlanmagan) elementlarni qaytaring.

function uniqueElements(arr) {
    let arr2 = arr.filter(item => {
        return arr.indexOf(item) === arr.lastIndexOf(item)
    })
    return arr2
   
    
 }
 
 console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5])); // [1, 3, 5]

//  5.Berilgan massiv ichidagi barcha qatorlarni
//   teskarisiga o'giring.
function reverseStringsInArray(arr) {
    let arr2 = []
    arr.forEach((element) => {
        arr2.push(element.split('').reverse().join(''));
    });
   return arr2
}

console.log(reverseStringsInArray(['abc', 'def', 'ghi'])); // ['cba', 'fed', 'ihg']

// 6.Berilgan massiv ichidagi elementlarni 
// n qadamga chapga ko'chiring.
function rotateArrayLeft(arr, n) {
    for(let i = 0; i <= n; i++){
        arr.unshift(arr.pop())
    }
    return arr
 }
 
 console.log(rotateArrayLeft([1, 2, 3, 4, 5, 6, 7], 3)); // [4, 5, 6, 7, 1, 2, 3]