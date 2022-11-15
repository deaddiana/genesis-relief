<template>
  <div class="resources">
    <h1>{{title}}</h1>
      <div class="company-container" v-for="(data,index) in companies" :key="index">

        <div class="card">
          <div class="card-body">
            <h3>{{data.companyName}}</h3>
                <p><a v-bind:href="link" target="_blank">{{data.description}}</a></p>
                <button><a v-bind:href="website" target="_blank">Find out more!</a></button>

          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ResourcesPage',
  data() {
    return {
      title: 'Resources',
      companies: [{
          companyName: 'ReliefWeb',
          link: "https://reliefweb.int/",
          description: 'ReliefWeb is a humanitarian information service provided by the United Nations Office for the Coordination of Humanitarian Affairs (OCHA)',
          website: 'https://reliefweb.int/',
          companyId: 1

        },
        {
          companyName: "DirectRelief",
          link: "https://reliefweb.int/",
          description: 'DirectRelief information needs to be added',
          companyId: 2

        },
        {
          companyName: "Doctors Without Borders",
          link: "https://reliefweb.int/",
          description: 'Doctors Without Borders information needs to be added',
          companyId: 3

        },
        {
          companyName: "Project Hope",
          link: "https://reliefweb.int/",
          description: 'Project Hope information needs to be added',

          companyId: 4

        },
        {
          companyName: 'Americares',
          link: "https://reliefweb.int/",
          description: 'Americares information needs to be added',

          companyId: 5

        },
        {
          companyName: "MAP International",
          link: "https://reliefweb.int/",
          description: 'MAP International information needs to be added',
          companyId: 6

        }
      ]
    }
  }
}
</script>


<style scoped>

</style>
