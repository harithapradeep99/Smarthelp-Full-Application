import React from 'react'
import './projectbox.css'

function ProjectBox() {
    return (
        <div >
            <div className="project-box">
                <div className="project-box-left">
                    <img src="../../images/community.jpg" />
                </div>
                <div className="project-box-right">
                    <div className='pbr-col-1'>
                        <div className='title'>
                            <h4>Project Name</h4>
                            <h7>Project Type</h7>
                        </div>
                        <div className='read'>
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className='pbr-col-2'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum laudantium rem nam magni error dignissimos eius nihil quod?</p>
                    </div>
                    <div className='pbr-col-3'>
                        <div className='pbr-col-3-row-1'>
                            <p>LOREM IPSUM</p>
                        </div>
                        <div className='pbr-col-3-row-2'>
                            <button>Donate</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectBox