<script setup lang="ts">
import { ref } from 'vue'
import { useAuthenticationStore } from '@/stores/authentication'
import { VAlert } from 'vuetify/lib/components/index.mjs';
import { useRouter } from 'vue-router'
import background from '@/assets/images/background-beach.jpg'

const router = useRouter()
const authentication = useAuthenticationStore()

const showMessage = ref(false)
const message = ref('')
const classAlert = ref('')

const email = ref('')
const password = ref('')

const login = async () => {  
  try {
    await authentication.login(email.value, password.value)

    message.value = authentication.answerApi
    classAlert.value = authentication.classAlert
    showMessage.value = true

    console.log(authentication.isLogged)

    if (authentication.isLogged === true)
      router.push('/home-page')
  }
  catch (e) {
    message.value = authentication.answerApi
    classAlert.value = authentication.classAlert
    showMessage.value = true
  }

  setTimeout(() => {
    showMessage.value = false
  }, 2000 );
}
</script>

<template>
  <div class="h-80vh background">
      <div class="d-table">
        <div class="d-table-cell">                     
          <div
            class="card border-0 box-shadow border-radius-10 mb-4 w-100"
            style="max-width: 500px; margin: auto"
          >
            <div class="card-body p-30">
              <div class="text-center mb-4">
                <h4 class="fs-20 fw-semibold mb-2">Entrar</h4>
                <p class="fs-14 text-body">
                  Não tem uma conta ainda?
                  <router-link
                    to="/sign-up"
                    class="text-primary text-decoration-none"
                  >
                    Registre-se
                  </router-link>
                </p>
              </div>              
                <div class="form-group mb-4">
                  <label class="label">E-mail</label>
                  <input
                    v-model="email"
                    type="text"
                    class="form-control"
                    placeholder="Digite o seu e-mail"
                  />
                </div>
                <div class="form-group mb-4">
                  <label class="label">Senha</label>
                  <div class="password-wrapper position-relative">
                    <input
                      v-model="password"
                      type="password"
                      id="password"
                      class="form-control"
                      value="password"
                    />
                    <i
                      style="
                        color: #919aa3;
                        font-size: 16px;
                        right: 15px !important;
                      "
                      class="ri-eye-off-line password-toggle-icon translate-middle-y top-50 end-0 position-absolute"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <div class="form-group mb-4 d-flex justify-content-between">
                  <div class="c-form-check form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label fs-14 text-body ms-0"
                      for="flexCheckDefault"
                    >
                      Lembrar Dados
                    </label>
                  </div>
                  <router-link
                    to="/forget-password"
                    class="text-primary fs-14 text-decoration-none"
                  >
                    Esqueceu sua senha?
                  </router-link>
                </div>
                <div class="form-group mb-4">
                  <button @click="login" class="default-btn w-100 d-block">
                    Entrar
                  </button>
                </div>
                <div style="text-align: center">
                  <VAlert
                    v-if="showMessage"
                    :color="classAlert"                                        
                    :text="message"                    
                  />    
                </div>                                                                            
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style>
  .background {
    background-image: url('/src/assets/images/background-beach.jpg');
    background-size:cover;
  }
</style>