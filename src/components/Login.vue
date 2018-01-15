<template>
	<div class="login">
		<el-form :model="adminUser" :rules="rules" ref="adminUser">
			<strong class="title"></strong>
			<el-form-item prop="username">
				<el-input placeholder="用户名" v-model="adminUser.username"></el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input type="password" placeholder="密码" v-model="adminUser.password" @keyup.enter.native="login('adminUser')"></el-input>
			</el-form-item>
			<div class="login-btn">
				<el-button type="primary" @click="login('adminUser')">登录</el-button>
			</div>
		</el-form>
	</div>
</template>

<script>
	import md5 from 'md5'
	import Api from '@/api'
	// import { Admin } from '@/api'
	// import * as types from '@/vuex/types'
	// import constant from '@/api/Constants'

	export default {
		data() {
			return {
				adminUser: {
					username: '',
					password: ''
				},
				rules: {
					username: [
						{ required: true, message: '请输入用户名', trigger: 'blur' }
					],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					]
				}
			}
		},
		methods: {
			async login(formName) {
				let self = this;
				let promise = new Promise((resolve, reject) => {
					self.$refs[formName].validate(valid => {
						if (valid) {
							resolve(true);
						} else {
							reject('error')
						}
					})
				})
				promise.then(success => {
					let sendData = self.adminUser
					sendData.password = md5(sendData.password)
					console.log(sendData);
					Api.login(sendData.username, sendData.password).then(res => {
						let data = res.data
						// this.$store.commit(types.USERDATA, res.data)
						this.$router.push('/index')
						
					}).catch(err=>{
						this.$message.error(err)
					})
				}, error => {
					this.$message(data.message)
				})
			}
		}
	}

</script>

<style>
	html {
		background-color: #f1f1f1;
	}

	.login {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 360px;
		margin: -160px 0 0 -180px;
		border-radius: 5px;
	}

	.login .title {
		display: block;
		text-align: center;
		background-color: transparent;
		font-size: 20px;
		font-weight: bold;
		color: #72777c;
		/* text-shadow: 0 0 1px #72777c; */
		margin-bottom: 15px;
	}

	.login form {
		background-color: white;
		border-radius: 4px;
		padding: 20px 30px 30px;
	}

	.login .el-input {
		width: 100%!important;
	}

	.login .captcha input {
		border-top-right-radius: 4px !important;
		border-bottom-right-radius: 4px !important;
	}

	.login .captcha .el-input-group__append {
		border: none;
		width: 40%;
	}

	.login-btn button {
		margin-top: 15px;
		width: 100%;
	}
</style>
