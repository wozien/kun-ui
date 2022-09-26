<template>
  <kun-button icon="search">Button Text</kun-button>
  <kun-button color="green">Button Text</kun-button>
  <kun-button color="yellow">Button Text</kun-button>
  <kun-button color="red">Button Text</kun-button>
  <kun-button color="gray">Button Text</kun-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { KunButton } from "@/index";

export default defineComponent({
  components: {
    KunButton,
  },
});
</script>
