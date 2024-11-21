from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__)

# Load configuration from JSON file
config_path = os.getenv("CONFIG_FILE", "config.json")
with open(config_path) as config_file:
    config = json.load(config_file)

@app.route('/')
def index():
    return render_template('index.html', config=config)

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    shape = data['shape']
    operation = data['operation']
    a = data.get('a', config["default_values"]["a"])
    b = data.get('b', config["default_values"]["b"])
    radius = data.get('radius', config["default_radius"])

    if shape == 'rectangle' and operation == 'area':
        result = a * b
    elif shape == 'rectangle' and operation == 'perimeter':
        result = 2 * (a + b)
    elif shape == 'triangle' and operation == 'area':
        result = 0.5 * a * b
    elif shape == 'triangle' and operation == 'perimeter':
        result = a + b + (a**2 + b**2)**0.5
    elif shape == 'circle' and operation == 'area':
        result = 3.14159 * radius**2
    elif shape == 'circle' and operation == 'perimeter':
        result = 2 * 3.14159 * radius
    else:
        result = 'Invalid input'

    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=os.getenv("FLASK_ENV") == "development", port=int(os.getenv("FLASK_PORT", 5000)))
