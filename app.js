// Variables globales
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));

// Clase para manejar el carrito
class CartManager {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.updateCartCount();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Mostrar modal del carrito
        document.getElementById('cartBtn').addEventListener('click', () => {
            this.showCartModal();
        });

        // Finalizar compra
        document.getElementById('checkoutBtn')?.addEventListener('click', () => {
            this.checkout();
        });
    }

    addToCart(name, price, quantity) {
        const existingItem = this.cart.find(item => item.name === name);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({ name, price, quantity });
        }

        this.saveCart();
        this.showNotification('Producto agregado al carrito correctamente.');
    }

    removeFromCart(index) {
        this.cart.splice(index, 1);
        this.saveCart();
        this.showCartModal();
    }

    updateQuantity(index, quantity) {
        if (quantity > 0) {
            this.cart[index].quantity = quantity;
            this.saveCart();
            this.showCartModal();
        }
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.updateCartCount();
    }

    updateCartCount() {
        const count = this.cart.reduce((total, item) => total + item.quantity, 0);
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = count;
        }
    }

    showCartModal() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        
        if (cartItems && cartTotal) {
            cartItems.innerHTML = '';
            let total = 0;

            this.cart.forEach((item, index) => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;

                cartItems.innerHTML += `
                    <div class="d-flex justify-content-between align-items-center border-bottom py-3">
                        <div>
                            <h6 class="mb-0">${item.name}</h6>
                            <small class="text-muted">Precio: $${item.price}</small>
                        </div>
                        <div class="d-flex align-items-center">
                            <button class="btn btn-sm btn-outline-secondary me-2" 
                                onclick="cartManager.updateQuantity(${index}, ${item.quantity - 1})">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span class="mx-2">${item.quantity}</span>
                            <button class="btn btn-sm btn-outline-secondary ms-2" 
                                onclick="cartManager.updateQuantity(${index}, ${item.quantity + 1})">
                                <i class="fas fa-plus"></i>
                            </button>
                            <button class="btn btn-sm btn-danger ms-3" 
                                onclick="cartManager.removeFromCart(${index})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
            });

            cartTotal.textContent = `$${total}`;

            const modal = new bootstrap.Modal(document.getElementById('cartModal'));
            modal.show();
        }
    }

    showNotification(message) {
        const toast = document.getElementById('notificationToast');
        if (toast) {
            const toastBody = toast.querySelector('.toast-body');
            toastBody.textContent = message;
            const bsToast = new bootstrap.Toast(toast);
            bsToast.show();
        }
    }

    checkout() {
        // Aquí iría la lógica para procesar el pago
        alert('¡Gracias por tu compra! Pronto procesaremos tu pedido.');
        this.cart = [];
        this.saveCart();
        const modal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
        modal.hide();
    }
}

// Función global para agregar al carrito
function agregarAlCarrito(name, price, quantity) {
    cartManager.addToCart(name, price, quantity);
}

// Inicializar el administrador del carrito
const cartManager = new CartManager();

// Función para actualizar el carrito
function actualizarCarrito() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    if (carrito.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center py-4">
                <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                <p class="text-muted">Tu carrito está vacío</p>
            </div>
        `;
    } else {
        carrito.forEach(item => {
            const itemTotal = item.precio * item.cantidad;
            total += itemTotal;
            
            cartItems.innerHTML += `
                <div class="d-flex align-items-center mb-3 p-3 border-bottom">
                    <img src="${item.imagen}" class="rounded me-3" style="width: 80px; height: 80px; object-fit: cover;" alt="${item.nombre}">
                    <div class="flex-grow-1">
                        <h6 class="mb-1">${item.nombre}</h6>
                        <p class="small text-muted mb-1">${item.kilos} kg por unidad</p>
                        <div class="d-flex align-items-center">
                            <div class="btn-group btn-group-sm me-2">
                                <button class="btn btn-outline-secondary" onclick="actualizarCantidad('${item.nombre}', ${item.cantidad - 1})">-</button>
                                <button class="btn btn-outline-secondary" disabled>${item.cantidad}</button>
                                <button class="btn btn-outline-secondary" onclick="actualizarCantidad('${item.nombre}', ${item.cantidad + 1})">+</button>
                            </div>
                            <small class="text-muted">$${item.precio} c/u</small>
                        </div>
                        <div class="mt-1">
                            <strong>Subtotal: $${itemTotal}</strong>
                            <small class="text-muted ms-2">(${item.kilos * item.cantidad} kg total)</small>
                        </div>
                    </div>
                    <button class="btn btn-sm btn-outline-danger" onclick="eliminarDelCarrito('${item.nombre}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
        });
    }
    
    cartCount.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);
    cartTotal.textContent = `$${total}`;
}

// Función para actualizar la cantidad de un producto
function actualizarCantidad(nombre, nuevaCantidad) {
    if (nuevaCantidad < 1) {
        eliminarDelCarrito(nombre);
        return;
    }
    
    const producto = carrito.find(item => item.nombre === nombre);
    if (producto) {
        producto.cantidad = nuevaCantidad;
        actualizarCarrito();
        guardarCarrito();
    }
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(nombre) {
    carrito = carrito.filter(item => item.nombre !== nombre);
    actualizarCarrito();
    guardarCarrito();
}

// Función para guardar el carrito en localStorage
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Cargar el carrito al iniciar la página
document.addEventListener('DOMContentLoaded', actualizarCarrito); 