let nome = undefined
let email = undefined
let tel = undefined
let cpf = undefined
let dinheiro = undefined

var dados = undefined

function cadastro() {
	nome = document.getElementById("nome").value
	email = document.getElementById("email").value
	tel = document.getElementById("tel").value
	cpf = document.getElementById("cpf").value
	dinheiro = document.getElementById("dinheiro").value

	dados = {
			nome: nome,
			email:email,
			tel:tel,
			cpf:cpf,
			dinheiro:dinheiro,
		}

	document.body.innerHTML = `
	<div id="flash">
		<img src="../assents/img/Logo-nubank.jpg" alt="logo nubank">
	</div>
	<header>
		<nav>
			<div class="left">
				<i class="fa-regular fa-user"></i>
			</div>
			<div class="right">
				<i class="fa-regular fa-eye"></i>
				<i class="fa-regular fa-circle-question"></i>
				<i class="fa-regular fa-user"></i>
			</div>
		</nav>
		<h1>Olá, ${dados.nome} </h1>
	</header>
	<div id="conta">
		<div>
			<p>conta</p>
			<i class="fa-solid fa-chevron-right"></i>
		</div>
		<h2>R$ ${dados.dinheiro},00</h2>

	</div>

		`
	setTimeout(function() {
	document.getElementById("flash").classList.add("desative")
	}, 4000);
}

