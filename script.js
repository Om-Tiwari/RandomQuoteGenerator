const btn = document.querySelector("#btn");
const copyBtn = document.querySelector("#btn-copy");
const quote = document.querySelector(".quote");
const author = document.querySelector("#author");
const toolTip = document.querySelector(".tooltiptext");

btn.addEventListener("click", function () {
	fetch("https://api.quotable.io/random")
		.then((res) => res.json())
		.then((result) => {
			quote.textContent = result.content;
			let nameUrl = result.author.replace(" ", "_");
			author.innerHTML =
				"<a id='author' href='https://en.wikipedia.org/wiki/" +
				nameUrl +
				"' target='_blank'>" +
				result.author +
				"</a>";
		});
});

copyBtn.addEventListener("click", function () {
	let copyText = '"' + quote.textContent + '"' + "~" + author.textContent;
	if (copyText === '""~') {
		return;
	}
	navigator.clipboard.writeText(copyText);
	toolTip.innerHTML = "Copied";
});

copyBtn.addEventListener("mouseout", function () {
	toolTip.innerHTML = "Copy to clipboard";
});
