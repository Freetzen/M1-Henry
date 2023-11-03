//Molde del Nodo y del Árbol o Sub Arbol
function BinarySearchTree(value) {
   this.root = value,
   this.left = null,
   this.right = null
}

/* function NodeTree(value){
    this.value = value,
    this.left = null,
    this.right = null
}
 */

BinarySearchTree.prototype.insert = function(value){
    if(value > this.value){
        if(!this.right){
            this.right = new BinarySearchTree(value)
        }else{

        }
    }
}

BinarySearchTree.prototype.insert = function(value){
    if(this.left === null && this.right === null){ // !null = true
        return 1
    }
    if(this.left === null ) return 1 + this.right.size()
}
