// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    database: "pocket_pos",
    user: "root",
    password: "rootroot",
    charset: 'utf8'
  },
};
