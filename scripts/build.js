const { spawn } = require('child_process');

let syncFile = spawn('powershell.exe', ['rd -r ./html;', 'mkdir ./html;', 'move ./docs/.vuepress/dist/* ./html;']);
syncFile.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

syncFile.on('close', (code) => {
  console.log(`子进程退出码：${code}`)
})
syncFile.stderr.on('data', (data) => {
  console.log(`stderr:${data}`)
})