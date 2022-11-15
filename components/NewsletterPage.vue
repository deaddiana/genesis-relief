
<template>
<div class="newsletter" id="app">
  <div class="column is-two-thirds">
    <section class="section">
      <h1 class="title">{{title}}</h1>
      <p class="subtitle">
        Receive updates on news, current events, and resources, including <strong>volunteering</strong>!
      </p>
      <hr>

      <!-- form starts here -->
      <section class="form">
        <form v-on:submit.prevent="$validator.validateAll(); console.log(form);">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input name="name" v-model="form.name" class="input" type="text" placeholder="Full name">
              <!--<input name="name" v-model="form.name" v-validate="'required|min:3'" v-bind:class="{'is-danger': errors.has('name')}" class="input" type="text" placeholder="Full name"> -->
            </div>
            <!-- <p class="help is-danger" v-show="errors.has('name')">
              {{ errors.first('name') }}
            </p> -->
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea name="message" class="textarea" placeholder="Message"></textarea>
              <!-- <textarea name="message" class="textarea" v-validate="'required|additional'" placeholder="Message" v-bind:class="{'is-danger': errors.has('message')}" v-model="form.message"></textarea> -->
            </div>
            <!-- <p class="help is-danger" v-show="errors.has('message')">
              {{ errors.first('message') }}
            </p> -->
          </div>

          <div class="field">
            <label class="label">Inquiry Type</label>
            <div class="control">
              <div class="select">
                <select v-model="form.inquiry_type">
                  <option disabled value="">Nothing selected</option>
                  <option v-for="(option,id) in options" v-bind:value="option.value" :key="id">
                    {{ option.text }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Resources</label>
            <div class="control">
              <div class="select is-multiple">
                <select multiple v-model="form.resource_type">
                  <option>Email Newsletter Sign Up</option>
                  <option>Emergency Resources</option>
                  <option>How can I help NOW?</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="form.terms">
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>

          <div class="field">
            <label>
              <strong>Are you needing emergency help?</strong>
            </label>
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="form.emergency" value="yeah">
                YES
              </label>
              <label class="checkbox">
                <input type="checkbox" v-model="form.emergency" value="naur">
                NO
              </label>
            </div>
          </div>

          <div class="field">
            <label><strong>Can we contact you directly?</strong></label>
            <div class="control">
              <label class="radio">
                <input v-model="form.contact_you" type="radio" value="please">
                YES PLEASE
              </label>
              <label class="radio">
                <input v-model="form.contact_you" type="radio" value="nope">
                NO THANK YOU!
              </label>
            </div>
          </div>



        </form>
      </section>
    </section>
  </div>

  <div class="column">
    <section class="section" id="results">
      <div class="box">
        <ul>
          <!-- <li v-for="(item, key) in form" :key="key">
            <strong>{{ key }}:</strong> {{ item }}
          </li> -->
        </ul>

      </div>
    </section>
  </div>
</div>
</template>

<script>
export default {
  name: 'NewsletterPage',
  data() {
    return {
      title: "Sign up for our Newsletter!",
      form: {
        name: "",
        message: "",
        inquiry_type: "",
        resource_type: [],
        terms: false,
        emergency: [],
        contact_you: ""
      },

      options: [
        {
          value: "news",
          text: "News Updates"
        },
        {
          value: "resource",
          text: "Request Resources"
        },
        {
          value: "volunteer",
          text: "Volunteer Opportunities"
        }


      ]
    }
  }
}

</script>




<style scoped>
  #results {
  position: fixed;
  right: 0;
  top: 10%;
  }

 form div {
  margin-top: 1rem;

}

label,
input,
textarea
button,
select{
  font-size: 1.3rem;
  line-height: 1.2

}

form {
  width: 30em;
  max-width: 90%;
  margin: 0 2rem;

}

label {
  margin-bottom: 0.4rem;
  display: block;
  background-color: white;
  padding: 0.4rem;
}

input,
textarea {
  padding: 0.4rem;
  width: 100%;
}

button {
  margin-top: 2rem;
}

.section {
  padding: 1em;
}
</style>
