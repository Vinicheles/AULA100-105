function inicializar() {
    const nomeUsuario = localStorage.getItem("nomeUsuario");
    console.log(nomeUsuario);
    document.getElementById("nomeUsuario").textContent = "Olá, " + nomeUsuario + "!";
    

    getData();
}

function addsala() {
    const nomeSala = document.getElementById("nomeSala").value;
    console.log(nomeSala);
    if(nomeSala) {
        firebase.database().ref('/').child(nomeSala).set({

        });

        carregaSala(nomeSala);
    }

}

function getData() {
    firebase.database().ref('/').on("value", snapshot => {
        let salas = [];
        snapshot.forEach(childSnapshot => {
            const childKey = childSnapshot.key;
            const html = '<div class="nomeSala" id="'
            + childKey
            + '"onclick="carregaSala(this.id)">#'
            + childKey
            + '</div>'
            salas.push(html);
        });
        document.getElementById("output").innerHTML = salas.join("");

    });

}

function carregaSala(sala) {
    localStorage.setItem("nomeSala", sala);
    location = "chat.html";
}
