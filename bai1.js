function tinhgiaithua(n){
    let giaithua = 1;
    for (let i = 1;i<n;i++){
        giaithua *=i;

    }
    console.log("giai thua cua:",n,"la",giaithua)
}
let number = parseInt(prompt("Nhập số tự nhiên:"));
tinhGiaiThua(number);