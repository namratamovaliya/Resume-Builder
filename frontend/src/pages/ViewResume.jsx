import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

function ViewResume() {

  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    getResumes();
  }, []);

  const getResumes = async () => {

    const response = await API.get(
      "view-resume/"
    );

    setResumes(response.data);
  };

  const deleteResume = async (id) => {

    try {

      await API.delete(
        `delete-resume/${id}/`
      );

      alert(
        "Resume Deleted Successfully"
      );

      getResumes();

    } catch (error) {

      console.log(error);

      alert(
        "Delete Failed"
      );

    }
  };

  return (

    <div>

      <h1>Resume List</h1>

      {
        resumes.map((resume) => (

          <div key={resume.id}>

            <h3>
              {resume.full_name}
            </h3>

            <p>
              {resume.email}
            </p>

            <p>
              {resume.phone}
            </p>

            <Link
              to={`/edit-resume/${resume.id}`}
            >
              <button>
                Edit
              </button>
            </Link>

            &nbsp;

            <button
              onClick={() =>
                deleteResume(
                  resume.id
                )
              }
            >
              Delete
            </button>

            <hr />

          </div>

        ))
      }

    </div>

  );
}

export default ViewResume;