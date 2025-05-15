// Verificar si el usuario está autenticado
function checkAuth() {
        const isAuthenticated = localStorage.getItem('adminLoggedIn');    if (!isAuthenticated) {        window.location.href = 'login.html';    }
}

// Función para cerrar sesión
function logout() {
    localStorage.removeItem('adminLoggedIn');
    window.location.href = '../index.html';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Verificar autenticación al cargar la página
    checkAuth();

    // Manejar cierre de sesión
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    }

    // Manejar redirección a vista cliente
    const clientViewBtn = document.getElementById('clientViewBtn');
    if (clientViewBtn) {
        clientViewBtn.addEventListener('click', (e) => {
            e.preventDefault();
            logout(); // Cerramos sesión antes de redirigir
        });
    }
});

// Productos iniciales
const productosIniciales = [
    {
        id: "1",
        name: "Bife de Chorizo",
        price: 4500,
        category: "premium",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        description: "Corte premium de 1kg, ideal para parrilla. Jugoso y tierno.",
        inStock: true
    },
    {
        id: "2",
        name: "Asado",
        price: 3800,
        category: "tradicional",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        description: "Corte tradicional de 2kg, perfecto para reuniones.",
        inStock: true
    },
    {
        id: "3",
        name: "Vacío",
        price: 4200,
        category: "premium",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        description: "Corte premium de 1.5kg, jugoso y sabroso.",
        inStock: true
    },
    {
        id: "4",
        name: "Entraña",
        price: 4800,
        category: "especial",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        description: "Corte especial de 1kg, textura única.",
        inStock: true
    },
    {
        id: "5",
        name: "Lomo",
        price: 5200,
        category: "premium",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        description: "Corte premium de 1kg, tierno y jugoso.",
        inStock: true
    },
    {
        id: "6",
        name: "Matambre",
        price: 3900,
        category: "tradicional",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        description: "Corte especial de 1.5kg, versátil y sabroso.",
        inStock: true
    },
    {
        id: "7",
        name: "Bife Ancho",
        price: 4600,
        category: "premium",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        description: "Corte premium de 1kg, excelente marmoleo.",
        inStock: true
    },
    {
        id: "8",
        name: "Colita de Cuadril",
        price: 4100,
        category: "tradicional",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        description: "Corte tradicional de 1.5kg, ideal para asado.",
        inStock: true
    },
    {
        id: "9",
        name: "Ojo de Bife",
        price: 5500,
        category: "especial",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        description: "Corte especial de 1kg, máximo marmoleo.",
        inStock: true
    },
    {
        id: "10",
        name: "Pollo Entero",
        price: 2800,
        category: "pollo",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        description: "Pollo entero fresco de 2kg, ideal para asar o cocinar.",
        inStock: true
    },
    {
        id: "11",
        name: "Milanesas",
        price: 3200,
        category: "preparados",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        description: "Milanesas de carne vacuna, empanadas y listas para freír.",
        inStock: true
    },
    {
        id: "12",
        name: "Supremas de Pollo",
        price: 2900,
        category: "pollo",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        description: "Supremas de pollo frescas, ideales para milanesas o a la plancha.",
        inStock: true
    },
    {
        id: "13",
        name: "Chorizo",
        price: 1800,
        category: "embutidos",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        description: "Chorizo casero de 1kg, perfecto para asado.",
        inStock: true
    },
    {
        id: "14",
        name: "Carne Picada",
        price: 3500,
        category: "preparados",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        description: "Carne picada común de 1kg, ideal para hamburguesas y pastas.",
        inStock: true
    },
    {
        id: "15",
        name: "Carne Picada Especial",
        price: 4200,
        category: "premium",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        description: "Carne picada premium de 1kg, seleccionada para hamburguesas gourmet.",
        inStock: true
    },
    {
        id: "16",
        name: "Costeletas",
        price: 3800,
        category: "tradicional",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        description: "Costeletas de cerdo de 1kg, perfectas para asar.",
        inStock: true
    },
    {
        id: "17",
        name: "Jamón Cuadrado",
        price: 3600,
        category: "embutidos",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        description: "Jamón cuadrado de 1kg, ideal para sándwiches y picadas.",
        inStock: true
    },
    {
        id: "18",
        name: "Peceto",
        price: 4400,
        category: "premium",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        description: "Peceto de 1kg, perfecto para estofados y guisos.",
        inStock: true
    }
];

// Clase para manejar los productos
class ProductManager {
    constructor() {
        // Si no hay productos en localStorage, usar los productos iniciales
        if (!localStorage.getItem('products')) {
            localStorage.setItem('products', JSON.stringify(productosIniciales));
        }
        this.products = JSON.parse(localStorage.getItem('products')) || [];
        this.loadProducts();
        this.setupEventListeners();
    }

    loadProducts() {
        const container = document.getElementById('productsContainer');
        container.innerHTML = '';

        this.products.forEach(product => {
            const productCard = this.createProductCard(product);
            container.appendChild(productCard);
        });
    }

    createProductCard(product) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="text-danger fw-bold">$${product.price}</span>
                        <span class="badge ${product.inStock ? 'bg-success' : 'bg-danger'}">
                            ${product.inStock ? 'En Stock' : 'Sin Stock'}
                        </span>
                    </div>
                    <div class="mt-3">
                        <button class="btn btn-warning btn-sm btn-action edit-product" data-id="${product.id}">
                            <i class="fas fa-edit"></i> Editar
                        </button>
                        <button class="btn btn-danger btn-sm btn-action delete-product" data-id="${product.id}">
                            <i class="fas fa-trash"></i> Eliminar
                        </button>
                    </div>
                </div>
            </div>
        `;

        return col;
    }

    setupEventListeners() {
        // Manejar guardado de producto
        document.getElementById('saveProduct').addEventListener('click', () => {
            const imageFile = document.getElementById('productImage').files[0];
            if (imageFile) {
                this.handleImageUpload(imageFile).then(imageBase64 => {
                    const productData = {
                        id: document.getElementById('productId').value || Date.now().toString(),
                        name: document.getElementById('productName').value,
                        description: document.getElementById('productDescription').value,
                        price: parseFloat(document.getElementById('productPrice').value),
                        category: document.getElementById('productCategory').value,
                        image: imageBase64,
                        inStock: document.getElementById('productStock').checked
                    };
                    this.saveProduct(productData);
                });
            } else if (document.getElementById('productId').value) {
                // Si estamos editando y no se seleccionó una nueva imagen, mantener la imagen existente
                const existingProduct = this.products.find(p => p.id === document.getElementById('productId').value);
                const productData = {
                    id: document.getElementById('productId').value,
                    name: document.getElementById('productName').value,
                    description: document.getElementById('productDescription').value,
                    price: parseFloat(document.getElementById('productPrice').value),
                    category: document.getElementById('productCategory').value,
                    image: existingProduct.image,
                    inStock: document.getElementById('productStock').checked
                };
                this.saveProduct(productData);
            } else {
                alert('Por favor selecciona una imagen para el producto');
            }
        });

        // Delegación de eventos para editar y eliminar
        document.getElementById('productsContainer').addEventListener('click', (e) => {
            if (e.target.closest('.edit-product')) {
                const productId = e.target.closest('.edit-product').dataset.id;
                this.editProduct(productId);
            } else if (e.target.closest('.delete-product')) {
                const productId = e.target.closest('.delete-product').dataset.id;
                this.deleteProduct(productId);
            }
        });
    }

    handleImageUpload(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = (e) => reject(e);
            reader.readAsDataURL(file);
        });
    }

    saveProduct(productData) {
        const existingProductIndex = this.products.findIndex(p => p.id === productData.id);
        
        if (existingProductIndex !== -1) {
            this.products[existingProductIndex] = productData;
        } else {
            this.products.push(productData);
        }

        localStorage.setItem('products', JSON.stringify(this.products));
        this.loadProducts();
        
        // Cerrar el modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('addProductModal'));
        modal.hide();
        
        // Limpiar el formulario
        document.getElementById('productForm').reset();
        document.getElementById('productId').value = '';

        // Actualizar productos en las otras páginas
        this.updateMainPages();
    }

    editProduct(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            document.getElementById('productId').value = product.id;
            document.getElementById('productName').value = product.name;
            document.getElementById('productDescription').value = product.description;
            document.getElementById('productPrice').value = product.price;
            document.getElementById('productCategory').value = product.category;
            document.getElementById('productStock').checked = product.inStock;

            // No podemos establecer el valor del input file por seguridad
            // pero podemos mostrar la imagen actual en una vista previa si lo deseas

            const modal = new bootstrap.Modal(document.getElementById('addProductModal'));
            modal.show();
        }
    }

    deleteProduct(productId) {
        if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
            this.products = this.products.filter(p => p.id !== productId);
            localStorage.setItem('products', JSON.stringify(this.products));
            this.loadProducts();
            this.updateMainPages();
        }
    }

    updateMainPages() {
        // Disparar un evento personalizado que será escuchado por las otras páginas
        const event = new CustomEvent('productsUpdated', {
            detail: { products: this.products }
        });
        window.dispatchEvent(event);
    }
}

// Inicializar el administrador de productos
const productManager = new ProductManager(); 