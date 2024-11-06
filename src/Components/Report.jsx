import React from 'react'
import jsPDF from 'jspdf';

function generatePDF(data) {
  const doc = new jsPDF();

  // Title
  doc.setFontSize(22);
  doc.text('SWOT Test Report', 20, 20);

  // Report Date
  doc.setFontSize(12);
  doc.text(`Test taken on: ${data.testDate}`, 20, 30);

  // Name
  doc.setFontSize(18);
  doc.text(`Name: ${data.name}`, 20, 40);

  // Introduction
  doc.setFontSize(14);
  doc.text('Introduction', 20, 60);
  doc.setFontSize(12);
  doc.text(
    `The SWOT TEST helps individuals identify strengths, weaknesses, opportunities, and threats. ${data.introduction}`,
    20,
    70,
    { maxWidth: 170 }
  );

  // SWOT Analysis Section
  doc.setFontSize(14);
  doc.text('SWOT Analysis', 20, 100);

  // Strengths
  doc.setFontSize(12);
  doc.text('Strengths:', 20, 110);
  doc.text(data.strengths, 30, 120, { maxWidth: 170 });

  // Weaknesses
  doc.text('Weaknesses:', 20, 140);
  doc.text(data.weaknesses, 30, 150, { maxWidth: 170 });

  // Opportunities
  doc.text('Opportunities:', 20, 170);
  doc.text(data.opportunities, 30, 180, { maxWidth: 170 });

  // Threats
  doc.text('Threats:', 20, 200);
  doc.text(data.threats, 30, 210, { maxWidth: 170 });

  // Footer
  doc.setFontSize(10);
  doc.text(
    'Your Trusted Partner for Study Abroad & Career Counseling\ninfo@aaraconsultancy.com | +91 8108 745 275',
    20,
    280
  );

  doc.save(`${data.name}_SWOT_Report.pdf`);
}

const sampleData = {
    name: 'Sreekrishnan K',
    testDate: '07 June 2024',
    introduction:
      'This test can be helpful for personal development and career planning by providing insights into one’s internal and external factors.',
    strengths: 'Good communication skills, ability to work under pressure, strong analytical skills.',
    weaknesses: 'Tends to overcommit, occasional difficulty with time management.',
    opportunities: 'Expanding network, potential for leadership roles, new learning opportunities.',
    threats: 'Competition in the field, potential burnout, balancing work-life demands.',
  };

function Report() {
    return (
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Generate SWOT Test Report</h2>
          <button
            onClick={() => generatePDF(sampleData)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Download PDF
          </button>
        </div>
      );
    }
export default Report
