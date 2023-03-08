const express = require('express')
const projectModel = require('../models/projectModel')

// controller functions
const { createProject, getAllProjects, getProject, updateProject, deleteProject, getByProjectType,getByEmail } = require('../controllers/projectController')

const router = express.Router()

// create a project
router.post('/save', createProject)

// get all projects
router.get('/', getAllProjects)

// get a project
router.get('/:id', getProject)

// update a project
router.put('/update/:id', updateProject)

// delete a project
router.delete('/delete/:id', deleteProject)

// get projects by project type
router.get('/getByProjectType/:projectType', getByProjectType)

// get projects by email
router.get('/getByEmail/:email', getByEmail)


module.exports = router