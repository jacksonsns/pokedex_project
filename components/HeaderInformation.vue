<template>
  <div class="container bg-success">
    <div id="description-container">
      <img id="pokemon-sprite" v-if="pokemon.id" :src="getSprite(pokemon.id)" />
      <h3 class="text-body text-center bg-light">{{ pokemon.name }}</h3>
     <h3 id="pokemon-id" class="text-light">id: {{ pokemon.id }}</h3>
      <div class="type-box bg-white" v-for="type in pokemon.types" :key="type">
        {{ type }}
      </div>
      <p>{{ pokemon.description }}</p>
    </div>
    <button class="btn btn-info" @click="addFavorito(pokemon)">add favorito</button>
    <Favoritos :favoritos="favoritos"/>
  </div>
</template>

<script>

import Favoritos from "./Favoritos.vue";

export default {
  name: "HeaderInformation",
  props: {
    pokemon: {
      type: Object,
    },
  },
  components: {
    Favoritos
  },
  data() {
    return {
      selectedPokemon: [],
      favoritos: []
    }
  },
  // manipula os valores de Storage
  created() {
    if(localStorage.getItem('favoritos')) {
      this.favoritos = JSON.parse(localStorage.getItem('favoritos'))
    }
  },
  methods: {
    /**
     * Retrieve a Pokemon sprite.
     * @param {String} id 
     */
    getSprite: id =>
      require("../assets/sprites/" + String(id).padStart(3, "0") + ".png"),
    
    addFavorito(pokemon) {
      this.selectedPokemon.push({
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types,
        description: pokemon.description
      })


      let listaPokemon = []
      if(localStorage.getItem('favoritos') !== null) {
        listaPokemon.push(JSON.parse(localStorage.getItem('favoritos')))
      }


      listaPokemon = this.selectedPokemon

      localStorage.setItem('favoritos', JSON.stringify(listaPokemon));

      alert(`O pokemon ${pokemon.name} foi adicionado com sucesso nos favoritos!`)

      window.location.reload();
    }  
  },
};

</script>

<style lang="scss" scoped>
@import "../shared/colours";
@import "../shared/spacing";

.container {
  border-radius: 8px;
  color: #fff;
  padding: 10px;
}

#pokemon-id {
  font-size: 16px;
  color: $grey;
}

.type-box {
  width: 230px;
  display: inline-flex;
  justify-content: center;
  border-radius: 10px;
  color: #000;
}

#pokemon-sprite {
  width: 200px;
  margin: 0 auto;
  display: block;
}

.pokemon-cry {
  display: inline-block;
}
</style>
