import { useState, useEffect } from "react";
import API from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

function EditResume() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    skills: "",
    education: "",
    experience: ""
  });

  useEffect(() => {
    getResume();
  }, []);

  const getResume = async () => {

    const response =
      await API.get(
        "view-resume/"
      );

    const resume =
      response.data.find(
        item => item.id === Number(id)
      );

    if (resume) {
      setFormData(resume);
    }
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await API.put(
      `update-resume/${id}/`,
      formData
    );

    alert(
      "Resume Updated Successfully"
    );

    navigate(
      "/view-resume"
    );

  };

  return (

    <div>

      <h1>Edit Resume</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="skills"
          value={formData.skills}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="education"
          value={formData.education}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Update Resume
        </button>

      </form>

    </div>

  );
}

export default EditResume;