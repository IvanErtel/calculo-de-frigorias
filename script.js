document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculate");
    calculateButton.addEventListener("click", calculateFrigorias);
});

function calculateFrigorias() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);
    const people = parseFloat(document.getElementById("people").value);
    const watts = parseFloat(document.getElementById("watts").value) || 0; // Valor predeterminado de 0 si no se ingresa ningún valor.

    if (!isNaN(length) && !isNaN(width) && !isNaN(height)) {
        const volume = length * width * height;
        const frigoriasByVolume = volume * 50;
        const frigoriasByPeople = people * 150;
        const frigoriasByWatts = watts * 0.86;

        const totalFrigorias = frigoriasByVolume + frigoriasByPeople + frigoriasByWatts;

        document.getElementById("resultValue").textContent = totalFrigorias.toFixed(2);
    } else {
        alert("Por favor, ingrese valores válidos para el cálculo.");
    }
}
