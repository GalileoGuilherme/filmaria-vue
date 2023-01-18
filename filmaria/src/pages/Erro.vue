<template>
    <div id="erro">
      <h3>Ops! Acho que essa página não existe! :( </h3>
      <router-link tag="btn" class="return" to="/">Voltar para a página inicial</router-link>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>

    h3{
      text-align: center;
      margin-top: 30px;
      font-size: 30px;
    }
    .return{
      text-decoration: none;
      color: #fff;
      font-size: 25px;
      background-color: brown;
      justify-content: center;
      display: flex;
      width: 20%;
      align-content: center;
      align-items: center;
      text-align: center;
      margin: 0 40%;
      /* border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px; */
      border-radius: 5px;
      


    }
  
  </style>