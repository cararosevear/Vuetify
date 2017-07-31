<template>
<v-container fluid>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2>
      <v-card>
        <v-toolbar class="purple white--text" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
        <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
           
        </v-toolbar>
    <v-divider></v-divider>
 
    <v-data-table
    v-bind:headers="headers"
    v-bind:items="items"
    v-bind:search="search"
    v-model="selected"
    selected-key="name"
    select-all
    class="elevation-1"
  >
    <template slot="headerCell" scope="props">
      <span v-tooltip:bottom="{ 'html': props.header.text }">
        {{ props.header.text }}
      </span>
    </template>
    <template slot="items" scope="props">
      <td>
        <v-checkbox
          primary
          hide-details
          v-model="props.selected"
        ></v-checkbox>
      </td>
      <td class="text-xs-right">{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.surname }}</td>
      <td class="text-xs-right">{{ props.item.email }}</td>
      <td class="text-xs-right">{{ props.item.accepted }}</td>
      <td class="text-xs-right">{{ props.item.date_sent }}</td>
    </template>
  </v-data-table>
   </v-card>
    </v-flex>
  </v-layout>
   </v-container>
</template>







<script>
export default {
  data () {
    return {
      notifications: false,
      sound: true,
      widgets: false,
      search: '',
      selected: [],
      headers: [
      { text: 'Name', value: 'name' },
      { text: 'Last Name', value: 'surname' },
      { text: 'Email', value: 'email' },
      { text: 'Accepted', value: 'accepted' },
      { text: 'Date Sent', value: 'date_sent' }
      ],
      items: [{ value: false, name: 'Frozen', surname: 'Yogurt', email: 'cara_soccer@bell.net', accepted: false, date_sent: '10/07/2017' }]
    }
  }
}
</script>

<style scoped>
  .waiting {
    padding: 10px;
    color: #555;
  }
</style>

