import vContent from "./v-content.js"

export default {
    name: 'v-main-wrapper',
    components: {
        vContent,
    },
    // принимает данные из родителя 
    // props: {},
    data() {
        return {
            title: 'Main wrapper'
        }
    },
    // computed: {},
    // methods: {},
    // watch: {},
    // mounted() {},
    template: /*template*/ `
        <div class="v-main-wrapper">
            <h2 class="box-lime">
                v-main-wrapper Text goes here
            </h2>
            <v-content />
        </div>
    `
}