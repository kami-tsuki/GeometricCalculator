const canvas = document.getElementById("visualCanvas");
const ctx = canvas.getContext("2d");
const canvasDimensions = document.getElementById("canvasDimensions");

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

function updateCanvas() {
    const shape = document.getElementById("shape").value;
    const operation = document.getElementById("operation").value;
    const a = parseFloat(document.getElementById("a")?.value || 50);
    const b = parseFloat(document.getElementById("b")?.value || 50);
    const radius = parseFloat(document.getElementById("radius")?.value || 50);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (shape === "rectangle") {
        const scale = Math.min(300 / a, 300 / b);
        const displayWidth = a * scale;
        const displayHeight = b * scale;

        ctx.fillStyle = operation === "area" ? "#900c3f" : "#2a2a2a";
        ctx.strokeStyle = "#ff4d4d";
        ctx.lineWidth = 2;

        ctx.fillRect(100, 100, displayWidth, displayHeight);
        ctx.strokeRect(100, 100, displayWidth, displayHeight);

        // Highlight sides
        ctx.strokeStyle = "#f39c12"; // Side color
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(100 + displayWidth, 100); // Highlight top side (a)
        ctx.stroke();

        ctx.strokeStyle = "#2ecc71"; // Highlight left side (b)
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(100, 100 + displayHeight); // Highlight left side (b)
        ctx.stroke();

        ctx.font = "16px Arial";
        ctx.fillStyle = "#f39c12";
        ctx.fillText("a", 100 + displayWidth / 2, 90); // Label for 'a'
        ctx.fillStyle = "#2ecc71";
        ctx.fillText("b", 70, 100 + displayHeight / 2); // Label for 'b'
    } else if (shape === "triangle") {
        const scale = Math.min(300 / a, 300 / b);
        const displayBase = a * scale;
        const displayHeight = b * scale;

        ctx.fillStyle = operation === "area" ? "#900c3f" : "#2a2a2a";
        ctx.strokeStyle = "#ff4d4d";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(200, 100); // top vertex
        ctx.lineTo(200 - displayBase / 2, 400); // bottom-left
        ctx.lineTo(200 + displayBase / 2, 400); // bottom-right
        ctx.closePath();

        ctx.fill();
        ctx.stroke();

        // Highlight base (a)
        ctx.strokeStyle = "#f39c12"; // Side color
        ctx.beginPath();
        ctx.moveTo(200 - displayBase / 2, 400);
        ctx.lineTo(200 + displayBase / 2, 400); // Highlight base (a)
        ctx.stroke();

        // Highlight height (b)
        ctx.strokeStyle = "#2ecc71"; // Highlight height
        ctx.beginPath();
        ctx.moveTo(200, 100); // top vertex
        ctx.lineTo(200, 400); // Highlight height (b)
        ctx.stroke();

        ctx.font = "16px Arial";
        ctx.fillStyle = "#f39c12";
        ctx.fillText("a", 200 + displayBase / 4, 390); // Label for 'a'
        ctx.fillStyle = "#2ecc71";
        ctx.fillText("b", 190, 250); // Label for 'b'
    } else if (shape === "circle") {
        const scale = Math.min(150 / radius, 150 / radius);
        const displayRadius = radius * scale;

        ctx.fillStyle = operation === "area" ? "#900c3f" : "#2a2a2a";
        ctx.strokeStyle = "#ff4d4d";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(200, 200, displayRadius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        // Highlight radius
        ctx.strokeStyle = "#f39c12"; // Radius color
        ctx.beginPath();
        ctx.moveTo(200, 200); // center
        ctx.lineTo(200 + displayRadius, 200); // highlight radius
        ctx.stroke();

        ctx.font = "16px Arial";
        ctx.fillStyle = "#f39c12";
        ctx.fillText("r", 200 + displayRadius / 2, 190); // Label for 'r'
    }
}
