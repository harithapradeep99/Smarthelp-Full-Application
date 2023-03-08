import React, { useState } from "react";
import axios from "axios";
import { Subheader_X } from "../../../../components";
import "./createproject.css";

function CreateProject(props) {
    const topic = "CSR Projects";

    const [projectName, setName] = useState("");
    const [projectType, setProjectType] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState("");
    // const [status, setStatus] = useState("");
    const user = localStorage.getItem("user");
    const email = JSON.parse(user).email;

    function onChangeName(e) {
        setName(e.target.value);
    }
    function onChangeProjectType(e) {
        setProjectType(e.target.value);
    }
    function onChangeDescription(e) {
        setDescription(e.target.value);
    }
    function onChangeBudget(e) {
        setBudget(e.target.value);
    }
    // function onChangeStatus(e) {
    //     setStatus(e.target.value);
    // }

    function onSubmit(e) {
        e.preventDefault();

        const newProject = {
            projectName,
            projectType,
            description,
            budget,
            // status,
            email,
        };

        console.log(newProject);

        axios
            .post("/api/projects/save", newProject)
            .then(() => {
                alert("Project Added");
                window.location.replace("/csr/my_projects"); // reload the window
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <div>
            <Subheader_X topic={topic} />
            <div className="outer-container">
                <h1>Create CSR Project</h1>
                <form className="contactform">
                    <div className="form-group">
                        <label>Project Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter Name"
                            value={projectName}
                            onChange={onChangeName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Project Type</label>

                        <select
                            name="projectType"
                            value={projectType}
                            onChange={onChangeProjectType}
                        >
                            <option value="">Select a Project Type</option>
                            <option value="Urgent Fundraising">
                                Urgent Fundraising
                            </option>
                            <option value="Medical Assistance">
                                Medical Assistance
                            </option>
                            <option value="Shelter Arrangement">
                                Shelter Arrangement
                            </option>
                            <option value="Essential Item Contribution">
                                Essential Item Contribution
                            </option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            type="text"
                            className="form-control"
                            name="description"
                            placeholder="Enter Description"
                            value={description}
                            onChange={onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Budget (LKR)</label>
                        <input
                            type="text"
                            className="form-control"
                            name="status"
                            placeholder="Enter Budget Amount"
                            value={budget}
                            onChange={onChangeBudget}
                        />
                    </div>

                    <button type="submit" onClick={onSubmit}>
                        &nbsp; Send to Admin
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateProject;
