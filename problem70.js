//leetcode problem solution of  the question 806
var numberOfLines = function(widths, s) {
    let char= new Map();
    char.set("a",widths[0]);
    char.set("b",widths[1]);
    char.set("c",widths[2]);
    char.set("d",widths[3]);
    char.set("e",widths[4]);
    char.set("f",widths[5]);
    char.set("g",widths[6]);
    char.set("h",widths[7]);
    char.set("i",widths[8]);
    char.set("j",widths[9]);
    char.set("k",widths[10]);
    char.set("l",widths[11]);
    char.set("m",widths[12]);
    char.set("n",widths[13]);
    char.set("o",widths[14]);
    char.set("p",widths[15]);
    char.set("q",widths[16]);
    char.set("r",widths[17]);
    char.set("s",widths[18]);
    char.set("t",widths[19]);
    char.set("u",widths[20]);
    char.set("v",widths[21]);
    char.set("w",widths[22]);
    char.set("x",widths[23]);
    char.set("y",widths[24]);
    char.set("z",widths[25]);

    let counter = 0;
    let ans = [0];
    for(i=0;i<s.length;i++){
        counter = counter + char.get(s[i]);
        if(counter>100){
            counter = counter - char.get(s[i]);
            ans[0] = ++ans[0];
            counter = char.get(s[i]);
        }
    }
    ans[0] = ++ans[0];
    ans.push(counter)
    return ans;
};
console.log(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],"abcdefghijklmnopqrstuvwxyz"))