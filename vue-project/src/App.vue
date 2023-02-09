<!-- 시작되는 메인화면이나 마찬가지인 app.vue -->

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">DataBinding - Title</router-link> | 
    <router-link to="/databindinghtml">DataBinding - Html</router-link>
    <hr/>
    <router-link to="/inputText">Input Text</router-link> | 
    <router-link to="/textarea">Textarea</router-link> | 
    <router-link to="/select">Select</router-link> | 
    <router-link to="/checkbox">checkbox</router-link>
    <hr/>
    <router-link to="/radio">Radio</router-link> | 
    <router-link to="/imgsrc">ImgSrc</router-link> | 
    <router-link to="/button">Button</router-link> | 
    <router-link to="/class1">Class1</router-link>
    <hr/>
    <router-link to="/style">StyleObj</router-link> | 
    <router-link to="/style2">StyleObj2</router-link> |
    <router-link to="/list1">List1</router-link> | 
    <router-link to="/vif">V-if</router-link>
    <hr/>
    <router-link to="/clickevent">Click Event</router-link>
  </nav>
  <router-view/>
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
