<template>
  <b-container fluid>
    <div id="pokedex-container">
      <b-row>
        <b-col>
          <Informacao />
        </b-col>
        <b-col>
          <PaineldeBusca />
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import Informacao from "./Informacao";
import PaineldeBusca from "./PaineldeBusca";

export default {
  name: "Pokedex",
  data() {
    return {};
  },
  components: {
    Informacao,
    PaineldeBusca,
  },
};
</script>

<style lang="scss" scoped>
@import "../shared/colours";
@import "../shared/spacing";

h2 {
  font-size: 14px;
  font-weight: bold;
  color: $white;
}

h4 {
  font-size: 14px;
  font-weight: bold;
}

@media only screen and (max-width: 810px) {
  .pokemon-evol-sprite-container {
    float: none;
  }

  #pokemon-info-panel {
    margin-bottom: $md;
  }
}
</style>
