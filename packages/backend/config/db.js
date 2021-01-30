module.exports = {
  development: {
    username: 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'tasks_db',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
};
