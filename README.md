# OCR App with Next.js

This is a simple Optical Character Recognition (OCR) app built using Next.js. Users can upload an image, and the app extracts text from the image using Tesseract.js.

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd ocr-app
**Install Dependencies:**

**bash**

npm install
Run the App:

**bash**

npm run dev
Open http://localhost:3000 in your browser.

**If Any Error Occur Follow this steps**
- Dowload and install Tesseract OCR from 
- set the path of tesseract.exe in the environment variable
- Restart your system
- Run the app again
- If any error occur again then check the console for details
**Features**
**Image upload using Dropzone.**

Optical Character Recognition (OCR) using Tesseract.js.
Display extracted text.
Processing indicator during OCR.
Dependencies
Next.js
React Dropzone
Tesseract.js

**Usage**

Drag and drop an image into the designated area, or click to select an image.
The app will initiate OCR processing and display the extracted text.
If there's an error during OCR, check the console for details.
Folder Structure
components: Contains React components.
styles: Contains CSS styles.
**Customization**
Feel free to customize the app according to your needs. You can modify styles, add error handling, or enhance features.

**Contributing**

Contributions are welcome! Please create an issue or pull request for any improvements or bug fixes.

**License**
This project is licensed under the MIT License 

You can copy and paste this text into your README.md file. Remember to replace `<repository-url>` with the actual URL of your repository.
