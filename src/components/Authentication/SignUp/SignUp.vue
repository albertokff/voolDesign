
<script setup lang="ts">
import { ref } from 'vue'
import { useAuthenticationStore } from '@/stores/authentication'
import { useRouter } from 'vue-router'
import { VAlert } from 'vuetify/lib/components/index.mjs';

const router = useRouter()
const authentication = useAuthenticationStore()

const showMessage = ref(false)
const message = ref('')
const classAlert = ref('')

const email = ref('')
const password = ref('')

const register = async () => {
  try {
    await authentication.register(email.value, password.value)

    message.value = authentication.answerApi
    classAlert.value = authentication.classAlert
    showMessage.value = true
  } catch (e) {
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
  <div class="h-80vh">
    <div class="d-table">
      <div class="d-table-cell">
        <div
          class="card border-0 box-shadow border-radius-10 mb-4 w-100"
          style="max-width: 500px; margin: auto"
        >
          <div class="card-body p-30">
            <div class="text-center mb-4">
              <h4 class="fs-20 fw-semibold mb-2">Registre-se</h4>
              <p class="fs-14 text-body">
                Já possui uma conta?
                <router-link
                  to="/sign-in"
                  class="text-primary text-decoration-none"
                >
                  Entre.
                </router-link>
              </p>
            </div>
            <form @submit.prevent="register">            
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
              <div class="form-group mb-4">
                <button type="submit" class="default-btn w-100 d-block">
                  Registrar
                </button>
              </div>   
              <div style="text-align: center">
                <VAlert
                  v-if="showMessage"
                  :color="classAlert"                                        
                  :text="message"                    
                />    
              </div>            
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>