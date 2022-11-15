<template>
  <div class="wrapper">
    <h1 class="heading">disaster page</h1>
    <section class="container" v-if="disasters">
        <card
          v-for="(disaster, id) of disasters"
          :key="id"
          :name="disaster.fields.name"
          :types="disaster.fields.type"
          :url="disaster.fields.url"
        />
    </section>
  </div>
</template>

<script>
import card from '~/components/card.vue'
import axios from 'axios'

export default {
  components: {
      card
  },
    data() {
      return{
        loading: true,
        disasters: null,
        errored: false
      }
    },
    mounted () {
    axios
      .get('https://api.reliefweb.int/v1/disasters?appname=genesis-relief-project&profile=list&preset=latest&slim=1')
      .then(response => (this.disasters = response.data.data))
      .catch(error => {
        console.error(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
}

}
</script>


<style scoped>

</style>
