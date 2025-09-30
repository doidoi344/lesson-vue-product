<script setup lang="ts"></script>

<template>
  <!-- hero - start -->
  <section
    class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48"
  >
    <!-- image - start -->
    <img
      src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500"
      loading="lazy"
      alt="Photo by Fakurian Design"
      class="absolute inset-0 h-full w-full object-cover object-center"
    />
    <!-- image - end -->

    <!-- overlay - start -->
    <div class="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
    <!-- overlay - end -->

    <!-- text start -->
    <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
      <p class="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">
        Very proud to introduce
      </p>
      <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
        Revolutionary way to build the web
      </h1>

      <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
        <a
          href="#"
          class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          >Start now</a
        >

        <a
          href="#"
          class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
          >Take tour</a
        >
      </div>
    </div>
    <!-- text end -->
  </section>
  <!-- hero - end -->

  <!-- gallery - start -->
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
        Gallery
      </h2>

      <div
        class="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8"
      >
        <!-- image - start -->
        <a
          href="#"
          class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
        >
          <img
            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
            loading="lazy"
            alt="Photo by Minh Pham"
            class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
          ></div>

          <span class="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg"
            >VR</span
          >
        </a>
        <!-- image - end -->

        <!-- image - start -->
        <a
          href="#"
          class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
        >
          <img
            src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
            loading="lazy"
            alt="Photo by Magicle"
            class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
          ></div>

          <span class="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg"
            >技術</span
          >
        </a>
        <!-- image - end -->

        <!-- image - start -->
        <a
          href="#"
          class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
        >
          <img
            src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
            loading="lazy"
            alt="Photo by Martin Sanchez"
            class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
          ></div>

          <span class="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg"
            >開発</span
          >
        </a>
        <!-- image - end -->

        <!-- image - start -->
        <a
          href="#"
          class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
        >
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
            loading="lazy"
            alt="Photo by Lorenzo Herrera"
            class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
          ></div>

          <span class="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg"
            >レトロ</span
          >
        </a>
        <!-- image - end -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
