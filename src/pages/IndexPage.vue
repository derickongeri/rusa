<template>
  <q-page class="flex flex-center">
<<<<<<< HEAD
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script>
=======
    <q-carousel
      v-model="slide"
      swipeable
      animated
      control-color="primary"
      control-type="outline"
      :padding="padding"
      :vertical="vertical"
      :arrows="arrows"
      :navigation="navigation"
      navigation-position="top"
      height="100vh"
      class="carousel text-primary text-body"
      ref="carousel"
    >
      <q-carousel-slide :name="1" class="column no-wrap items-center">
        <div class="q-mt-xl q-py-xl">
          <img src="~src/assets/onboard1.png" alt="" />
        </div>
        <div class="text-h4 text-center q-mt-md q-mx-lg">
          Track your health with daily logs
        </div>
        <div class="q-mt-md text-center q-mx-lg" style="font-size: 21px">
          Log signs, sleep, mood, movement and flow to get insights on your
          health
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap items-center">
        <div class="q-mt-xl q-py-xl">
          <img src="~src/assets/onboard2.png" alt="" />
        </div>
        <div class="text-h4 text-center q-mt-md q-mx-lg">
          Stay informed with community insights
        </div>
        <div class="q-mt-md text-center q-mx-lg" style="font-size: 21px">
          Connect, share experiences, receive tips from other users just like
          you.
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap items-center">
        <div class="q-mt-xl q-py-xl">
          <img src="~src/assets/onboard3.png" alt="" />
        </div>
        <div class="text-h4 text-center q-mt-md q-mx-lg">
          Get professional healthcare advice
        </div>
        <div class="q-mt-md text-center q-mx-lg" style="font-size: 21px">
          Connect, share experiences, receive tips from other users just like
          you.
        </div>
      </q-carousel-slide>
      <!-- <q-carousel-slide :name="4" class="column no-wrap flex-center">
        <q-icon name="terrain" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide> -->

      <template v-slot:control>
        <q-carousel-control
          position="bottom"
          :offset="[18, 18]"
          class="q-gutter-xs"
        >
          <div class="row justify-between">
            <q-btn
              v-if="slide !== 3"
              style="min-width: 124px; min-height: 50px"
              unelevated
              rounded
              label="SKIP"
              color=""
              text-color="black"
              to="auth"
            />

            <q-btn
              v-if="slide !== 3"
              style="min-width: 124px; min-height: 50px"
              unelevated
              rounded
              label="NEXT"
              color="primary"
              text-color="white"
              @click="$refs.carousel.next()"
            />

            <q-btn
              v-else
              style="min-width: 124px; min-height: 50px"
              unelevated
              rounded
              class="full-width"
              label="GET STARTED"
              color="primary"
              text-color="white"
              to="auth"
            />
          </div>
        </q-carousel-control>
      </template>
    </q-carousel>
  </q-page>
</template>

<script>
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "IndexPage",

  setup() {
    const navPos = ref("bottom");
    const vertical = ref(false);

    watch(vertical, (val) => {
      navPos.value = val === true ? "right" : "bottom";
    });

    return {
      // slide: ref(1),
      padding: ref(true),
      vertical,
      arrows: ref(false),
      navigation: ref(false),

      navPos,
      navigationPositions: [
        { value: "top", label: "top" },
        { value: "right", label: "right" },
        { value: "bottom", label: "bottom (default)" },
        { value: "left", label: "left" },
      ],

      slide: ref(1),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
});
</script>

<style lang="scss">
.carousel {
  background-color: #f8f9f4;
}
</style>
>>>>>>> dd584b2becd4cec6727fd98c33411a874e44f9c5
