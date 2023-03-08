import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import "./App.css";
import { Home, Blog, About, Contact, Register, Login } from "./pages";
import { Home_X, CSR, Community, Trustworthiness } from "./pages";
import {
  Allevents,
  Allprojects,
  Items,
  Medical,
  Shelter,
  Urgent,
} from "./pages/afterlogin/csr";
import Event from "./pages/afterlogin/csr/csr_events/event/Event";
import MyCSR from "./pages/afterlogin/csr/my_csr_projects/MyCSR";
import Project from "./pages/afterlogin/csr/ongoing/project/Project";
import ProjectBox from "./components/projectbox/ProjectBox";

import MyProject from "./pages/afterlogin/csr/my_csr_projects/my_project/MyProject";

import CreateProject from "./pages/afterlogin/csr/my_csr_projects/CreateProject";
import Progressbar from "./components/progressbar/Progressbar";
import ScrollToTop from "./ScrollToTop";

import DonatePage from "./pages/afterlogin/csr/ongoing/project/DonatePage";

// haritha
import Admin from "./pages/afterlogin/admin/Admin";
import Messenger from "./pages/afterlogin/messenger/Messenger";
import Profile from "./pages/afterlogin/profile/Profile";
import Setting from "./pages/afterlogin/setting/Setting";
import { AuthContext } from "./context/AuthContext";

function App() {
  // const { user, admin } = useAuthContext();
  // const { user } = useContext(AuthContext);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/box" element={<ProjectBox />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/register"
          // element={!user ? <Register /> : <Navigate to="/Home_X" />}
          element={<Register /> }
        />
        <Route
          path="/login"
          // element={!user ? <Login /> : <Navigate to="/Home_X" />}
          element={<Login />}
        />

        <Route path="/home_x" element={<Home_X />} />

        <Route path="/csr" element={<CSR />} />
        <Route path="/csr/ongoing_projects/all" element={<Allprojects />} />
        <Route path="/csr/ongoing_projects/urgent" element={<Urgent />} />
        <Route path="/csr/ongoing_projects/medical" element={<Medical />} />
        <Route path="/csr/ongoing_projects/shelter" element={<Shelter />} />
        <Route path="/csr/ongoing_projects/items" element={<Items />} />

        <Route
          path="/csr/ongoing_projects/projects/:id"
          element={<Project />}
        />
        <Route path="/progressbar" element={<Progressbar />} />
        <Route
          path="/csr/ongoing_projects/projects/:id/donate"
          element={<DonatePage />}
        />

        <Route path="/csr/my_projects" element={<MyCSR />} />
        <Route path="/csr/my_projects/projects/:id" element={<MyProject />} />

        <Route path="/csr/my_projects/create" element={<CreateProject />} />

        <Route path="/csr/csr_events" element={<Allevents />} />

        <Route path="/csr/csr_events/all/event" element={<Event />} />

        <Route path="/community" element={<Community />} />
        <Route path="/trustworthiness" element={<Trustworthiness />} />

        {/* haritha */}
        {
          <Route
            path="/messenger"
            // element={!user ? <Navigate replace to="/" /> : <Messenger />}
            element={<Messenger />}
          />
        }

        {/*<Route path="/"  element={<Navigate replace to="/login" />} />  // OR path='/login'
                <Route path='/login' element={<Login/>}/>  */}

        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />

        {
          <Route
            path="/admin"
            element={<Admin />}
          />
        }
      </Routes>
    </Router>
  );
}

export default App;
