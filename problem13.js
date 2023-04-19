// 83. Remove Duplicates from Sorted list

// Given the head of a sorted linked list, delete all duplicates such that each 
// element appears only once. Return the linked list sorted as well.


//leetcode solution of the question 83



var deleteDuplicates = function(head) {
    if(!head) return head
     let pre = head;
     let curr = head.next;
     while(curr){
         if(pre.val==curr.val){
             pre.next = curr.next;
             curr = curr.next}
             else{
                 pre = curr;
                 curr = curr.next
             }
     }
     return head
};