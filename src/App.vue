<template>
  <my-header>星座物语</my-header>
  <nav-bar />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <my-tab></my-tab>
</template>

<script>
import MyHeader from '@/components/Header';
import NavBar from '@/components/NavBar';
import MyTab from '@/components/Tab';
import { useStore } from 'vuex';
import { watch } from 'vue';
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  components: {
    MyHeader,
    NavBar,
    MyTab
  },
  setup() {
    const store = useStore(),
          state = store.state,
          router = useRouter();

    router.push('/');
    store.commit('setField', 'today');

    watch(() => {
      return router.currentRoute.value.name
    }, val => {
      store.commit('setField', val);
    })
  }
}
</script>
