<template>
  <v-app>
    <v-navigation-drawer
      expand-on-hover
      rail
      v-model="drawer"
    >
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          subtitle="sandra_a88@gmailcom"
          title="Sandra Adams"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard"></v-list-item>
        <v-list-item prepend-icon="mdi-account-multiple" title="Clientes" value="clients"></v-list-item>
        <v-list-item prepend-icon="mdi-calendar" title="Sessões" value="sections"></v-list-item>
        <v-list-item prepend-icon="mdi-account-details" title="Funcionários" value="employee"></v-list-item>
        <v-list-item prepend-icon="mdi-account-cog" title="Perfil da Empresa" value="perfil"></v-list-item>
      </v-list>
      <template v-slot:append>
          <v-list nav>
            <v-list-item prepend-icon="mdi-logout" title="Sair" value="logout"></v-list-item>
          </v-list>
      </template>
    </v-navigation-drawer>
    <v-main style="height: 100vh">
      <v-app-bar scroll-behavior="elevate">
        <v-spacer></v-spacer>

        <v-responsive
          v-if="search"
          class="mx-auto"
          max-width="344"
        >
          <v-text-field
            hide-details="auto"
            label="Pesquisar..." 
            variant="underlined"
            clearable
          ></v-text-field>
        </v-responsive>
        <v-btn icon @click.stop="search = !search">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <div class="d-flex d-md-none justify-center align-center h-100">
        <v-btn
          color="primary"
          @click.stop="drawer = !drawer"
        >
          Toggle
        </v-btn>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(true)
const search = ref(false)
</script>
