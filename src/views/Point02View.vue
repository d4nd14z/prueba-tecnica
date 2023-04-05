<script setup>

  import { ref } from 'vue';

  const agno = ref(0);
 
  const esBisiesto = (year) => {
    let result = (year % 400 === 0) ? true : 
           (year % 100 === 0) ? false : 
            year % 4 === 0;
    return (result) ? 'SI' : 'NO';
  };

  //Bloquear caracteres de texto sobre el input (unicamente se permiten caracteres numericos)
  const updateAgno = (event) => {
      const regex = /^(\s*|\d+)$/
      const char = event.data;
      if (char && !regex.test(char)) {
        agno.value = agno.value.slice(0, -1)
      }
  }

  

</script>

<template>
  <div class="container mx-auto">
    <p>02. Crear un input donde se ingrese un a&ntilde;o y determina si es bisiesto en el calendario gregoriano. 
      <span class="font-bold">(10 pts)</span>
    </p>
  </div>
  <p class="mt-5">
  <form class="w-full max-w-lg">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          A&ntilde;o
        </label>
        <input
          type="text"  
          id="txtAno"
          name="txtAno"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"           
          placeholder="YYYY"
          v-model="agno"
          @input="updateAgno"> 
      </div>       
    </div>
    <p class="text-xl">El a&ntilde;o {{ agno }} <span class="font-bold text-red-500">{{ esBisiesto(agno) }}</span> es un a&ntilde;o bisiesto</p>  
  </form>  
  </p>
</template>
