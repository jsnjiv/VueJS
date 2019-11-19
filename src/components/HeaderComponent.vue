<template>
    <header class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
  <a class="navbar-brand mr-0 mr-md-2 logo" href="/" aria-label="Bootstrap">
  <img src="../assets/logo.png" alt="" width="40">
  </a>
  <div class="navbar-nav-scroll header-contrainer">
    <ul class="navbar-nav bd-navbar-nav flex-row">
      <li class="nav-item">
          <router-link to="/" class="nav-link" exact-active-class="active">Home</router-link>
      </li>
      <li class="nav-item">
          <router-link to="/about" class="nav-link" exact-active-class="active">About</router-link>
      </li>
      <li class="nav-item">
          <router-link to="/contact" class="nav-link" exact-active-class="active">Contact</router-link>
      </li>
      <li class="nav-item">
          <router-link to="/login" class="nav-link" exact-active-class="active">Login</router-link>
      </li>
    </ul>
  </div>
</header>
</template>


<style scoped>
.logo {
    margin-left: 7%;
}
.header-contrainer { 
    width: 100%;
}
.header-contrainer>ul {
    float: right;
}
.bd-navbar {
    min-height: 4rem;
    background-color: #563d7c;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1);
}
.bd-navbar {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1071;
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
.btn-bd-download {
    font-weight: 500;
    color: #ffe484;
    border-color: #ffe484;
}
</style>