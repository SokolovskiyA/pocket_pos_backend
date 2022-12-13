/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('restaurants').del()
  await knex('restaurants').insert([
    {restaurant_id: '1', restaurant_name: 'Lift B&G', restaurant_address: "333 Menchions Mews", restaurant_phone: "604-715-1111", restaurant_photo: "some photo here", user_id: "1"},
    {restaurant_id: '2', restaurant_name: 'Black & Blue', restaurant_address: "111 Some Address", restaurant_phone: "604-715-1111", restaurant_photo: "some photo here", user_id: "1"},
    {restaurant_id: '3', restaurant_name: 'Joe Fortes', restaurant_address: "111 Some Address", restaurant_phone: "604-715-1111", restaurant_photo: "some photo here", user_id: "1"}
  ]);
};
