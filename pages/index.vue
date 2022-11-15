<template>
  <div class="p-5 text-center bg-image">
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-3">Genesis Relief</h1>
            <h4 class="mb-3">Humanitarian Resources During Global Disasters and Crisis</h4>
            <a class="btn btn-outline-light btn-lg" href="/home" role="button">Get Informed!</a>
             <div v-if="show">Checkout our Newsletter and Resources pages!</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
    show: true
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 body {
   background-color: black;

 }


</style>
