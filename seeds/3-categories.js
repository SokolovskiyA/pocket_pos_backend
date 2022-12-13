/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('categories').del()
  await knex('categories').insert([
    {category_id: "1", category_name: 'mains', category_type: "food", restaurant_id: "1"},
    {category_id: "2", category_name: 'salads', category_type: "food", restaurant_id: "1"},
    {category_id: '3', category_name: 'desserts', category_type: "food", restaurant_id: "1"},
    {category_id: '4', category_name: 'appies', category_type: "food", restaurant_id: "1"},
    {category_id: '5', category_name: 'cocktails', category_type: "drink", restaurant_id: "1"},
    {category_id: '6', category_name: 'well', category_type: "drink", restaurant_id: "1"},
    {category_id: '7', category_name: 'non alcoholic', category_type: "drink", restaurant_id: "1"},
    {category_id: '8', category_name: 'wine', category_type: "drink", restaurant_id: "1"}
  ]);
};
