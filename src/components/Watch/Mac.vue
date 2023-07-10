<template>
  <div class="maccontainer _maccontainer">
   
  </div>
</template>

<script>


export default {
  name: 'mac',
  components: {
    GoodBriefInfo
  }
}
</script>

<style lang="less" scoped>

// 大于800px
@media only screen and (min-width: 800px){
    .maccontainer{
    }
}

// 小于800px
@media only screen and (max-width: 800px){
    ._maccontainer{
    }
}
</style>
