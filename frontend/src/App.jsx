import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateResume from "./pages/CreateResume";
import ViewResume from "./pages/ViewResume";
import ResumePreview from "./pages/ResumePreview";
import EditResume from "./pages/EditResume";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/create-resume"
          element={<CreateResume />}
        />

        <Route
          path="/view-resume"
          element={<ViewResume />}
        />

        <Route
          path="/preview"
          element={<ResumePreview />}
        />

        <Route
          path="/edit-resume/:id"
          element={<EditResume />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;