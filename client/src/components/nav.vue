<template>
    <nav>
        <ul>
            <li class="home"><router-link to="/Music">Home</router-link></li>
            <li ><router-link v-if="!LogedIn" to="/Register">Register</router-link></li>
            <li ><button v-if="LogedIn" @click="logout()">Logout</button></li>
            <li><router-link v-if="!LogedIn" to="/Login">Login</router-link></li>
            
        </ul>
    </nav>
</template>

<script>
import {mapState} from 'vuex'
export default {

    methods:{
        logout:function() {
           this.$store.dispatch("logout");
        }
    },
    computed:{
         ...mapState(["LogedIn"])  
    },
}
</script>

<style>
nav{
    width: 100%;
    height: 50px;
    background-color:#333;
}
ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
}
li {
    float: left;

}
li:not(.home) { 
            float: right;
        }
li a {
  display: block;
  padding: 16px 14px;
  color: beige;
  text-decoration: none;
}
li a:hover{
    background-color:rgb(72, 72, 77);
}
button {
    background-color:#333;
    border: none;
    color: white;
    height: 50px;
    outline:none;
    cursor:pointer;
}
button:hover{
    background-color: rgb(72, 72, 77);
}
</style>