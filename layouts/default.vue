<template>
<div class="container">
  <div class="header" v-for="(data,index) in header" :key="index">
    <HeaderCom
    :image="data.image"
    :alt="data.alt"

    />
  </div>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">GENESIS RELIEF</a>
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/home">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/about">About</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/disasters">Disasters</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/newsletter">Newsletter</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/updates">Updates</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/resources">Resources</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Nuxt />
</div>
</template>




<script>
import HeaderCom from "../components/HeaderCom"
export default {
  name: 'app',
  components: {
    HeaderCom
  },
  data() {
    return {
      header: [{
        image: require('../static/logo2.png'),
        alt: "Genesis Relief Logo"
      }]
    }
  }
}
</script>


<style>
.container {

}
.nav-item {

  display: flex;
  justify-content: space-between;
}
nav {
  padding: 1em;
}



</style>
