
import { TestOtherComponent } from './test-other.component';

export default {
  title: 'TestOtherComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: TestOtherComponent,
  props: {
  }
})