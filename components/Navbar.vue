<template>
  <div>
    <div id="nav">
      <router-link id="logo-url" to="/">
        <img id="logo" src="/img/logo.png" :alt="alt">
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "Navbar",
  props: ["logo", "alt"]
}
</script>

<style scoped>

  #nav {
    background-color: #E3350D;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  #nav #logo-url {
    margin: auto;
    margin-left: 0;
  }

  #logo {
    width: 100px;
    height: 60px;
  }

  #nav a {
    color: #fcba03;
    font-weight: bold;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
  }

  #nav a:hover {
    color: #f8d167;
  }
</style>