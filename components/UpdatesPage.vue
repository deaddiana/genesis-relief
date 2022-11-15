<template>
<div class="updates">
  <h1>{{title}}</h1>

  <div class="row">
    <div class="col-md-4 col-lg4" v-for="(data,index) in articles" :key="index">
      <ArticlesCom
      :articleTitle="data.articleTitle"
      :image="data.image"
      :alt="data.alt"
      :articleText="data.articleText"
      />
    </div>
  </div>
</div>
</template>

<script>
import ArticlesCom from "../components/ArticlesCom"
export default {
  name: 'UpdatesPage',
  components: {
    ArticlesCom
  },
  data() {
    return {
      title: 'Disaster and Global Crisis Updates',
      articles: [{
          articleTitle: "Article 1",
          alt: "A group of men in hazard vests and hard hats",
          image: require('../static/article1.jpg'),
          articleId: 1,
          articleText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
        {
          articleTitle: "Article 2",
          image: require('../static/article2.jpg'),
          alt: "Two women looking at a computer, both wearing glasses",
          articleId: 2,
          articleText: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
          articleTitle: "Article 3",
          image: require('../static/article3.jpg'),
          alt: "Group of large shelter tents on dry land",
          articleId: 3,
          articleText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        },
        {
          articleTitle: "Article 4",
          image: require('../static/article4.jpg'),
          alt: "Two paramedics looking at eachother",
          articleId: 4,
          articleText: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        },
        {
          articleTitle: "Article 5",
          image: require('../static/article5.jpg'),
          alt: "Two volunteers packing food in a box",
          articleId: 5,
          articleText: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        },
        {
          articleTitle: "Article 6",
          image: require('../static/article6.jpg'),
          alt: "Room full of medical beds",
          articleId: 6,
          articleText: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        }
      ]
    }
  }
}
</script>


<style scoped>
h1 {
  padding: 5px;
}


</style>
