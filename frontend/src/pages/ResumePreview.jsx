import { useEffect, useState } from "react";
import API from "../services/api";
import { jsPDF } from "jspdf";

function ResumePreview() {

  const [resume, setResume] = useState(null);

  useEffect(() => {
    getResume();
  }, []);

  const getResume = async () => {

    try {

      const response =
        await API.get("view-resume/");

      if (response.data.length > 0) {
        setResume(response.data[0]);
      }

    } catch (error) {
      console.log(error);
    }
  };

  const downloadPDF = () => {

    const pdf = new jsPDF();

    pdf.text(resume.full_name, 20, 20);
    pdf.text(resume.email, 20, 30);
    pdf.text(resume.phone, 20, 40);

    pdf.text("Skills:", 20, 60);
    pdf.text(resume.skills, 20, 70);

    pdf.text("Education:", 20, 90);
    pdf.text(resume.education, 20, 100);

    pdf.text("Experience:", 20, 120);
    pdf.text(resume.experience, 20, 130);

    pdf.save("resume.pdf");
  };

  if (!resume) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>

      <h1>Resume Preview</h1>

      <hr />

      <h2>{resume.full_name}</h2>

      <p>{resume.email}</p>

      <p>{resume.phone}</p>

      <h3>Skills</h3>
      <p>{resume.skills}</p>

      <h3>Education</h3>
      <p>{resume.education}</p>

      <h3>Experience</h3>
      <p>{resume.experience}</p>

      <br />

      <button onClick={downloadPDF}>
        Download PDF
      </button>

    </div>
  );
}

export default ResumePreview;