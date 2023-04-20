function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function convertToLinkedList(arr){
    let head = new ListNode(0)
let temp = head;

arr.map((e)=>{
   temp.next = new ListNode(e)
   temp = temp.next;
})
return head.next;
}

module.exports = {convertToLinkedList,ListNode}