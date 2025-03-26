const calculator = (operator, ...numbers) => {
    if (numbers.length < 2) {
        return "Minimal dua angka diperlukan";
    }
    
    switch (operator) {
        case '+':
            return numbers.reduce((acc, num) => acc + num);
        case '-':
            return numbers.reduce((acc, num) => acc - num);
        case '*':
            return numbers.reduce((acc, num) => acc * num);
        case '/':
            return numbers.reduce((acc, num) => acc / num);
        case '%':
            return numbers.reduce((acc, num) => acc % num);
        default:
            return "Operator tidak valid";
    }
};
console.log(calculator('+', 10, 5, 2)); // Penjumlahan
console.log(calculator('-', 20, 5, 3)); // Pengurangan
console.log(calculator('*', 2, 3, 4)); // Perkalian
console.log(calculator('/', 100, 5, 2)); // Pembagian
console.log(calculator('%', 10, 3)); // Modulus