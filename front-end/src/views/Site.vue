<template>
  <body
    class="home-body"
    :style="{
      backgroundImage: 'url(' + require('@/assets/img/brightangel.jpg') + ')',
    }"
  >
    <div class="container">
      <h1 class="display-4 text-center p-5">our site</h1>
      <div class="section">
        <img
          class="about-photo image"
          src="@/assets/img/jhwildingcircleblue.png"
        /><br /><br />
        <div class="section-text">
          <h3 class="about-title">jhwilding.com</h3>
          <p>
            JHWilding.com is a hub for family history as it happens. I wanted a
            central place where we could keep track of plans and goals (both met
            and unmet), memories of our life together, and moments we captured
            on camera. I wanted to be able to see our story and character arcs,
            pardon the analogy, as they develop. I wanted a place where I could
            look back and see God's hand in our lives. This life is what we make
            of it, and by reflecting on and recording our life, I hope to be
            inspired to make it a good one. JHWilding.com offers a birds eye
            view of what is contained in our personal journals. Welcome to the
            rollercoaster of our lives! Perhaps there's something here that
            speaks to challenges you're facing, or experiences you've had, and
            that you can find some solidarity or inspiration through your time
            here!
          </p>
        </div>
      </div>
      <h3 class="about-title">latest addition</h3>
      <p>
        Our most recent release includes a repository of some of our favorite
        quotes, entitled "words to live by." Try it out
        <a href="words.html">here.</a>
      </p>
      <h3 class="about-title">up-and-coming</h3>
      <p>
        Like our lives, JHWilding is constantly under construction.
        Up-and-coming functionality includes: a blog post creation, storage, and
        filtering system; a personalized about page for each member of the
        Wilding family; and a photo gallery of our personal library--books we've
        read over the course of our time together. If you have sugggestions for
        additional features for JHWilding, feel free to use the form below to
        submit them!
      </p>
      <img src="@/assets/img/pen.jpg" class="image" />
      <h3 class="about-title">submit a suggestion</h3>
      <form class="form-group">
        <label>First and last name:</label><br />
        <input
          type="text"
          placeholder="Sierra Lancaster"
          class="form-control"
        /><br />
        <label>Email address:</label><br />
        <input
          type="email"
          placeholder="travelbugsierra@gmail.com"
          class="form-control"
        /><br />
        <label>Brief description of suggestions for jhwilding.com:</label><br />
        <textarea class="form-control" placeholder=""></textarea><br />
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </body>
</template>

<style scoped>
body {
  color: black;
  display: flex;
  flex-direction: column;
}

.footer {
  flex-shrink: 0;
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

.about-body {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
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

.about-photo {
  filter: brightness(140%);
  padding: 2em 0em;
  margin: auto;
}

.about-title {
  padding: 1em 0em;
}

.section {
  display: flex;
  flex-direction: column;
}

.section-text {
  font-size: small;
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

  .about-photo {
    max-width: 100%;
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

  .about-photo {
    max-width: 250px;
    margin: auto;
  }

  .section {
    display: flex;
    flex-direction: row;
  }

  .section-text {
    padding-left: 2em;
    font-size: small;
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .about-photo {
    max-width: 350px;
  }

  .section {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .section-text {
    padding-left: 2em;
    font-size: initial;
  }
}
</style>
