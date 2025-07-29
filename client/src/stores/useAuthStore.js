import { defineStore } from "pinia";
import { login as apiLogin, register as apiRegister, resetPassword as apiResetPassword } from "@/api/auth";

export const useAuthStore = defineStore('ACM_AUTH', {
     status: () => ({
          token: '',
          userId: '',
          username: '',
          isLogin: false
     }),
     actions: {
          clearStatus() {
               this.token = ''
               this.userId = ''
               this.username = ''
               this.isLogin = false
          },
          // 登录
          async login(username, password) {
               try {
                    const res = await apiLogin(username, password)
                    this.token = res.token
                    this.userId = res.user_id
                    this.username = username
                    this.isLogin = true
                    return res
               } catch (error) {
                    this.clearStatus();
                    throw error
               }
          },
          // 注册
          async register(username, password, email) {
               try {
                    const res = await apiRegister(username, password, email)
                    this.token = res.token
                    this.userId = res.user_id
                    this.username = username
                    this.isLogin = true
                    return res
               } catch (error) {
                    this.clearStatus();
                    throw error
               }
          },
          // 重置密码
          async resetPassword(code, email, new_password) {
               try {
                    const res = await apiResetPassword(code, email, new_password)
                    return res;
               } catch (error) {
                    console.log(error)
               }
          }
     },
     persist: true
})