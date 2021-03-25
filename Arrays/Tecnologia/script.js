var application = new Vue({
    el: '#app',
    data: {
      colecaoTecnologias: [
        {
          nome: 'React',
          dados: { Stack: 'Front-end', Tipo: 'Biblioteca' }
        },
        {
          nome: 'Vue.js',
          dados: { Stack: 'Front-end', Tipo: 'Framework' }
        },
        {
          nome: 'React Native',
          dados: { Stack: 'Mobile', Tipo: 'Framework' }
        },
        {
          nome: 'Node.js',
          dados: { Stack: 'Back-end', Tipo: 'Interpretador' }
        },
      ],
    },
  });