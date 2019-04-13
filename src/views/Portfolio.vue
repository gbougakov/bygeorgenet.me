<template>
  <div>
    <h1 class="uk-text-bold">2019</h1>
    <portfolio-element image="img/producthunt.png" title="Product Hunt"
      subtitle="Docket featured as Product of the Day (#1)" date="April 13th, 2019" url="https://www.producthunt.com/posts/docket-3">
    </portfolio-element>
    <portfolio-element image="img/skyeng.png" title="Skyeng - largest Russian edtech startup"
      subtitle="Currently work there as a paid intern" date="January 30th, 2019 - Present" url="https://en.skyeng.ru">
    </portfolio-element>

    <h1 class="uk-text-bold">2018</h1>
    <portfolio-element image="img/makerfaire.png" title="Moscow Maker Faire"
      subtitle="Participant/Maker" date="September 8-9th, 2018" url="https://moscow.makerfaire.com">
    </portfolio-element>
    <portfolio-element image="img/producthunt.png" title="Product Hunt"
      subtitle="Que featured as Product of the Day (#3)" date="August 18th, 2018" url="https://www.producthunt.com/posts/que">
    </portfolio-element>
  </div>
</template>

<style scoped>

</style>

<script>
  // @ is an alias to /src
  import PortfolioElement from '@/components/PortfolioElement.vue'

  export default {
    name: 'Projects',
    components: {
      PortfolioElement
    }
  }

</script>
