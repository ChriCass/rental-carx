<template>
  <section class="banner">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="fw-bold">{{ name }}</h1>
                <p></p>
            </div>
            
            
        </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    name: String,
  },
};
</script >

<style lang="scss" scoped>

.banner {
    background: linear-gradient(hsla(0, 0%, 100%, 0.92), hsla(0, 0%, 100%, 0.92)), url(../assets/img/banner-info.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 20rem;
    width: 100%;
 
}

.container{
    position: relative;
    top: 7rem;
}

</style>