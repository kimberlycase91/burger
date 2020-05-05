# Eat-Da-Burger
A "burger logger" which utilizes MySQL, Node, Express, Handlebars, and a homemade ORM to perform CRUD operations from the browswer. 

## What does it do?
The user can type in the the name of any burger they would like to eat, and it will be added to the list of burgers available. Each burger has a "devour it" button, upon clicking, the burger is 'eaten' and moved to the right side of the page. 

## How does it work
When a user types in a type of burger, the burger is added to the database, the page updates, and it is displayed on the left side of the page with a "devour it" button using handlbars. 
When a user clicks the "devour it button" the burger is removed from the list and added to the 'devoured' list, by updating a boolean value of the item in the database. 

## Try it out!
[Click Here](https://polar-wildwood-78959.herokuapp.com)
