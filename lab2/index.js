function returnArg(arg) {
    return arg;
}

function returnArgSum(arg1, arg2) {
    return arg1 + arg2;
}

function powDouble() {
    let arrList = [50, 100, "Ggas", 30, "TRY AGAIN", 800];
    console.log("Стандартные значения");
    console.log(arrList);
    let newArray = arrList.map((value) =>
        isNaN(value) ? value = 0 : value *= value
    )
    console.log("Преобразованные значения");
    console.log(newArray);
}