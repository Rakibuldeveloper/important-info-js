const { error } = require('console');
const fs = require('fs');


// file read
async function readfile(){
   try{
    const data = await fs.readFileSync('node js server site programming/create server .js', 'utf8');
    console.log(data); 
   }
   catch(err){
    console.error(error);
   }
}


// file create

async function writefile(){
   try{
    const data = await fs.writeFileSync('node js server site programming/todo.text', 'this is an example how to write file');
    console.log("sucess");
   }
   catch(err){
    console.log(error);
   }
}


// file create - whole content append

async function AppendNewFileContent(){
    try{
     const data = await fs.appendFileSync('node js server site programming/todo.text', '\n this is an example how to write file');
     console.log("sucess");
    }
    catch(err){
     console.log(error);
    }
}


// Delete file

async function deleteFile(){
    try{
      await fs.unlinkSync('node js server site programming/todo2.text');
     console.log(" File Deleted");
    }
    catch(err){
     console.log(error);
    }
}

// rename file

async function renameFile(){
    try{
        const result = await fs.renameSync('node js server site programming/todo.text', 'new.text')
        console.log('success')
    }
    catch(e){
        console.log(error);
    }
}

// create new directory

async function ewDirectory(){
    try{
        const result = await fs.mkdirSync('node js server site programming/new directory');
        console.log('success')
    }
    catch(e){
        console.log(error);
    }
}


// rename the folder

async function renameFolder(){
    try{
        const result = await fs.renameSync('node js server site programming/new directory', 'node js server site programming/new folder')
        console.log('success')
    }
    catch(e){
        console.log(error);
    }
}


// delete folder

async function deleteFolder(){
    try{
        const result = await fs.rmdirSync('node js server site programming/new folder');
        console.log('success')
    }
    catch(e){
        console.log(error);
    }
}


//exsiting file read

async function exsitingFileRead(){
    try{
        const data = await fs.existsSync('node js server site programming/todo.text');
        console.log(true); 
    }catch(e){
        console.log(false);
    }
}

(async () => {
    // await readfile();
    // await writefile();
    // await AppendNewFileContent();
    // await deleteFile();
    // await renameFile();
    // await ewDirectory()
    // await renameFolder();
    // await deleteFolder();
    await exsitingFileRead();
})()

