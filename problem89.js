// 71. Simplify Path
// Given a string path, which is an absolute path (starting with a slash '/') 
// to a file or directory in a Unix-style file system, convert it to the simplified canonical path.

// In a Unix-style file system, a period '.' refers to the current directory, a double period '..'
//  refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are 
//  treated as a single slash '/'. For this problem, any other format of periods such as '...' are 
//  treated as file/directory names.

// The canonical path should have the following format:

//     The path starts with a single slash '/'.
//     Any two directories are separated by a single slash '/'.
//     The path does not end with a trailing '/'.
//     The path only contains the directories on the path from the root directory to the target 
//     file or directory (i.e., no period '.' or double period '..')

// Return the simplified canonical path.

// leetcode solution of the question 71

var simplifyPath = function(path) {
    let set = [];
    let ans = [];
    let dir ="";
    let d = "", sDir = false;
    for(i=0;i<path.length;i++){
        if(path[i]=="/" || path[i]=="."){
            if(path[i]=='.' && path[i+1]!='/'&& path[i+2]!='/'){
                sDir = true;
            }
            if(sDir && path[i]=='.'){
                dir = dir + "."
                continue;
            }
            if(path[i]=="."&&path[i+1]=="."){
                i++;
                set.push(".."),d='';continue;
            }
            if(dir.length>0){
                set.push(dir), dir ="",sDir=false;
            }
            set.push(path[i]);
        }else{
            sDir = true;
                dir = dir + path[i]
            }
        } if(dir.length>0){set.push(dir)}
        while(set[0]!="/"){set.shift()}
        for(i=0;i<set.length;i++){
            if(set[i] == ".."){
                if(ans.length==1) {continue;}
                ans = ans.slice(0,-2);continue;
            }
            if((set[i]=="/" && ans[ans.length-1]=='/'||set[i]=='.')){
                continue;
            }

            
            ans.push(set[i])
        }

        while(ans[ans.length-1]=="/") {if(ans.length==1) break ; ans.pop();}
        return ans.join("")
};

console.log(simplifyPath("/hui../a"))