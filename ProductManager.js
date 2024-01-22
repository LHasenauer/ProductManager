class ProductManager {
    constructor() {
        this.products = [];
        // this.nextProductId = 1;
    }
    generateId() {
    // Esta función genera un ID único basado en la fecha actual.
    return new Date().getTime().toString();
    }
    getProducts() {
        return this.products;
    }
    addProduct({ title, description, price, thumbnail, code, stock }) {
      // Verificar si el código ya está en uso
        const codeExists = this.products.some(product => product.code === code);
        if (codeExists) {
        throw new Error("El código de producto ya está en uso.");
        }
      // Generar un nuevo producto con un ID único
    const newProduct = {
        id: this.generateId(),
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
    };
      // Agregar el nuevo producto al array de productos
        this.products.push(newProduct);
      // Devolver el nuevo producto
        return newProduct;
    }

    getProductById(productId) {
    const product = this.products.find(product => product.id === productId);
        if (!product) {
        throw new Error("Producto no encontrado");
        }
        return product;
    }
}
  // Crear una instancia de ProductManager
  const productManager = new ProductManager();
  
  // agrego productos
  const newProduct = productManager.addProduct({
    title: "racks",
    description: "Rack de televisor E160",
    price: 25000,
    thumbnail: "Sin imagen",
    code: "a1",
    stock: 25,
  });
  const newProduct1 = productManager.addProduct({
    title: "racks",
    description: "Rack de televisor E180",
    price: 29000,
    thumbnail: "Sin imagen",
    code: "a2",
    stock: 10,
  });
  const newProduct2 = productManager.addProduct({
    title: "Alacena",
    description: "alacena 3 puertas",
    price: 17000,
    thumbnail: "Sin imagen",
    code: "a3",
    stock: 15,
  });
  const newProduct3 = productManager.addProduct({
    title: "Alacena",
    description: "alacena 4 puertas",
    price: 24000,
    thumbnail: "Sin imagen",
    code: "a4",
    stock: 7,
  });
  console.log("Producto recién agregado:", newProduct);
  console.log("Producto recién agregado:", newProduct1);
  console.log("Producto recién agregado:", newProduct2);
  console.log("Producto recién agregado:", newProduct3);
  
  // Agrego un producto y arroja error al agregar con mismo codigo
  try {
    productManager.addProduct({
      title: "racks",
      description: "Rack de televisor A100",
      price: 20000,
      thumbnail: "Otra imagen",
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
  