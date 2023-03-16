<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="header">
  <h1 class="logo">CodeDivah</h1>
  <input type="checkbox" id="check" />
 <label class="showbtn" for="check"><p>&#9776;</p></label> 
  
      <ul class="menu">
        <RouterLink  to="/"  >Home</RouterLink>
        <RouterLink to="/repos"   >Repo-List</RouterLink>

        <label  class="hidebtn" for="check" ><p>&#x2715</p></label>
              
            </ul>
    
  </header>
 
    <div class="git-container">
    

  <div  class="img-container">
  <div>
          <img class="img"
         
          src="https://avatars.githubusercontent.com/u/95576634?v=4"
          alt="Fatimah"
        />

        <h1>FATIMAH BADMUS</h1>
        <p class="username">Codedivah</p>
        <p>Frontend Engineering Student  <span><a href="https://github.com/AltSchool" alt="AltSchool Africa">@AltSchool Africa.</a> </span></p>
        
        
        <div>
          <button class="edit">Edit profile</button>
        </div>
      </div>
   
 
</div>
<div>
  <RouterView />
</div>


</div>
<footer> Designed by codedivah</footer>
</template>

<style scoped>
 
.header {
  display: flex;
 height:100px;
  background-color: black;
  padding: 0px 5%;
  color:goldenrod;
  align-items: center;

 
}

.logo{
  display: flex;
  float:left
}


.menu{

  display: flex;
  margin-left: auto;
  justify-content: center;
}

.menu a{

  color:whitesmoke;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0 10px;
  text-decoration: none;
}

.showbtn,.hidebtn{

  transition: 0.4s;
  font-size: 30px;
  cursor: pointer;
  user-select: none; 
  display: none;
}

.showbtn{
margin-left: auto;

}

.showbtn p{
  line-height: 100px;

}

.menu a:hover,.showbtn:hover,.hidebtn:hover{
 color:coral;

}

#check{
position:absolute;
visibility: hide;
z-index: -1111;

}

@media screen and (max-width: 800px) { 

    .showbtn,.hidebtn{
    display:block ;
  }
  .menu{
    display: block;
    position:fixed;
    width: 100%;
    height: 15vh;
    background: black;
    color: rgb(136, 18, 18);
    right: -100%;
    top: -20px;
    padding: 60px 0;
    z-index: 3;
    text-align: center;
    line-height: normal;
    transition: 0.7s;
  }

  .hidebtn{
    position: absolute;
    top: 5px;
    right: 30px;
    color: goldenrod;
  }

  #check:checked ~ .menu{
    right:0 ;
  } 

  .menu a{
    display: block;
    padding: 20px;
  }

  .git-container[data-v-8620aa60] {
  display: block;
  gap: 40px;
  padding-left: 30px;
  background-color: whitesmoke;
}
}



.git-container{
  display: flex;
  gap: 40px;
  padding-left: 30px;
  background-color: whitesmoke;
}

.img{
width: 300px;
height: 300px;
border-radius: 50%;
object-fit: cover;
margin-top: 20px;
}

.username{
  font-weight: 700;
   margin-top: -20px;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 20px;
  color: grey;
  
}

.edit{
  width: 100%;
padding:5px 15px;
font-weight: bold;
color: white;
background-color: black;

}

footer{
  text-align: center;
  background-color: rgb(26, 25, 25);
  color: white;
  padding: 40px;
  margin-top: 10px;
  
}

</style>
