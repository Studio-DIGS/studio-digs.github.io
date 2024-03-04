export function loading(){
	let loading = document.querySelector(".loading");

	window.addEventListener("load", () =>{
		loading.style.display = "none";
	})
}

