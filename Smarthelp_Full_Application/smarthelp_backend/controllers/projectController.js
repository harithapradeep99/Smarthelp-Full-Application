const Project = require("../models/projectModel");

// create a project -------->>>>>>>
const createProject = async (req, res) => {
    //method 1 --- (not recomended)

    let newProject = new Project(req.body);

    newProject.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        return res.status(200).json({
            success: "Project saved successfully",
        });
    });

    //method 2 --- (recomended)

    // const { name, projectType, description,status } = req.body
    // const { name, email,projectType, description,status } = req.body
    // try {
    //     const project = await Project.create({ name, projectType, description, status })
    //     res.status(201).json({ project })
    // } catch (error) {
    //     res.status(400).json({ error: error.message })
    // }
};

// // create a new Project -------->>>>>>>
// const createProject = async (req, res) => {
//     const { name, projectType, description, status } = req.body

//     let emptyFields = []

//     if (!name) {
//         emptyFields.push('name')
//     }
//     if (!projectType) {
//         emptyFields.push('projectType')
//     }
//     if (!description) {
//         emptyFields.push('description')
//     }
//     if (!status) {
//         emptyFields.push('status')
//     }
//     if (emptyFields.length > 0) {
//         return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
//     }

//     // add to the database
//     try {
//         //   const user_id = req.user._id
//         const project = await Project.create({ name, projectType, description, status })
//         res.status(200).json(project)
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// }

// get all projects -------->>>>>>>

const getAllProjects = async (req, res) => {
    //method 1 --- (not recomended)

    Project.find()
        .sort({ created: -1 })
        .exec((err, projects) => {
            if (err) {
                return res.status(400).json({
                    error: err,
                });
            }
            return res.status(200).json({
                success: true,
                existingprojects: projects,
            });
        });

    //method 2 --- (recomended)

    // try {
    //     const projects = await Project.find()
    //     res.status(200).json({ projects })
    // } catch (error) {
    //     res.status(400).json({ error: error.message })
    // }
};

// get a project -------->>>>>>>
const getProject = async (req, res) => {
    //method 1 --- (not recomended)

    let projectId = req.params.id;

    Project.findById(projectId, (err, project) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }

        return res.status(200).json({
            success: true,
            project,
        });
    });

    //method 2 --- (recomended)

    // const { id } = req.params

    // try {
    //     const project = await Project.findById(id)

    //     if (project) {
    //         res.status(200).json({ project })
    //     } else {
    //         res.status(404).json({ error: 'Project not found' })
    //     }
    // } catch (error) {

    //     res.status(400).json({ error: error.message })
    // }
};

// update a project -------->>>>>>>
const updateProject = async (req, res) => {
    //method 1 --- (not recomended)

    Project.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (err, project) => {
            if (err) {
                return res.status(400).json({ error: err });
            }

            return res.status(200).json({
                success: "Updated successfully",
                project,
            });
        }
    );

    //method 2 --- (recomended)

    // const { id } = req.params
    // const { name, projectType, description, status } = req.body

    // try {
    //     const project = await Project.findByIdAndUpdate(id, { name, projectType, description, status }, { new: true })

    //     if (project) {
    //         res.status(200).json({ project })
    //     } else {
    //         res.status(404).json({ error: 'Project not found' })
    //     }
    // } catch (error) {
    //     res.status(400).json({ error: error.message })
    // }
};

// delete a project -------->>>>>>>
const deleteProject = async (req, res) => {
    //method 1 --- (not recomended)

    Project.findByIdAndRemove(req.params.id).exec((err, deletedPost) => {
        if (err)
            return res.status(400).json({
                message: "Delete unsuccessful",
                err,
            });

        return res.json({
            message: "Delete successful",
            deletedPost,
        });
    });

    //method 2 --- (recomended)

    // const { id } = req.params

    // try {
    //     const project = await Project.findByIdAndDelete(id)

    //     if (project) {
    //         res.status(200).json({ project })
    //     } else {
    //         res.status(404).json({ error: 'Project not found' })
    //     }
    // } catch (error) {
    //     res.status(400).json({ error: error.message })
    //
};

const getByEmail = async (req, res) => {
    const email = req.params.email;
    const project = await Project.find({ email: email });
    res.json(project);
};

// Get project by projectType -------->>>>>>>
const getByProjectType = (req, res) => {
    Project.find({ projectType: req.params.projectType }).exec(
        (err, project) => {
            if (err) {
                return res.status(400).json({
                    error: err,
                });
            }
            return res.status(200).json({
                success: true,
                project,
            });
        }
    );
};

module.exports = {
    createProject,
    getAllProjects,
    getProject,
    updateProject,
    deleteProject,
    getByProjectType,
    getByEmail,
};