<template>
    <div class="login">
        <h3>Login</h3>
        <input type="text" v-model='email' placeholder="EmaiL"><br>
        <input type="password" v-model='password' placeholder="Password"><br>
        <button v-on:click="signIn()">Connect</button>
        <p>You do not have an account? You can<router-link to="/sign-up"> create one</router-link></p>
    </div>
</template>

<script> 
    import firebase from 'firebase'

    export default {
        name: 'login',
        data: function(){
            return{
                email:'',
                password:''
            }
        },
        //created() {
            //console.log(firebase.auth().currentUser);
        //},
        methods:{
            signIn:function(){
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user)=> {
                        this.$router.replace('hello')
                        alert('Well done! You are connected')
                    },
                    (err)=> {
                        alert('Oops.' +err.message)
                    },
                );
            },
            login:function(){
                this.$router.push('/hello')
            }
        }
    }
</script>


<style scoped> 
    .login{
        margin-top:40px;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding:15px;
    }
    button{
        margin-top:20px;
        width:10%;
        cursor: pointer;
    }
    p{
        margin-top: 40px;
        font-size:13px;
    }
    p a{
        text-decoration:underline;
        cursor: pointer;
    }
</style> 
