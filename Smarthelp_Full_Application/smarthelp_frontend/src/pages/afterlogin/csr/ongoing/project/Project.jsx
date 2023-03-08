import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { Footer, Subheader_X } from "../../../../../components";
import "./project.css";

const Project = () => {
    const topic = "CSR Projects";

    const [project, setProject] = useState([]);
    const [donationCount, setDonationCount] = useState([]);

    // Change between des, details, gallery, events
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const params = useParams();
    console.log(params);


    useEffect(() => {
        Promise.all([
          axios.get(`/api/common/donation-count/${params.id}`),
          axios.get(`/api/projects/${params.id}`)
        ])
        .then(([res1, res2]) => {
            console.log(res1.data);
            setDonationCount(res1.data);
            console.log(res2.data.project);
            setProject(res2.data.project);
        })
        .catch(err => {
            console.log(err);
        });
      }, [])

    

    return (
        <div>
            <Subheader_X topic={topic} />
            <section className="csr">
                <h1> Ongoing CSR Projects</h1>
                <p>
                    Lorem ipsum may be used as a placeholder before the final
                    copy is available.
                </p>

                <div className="project_type">
                    <h3>{project.projectType}</h3>
                </div>
                <div className="project_name">
                    <h2>{project.projectName}</h2>
                </div>
                <div className="project_specs_row">
                    <div className="project_specs_col">
                        <div className="project_specs_col_left">
                            <h1>Goal</h1>
                            <h2>LKR {project.budget}</h2>
                        </div>
                        <div className="project_specs_col_right">
                            <h1>Achieved</h1>
                            <h2>LKR 20000</h2>
                        </div>
                    </div>
                    <div className="project_specs_col">
                    <div className="project_specs_col_donations">
                            <h1>Donations</h1>
                            <h2>{donationCount.donation
                            }</h2>
                        </div>
                    </div>
                    <div class="project_specs_col">
                        <Link
                            to={`/csr/ongoing_projects/projects/${project._id}/join`}
                        >
                            <button>JOIN</button>
                        </Link>
                        <Link
                            to={`/csr/ongoing_projects/projects/${project._id}/donate`}
                        >
                            <button>DONATE</button>
                        </Link>
                      
                    </div>
                </div>

                <div className="project_body">
                    <div className="image_grid">
                        <img src="" alt="" />
                    </div>
                    <div className="project_des">
                        <div className={toggleState === 1 ? "project_details_row active_tab" : "project_details_row"} onClick={() => toggleTab(1)}>
                            <h2>Description</h2>
                        </div>
                        <div className={toggleState === 2 ? "project_details_row active_tab" : "project_details_row"} onClick={() => toggleTab(2)}>
                            <h2>Details</h2>
                        </div>
                        <div className={toggleState === 3 ? "project_details_row active_tab" : "project_details_row"} onClick={() => toggleTab(3)}>
                            <h2>Gallery</h2>
                        </div>
                        <div className={toggleState === 4 ? "project_details_row active_tab" : "project_details_row"} onClick={() => toggleTab(4)}>
                            <h2>Events</h2>
                        </div>
                    </div>
                    <div className={toggleState === 1 ? "project_details_data active_data" : "project_details_data"}>
                        <p>{project.description}</p>
                    </div>
                    <div className={toggleState === 2 ? "project_details_data active_data" : "project_details_data"}>
                        <p>{project.details}</p>
                        <h4>Project Owner :</h4>
                        <h4>Company :</h4>
                        <h4>User Roles :</h4>
                        <h4>Budget :</h4>
                    </div>
                    <div className={toggleState === 3 ? "project_details_data active_data" : "project_details_data"}>
                        <p>{project.gallery}</p>
                    </div>
                    <div className={toggleState === 4 ? "project_details_data active_data" : "project_details_data"}>
                        <p>{project.events}</p>
                        
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Project;
