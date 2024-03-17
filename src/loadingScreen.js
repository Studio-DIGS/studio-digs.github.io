export function loading(){
	let loading = document.querySelector(".loading");
	let monkey = document.querySelector(".monkey-gif");
	window.addEventListener("load", () =>{
		loading.style.opacity = "0";
		
		monkey.style.zIndex = "0";
		monkey.style.width = "50%";
		monkey.style.margin = "0";
		monkey.style.transition = "all 0.7s ease";
	})
	
}

