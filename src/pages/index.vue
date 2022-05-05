<script setup>
  import UndrawWelcome from "vue-undraw/UndrawWelcome.vue";
  import useAuth from "../composable/useAuth";
  const {isAuthenticated, user} = useAuth();
</script>

<template>
    <div class="flex flex-col items-center justify-center space-y-12 min-h-screen-nonav">
        <h2 v-if="!isAuthenticated" class="text-6xl tracking-tighter font-extralight">
            Welcome
        </h2>
        <h2 v-else class="text-6xl tracking-tighter font-extralight">
            Welcome {{ user }}    
        </h2>
        <h2>
            <UndrawWelcome primary-color='#41B883' height='400px'/>
        </h2>
       
    </div>

</template>