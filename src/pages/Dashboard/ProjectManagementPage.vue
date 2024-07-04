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
        <ProjectProgress />

        <div class="revenue-progress-roadmap-area">
          <div class="row">
            <div class="col-lg-12 col-xxl-5">
              <RevenueChart />
            </div>

            <div class="col-lg-6 col-xxl-3">
              <ProjectProgressChart />
            </div>

            <div class="col-lg-6 col-xxl-4">
              <ProjectRoadmapChart />
            </div>
          </div>
        </div>

        <ProjectTable />       

        <MainFooter />
      </div>
    </div>

    <SettingsOption />
    <SettingsModal />
  </div>
</template>

<script setup lang="ts">
import ProjectProgress from "../../components/Dashboard/ProjectManagement/ProjectProgress.vue";
import RevenueChart from "../../components/Dashboard/ProjectManagement/RevenueChart/index.vue";
import ProjectProgressChart from "../../components/Dashboard/ProjectManagement/ProjectProgressChart.vue";
import ProjectRoadmapChart from "../../components/Dashboard/ProjectManagement/ProjectRoadmapChart/index.vue";
import ProjectTable from "../../components/Dashboard/ProjectManagement/ProjectTable/index.vue";
import MainHeader from "../../components/Layouts/MainHeader.vue";
import MainSidebar from "../../components/Layouts/MainSidebar.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";
import stateStore from "../../utils/store";

const stateStoreInstance = stateStore;    
</script>