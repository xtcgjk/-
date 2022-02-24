<template>
  <div id="wrapper">
    <div id="header">
      <router-link to="">发现音乐</router-link>
      <router-link to="">我的音乐</router-link>
      <router-link to="">关注</router-link>
      <router-link to="">商城</router-link>
      <router-link to="">音乐人</router-link>
      <router-link to="">下载客户端</router-link>
      <div id="search">
        <input
          placeholder="音乐/视频/电台/用户"
          type="text"
          style="
            color: #9b9b9b;
            font-size: 12px;
            width: 115px;
            height: 16px;
            position: absolute;
            left: 27px;
            top: 5px;
          "
        />
      </div>
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
a {
  text-decoration: none;
  color: #ccc;
  font-style: normal;
  font-size: 14px;
  height: 70px;
  line-height: 70px;
  display: inline-block;
  padding: 0 19px;
}
#search {
  width: 158px;
  height: 32px;
  background-color: #fff;
  border-radius: 32px;
  display: inline-block;
  position: relative;
  top: 10px;
  background: url("https://s2.music.126.net/style/web2/img/frame/topbar.png?4f6fb03712f27ca0c00b91570c886687")
    no-repeat 0 9px;
}
</style>