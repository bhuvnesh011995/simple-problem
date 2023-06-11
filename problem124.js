/*1146. Snapshot Array

Implement a SnapshotArray that supports the following interface:

    SnapshotArray(int length) initializes an array-like data structure with the given
     length. Initially, each element equals 0.
    void set(index, val) sets the element at the given index to be equal to val.
    int snap() takes a snapshot of the array and returns the snap_id: the total number 
    of times we called snap() minus 1.
    int get(index, snap_id) returns the value at the given index, at the time we took 
    the snapshot with the given snap_id
*/

// leetcode solution of the question 1146

class SnapshotArray{
    constructor(length){
        this.snapId = 0;
        this.data = [];
        this.snapArr = [];
        this.currsnap = {};
    }
    set(index,val){
        this.data[index] = val;
        this.currsnap[index] = val;
    }
    snap(){
        this.snapArr[this.snapId]= {...this.currsnap};
        this.currsnap = {};
        return this.snapId++
    }
    get(index,snap_id){
        for(i=snap_id;i>=0;i--){
            if(this.snapArr[id][index]!=undefined) return this.snapArr[id][index]
            else continue
        }
        return 0;
    }
}