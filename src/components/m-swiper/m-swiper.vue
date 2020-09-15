<template>
	<view class="swiper-box">
		<swiper class="swiper" :indicator-dots="false" :autoplay="true" :interval="2000" :duration="500" :circular="true"
		 @change="change">
			<swiper-item v-for="(item,index) in infos" :key="index">
				<view class="swiper-item">
					<image class="swiper-item" :src="item.src"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="dtos">
					<view class="dto" :class="{'dto-active':index===curIndex}" v-for="(item,index) in infos" :key="index" :style="{'background-color':colors}"></view>
				</view>
			</view>
		</template>
		
		<script>
			export default {
				props: {
					infos: Array,
					colors:{
						type:String,
						default:'#e5e5e5'
					}
				},
		data() {
			return {
				curIndex: 0,
			};
		},
		methods: {
			change(s) {
				this.curIndex = s.detail.current;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-box {
		width: 100%;
		height: 370upx;
		background: #fff;
	}

	.swiper {
		width: 690upx;
		height: 300upx;
		margin: 25upx auto 0;
	}

	.swiper-item {
		width: 690upx;
		height: 300upx;
	}

	.dtos {
		display: flex;
		justify-content: center;
		margin-top: 25upx;

		.dto {
			width: 13upx;
			height: 13upx;
			border-radius: 500upx;
			margin: 0 7upx;
			transition: width 0.5s;
		}

		.dto-active {
			background: #c2c2c2;
			width: 25upx;
		}
	}
</style>
