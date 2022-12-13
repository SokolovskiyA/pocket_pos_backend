/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("users", (table) => {
        table.uuid("id").primary();
        table.string("user_name").notNullable();
        table.string("user_password").notNullable();
        table.string("user_avo").notNullable();
        table.integer('user_shifts');
        table.integer('user_tips');
        table.decimal('user_sales', 6, 2);
    })
    .createTable("restaurants", (table) => {
        table.uuid("restaurant_id").primary();
        table.string("restaurant_name").notNullable();
        table.string("restaurant_address").notNullable();
        table.string("restaurant_phone").notNullable();
        table.string("restaurant_photo").notNullable();
        table
        .uuid("user_id")
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("categories", (table) => {
        table.uuid("category_id").primary();
        table.string("category_name").notNullable();
        table.string("category_type").notNullable();
        table
        .uuid("restaurant_id")
        .references("restaurant_id")
        .inTable("restaurants")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("items", (table) => {
        table.uuid("item_id").primary();
        table.string("item_name").notNullable();
        table.text("item_description").notNullable();
        table.decimal("item_price", 6, 2).notNullable();
        table
        .uuid("category_id")
        .references("category_id")
        .inTable("categories")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("tables", (table) => {
        table.uuid('table_id').primary()
        table.integer("table_number").notNullable();
        table.integer('table_seats').notNullable();
        table
        .uuid("restaurant_id")
        .references("restaurant_id")
        .inTable("restaurants")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable("items").dropTable("categories").dropTable("restaurants").dropTable("users").dropTable("tables");
};
