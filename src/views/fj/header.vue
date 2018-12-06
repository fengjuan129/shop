<template>
  <div id="cta-topHeader">
     {{topHeader}}
  </div>
</template>
<script>
export default {
  name: 'topHeader',
  computed: {
    topHeader() {
      return this.$store.state.shop.topHeader;
    },
  },
  components: {},
};
</script>
<style scoped>
#cta-topHeader {
  height: 40px;
  background: #f00;
  color: #fff;
  font-size: 24px;
  line-height: 40px;
  text-align: left;
  text-indent: 1em;
}
</style>
