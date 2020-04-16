const db = require('../data/db-config.js')

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove, 
};


function find() {
  return db('schemes'); 
}

function findById(id) {
  return db('schemes')
        . where({id})
        .first(); 
}

function findSteps(id) {
  return db("schemes as sch")
    .join("steps as st", "sch.id", "st.scheme_id")
    .select("st.id", "sch.scheme_name", "st.step_number", "st.instructions")
    .orderBy("st.step_number")
    .where("st.scheme_id", id);
}

function add(scheme) {
  return db('schemes')
        .insert(scheme)
}

function update(changes, id) {
  return db('schemes')
        .where({id})
        .update(changes)
}

function remove(id) {
  return db('schemes')
        .where({id})
        .del()
}