const projectsImg = document.querySelectorAll('.project-img');

const swalWithBootstrapButtons = Swal.mixin({
	customClass: {
	  confirmButton: 'btn btn-outline-light project-btn',
	},
	buttonsStyling: false
});

projectsImg.forEach(projectImg => projectImg.addEventListener('click', () => {
	if (window.innerWidth >= 992)
		showProjectImgSwal(projectImg.src, projectImg.alt);
}));

function showProjectImgSwal(imgSrc, imgAlt) {
	btnText = window.location.pathname == "/" ? 'Cerrar' : 'Close';

	swalWithBootstrapButtons.fire({
		imageUrl: imgSrc,
		imageAlt: imgAlt,
		width: "75%",
		confirmButtonText: btnText
	});
}