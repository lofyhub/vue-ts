<script setup lang="ts">
import CheckIcon from "@/components/icons/CheckIcon.vue";
</script>
<template>
  <div class="my-40">
    <div>
      <h1 class="text-center text-6xl font-bold">vue-ts-starter</h1>
      <p class="text-center my-4 text-xl text-gray-500">
        Vuejs 3 + TypeScript Starter Template
      </p>
    </div>
    <div class="w-1/2 mx-auto">
      <p class="text-2xl font-semibold my-4 text-center">
        Ready to go packages
      </p>
      <div class="flex justify-center text-gray-500">
        <ul class="text-xl">
          <li class="my-3">
            <CheckIcon
              class="inline rounded-full border-2 border-green-500 mr-4"
            />Tailwind CSS
          </li>
          <li class="my-3">
            <CheckIcon
              class="inline rounded-full border-2 border-green-500 mr-4"
            />Toastify-js
          </li>
          <li class="my-3">
            <CheckIcon
              class="inline rounded-full border-2 border-green-500 mr-4"
            />Pinia
          </li>
          <li class="my-3">
            <CheckIcon
              class="inline rounded-full border-2 border-green-500 mr-4"
            />pinia-plugin-persistedstate
          </li>
          <li>
            <CheckIcon
              class="inline rounded-full border-2 border-green-500 mr-4"
            />Axios
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
