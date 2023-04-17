// 19. Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from
//  the end of the list and return its head.


function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 let arr = [1,2,3,4,5]
 let head = new ListNode(0)
 let temp = head;
 
 arr.map((e)=>{
    temp.next = new ListNode(e)
    temp = temp.next;
 })
 head = head.next;
var removeNthFromEnd = function(head, n) {
    let i = 0;
    temp = head;
    while(temp!=null){
        temp = temp.next;
        i++
    }
    n = i- n,i = 0;
    let pre = null;
    let curr = head;
    if(n==0){
        head = head.next;
    }
    while(i<n){
        pre = curr;
        curr = curr.next;
        i++
    }
    pre.next = curr.next;
    curr.next = null;

    return head;

};
console.log(removeNthFromEnd(head,2));