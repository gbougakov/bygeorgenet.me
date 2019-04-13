<template>
  <div class="uk-text-center">

    <div class="uk-flex uk-flex-center uk-margin">
      <img v-bind:src="project.icon" v-bind:class="{ 'imsg-icon': (project.type === 'stickerpack') }"
        class="uk-width-1-3 uk-width-1-4@m uk-height-1-1">
    </div>
    <h1 class="uk-text-center uk-text-bold uk-margin-remove">{{project.title}}</h1>
    <p class="uk-text-center uk-margin-remove">{{project.subtitle}}</p>
    <div v-if="project.badge" v-html="project.badge" class="uk-margin">

    </div>
    <div class="uk-margin-small" v-for="(link, index) in project.links" v-bind:key="link.title">
      <a v-bind:href="link.href"
        class="uk-button uk-width-1-1 uk-width-2-3@m uk-box-shadow-small uk-border-rounded uk-box-shadow-hover-medium"
        v-bind:class="{'uk-button-primary': index === 0, 'uk-button-default': index !== 0}">{{ link.title }}</a>
    </div>
    <button
      class="uk-button uk-box-shadow-small uk-width-1-1 uk-width-2-3@m uk-border-rounded uk-button-secondary uk-box-shadow-hover-medium"
      v-if="showShare" v-on:click="share">Share</button>
  </div>
</template>

<script>
  export default {
    name: 'projectView',
    props: [],
    data: function () {
      return {
        project: this.$parent.projects.find((lol) => lol.id === this.$route.params.id),
        showShare: Boolean(navigator.share)
      }
    },
    methods: {
      share() {
        navigator.share({
          title: this.project.title,
          text: `${this.project.title} - ${this.project.subtitle}`,
          url: window.location.href
        })
      }
    }
  }

</script>
