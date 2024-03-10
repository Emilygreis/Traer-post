async function getPosts() {
	try {
		let response = await fetch("https://jsonplaceholder.typicode.com/posts");
		let posts = await response.json();
		let postData = document.getElementById("post-data");
		let ul = document.createElement("ul");
		posts.forEach(post => {
			let titulo = document.createElement("h5");
			titulo.append(post.title);
			let p = document.createElement("p");
			p.append(post.body)
			let li = document.createElement("li");
			li.appendChild(titulo);
			li.appendChild(p);
			ul.appendChild(li);
		});
		postData.append(ul);
	} catch(e) {
		console.log(e);
		alert("Ocurrió un error al obtener los posts.");
	}
}