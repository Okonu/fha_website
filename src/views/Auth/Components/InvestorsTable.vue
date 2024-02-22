<template>
    <table class="investors-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Enterprise Level</th>
          <th>Co-Investing</th>
          <th>Convenient Investing</th>
          <th>Focus Area</th>
          <th>Impact</th>
          <th>Viability</th>
          <th>Expectation</th>
          <th>Concern</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="investor in investors" :key="investor.id">
          <td>{{ investor.name }}</td>
          <td>{{ investor.email }}</td>
          <td>{{ investor.investor_detail.enterprise_level }}</td>
          <td>{{ investor.investor_detail.co_investing }}</td>
          <td>{{ investor.investor_detail.convenient_investing }}</td>
          <td>{{ investor.investor_detail.focus_area }}</td>
          <td>{{ investor.investor_detail.impact }}</td>
          <td>{{ investor.investor_detail.viability }}</td>
          <td>{{ investor.investor_detail.expectation }}</td>
          <td>{{ investor.investor_detail.concern }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    props: {
      investors: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .investors-table {
    width:   100%;
    border-collapse: collapse;
    background-color: lightgrey;
    color: black;
    margin-top:   20px;
  }
  
  .investors-table th,
  .investors-table td {
    padding:   10px;
    border:   1px solid grey;
  }
  
  .investors-table th {
    background-color: grey;
    color: black;
  }
  
  .investors-table td {
    background-color: lightgrey;
  }
  
  .investors-table tr:nth-child(even) {
    background-color: lightgrey;
  }
  </style>
  
  