// 21. Merge Two Sorted lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by
//  splicing together the nodes of the first two lists.

// Return the head of the merged linked list.




// leetcode solution of the question 21

let arr = [1,2,4]
let arr2 = [1,3,4]


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
let list1 = convertToLinkedList(arr)
let list2 = convertToLinkedList(arr2)
console.log(JSON.stringify(list1))


var mergeTwoLists = function(list1, list2) {
    let head = new ListNode(0);
    temp = head;
    while(list1 || list2){
        if(list1 && list2){
            list1.val>list2.val ? (temp.next = list2,list2 = list2.next) : (temp.next = list1,list1 = list1.next);
            temp = temp.next;
        }else if(list1){
            temp.next = list1;
            temp = temp.next;
            list1 = list1.next;
        }else{
            temp.next = list2;
            temp = temp.next;
            list2 = list2.next;
        }
    }
    return head.next
};

// console.log(mergeTwoLists(list1,list2))