// ______________ SWITCHER-toggle ______________//


	/*Theme-layout*/
	$(document).on("click", '#background-left1', function () {
		$('body').addClass('light-mode');
		$('body').removeClass('gradient-hormenu');
		$('body').removeClass('dark-mode');
		$('body').removeClass('color-header');
		$('body').removeClass('dark-header');
		$('body').removeClass('dark-menu');
		$('body').removeClass('gradient-menu');
		$('body').removeClass('gradient-header');
		$('body').removeClass('color-menu');
		return false;
	  });

	  
	$(document).on("click", '#background-left2', function () {
		$('body').addClass('dark-mode');
		$('body').removeClass('light-mode');
		$('body').removeClass('light-menu');
		$('body').removeClass('color-menu');
		$('body').removeClass('dark-header');
		$('body').removeClass('color-header');
		$('body').removeClass('light-header');
		$('body').removeClass('dark-menu');
		$('body').removeClass('light-hormenu');
		$('body').removeClass('gradient-hormenu');
		$('body').removeClass('gradient-menu');
		return false;
	  });


	  /*Header Style*/
	$(document).on("click", '#background1', function () {
		$('.sidebar-mini').addClass('light-header');
		$('.sidebar-mini').removeClass('color-header');
		$('.sidebar-mini').removeClass('dark-header');
		$('.sidebar-mini').removeClass('gradient-header');
		return false;
	  });

	  $(document).on("click", '#background2', function () {
		$('.sidebar-mini').addClass('color-header');
		$('.sidebar-mini').removeClass('light-header');
		$('.sidebar-mini').removeClass('dark-header');
		 $('.sidebar-mini').removeClass('gradient-header');
		return false;
	  });

	  $(document).on("click", '#background3', function () {
		$('.sidebar-mini').addClass('dark-header');
		$('.sidebar-mini').removeClass('color-header');
		$('.sidebar-mini').removeClass('light-header');
		 $('.sidebar-mini').removeClass('gradient-header');
		return false;
	  });

	  $(document).on("click", '#background11', function () {
		$('.sidebar-mini').addClass('gradient-header');
		 $('.sidebar-mini').removeClass('dark-header');
		$('.sidebar-mini').removeClass('color-header');
		$('.sidebar-mini').removeClass('light-header');
		return false;
	  });


	  /*Leftmenu Style*/
	$(document).on("click", '#background4', function () {
		$('.sidebar-mini').addClass('light-menu');
		$('.sidebar-mini').removeClass('color-menu');
		$('.sidebar-mini').removeClass('dark-menu');
		$('.sidebar-mini').removeClass('gradient-menu');
		$('.sidebar-mini').removeClass('light-hormenu');
		 $('.sidebar-mini').removeClass('dark-hormenu');
		 $('.sidebar-mini').removeClass('color-hormenu');
		return false;
	  });

	  $(document).on("click", '#background5', function () {
		$('.sidebar-mini').addClass('color-menu');
		$('.sidebar-mini').removeClass('light-menu');
		$('.sidebar-mini').removeClass('dark-menu');
		$('.sidebar-mini').removeClass('gradient-menu');
		$('.sidebar-mini').removeClass('light-hormenu');
		 $('.sidebar-mini').removeClass('dark-hormenu');
		 $('.sidebar-mini').removeClass('color-hormenu');
		return false;
	  });

	  $(document).on("click", '#background6', function () {
		$('.sidebar-mini').addClass('dark-menu');
		$('.sidebar-mini').removeClass('color-menu');
		$('.sidebar-mini').removeClass('light-menu');
		$('.sidebar-mini').removeClass('gradient-menu');
		$('.sidebar-mini').removeClass('light-hormenu');
		 $('.sidebar-mini').removeClass('dark-hormenu');
		 $('.sidebar-mini').removeClass('dark-hormenu');
		return false;
	  });
	  $(document).on("click", '#background10', function () {
		$('.sidebar-mini').addClass('gradient-menu');
		$('.sidebar-mini').removeClass('color-menu');
		$('.sidebar-mini').removeClass('light-menu');
		$('.sidebar-mini').removeClass('dark-menu');
		$('.sidebar-mini').removeClass('light-hormenu');
		 $('.sidebar-mini').removeClass('dark-hormenu');
		 $('.sidebar-mini').removeClass('dark-hormenu');
		return false;
	  });


	  /*Horizontal Style*/
	  
	$(document).on("click", '#background7', function () {
		$('body').addClass('light-hormenu');
		$('body').removeClass('color-hormenu');
		$('body').removeClass('dark-hormenu');
		$('body').removeClass('gradient-hormenu');
		$('body').removeClass('dark-menu');
		$('body').removeClass('color-menu');
		$('body').removeClass('light-menu');
		$('body').removeClass('gradient-menu');
		return false;
	  });

	  
	$(document).on("click", '#background8', function () {
		$('body').addClass('color-hormenu');
		$('body').removeClass('light-hormenu');
		$('body').removeClass('dark-hormenu');
		$('body').removeClass('gradient-hormenu');
		$('body').removeClass('dark-menu');
		$('body').removeClass('color-menu');
		$('body').removeClass('light-menu');
		$('body').removeClass('gradient-menu');
		return false;
	  });

	  $(document).on("click", '#background9', function () {
		$('body').addClass('dark-hormenu');
		$('body').removeClass('color-hormenu');
		$('body').removeClass('light-hormenu');
		$('body').removeClass('gradient-hormenu');
		$('body').removeClass('dark-menu');
		$('body').removeClass('color-menu');
		$('body').removeClass('light-menu');
		$('body').removeClass('gradient-menu');
		return false;
	  });

	  $(document).on("click", '#background13', function () {
		$('body').addClass('gradient-hormenu');
		$('body').removeClass('dark-hormenu');
		$('body').removeClass('color-hormenu');
		$('body').removeClass('light-hormenu');
		$('body').removeClass('dark-menu');
		$('body').removeClass('color-menu');
		$('body').removeClass('light-menu');
		$('body').removeClass('gradient-menu');
		return false;
	  });

	   /*Layout-width Styles*/
	$(document).on("click", '#background14', function () {
		$('body').addClass('layout-fullwidth');
		$('body').removeClass('layout-boxed');
		$('body').removeClass('light-hormenu');
		$('body').removeClass('color-hormenu');
		$('body').removeClass('dark-hormenu');
		$('body').removeClass('gradient-hormenu');
		$('body').removeClass('dark-menu');
		$('body').removeClass('color-menu');
		$('body').removeClass('light-menu');
		$('body').removeClass('gradient-menu');
		return false;
	  });

	  $(document).on("click", '#background15', function () {
		$('body').addClass('layout-boxed');
		$('body').removeClass('layout-fullwidth');
		$('body').removeClass('color-hormenu');
		$('body').removeClass('light-hormenu');
		$('body').removeClass('dark-hormenu');
		$('body').removeClass('gradient-hormenu');
		$('body').removeClass('dark-menu');
		$('body').removeClass('color-menu');
		$('body').removeClass('light-menu');
		$('body').removeClass('gradient-menu');
		return false;
	  });


	   /*Header-Position Styles*/
	$(document).on("click", '#background16', function () {
		$('body').addClass('fixed-layout');
		$('body').removeClass('scrollable-layout');
		$('body').removeClass('light-hormenu');
		$('body').removeClass('color-hormenu');
		$('body').removeClass('dark-hormenu');
		$('body').removeClass('gradient-hormenu');
		$('body').removeClass('dark-menu');
		$('body').removeClass('color-menu');
		$('body').removeClass('light-menu');
		$('body').removeClass('gradient-menu');
		return false;
	  });

	  $(document).on("click", '#background17', function () {
		$('body').addClass('scrollable-layout');
		$('body').removeClass('fixed-layout');
		$('body').removeClass('color-hormenu');
		$('body').removeClass('light-hormenu');
		$('body').removeClass('dark-hormenu');
		$('body').removeClass('gradient-hormenu');
		$('body').removeClass('dark-menu');
		$('body').removeClass('color-menu');
		$('body').removeClass('light-menu');
		$('body').removeClass('gradient-menu');
		return false;
	  });