/* Catálogo dinámico */
const terrenos = [
  {
    nombre:"Desarrollo Las Cruces",
    detalle:"Es tu paraíso a unos minutos de la ciudad!",
    ubicacion:"A 20 min de Pachuca centro",
    ubicacion_2:"A 65min de CDMX",
    medidas:"120m²", 
    universidad:"Las mejores universidades a solo 10 min",
    precio:50000,
    img:"../Las_Cruces/img/Las_Cruces (7).jpeg",
    pagina:"../Las_Cruces/Las_Cruces.html"
  },
  {
    nombre:"Barrio Benito",
    detalle:"Ubicado Estratégicamente <br> Zona de rápido crecimiento",
    ubicacion:"A 5km de Galerías Pachuca",
    ubicacion_2: "A 9km de Pachuca centro",
    universidad: "A 1 km de universidades",
    medidas:"Desde 115.50m2 hasta 150m2",
    precio: 169500,
    img:"../Barrio_Benito/img/Barrio_Benito (1).jpeg",
    pagina:"../Barrio_Benito/Barrio_benito.html"
  },
  {
    nombre:"Quinta Pascual",
    detalle:" Zona de rápido crecimiento",
    ubicacion:"A 10 min de Pachuca Centro",
    ubicacion_2: "A 7 min. de Galerias Pachuca",
    universidad:"Ubicada a 2.5km de zona de Universidades",
    medidas:"Lotes desde 108m²",
    precio:"1700 el m²",
    img:"../Quinta_Pascual/img/Quinta_Pascual (3).jpeg",
    pagina:"../Quinta_Pascual/Quinta_Pascual.html"
  },
  {
    nombre:"Rancho Santa Julia",
    detalle:" Ejido con dominio pleno ",
    ubicacion: "A 400mts. de la carr. Pachuca-Actopan ",
    ubicacion_2: "A 12 minutos de Pachuca Centro",
    universidad:"Escuelas a 1 km, COBAEH a 1.5 km y universidades a solo 5 min",
    medidas:"LOTES DE 150m²",
    precio:900000,
    img:"../Rancho_Santa_Julia/img/Rancho_Santa_Julia (17).jpeg",
    pagina:"../Rancho_Santa_Julia/Rancho_Santa_Julia.html"
  }
];

const catalogo = document.getElementById("catalogo");
terrenos.forEach(t=>{
  const card = document.createElement("div");
  card.className="terreno";
  card.innerHTML=`
    <img src="${t.img}" alt="${t.nombre}">
    <div class="info">
      <div>
        <h2>${t.nombre}</h2>
        <h3>${t.detalle || ""}</h3>
        <p>📍 ${t.ubicacion || ""}</p>
        <p>📍 ${t.ubicacion_2 || ""}</p>
        <p>🎓 ${t.universidad || ""}</p>
        <p>📐 ${t.medidas || ""}</p>
        <p>💰  Desde $${t.precio.toLocaleString()}</p>
      </div>
      <a href="${t.pagina}" class="button-56" role="button">Información</a>
    </div>
  `;
  catalogo.appendChild(card);
});
