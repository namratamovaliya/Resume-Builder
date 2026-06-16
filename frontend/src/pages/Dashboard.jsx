import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>

      <h1>Resume Dashboard</h1>

      <br />

      <Link to="/create-resume">
        <button>Create Resume</button>
      </Link>

      <br /><br />

      <Link to="/view-resume">
        <button>View Resume</button>
      </Link>

      <br /><br />

      <Link to="/preview">
        <button>Resume Preview</button>
      </Link>

      <br /><br />

      <Link to="/">
        <button>Logout</button>
      </Link>

    </div>
  );
}

export default Dashboard;