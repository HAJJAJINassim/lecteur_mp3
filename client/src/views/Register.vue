<template>
<div class="register">
    <h1>Register</h1>
    <form method="">
        <div class="input">
           <label for="name">Enter your Name</label><br>
           <input name="text" type="text" v-model="name">
        </div>
        <div class="input">
           <label for="email">Enter your email</label><br>
           <input name="email" type="text" v-model="email">
        </div>
        <div class="input">
            <label for="password">Enter your password</label><br>
            <input name="password" type="password" v-model="password">
        </div>
        <div class="input">
            <label for="confirm">Confirm password</label><br>
            <input name="confirm" type="password" v-model="confirm_password">
        </div>
       
        
    </form>

         <div class="input">
            <button class="bsubmit" @click="register()" type="submit">Register</button>
        </div>
        
 
    
  </div>
  
</template>

<script>
import axios from 'axios';

export default {
    data: function (){
        return {
            name:"",
            email:"",
            password:"",
            confirm_password:""
        }
    },
    methods:{
        register(){
            console.log("register clicked");
        axios.post("http://localhost:3000/user/register",{name:this.name,email:this.email,password:this.password})
            .then(Response=>{
               alert(Response.data.msg);
               //push to login
            })
            .catch(error=>{
                console.log(error)
            })
        }
    },

}
</script>

<style>
.bsubmit{
    padding: 25px 30px;
    position: relative;
    left: 45%;
    color: whitesmoke;
    border: none;
    background-color: #333;
}
.bsubmit:hover{
    background-color:rgb(78, 73, 73);
}
label{
    
color:#333;
font-weight: bold;
display: block;
width: 150px;
float: left;
}
input{
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    margin: 10px;
}
.input{
   
    width: 50%;
    
    
    position: relative;
    left: 25%;
}
</style>