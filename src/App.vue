<script>
import { RouterView } from "vue-router";
import Header from './components/partials/Header.vue';

export default {
    data() {
        return {
          
        };
    },

    components: {
      Header,
      RouterView,
    },

    methods: {

    }
};
</script>

<template>
  <Header />
  <RouterView/>
</template>

<style lang='scss'>
@use 'bootstrap/scss/bootstrap.scss';

</style>