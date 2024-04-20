export function loading(){
	// https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
	document.addEventListener("readystatechange", (event) => {
		if (event.target.readyState === "loading") {
			window.scrollTo(0, 0);
			let loading = document.querySelector(".loading");
			let monkey = document.querySelector(".monkey-gif");
			let html = document.querySelector("html");
			loading.style.opacity = "1";
			loading.style.zIndex = "1";
			
			monkey.style.zIndex = "1";
			monkey.style.width = "75%";

			html.style.overflow = "hidden";
		} else if (event.target.readyState === "complete") {
			let loading = document.querySelector(".loading");
			let monkey = document.querySelector(".monkey-gif");
			let html = document.querySelector("html");
			loading.style.opacity = "0";
			loading.style.zIndex = "-1";
			
			monkey.style.zIndex = "0";
			monkey.style.width = "50%";

			html.style.overflow = "scroll";
		}
	  });
}

