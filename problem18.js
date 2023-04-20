// 82. Remove Duplicates from Sorted List II

// Given the head of a sorted linked list, delete all nodes that have duplicate
//  numbers, leaving only distinct numbers from the original list. Return the linked 
//  list sorted as well.




// leetcode solution of question 82



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


// console.log(JSON.stringify(convertToLinkedList([1,2,3,3,4,4,5])))

let head = convertToLinkedList([1,1,3,4,5,5,6,6]);

var deleteDuplicates = function(head) {
    let pre = new ListNode(0);
    let pointer = pre;
    let curr = head;
    let d;
    while(curr.next){
        if(curr.val == curr.next.val || curr.val == d){
            d = curr.val;
            curr = curr.next;
        }else {pointer.next = new ListNode(curr.val)
            pointer = pointer.next;
            curr = curr.next;

        }
    }if(d===curr.val) return pre.next
    else pointer.next = new ListNode(curr.val)
    return pre.next
    };
    console.log(JSON.stringify(deleteDuplicates(head)))