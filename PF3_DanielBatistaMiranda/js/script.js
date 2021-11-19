const inputs = document.querySelectorAll(".input");
var CalcularKM = document.getElementById('CalcularKM');
const limparIMC = document.getElementById('limpar');


function CalcularKMf () {
    const nome = document.getElementById('nome').value;
    const taxadeJuros = document.getElementById('taxadeJuros').value;
    const ValoAPlicadoMensalmente = document.getElementById('ValoAPlicadoMensalmente').value;
    const calcularprestacoes = document.getElementById('calcularprestacoes').value;
    const resultado = document.getElementById('resultado');
    if (nome !== '' &&  taxadeJuros !== '' && ValoAPlicadoMensalmente !== '')
     {
         let taxadejuroscerta = taxadeJuros / 100;
        let VF = (ValoAPlicadoMensalmente*((((1+ taxadejuroscerta)**calcularprestacoes) - 1) / taxadejuroscerta));
        let vfresult = VF.toFixed(2);
        var formatter = new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: 'BRL',
        });formatter.format(vfresult)
        resultado.textContent = `Se ${nome} Poupar ${ValoAPlicadoMensalmente}, em ${calcularprestacoes} com um juros de ${taxadeJuros}% ira ter um valor futuro poupado de ${formatter.format(vfresult)} `;
        }
         
    else{
        resultado.style.color = "red";
        resultado.textContent = `Preencha todos os campos corretamente!`;
    }
}
CalcularKM.addEventListener('click', CalcularKMf);


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
