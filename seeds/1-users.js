/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: '1', user_name: 'Alex', user_password: '1234', user_avo: 'some user avo', user_tips: 0, user_shifts: 0, user_sales: 0},
    {id: '2', user_name: 'Rachel', user_password: '1234', user_avo: 'some user avo', user_tips: 0, user_shifts: 0, user_sales: 0},
    {id: '3', user_name: 'Nstasha', user_password: '1234', user_avo: 'some user avo', user_tips: 0, user_shifts: 0, user_sales: 0}
  ]);
};