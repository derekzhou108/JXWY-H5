import Vue from 'vue'
import Router from 'vue-router'
import Step1 from '@/components/Step1'
import Step2 from '@/components/Step2'
import Step3 from '@/components/Step3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/step-1',
      name: 'Step1',
      component: Step1
    },
    {
      path: '/step-2',
      name: 'Step2',
      component: Step2
    },
    {
      path: '/step-3',
      name: 'Step3',
      component: Step3
    }
  ]
})
