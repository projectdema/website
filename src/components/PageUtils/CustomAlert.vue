<script lang="ts">
import { defineComponent } from 'vue'

interface DataInterface {
  isHide: Boolean;
  status: Boolean;
  iconSize: number;
  position: string;
  alertType: string;
  iconType: string;
  header: string;
  message: string;
}
export default defineComponent({
  name: 'CustomAlert', 
  props: {
    width: {type: Number},
    duration: {type: Number, default: 300},
    closeIn: {type: Number, default: null},
  },
  data(): DataInterface {
    return {
      position: "top center",
      status: false,
      isHide: false,
      iconSize: 35,
      iconType: 'solid',
      alertType: 'info',
      header: 'Some Information',
      message: 'This is the information of something you may know',
    };
  },
  methods: {
    showAlert(options: {alertMessage: string, alertHeader: string, position?: string, alertType?: string}): void {
        this.header = options.alertHeader
        this.message = options.alertMessage
        this.position = options.position ? options.position:"top center"
        this.alertType = options.alertType ? options.alertType: "default";

        setTimeout(() =>{ 
            this.status = true
        }, 50)
        if(this.closeIn) {
            setTimeout(() => this.closeAlert(), this.closeIn)
        }
    },
    closeAlert() {
      this.isHide = true
      setTimeout(() => {
        this.isHide = false
        this.status = false
        this.iconSize = 40
        this.header = ''
        this.message = ''
      }, this.duration)
    }
  },
});
</script>

<template>
  <div class="alert-box" :class="!status?`${position?position:'top center'}`:`${position?position:'top center'} ${isHide?'':'active'}`" :style="`width: ${width?width:400}px;transition: all ${status?duration:0}ms ease-in-out;`">
    <div class="alert-container">
      <div class="alert-color-bar" :class="alertType"></div>
      <h1 class="alert-title">{{ header }}</h1>
    </div>
  </div>
</template>