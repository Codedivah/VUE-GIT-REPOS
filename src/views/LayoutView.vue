<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="header">
  <h1 class="logo">CodeDivah</h1>
  <input type="checkbox" id="check" />
 <label class="showbtn" for="check"><p>&#9776;</p></label> 
  
      <ul class="menu">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/repos">Repo-List</RouterLink>

        <label  class="hidebtn" for="check" ><p>&#x2715</p></label>
              
            </ul>
    
  </header>
 
    <div class="git-container">
    

  
  <div>
        <img
          class="img"
          src="https://avatars.githubusercontent.com/u/95576634?v=4"
          alt="Fatimah"
        />
        <h1>Fatimah Badmus</h1>
        <p class="username">Codedivah</p>
        <a href="https://github.com/AltSchool" alt="AltSchool Africa"
          >Frontend Engineering Student @AltSchool Africa</a
        >
        <div>
          <button class="edit">Edit profile</button>
        </div>
      </div>
   
  <RouterView />
</div>
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
    height: 50vh;
    background: gray;
    color: rgb(136, 18, 18);
    right: -100%;
    top: -10px;
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
  }

  #check:checked ~ .menu{
    right:0 ;
  } 

  .menu a{
    display: block;
    padding: 20px;
  }
}



</style>
