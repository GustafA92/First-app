'strict'

import facebookLogin from 'facebook-login-vuejs';
import Vue from '../../node_modules/vue';

Vue.component('my-component', {
    components:{
        facebookLogin
    }
});

<facebook-login class = "button"
    appId = "326022817735322"
    login = "getUserData"
    logout = "onLogout"
    get-initial-status = "getUserData">
    </facebook-login>


