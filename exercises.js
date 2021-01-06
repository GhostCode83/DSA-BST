const BinarySearchTree = require('./BST')

let BST = new BinarySearchTree()

function exercise(key, value) {
  BST.insert(key, value)
  BST.findHeight()
}

// exercise(3, 0)
// exercise(1, 0)
// exercise(4, 0)
// exercise(6, 0)
// exercise(9, 0)
// exercise(2, 0)
// exercise(5, 0)
// exercise(7, 0)

exercise("E", 0)
exercise("A", 0)
exercise("S", 0)
exercise("Y", 0)
exercise("Q", 0)
exercise("U", 0)
exercise("E", 0)
exercise("S", 0)
exercise("T", 0)
exercise("I", 0)
exercise("O", 0)
exercise("N", 0)

console.log(BST)


//it seems to be the same, although the left and right nodes after 6 are not displayed in the console
//results slightly different, as Q is child of S node in app results.  My results had Q as a child of Y

function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right)
}

//this function adds up all the values of a search tree recursively
//this is linear 0(n)

