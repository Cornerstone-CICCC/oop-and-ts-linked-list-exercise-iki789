// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value from the DLL
// Make sure to update the size of the list as well

const DLL = require("../lib/DLL");

function deleteAllNodesWithValue(list, value) {
  // your code here
  let cur = list.head;

  while (cur) {
    if (cur.data === value) {
      let tmp = cur.next;
      cur = cur.prev;
      cur.next = tmp;
    }
    cur = cur.next;
  }
  return cur;
}

const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);

deleteAllNodesWithValue(list, 2);
console.log(list.print()); // Output: 1 <-> 3 <-> 5
