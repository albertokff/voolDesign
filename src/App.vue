<template>  
  <PreLoader v-if="isLoading" />

    <router-view />

    <SettingsOption />
    <SettingsModal />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PreLoader from "./components/Layouts/PreLoader.vue";
import SettingsOption from "./components/Layouts/SettingsOption.vue";
import SettingsModal from "./components/Layouts/SettingsModal.vue";
import stateStore from "./utils/store";

export default defineComponent({
  name: "App",
  components: {
    PreLoader,
    SettingsOption,
    SettingsModal,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  setup() {
    const stateStoreInstance = stateStore;
    return { stateStoreInstance };
  },
});
</script>