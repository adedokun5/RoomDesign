//Author of Script : Adedokun julius Ayobami
//Email : adedokunjuliusayobami@gmail.com 
//Date_Created : 03 Nov 2022
//Date_Modified : 03 Nov 2022


var img_arr = [ 'desktop-image-hero-1.jpg', 'desktop-image-hero-2.jpg', 'desktop-image-hero-3.jpg' ];

var services_arr = [

	[ 
		'Discover innovative<br> ways to decorate',
 		'We provide unmatched quality, comfort, and style for property <br> owners across the country. Our experts combine form and <br> function in bringing your vision to life. Createa room in your <br> own style with our collection and make your property a <br> reflection of you and what you love.' 
 	], 
 
	[ 
		'We are available all <br> across the globe ',
  	"with stores all over the world, it's easy for you to find furniture <br> for your home or place of business. locally, we're in most <br> major cities throughout the country. find the branch nearest<br> you using our store locator. Any questions? Don't hesitate to <br> contact us today."  
	],

	[ 
 		'Manufactured with <br> the best materials',
  	'Our modern furniture store provide a high level of quality. Our <br> company has invested in advanced technology to ensure that <br> every product is made as perfect and as consistent as <br> posible. With three decades of experience in this industry, we <br> understand what customers want for their home and office. ' 
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