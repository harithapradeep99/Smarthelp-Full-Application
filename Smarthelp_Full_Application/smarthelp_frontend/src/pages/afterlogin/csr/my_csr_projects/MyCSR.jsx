import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { Footer, Subheader_X } from '../../../../components';
import './mycsr.css';

const MyCSR = () => {

    const topic = 'CSR Projects';

    const [projects, setProjects] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'))


    useEffect(() => {
        axios
            .get(`/api/projects/getByEmail/${user.email}`)
            .then(res => {
                console.log(res.data);
                setProjects(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <Subheader_X topic={topic} />

            <section className="my_csr_col">
                <h1>My CSR Projects</h1>
                <p>Lorem ipsum may be used as a placeholder before the final copy is available.</p>
            </section>
            <section className="my_csr_content">
                <div className="my_csr_row">
                    <div className="my_csr_left">
                        <a href='/csr/my_projects/create'>
                        <button className="my_csr_button">Create a CSR Project</button>
                        </a>
                        <a href='/csr/my_projects/approved'>
                        <button className="my_csr_button">View Approved Projects</button>
                        </a>
                    </div>
                    <div className="my_csr_right">

                        {projects.map((Project) => (

                            <div className="my-project-box">
                                <div className="my-project-box-up">
                                    <img src="../../images/community.jpg" />
                                </div>
                                <div className="my-project-box-down">
                                    <div className='my-pbr-col-1'>
                                        <div className='my-title'>
                                            <h1>{Project.projectName}</h1>
                                            <h2>{Project.projectType}</h2>
                                        </div>
                                        <div className='my-read'>
                                            <Link to={`/csr/my_projects/projects/${Project._id}`}>
                                                <button>View</button>

                                            </Link>

                                        </div>
                                    </div>
                                    <div className='my-pbr-col-2'>
                                        <p>{Project.description}</p>
                                    </div>
                                    <div className='my-pbr-col-3'>
                                        <div className='pbr-col-3-row-1'>
                                            <p>{Project.status}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </section>

            <Footer />

        </div>
    )
}

export default MyCSR