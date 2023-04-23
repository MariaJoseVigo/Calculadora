const CALCULAR = document.getElementById("calcular");
const ERR = document.getElementById('error')

CALCULAR.addEventListener("click", () => {
    const INPUT = document.getElementById('peso')
    const PESO = parseInt(INPUT.value)
    let flujo;
    let mantenimiento;
    if (PESO > 0 && PESO <= 10) {
        flujo = PESO * 100
        mantenimiento = flujo * 1.5

    } else if (PESO > 10 && PESO <= 20) {
        flujo = 1000 + (PESO - 10) * 50
        mantenimiento = flujo * 1.5


    } else if (PESO > 20 && PESO <= 30) {
        flujo = 1500 + (PESO - 20) * 20
        mantenimiento = flujo * 1.5
        console.log(flujo + "   " + mantenimiento)

    } else if (PESO > 30) {
        flujo = ((PESO * 4) + 7) / (PESO + 90)
        mantenimiento = flujo * 1.5
    }
    console.log(flujo + "   " + mantenimiento)
})





