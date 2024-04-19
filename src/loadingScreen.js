export function loading(){
	// https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
	document.addEventListener("readystatechange", (event) => {
		if (event.target.readyState === "loading") {
			let loading = document.querySelector(".loading");
			let monkey = document.querySelector(".monkey-gif");
			let body = document.querySelector("body");
			loading.style.opacity = "1";
			loading.style.zIndex = "1";
			
			monkey.style.zIndex = "1";
			monkey.style.width = "75%";

			body.style.overflowY = "hidden";
		} else if (event.target.readyState === "complete") {
			let loading = document.querySelector(".loading");
			let monkey = document.querySelector(".monkey-gif");
			let body = document.querySelector("body");
			loading.style.opacity = "0";
			loading.style.zIndex = "-1";
			
			monkey.style.zIndex = "0";
			monkey.style.width = "50%";

			body.style.overflowY = "visible";
		}
	  });
}

