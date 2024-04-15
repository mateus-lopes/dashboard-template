<template>
  <v-app>
    <v-navigation-drawer
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

      <v-list density="default" nav>
        <v-list-item active color="primary" prepend-icon="mdi-apps" title="Painel Principal" value="dashboard"></v-list-item>
        <v-list-item color="secondary" prepend-icon="mdi-account-multiple" title="Clientes" value="clients"></v-list-item>
        <v-list-item color="green-darken-4" prepend-icon="mdi-calendar" title="Sessões" value="sections"></v-list-item>
        <v-list-item color="red-darken-4" prepend-icon="mdi-account-details" title="Funcionários" value="employee"></v-list-item>
        <v-list-item color="orange" prepend-icon="mdi-account-cog" title="Perfil da Empresa" value="perfil"></v-list-item>
      </v-list>
      <template v-slot:append>
          <v-list nav>
            <v-list-item prepend-icon="mdi-logout" title="Sair" value="logout"></v-list-item>
          </v-list>
      </template>
    </v-navigation-drawer>
    <v-main class="bg-grey-lighten-5 pr-6">
        <v-app-bar 
          scroll-behavior="hide"
          class="my-4 bg-grey-lighten-5"
          :elevation="0"
        >
          <v-btn class="d-lg-none" icon @click.stop="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <v-responsive
            max-width="550"
            class="d-none d-lg-flex"
            rounded
          >
            <v-text-field
              v-model="message"
              append-icon="mdi-magnify"
              clear-icon="mdi-close-circle"
              label=""
              placeholder="Pesquisar..."
              class="ml-6 bg-white px-8 py-0 rounded-lg border-0"
              rounded
              type="text"
              variant="plain"
              clearable
              transition="scroll-x-reverse-transition"
              @click:append="sendMessage"
              @click:append-inner="toggleMarker"
              @click:clear="clearMessage"
              @click:prepend="changeIcon"
            ></v-text-field>
          </v-responsive>

          <v-spacer></v-spacer>

          <v-slide-x-reverse-transition>
            <v-responsive
            v-if="search"
            max-width="344"
            >
            <v-text-field
            hide-details="auto"
            label="" 
            placeholder="Pesquisar..."
            variant="outlined"
            rounded
            clearable
            transition="scroll-x-reverse-transition"
            ></v-text-field>
          </v-responsive>
        </v-slide-x-reverse-transition>
        <v-btn class="d-lg-none" icon @click.stop="search = !search">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        

        
        <v-btn icon>
          <v-icon
            color="grey-darken-2"
          >
            mdi-moon-waning-crescent
          </v-icon>
        </v-btn>



        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn 
              v-bind="activatorProps"  
              icon @click="isActive = false"
              color="grey-darken-2"
            >
              <v-icon>mdi-bell</v-icon>
            </v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card title="Dialog">
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  text="Close Dialog"
                  @click="isActive.value = false"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>

        <v-btn icon>
          <v-icon
            color="grey-darken-2"
          >
            mdi-dots-vertical
          </v-icon>
          <v-menu activator="parent">
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :value="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </v-app-bar>


      <!-- content -->
      <section class="mt-10 pl-6">
        <v-row no-gutters>
          <v-col>
            <v-card
              color="primary"
              variant="tonal"
              class="pa-16 ma-2"
            >
              .v-col-auto
            </v-card>
          </v-col>
          <v-col>
            <v-card variant="flat" color="white" class="pa-16 ma-2">
              .v-col-auto
            </v-card>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col>
            <v-card variant="flat" color="white" class="pa-16 ma-2">
              .v-col-auto
            </v-card>
          </v-col>
          <v-col>
            <v-card variant="flat" color="white" class="pa-16 ma-2">
              .v-col-auto
            </v-card>
          </v-col>
          <v-col>
            <v-card variant="flat" color="white" class="pa-16 ma-2">
              .v-col-auto
            </v-card>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="3">
            <v-card variant="flat" color="white" class="pa-16 ma-2">
              .v-col-3
            </v-card>
          </v-col>
          <v-col>
            <v-card variant="flat" color="white" class="pa-16 ma-2">
              .v-col-auto
            </v-card>
          </v-col>
        </v-row>
      </section>
    </v-main>
    <footer class="footer-container">
      <span class="mr-2"> {{ new Date().getFullYear() }} </span> <strong class="text-primary border-s pl-2 py-1"> Enchiridion </strong>
    </footer>
  </v-app>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const drawer = ref(true)
const search = ref(false)
const isActive = ref(false)
const items = [
  { title: 'Item 1' },
  { title: 'Item 2' },
  { title: 'Item 3' },
  { title: 'Item 4' },
]

const message = ref('')
const marker = ref(true)
const iconIndex = ref(0)
const icons = [
    'mdi-emoticon',
    'mdi-emoticon-cool',
    'mdi-emoticon-dead',
    'mdi-emoticon-excited',
    'mdi-emoticon-happy',
    'mdi-emoticon-neutral',
    'mdi-emoticon-sad',
    'mdi-emoticon-tongue',
]

const icon = computed(() => icons[iconIndex.value])
const toggleMarker = () => {
  marker.value = !marker
}
const sendMessage = () => {
  resetIcon()
  clearMessage()
}
const clearMessage = () => {
  message.value = ''
}
const resetIcon = () => {
  iconIndex.value = 0
}
const changeIcon = () => {
  iconIndex.value === icons.length - 1
    ? iconIndex.value = 0
    : iconIndex.value++
}
</script>