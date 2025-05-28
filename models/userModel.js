<<<<<<< HEAD
let users = [];
let userId = 1;

function createUser(username, password, role) {
  users.push({ id: userId++, username, password, role });
}

function findUser(username) {
  return users.find(user => user.username === username);
}

module.exports = { users, createUser, findUser };
=======
const db = require('../config/db');


// Create user table if not exists
const createUserTable = async () => {
  try {
    await db.none(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(10) DEFAULT 'user',
        is_verified BOOLEAN DEFAULT false,
        verification_token TEXT,
        reset_token TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("✅ User table ensured.");
  } catch (err) {
    console.error("❌ Error creating user table:", err);
  }
};


module.exports = {
  createUserTable
};
>>>>>>> 8e39c56 (Practical 1)
