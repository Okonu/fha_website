<template>
    <div v-if="message" class="notification">
      {{ message }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: String,
        default: ''
      }
    }
  }
  </script>
  
  <style scoped>
  .notification {
    padding:  10px;
    background-color: #4A90E2;
    color: white;
    border-radius:  5px;
    margin-bottom:  10px;
  }
  </style>
  