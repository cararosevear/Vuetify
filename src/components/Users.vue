<template>
<v-container fluid>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2>
      <v-card>
        <v-toolbar class="purple white--text" dark>
          <v-toolbar-side-icon @click.prevent="postUser" ></v-toolbar-side-icon>
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
    selected-key="send"
    select-all
	:total-items="totalItems"
    :loading="loading"
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
		  @click.prevent="sendEmail(props.item.id)"
          primary
          hide-details
          v-model="props.selected"
        ></v-checkbox>
      </td>
      <td class="text-xs-left">{{ props.item.first_name }}</td>
      <td class="text-xs-left">{{ props.item.last_name }}</td>
      <td class="text-xs-left">{{ props.item.email }}</td>
      <td class="text-xs-left">{{ props.item.accepted }}</td>
      <td class="text-xs-left">{{ props.item.sent_date}}</td>	  
      <td class="text-xs-center">{{ props.item.sent_times }}</td>
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
      totalItems: 0,
      items: [],
      loading: true,
      pagination: {},
      headers: [
      { text: 'Name', align: 'left', value: 'first_name' },
      { text: 'Last Name', align: 'left', value: 'last_name' },
      { text: 'Email', align: 'left', value: 'email' },
      { text: 'Accepted', align: 'left', value: 'accepted' },
      { text: 'Sent', align: 'left', value: 'sent_times' },
      { text: 'Date Sent', align: 'center', value: 'sent_date' }
      ]
    }
  },
  watch: {
    pagination: {
      handler () {
        this.getDataFromApi()
          .then(data => {
            this.items = data.items
            this.totalItems = data.total
          })
      },
      deep: true
    }
  },
  mounted () {
    this.getDataFromApi()
      .then(data => {
        this.items = data.items
        this.totalItems = data.total
      })
  },
  methods: {
    postUser () {
      console.log('postUser')
      this.$root.$firebaseRefs.userlist.push(
        {
          'first_name': 'cara',
          'last_name': 'test',
          'email': 'Posted by Me',
          'accepted': false,
          'sent_times': 0,
          'sent_date': -1 * new Date().getTime()
        })
        .then(this.$router.push('/'))
    },
    emailUsers (id) {
    },
    getDataFromApi () {
      this.loading = true
      return new Promise((resolve, reject) => {
        const { sortBy, descending, page, rowsPerPage } = this.pagination

        let items = this.getUsers()
        const total = items.length

        if (this.pagination.sortBy) {
          items = items.sort((a, b) => {
            const sortA = a[sortBy]
            const sortB = b[sortBy]

            if (descending) {
              if (sortA < sortB) return 1
              if (sortA > sortB) return -1
              return 0
            } else {
              if (sortA < sortB) return -1
              if (sortA > sortB) return 1
              return 0
            }
          })
        }

        if (rowsPerPage > 0) {
          items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
        }

        setTimeout(() => {
          this.loading = false
          resolve({
            items,
            total
          })
        }, 1000)
      })
    },
    getUsers () {
      console.log(this.$root.userlist)
      return this.$root.userlist
    }
  } // End methods
}
</script>
     
 
<style scoped>
  .waiting {
    padding: 10px;
    color: #555;
  }
  
</style>

