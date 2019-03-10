<template>
  <div class="uk-border-rounded uk-card uk-card-default uk-card-small uk-card-body card uk-card-hover uk-margin"
       v-on:click="$router.push('/projects/' + project.id)">
    <div class="uk-grid-small uk-flex uk-flex-middle" uk-grid>
      <div class="uk-width-1-4 uk-width-1-6@m uk-flex uk-flex-center">
        <img v-bind:src="project.icon" v-bind:class="{ 'imsg-icon': (project.type === 'stickerpack') }" class="uk-width-4-5 uk-height-1-1">
      </div>
      <div class="uk-width-expand">
        <h3 class="uk-text-bold uk-margin-remove">{{project.title}}</h3>
        <p class="uk-margin-remove">{{project.subtitle}}</p>
      </div>
    </div>
  </div>
</template>

<style>
  .imsg-icon {
    -webkit-mask: url(imsg-mask.svg) center/contain no-repeat;
    mask: url(imsg-mask.svg) center/contain no-repeat;
    background-color: #ffffff;
  }

  .card {
    background: #ebebeb !important;
  }
</style>

<script>
  export default {
    name: 'project',
    props: ['project'],
    data: function () {
      return {}
    }
  }
</script>
