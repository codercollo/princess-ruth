import { defineNuxtPlugin } from '#app'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
import { SplitText } from 'gsap/SplitText'
import { CustomEase } from 'gsap/CustomEase'

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger, Flip, SplitText, CustomEase)
    CustomEase.create('curtain', 'M0,0 C0.76,0.02 0.18,1 1,1')
    gsap.defaults({ ease: 'curtain', duration: 0.62 })
  }

  return {
    provide: {
      gsap,
      ScrollTrigger,
      Flip,
      SplitText,
      CustomEase,
    },
  }
})
