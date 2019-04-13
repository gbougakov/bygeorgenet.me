<template>
  <a v-bind:href="url" class="uk-link-reset">
    <div class="uk-card uk-card-default uk-card-small uk-card-body uk-margin uk-card-hover">
      <div class="uk-grid-small uk-flex uk-flex-middle" uk-grid>
        <div class="uk-width-1-5 uk-padding-small uk-padding-remove-vertical">
          <img v-bind:src="image">
        </div>
        <div class="uk-width-expand">
          <h4 class="uk-text-bold uk-margin-remove">{{title}}</h4>
          <p class="uk-margin-remove">{{subtitle}}</p>
          <p class="uk-margin-remove uk-text-small">{{date}}</p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'portfolio-element',
    props: ['image', 'title', 'subtitle', 'date', 'url'],
    data: function () {
      return {}
    }
  }

</script>
