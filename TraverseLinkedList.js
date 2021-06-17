// Traversing a Linked List

// 5 -> 3 -> 10

const linkedList = {
    val: 5,
    next: {
        val: 3,
        next: {
            val: 10,
            next: null
        },
    },
};

const arr = [];
let head = linkedList

while (head !== null) {
    arr.push(head.val);
    head = head.next
}

console.log(arr);

const menu = [
    {id: 7, text: "Configuration", parent: 5},
    {id: 1, text: "Introduction", parent: 0},
    {id: 10, text: "Services", parent: 8},
    {id: 3, text: "Chapter 2", parent: 1},
    {id: 11, text: "Endpoints", parent: 8},
    {id: 5, text: "Getting Started", parent: 0},
    {id: 6, text: "Installation", parent: 5},
    {id: 2, text: "Chapter 1", parent: 1},
    {id: 9, text: "Core", parent: 8},
    {id: 8, text: "API", parent: 5},
    {id: 12, text: "About", parent: 0},
    {id: 4, text: "Chapter 3", parent: 1},
]
console.log(menu.sort())

{
    menu.map((data) => {
        console.log(data)
    })
}