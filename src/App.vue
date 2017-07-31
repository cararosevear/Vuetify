<template>
  <v-app light>
      <v-toolbar fixed>
       <v-toolbar-title v-text="title"></v-toolbar-title>
       <v-spacer></v-spacer>
    </v-toolbar>
  
   <main class="mdl-layout__content"> 
	  <div class="page-content">
        <router-view></router-view>
      </div> 	 
    </main>
	
    <v-footer fixed>
      <span>&copy; 2017</span>
    </v-footer>	
	
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
       { icon: 'bubble_chart', title: 'Inspire' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
