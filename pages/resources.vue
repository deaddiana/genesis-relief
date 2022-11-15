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
      title: 'RESOURCES',
      companies: [{
          companyName: 'ReliefWeb',
          link: "https://reliefweb.int/",
          description: 'ReliefWeb is a humanitarian information service provided by the United Nations Office for the Coordination of Humanitarian Affairs (OCHA).',
          website: 'https://reliefweb.int/',
          companyId: 1

        },
        {
          companyName: "DirectRelief",
          link: "https://reliefweb.int/",
          description: 'Direct Relief is a nonprofit humanitarian organization that provides emergency medical assistance and disaster relief in the United States and internationally.',
          companyId: 2

        },
        {
          companyName: "Doctors Without Borders",
          link: "https://reliefweb.int/",
          description: 'Médecins Sans Frontières, sometimes referred to in English as Doctors Without Borders, is an international humanitarian medical non-governmental organisation of French origin best known for its projects in conflict zones and in countries affected by endemic diseases.',
          companyId: 3

        },
        {
          companyName: "Project Hope",
          link: "https://reliefweb.int/",
          description: 'Project HOPE is an international global health and humanitarian aid non-governmental organization founded in the United States in 1958. ',

          companyId: 4

        },
        {
          companyName: 'Americares',
          link: "https://reliefweb.int/",
          description: 'Americares is a global non-profit organization focused on health and development that respond to individuals affected by poverty, disaster, or crisis.',

          companyId: 5

        },
        {
          companyName: "MAP International",
          link: "https://reliefweb.int/",
          description: 'MAP International is a Christian nonprofit organization based out of Brunswick, Georgia. Their mission is to provide medicines and health supplies to those in need around the world so they might experience life to the fullest.',
          companyId: 6

        }
      ]
    }
  }
}
</script>


<style scoped>
.resources {
  padding-top: 20px;
  padding-bottom: 20px;
}

.company-container {
  padding: 20px;
}

</style>
