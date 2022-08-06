const btn = document.querySelector("#btn");
const quote = document.querySelector(".quote");
const author = document.querySelector("#author");

btn.addEventListener("click", function () {
	fetch("https://api.quotable.io/random")
		.then((res) => res.json())
		.then((result) => {
			quote.innerText = result.content;
			let nameUrl = result.author.replace(" ", "_");
			author.innerHTML =
				"<a id='author' href='https://en.wikipedia.org/wiki/" +
				nameUrl +
				"' target='_blank'>" +
				result.author +
				"</a>";
		});
});
