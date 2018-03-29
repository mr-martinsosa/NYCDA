let ul = document.querySelector("ul")

class allProduct {
  constructor() {
    this.all = []
  }

  add(product) {
    this.all.push(product)
  }
}

class Product{
	constructor(title, body, image, price){
		this.title = title
		this.body = body
		this.image = image
		this.price = price
	}

}

axios.get("https://www.redbullshopus.com/products.json")
.then((response) => {
  let data = response.data.products
  //let data2 = response.data.products.variants
  let allProducts = new allProduct()
  
  data.forEach((item) => {
    let li = document.createElement("li")
    let p = document.createElement("p")
    let img = document.createElement("img")
    img.src = item.variants[0].featured_image["src"]

    let product = new Product(
    	item["title"],
        item["body_html"], 
        item.variants[0].featured_image["src"],
        item.variants[0]["price"]
    )

    allProducts.add(product)
    li.innerHTML = item["title"] 
    p.innerHTML = "$ " + item.variants[0]["price"]
    ul.appendChild(li)
    ul.appendChild(img)
    li.appendChild(p)
  })
}).catch((error) => {
  console.log(error)
})
