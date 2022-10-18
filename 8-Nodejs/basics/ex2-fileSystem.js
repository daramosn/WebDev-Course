////////-------------------------
// const fs = require('fs');
// console.log(fs);

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('In the callback');
//     if (err) throw err;
// });

// fs.mkdirSync('Cats');
// console.log('I COME AFTER MKDIR IN THE FILE');
//-----------------------------

const fs = require('fs');
const folderName = process.argv[2] || 'Project'

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/style.css`, '');
} catch (error) {
    console.log('Something went wrong :(');
    console.log(error);
}

//on Bash: node ex2-fileSystem.js ex2files