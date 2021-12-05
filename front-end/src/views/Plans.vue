<template>
  <body
    class="home-body"
    :style="{
      backgroundImage: 'url(' + require('@/assets/img/brightangel.jpg') + ')',
    }"
  >
    <!-- Class 'container' holds all page content -->
    <div class="container">
      <h1 class="display-4 text-center p-5">our plans</h1>
      <div class="plan">
        <div class="col1">
          <div class="plans-section">
            <h4>graduate from Brigham Young University, Dec 2021</h4>
            <br />
            <p>
              Jonathan graduated this past April with his bachelor's degree in
              Mathematics. I will graduate in December with my bachelor's degree
              in Information Systems. We both are interested in graduate
              education and are planning to prepare ourselves by taking graduate
              admissions exams in the next few months. Jonathan is hoping to
              pursue a master's degree in Computer Science after getting 2-5
              years experience in his field. I plan to pursue an MBA.
            </p>
          </div>
        </div>
        <div class="col2">
          <img
            class="plans-img image left flip"
            src="@/assets/img/tnr.jpg"
          /><br /><br />
        </div>
      </div>
      <div class="plan">
        <div class="col1">
          <img
            class="plans-img image right"
            src="@/assets/img/house.jpg"
          /><br /><br />
        </div>
        <div class="col2">
          <div class="plans-section">
            <h4>move across the country, Jan 2022</h4>
            <br />
            <p>
              Currently, Jonathan is applying to full-time positions as a
              software engineer. We are prepared to move cross-country to
              wherever his job is--although our top locations right now are
              Seattle, WA, Portland, OR, and Lehi, UT. And, although we love
              Wymount and Utah, we are looking forward to the adventure of
              moving to a new place. We are hoping to move somewhere where we
              can get an apartment with a strategic layout with just enough
              space for our little family, so we can save up for a house one
              day.
            </p>
          </div>
        </div>
      </div>
      <div class="plan">
        <div class="col1">
          <div class="plans-section">
            <h4>add a second little baby to our crew, Jul 2022</h4>
            <br />
            <p>
              Pregnancy is something that Jonathan and I seem to always have to
              plan, whether we like it or not. Currently we are working with my
              physician to get everything in order. We are hoping to get
              pregnant in the next few months so we can welcome another baby
              into our family next year.
            </p>
          </div>
        </div>
        <div class="col2">
          <img
            class="plans-img image left flip"
            src="@/assets/img/baby.jpg"
          /><br /><br />
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */

body {
  font-family: "Raleway", sans-serif;
  color: black;
  display: flex;
  flex-direction: column;
}

.footer {
  flex-shrink: 0;
}

.plans-body {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.plans-section {
  border-radius: 2em;
  background-color: #fdf7f7;
  padding: 2em;
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

.title {
  background-color: #f3e0dc;
  color: #5c2018;
  padding: 2vh;
  border-radius: 1em;
}

.column {
  display: flex;
  flex-direction: column;
  width: 33%;
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
  .title {
    font-size: 2.5em;
    width: 100%;
    margin: 3em 0em;
  }

  .container {
    margin: 0em;
  }

  .column {
    width: 100%;
  }

  .footer {
    flex-shrink: 0;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 501px) and (max-width: 960px) {
  .title {
    font-size: 2.5em;
    width: 100%;
    margin: 3em 0em;
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .plans-img {
    max-width: 100%;
    border-radius: 2em;
  }

  .plan {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .col1,
  .col2 {
    width: 50%;
    padding: 2em;
  }

  .col1,
  .right {
    text-align: left;
    float: right;
  }

  .col2,
  .left {
    text-align: left;
    float: left;
  }

  .plan p {
    font-style: italic;
  }
}
</style>
