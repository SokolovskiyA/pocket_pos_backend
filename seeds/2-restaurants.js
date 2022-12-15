/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('restaurants').del()
  await knex('restaurants').insert([
    {restaurant_id: '1', restaurant_name: 'Lift B&G', restaurant_address: "333 Menchions Mews", restaurant_phone: "604-715-1111", restaurant_photo: "some photo here", user_id: "a0e055de-7c2a-11ed-a1eb-0242ac120002"},
    {restaurant_id: '2', restaurant_name: 'bla', restaurant_address: "bla", restaurant_phone: "604-715-1", restaurant_photo: "some photo here", user_id: "a0e055de-7c2a-11ed-a1eb-0242ac120002"}
  ]);
};
