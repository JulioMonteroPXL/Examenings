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
    justify-content: center; /* Center horizontally */
    align-items: center;
    flex-direction: column; /* Align buttons and counter vertically */
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
  border: none; /* Remove default border */
  border-radius: 5px; /* Add some rounding */
  background-color: #42b983; /* Vue.js green */
  color: white;
}

.button:disabled, .button-:disabled {
  background-color: #cccccc; /* Light gray for disabled state */
  cursor: not-allowed; /* Change cursor to indicate disabled state */
}
</style>
