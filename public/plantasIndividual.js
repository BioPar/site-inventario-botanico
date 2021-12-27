const ArraySlugPlanta = window.location.href.split('/');
const slugPlanta = ArraySlugPlanta[ArraySlugPlanta.length -1];
const urlApi = '/api/planta/' + slugPlanta;

const nomePlanta = document.getElementById("nomePlanta");
const nomeCientifico = document.getElementById("nomeCientifico");
const porte = document.getElementById('porte');
const frutos = document.getElementById('frutos');
const grupo = document.getElementById("grupo");
const necessidadeLuz = document.getElementById("necessidadeLuz");
const habito = document.getElementById("habito");
const imgPlanta = document.getElementById("imgPlanta")

fetch(urlApi)
    .then(res => res.json())
    .then((planta) => {
        nomePlanta.textContent = planta.nomesPopulares[0];
        nomeCientifico.textContent = planta.nomeCientifico;
        if(planta.porte == "pequeno") 
            porte.textContent = "Pequeno";    
        else if (planta.porte == "medio") 
            porte.textContent = "Médio";
        else 
            porte.textContent = "Grande";
        
        frutos.textContent = planta.frutos.possui ? "Sim" : "Não";
        grupo.textContent = planta.grupo.charAt(0).toUpperCase() + planta.grupo.slice(1);


        if(planta.necessidadeLuzSolar = "pouca")
            necessidadeLuz.textContent = "Pouca"
        else if (planta.necessidadeLuz = "media")
            necessidadeLuz.textContent = "Média"
        else 
            necessidadeLuz.textContent = "Alta"

        habito.textContent = planta.habito.charAt(0).toUpperCase() + planta.habito.slice(1);

        imgPlanta.src = planta.imgSrc ? planta.imgSrc : "/imagens/grama.jpeg";

        console.log(planta)
    })