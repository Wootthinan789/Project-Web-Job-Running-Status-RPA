<template>
  <div class="home-container">
    <!-- Grid ซ้าย -->
    <div class="grid-left">
      <h2 class="dashboard-title">Dashboard VM</h2>
      <div class="divider"></div>

      <!-- ปุ่ม Virtual Machine -->
      <button class="action-button" @click="toggleVMOptions">
        Virtual Machine
        <img v-if="!showVMOptions" class="icon" src="@/assets/imgs/add.png" alt="add icon" />
        <img v-else class="icon" src="@/assets/imgs/close.png" alt="close icon" />
      </button>

      <!-- ปุ่มเพิ่มเติมสำหรับ Virtual Machine -->
      <div v-if="showVMOptions" class="vm-options">
        <button class="action-button-list" @click="updateCenterText('Nutanix')">
          Nutanix
        </button>
        <button class="action-button-list" @click="updateCenterText('VMware')">
          VMware
        </button>
        <button class="action-button-list" @click="updateCenterText('VMware New')">
          VMware New
        </button>
      </div>

      <!-- ปุ่ม Run Code -->
      <button class="action-button" @click="toggleRunCodeOptions">
        Run Code
        <img v-if="!showRunCodeOptions" class="icon" src="@/assets/imgs/add.png" alt="add icon" />
        <img v-else class="icon" src="@/assets/imgs/close.png" alt="close icon" />
      </button>

      <!-- ปุ่มเพิ่มเติมสำหรับ Run Code -->
      <div v-if="showRunCodeOptions" class="run-code-options">
        <button class="action-button-list" @click="updateCenterText('Run Script')">
          Run Script
        </button>
        <button class="action-button-list" @click="updateCenterText('Debug Code')">
          Debug Code
        </button>
        <button class="action-button-list" @click="updateCenterText('Compile')">
          Compile
        </button>
      </div>
    </div>

    <!-- Grid ขวา -->
    <div class="grid-right-container">
      <div class="grid-right">
        <!-- แสดงวันที่และเวลา -->
        <div class="date-time">
          {{ currentDate }} {{ currentTime }}
        </div>

        <!-- ข้อความ Nutanix ตรงกลาง (จะเปลี่ยนตามการเลือกปุ่ม) -->
        <div class="center-text">
          {{ selectedOption }}
        </div>

        <!-- Dropdown User -->
        <div class="user-dropdown" @click="toggleDropdown">
          <div class="user-info">
            <img class="user-icon" src="@/assets/imgs/user.png" alt="User" />
            <span class="user-name">Wootthinan</span>
            <img class="dropdown-arrow" src="@/assets/imgs/down-chevron.png" alt="Dropdown Arrow" />
          </div>
          <ul v-if="isDropdownOpen" class="dropdown-menu">
            <li class="dropdown-item" style="color: #414141;">
              Home
              <img class="dropdown-item-icon" src="@/assets/imgs/home.png" alt="Home" />
            </li>
            <li class="dropdown-item" style="color: #f30000;">
              Logout
              <img class="dropdown-item-icon" src="@/assets/imgs/logout.png" alt="Logout" />
            </li>
          </ul>
        </div>
      </div>

      <!-- Grid ด้านล่างของ Grid ขวา -->
      <div class="bottom-grid">
        <div class="column-header">
          <div class="header-item">Name</div>
          <div class="header-item">IP Addresses</div>
          <div class="header-item">Status VM</div>
          <div class="header-item">Status Run</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'HomePage',
  data() {
    return {
      currentDate: '',
      currentTime: '',
      isDropdownOpen: false, // สถานะของ dropdown (เปิด/ปิด)
      showVMOptions: false,  // สถานะเพื่อแสดง/ซ่อนปุ่มเพิ่มเติมของ Virtual Machine
      showRunCodeOptions: false, // สถานะเพื่อแสดง/ซ่อนปุ่มเพิ่มเติมของ Run Code
      selectedOption: 'Nutanix', // ค่าเริ่มต้นของข้อความที่จะแสดงตรงกลาง
    };
  },
  mounted() {
    this.updateDateTime();
    setInterval(this.updateDateTime, 1000); // อัพเดตทุก 1 วินาที

    // Listener คลิกนอก dropdown
    window.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    // ลบ Listener เมื่อ component ถูกทำลาย
    window.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    updateDateTime() {
      const now = new Date();
      this.currentDate = now.toLocaleDateString('th-TH', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
      this.currentTime = now.toLocaleTimeString('th-TH', { hour12: false });
    },
    toggleVMOptions() {
      this.showVMOptions = !this.showVMOptions; // สลับสถานะเพื่อแสดง/ซ่อนปุ่มเพิ่มเติม Virtual Machine
    },
    toggleRunCodeOptions() {
      this.showRunCodeOptions = !this.showRunCodeOptions; // สลับสถานะเพื่อแสดง/ซ่อนปุ่มเพิ่มเติม Run Code
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen; // สลับสถานะ dropdown
    },
    updateCenterText(option) {
      this.selectedOption = option; // อัปเดตข้อความตรงกลางตามตัวเลือกที่ถูกกด
    },
    handleClickOutside(event) {
      // ถ้า target ของการคลิกไม่ใช่ user dropdown และ dropdown เปิดอยู่ ให้ปิด dropdown
      const dropdown = this.$el.querySelector('.user-dropdown');
      if (dropdown && !dropdown.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    }
  },
};

</script>

<style scoped>
.home-container {
  background-color: #E9E9E9;
  height: 100vh;
  display: flex;
}

.grid-left {
  width: 20%;
  background-color: #D9D9D9;
  padding: 10px;
  margin: 10px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.center-text {
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: #414141;
  margin: 0 20px; /* เพิ่ม margin เพื่อให้ห่างจากข้อความอื่น */
  text-align: center;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 5px 20px;
}

.grid-right-container {
  width: 80%;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
}

.grid-right {
  background-color: #D9D9D9;
  padding: 10px 10px;
  border-radius: 30px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.date-time {
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: #414141;
}

.user-dropdown {
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* เงา */
  border-radius: 30px;
  padding: 7px 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  width: auto; /* ทำให้ความกว้างของ dropdown ปรับตามเนื้อหา */
}

.user-info {
  display: flex;
  align-items: center;
}

.user-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.user-name {
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: #414141;
}

.dropdown-arrow {
  width: 16px;
  height: 16px;
  margin-left: 10px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border-radius: 30px;
  margin-top: 5px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* เงา */
  list-style: none;
  z-index: 1;
  width: 90%;
}

.dropdown-item {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
}
.dropdown-item-icon {
  width: 16px;
  height: 16px;
  margin-left: 10px;
}
.dropdown-item:hover {
  background-color: #f0f0f0; /* สีพื้นหลังเมื่อลากเมาส์ */
}

.bottom-grid {
  background-color: #D9D9D9;
  padding: 20px;
  border-radius: 30px;
  margin: 10px;
  flex: 1;
}

.column-header {
  display: flex;
  width: auto;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 5px 20px;
  border-radius: 30px;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
}

.header-item {
  flex: 1;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  text-align: center;
  color: #414141;
  padding: 10px 0;
}

.header-item:not(:last-child) {
  margin-right: 20px; /* ระยะห่างระหว่างคอลลัมม์ */
}

.dashboard-title {
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  color: #414141;
  margin-bottom: 10px;
}

.divider {
  width: 90%;
  height: 1px;
  background-color: #A49F9F;
  margin: 10px;
}

.action-button {
  width: 70%;
  padding: 10px 0; /* กำหนด padding */
  margin: 10px 0;
  background-color: #FFFFFF;
  color: #414141;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  text-align: center;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* เงา */
}

.action-button-list {
  width: 100%; /* ให้กว้างเต็มที่ */
  padding: 5px 20px; /* ใช้ padding เหมือน action-button */
  margin: 5px 0; /* ขอบด้านบนและล่าง */
  background-color: #FFFFFF;
  color: #414141;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  text-align: center;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* เงา */
}


.action-button:hover {
  background-color: #59BFB9;
}
.action-button-list:hover {
  background-color: #59BFB9;
}

.icon {
  width: 16px;
  height: 16px;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}

.vm-options,
.run-code-options {
  display: flex; /* ใช้ flexbox */
  flex-direction: column; /* จัดแนวในแนวตั้ง */
  align-items: center; /* จัดให้อยู่กลาง */
}


</style>
