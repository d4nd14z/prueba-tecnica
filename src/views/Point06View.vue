<script setup>

  import { ref, onMounted } from 'vue';

  const items = ref([]);

  onMounted(() => {

      callEndpoint();

  });

  const callEndpoint = async () => {
      let token = '271967519450422266ff4f4123279af947cc81627af316d94ec2ea75d220acdd';
      let url = '/api/series/SP74665,SF61745,SF60634,SF43718,SF43773/datos/2015-01-01/2015-01-08';
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {                                                
            "Bmx-Token": token
          }
        });
        const data = await res.json();
        items.value = data.bmx.series;
      }
      catch(error){
        console.log(error);
      }
      finally {
        console.log("Terminado...");
      }
  }

</script>

<template>
  <div class="container mx-auto">
    <p>06. Se debe realizar una consulta tipo REST al API de banco de MX del tipo de cambio de los &uacute;ltimos 5 d&iacute;as y mostrarlo en una tabla con fecha y tipo de cambio, a trav&eacute;s de una p&aacute;gina html b&aacute;sica. <span class="font-bold">(40 pts)</span></p>
    <br/><br/>
    <p v-for="serie in items" :key="serie.idSerie">
      <h2 class="text-2xl">({{ serie.idSerie }}) - {{ serie.titulo }}</h2>
      <table class="table-auto mt-5 mb-5">
        <thead>
          <tr>
            <th class="px-4 py-2">Fecha</th>
            <th class="px-4 py-2">Dato</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in serie.datos" :key="index">
            <td class="border px-4 py-2">{{ item.fecha }}</td>
            <td class="border px-4 py-2">{{ item.dato }}</td>
          </tr>
        </tbody>        
      </table>      
    </p>    
  </div>    
</template>
