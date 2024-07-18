const db = require("./connection");
function seed() {
  return db
    .query(
      `
    DROP TABLE IF EXISTS dogs;
    `
    )
    .then(() => {
      return db.query(`
            CREATE TABLE dogs (
                id SERIAL PRIMARY KEY,
                name VARCHAR,
                fav_food VARCHAR
            )
            `);
    })
    .then(() => {
      return db.query(
        `INSERT INTO dogs 
            (name, fav_food) 
        VALUES 
        ('peanut','anything'),
      ('treacle', 'biscuits')
    `
      );
    })
    .catch((err) => {
      console.log(err);
    });
}
module.exports = seed;
