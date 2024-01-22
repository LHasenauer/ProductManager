class ProductManager {
    constructor() {
      this.products = [];
    }

    getProducts() {
        return this.products;
    }
    static id = 0

    addProduct(title, description, price, image, code, stock) {
      ProductManager.id++
      this.products.push({ title, description, price, image, code, stock, id:ProductManager.id})
    }

    getProductById(id){
      if(!this.products.find((producto) => producto.id === id)){
        console.log("not found")
      } else{
        console.log("exist")
      }
    }
}
  // Crear una instancia de ProductManager
  const Productos = new ProductManager();
  
  // agrego productos
  Productos.addProduct({
    title: "Mesa",
    description: "Mesa 1.80x0.90m",
    price: 25000,
    image: "Sin imagen",
    code: "a1",
    stock: 25,
  });
  Productos.addProduct({
    title: "Sillas",
    description: "sillas de madera",
    price: 29000,
    image: "Sin imagen",
    code: "a2",
    stock: 10,
  });
  Productos.addProduct({
    title: "Alacena",
    description: "alacena 3 puertas",
    price: 17000,
    image: "Sin imagen",
    code: "a3",
    stock: 15,
  });
  Productos.addProduct({
    title: "Sillon",
    description: "Sillon 3 cuerpos",
    price: 350000,
    image: "Sin imagen",
    code: "a4",
    stock: 7,
  });
  console.log("Producto recién agregado:", Productos.getProducts());
  
  // Agrego un producto y arroja error al agregar con mismo codigo
  try {
    Productos.addProduct({
      title: "Zapatero",
      description: "Zapatero standar",
      price: 5000,
      image: "Sin imagen",
      code: "a2",
      stock: 5,
    });
  } catch (error) {
    console.error("Error al agregar producto:", error.message);
  }

  // agrego un producto con un ID inexistente
  try {
    const nonExistentProduct = productManager.getProductById("nonexistentid");
    console.log("Producto encontrado por ID:", nonExistentProduct);
  } catch (error) {
    console.error("Error al buscar producto por ID:", error.message);
  }
  