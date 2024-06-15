<template>
  <div>
    <div class="about">
    <button class=”button” @click="increment" :disabled="toestand"> + </button>
    <button class=”button-“ @click="decrement" :disabled="toestand"> - </button>
    </div>
    <h3 :class="tellerClass">Teller: {{teller}}</h3>
  </div>
</template>

<script>

export default {
  name: "AboutView",
  data() {
    return {
      teller: 0,
      toestand: false
    };
  },
  methods: {
    increment() {
      this.teller++;
      if (this.teller > 100) {
        this.teller = 0;
        this.toestand = true;
      }else {
        this.toestand= false;
      }
    },
    decrement() {
      this.teller--;
      if(this.teller < 0) {
        this.teller = 0;
        this.toestand = true;
      }else {
        this.toestand= false;
      }
    }
  },
  computed: {
    tellerClass() {
      return {
        'text-primary': this.teller >= 0
      };
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.text-primary {
  color: blue;
}

.button, .button- {
  padding: 10px 20px;
  margin: 5px;
  font-size: 16px;
  cursor: pointer;
}
</style>
