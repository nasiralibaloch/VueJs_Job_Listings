<script setup>
import CardSection from "@/components/CardSection.vue";
import NavBar from "@/components/NavBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <NavBar />
  <CardSection />
  <RouterView />
</template>
