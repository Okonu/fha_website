<template>
    <table class="founders-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Company Name</th>
          <th>Business Type</th>
          <th>Financial Level</th>
          <th>Focus Area</th>
          <th>Challenges</th>
          <th>Funding Status</th>
          <th>Partnership</th>
          <th>Community Support</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="founder in founders" :key="founder.id">
          <td>{{ founder.name }}</td>
          <td>{{ founder.email }}</td>
          <td>{{ founder.detail.company_name }}</td>
          <td>{{ founder.detail.business_type }}</td>
          <td>{{ founder.detail.financial_level }}</td>
          <td>{{ founder.detail.focus_area }}</td>
          <td>{{ founder.detail.challenges }}</td>
          <td>{{ founder.detail.funding_status }}</td>
          <td>{{ founder.detail.partnership }}</td>
          <td>{{ founder.detail.community_support }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    props: {
      founders: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .founders-table {
    width:   100%;
    border-collapse: collapse;
    background-color: lightgray;
    color: black;
    margin-top:   20px;
  }
  
  .founders-table th,
  .founders-table td {
    padding:   10px;
    border:   1px solid gray;
  }
  
  .founders-table th {
    background-color: gray;
    color: black;
  }
  
  .founders-table td {
    background-color: lightgrey 
  }
  
  .founders-table tr:nth-child(even) {
    background-color: lightgrey
  }
  </style>
  
  