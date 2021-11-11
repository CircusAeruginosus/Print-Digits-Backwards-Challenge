const printDigits = num => {
    while (num) {
        let digitToPrint = num % 10
        console.log(digitToPrint)
        num = (num - digitToPrint) / 10
    }
}

printDigits(12)
printDigits(456)