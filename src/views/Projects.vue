<template>
  <div class="home">
    <div class="uk-margin">
      <select class="uk-select uk-border-pill" v-model="showProjects">
        <option selected value="website">Web apps</option>
        <!--option value="app">Apps</option-->
        <option value="stickerpack">Sticker Packs</option>
      </select>
    </div>
    <transition-group name="fade" mode="out-in">
      <project v-for="project in $parent.projects" v-bind:project="project" v-bind:key="project.id" v-if="showProjects === project.type"/>
    </transition-group>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Project from '@/components/Project.vue'

  export default {
    name: 'Projects',
    components: {
      Project
    },
    data: function () {
      console.log(this.$parent.projects)
      return {
        showProjects: 'website'
      }
    }
  }
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
