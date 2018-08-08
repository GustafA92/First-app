<template>
        <a href="#" @click='sample()' class="btn btn-block btn-social btn-facebook btn-flat">
          <i class="fa fa-facebook"></i> Sign in using Facebook
        </a>
</template>

<script>
import firebase from 'firebase'  //Glöm inte att importera!

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    sample() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log(result)
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      console.log(error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // 1The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    }
  }
 } 
  </script>