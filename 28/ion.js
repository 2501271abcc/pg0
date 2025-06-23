document.addEventListener("DOMContentLoaded", () => {
	const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
		if (entry.isIntersecting) {
        entry.target.classList.add("is-animated");
        obs.unobserve(entry.target);
		}
    });
	}, { threshold: 0.1 });

	document.querySelectorAll(".anim-box.slidein").forEach(el => observer.observe(el));

	document.querySelectorAll(".anim-box.kiran").forEach(item => {
    item.addEventListener("click", () => {
		const link = item.querySelector("a");
		if (link) window.location.href = link.href;
    });
	});
});
