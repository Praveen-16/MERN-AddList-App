const { Router } = require('express');
const { getToDos, saveToDo, deleteToDo, updateToDo } = require("../contollers/ToDoController")
const router = Router();

router.get('/',getToDos)
router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)


module.exports = router;


