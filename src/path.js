const path = require('path');

console.log(__dirname); 
// output:- B:\gojo chapter-1\leran Node\src

console.log(__filename);
// output:- B:\gojo chapter-1\leran Node\src\path.js

console.log(path.basename(__dirname));
// output:- src

console.log(path.basename(__filename));
// output:- path.js 

console.log(path.extname(__filename));
// output:- .js

console.log(path.join(__dirname, 'admin/user.js'));
// output:- B:\gojo chapter-1\leran Node\src\admin\user.js

console.log(path.join('admin/user.js'));
// output:- admin\user.js

console.log(path.resolve('admin/user.js'));
// output:- B:\gojo chapter-1\leran Node\admin\user.js

console.log(path.parse('admin/user.js'));
// output:- { 
                // root: '', 
                // dir: 'admin', 
                // base: 'user.js', 
                // ext: '.js', 
                // name: 'user' 
        // }

