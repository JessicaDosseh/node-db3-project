const db = require('../data/db-config.js')

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
  addStep 
};

// GET /api/schemes/ - gets master list of schemes (without steps)
function find() {
  return db('schemes'); 
}

// GET /api/schemes/:id - gets a single scheme
function findById(id) {
  return db('schemes')
        . where({id})
        .first(); 
}

// GET /api/schemes/:id/steps - gets all steps for a given scheme, ordered correctly
function findSteps(id) {
  return db('steps')
      .join('schemes', 'steps.scheme_id', 'schemes.id')
      .where({scheme_id: id})
      .orderBy('steps.step_number')
}

/*
SELECT steps.id,schemes.scheme_name, steps.step_number, steps.instructions 
FROM steps
JOIN schemes ON steps.scheme_id = schemes.id
WHERE steps.scheme_id = 5
ORDER BY steps.step_number
*/

// POST /api/schemes - adds a new scheme
function add(scheme) {
  return db('schemes')
        .insert(scheme)
}

// Stretch Problems: 
// addStep(step, scheme_id): This method expects a step object and a scheme id. 
//It inserts the new step into the database, correctly linking it to the intended scheme.
function addStep(step, scheme_id) {
  return db('steps')
        .where({scheme_id})
        .insert(step, 'id'); 
}

// PUT /api/schemes:id - updates a given scheme
function update(changes, id) {
  return db('schemes')
        .where({id})
        .update(changes)
}

// DELETE /api/schemes/:id - removes a given scheme and all associated steps
function remove(id) {
  return db('schemes')
        .where({id})
        .del()
}