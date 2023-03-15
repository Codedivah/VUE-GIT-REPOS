<script setup>
import { ref, onMounted, computed } from "vue";
import {RouterLink} from "vue-router";

const repos = ref([]);
const loading = ref(true);
const page = ref(1);

const fetchRepos = async () => {
  loading.value = true;
  const response = await fetch("https://api.github.com/users/codedivah/repos");
  const data = await response.json();
  repos.value = data;
  console.log(repos.value);

  loading.value = false;
};

const reposPerPage = 3;
const nextPage = computed(() => {
  return repos.value.slice((page.value - 1) * reposPerPage, reposPerPage * page.value);
});

const handleRepos = (num) => {
  page.value = num;
};

const next = () => {
  page.value++;
};

const prev = () => {
  page.value--;
};


const convertDate = (date) => {
  const [weekDay, month, day, year] = new Date(date).toDateString().split(" ");
  return `${weekDay}, ${month}, ${day}, ${year}`;
};

onMounted(() => {
  fetchRepos();
});
</script>

<template>
  <div v-if="loading">loading...</div>
  <main v-else>
    <h1>My Exam Project</h1>
    <div>
      
      <div>
        <h3>Github Repositories</h3>
        <div >
          <input class="input" type="text" placeholder="Find a repository" />
          <label for="my-dropdown"></label>
          <select id="my-dropdown" v-model="selectedOption">
            <option value="type" disabled selected>{{ type }}</option>
            <option v-for="option in options" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>

        <ul>
          <li class="list" v-for="repo in nextPage" :key="repo.id.value" >
            <RouterLink :to="`/repo/${repo.name}`">
            <h2 class="title">
              {{ repo.name }} <span>{{ repo.visibility }}</span>
            </h2>
           </RouterLink>
            <a v-bind:href="repo.forks_url">Forked from {{ repo.forks_url }}</a>
              <p>{{ repo.description }}</p>
              <p>{{ repo.language }}</p>
              <p>Updated on {{ convertDate(repo.updated_at) }}</p>
              </li>
           
          
        </ul>
      </div>
    </div>

    <div class="btn-container">
      <button :disabled="page == 1" @click="prev" class="btn">Prev</button>

      <div>
        <button
          @click="handleRepos(btn)"
          v-for="btn in Math.ceil(repos.length / reposPerPage)"
          :key="btn"
        >
          {{ btn }}
        </button>
      </div>

      <button
        :disabled="page == Math.ceil(repos.length / reposPerPage)"
        @click="next"
        class="btn"
      >
        Next
      </button>
    </div>
  </main>
</template>

<style scoped>
* {
  box-sizing: border-box;
  text-decoration: none;
  
}

ul{
  padding:0px;
  }


.img {
  border: 1px solid grey;
  border-radius: 50%;
  object-fit: cover;
  width: 300px;
  height: 300px;
}

.btn-container {
  display: flex;
  justify-content: center;
}

.btn {
  background-color: goldenrod;
}

.git-container {
  display: flex;
  gap: 100px;
}

.list {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid grey;
  list-style: none;
}

.title {
  color: rgb(0, 132, 255);
}

span {
  font-size: 16px;
  border: 1px solid grey;
  border-radius: 2rem;
  padding: 0 5px;
  color: grey;
  font-weight: lighter;
}

.list,
p,
a {
  color: grey;
}

.edit {
  padding: 5px 100px;
  margin-top:20px;
}

.input{
 padding: 5px 120px;
 border-radius: 0.2rem;
 border:1px solid grey;

}

.username{
font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color:grey;
  font-size: 20px;

 
}
</style>
