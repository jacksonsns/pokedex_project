<template>
  <div class="container">
    <h1>Pokedex</h1>
    <div>
        <ul>
          <li v-for="(pokemon, key) in pokemons" :key="key">{{pokemon.name}}</li>
        </ul>  
    </div>

    <ul class="list-group">
      <li class="list-group-item" v-for="pokemon in api.results" v-text="pokemon.name"></li>
    </ul>

    <button class="btn btn-primary" v-if="api.previous" @click="previous">Previous</button>
    <button class="btn btn-primary" v-if="api.next" @click="next">Next</button>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        api: {},
      }
    },

    created() {
      this.fetchPokemons();
    },

    methods: {
      fetchPokemons(url = 'http://pokeapi.co/api/v2/pokemon') {
        axios.get(url)
          .then(({ data }) => this.api = data);
      },

      next() {
        this.fetchPokemons(this.api.next);
      },

      previous() {
        this.fetchPokemons(this.api.previous);
      }
    }
  }
</script>
