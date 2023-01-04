let nome = undefined
let email = undefined
let tel = undefined
let cpf = undefined
let sexo = undefined
const box = document.getElementById("box")

function cadastro() {
	nome = document.getElementById("nome").value
	email = document.getElementById("email").value
	tel = document.getElementById("tel").value
	alert(nome+" "+email+tel)
}

function selectSexo() {
	box.classList.add("active")
}

function masculino(){
document.getElementById("sexo").value = "masculino";
box.classList.remove("active")

}