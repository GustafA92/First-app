// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.router=router

import firebase from 'firebase'
import config from '../config/firebase.js'

//import Faceb from './components/Faceb'


Vue.config.productionTip = false

// Initialize Firebase
let app;
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user){
  if (!app){
    /* eslint-disable no-new */
    app = new Vue({
      el:'#app',
      template:'<App/>',
      components: { App },
      router
    })
  }
});
//new Vue({
  //el: '#app',
  //router,
  //components: { App },
  //template: '<App/>'
//})
