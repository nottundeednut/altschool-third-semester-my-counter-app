<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/counter">Counter</router-link>
  </nav>
  <router-view/>
</template>

<style>
body {
  font-family: 'Ubuntu', sans-serif;
  background-color: #ffffff;
  text-align: center;
  color: #000000;
}

nav {
  font-size: 36px;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #000000;
  text-decoration: none;
  text-transform: uppercase;
}

nav a.router-link-exact-active {
  color: #F29602;
}
button {
  background-color: #F29602;
  padding: 5px;
  margin: 10px;
  font-family: inherit;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
}

input {
  background-color: #E5E5E5;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
}
.card {
  width: 60%;
  height: 65vh;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  background: #E5E5E5;
  color: #14213D;
  border-bottom: 6px solid #CCCCCC;
  border-radius: 10px;
}

.logo {
  width: 35%;
  border-style: none;
}

#info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  margin: 10px;
  font-size: 24px;
}
#info h4 {
  font-size: 36px;
  color: #F29602;
}
</style>
