<script setup>

</script>

<template>
  <div class="about">
  
    <h1 class="title">MY GIT-HUB REPOSITORY</h1>
    <hr class="break" />
    <div class="socials">

      <a class="social-link twitter"  href="https://twitter.com/Olaidebadmus_"
        >
        <p> <i class="fa-brands fa-twitter"></i> Olaide Badmus</p>
      </a>
      <a class="social-link linkedin" href="https://www.linkedin.com/in/fatimah-badmus-938991b9"
        >
        <p><i class="fa-brands fa-linkedin"></i> Fatimah Badmus</p>
      </a>
   
      
    </div>
    <p>This is my Alt School Frontend Track 3rd Semester Project.</p>

    <h4>Question:</h4>
    <p>
      Create a new vue js application then using the GitHub API, fetch your
      GitHub repositories <br />
      using this endpoint
      <a
        class="repo-link"
        href="https://api.github.com/users/{{USERNAME}}/repos."
        >"Githubrepo"</a
      >
    </p>
    <p>
      Show a page with a list of all your repositories on GitHub(the page should
      have some form of pagination).
    </p>
    <p>
      Then create another page showing data for a single repo clicked from the
      list of repos using nested routes.
    </p>
    <p>
      Make sure to implement a wildcard route to catch 404 pages. NB: Good UI
      and Designs are important.
    </p>
  </div>

</template>

<style scoped>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */

.about {
  border: 1px solid grey;
  margin-top: 25px;
  border-radius: 0.5rem;
  padding: 10px 25px;
  color: rgb(47, 44, 44);
}

.title {
  text-align: center;
}

.break {
  
  color: rgb(177, 173, 173);
 
}

.social-link {
  display: flex;
  background-color: rgb(128, 128, 249);
  color: white;
  width: 150px;
  align-items: center;
  gap: 8px;
  padding: 0 8px;
  height: 30px;
}

.twitter{
background-color: #00acee;

}

.linkedin{
  background-color:#0077b5;
}
.socials{
display: flex;
gap: 8px;
}


@media screen and (max-width: 800px) {
  
  .socials{
    display: block;
   
  }

  .social-link{
    width: 100%;
    margin: 5px 0;
    justify-content: center;
  }

}
</style>
