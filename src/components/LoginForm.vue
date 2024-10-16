<template>
    <div class="login-box">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" v-model="username" id="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit" class="login-btn">Login</button>
      </form>
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
        if (this.username === 'admin' && this.password === 'pass01') {
          this.$emit('login-success');
        } else {
          alert('Username หรือ Password ไม่ถูกต้อง');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-box {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  .login-btn {
    width: 100%;
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .login-btn:hover {
    background-color: #0056b3;
  }
  </style>
  