from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import base64
from io import BytesIO
from PIL import Image
import numpy as np
from predictions import request_dam

app = Flask(__name__)
CORS(app)

# Configuration for file uploads
UPLOAD_FOLDER = "uploads"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

# Define valid extensions

# Ensure the upload directory exists
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


def numpy_to_base64(image_array):
    """Convert a numpy array to a base64 string."""
    image = Image.fromarray(np.uint8(image_array * 255))  # Convert array to an image
    buffer = BytesIO()
    image.save(buffer, format="JPEG")
    img_str = base64.b64encode(buffer.getvalue()).decode("utf-8")
    return img_str


def file_extension(filename):
    """return the extension of the file"""
    return os.path.splitext(filename)[1].lower()


@app.route("/api/hello", methods=["GET"])
def hello():
    return jsonify(message="Hello from Flask!")


@app.route("/api/upload", methods=["GET"])
def upload_image():
    # get the value from the get
    value = request.args.get("value")
    return jsonify(uploaded=True, images=request_dam(value))


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=4000, debug=True)