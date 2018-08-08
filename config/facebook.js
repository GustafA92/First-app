'use strict'

//<template>
//<div class=“facebook”>

var provider = new firebase.auth.FacebookAuthProvider();
provider.addScope('user_birthda');
firebase.auth().languageCode = 'fr_FR';


provider.addScope('user_birthday');

firebase.auth().languageCode = 'fr_FR';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

provider.setCustomParameters({
'display': 'popup'
});

firebase.auth().signInWithPopup(provider).then(function(result) {
// This gives you a Facebook Access Token. You can use it to access the Facebook API.
var token = result.credential.accessToken;
// The signed-in user info.
var user = result.user;
// ...
}).catch(function(error) {
// Handle Errors here.
var errorCode = error.code;
var errorMessage = error.message;
// The email of the user’s account used.
var email = error.email;
// The firebase.auth.AuthCredential type that was used.
var credential = error.credential;
// ...
});

firebase.auth().signInWithRedirect(provider);

firebase.auth().getRedirectResult().then(function(result) {
if (result.credential) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // ...
}
// The signed-in user info.
var user = result.user;
}).catch(function(error) {
// Handle Errors here.
var errorCode = error.code;
var errorMessage = error.message;
// The email of the user’s account used.
var email = error.email;
// The firebase.auth.AuthCredential type that was used.
var credential = error.credential;
// ...
});

//export default facebook;

//</div>
//</template>