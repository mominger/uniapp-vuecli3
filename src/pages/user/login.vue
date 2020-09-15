<template>
	<view>
		<view class="input-parent">
			<input class="uni-input" v-model="formData.username"  
					  placeholder="请输入用户名" />
		</view>
		<view  class="input-parent">
			<input class="uni-input" v-model="formData.password" 
					  type="password" placeholder="请输入密码" />
		</view>
		<view class="button-parent">
				<button type="primary" @tap="loginOk">点击这里模拟登录</button>
		</view>
	
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	import {getByThridparty,getLoginInfo,loginGetUserInfo} from '@/apis/user.js'
	
	export default {
		onLoad(query) {
			this.initRouteData(query);
		},
		data() {
			return {
				redirectRoute: {},
				routeQuery: {},
				formData:{
					client_id:this.$mConfig.CLIENT_ID,
					client_secret:this.$mConfig.CLIENT_SECRET,
					username:'13814103351S1',
					password:'123456'					
				}
			}
		},
		onReady(){
			console.info("...onReady...")
		},
		methods: {
			//初始化路由数据
			initRouteData(query) {
				if (query.redirectUrl) {
					this.redirectRoute.path = query.redirectUrl;
					delete query.redirectUrl;
					this.routeQuery = query;
				}
			},
		  async loginOk(){
				// 模拟登录
				let _this = this;
				
				try{
					let testdata= await getByThridparty();

					let data= await getLoginInfo({data:_this.formData});
					_this.setToken({token:data.responseEntity.access_token})
					
					_this.$mRouter.redirectTo({
						route: _this.redirectRoute,
						query: _this.routeQuery
					});
				
				}catch(e){
					_this.$throw(e)
				}
	
			},
			 ...mapMutations({
			        setToken: 'user/SET_TOKEN',
			        setUserInfo: 'user/SET_USERINFO'
			      })
		}
	}
</script>

<style lang="scss" scoped>
  .input-parent{
	  padding:20upx;
	  margin:20upx;
	  border:#d1d1d1 1px solid;
	  border-radius: 4upx;
  }
  .button-parent{
	  padding:20upx;
  }
</style>
