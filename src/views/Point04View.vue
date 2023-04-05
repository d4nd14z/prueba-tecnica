<script setup>
  import { ref } from 'vue';

  const randomArray = ref([]);
  
  const generateRandomArray = () => {
      while (randomArray.value.length < 20){
        const randomNumber = Math.floor(Math.random() * 100) + 1; //Generar numeros aleatorios entre 1 y 100
        if (randomArray.value.indexOf(randomNumber) == -1){
          randomArray.value.push(randomNumber);
        }
      }
  }

  const orderArrayMethod = () => {
    let temp = 0;
    let orderArray = [...randomArray.value];
    orderArray.map((x, idX) => {
        orderArray.map((y, idY) => {
            if (parseInt(x) < parseInt(y)){
              temp = orderArray[idX];
              orderArray[idX] = orderArray[idY];
              orderArray[idY] = temp;
            }            
        });        
    });

    return orderArray;

  }


</script>

<template>
  <div class="container mx-auto">
    <p>04. Generar un arreglo con 20 n&uacute;meros aleatorios de 1 a 100 y luego organizarlo de menor a mayor sin utilizar la sentencia .sort(). <span class="font-bold">(10 pts)</span></p>
    <button class="mt-5 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            @click="generateRandomArray">
      Generar Arreglo Aleatorio
    </button>
    <br/><br/>
    <span class="font-bold">Arreglo aleatorio:  </span> {{ randomArray }}
    <br/><br/>
    <span class="font-bold">Arreglo ordenado:  </span> {{ orderArrayMethod() }}
  </div>
</template>
