<template>
    <div class="container bg-success">

      <h1>Favoritos</h1><br>
      <div v-for="favorito in favoritos" :key="favorito">
        <div id="description-container">
          <img id="pokemon-sprite" v-if="favorito.id" :src="getSprite(favorito.id)" />
          <h3 class="text-body text-center bg-light">{{ favorito.name }}</h3>
        <h3 id="pokemon-id" class="text-light">id: {{ favorito.id }}</h3>
          <div class="type-box bg-white" v-for="type in favorito.types" :key="type">
            {{ type }}
          </div>
          <p>{{ favorito.description }}</p>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: "Favoritos",
  props: {
      favoritos: {}
  },
  data() {
    return {};
  },
  methods: {
    /**
     * Retrieve a Pokemon sprite.
     * @param {String} id 
     */
    getSprite: id =>
      require("../assets/sprites/" + String(id).padStart(3, "0") + ".png"),
  }
}
</script>
