<template>
  
  <MainHeader />
  <div
    :class="[
      'main-content expanded js-container',
      { collapsed: stateStoreInstance.open },
    ]"
  >
    <MainSidebar />
    <div class="container-fluid">
      <div class="inner-main-content">
        <ProfileContent />

        <MainFooter />
      </div>
    </div>
    <SettingsOption />
    <SettingsModal />
  </div>
</template>

<script setup lang="ts">
import ProfileContent from "../../components/Social/Profile/ProfileContent.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";
import MainHeader from "../../components/Layouts/MainHeader.vue";
import MainSidebar from "../../components/Layouts/MainSidebar.vue";
import stateStore from "../../utils/store";

const stateStoreInstance = stateStore;    
</script>