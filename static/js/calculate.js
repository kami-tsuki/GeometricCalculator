function calculate() {
    const shape = document.getElementById("shape").value;
    const operation = document.getElementById("operation").value;
    const a = parseFloat(document.getElementById("a")?.value || 0);
    const b = parseFloat(document.getElementById("b")?.value || 0);
    const radius = parseFloat(document.getElementById("radius")?.value || 0);

    fetch('/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ shape, operation, a, b, radius })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById("result").textContent = `Result: ${data.result}`;
        });

    updateCanvas();
}
