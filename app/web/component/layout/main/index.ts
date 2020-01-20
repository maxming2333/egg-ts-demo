import { Vue, Component } from 'vue-property-decorator';

import LayoutHeader from '../header/index.vue';
import LayoutContent from '../content/index.vue';

@Component({
  components: {
    LayoutHeader,
    LayoutContent
  },
})
export default class Main extends Vue {
  created () {
    console.log('Main xxx');
  }
  
  mounted () {
    console.log('mounted xxx');
  }
}
