// 148. Sort ListNode

// Given the head of a linked list, return the list after sorting it in ascending order.


// leetcode solution of the question

let {convertToLinkedList, ListNode} = require("./convertToListNode")


var sortList = function(head) {
    head = convertToLinkedList(head);
    let temp;
    let arr = [];

    while(head){
        arr.push(head.val);
        head = head.next;
    }
    arr= arr.sort((a,b)=>a-b)
    head = new ListNode(0)
    temp = head;
    while(arr.length){
        temp.next = new ListNode(arr[0]);
        temp = temp.next;
        arr.shift();
    }
    return head.next;
};
console.log(JSON.stringify(sortList([4,2,1,3])))