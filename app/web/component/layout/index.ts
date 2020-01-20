import { Vue, Component, Prop } from 'vue-property-decorator';
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'

import './index.css';
import MainLayout from './main/index.vue';

Vue.use(mandMobile);

@Component({
  name: 'Layout',
  components: {
    MainLayout
  }
})
export default class Layout extends Vue {
  @Prop({ type: String, default: 'egg' }) title?: string;
  @Prop({ type: String, default: 'Vue TypeScript Framework, Server Side Render' }) description?: string;
  @Prop({ type: String, default: 'Vue,TypeScript,Isomorphic' }) keywords?: string;

  isNode: boolean = EASY_ENV_IS_NODE;
}
