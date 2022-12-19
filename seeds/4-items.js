/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    { item_id: '432e8c72-7e90-11ed-a1eb-0242ac120002', 
      item_name: "main1", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '0c141a72-7e90-11ed-a1eb-0242ac120002'},
    { item_id: '4a559270-7e90-11ed-a1eb-0242ac120002', 
      item_name: "main2", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '0c141a72-7e90-11ed-a1eb-0242ac120002'},
    { item_id: '547aaace-7e90-11ed-a1eb-0242ac120002', 
      item_name: "main3", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '0c141a72-7e90-11ed-a1eb-0242ac120002'},
    

    { item_id: '5a45e7e8-7e90-11ed-a1eb-0242ac120002', 
      item_name: "salad1", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '11677168-7e90-11ed-a1eb-0242ac120002'},
    { item_id: '62fef604-7e90-11ed-a1eb-0242ac120002', 
      item_name: "salad2", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '11677168-7e90-11ed-a1eb-0242ac120002'},
    { item_id: '6ad08294-7e90-11ed-a1eb-0242ac120002', 
      item_name: "salad3", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '11677168-7e90-11ed-a1eb-0242ac120002'},
    

    { item_id: '73d10ab2-7e90-11ed-a1eb-0242ac120002', 
      item_name: "dessert1", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '170186f4-7e90-11ed-a1eb-0242ac120002'},
    { item_id: '7ab0ce12-7e90-11ed-a1eb-0242ac120002', 
      item_name: "dessert2", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '170186f4-7e90-11ed-a1eb-0242ac120002'},
    { item_id: '7f75c024-7e90-11ed-a1eb-0242ac120002', 
      item_name: "dessert3", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '170186f4-7e90-11ed-a1eb-0242ac120002'},
    

    { item_id: '864e6d38-7e90-11ed-a1eb-0242ac12', 
      item_name: "appie1", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '41cb33ff2-7e90-11ed-a1eb-0242ac12'},
    { item_id: '9b59a99a-7e90-11ed-a1eb-0242ac120002', 
      item_name: "appie2", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '41cb33ff2-7e90-11ed-a1eb-0242ac12'},
    { item_id: 'a105c70c-7e90-11ed-a1eb-0242ac120002', 
      item_name: "appie3", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '41cb33ff2-7e90-11ed-a1eb-0242ac12'},
    

    { item_id: 'a8ec7948-7e90-11ed-a1eb-0242ac120002', 
      item_name: "drink1", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '217fe1ca-7e90-11ed-a1eb-0242ac120002'},
    { item_id: 'ada68dde-7e90-11ed-a1eb-0242ac120002', 
      item_name: "drink2", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '217fe1ca-7e90-11ed-a1eb-0242ac120002'},
    { item_id: 'b343c4fa-7e90-11ed-a1eb-0242ac120002', 
      item_name: "drink3", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '217fe1ca-7e90-11ed-a1eb-0242ac120002'},
    

    { item_id: 'b84fc3a4-7e90-11ed-a1eb-0242ac120002', 
      item_name: "drink1", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '25fd3716-7e90-11ed-a1eb-0242ac120002'},
    { item_id: 'bd81f5ea-7e90-11ed-a1eb-0242ac120002', 
      item_name: "Drink2", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '25fd3716-7e90-11ed-a1eb-0242ac120002'},
    { item_id: 'c410b90a-7e90-11ed-a1eb-0242ac120002', 
      item_name: "Drink3", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '25fd3716-7e90-11ed-a1eb-0242ac120002'},
    

    { item_id: 'c8c91c44-7e90-11ed-a1eb-0242ac120002', 
      item_name: "Drink1", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '2aa6311e-7e90-11ed-a1eb-0242ac120002'},
    { item_id: 'cd8bb8ae-7e90-11ed-a1eb-0242ac120002', 
      item_name: "Drink2", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '2aa6311e-7e90-11ed-a1eb-0242ac120002'},
    { item_id: 'd5863f48-7e90-11ed-a1eb-0242ac120002', 
      item_name: "Drink3", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '2aa6311e-7e90-11ed-a1eb-0242ac120002'},
    

    { item_id: 'dad6ed58-7e90-11ed-a1eb-0242ac120002', 
      item_name: "Drink1", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '2f8e8992-7e90-11ed-a1eb-0242ac120002'},
    { item_id: 'df706628-7e90-11ed-a1eb-0242ac120002', 
      item_name: "Drink2", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '2f8e8992-7e90-11ed-a1eb-0242ac120002'},
    { item_id: 'e4f8f7ae-7e90-11ed-a1eb-0242ac120002', 
      item_name: "Drink3", 
      item_description: "some description here", 
      item_price: "40.75", 
      category_id: '2f8e8992-7e90-11ed-a1eb-0242ac120002'},
  ]);
};
