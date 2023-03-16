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
  <main  v-else>
    
    <div>
      
      <div class="Repos-container">
        <h3 class="topic">Github Repositories</h3>
        <div >
          <input class="input" type="text" placeholder="Find a repository..." disabled />
          <label for="my-dropdown"></label>
          <select id="my-dropdown" v-model="selectedOption" disabled>
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
                           <p>{{ repo.language }}</p>
              <p>Updated on {{ convertDate(repo.updated_at) }}</p>
              </li> 
           
          
        </ul>
      </div>
    </div>

    <div class="btn-container">
      <button :disabled="page == 1" @click="prev" class="btn">Prev</button>

      <div >
        <button class="num"
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
.topic{
  text-align: center;
}

.input{
  width: 75%;
  padding: 8px 12px;
  border-radius: 6px;
  margin-right: 6px;
  border: 1px solid grey;
}

#my-dropdown{
padding: 8px 12px;
width: 15%;
border-radius: 6px;
border: 1px solid grey;
}

.title{
  color: rgb(92, 92, 251);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: 20px;
}

.btn-container{
  display: flex;
  padding: 2px 5px;
    justify-content: center;
  
}

.btn:disabled{
background-color: gray;
}
.btn{
  color: white;
  background-color: black;
  border-radius: 5px;
  padding:0 5px ;
  margin: 0 10px;
  }

  .btn:hover{
    background-color: green;
  }

  .num:hover{
    background-color: black;
    color: white;
  }

  .num{
    margin-right: 10px;
  }
</style>
