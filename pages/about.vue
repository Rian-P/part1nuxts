<template>
  <div id="Indexpage">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container">
        <nuxt-link to="/" class="navbar-brand">Navbar</nuxt-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link">Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link">Features</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/user" class="nav-link">Pricing</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Nuxt />

    <div>
      <b-carousel id="carousel1" :interval="100" controls indicators background="#ababab" ride="carousel">
        <b-carousel-slide v-for="(slide, index) in slides" :key="index" :caption="slide.caption"
          :img-src="slide.imgSrc"></b-carousel-slide>
      </b-carousel>
    </div>
    <br>
    <div class="card-container">
      <div class="card" v-for="(slide, index) in slides" :key="index">
        <img :src="slide.imgSrc" class="card-img-top" :alt="slide.caption">
        <div class="card-body">
          <p class="card-text">{{ slide.caption }}</p>
        </div>
      </div>
    </div>
    <br>
    <div class="container mx-auto py-4">
      <div class="row">
        <div class="col-md-6">
          <b-img :src="Hero.gambar" fluid-grow class="figure-img img-fluid rounded" alt="..."></b-img>
        </div>
        <div class="col-md-6 d-flex align-items-center">
          <p class="ms-3 my-0 custom-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique
            volutpat nunc id maximus. Sed eget bibendum massa.</p>
        </div>
      </div>
      <div class="row">

        <div class="col-md-6 d-flex align-items-center">
          <p class="ms-3 my-0 custom-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique
            volutpat nunc id maximus. Sed eget bibendum massa.</p>
        </div>
        <div class="col-md-6">
          <b-img :src="Hero.gambar" fluid-grow class="figure-img img-fluid rounded" alt="..."></b-img>
        </div>
      </div>
    </div>
    <FooterComponent/>
  </div>
  
</template>

<style>
/* Your custom styles here */
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: 20px;
}

.card {
  width: 20rem;
  margin: 40px;
}

.custom-text {
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  margin-top: 0;
  margin-bottom: 0;
}
</style>

<script>
import FooterComponent from '~/components/FooterComponent';
export default {
  name: "Indexpage",
  components: {
    FooterComponent,
  },
  data() {
    return {
      slides: [
        { caption: 'Slide 1', imgSrc: 'https://picsum.photos/1024/400/?image=41' },
        { caption: 'Slide 2', imgSrc: 'https://picsum.photos/1024/400/?image=42' },
        { caption: 'Slide 3', imgSrc: 'https://picsum.photos/1024/400/?image=43' }
      ],
      Hero:
      {
        gambar: 'https://picsum.photos/1024/400/?image=42'
      }

    };
  }
};
</script>