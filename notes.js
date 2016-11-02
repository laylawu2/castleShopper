

//git notes: 

//to get master's changes:
//git branch -v 
//git checkout master 
//git pull (master)

//committing via new branch: 
// Nisreens-MacBook-Pro:castleShopper Niz$ git checkout -b models
// M      	db/models/index.js
// M      	db/models/user.js
// Switched to a new branch 'models'
// Nisreens-MacBook-Pro:castleShopper Niz$ git status
// On branch models
// Changes not staged for commit:
//   (use "git add <file>..." to update what will be committed)
//   (use "git checkout -- <file>..." to discard changes in working directory)

//        	modified:   db/models/index.js
//        	modified:   db/models/user.js

// Untracked files:
//   (use "git add <file>..." to include in what will be committed)

//        	db/models/castle.js

// no changes added to commit (use "git add" and/or "git commit -a")
// Nisreens-MacBook-Pro:castleShopper Niz$ git add -A
// Nisreens-MacBook-Pro:castleShopper Niz$ git commit -m "added castle model"
// [models a59db9f] added castle model
//  3 files changed, 49 insertions(+)
//  create mode 100644 db/models/castle.js
// Nisreens-MacBook-Pro:castleShopper Niz$ git push origin models
// Counting objects: 9, done.
// Delta compression using up to 8 threads.
// Compressing objects: 100% (9/9), done.
// Writing objects: 100% (9/9), 1.29 KiB | 0 bytes/s, done.
// Total 9 (delta 4), reused 0 (delta 0)
// remote: Resolving deltas: 100% (4/4), completed with 3 local objects.
// To https://github.com/NEIA20/castleShopper.git
//  * [new branch]      models -> models