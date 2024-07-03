<template>
  <div id="SidebarLightMode" class="sidebar-area">
    <div
      id="accordionExample"
      class="layout-menu menu-vertical menu bg-menu-theme scroll-bar active hv-100"
    >
      <div class="menu-inner-shadow"></div>

      <ul class="menu-inner">
        <li class="menu-item">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#collapse1"
            aria-expanded="true"
            aria-controls="collapse1"
          >
            <vue-feather type="grid" class="menu-icon tf-icons"></vue-feather>
            <span class="title">
              <i class="fa-solid fa-user-tie" style="color: #FFD43B;"></i>&nbsp;
              Administrar
            </span>
          </a>

          <ul
            id="collapse1"
            class="menu-sub collapse show"
            data-bs-parent="#accordionExample"
          >
            <li class="menu-item">
              <router-link to="/" class="menu-link">
                <i class="fa-solid fa-users" style="color: #FFD43B;"></i>&nbsp;
                Usuários
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/e-commerce" class="menu-link">
                <i class="fa-solid fa-sack-dollar" style="color: #FFD43B;"></i>&nbsp;
                Planos e Preços
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/analytics" class="menu-link">
                <i class="fa-solid fa-link" style="color: #FFD43B;"></i>&nbsp;
                Gerenciamento de Links
              </router-link>
            </li>
            <li class="menu-item mb-0">
              <router-link
                to="/crm"
                class="menu-link d-flex justify-content-between align-items-center"
              >
              <i class="fa-solid fa-chart-line" style="color: #FFD43B;"></i>
                Estatísticas
                <span class="bg-primary text-white rounded-1 fs-12 px-2">
                  Premium
                </span>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSidebar",
};
</script>