import { defineStore } from "pinia"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import * as message from "@/utils/messages"

const auth = getAuth()

export const useAuthenticationStore = defineStore('authentication', {
    state: () => ({
        answerApi: '',
        classAlert: '',
        errorMessage: '',
        isLogged: false,
        isRegistered: false,
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
        },

        async register(email: string, password: string) {
           await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential.user)
                    
                    this.answerApi = message.registerSuccess
                    this.classAlert = 'success'
                    this.isRegistered = true 
                })
                .catch((error) => {
                    this.errorMessage = error.code
                    this.answerApi = message.registerFailed
                    this.classAlert = 'error'                    
                });
        }
    }
})