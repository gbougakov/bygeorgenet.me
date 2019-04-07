<template>
  <div>
    <h1 class="uk-text-bold uk-text-center uk-margin-small">Hit me up on <a
      href="https://twitter.com/gbougakov">Twitter</a>, <a
      href="https://t.me/gbougakov">Telegram</a> or just <a href="#" data-clipboard-text="Just because you can doesn't mean you should — clipboard.js">
      email me
      <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0z"/>
        <path fill="#348eed"
              d="M15 1H4c-1.1 0-2 .9-2 2v13c0 .55.45 1 1 1s1-.45 1-1V4c0-.55.45-1 1-1h10c.55 0 1-.45 1-1s-.45-1-1-1zm.59 4.59l4.83 4.83c.37.37.58.88.58 1.41V21c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h6.17c.53 0 1.04.21 1.42.59zM15 12h4.5L14 6.5V11c0 .55.45 1 1 1z"/>
      </svg>
    </a> .
    </h1>
    <h3 class="uk-text-center uk-margin-small">You can also stalk me on <a href="https://instagram.com/gbougakov">Instagram</a>
      (don't
      DM me), read my articles on my <a href="https://blog.bygeorgenet.me/">blog</a> or <a
        href="https://medium.com/georgenet">Medium</a>, get public domain photos taken by me on <a
        href="https://unsplash.com/@gbougakov">Unsplash</a> or find my keys on <a href="https://keybase.io/georgebgk">Keybase</a>
    </h3>
  </div>
</template>
<script>
  import UIkit from 'uikit'
  import ClipboardJS from 'clipboard'

  export default {
    name: 'contact',
    methods: {
      copyNoti() {
        window.Clipboard.copy(atob('Z2VvcmdlQGJ5Z2VvcmdlbmV0Lm1l'))
        UIkit.notification('Email address copied to clipboard. <a href="mailto:' + atob('Z2VvcmdlQGJ5Z2VvcmdlbmV0Lm1l') + '">Open email client</a>')
      }
    },
    data: function () {
      return {}
    },
    mounted() {

    }
  }
</script>
