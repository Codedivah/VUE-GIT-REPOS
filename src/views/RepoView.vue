<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const repo = ref({});
const loading =ref(false);
  
const {params} = useRoute();
const router = useRouter()
const url = `https://api.github.com/repos/codedivah/${params.name}`;
const fetchData = async () => {
      try {
        loading.value = true;
        const response = await fetch(
         url
        );
       const data = await response.json() ;
        repo.value = data
        
        console.log(repo.value)
        loading.value =false;
      } catch (error) {
        console.log(error)
      }
    };
    onMounted(() => {
        fetchData()
    })
</script>

<template>
    <div v-if="loading">Loading...</div>

<div v-else>
      <h2 className="repo-head">Repository Data</h2>
      <p>
        <h3>Description:</h3> {{repo.description}}
      </p>
      <p>
        <h3>Name:</h3> {{repo.name}}
      </p>
      <p>
        <h3>ID:</h3> {{repo.id}}
      </p>
      <p>
        <h3>Date of Creation:</h3> {{repo.created_at}}
      </p>
      <p>
        <h3>Forks:</h3> {{repo.forks_count}}
      </p>
      <p>
        <h3>Watchers:</h3> {{repo.watchers_count}}
      </p>
      <p>
        <h3>Language:</h3> {{repo.language}}
      </p>
     <p>
        <h3>Size:</h3> {{repo.size}}
      </p>
      <p>
        <h3>Stars:</h3> {{repo.stargazers_count}}
      </p>

      <button class="btn" @click="router.push('/')">Back</button>
    </div>
</template>

<style scoped>
.btn{
 background-color: black;
 color: white;
 width: 80px;
 border-radius: 5px;
 padding: 5px;

}
</style>
