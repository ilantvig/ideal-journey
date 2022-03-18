
export default {
    name: 'v-content',
    // components: {},
    // принимает данные из родителя 
    // props: {},
    data() {
        return {
            text: 'v-content text',
        }
    },
    // computed: {},
    // methods: {},
    // watch: {},
    // mounted() {},
    template: /*template*/ `
        <div class="v-content">
            {{text}}
        </div>
    `
}