import React from 'react';
import jsPDF from 'jspdf';

const Certificate = ({ name, skill }) => {
  const generateCertificate = () => {
    const doc = new jsPDF();
    doc.text(`Certificate of Completion`, 20, 30);
    doc.text(`This is to certify that ${name}`, 20, 50);
    doc.text(`has successfully completed the ${skill} course.`, 20, 70);
    doc.save('certificate.pdf');
  };

  return (
    <div>
      <h2>Certificate</h2>
      <button onClick={generateCertificate}>Download Certificate</button>
    </div>
  );
};

export default Certificate;
