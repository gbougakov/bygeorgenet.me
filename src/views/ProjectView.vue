<template>
  <div>

    <div class="uk-flex uk-flex-center uk-margin">
      <img v-bind:src="project.icon" v-bind:class="{ 'imsg-icon': (project.type === 'stickerpack') }"
           class="uk-width-1-3 uk-width-1-4@m uk-height-1-1">
    </div>
    <h1 class="uk-text-center uk-text-bold uk-margin-remove">{{project.title}}</h1>
    <p class="uk-text-center uk-margin-remove">{{project.subtitle}}</p>
    <ul class="uk-list uk-text-center uk-margin-small">
      <li v-for="link in project.links">
        <a v-bind:href="link.href">{{ link.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'projectView',
    props: [],
    data: function () {
      return {
        project: this.$parent.projects.find((lol) => lol.id === this.$route.params.id)
      }
    }
  }
</script>
