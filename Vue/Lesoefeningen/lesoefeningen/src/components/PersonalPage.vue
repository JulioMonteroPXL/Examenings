<template>
<p>
  Dit is mijn persoonlijke pagina
</p>
  <p>{{this.msg}}</p>
  <p>{{this.naam}}</p>
  <p>{{persoonlijk.adres}}</p>
  <p>{{persoonlijk.plaats}}</p>
</template>

<script>
export default {
  name: "PersonalPage",
  props:{
    msg: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      persoonlijk : {naam:"Luc DOUMEN", adres:"Elfde Liniestraat 24",
        plaats:"3500 Hasselt"}
    }
  }

}
</script>

<style scoped>

</style>