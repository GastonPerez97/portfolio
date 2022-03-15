var options = {
	strings: ['&lt;strong&gt;Desarrollador Web&lt;/strong&gt;'],
	startDelay: 2000,
	typeSpeed: 60,
	onComplete: (self) => {
		window.setTimeout(() => {
			document.querySelector(".typed-cursor").style.display = "none";
			let job = document.querySelector("#typed-job");
			job.innerHTML = "Desarrollador Web";
			job.classList.add("job-after-typing", "animate__animated", "animate__bounceIn");
		}, 600);
	}
};

var typed = new Typed('#typed-job', options);