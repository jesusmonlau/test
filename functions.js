document.getElementById("botoIniciar").onclick = async function(){

    resposta = await fetch('/cgi-bin/main.cgi');
    data = await resposta.text();
    document.getElementById("resultat").innerText = `${data}`;

}
