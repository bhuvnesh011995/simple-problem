// leetcode soution of the question 2

 class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
}
class Node{
    constructor(d){
        this.val = d;
        this.next = null;
    }
}
let linkList1 = new LinkedList();
let linkList2 = new LinkedList();
let l1 = [2,4,3]
let l2 = [2,6,4];


function addEleement(li,list){

    li.head = new Node(list[0]),li.size++
    let temp = li.head;
   for(i=1;i<l1.length;i++){
    let newNode = new Node(list[i]);li.size++;
        temp.next = newNode
        temp = newNode;
    }
    return
} 

addEleement(linkList1,l1)
addEleement(linkList2,l2)
console.log(linkList1);
console.log(linkList2)




var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0);
    let curr = result;
    let rem = false;
    while(l1||l2||rem){
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (rem ? 1 : 0)
        rem = false;
        sum>9? (curr.next  = new ListNode(sum%10), rem = true) : curr.next = new ListNode(sum);
        curr = curr.next;
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null;
    }
    return result.next;

};

