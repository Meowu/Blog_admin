<template>
  <header class="header">
    <!--logo-->
    <!-- <div class="logo"></div> -->

    <!-- <div class="menu">
      <ul>
        <template v-for="(menu,index) in menus">
          <li :class="{current:currentTopIndex == index}">
            <a @click="clickMenu(index,menu.url)">{{menu.title}}</a>
          </li>
        </template>
      </ul>
    </div> -->
    <!-- user -->
    <div class="account">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="fa fa-user-circle-o"></i>&nbsp;&nbsp;{{adminUser.nickname}}
          <i class="el-icon-arrow-down el-icon-right" style="font-size: 10px;"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="updateNickname">修改昵称</el-dropdown-item>
          <el-dropdown-item command="updatePassword">修改密码</el-dropdown-item>
          <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <!--修改昵称对话框-->
    <el-dialog title="修改昵称" v-model="dialogUpdateNicknameVisible" >
      <el-form :model="nicknameForm" ref="nicknameForm" :rules="nicknameFormRules">
        <el-form-item prop="nickname" label="昵称">
          <el-input placeholder="请输入昵称" :autofocus="autofocus" v-model="nicknameForm.nickname" @keyup.enter.native="updateNickname()"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogUpdateNicknameVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateNickname('nicknameForm')">确 定</el-button>
      </div>
    </el-dialog>

    <!--修改密码对话框-->
    <el-dialog title="修改密码" v-model="dialogUpdatePasswordVisible">
      <el-form :model="passwordForm" :rules="passwordFormRules" ref="passwordForm" label-width="90px">
        <el-form-item label="原密码" prop="oldPassword">
          <el-input type="password" placeholder="请输入原密码" v-model="passwordForm.oldPassword" :autofocus="autofocus"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="password">
          <el-input type="password" placeholder="请输入新密码" v-model="passwordForm.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPassword">
          <el-input type="password" placeholder="请输入新密码" v-model="passwordForm.checkPassword"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogUpdatePasswordVisible = false">取 消</el-button>
        <el-button type="primary" @click="updatePassword('passwordForm')">确 定</el-button>
      </div>
    </el-dialog>
  </header>
</template>


<script>
import Api from '@/api'
import md5 from 'md5'
export default {
  data() {
    const self = this;
    let validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'));
      } else {
        if (this.passwordForm.checkPass !== '') {
          this.$refs.passwordForm.validateField('checkPassword');
        }
        callback();
      }
    };
    let validateCheckPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.passwordForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      autofocus: true,
      adminUser: {},
      nicknameForm: {
        nickname: ''
      },
      passwordForm: {
        oldPassword: '',
        password: '',
        checkPassword: '',
      },
      nicknameFormRules: {
        nickname: [{
          required: true,
          message: '请输入昵称',
          trigger: 'blur'
        }]
      },
      passwordFormRules: {
        oldPassword: [{
          required: true,
          message: '请输入原密码',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          validator: validatePassword,
          trigger: 'blur'
        }],
        checkPassword: [{
          required: true,
          validator: validateCheckPassword,
          trigger: 'blur'
        }]
      },
      dialogUpdateNicknameVisible: false,
      dialogUpdatePasswordVisible: false,
      style: {}
    }
  },
  computed: {
    currentTopIndex() {
      return this.$parent.currentTopIndex
    },
  },
  created() {
    // if (typeof this.$store.state.admin !== 'string') {
    //   this.adminUser = this.$store.state.admin
    // } else {
    //   this.adminUser = JSON.parse(localStorage.getItem('admin'))
    // }
  },
  methods: {
    clickMenu(index, url) {
      this.$parent.currentTopIndex = index
      this.$router.push(url)

    },
    handleCommand(command) {
      let self = this;
      if (command == 'updateNickname') {
        self.dialogUpdateNicknameVisible = true;
        this.nicknameForm.nickname = this.adminUser.nickname
      } else if (command == 'updatePassword') {
        self.dialogUpdatePasswordVisible = true;
      } else {
        self.$confirm('退出登录?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Admin.logout().then(() => {
            self.$store.commit(types.LOGOUT)
            self.$router.push('/login')
          }).catch(err => this.$message.error(err))
          

        }).catch(() => {
          self.$message('取消登出')
        })
      }
    },
    updateNickname(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          Admin.reviseName(this.nicknameForm.nickname).then(res => {
            this.dialogUpdateNicknameVisible = false
            this.$message(res.message)
            this.adminUser.nickname = this.nicknameForm.nickname
            let j = JSON.parse(localStorage.getItem('admin'))
            j.nickname = this.nicknameForm.nickname
            localStorage.setItem('admin', JSON.stringify(j))
            this.nicknameForm.nickname = ''
          }).catch(err => this.$message.error(err))
        }
      })
    },
    updatePassword(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          Admin.resetPassword(
            md5(this.passwordForm.oldPassword),
            md5(this.passwordForm.password)
          ).then(res => {
            this.dialogUpdatePasswordVisible = false
            this.$message(res.message)
            this.passwordForm.oldPassword = ''
            this.passwordForm.password = ''
            this.passwordForm.checkPassword = ''
          }).catch(err => this.$message.error(err))
        }
      })
    }

  }
}
</script>

<style>
header.header {
  padding-left: 150px;
  height: 50px;
  width: 100%;
  z-index: 8;
  background-color: #fff;
  display: flex;
  /* color: rgba(0, 0, 0, .45); */
  box-sizing: border-box;
  box-shadow: inset 0 -1px 1px rgba(0, 21, 40, .06)
  /* box-shadow: 0 1px 4px rgba(0,21,41,.08); */
}

/* .logo {
  width: 150px;
  height: 50px;
  background: url('../../assets/cms_logo.png') center no-repeat; 
  background-size: contain;
  margin-right: 10px;
  margin-left: 20px;
} */

.menu {
  margin-right: auto;
}

.account {
  font-size: 16px;
  line-height: 50px;
  margin-right: 15px;
  cursor: pointer;
}

/* .account .el-dropdown span * {
  color: inherit;
  font-size: 16px;
} */

.collapse-menu-bar {
  padding: 10px;
  position: absolute;
  top: 0;
  left: 200px;
  font-size: 16px;
  background: #1ab394;
  color: white;
}

.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.menu li {
  float: left;
  cursor: pointer;
}

.menu li.current {
  background-color: #eee;
  color: #000;
}
.menu li a {
  /* color: inherit; */
  color: rgba(0, 0, 0, .5);
  font-size: 16px;
  /* font-weight: bold; */
  text-decoration: none;
  line-height: 50px;
  height: 50px;
  padding: 0 10px;
  display: block;
}
</style>
