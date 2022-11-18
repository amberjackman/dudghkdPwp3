<template>
  <Headline />
  <Search />
  <Movielist />
</template>

<script>
import Headline from '~/components/Headline'
import Search from '~/components/Search'
import Movielist from '~/components/Movielist'

export default {
  components: {
    Headline,
    Search,
    Movielist
  } ,

  created() {
    this.$store.commit('movie/resetMovies')
  }
}
</script>