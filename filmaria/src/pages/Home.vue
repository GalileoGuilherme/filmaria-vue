<template>
  <div id="home">
    <div id="lista-filmes">
      <article class="file" v-for="filme in filmes" :key="filme.id">
        <strong>{{filme.nome}}</strong>
        <img :src="filme.foto" :alt="filme.nome">
        <router-link :to="'/filme/${filme.id}'">Acessar</router-link>
      </article>
    </div>
  </div>
</template>

<script>
import api from '../service/api';

export default {

  data(){
    return{
      filmes: []
    }
  },

  async crated(){

    // Api url: https://sujeitoprogramador.com/r-api/?api=filmes

    const response = await api.get('?api=filmes');
    this.filmes = response.data;
    console.log(response.data)
    

  }
}
</script>

<style>

</style>