<script>
	export default {	
		onLaunch: function(query) {
			console.log('App Launch')
			
			// #ifdef H5 || MP-WEIXIN
			this.$mAppEntry.mainRouteAuth(query);
			// #endif
		},
		onLoad() {
			
		},
		onShow: function() {		
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onError(err) {
			let arr = JSON.stringify(err).split("\\n");   
			let log = {  
				message : (arr.length > 1) ? arr[1] : '',  
				stack: err  
			}    
			
			this.$throw(log)  
	    }
	}
</script>

<style lang="scss">
	body{
		background:$uni-bg-color;
	}
	*{
		margin:0;
		padding:0;
	}
	/*每个页面公共css */
</style>
