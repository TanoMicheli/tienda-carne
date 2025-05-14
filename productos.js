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

class ProductsView {
    constructor() {
        this.products = productosDestacados; // Usar los productos destacados
        this.loadProducts();
        this.setupEventListeners();
        this.setupFilters();
    }

    loadProducts(filteredProducts = null) {
        const container = document.getElementById('productos-lista');
        const productsToShow = filteredProducts || this.products;
        
        container.innerHTML = '';

        productsToShow.forEach(product => {
            const productCard = this.createProductCard(product);
            container.appendChild(productCard);
        });

        if (productsToShow.length === 0) {
            container.innerHTML = `
                <div class="col-12 text-center">
                    <h3>No se encontraron productos</h3>
                </div>
            `;
        }
    }

    createProductCard(product) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
            <div class="card h-100 shadow-sm border-0">
                <div class="card-img-wrapper">
                    <img src="${product.imagen}" class="card-img-top" alt="${product.nombre}">
                    <div class="card-img-overlay d-flex align-items-end">
                        <span class="badge bg-${this.getCategoryBadgeClass(product.categoria)}">${this.getCategoryName(product.categoria)}</span>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${product.nombre}</h5>
                    <p class="card-text">${product.descripcion}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="h5 mb-0 text-danger">$${product.precio}</span>
                        <button class="btn btn-primary" onclick="agregarAlCarrito('${product.nombre}', ${product.precio}, ${product.kilos})">
                            <i class="fas fa-cart-plus me-2"></i>Agregar
                        </button>
                    </div>
                </div>
            </div>
        `;

        return col;
    }

    getCategoryBadgeClass(category) {
        const classes = {
            premium: 'danger',
            tradicional: 'primary',
            especial: 'warning',
            pollo: 'success',
            preparados: 'info',
            embutidos: 'secondary'
        };
        return classes[category] || 'primary';
    }

    getCategoryName(category) {
        return category.charAt(0).toUpperCase() + category.slice(1);
    }

    setupEventListeners() {
        // Escuchar cambios en los productos desde el panel de administración
        window.addEventListener('productsUpdated', (event) => {
            this.products = event.detail.products;
            this.loadProducts();
        });
    }

    setupFilters() {
        const categoriaFilter = document.getElementById('categoriaFilter');
        const precioFilter = document.getElementById('precioFilter');
        const searchInput = document.getElementById('searchInput');

        const applyFilters = () => {
            let filtered = [...this.products];

            // Filtro por categoría
            if (categoriaFilter.value) {
                filtered = filtered.filter(p => p.categoria === categoriaFilter.value);
            }

            // Filtro por precio
            if (precioFilter.value) {
                const [min, max] = precioFilter.value.split('-').map(Number);
                filtered = filtered.filter(p => {
                    if (max) {
                        return p.precio >= min && p.precio <= max;
                    } else {
                        return p.precio >= min;
                    }
                });
            }

            // Filtro por búsqueda
            if (searchInput.value) {
                const searchTerm = searchInput.value.toLowerCase();
                filtered = filtered.filter(p => 
                    p.nombre.toLowerCase().includes(searchTerm) ||
                    p.descripcion.toLowerCase().includes(searchTerm)
                );
            }

            this.loadProducts(filtered);
        };

        // Aplicar filtros cuando cambien los valores
        categoriaFilter.addEventListener('change', applyFilters);
        precioFilter.addEventListener('change', applyFilters);
        searchInput.addEventListener('input', applyFilters);
    }
}

// Inicializar la vista de productos
const productsView = new ProductsView(); 