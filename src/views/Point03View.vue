<script setup>

  import { ref } from 'vue';

  const nrows = ref(0);
  const ncols = ref(0);


</script>

<template>
  <div class="container mx-auto">
    <p>03. Crear dos input, filas y columnas donde se ingresan estos datos y se genere autom&aacute;ticamente una tabla
      con las dimensiones suministradas. <span class="font-bold">(15 pts)</span></p>
    <p class="mt-5">
      <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Filas
            </label>
            <input type="text"                    
                   class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"                   
                   v-model="nrows">
          </div>
        </div>
        
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Columnas
            </label>
            <input type="text" 
                   class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                   v-model="ncols">
          </div>
        </div>
      </form>
    </p>
    <br/>
    <p class="mb-3 font-bold">Tabla de {{ nrows }} filas x {{ ncols }} columnas: </p>    
    <table border="1" class="table-auto mb-5">
      <tr v-for="(row, index) in parseInt(nrows)" :key="index">
        <td v-for="(col, index) in parseInt(ncols)" :key="index" class="border-2 border-red-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      </tr>
    </table>
  </div>
</template>
