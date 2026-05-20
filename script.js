const nomes = {
  Espada: ["Lâmina Sombria", "Espada do Crepúsculo", "Corte Celestial", "Ferro Maldito", "Gume da Eternidade", "Lâmina Carmesim", "Espada da Aurora Antiga", "Ferro do Guardião Caído", "Lâmina Sussurrante", "Espada da Alvorada"],
  Arco: ["Arco da Lua Prateada", "Arco do Caçador Antigo", "Arco do Vento Gélido", "Arco da Floresta Perdida", "Arco das Sombras Silenciosas", "Arco Celestial", "Arco da Serpente Dourada", "Arco Ecoante", "Arco da Sentinela Etérea", "Arco Coração Selvagem"],
  Crossbow: ["Besta Rompe-Aço", "Besta da Muralha Antiga", "Besta Sussurro Mortal", "Besta da Tempestade", "Besta de Ferro Escarlate", "Besta do Guardião", "Besta Espectral", "Besta Asa de Corvo", "Besta da Vigília Sombria", "Besta do Caçador Noturno"],
  Clava: ["Clava Quebra-Crânios", "Clava da Terra Antiga", "Clava do Titã Primitivo", "Clava Trovejante", "Clava Sangue-de-Touro", "Clava do Guerreiro Tribal", "Clava da Ruína", "Clava Ossuária", "Clava de Carvalho Ancestral", "Clava da Força Bruta"],
  Adaga: ["Adaga Sussurrante", "Adaga da Bruma", "Adaga de Ébano", "Adaga Sangue Frio", "Adaga do Traidor Silencioso", "Adaga da Serpente", "Adaga do Crepúsculo", "Adaga da Rosa Negra", "Adaga do Caos Sereno", "Adaga Sombria Encantada"],
  Machado: ["Machado do Berserker", "Machado Rúnico", "Machado Vingador", "Machado do Inverno Cruel", "Machado do Rei Gigante", "Machado do Guardião", "Machado da Fúria Antiga", "Machado Rasga-Almas", "Machado de Ferro Profundo", "Machado do Caçador de Bestas"],
  Picareta: ["Picareta da Pedra Antiga", "Picareta Rachamundos", "Picareta do Minerador Fantasma", "Picareta da Fenda Sombria", "Picareta do Coração de Ferro", "Picareta do Eco Subterrâneo", "Picareta do Núcleo Flamejante", "Picareta da Terra Viva", "Picareta do Veio Perdido", "Picareta do Guardião das Minas"],
  Pá: ["Pá do Enterrador Silencioso", "Pá da Terra Profunda", "Pá do Construtor Antigo", "Pá da Areia Eterna", "Pá Vento Cortante", "Pá da Colheita Sombria", "Pá Rachaterra", "Pá Forjada em Bronze", "Pá do Explorador Esquecido", "Pá da Guardiã Verdejante"],
  Capacete: ["Capacete do Leão Dourado", "Elmo da Vigília Sombria", "Capuz do Caçador Arcano", "Elmo Dracônico", "Capacete da Fortaleza Antiga", "Elmo da Batalha Eterna", "Capacete dos Ventos Gélidos", "Elmo do Guardião Perdido", "Capacete do Fogo Interno", "Elmo do Eco Metálico"],
  Peitoral: ["Peitoral do Guardião Real", "Armadura da Lâmina Sagrada", "Peitoral do Dragão Adormecido", "Peitoral Sombrio Encarnado", "Colete do Templário Antigo", "Armadura da Geada Eterna", "Peitoral do Rei Guerreiro", "Armadura da Luz Estelar", "Peitoral da Forja Viva", "Armadura do Sentinela Perdido"],
  Calça: ["Calça do Caminhante Sombrio", "Grevas do Guardião Arcano", "Calças do Caçador Noturno", "Pernas da Rocha Viva", "Grevas das Sombras Frias", "Calças do Guerreiro do Norte", "Grevas das Chamas Internas", "Calças do Viajante Estelar", "Grevas do Eco Perdido", "Calças da Senda Oculta"],
  Botas: ["Botas Passo Sombrio", "Botas do Viajante Antigo", "Botos da Tempestade", "Botas da Geada Rápida", "Botas Leves do Arqueiro Real", "Botas das Chamas Serenas", "Botas do Guardião Selvagem", "Botas da Estrada Perdida", "Botas da Sombra Passante", "Botas do Vento Sagrado"],
};

const raridades = [
  { tipo: "Comum", cor: "#e4e4e4ff" },
  { tipo: "Incomum", cor: "#00d853ff" },
  { tipo: "Raro", cor: "#0099ffff" },
  { tipo: "Épico", cor: "#ba09daff" },
  { tipo: "Lendário", cor: "#ffe600ff" }
];

const lores = [
"Forjada nas chamas da antiga forja real.", "Dizem que apenas os dignos podem empunhá-la.",
"Carrega cicatrizes de batalhas esquecidas pelo tempo.", "Imbuída com a essência de um guerreiro caído.",
"Energizada com magia primordial há muito perdida.", "Sussurra histórias de eras passadas quando tocada.",
"Protegida por runas que brilham sob a lua cheia.", "Encontrada nas ruínas de um reino que já não existe.",
"Alguns afirmam ouvir ecos de almas presas nela.", "Criada por artesãos élficos durante um eclipse raro.",
"Seu brilho pulsa conforme o coração de seu portador.", "Dizem que foi abençoada pela própria deusa da luz.",
"Emana uma aura fria capaz de congelar a coragem.", "Suas gravuras mudam levemente cada vez que é usada.",
"Há quem diga que escolhe seu próprio dono.", "Forjada com metais minerados no núcleo da montanha mística.",
"Transmite força, mas cobra um preço em determinação.", "Arma favorita de um antigo herói cujos feitos viraram lenda.",
"Exala um calor suave, como se tivesse vida própria.", "Através dela, ecos de magia ancestral fluem livremente.",
"Dizem que foi perdida durante a Grande Guerra dos Reinos.", "Alguns acreditam que guarda um fragmento da alma de um titã.",
"Trepida levemente quando o perigo se aproxima.", "Seu peso parece mudar conforme a intenção do usuário.",
"Criada com materiais que não existem mais neste mundo.", "Foi banhada em águas sagradas antes de sua primeira batalha.",
"Falam que sua criação envolveu um pacto proibido.", "Com o tempo, sua superfície absorveu a essência de seus inimigos.",
"Relíquias antigas descrevem um item idêntico a este.", "Aparenta estar sempre limpa, mesmo após batalhas ferozes."
];

document.getElementById("gerarBtn").addEventListener("click", () => {
  const tipo = document.getElementById("tipoItem").value;

  const nome = nomes[tipo][Math.floor(Math.random() * nomes[tipo].length)];
  const raridadeSorteada = raridades[Math.floor(Math.random() * raridades.length)];
  const lore = lores[Math.floor(Math.random() * lores.length)];

  document.getElementById("nomeItem").textContent = `${nome}`;
  document.getElementById("raridade").innerHTML = `Raridade: <span style="color:${raridadeSorteada.cor}"><b>${raridadeSorteada.tipo}</b></span>`;
  document.getElementById("loreItem").textContent = lore;
});

document.getElementById("copiarBtn").addEventListener("click", () => {
  const texto = `${document.getElementById("nomeItem").textContent}\n${document.getElementById("raridade").textContent}\n${document.getElementById("loreItem").textContent}`;
  navigator.clipboard.writeText(texto);
  alert("Lore copiada!");
});
