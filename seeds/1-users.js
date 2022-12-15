/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {user_id: 'a0e055de-7c2a-11ed-a1eb-0242ac120002', user_name: 'Alex', user_password: '1234', user_avo: 'some user avo', user_tips: 0, user_shifts: 0, user_sales: 0}
  ]);
};