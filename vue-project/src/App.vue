<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/databinding">Data Binding</router-link> |
      <router-link to="/databindinghtml">Data Binding Html</router-link> |
      <router-link to="/databindinginputtext">Data Binding Input Text</router-link> |
      <router-link to="/">Data Binding Textarea</router-link> |
      <hr/>
      <router-link to="/databindingselect">Data Binding Select</router-link> |
      <router-link to="/databindingcheckbox">Data Binding Checkbox</router-link> |
      <router-link to="/radio">checked radio</router-link> |
      <router-link to="/grim">그림 불러오기</router-link> |
      <router-link to="/button">버튼</router-link> |
      <hr/>
      <router-link to="/class1">Class</router-link> |
      <router-link to="/inline">Inline Style Binding</router-link> |
      <router-link to="/inline2">Inline Style Binding</router-link> |
      <router-link to="/productlist">제품목록</router-link> |
      <router-link to="/Vif">조건에 따른 Redering</router-link> |
      <hr/>
      <router-link to="/event1">Click 이벤트</router-link> |
      <router-link to="/event2">Select 이벤트</router-link> |
      <router-link to="/computed">Computed 이벤트</router-link> |
      <router-link to="/watch">Watch 이벤트</router-link> |
      <router-link to="/getList">목록 가져오기</router-link> |
      <hr/>
      <router-link to="/boardListVue">게시글 목록</router-link> | 
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
