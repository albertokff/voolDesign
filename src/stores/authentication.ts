import { defineStore } from "pinia"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import * as message from "@/utils/messages"

const auth = getAuth()

export const useAuthenticationStore = defineStore('authentication', {
    state: () => ({
        answerApi: '',
        classAlert: '',
        errorMessage: '',
        isLogged: false,
    }),
    actions: {
        async login(email: string, password: string) {            
            await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential.user)

                this.answerApi = message.loginSuccess
                this.classAlert = 'success'
                this.isLogged = true
                })
                .catch((error) => {
                this.errorMessage = error.code
                this.answerApi = message.loginFailed
                this.classAlert = 'error'
                  });
        }
    }
})