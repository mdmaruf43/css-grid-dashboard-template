//Chart 
let options = {
	series: [
		{
			name: 'Net Profit',
			data: [44, 55, 57, 61, 58, 63, 60, 66],
		},
		{
			name: 'Revenue',
			data: [76, 22, 101, 98, 87, 105, 92, 114, 94],
		},
	],
	chart: {
		type: 'bar',
		height: 250,
		sparkline: {
			enabled: true,
		},
	},
	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: '55%',
			endingShape: 'rounded',
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		show: true,
		width: 2,
		colors: ['transparent'],
	},
	xaxis: {
		categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
	},
	yaxis: {
		title: {
			text: "$ (thousands)",
		},
	},
	fill: {
		opacity: 1,
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return "$ " + val + " thousands";
			},
		},
	},

};

let chart = new ApexCharts(document.querySelector("#apex1"), options);

chart.render();

// Sidebar Toggle Codes

var sidebarOpen = false;
var sidebar = document.getElementById('sidebar');
var sidebarCloseIcon = document.getElementById('sidebarIcon');

function toggleSidebar() {
	if(!sidebarOpen) {
		sidebar.classList.add('sidebar_responsive');
		sidebarOpen = true
	}
}

function closeSidebar() {
	if(sidebarOpen) {
		sidebar.classList.remove('sidebar_responsive');
		sidebarOpen = false;
	}
}

// Sticky Navbar
$(document).ready(function() {
	// grab the initial top offset of the navigation 
	   var stickyNavTop = $('.stickyNavbar').offset().top;
	   
	   // our function that decides weather the navigation bar should have "fixed" css position or not.
	   var stickyNav = function(){
		var scrollTop = $(window).scrollTop(); // our current vertical position from the top
			 
		// if we've scrolled more than the navigation, change its position to fixed to stick to top,
		// otherwise change it back to relative
		if (scrollTop > stickyNavTop) { 
			$('.stickyNavbar').addClass('sticky');
		} else {
			$('.stickyNavbar').removeClass('sticky'); 
		}
	};

	stickyNav();
	// and run it again every time you scroll
	$(window).scroll(function() {
		stickyNav();
	});
});

// hero date picker
$( function() {
    $( "#datepickerOne" ).datepicker();
} );
$( function() {
    $( "#datepickerTwo" ).datepicker();
} );

//magnifing Popup
$(document).ready(function() {
	$('.gallery-img').magnificPopup({
		type:'image',
		delegate: 'a',
		gallery: {
			enabled: true,
		}
	});
});



