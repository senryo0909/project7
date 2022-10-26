let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven(numbers) {
    numbers.map((v) => {
        if(v%2 === 0){
            console.log(`${v}は偶数です`);
        }
    })
}
isEven(numbers);