<template>
  <div id="app">
    <div class="uk-flex uk-flex-center uk-flex-middle uk-padding-large" uk-height-viewport="expand: true">
      <div class="uk-width-1-2@m">
        <transition name="fade" mode="out-in">
        <router-view/>
        </transition>
        <div class="uk-margin uk-flex uk-flex-center">
          <div class="uk-grid uk-flex uk-flex-middle uk-flex-center">
            <div class="uk-margin-small-top">
              <router-link to="/" tag="div" exact>
                <a class="rlink">Home</a>
              </router-link>
            </div>
            <div class="uk-margin-small-top">
              <router-link to="/portfolio" tag="div">
                <a class="rlink">Portfolio</a>
              </router-link>
            </div>
            <div class="uk-margin-small-top">
              <router-link to="/projects" tag="div">
                <a class="rlink">Projects</a>
              </router-link>
            </div>
            <div class="uk-margin-small-top">
              <router-link to="/donate" tag="div">
                <a class="rlink">Donate</a>
              </router-link>
            </div>
            <div class="uk-margin-small-top">
              <router-link to="/contact" tag="div">
                <a class="rlink">Contact me</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  div.router-link-active {
    border-radius: 500px;
    padding: 2px;
    padding-left: 10px;
    padding-right: 10px;
    background: #0e6dcd;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.24);
    transition: all 0.5s;
  }
  div a.rlink {
    font-size: 10pt;
    text-transform: uppercase;
  }
  div a.rlink:hover {
    text-decoration: none;
  }
  div.router-link-active a.rlink {
    color: white;
  }
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
  body {
    /* background: #f9fafb; */
  }
</style>

<script>
  import projects from './projects'
  export default {
    name: 'app',
    data: function () {
      return {
        projects: projects.projects
      }
    }
  }
</script>
