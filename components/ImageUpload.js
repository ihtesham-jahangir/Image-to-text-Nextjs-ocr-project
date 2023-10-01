// ImageUpload.js
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import Tesseract from 'tesseract.js';
import styles from '../styles/styles.module.css';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [processing, setProcessing] = useState(false);

  const handleDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(URL.createObjectURL(file));

    setProcessing(true);

    try {
      const { data: { text } } = await Tesseract.recognize(file, 'eng');
      setExtractedText(text);
    } catch (error) {
      console.error('Error during OCR:', error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className={styles.container}>
      <Dropzone onDrop={handleDrop} accept="image/*">
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className={styles.dropzone}>
            <input {...getInputProps()} />
            <p className={styles.p_image}>Drag and drop an image here, or click to select an image</p>
          </div>
        )}
      </Dropzone>
      {image && <img src={image} alt="Uploaded" className={styles.image} />}
      <textarea
        value={extractedText}
        placeholder="Extracted Text"
        className={styles.textarea}
        readOnly
      />
      {processing && <p>Processing...</p>}
    </div>
  );
};

export default ImageUpload;
