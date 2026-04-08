const express = require('express');
const router = express.Router();
const { curriculumData, getDefaultTopics } = require('../data/curriculum-data');

// GET /api/curriculum/boards
router.get('/boards', (req, res) => {
  res.json(curriculumData.boards);
});

// GET /api/curriculum/grades?board=cbse
router.get('/grades', (req, res) => {
  const { board } = req.query;
  if (!board || !curriculumData.grades[board]) {
    return res.status(400).json({ error: 'Invalid or missing board parameter' });
  }
  res.json(curriculumData.grades[board]);
});

// GET /api/curriculum/subjects?board=cbse&grade=6
router.get('/subjects', (req, res) => {
  const { board, grade } = req.query;
  if (!board || !grade) {
    return res.status(400).json({ error: 'Missing board or grade parameter' });
  }
  const boardSubjects = curriculumData.subjects[board];
  if (!boardSubjects || !boardSubjects[grade]) {
    return res.status(400).json({ error: 'No subjects found for the given board and grade' });
  }
  res.json(boardSubjects[grade]);
});

// GET /api/curriculum/topics?board=cbse&subject=mathematics&grade=6
router.get('/topics', (req, res) => {
  const { board, subject, grade } = req.query;
  if (!board || !subject || !grade) {
    return res.status(400).json({ error: 'Missing board, subject, or grade parameter' });
  }

  const boardTopics = curriculumData.topics[board];
  if (!boardTopics) {
    return res.json([]);
  }

  const subjectTopics = boardTopics[subject];
  if (!subjectTopics) {
    return res.json([]);
  }

  const gradeTopics = subjectTopics[grade];
  if (!gradeTopics) {
    return res.json([]);
  }

  // Return topics from the first available publisher for this board/subject/grade.
  const defaultTopics = getDefaultTopics(board, subject, grade);
  res.json(defaultTopics);
});

module.exports = router;
