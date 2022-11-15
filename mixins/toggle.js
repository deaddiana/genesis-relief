
// https://learnvue.co/tutorials/vue-mixins
// https://v2.vuejs.org/v2/guide/mixins.html?redirect=true

export default {
    data() {
        return {
            toggle: false
        }
    },

    methods: {
        // Toggle a show state, used for the image border
        toggleBorder() {
            this.toggle = !this.toggle;
        }
    }
}
