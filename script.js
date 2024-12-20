function simulate() {
    const material = document.getElementById("material").value;
    const thickness = document.getElementById("thickness").value;

    if (!material || !thickness) {
        alert("Por favor, selecione o material e a espessura.");
        return;
    }

    const cost = calculateCost(material, thickness);
    document.getElementById("simulation").innerHTML = `<h2>Simulação</h2>
        <p>Material: ${material.toUpperCase()}</p>
        <p>Espessura: ${thickness} mm</p>
        <p>Custo estimado: R$ ${cost.toFixed(2)}</p>`;
}

function calculateCost(material, thickness) {
    const baseCost = 10;
    const materialMultiplier = material === "mdf" ? 1.2 : material === "acrilico" ? 1.5 : 1.8;
    const thicknessMultiplier = parseInt(thickness) / 3;
    return baseCost * materialMultiplier * thicknessMultiplier;
}
