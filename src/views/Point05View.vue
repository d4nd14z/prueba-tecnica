<script setup>

    import { ref, onMounted } from 'vue';

    
    const arrayA = ref([]);
    const arrayB = ref([]);
    const union = ref([]);
    const intersect = ref([]);
    const diferencia = ref([]);
    const symdiff = ref([]);

    const aleatorio = (min, max) => {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    const generarArraysAleatorios = () => {
        let arrayValues = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        
        let letraA = '';
        while (arrayA.value.length < 10){
            letraA = arrayValues[aleatorio(0,arrayValues.length)];
            if (letraA){
                arrayA.value.push(letraA);
            }            
        }

        let letraB = '';
        while (arrayB.value.length < 10){
            letraB = arrayValues[aleatorio(0,arrayValues.length)];
            if (letraB){
                arrayB.value.push(letraB);
            }            
        }

        

    }

    const unionArrays = () => {
        union.value = [...new Set([...arrayA.value, ...arrayB.value])];
    }

    const intersectArrays = () => {
        intersect.value = arrayA.value.filter(item => arrayB.value.includes(item));
    }

    const diferenciaArrays = () => {
        diferencia.value = arrayA.value.filter(item => !arrayB.value.includes(item)); 
    }

    const diferenciaSimetrica = () => {
        symdiff.value = arrayA.value.filter(item => !arrayB.value.includes(item)).concat(arrayB.value.filter(item => !arrayA.value.includes(item)));
    }

    //Ejecutar tan pronto se renderiza el componente
    onMounted(() => {
        generarArraysAleatorios();
        unionArrays();
        intersectArrays();
        diferenciaArrays();
        diferenciaSimetrica();
    });

</script>

<template>
    <div class="container mx-auto">
        <h1 class="text-4xl font-bold">Prueba Tecnica - Parte 5</h1>
        <p>Generar dos arreglos A y B con 10 valores aleatorios de letras del abecedario y mostrar los siguientes resultados: <span class="font-bold">15 pts</span></p>
        <ul>
          <li>● Unión: 𝐴⋃𝐵</li>
          <li>● Intersección 𝐴⋂𝐵</li>
          <li>● Diferencia: 𝐴Δ𝐵</li>
          <li>● Diferencia Simétrica: 𝐴 − 𝐵</li>
        </ul>
        <br/><br/>
        <p><span class="font-bold">Array A: </span>{{ arrayA }}</p>
        <p><span class="font-bold">Array B: </span>{{ arrayB }}</p>
        <br/>
        <p><span class="font-bold">Uni&oacute;n: </span>{{ union }}</p>
        <p><span class="font-bold">Intersecci&oacute;n: </span>{{ intersect }}</p>
        <p><span class="font-bold">Diferencia: </span>{{ diferencia }}</p>
        <p><span class="font-bold">Diferencia Sim&eacute;trica: </span>{{ symdiff }}</p>
    </div>
</template>

<style scoped>
</style>