import { navigate } from "astro:transitions/client";

document.addEventListener("keyup", (event) => {
	if (event.key === "Escape") {
		event.preventDefault();
		navigate("/");
	}
});
