import SparcRadio from '@/components/SparcRadio/src/SparcRadio.vue'
import './demo-styles.scss';

export default {
  title: 'Components/Radio Buttons',
  includeStories: []
}

const createDemo = (data, val) => {
  return {
    components: { SparcRadio },
    data() {
      return {
        data: data,
        radioVal: val
      }
    },
    template: `
      <div class="radio-group">
        <sparc-radio
          v-for="item in data"
          v-bind:key="item.label"
          v-model="radioVal"
          :label="item.label"
          :disabled="item.disabled || false"
          :display="item.display"
        />
      </div>
    `
  }
}

export const Primary = () => createDemo(
  [
    {
      label: 1,
      display: "Option 1"
    },
    {
      label: 2,
      display: "Option 2"
    },
    {
      label: 3,
      display: "Option 3"
    }
  ],
  1
)


export const Disabled = () => createDemo(
  [
    {
      label: 1,
      display: "Checked & Disabled",
      disabled: true
    },
    {
      label: 2,
      display: "Unchecked & Disabled",
      disabled: true
    }
  ],
  1
)

export const Single = () => createDemo(
  [
    {
      label: 1,
      display: "Option 1"
    },
    {
      label: 2,
      display: "Option 2"
    }
  ],
  1
)

/* Radio button style group */

export const RadioToggle= () => ({
  data() {
    return {
      radio1: 'Option 2'
    }
  },
  template: `
  <div>
    <div class="body2 title">
      Toggle Title
    </div> 
      <el-radio-group v-model="radio1">
        <el-radio-button label="Option 1"></el-radio-button>
        <el-radio-button label="Option 2"></el-radio-button>
        <el-radio-button label="Option 3"></el-radio-button>
      </el-radio-group>
  </div>
  `
})

