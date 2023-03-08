import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer, Subheader_X } from "../../../../components";
import "./ongoing_csr.css";

const Urgent = () => {
  const topic = "CSR Projects";

  const [projects, setProjects] = useState([]);
  const [searchKey, setSearch] = useState([]);

  useEffect(() => {
    axios
      .get("/api/projects/getByProjectType/Urgent Fundraising")
      .then((res) => {
        console.log(res.data.project);
        setProjects(res.data.project);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // to search a project ----->>>>
  const filterData = (projects, searchKey) => {
    const result = projects.filter(
      (project) =>
        project.projectName.includes(searchKey) ||
        project.projectType.includes(searchKey) ||
        project.projectName.toLowerCase().includes(searchKey) ||
        project.projectType.toLowerCase().includes(searchKey)
    );
    setProjects(result);
  };

  const handleSearchArea = (e) => {
    axios
      .get("/api/projects/getByProjectType/Urgent Fundraising")
      .then((res) => {
        if (res.data.success) {
          filterData(res.data.project, searchKey);
        }
      });
  };

  return (
    <div>
      <Subheader_X topic={topic} />

      {/* <!-- ------------------------------CSR Projects------------------------------- --> */}

      <section className="csr_col">
        <h1> Ongoing CSR Projects</h1>
        <p>
          Lorem ipsum may be used as a placeholder before the final copy is
          available.
        </p>

        <div className="project_types">
          <ul>
            <li>
              <Link to="/csr/ongoing_projects/all">All</Link>
            </li>
            <li>
              <Link to="/csr/ongoing_projects/urgent">Urgent Fundraising</Link>
            </li>
            <li>
              <Link to="/csr/ongoing_projects/medical">Medical Assistance</Link>
            </li>
            <li>
              <Link to="/csr/ongoing_projects/shelter">
                Shelter Arrangement
              </Link>
            </li>
            <li>
              <Link to="/csr/ongoing_projects/items">
                Essential Item Contribution
              </Link>
            </li>
          </ul>
        </div>
        <div className="csr_body">
          <div className="search">
            <input
              type="text"
              placeholder="Search Project"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearchArea} type="submit">
              Search
            </button>
          </div>

          <div className="project-column">
            {/* <ProjectBox /> ---> this is the component I created, no need, should delete later */}

            {projects &&
              projects.map((Project) => (
                <div className="project-box">
                  <div className="project-box-left">
                    <img src="../../images/community.jpg" />
                  </div>
                  <div className="project-box-right">
                    <div className="pbr-col-1">
                      <div className="title">
                        <h1>{Project.projectName}</h1>
                        <h2>{Project.projectType}</h2>
                      </div>
                      <div className="read">
                        <Link
                          to={`/csr/ongoing_projects/projects/${Project._id}`}
                        >
                          <button>Read More</button>
                        </Link>
                      </div>
                    </div>
                    <div className="pbr-col-2">
                      <p>{Project.description}</p>
                    </div>
                    <div className="pbr-col-3">
                      <div className="pbr-col-3-row-1">
                        <p>{Project.status}</p>
                      </div>
                      <div className="pbr-col-3-row-2">
                        <Link
                          to={`/csr/ongoing_projects/projects/${Project._id}/donate`}
                        >
                          <button>Donate</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* <!-- ------------------------------Footer------------------------------- --> */}

      <Footer />

      {/* <!-------------------------- JavaScript for Toggle Menu ---------------------------> */}
      {/* <script>

        var navLinks = document.getElementById("navLinks");
        function showMenu() {
            navLinks.style.right = "0";
        }
        function hideMenu() {
            navLinks.style.right = "-200px";
        }



    </script> */}
    </div>
  );
};

export default Urgent;
