<template><div>
  <h1>Login</h1>
    <form method="">
       
        <div class="input">
           <label for="email">Enter your email</label><br>
           <input name="email" type="text" v-model="email">
        </div>
        <div class="input">
            <label for="password">Enter your password</label><br>
            <input name="password" type="password" v-model="password">
        </div>  
    </form>
    <div class="input">
      <button class="bsubmit" @click="login()" type="submit">Login</button>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  data: function (){
        return {
            email:"",
            password:"",
        }
    },
    methods:{
      login(){
          axios.post("http://localhost:3000/user/login",{email:this.email,password:this.password}).
          then(res=>{
              if(res.status=="200"){
                localStorage.setItem('token', res.data.token);
                this.$router.push("/Music");
              }
          });
      }
    }
}
</script>
 
<style>

</style>