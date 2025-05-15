// Variables globales
let carrito = [];
const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));

// Clase para manejar el carrito
class CartManager {
    constructor() {
        // Intentar recuperar el carrito del localStorage
        const savedCart = localStorage.getItem('cart');
        this.cart = savedCart ? JSON.parse(savedCart) : [];
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

        // Escuchar cambios en el localStorage de otras páginas
        window.addEventListener('storage', (e) => {
            if (e.key === 'cart') {
                this.cart = JSON.parse(e.newValue || '[]');
                this.updateCartCount();
                if (document.getElementById('cartItems').style.display !== 'none') {
                    this.updateCartDisplay();
                }
            }
        });
    }

    addToCart(name, price, imagen) {
        const existingItem = this.cart.find(item => item.nombre === name);
        
        if (existingItem) {
            existingItem.cantidad += 1;
        } else {
            this.cart.push({ 
                nombre: name,
                precio: price,
                cantidad: 1,
                imagen: imagen
            });
        }

        this.saveCart();
        this.showNotification('Producto agregado al carrito correctamente.');
    }

    removeFromCart(index) {
        this.cart.splice(index, 1);
        this.saveCart();
        this.updateCartDisplay();
    }

    updateQuantity(index, quantity) {
        if (quantity > 0) {
            this.cart[index].cantidad = quantity;
            this.saveCart();
            this.updateCartDisplay();
        } else {
            this.removeFromCart(index);
        }
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.updateCartCount();
    }

    updateCartCount() {
        const count = this.cart.reduce((total, item) => total + (item.cantidad || 0), 0);
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = count;
        }
    }

    updateCartDisplay() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        
        if (cartItems && cartTotal) {
            cartItems.innerHTML = '';
            let total = 0;

            if (this.cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="text-center py-4">
                        <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                        <p class="text-muted">Tu carrito está vacío</p>
                    </div>
                `;
            } else {
                this.cart.forEach((item, index) => {
                    const itemTotal = item.precio * item.cantidad;
                    total += itemTotal;

                    cartItems.innerHTML += `
                        <div class="d-flex justify-content-between align-items-center border-bottom py-3">
                            <div class="d-flex align-items-center">
                                <img src="${item.imagen}" class="rounded me-3" style="width: 50px; height: 50px; object-fit: cover;" alt="${item.nombre}">
                                <div>
                                    <h6 class="mb-0">${item.nombre}</h6>
                                    <small class="text-muted">$${item.precio} por unidad</small>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                                <button class="btn btn-sm btn-outline-secondary me-2" 
                                    onclick="cartManager.updateQuantity(${index}, ${item.cantidad - 1})">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="mx-2">${item.cantidad} un.</span>
                                <button class="btn btn-sm btn-outline-secondary ms-2" 
                                    onclick="cartManager.updateQuantity(${index}, ${item.cantidad + 1})">
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
            }

            cartTotal.textContent = `$${total}`;
        }
    }

    showCartModal() {
        this.updateCartDisplay();
        const modal = new bootstrap.Modal(document.getElementById('cartModal'));
        modal.show();
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
        if (this.cart.length === 0) {
            alert('El carrito está vacío');
            return;
        }
        localStorage.setItem('carrito', JSON.stringify(this.cart));
        window.location.href = 'checkout.html';
    }
}

// Función global para agregar al carrito
function agregarAlCarrito(name, price, imagen) {
    cartManager.addToCart(name, price, imagen);
}

// Inicializar el administrador del carrito
const cartManager = new CartManager();

// Cargar el carrito al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    cartManager.updateCartDisplay();
}); 