const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

// Get all notes
router.get('/', noteController.getAllNotes);

// Get a single note by ID (this must come before other routes with :id)
router.get('/:id', noteController.getNote);

// Create a new note
router.post('/', noteController.createNote);

// Update a note
router.put('/:id', noteController.updateNote);

// Delete a note
router.delete('/:id', noteController.deleteNote);

module.exports = router; 