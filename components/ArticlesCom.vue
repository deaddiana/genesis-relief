<template>
<div>
    <img
    :src="image"
    class="img-fluid"
    :alt="alt"
    @click="toggleBorder" :class="{ borderGreen: toggle }"
      />
    <h3>{{articleTitle}}</h3>
    <div class="article">{{articleText}}</div>
</div>

</template>

<script>
import toggleBorder from "../mixins/toggle.js"
export default {
  name: 'ArticlesCom',

  props: {
    articleTitle:{
      type: String,
    },
    alt:{
      type: String,

    },
    image :{
      type: String,

    },
    articleId: String,

    articleText: String,
  },

  mixins: [toggleBorder],

}


</script>


<style scoped>
.borderGreen {
  border: 3px solid rgb(54, 82, 54);
}



</style>
