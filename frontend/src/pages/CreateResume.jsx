import { useState } from "react";
import API from "../services/api";

function CreateResume() {

  const [resume, setResume] = useState({
    full_name: "",
    email: "",
    phone: "",
    skills: "",
    education: "",
    experience: ""
  });

  const handleChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const response =
      await API.post(
        "create-resume/",
        resume
      );

    alert(response.data.message);
  };

  return (
    <div>

      <h1>Create Resume</h1>

      <form onSubmit={handleSubmit}>

        <input
          name="full_name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="skills"
          placeholder="Skills"
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="education"
          placeholder="Education"
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="experience"
          placeholder="Experience"
          onChange={handleChange}
        />

        <br /><br />

        <button>
          Save Resume
        </button>

      </form>

    </div>
  );
}

export default CreateResume;