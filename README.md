# GeoMath Web App

## Overview

GeoMath is a web application designed to calculate geometric properties such as the perimeter and area for basic shapes like rectangles, triangles, and circles. Users can input dimensions for these shapes and select the desired operation, and the app will display the corresponding results. The app is built with Flask for the backend, providing an intuitive UI for both desktop and mobile users, and it supports Docker for easy deployment and environment configuration.

---

## Features

- **Shape Selection**: Choose between rectangles, triangles, and circles.
- **Operations**: Calculate the perimeter or area of the selected shape.
- **Interactive Visualization**: A live canvas updates as users input dimensions, showing the selected shape and its key properties (e.g., radius, sides, and highlighted lines).
- **Responsive UI**: The app is fully responsive, with a clean layout that adapts to different screen sizes (desktop and mobile).
- **Docker Support**: Full Docker compatibility for both development and production environments.
- **Configurable Settings**: The app reads configuration from a `config.json` file and environment variables for easy customization.

---

## Requirements

- Python 3.12 or higher
- Docker (optional, for containerized deployment)
- Flask 2.3.3 or higher
- `pip` for Python package management

---

## How to Install

### Installation and Start (Docker Local)

To run the app locally using Docker, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kami-tsuki/GeometricCalculator.git
   cd GeoMath
   ```

2. **Build the Docker container**:
   Ensure Docker is installed and running, then execute the following command:
   ```bash
   docker-compose build
   ```

3. **Start the Docker container**:
   Start the app using Docker Compose:
   ```bash
   docker-compose up
   ```

   The app will be accessible at `http://localhost:5000`.

4. **Access the app**:
   Once the container is running, open your browser and navigate to `http://localhost:5000` to access the GeoMath app.

### Installation and Start (Without Docker Local)

If you prefer to run the app without Docker, you can set it up on your local machine using Python:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repository/GeoMath.git
   cd GeoMath
   ```

2. **Install dependencies**:
   It is recommended to use a virtual environment. If you don’t have `venv` set up, follow these steps:

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

   Install the required Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. **Run the app**:
   Start the Flask app with the following command:
   ```bash
   python app.py
   ```

   The app will be available at `http://localhost:5000`.

4. **Access the app**:
   Open your browser and go to `http://localhost:5000` to use the app.

---

## How to Use

### Calculate Perimeter, Area of All Shapes

1. **Select Shape**:
   Choose a shape (Rectangle, Triangle, or Circle) from the dropdown menu.

2. **Enter Dimensions**:
    - For **Rectangle**, enter the width (`a`) and height (`b`).
    - For **Triangle**, enter the base (`a`) and height (`b`).
    - For **Circle**, enter the radius.

3. **Select Operation**:
   Choose the operation you want to perform:
    - **Area**: Calculates the area of the selected shape.
    - **Perimeter**: Calculates the perimeter of the selected shape.

4. **View Results**:
   The calculated result will be displayed below the input fields. Additionally, the canvas will dynamically update to show the selected shape with its dimensions (with highlighted lines and labels).

---

## Disclaimer

This software is provided "as-is" with no warranty of any kind. The author is not responsible for any issues that arise from using this program. The calculations and visualizations provided are for educational and illustrative purposes only.
> This project is made in result of a school project!
> [Berufsbildenden Schulen „Otto von Guericke“ Magdeburg](https://bbsovg.de)

---

## Contact

For any inquiries, feedback, or issues, please contact:

- Email: [contact.github@tsuki.wtf](mailto:contact.geo-cal.bbsovg.github@tsuki.wtf)
- Website: [tsuki.wtf](https://tsuki.wtf)
- GitHub User: [kami-tsuki](https://github.com/kami-tsuki)
- Repository: [GeometricCalculator](https://github.com/kami-tsuki/GeometricCalculator)

---

### Explanation of Sections:

1. **Title**: The name of your project (`GeoMath Web App`).
2. **Overview**: A brief description of what the app does, its purpose, and technology used.
3. **Features**: A list of core features of the app.
4. **Requirements**: A list of dependencies, including Python, Docker (optional), and any specific Python packages.
5. **How to Install**: 
    - Detailed steps for both Docker-based installation and traditional Python-based installation.
6. **How to Use**: A guide explaining how to use the app for its intended purpose, i.e., calculating the area and perimeter of shapes.
7. **Disclaimer**: A note clarifying that the software is provided "as-is" without warranty.
8. **Contact**: How users can contact you for support or inquiries.