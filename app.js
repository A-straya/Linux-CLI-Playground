const input = document.getElementById("commandInput");
const output = document.getElementById("output");

input.addEventListener("keydown", function (event) {

    if (event.key !== "Enter") return;

    const command = input.value.trim();

    execute(command);

    input.value = "";

});
function execute(command){

    if(command === "") return;

    if(command === "clear"){

        output.innerHTML = "";

        return;

    }

    if(commands[command]){

        output.innerHTML += `

<div class="response">

<div class="command">
student@linux:~$ ${command}
</div>

<div class="result">
${commands[command].output}
</div>

<div class="description">
${commands[command].description}
</div>

<hr>

</div>

`;

    }

    else{

        output.innerHTML += `

<div class="response">

<div class="command">
student@linux:~$ ${command}
</div>

<div class="error">

Command not found.

Try typing <strong>help</strong>

</div>

<hr>

</div>

`;

    }

    output.scrollTop = output.scrollHeight;

}