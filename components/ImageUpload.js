import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { WaveLoading } from 'react-loadingg';
import styles from '../styles/ImageUpload.module.css';
import Tesseract from 'tesseract.js';

const ImageUpload = ({ onTextExtracted }) => {
  const [image, setImage] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(URL.createObjectURL(file));
    setProcessing(true);

    try {
      const { data: { text } } = await Tesseract.recognize(
        file,
        'eng', // List of languages
        {
          logger: (info) => console.log(info),
        }
      );

      console.log('OCR Result:', text);
      onTextExtracted(text);
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
            <p>Browse & Drag and Drop Your Test Paper Here!!!</p>
            <img src="/upload.png" alt="Upload" className={styles.uploadIcon} />
          </div>
        )}
      </Dropzone>
      {image && <img src={image} alt="Uploaded" className={styles.image} />}
      {processing && <WaveLoading />}
    </div>
  );
};

export default ImageUpload;
