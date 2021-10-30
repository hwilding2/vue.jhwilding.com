<template>
  <div id="app">
    <!-- <div id="nav"></div> -->
    <body
      class="home-body"
      :style="{
        backgroundImage: 'url(' + require('@/assets/img/brightangel.jpg') + ')',
      }"
    >
      <!-- Navbar on all pages, customized with class 'bg-custom' -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-custom">
        <router-link class="navbar-brand" to="/"
          ><img class="logo" src="@/assets/img/jhwildingsimplewhite.png"
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <!-- <li class="nav-item active">
              <router-link class="nav-link" to="#story"
                >Story<span class="sr-only">(current)</span></router-link
              >
            </li> -->
            <li class="nav-item">
              <!-- <a class="nav-link" href="plans.html">Plans</a> -->
              <router-link class="nav-link" to="/plans">Plans</router-link>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="/gallery.html">Life</a>
            </li> -->
            <li class="nav-item">
              <router-link class="nav-link" to="/site">Site</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/quotes">Quotes</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/books">Book List</router-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <router-view />

      <!-- Footer on all pages, customized with class 'bg-custom' and GitHub Classroom link -->
      <footer class="bg-custom-dark text-center text-white footer">
        <div
          class="text-center p-3"
          style="background-color: rgba(0, 0, 0, 0.2)"
        >
          © 2021 Copyright:
          <a
            class="text-white"
            href="https://github.com/hwilding2/jhwilding.com"
            >GitHub</a
          >
        </div>
      </footer>
    </body>
  </div>
</template>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  /* font-family: 'Raleway', sans-serif; */
  color: black;
  display: flex;
  flex-direction: column;
}

.page-bg {
  background-color: #fdf7f7;
  /* background-color: white; */
  font-family: "Raleway", sans-serif;
}

.footer {
  flex-shrink: 0;
}

.button {
  border-radius: 2em;
  padding: 1vh;
  margin: 2em 0em;
  font-size: 0.75em;
  background-color: #4285f4;
}

.home-body {
  font-family: "Raleway", sans-serif;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.logo {
  max-width: 3em;
}

.bg-custom {
  background-image: linear-gradient(#5c2018, rgba(0, 0, 0, 0.2));
}

.bg-custom-dark {
  background-color: #5c2018;
}

.container {
  padding: 2em;
  background-color: #f3e0dc;
}

.home-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 20%;
  color: #f3e0dc;
  padding: 1em;
}

.home-buttons {
  display: flex;
}

.home-button {
  margin: 0.5em 0.5em;
}

.title {
  background-color: #f3e0dc;
  color: #5c2018;
  padding: 2vh;
  border-radius: 1em;
}

.story {
  background-color: #f3e0dc;
  border-top: 1em solid #5c2018;
  margin: 20%;
  padding: 1em;
  border-radius: 1em;
}

.story-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2em;
}

.story-text {
  width: 50%;
}

.story-rule {
  border-top: 1em solid rgba(66, 133, 244, 0.5);
  border-radius: 2em;
}

.hphotop {
  width: 50%;
  margin-left: 7em;
}

.hphotol {
  width: 50%;
  margin-right: 3em;
}

.image {
  max-width: 100%;
  height: auto;
  cursor: pointer;
  display: block;
  z-index: 999;
  -webkit-transition-property: all;
  -webkit-transition-duration: 1s;
  -webkit-transition-timing-function: ease;
}

.image:hover {
  transform: scale(1.1);
}

/* Mobile Styles */
@media only screen and (max-width: 500px) {
  .home-body {
    background-position: right;
    font-family: "Raleway", sans-serif;
    display: flex;
    flex-direction: column;
  }

  .home-container {
    margin: 0;
  }

  .title {
    font-size: 2.5em;
    width: 100%;
    margin: 3em 0em;
  }

  .home-button {
    display: none;
  }

  .container {
    margin: 0em;
  }

  .hphotop {
    width: 100%;
    margin-left: 0em;
  }

  .hphotol {
    width: 100%;
    margin-right: 0em;
  }

  .button {
    font-size: 0.75em;
  }

  .footer {
    flex-shrink: 0;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 501px) and (max-width: 960px) {
  .home-body {
    background-position: right;
  }

  .home-container {
    margin: 0;
  }

  .title {
    font-size: 2.5em;
    width: 100%;
    margin: 3em 0em;
  }

  .home-button {
    display: none;
  }

  .hphotop {
    width: 100%;
    margin-left: 0em;
  }

  .hphotol {
    width: 100%;
    margin-right: 0em;
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
}
</style>