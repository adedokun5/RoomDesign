//Author of Script : Adedokun julius Ayobami
//Email : adedokunjuliusayobami@gmail.com 
//Date_Created : 03 Nov 2022
//Date_Modified : 10 Nov 2022

window.onscroll = function () {
	navigation();
}

function navigation() 
{
	var document_height = document.documentElement.scrollTop;
	if ( document_height > 51 ) 
	{
		document.getElementById('nav').style.display = 'none';
	} 
	else 
	{
		document.getElementById('nav').style.display = 'block';
	}
}

var img_arr = [ 'desktop-image-hero-1.jpg', 'desktop-image-hero-2.jpg', 'desktop-image-hero-3.jpg' ];

var services_arr = [
	[ 
		'Discover innovative<br class="small-screen-none"> ways to decorate',
 		'We provide unmatched quality, comfort, and style for property <br class="small-screen-none"> owners across the country. Our experts combine form and <br class="small-screen-none"> function in bringing your vision to life. Createa room in your <br class="small-screen-none"> own style with our collection and make your property a <br class="small-screen-none"> reflection of you and what you love.' 
 	], 
 
	[ 
		'We are available all <br class="small-screen-none"> across the globe ',
  	"with stores all over the world, it's easy for you to find furniture <br class='small-screen-none'> for your home or place of business. locally, we're in most <br class='small-screen-none'> major cities throughout the country. find the branch nearest<br class='small-screen-none'> you using our store locator. Any questions? Don't hesitate to <br class='small-screen-none'> contact us today."  
	],

	[ 
 		'Manufactured with <br class="small-screen-none"> the best materials',
  	'Our modern furniture store provide a high level of quality. Our <br class="small-screen-none"> company has invested in advanced technology to ensure that <br class="small-screen-none"> every product is made as perfect and as consistent as <br class="small-screen-none"> posible. With three decades of experience in this industry, we <br class="small-screen-none"> understand what customers want for their home and office. ' 
	] 
];

var index = 0;
var img_arr_length = img_arr.length - 1;

function previousBtn() 
{
	if( index != 0 )
	{
		index--;
		document.getElementById('slider_image').src="assets/images/"+img_arr[ index ];
		document.getElementById('title').innerHTML = services_arr[ index ][ 0 ];
		document.getElementById('details').innerHTML = services_arr[ index ][ 1 ];
	}
}

function nextBtn() 
{
	if( index != img_arr_length )
	{	
		index++;
		document.getElementById('slider_image').src="assets/images/"+img_arr[ index ];
		document.getElementById('title').innerHTML = services_arr[ index ][ 0 ];
		document.getElementById('details').innerHTML = services_arr[ index ][ 1 ];
	}
}