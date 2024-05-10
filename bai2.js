function kiemTraTamGiac(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return "Tam giác đều";
        } else if (a === b || a === c || b === c) {
            return "Tam giác cân";
        } else {
            return "Tam giác bình thường";
        }
    } else {
        return "Không thể tạo thành một tam giác";
    }
}
console.log (kiemTraTamGiac(2,3,4))
console.log (kiemTraTamGiac(9,5,5))
console.log (kiemTraTamGiac(7,2,5))
console.log (kiemTraTamGiac(6,6,6))