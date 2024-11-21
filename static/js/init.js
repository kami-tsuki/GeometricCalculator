function updateInputsAndCanvas() {
    const shape = document.getElementById("shape").value;
    const inputsDiv = document.getElementById("inputs");
    inputsDiv.innerHTML = "";

    if (shape === "rectangle") {
        inputsDiv.innerHTML = `
            <div class="form-group">
                <label for="a">Width (a):</label>
                <input type="number" id="a" oninput="updateCanvas()" />
            </div>
            <div class="form-group">
                <label for="b">Height (b):</label>
                <input type="number" id="b" oninput="updateCanvas()" />
            </div>
        `;
    } else if (shape === "triangle") {
        inputsDiv.innerHTML = `
            <div class="form-group">
                <label for="a">Base (a):</label>
                <input type="number" id="a" oninput="updateCanvas()" />
            </div>
            <div class="form-group">
                <label for="b">Height (b):</label>
                <input type="number" id="b" oninput="updateCanvas()" />
            </div>
        `;
    } else if (shape === "circle") {
        inputsDiv.innerHTML = `
            <div class="form-group">
                <label for="radius">Radius:</label>
                <input type="number" id="radius" oninput="updateCanvas()" />
            </div>
        `;
    }

    updateCanvas();
}

updateInputsAndCanvas();
