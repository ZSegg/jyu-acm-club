import request from './index'


export async function login(username, password) {
     try {
          const res = await request.post('/v1/auth/login', {
               username: username,
               password: password,
          })
          console.log("login: ", res.data)
          return res.data
     } catch (error) {
          console.error(error)
          alert("登录错误：", error);
     }
}

export async function register(username, password, email) {
     try {
          const res = await request.post('/v1/auth/register', {
               username: username,
               password: password,
               email: email
          })
          return res.data
     } catch (error) {
          console.error(error)
          alert("注册错误：", error);
     }
}

export async function resetPassword(code, email, new_password) {
     try {
          const res = await request.post('/v1/auth/reset-password', {
               code: code,
               email: email,
               new_password: new_password
          })
          return res.data
     } catch (error) {
          console.error(error)
          alert("重置密码错误：", error);
     }
}
