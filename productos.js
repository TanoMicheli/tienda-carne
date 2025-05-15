// Lista de productos destacados (los mismos que en index.html)
const productosDestacados = [
    {
        id: 1,
        nombre: "Bife de Chorizo",
        precio: 4500,
        kilos: 1,
        categoria: "premium",
        imagen: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        descripcion: "Corte premium de 1kg, ideal para parrilla. Jugoso y tierno."
    },
    {
        id: 2,
        nombre: "Asado",
        precio: 3800,
        kilos: 2,
        categoria: "tradicional",
        imagen: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        descripcion: "Corte tradicional de 2kg, perfecto para reuniones."
    },
    {
        id: 3,
        nombre: "Vacío",
        precio: 4200,
        kilos: 1.5,
        categoria: "premium",
        imagen: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        descripcion: "Corte premium de 1.5kg, jugoso y sabroso."
    },
    {
        id: 4,
        nombre: "Entraña",
        precio: 4800,
        kilos: 1,
        categoria: "especial",
        imagen: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        descripcion: "Corte especial de 1kg, textura única."
    },
    {
        id: 5,
        nombre: "Lomo",
        precio: 5200,
        kilos: 1,
        categoria: "premium",
        imagen: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        descripcion: "Corte premium de 1kg, tierno y jugoso."
    },
    {
        id: 6,
        nombre: "Matambre",
        precio: 3900,
        kilos: 1.5,
        categoria: "tradicional",
        imagen: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        descripcion: "Corte especial de 1.5kg, versátil y sabroso."
    },
    {
        id: 7,
        nombre: "Bife Ancho",
        precio: 4600,
        kilos: 1,
        categoria: "premium",
        imagen: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        descripcion: "Corte premium de 1kg, excelente marmoleo."
    },
    {
        id: 8,
        nombre: "Colita de Cuadril",
        precio: 4100,
        kilos: 1.5,
        categoria: "tradicional",
        imagen: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        descripcion: "Corte tradicional de 1.5kg, ideal para asado."
    },
    {
        id: 9,
        nombre: "Ojo de Bife",
        precio: 5500,
        kilos: 1,
        categoria: "especial",
        imagen: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        descripcion: "Corte especial de 1kg, máximo marmoleo."
    },
    {
        id: 10,
        nombre: "Pollo Entero",
        precio: 2800,
        kilos: 2,
        categoria: "pollo",
        imagen: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        descripcion: "Pollo entero fresco de 2kg, ideal para asar o cocinar."
    },
    {
        id: 11,
        nombre: "Milanesas",
        precio: 3200,
        kilos: 1,
        categoria: "preparados",
        imagen: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        descripcion: "Milanesas de carne vacuna, empanadas y listas para freír."
    },
    {
        id: 12,
        nombre: "Supremas de Pollo",
        precio: 2900,
        kilos: 1,
        categoria: "pollo",
        imagen: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        descripcion: "Supremas de pollo frescas, ideales para milanesas o a la plancha."
    },
    {
        id: 13,
        nombre: "Chorizo",
        precio: 1800,
        kilos: 1,
        categoria: "embutidos",
        imagen: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        descripcion: "Chorizo casero de 1kg, perfecto para asado."
    },
    {
        id: 14,
        nombre: "Carne Picada",
        precio: 3500,
        kilos: 1,
        categoria: "preparados",
        imagen: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        descripcion: "Carne picada común de 1kg, ideal para hamburguesas y pastas."
    },
    {
        id: 15,
        nombre: "Carne Picada Especial",
        precio: 4200,
        kilos: 1,
        categoria: "premium",
        imagen: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        descripcion: "Carne picada premium de 1kg, seleccionada para hamburguesas gourmet."
    },
    {
        id: 16,
        nombre: "Costeletas",
        precio: 3800,
        kilos: 1,
        categoria: "tradicional",
        imagen: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        descripcion: "Costeletas de cerdo de 1kg, perfectas para asar."
    },
    {
        id: 17,
        nombre: "Jamón Cuadrado",
        precio: 3600,
        kilos: 1,
        categoria: "embutidos",
        imagen: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        descripcion: "Jamón cuadrado de 1kg, ideal para sándwiches y picadas."
    },
    {
        id: 18,
        nombre: "Peceto",
        precio: 4400,
        kilos: 1,
        categoria: "premium",
        imagen: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
        descripcion: "Peceto de 1kg, perfecto para estofados y guisos."
    }
];

// Clase para manejar los productos
class ProductosManager {
    constructor() {
        this.productos = JSON.parse(localStorage.getItem('products')) || [];
        this.setupEventListeners();
        this.loadProducts();
    }

    setupEventListeners() {
        // Filtro por categoría
        document.getElementById('categoriaFilter').addEventListener('change', () => this.filterProducts());
        
        // Filtro por precio
        document.getElementById('precioFilter').addEventListener('change', () => this.filterProducts());
        
        // Búsqueda por texto
        document.getElementById('searchInput').addEventListener('input', () => this.filterProducts());

        // Escuchar cambios en el localStorage
        window.addEventListener('storage', (e) => {
            if (e.key === 'products') {
                this.productos = JSON.parse(e.newValue || '[]');
                this.loadProducts();
            }
        });
    }

    filterProducts() {
        const categoria = document.getElementById('categoriaFilter').value;
        const precioRango = document.getElementById('precioFilter').value;
        const busqueda = document.getElementById('searchInput').value.toLowerCase();

        let productosFiltrados = this.productos;

        // Filtrar por categoría
        if (categoria) {
            productosFiltrados = productosFiltrados.filter(p => p.category === categoria);
        }

        // Filtrar por precio
        if (precioRango) {
            const [min, max] = precioRango.split('-').map(Number);
            productosFiltrados = productosFiltrados.filter(p => {
                if (max) {
                    return p.price >= min && p.price <= max;
                } else {
                    return p.price >= min;
                }
            });
        }

        // Filtrar por búsqueda
        if (busqueda) {
            productosFiltrados = productosFiltrados.filter(p => 
                p.name.toLowerCase().includes(busqueda) || 
                p.description.toLowerCase().includes(busqueda)
            );
        }

        this.displayProducts(productosFiltrados);
    }

    displayProducts(products) {
        const container = document.getElementById('productos-lista');
        container.innerHTML = '';

        if (products.length === 0) {
            container.innerHTML = `
                <div class="col-12 text-center py-5">
                    <i class="fas fa-search fa-3x text-muted mb-3"></i>
                    <h3 class="text-muted">No se encontraron productos</h3>
                </div>
            `;
            return;
        }

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'col-md-4 mb-4';
            productCard.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <div class="card-img-wrapper">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-img-overlay d-flex align-items-end">
                            <span class="badge ${this.getCategoryBadgeClass(product.category)}">${this.getCategoryName(product.category)}</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="h5 mb-0 text-danger">$${product.price}</span>
                            ${product.inStock ? `
                                <button class="btn btn-primary" onclick="agregarAlCarrito('${product.name}', ${product.price}, '${product.image}')">
                                    <i class="fas fa-cart-plus me-2"></i>Agregar
                                </button>
                            ` : `
                                <button class="btn btn-secondary" disabled>
                                    <i class="fas fa-times me-2"></i>Sin Stock
                                </button>
                            `}
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(productCard);
        });
    }

    getCategoryBadgeClass(category) {
        const classes = {
            'premium': 'bg-danger',
            'tradicional': 'bg-primary',
            'especial': 'bg-warning text-dark',
            'pollo': 'bg-success',
            'preparados': 'bg-info',
            'embutidos': 'bg-secondary'
        };
        return classes[category] || 'bg-primary';
    }

    getCategoryName(category) {
        const names = {
            'premium': 'Premium',
            'tradicional': 'Tradicional',
            'especial': 'Especial',
            'pollo': 'Pollo',
            'preparados': 'Preparados',
            'embutidos': 'Embutidos'
        };
        return names[category] || category;
    }

    loadProducts() {
        this.displayProducts(this.productos);
    }
}

// Inicializar el administrador de productos
const productosManager = new ProductosManager(); 