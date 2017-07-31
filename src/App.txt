<template>
  <v-app light>
    <main>
      <v-container fluid>
     <!-- Start -->
	
	<v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar class="purple white--text" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
		
   
		
        <v-divider></v-divider>
		
        <v-list three-line subheader>
          <v-subheader>General</v-subheader>
         
		 <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Notifications</v-list-tile-title>
              <v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

		  
        
		
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
			 <!-- END -->
 
      </v-container>
    </main>
    
	
	<v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
	
    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
	
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        notifications: false,
        sound: true,
        widgets: false
      }
    }
  }

</script>

<style lang="stylus">
  @import './stylus/main'
</style>
