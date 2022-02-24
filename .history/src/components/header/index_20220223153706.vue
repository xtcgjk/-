<template>
  <div id="wrapper">
    <div id="header">
      <router-link to="">发现音乐</router-link>
      <router-link to="">我的音乐</router-link>
      <router-link to="">关注</router-link>
      <router-link to="">商城</router-link>
      <router-link to="">音乐人</router-link>
      <router-link to="">下载客户端</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>
<style scoped>
#wrapper {
  background-color: #333;
}
#header {
  width: 1100px;
  height: 70px;
  background-color: #333;
  margin: auto;
}
</style>