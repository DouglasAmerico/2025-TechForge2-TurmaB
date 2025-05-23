let playlist = {
    nome: "Músicas para Relaxar",
    criador: "DJ Paz",
    musicas: [ // Array de objetos, cada um representando uma música
      { 
        titulo: "Sons da Floresta", 
        artista: "Natureza Sonora", 
        duracao: "3:45" 
        },
      { 
        titulo: "Ondas Calmas", 
        artista: "Mar Adentro", 
        duracao: "4:12" 
        },
      { 
        titulo: "Céu Estrelado", 
        artista: "Noite Serena", 
        duracao: "5:02" 
    }
    ],
    publica: true
  };

  console.log("Titulo: "+playlist.musicas[0].titulo+" Duração: "+playlist.musicas[0].duracao);
  