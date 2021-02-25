// if the same class existed on list items,
//for different lists and you only wanted
// the class for one set of list items, use
// document.querySelector('ul').
//getElementsByClassName("list-item");

//below produces a 0-indexed HTML collection of both
//ul and ol list items, all same class, 11 items
const allListItems1 = document.getElementsByClassName("list-item");
console.log(allListItems1);

//below querySelector results in an empty HTML collection,
// not the actual elements, not useful
const ulItems1 = document
  .querySelector("ul")
  .getElementsByClassName(".list-item");
console.log(ulItems1);

//querySelectorAll does not work, not a function
//querySelectorAll is node list,
//getElementsByClassName is an HTML collection, not compatible
// const ulItems2 = document
//   .querySelectorAll("ul")
//   .getElementsByClassName(".list-item");
// console.log(ulItems2);

//gets the first list item in the ul, "list item a"
//can string together 2 query selectors
const ulItems3 = document.querySelector("ul").querySelector(".list-item");
console.log(ulItems3);

//can combine querySelector and querySelectorAll,
//gets all the list-item elements within the ul
//as a 0-indexed node list (default result for querySelectorAll)
const ulItems4 = document.querySelector("ul").querySelectorAll(".list-item");
console.log(ulItems4);
