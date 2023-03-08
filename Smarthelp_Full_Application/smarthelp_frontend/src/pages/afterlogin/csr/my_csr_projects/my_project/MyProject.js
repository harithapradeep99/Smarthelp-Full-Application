import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { Footer, Subheader_X } from "../../../../../components";
import "./myproject.css";

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
            axios.get(`/api/projects/${params.id}`),
        ])
            .then(([res1, res2]) => {
                console.log(res1.data);
                setDonationCount(res1.data);
                console.log(res2.data.project);
                setProject(res2.data.project);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // to delete a post ----->>>>
    const onDelete = (id) => {
        axios.delete(`/api/projects/delete/${id}`).then((res) => {
            alert("Project Deleted Successfully");

            window.location.replace("/csr/my_projects"); // reload the window
        });
    };
    //----->>>>

    return (
        <div>
            <Subheader_X topic={topic} />
            <section className="my-project">
                <div className="my-project_type">
                    <h3>{project.projectType}</h3>
                </div>
                <div className="my-project_name">
                    <h2>{project.projectName}</h2>
                </div>
                <div className="my-project_specs_row">
                    <div className="my-project_specs_col">
                        <div className="my-project_specs_col_left">
                            <h1>Goal</h1>
                            <h2>LKR {project.budget}</h2>
                        </div>
                        <div className="my-project_specs_col_right">
                            <h1>Achieved</h1>
                            <h2>LKR 20000</h2>
                        </div>
                    </div>
                    <div className="my-project_specs_col">
                        <div className="my-project_specs_col_donations">
                            <h1>Donations</h1>
                            <h2>{donationCount.donation}</h2>
                        </div>
                    </div>
                    
                </div>

                <div className="my-project_body">
                    <div className="my-image_grid">
                        <img src="" alt="" />
                    </div>
                    <div className="my-project_des">
                        <div
                            className={
                                toggleState === 1
                                    ? "my-project_details_row my-active_tab"
                                    : "my-project_details_row"
                            }
                            onClick={() => toggleTab(1)}
                        >
                            <h2>Description</h2>
                        </div>
                        <div
                            className={
                                toggleState === 2
                                    ? "my-project_details_row my-active_tab"
                                    : "my-project_details_row"
                            }
                            onClick={() => toggleTab(2)}
                        >
                            <h2>Details</h2>
                        </div>
                        <div
                            className={
                                toggleState === 3
                                    ? "my-project_details_row my-active_tab"
                                    : "my-project_details_row"
                            }
                            onClick={() => toggleTab(3)}
                        >
                            <h2>Gallery</h2>
                        </div>
                        <div
                            className={
                                toggleState === 4
                                    ? "my-project_details_row my-active_tab"
                                    : "my-project_details_row"
                            }
                            onClick={() => toggleTab(4)}
                        >
                            <h2>Events</h2>
                        </div>
                    </div>
                    <div
                        className={
                            toggleState === 1
                                ? "my-project_details_data my-active_data"
                                : "my-project_details_data"
                        }
                    >
                        <p>{project.description}</p>
                    </div>
                    <div
                        className={
                            toggleState === 2
                                ? "my-project_details_data my-active_data"
                                : "my-project_details_data"
                        }
                    >
                        <p>{project.details}</p>
                        <h4>Project Owner :</h4>
                        <h4>Company :</h4>
                        <h4>User Roles :</h4>
                        <h4>Budget :</h4>
                    </div>
                    <div
                        className={
                            toggleState === 3
                                ? "my-project_details_data my-active_data"
                                : "my-project_details_data"
                        }
                    >
                        <p>{project.gallery}</p>
                    </div>
                    <div
                        className={
                            toggleState === 4
                                ? "my-project_details_data my-active_data"
                                : "my-project_details_data"
                        }
                    >
                        <p>{project.events}</p>
                        <Link to={`/csr/csr_events`}>Event</Link>
                        <button>Create a new Event</button>
                    </div>
                </div>
                {/* <div>
                    <button>
                        <a
                            className="my-advanced"
                            href={`/csr/my_projects/${project._id}/advanced`}
                        >
                            Advanced
                        </a>
                    </button>
                    <button>
                        <a
                            className="my-deleteProject"
                            onClick={() => {
                                onDelete(project._id);
                            }}
                        >
                            Delete Project
                        </a>
                    </button>
                </div> */}
            </section>

            <Footer />
        </div>
    );
};

export default Project;
