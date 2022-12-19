/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('categories').del()
  await knex('categories').insert([
    {category_id: '0c141a72-7e90-11ed-a1eb-0242ac120002', category_name: 'mains', category_type: "food", restaurant_id: "dfe73a74-7e8f-11ed-a1eb-0242ac120002"},
    {category_id: '11677168-7e90-11ed-a1eb-0242ac120002', category_name: 'salads', category_type: "food", restaurant_id: "dfe73a74-7e8f-11ed-a1eb-0242ac120002"},
    {category_id: '170186f4-7e90-11ed-a1eb-0242ac120002', category_name: 'desserts', category_type: "food", restaurant_id: "dfe73a74-7e8f-11ed-a1eb-0242ac120002"},
    {category_id: '41cb33ff2-7e90-11ed-a1eb-0242ac12', category_name: 'appies', category_type: "food", restaurant_id: "dfe73a74-7e8f-11ed-a1eb-0242ac120002"},
    {category_id: '217fe1ca-7e90-11ed-a1eb-0242ac120002', category_name: 'cocktails', category_type: "drink", restaurant_id: "dfe73a74-7e8f-11ed-a1eb-0242ac120002"},
    {category_id: '25fd3716-7e90-11ed-a1eb-0242ac120002', category_name: 'well', category_type: "drink", restaurant_id: "dfe73a74-7e8f-11ed-a1eb-0242ac120002"},
    {category_id: '2aa6311e-7e90-11ed-a1eb-0242ac120002', category_name: 'non alcoholic', category_type: "drink", restaurant_id: "dfe73a74-7e8f-11ed-a1eb-0242ac120002"},
    {category_id: '2f8e8992-7e90-11ed-a1eb-0242ac120002', category_name: 'wine', category_type: "drink", restaurant_id: "dfe73a74-7e8f-11ed-a1eb-0242ac120002"}
  ]);
};
