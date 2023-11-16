    // pages/index.js
    import React, { useState } from 'react';
    import ImageUpload from '../components/ImageUpload';
    import styles from '../styles/styles.module.css'; // Import your CSS file
    import Navbar from '../components/Navbar';
    import Footer from '../components/footer'
    import { pdf } from '@react-pdf/renderer';
    import PdfDocument from './PdfDocument'; 
    const MainPage = () => {
    const [extractedText, setExtractedText] = useState('');
    const [openAIResult, setOpenAIResult] = useState('');
    const downloadPdf = async () => {
        const blob = await pdf(<PdfDocument text={openAIResult} />).toBlob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'test-result.pdf';
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
      };
    const handleTextExtracted = (text) => {
        setExtractedText(text);
    };

    const handleGeneratePrompt = async () => {
        // Assuming specificPrompt is the specific prompt you want to use
        const specificPrompt = `You are a teacher grading your student's answers.

        Ask a question related to Long Questions, Short Questions, or Multiple Choice Questions.
        
        Provide the student's answer.
        
        Evaluate the answer based on the following criteria:
        
        For Long Questions (Total Marks: 20): [Provide detailed feedback and assign marks out of 20]
        For Short Questions (Total Marks: 10): [Provide concise feedback and assign marks out of 10]
        For Multiple Choice Questions (Total Marks: 1): [Assign 1 for correct answer, 0 for incorrect]
        Repeat the process for more questions.
        if answer is not available in the answer key, please provide feedback and assign marks out of 0 and provide answer key from database.
        Please Compare  the student's answer with the correct answer and provide feedback.
        
        Answer the all questions in the following list.
        
        Example:
        
        Teacher: ${extractedText}
        Student: ${extractedText}
        
        
        Teacher: Evaluate all the answers and . [Assign 1 for correct, 0 for incorrect] `;

        try {
        const response = await fetch('/api/openai', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: specificPrompt }),
        });

        if (response.ok) {
            const { result } = await response.json();
            setOpenAIResult(result);
        } else {
            console.error('Error calling OpenAI API:', response.status);
            setOpenAIResult('Error calling OpenAI API');
        }
        } catch (error) {
        console.error('Error calling OpenAI API:', error);
        setOpenAIResult('Error calling OpenAI API');
        }
    };

    return (
        
        <div className={styles.bg_body}>
            <Navbar />
            <br />
            <br />
            <br />
        <h1 className={styles.h1_main}>Online Test Checker</h1>
        <p className={styles.p_body}>
            This is a tool to help you check your test papers</p>
        <div className={`${styles.container} ${styles.bg_body}`}>
            <ImageUpload onTextExtracted={handleTextExtracted} />
             <div>
            <textarea
                value={extractedText}
                placeholder="Extracted Text"
                readOnly
                className={styles.textarea}
            />
            </div>
            <div>
            <textarea
                value={openAIResult}
                placeholder="Evaluation Result"
                readOnly
                className={styles.textarea}
            />
            <button onClick={handleGeneratePrompt} className={styles.button_container}>Evalute Test Paper</button><br />
            <button onClick={downloadPdf} className={styles.button_container}>Download Result as PDF</button>
            </div>
        </div>  
        <Footer />
        </div>
        
    );
    };

    export default MainPage;
