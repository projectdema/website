<script lang="ts">
// @ts-ignore
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: { VueperSlides, VueperSlide },
  methods: {
    subscribe() {
      let email = (this as any).subscribeEmail;
      let reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

      if(reg.test(email)) {
        // @ts-ignore
        this.$refs.alert.showAlert({ alertHeader: "Inscrito com sucesso!" })
      } else {
        // @ts-ignore
        this.$refs.alert.showAlert({ alertHeader: "Email inválido", alertType: "error" })
      }

    }
  },
  data: () => ({
    autoPlaying: true,
    internalAutoPlaying: true,
    slides: [
      {
        content: '<img src="/src/assets/imgs/LogoExample.png">',
      }, {
        content: '<img src="/src/assets/imgs/LogoExample.png">'
      }, {
        content: '<img src="/src/assets/imgs/LogoExample.png">'
      }, {
        content: '<img src="/src/assets/imgs/LogoExample.png">'
      }, {
        content: '<img src="/src/assets/imgs/LogoExample.png">'
      }, {
        content: '<img src="/src/assets/imgs/LogoExample.png">'
      }, {
        content: '<img src="/src/assets/imgs/LogoExample.png">'
      }
    ]
  })
};
</script>

<template>
  <CustomAlert :duration="200" :closeIn="13500" ref="alert"></CustomAlert>
  
  <div class="page home">
    <div class="page-header" id="page-header">
      <div class="header-left">
        <img class="header-banner" src="@/assets/svgs/collab.svg" style=""/>
      </div>
      <div class="center-y header-right">
        <div class="text-box center-it">
          <PageTitle subtitle="WELCOME"></PageTitle>
          <p class="page-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor asperiores, 
            quaerat autem harum voluptatum consequuntur nulla eius modi quisquam, cum 
            excepturi totam sed <span class="highlight">exercitationem</span> ratione ab, unde molestias error! 
            Sint voluptatibus repudiandae suscipit culpa, quidem magni atque dolorem vel 
            eius aperiam saepe. Ab.
          </p>

          <div class="page-header-button-line subscribe">
            <p class="label">
              Newsletter
            </p>
            <div class="buttons">
              <input 
                class="field" 
                type="text" 
                id="email" 
                v-model="subscribeEmail" 
                placeholder="Enter your email to receive the newsletter" 
                autocomplete="off" 
                @keypress.enter="subscribe"
              />
              <button class="btn solid medium pastel no-margin" @click="subscribe">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-body secondary">
      <div class="sponsors">
        <h3 class="title">
          Our Partners & Sponsors
        </h3>
        <vueper-slides 
          autoplay
          class="no-shadow" 
          :slideMultiple="false"
          :pauseOnHover="false"
          :pauseOnTouch="true"
          :arrows="false"
          :bullets="false"
          :touchable="true"
          :duration="4000"
          :visibleSlides="4"
          :infinite="true"
          :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }
          ">

          <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content"/>

        </vueper-slides>
      </div>
    </div>
  </div>
  <Footer/>
</template>
