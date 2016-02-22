//	Kyochi v1.1, Copyright 2014, Cloud Eight, http://www.cloud-eight.com
//	====================================================================

//	Table of Contents
//	==================================================
//		#Full Screen Cover
//		#Scroll To Content
//		#Populate Menu Toggle
//		#Navigation Toggle
//		#FitVids
//		#Featured Preview
//		#Post Comments


//	#Full Screen Cover
//	==================================================

	function adjustHeaderHeight() {
		var	winWidth	=	$(window).width(),
			winHeight	=	$(window).height();

		$('.home-template #header').css({ 'height': winHeight });

		if (winWidth < 1150) {
			$('.home-template #header').css({ 'height': '900px' });
		}
	}

	$(document).ready(function() {
		adjustHeaderHeight();
	});

	$(window).resize(function() {
		adjustHeaderHeight();
	});


//	#Scroll To Content
//	==================================================

	$('#scroll-to-content').click(function() {
		var headerHeight	=	$('#header').height();

		$('html, body').animate({ scrollTop: headerHeight }, 1600, 'easeInOutQuart');
		return false;
	});


//	#Populate Menu Toggle
//	==================================================

	$(document).ready(function() {
		$('#no-touch-navigation .links a').each(function() {
			var	link_URL	=	$(this).attr('href'),
				link_text	=	$(this).html();

			$('#touch-navigation .links').append('<li class="tm-small"><a href="' + link_URL + '" target="_self">' + link_text + '</a></li>')
		});

		$('#no-touch-navigation .social-networks a').each(function() {
			var	network_URL		=	$(this).attr('href'),
				network_text	=	$(this).html();

			$('#touch-navigation .social-networks').append('<li><a href="' + network_URL + '" target="_self">' + network_text + '</a></li>')
		});
	});


//	#Navigation Toggle
//	==================================================

	$(document).ready(function() {
		$('#navigation-toggle').click(function(e) {
			e.preventDefault();

			$(this).next('#menu-slide').slideToggle();
		});
	});


//	#FitVids
//	==================================================

	$(document).ready(function(){
		$('.post').fitVids();
	});


//	#Featured Preview
//	==================================================

	$(document).ready(function() {
		$('.featured-preview').each(function() {
			if ($(this).find('img, embed, iframe').length < 1) {
				$(this).parent().siblings('.one-half-percent.alpha').removeClass('one-half-percent alpha');
				$(this).parent().remove();
			}
		});
	});


//	#Post Comments
//	==================================================

	var disable_comments		=	false, // Possible values: true, false
		comment_plugin			=	'disqus', // Possible values: 'disqus', 'facebook'
		disqus_shortname		=	'';

	if (disable_comments) {
		$('#comment-plugin').remove();
	} else {
		if (comment_plugin == 'disqus') {
			$('.fb-comments').remove();

			if (!disqus_shortname || disqus_shortname == '' || disqus_shortname.length < 1) {
				$('#comment-plugin').remove();
			} else {
				(function() {
					var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
					dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
					(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
				})();
			}
		} else if (comment_plugin == 'facebook') {
			$('#disqus_thread').remove();
		} else {
			$('#comment-plugin').remove();
		}
	}
