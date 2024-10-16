<template>
  <div class="login-container">
    <div class="right-image">
      <img src="@/assets/imgs/laptop.png" alt="Side Image" class="side-image" />
    </div>
    <div class="login-box">
      <h2 class="text-title">Job Running Status RPA</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label class="form-name" for="username">One ID</label>
          <input type="text" v-model="username" id="username" required />
        </div>
        <div class="form-group">
          <label class="form-name" for="password">Password</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <div class="button-container">
          <button type="submit" class="login-btn">
            Login
            <img src="@/assets/imgs/enter.png" alt="Login Icon" class="icon-enter" />
          </button>
        </div>
      </form>
      <img src="@/assets/imgs/welcome.png" alt="Icon welcome" class="welcome-icon" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      if (this.username === 'admin' && this.password === 'admin') {
        this.$router.push('/home');
      } else {
        alert('Username หรือ Password ไม่ถูกต้อง');
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center; /* แก้เป็น center เพื่อให้สวยงามและเป็นกลาง */
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/imgs/Background.jpg');
  background-size: cover;
  background-position: center;
  padding: 0 5%; /* เพิ่ม padding เพื่อให้ตรงกลางดูไม่ชิดเกินไป */
}

.text-title {
  font-size: 2rem; /* ลดขนาดฟอนต์เพื่อให้พอดีกับ layout */
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: #3E3D3D;
}

.login-box {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: #3E3D3D;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 30%;
  background-color: rgba(216, 216, 216, 0.7);
  text-align: center;
  position: relative;
  margin-right: 5%; /* ให้เว้นระยะทางด้านขวานิดหน่อย */
}

.form-name {
  margin-left: 15%;
  font-size: 1rem;
}

.form-group {
  margin-bottom: 15px;
  text-align: start;
}

input {
  width: 70%;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 30px;
  border: none;
  margin: 0 auto;
  display: block;
}

.button-container {
  display: flex;
  justify-content: center;
}

.login-btn {
  width: 30%;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  padding: 10px 20px;
  background-color: #37393A;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-btn:hover {
  background-color: #434190; /* เพิ่มสีตอน hover */
}

.icon-enter {
  width: 20px;
  height: 20px;
  margin-left: 5px;
}

.welcome-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: auto;
}

.right-image {
  width: 45%; /* เพิ่มความกว้างให้สมดุลกับ login-box */
  text-align: left;
  margin-left: 50px; /* เพิ่มระยะห่างจาก login-box */
}

.side-image {
  max-width: 100%;
  height: auto;
}
/* ตั้งค่าขนาดสำหรับ iPad */
@media (min-width: 769px) and (max-width: 1024px) {
  .login-container {
    flex-direction: row;
    justify-content: space-between;
    padding-left: 5%;
  }

  .login-box {
    width: 50%; /* ปรับขนาดให้เหมาะสมสำหรับ iPad */
    padding: 20px;
    margin-left: 5%;
  }

  .right-image {
    width: 40%; /* ปรับความกว้างให้สมดุล */
    margin-left: 20px;
    text-align: center;
  }

  .text-title {
    font-size: 2rem; /* ขนาดพอดีกับหน้าจอ */
  }

  .form-name {
    font-size: 1rem; /* ขนาดพอดีกับฟอร์ม */
  }

  .login-btn {
    padding: 10px 20px;
    width: 40%; /* ขนาดพอดีกับปุ่ม */
  }

  .icon-enter {
    width: 22px;
    height: 22px; /* ปรับขนาดไอคอน */
  }

  .welcome-icon {
    width: 45px; /* ปรับให้เหมาะสม */
  }
}
/* ตั้งค่าขนาดจอเล็ก */
@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
    padding-left: 0;
  }

  .login-box {
    width: 80%; /* ปรับขนาดให้เต็มจอเล็ก */
    padding: 10px;
    margin-left: 10%;
  }

  .right-image {
    width: 90%; /* ปรับขนาดให้เต็มพื้นที่จอเล็ก */
    margin-top: 20px;
    padding: 30px 0px;
  }

  .text-title {
    font-size: 1.8rem;
  }

  .form-name {
    font-size: 1rem;
  }

  .login-btn {
    padding: 10px 16px;
    width: 60%; /* ปรับปุ่มให้ใหญ่ขึ้นในจอเล็ก */
  }

  .icon-enter {
    width: 20px;
    height: 20px;
  }

  .welcome-icon {
    width: 50px; /* ปรับขนาดให้เหมาะสมในจอเล็ก */
  }
}
/* ตั้งค่าขนาดจอเล็กมาก */
@media (max-width: 480px) {
  .login-box {
    width: 80%;
    margin-left: 10%;
    padding: 15px;
  }

  .right-image {
    width: 80%;
    margin-top: 15px;
    padding: 30px 0px;
  }

  .text-title {
    font-size: 1.5rem;
  }

  .form-name {
    font-size: 0.9rem;
  }

  .login-btn {
    padding: 8px 12px;
    width: 70%; /* ปรับขนาดปุ่มให้กดง่ายในจอมือถือ */
  }

  .icon-enter {
    width: 18px;
    height: 18px;
  }

  .welcome-icon {
    width: 40px; /* ปรับให้เล็กลงสำหรับมือถือ */
  }
}
</style>
