<template>
<header id="darkModeHeader" class="header-area bg-white mb-4">
    <div class="container-fluid">
    <div class="row align-items-center">
        <div class="col-lg-6 col-md-7">
        <div class="left-header-content">
            <ul
            class="d-lg-flex d-md-flex align-items-center ps-0 mb-0 list-unstyled"
            >
            <li class="mb-3 mb-md-0 mb-lg-0">
                <div
                class="d-flex justify-content-between align-items-center cw-273"
                >
                <router-link to="/" style="text-decoration:none;">
                  <span
                    style="font-size:34px;color:black;text-decoration:none;"
                  >                      
                    <p><i class="fa-solid fa-brush" />&nbsp;VoolDesign</p>
                  </span>                                    
                  <p style="color:black;margin-left:40px;">Baixe seu arquivo facilmente.</p>                  
                </router-link>                    
                </div>
            </li>                
            </ul>
        </div>
        </div>

        <div class="col-lg-6 col-md-5">
        <div class="float-lg-end float-md-end">
            <ul
            class="right-header-content list-unstyled d-flex justify-content-lg-end justify-content-md-end justify-content-center align-items-center mb-0 ps-0"
            >
              <li>
                  <div class="dropdown languages">
                  <button
                      class="btn dropdown-toggle border-0 d-flex align-items-center ps-0 pt-0 pb-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                  >
                      <img
                      src="../../../assets/images/flag/united-states.png"
                      alt="united-states"
                      />
                  </button>
                  <ul class="dropdown-menu border-0 box-shadow rounded-0">
                      <li>
                      <a
                          class="dropdown-item d-flex align-items-center text-body"
                          href="#"
                      >
                          <img
                          src="../../../assets/images/flag/english.png"
                          alt="english"
                          />
                          <span class="ms-2 text-dark">English</span>
                      </a>
                      </li>
                      <li>
                      <a
                          class="dropdown-item d-flex align-items-center text-body"
                          href="#"
                      >
                          <img
                          src="../../../assets/images/flag/arabic.png"
                          alt="arabic"
                          />
                          <span class="ms-2 text-dark">Arabic</span>
                      </a>
                      </li>
                      <li>
                      <a
                          class="dropdown-item d-flex align-items-center text-body"
                          href="#"
                      >
                          <img
                          src="../../../assets/images/flag/chinal.png"
                          alt="chinal"
                          />
                          <span class="ms-2 text-dark">China</span>
                      </a>
                      </li>
                      <li>
                      <a
                          class="dropdown-item d-flex align-items-center text-body"
                          href="#"
                      >
                          <img
                          src="../../../assets/images/flag/spain.png"
                          alt="spain"
                          />
                          <span class="ms-2 text-dark">Spain</span>
                      </a>
                      </li>
                      <li>
                      <a
                          class="dropdown-item d-flex align-items-center text-body"
                          href="#"
                      >
                          <img
                          src="../../../assets/images/flag/russia.png"
                          alt="russia"
                          />
                          <span class="ms-2 text-dark">Russia</span>
                      </a>
                      </li>
                  </ul>
                  </div>
              </li>
              <li>
                <router-link to="/" style="text-decoration:none;"><span>Planos</span></router-link>                
              </li>
              <li>
                <router-link to="/" style="text-decoration:none;"><span>Login</span></router-link>                
              </li>
              <li>
                <router-link to="/" style="text-decoration:none;"><span>Começar</span></router-link>                
              </li>
            </ul>
        </div>
        </div>
    </div>
    </div>
</header>
</template>

<script setup lang="ts">

</script>