var app = new Vue({
    el: "#app",
    data: {
      colecaoCandidatos: [
        { id: 1, nome: "Douglas", pontos: 550, aprovado: true },
        { id: 2, nome: "Albert", pontos: 530 , aprovado: true },
        { id: 3, nome: "Carlos", pontos:200, aprovado: true },
        { id: 4, nome: "Rafaela", pontos: 100, aprovado: false },
        { id: 5, nome: "Vera", pontos: 85, aprovado: false  }
      ],
    }
  });