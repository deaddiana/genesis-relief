<template>
  <div class="about">
  <h1>{{title}}</h1>
  <div class="accordion" id="exampleAccordion">
    <div class="card">
      <div class="card-header" id="exItem1Header">
        <h5 class="mb-0">
        <button @click="show = !show" class="btn btn-link" type="button" data-toggle="collapse" data-target="#exItem1" aria-expanded="true" aria-controls="exItem1">History of Genesis Relief</button>
        </h5>
      </div>
      <div id="exItem1" class="collapse show" aria-labelledby="exItem1Header" data-parent="#exampleAccordion">
        <div v-if="show" class="card-body">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the
          holistic world view of disruptive innovation via workplace diversity and empowerment.</div>
      </div>
    </div>

    <div class="card">
      <div class="card-header" id="exItem2Header">
        <h5 class="mb-0">
          <button @click="show = !show" class="btn btn-link" type="button" data-toggle="collapse" data-target="#exItem2" aria-expanded="true" aria-controls="exItem2">How does Genesis Relief Assist During Crisis?</button>
        </h5>
      </div>
      <div id="exItem2" class="collapse show" aria-labelledby="exItem2Header" data-parent="#exampleAccordion">
        <div v-if="show" class="card-body">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway
          will close the loop on focusing solely on the bottom line.</div>
      </div>
    </div>

    <div class="card">
      <div class="card-header" id="exItem3Header">
        <h5 class="mb-0">
          <button @click="show = !show" class="btn btn-link" type="button" data-toggle="collapse" data-target="#exItem3" aria-expanded="true" aria-controls="exItem3">Humanitarian Involvement</button>
        </h5>
      </div>
      <div id="exItem3" class="collapse show" aria-labelledby="exItem3Header" data-parent="#exampleAccordion">
        <div v-if="show" class="card-body"> Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud
          solution. User generated content in real-time will have multiple touchpoints for offshoring.</div>
      </div>
    </div>
  </div>
</div>
</template>



<script>

export default {
  name: 'AboutPage',
  data() {
    return {
      title: 'About',
      show: false
    }
  }
}
</script>


<style scoped>

</style>
