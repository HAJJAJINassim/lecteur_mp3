<template>
  <div>   
      <div class="container">
          
          <!-- {{player.paused}} IDK why it doesnt change in the veue -->
         
            <div class="divcontrollers">
              <button class="controllers" @click="Previous()"> Previous </button>
              <button class="controllers" v-show="!isPlaying" @click="toggle()"> Rayane </button>
              <button class="controllers" v-show="isPlaying" @click="toggle()"> Nassim </button>
              <button class="controllers" @click="Next()"> Next </button>
            </div>
          

          
            <div id="divplaylist">
              <div  v-for="song in songs" :key="song.src">

                  <button v-bind:class="[current.src===song.src ? 'playlist1' :  'playlist']"  @click="toggle(song)">{{song.title}}</button>
              
              
            </div>
          </div>
         
      </div>

    
  </div>
</template>


<style>
 

.container{
   margin-left: auto;
  margin-right: auto;
  width: 400px;
  
 
}
.divcontrollers{
  width: 100%;
 
  
  
 
}

#divplaylist{
  margin-left: auto;
  margin-right: auto;
  width: 15em;
  left: 25%;
 
}

.controllers {
  
  
  width: 100px;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 6px;
  color: #FFF;
  background-color: #616060;
  text-align: center;
}



.playlist {
  float: left;
  width: 15em;
  margin: 10px;
	background-color:rgb(233, 227, 227);
	border-radius:20px;
	border:1px solid #dddddd;
	outline:none;
  cursor: pointer;
	color:#3b3838;
	font-family:Arial;
	font-size:14px;
	padding:15px ;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
  
}
.playlist:hover {
	background-color:#474947;
  color: #dddddd;
}
.playlist1 {
 
  width: 15em;
  margin: 10px;
	background-color:rgb(189, 184, 184);
	border-radius:20px;
	border:1px solid #dddddd;
	outline:none;
  cursor: pointer;
	color:black;
	font-family:Arial;
	font-size:14px;
	padding:15px ;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
}
.playlist1:hover {
	background-color:#474947;
  color: #dddddd;
}

</style>

<script>


export default {
  name: 'App',

  methods:{
    play:function(song){
      this.isPlaying=true;
      this.current=song;
      this.player.src=this.current.src; // this.song.src
      this.player.play();
       console.log(this.player.duration);
    },
     toggle:function (song=this.current) {

       if(this.current.src==song.src){

          if(this.player.paused){
              this.player.play();
       console.log(this.player);

              this.isPlaying=true;

          }else{
              console.log(this.player);
              this.player.pause();
              this.isPlaying=false;
          }
       }else{
          console.log("dkhel");
         
         this.play(song)
       }
     },
     Previous:function(){
       var current_index= this.songs.indexOf(this.current);
       if(current_index==0){
          this.current=this.songs[this.songs.length-1];
          this.player.src=this.current.src;
          this.player.play();
       }else{
         current_index=current_index-1
         this.current=this.songs[current_index];
          this.player.src=this.current.src;
          this.player.play();
       }
     },
     Next:function(){
       var current_index= this.songs.indexOf(this.current);
       console.log(current_index);
       if(current_index==this.songs.length-1){
          this.current=this.songs[0];
          this.player.src=this.current.src;
          this.player.play();
       }else{
         current_index=current_index+1
         this.current=this.songs[current_index];
          this.player.src=this.current.src;
          this.player.play();
       }
     }
  },
  data:function(){
    return {
      isPlaying:false,
      index:0,
      current:{},
      songs:[
        {title:"Heaven",artist:"Avicii",src:require("../assets/Heaven.mp3")},
        {title:"Wake me up",artist:"Avicii",src:require("../assets/WakeMeUp.mp3")},
        {title:"See you again",artist:"Avicii",src:require("../assets/See.mp3")}
      ],
      player :new Audio()
    };
  },
  beforeCreate(){

  }
  ,
  created(){
    this.current=this.songs[this.index];
    this.player.src=this.current.src;
    //this.player.play();
  }
}
</script>
