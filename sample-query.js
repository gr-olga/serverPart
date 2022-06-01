const { user, todoItem, todoList } = require("./models");


//
// async function listsWithUsers() {
//   const lists = await todoList.findAll({
//    include: [{ model: user, attributes: ["name"] }],
//    //  include: [user],
//   });
//
//   return lists.find((list) => list.toJSON());
// }

//listsWithUsers().then((lists) => console.log(lists));


// async function getUserWithList(id) {
//   const result = await user.findByPk(id, { include: [todoList] });
//   return result.get({ plain: true });
// }
// getUserWithList(1).then(user => console.log("user by id with lists", user));
//
// async function importantTodos() {
//   const todos = await todoItem.findAll({
//     where: { important: true },
//     include: { model: todoList, attributes: ["name"] }
//   });
//   return todos.map(item => item.get({ plain: true }));
// }
//
// importantTodos().then(items => console.log("important todoItems", items));

async function fullUserById(id) {
  const result = await user.findByPk(id, {
    include: [
      {
        model: todoList,
        attributes: ["name"],
        include: { model: todoItem, attributes: ["task"] }
      }
    ]
  });
  return result.get({ plain: true });
}

fullUserById(1).then(user => console.log("User with tasks", user));