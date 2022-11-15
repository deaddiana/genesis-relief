<template>
 <article class="card">
	 <h2 class="card__title">{{ name }}</h2>
	 <p class="card__copy" v-for="(type, id) in types">{{ type.name }}</p>
   <a class="url" :href="url" target="_blank">{{ url}}</a>
 </article>
</template>



<script>
export default {
  props: {
    name: String,
    types: Array,
    url: String

 }
}
</script>

<style scoped>

</style>
