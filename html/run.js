const prompt = "<font style='color:lightgreen;'>christoph</font>@<font style='color:red;'>website</font>:~# ";
const trmnl = document.getElementById('terminal')
trmnl.innerHTML = `Last login: ${dateStringLogon} from localhost<br />`
commands.map(command => {
    trmnl.innerHTML += `${prompt}${command.in}${command.out}`
});
trmnl.innerHTML += "<span class='cursor'>█</span>"