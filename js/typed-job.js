var options = {
	strings: ['&lt;b&gt;Desarrollador Web&lt;/b&gt;'],
	startDelay: 3500,
	typeSpeed: 120,
	onComplete: (self) => {
		window.setTimeout(() => {
			document.querySelector(".typed-cursor").style.display = "none";
			let job = document.querySelector("#typed-job");
			job.innerHTML = "Desarrollador Web";
			job.classList.add("job-after-typing", "animate__animated", "animate__bounceIn");
		}, 800);
	}
};

var typed = new Typed('#typed-job', options);