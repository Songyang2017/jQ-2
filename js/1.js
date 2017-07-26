$(".swiper-wrapper").css({
						width: $(window).width(),
						height: $(window).height()
					})


		var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'vertical',
	    // loop: true,
	    freeMode:false,
	   
	 	
	 	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		  }, 
		onSlideChangeEnd: function(swiper){ 
			var cols1=true;cols2=true;
			console.log(swiper.activeIndex);
			$('.btn-6').click(function(){
				$('.dis-6').css({
					display:'none'
				});
			})
			if(swiper.activeIndex!=5){
				$('.dis-6').css({
					display:'block'
				});
			}

			var t1=null,t2=null,t3=null;
			function p5(){
				$('.dis-51').css({display:'none'})
				$('.p5-5').css({display:'none'})
				$('.sho-51').addClass('ani bounceInRight animated').css({display:'block'})
				 var t1=setTimeout(function(){
					$('.sho-51').addClass('ani fadeOut animated');
				},900)
				$('.sho-52').addClass('ani bounceInLeft animated').css({display:'block',animationDelay:'1.5s'})
				t2=setTimeout(function(){
					$('.sho-52').addClass('ani fadeOut animated').css({animationDelay:'0s'});
				},2300);
				t3=setTimeout(function(){
					$('.dis-51').css({display:'block'});
				}, 3300)
			}
			$('.p5-3').click(p5)
			if(swiper.activeIndex!=4){
				$('.sho-51').removeClass('ani bounceInRight fadeOut animated').css({display:'none'})
				$('.sho-52').removeClass('ani bounceInLeft fadeOut animated').css({display:'none'})
				clearInterval(t1);
				clearInterval(t2);
			}

			$('.p3-4').click(function(){
				$('.p3-8').css({display:'none'});
				if(cols1){
					$('.p3-7').css({left: '0.6rem',top: '1.4rem'});
					cols1=false;
				}else{
					$('.p3-7').css({top: '3.35rem',left: '-2.85rem'});
					cols1=true;
				}
			})
			$('.p3-5').click(function(){
				$('.p3-8').css({display:'none'});
				if(cols1){
					$('.p3-9').css({display:'block'});
					cols1=false;
				}else{
					$('.p3-9').css({display:'none'});
					cols1=true;
				}
			})
			$('.p3-6').click(function(){
				$('.p3-8').css({display:'none'});
				if(cols2){
					$('.p3-7').css({top: '1rem',left: '-4rem'});
					cols2=false;
				}else{
					$('.p3-7').css({top: '3.35rem',left: '-2.85rem'});
					cols2=true;
				}
			})


			var startX,endX,n=0,a=0,b=0;
			$(document).on('touchstart',function(e){
				startX=e.originalEvent.touches[0].pageX;
			});
			$(document).on('touchmove',function(e){
				e.preventDefault();
				endX=e.originalEvent.changedTouches[0].pageX;
				a=parseInt((endX-startX)/10);
				if(a>b){
				n--;
				if(n<0){
					n=71;
				}
			}else if(a==b){
				n=n;
			}else{
				n++;
				if(n>71){
					n=0;
				}
			}
			b=a;
			$('.p4-5 img').eq(n).show().siblings().hide();
			})
			var time=null,i=0
			$('.p4-2').click(function(){
				if(cols1){
					time=setInterval(function(){
					i++
					$('.p4-5 img').eq(i).show().siblings().hide();
					if(i>=71){
						i=0;
					}
					},50)
					cols1=false;
				}else{
					clearInterval(time);
					cols1=true;
				}
				
			})
			$('.p4-3').click(function(){
				
			})
			


		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		  	} 
		  }) 




