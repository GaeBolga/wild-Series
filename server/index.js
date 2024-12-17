import "dotenv/config";

import mysql from "mysql2/promise";

// Get variables from .env file for database connection
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

class CategoryRepository {
  constructor() {
    // Create a connection pool to the database
    this.databaseClient = mysql.createPool({
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
    });
  }

  async readAll() {
    // Access data
    const [rows] = await this.databaseClient.query("SELECT * FROM category");

    return rows;
  }

  close() {
    // Close the connection pool
    this.databaseClient.end();
  }
}
// debut  new

class ProgramRepository {
  constructor() {
    // Create a connection pool to the database
    this.databaseClient = mysql.createPool({
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
    });
  }

  async readAll() {
    // Access data
    const [rows] = await this.databaseClient.query("SELECT * FROM program");

    return rows;
  }

  close() {
    // Close the connection pool
    this.databaseClient.end();
  }
}

// fin new

const accessData = async () => {
  try {
    const categoryRepository = new CategoryRepository();
    const programRepository = new ProgramRepository();

    const categories = await categoryRepository.readAll();
    const programs = await programRepository.readAll();

    categoryRepository.close();
    programRepository.close();

    console.info(categories);
    console.info(programs);
  } catch (err) {
    console.error("Error accessing the database:", err.message, err.stack);
  }
};

// Run the accessData function

accessData();
