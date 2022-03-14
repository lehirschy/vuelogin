<script setup>
import {ref} from "vue";
import { useRouter } from "vue-router"; 
import useAuth from "../composable/useAuth";
import useError from "../composable/useError";
import { promiseTimeout, useTimeout } from '@vueuse/core';


const {isAuthenticated, login} = useAuth();

const username = ref("");
const password = ref("");

const router = useRouter();

const loggingIn = () => {
  login(username.value, password.value);
  if (isAuthenticated.value){
    router.push("/");
  } else{
    setError("Invalid username or password");
    start();
  }
};

const {error, setError} = useError();

const { ready, start } = useTimeout(3000, { controls: true });

</script>

<template>
    <div class="flex flex-col items-center justify-center space-y-12 min-h-screen-nonav">
      Logged in: {{ isAuthenticated}}
       <div class="flex items-center justify-center overflow-hidden bg-gray-200 rounded-lg shadow-2xl">
         <img class="h-64" src="../assets/bglogin.png" alt="Login BG" />
         <form @submit.prevent="loggingIn" class="flex flex-col p-4 space-y-4">
           <input type="text" class="p-2 border-2 rounded-lg" placeholder="Username" v-model="username"/>
           <input type="password" class="p-2 border-2 rounded-lg" placeholder="Password" v-model="password"/>
           <button type="submit" @submit.prevent="loggingIn" class="py-2 text-green-200 bg-green-600 rounded-lg">
             Login
           </button>
         </form>
         </div>
    </div>
    <div v-if= "!ready && error" class="absolute w-1/3 text-center text-red-800 transition-opacity bg-red-300 rounded-lg bottom-2 right-2 p4">
      {{ error }}
    </div>
</template>