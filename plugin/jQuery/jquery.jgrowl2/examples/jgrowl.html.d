<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en-US" xml:lang="en-US" xmlns="http://www.w3.org/1999/xhtml" debug="true">
	<head>
		<title>jGrowl Tests</title>
		<link rel="stylesheet" href="../jquery.jgrowl.css" type="text/css"/>
		<style type="text/css">

			div.jGrowl div.manilla {
				background-color: 		#FFF1C2;
				color: 					navy;
			}
			
			div.jGrowl div.smoke {
				background: url(smoke.png) no-repeat;
				-moz-border-radius: 	0px;
				-webkit-border-radius:	0px;
				width: 					280px;
				height: 				55px;
				overflow: 				hidden;
			}

			div.jGrowl div.flora {
				background: 			#E6F7D4 url(flora-notification.png) no-repeat;
				-moz-border-radius: 	0px;
				-webkit-border-radius:	0px;
				opacity: 				1;
				filter: 				alpha(opacity = 100);
				width: 					270px;
				height: 				90px;
				padding: 				0px;
				overflow: 				hidden;
				border-color: 			#5ab500;
			}

			div.jGrowl div.flora div.message {
				padding: 				5px;
				color: 					#000;
			}
			
			div.jGrowl div.flora div.header {
				background: 			url(flora-header.png) no-repeat;
				padding: 				5px;
			}

			div.jGrowl div.flora div.close {
				background: 			url(flora-close.png) no-repeat;
				padding: 				5px;
				color: 					transparent;
				padding: 				0px;
				margin: 				5px;
				width:					17px;
			}
			
			div.jGrowl div.iphone {
				font-family: 			"Helvetica Neue", "Helvetica";
				font-size: 				12px;
				background: 			url(iphone.png) no-repeat;
				-moz-border-radius: 	0px;
				-webkit-border-radius:	0px;
				opacity: 				.90;
				filter: 				alpha(opacity = 90);
				width: 					245px;
				height: 				137px;
				padding: 				0px;
				overflow: 				hidden;
				border-color: 			#5ab500;
				color: 					#fff;
			}

			div.jGrowl div.iphone div.message {
				padding-top: 			0px;
				padding-bottom: 		7px;
				padding-left: 			15px;
				padding-right: 			15px;
			}
			
			div.jGrowl div.iphone div.header {
				padding: 				7px;
				padding-left: 			15px;
				padding-right: 			15px;
				font-size: 				17px;
			}

			div.jGrowl div.iphone div.close {
				display: 				none;
			}
			
			div#random {
				width: 					1000px;
				background-color: 		red;
				line-height: 			60px;
			}

		</style>
		<script type="text/javascript" src="../jquery-1.2.6.js"></script>
		<script type="text/javascript" src="./jquery.ui.all.js"></script>
		<script type="text/javascript" src="../jquery.jgrowl.js"></script>
		<script type="text/javascript">

		// In case you don't have firebug...
		if (!window.console || !console.firebug) {
			var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
			window.console = {};
			for (var i = 0; i < names.length; ++i) window.console[names[i]] = function() {};
		}

		(function($){

			$(document).ready(function(){

				// This value can be true, false or a function to be used as a callback when the closer is clciked
				$.jGrowl.defaults.closer = function() {
					console.log("Closing everything!", this);
				};
				
				// A callback for logging notifications.
				$.jGrowl.defaults.log = function(e,m,o) {
					$('#logs').append("<div><strong>#" + $(e).attr('id') + "</strong> <em>" + (new Date()).getTime() + "</em>: " + m + " (" + o.theme + ")</div>")
				}				
				
				$.jGrowl("Hello world!");
				$.jGrowl("This notification will live a little longer.", { life: 1000 });
				$.jGrowl("Sticky notification with a header", { header: 'A Header', sticky: true });
				$.jGrowl("Custom theme, and a whole bunch of callbacks...", { 
					sticky: true,
					theme:  'manilla',
					speed:  'slow',
					beforeOpen: function(e,m,o) {
						console.log("I am going to be opened!", this);
					},
					open: function(e,m,o) {
						console.log("I have been opened!", this);
					},
					beforeClose: function(e,m,o) {
						console.log("I am going to be closed!", this);
					},
					close: function(e,m,o) {
						console.log("I have been closed!", this);
					}
				});

				$.jGrowl("Custom animation test...", { 
					theme: 'manilla',
					sticky: true,
					speed: 'slow',
					animateOpen: { 
						height: "show"
					},
					animateClose: { 
						height: "hide"
					}
				});
				
				$.jGrowl("Looks like the iPhone.", { 
					header: 'iPhone',
					theme: 'iphone',
					sticky: true
				});

				
				$.jGrowl.defaults.closerTemplate = '<div>hide all notifications</div>';
				
				$('#test1').jGrowl("Testing a custom container (this one is sticky, and will also be prepended).", {
					sticky: true, 
					glue: 'before',
					speed: 2000,
					easing: 'easeInOutElastic',
					animateOpen: { 
						height: "show",
						width: "show"
					},
					animateClose: { 
						height: "hide",
						width: "show"
					}
				});

				$('#test1').jGrowl("Another custom container test.", { 
					glue: 'before',
					speed: 2000,
					easing: 'easeInOutExpo',
					animateOpen: { 
						height: "show",
						width: "show"
					},
					animateClose: { 
						height: "hide",
						width: "show"
					}
				});
				
				$('#test2').jGrowl("Trying a background image.", { 
					theme: 'smoke',
					sticky: true,
					closer: false
				});
				
				$('#test2').jGrowl("This demo notification uses images from the UI flora theme to create similar styled notifications.", { 
					theme: 'flora',
					header: "Flora makes Fauna",
					sticky: true,
					closer: false
				});
			});
		})(jQuery);

		</script>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
	<body>
		<h1>jGrowl Tests</h1>

		<p><a href="javascript:void(0);" onclick="$.jGrowl('One more message...');">Click here to create a message on demand in the #jGrowl container in the top-right corner of the screen.</a></p>
		
		<p><a href="javascript:void(0);" onclick="$('#test1').jGrowl('shutdown');">Shutdown jGrowl for the #test1 container in the top-left corner of the screen.</a></p>
		
		<div id="random">An extra wide node, watch as the jGrowl containers stay put in the corners of the screen..</div>

		<div id="logs"><h3>Log:</h3></div>
		
		<hr />
				
		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam porttitor turpis eu sem. Phasellus pulvinar, purus eget euismod imperdiet, quam est sollicitudin nisl, sed vulputate urna magna vel risus. Aliquam erat volutpat. Ut nulla mi, sagittis a, egestas ut, auctor vitae, nulla. Sed ut metus vel tellus scelerisque dictum. Suspendisse felis odio, eleifend a, feugiat a, interdum eget, lorem. Aliquam facilisis. Nulla neque enim, bibendum vitae, convallis vitae, pretium a, felis. Nunc diam sapien, iaculis sed, vestibulum in, pellentesque a, tellus. Mauris molestie risus non lectus. In a arcu. Etiam pulvinar, nibh et imperdiet egestas, diam pede lobortis risus, ac facilisis justo mauris eu ipsum. Aliquam nibh tortor, venenatis eu, pretium at, condimentum non, enim. Integer vitae urna. Duis semper, mauris ac egestas tristique, quam ipsum viverra risus, eget tempor libero turpis id nisl. Fusce pede. Nam varius.</p>

		<p>Phasellus placerat suscipit neque. In porttitor mi vel felis. Sed vel ante. Vestibulum lectus mauris, ullamcorper id, luctus vitae, molestie a, metus. Fusce eu diam in libero fermentum sagittis. Quisque eget mi non purus convallis dignissim. Nam id lectus. Maecenas sit amet massa id metus hendrerit euismod. Phasellus porta tempor odio. Aliquam erat volutpat. Sed ut quam a dolor fermentum vehicula. Nulla et metus. Nulla ornare lorem sed augue. Nulla urna. Donec ligula. Nulla blandit ultrices pede.</p>

		<p>Etiam blandit scelerisque diam. Donec nisl orci, accumsan sed, sodales vel, dictum ac, mauris. Aliquam non nunc eget magna imperdiet condimentum. Nunc sem. Etiam tincidunt. Quisque eros tortor, ultricies at, condimentum sit amet, feugiat vel, lectus. Morbi quis enim a ligula tristique consequat. Praesent nec massa nec urna cursus pretium. Phasellus porttitor. In adipiscing. Morbi ultrices.</p>

		<p>Cras eget elit. Duis placerat diam in sapien. Duis tempor. Sed tincidunt semper augue. Nam varius gravida ante. Etiam ultricies iaculis neque. Nam lacinia, augue eget commodo auctor, pede lorem lacinia leo, eu rhoncus est purus nec ligula. Sed congue feugiat sem. Nulla bibendum, purus et sodales dignissim, elit mauris pulvinar turpis, a pulvinar sem diam a magna. Suspendisse ut purus sit amet felis suscipit lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum pharetra dictum nisl. Fusce odio metus, tempor a, pretium vel, ultrices quis, ante. Pellentesque ut purus sit amet mi mattis volutpat.</p>

		<p>Maecenas eu elit. Nam gravida. In leo. Morbi ante est, bibendum ut, pulvinar id, rhoncus vel, nisl. Nunc purus. Praesent nec nisl. Vivamus accumsan eleifend leo. Integer a enim non dolor convallis sagittis. Phasellus vel turpis. Phasellus pulvinar lectus eu sapien sollicitudin pharetra. In sollicitudin porttitor turpis. Donec feugiat, odio id egestas iaculis, lacus odio sagittis justo, a pharetra sem nunc eget orci. Donec ipsum nibh, fringilla sed, imperdiet id, vehicula eu, mi. Pellentesque tincidunt sodales diam. Pellentesque pede dolor, accumsan sit amet, dictum et, posuere eu, diam. Nulla lacinia turpis et neque. Ut ut augue. Phasellus ut metus. Nam in tellus.</p>
		
		<div id="test1" class="top-left"></div>
		<div id="test2" class="bottom-left"></div>
	</body>
</html>