<template>
<div>
  <img
  :src="image"
  class="img-fluid"
  :alt="alt"
    />
</div>
</template>

<script>
 export default {
   name: 'HeaderCom',
   props: {
     alt: String,
     image: String,
   }


 }
</script>

<style scoped>
img {
  max-height: 500px;

}
</style>
