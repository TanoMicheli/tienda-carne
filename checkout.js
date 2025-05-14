// Variables globales
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const shippingCost = 500;

// Función para mostrar los detalles de pago según el método seleccionado
function mostrarDetallesPago() {
    const metodo = document.getElementById('paymentMethod').value;
    const transferenciaDetalles = document.getElementById('transferenciaDetalles');
    const mercadopagoDetalles = document.getElementById('mercadopagoDetalles');
    const efectivoDetalles = document.getElementById('efectivoDetalles');
    const confirmarCompraBtn = document.getElementById('confirmarCompraBtn');

    // Ocultar todos los detalles primero
    transferenciaDetalles.style.display = 'none';
    mercadopagoDetalles.style.display = 'none';
    efectivoDetalles.style.display = 'none';

    // Mostrar los detalles correspondientes
    switch(metodo) {
        case 'transferencia':
            transferenciaDetalles.style.display = 'block';
            confirmarCompraBtn.style.display = 'block';
            break;
        case 'mercadopago':
            mercadopagoDetalles.style.display = 'block';
            confirmarCompraBtn.style.display = 'none';
            inicializarMercadoPago();
            break;
        case 'efectivo':
            efectivoDetalles.style.display = 'block';
            confirmarCompraBtn.style.display = 'block';
            break;
    }
}

// Función para copiar al portapapeles
function copiarAlPortapapeles(elementId) {
    const texto = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(texto).then(() => {
        mostrarNotificacion('Copiado al portapapeles');
    });
}

// Función para inicializar Mercado Pago
function inicializarMercadoPago() {
    const mp = new MercadoPago('TU_PUBLIC_KEY', {
        locale: 'es-AR'
    });

    const checkout = mp.checkout({
        preference: {
            id: 'TU_PREFERENCE_ID'
        },
        render: {
            container: '#mercadopago-button',
            label: 'Pagar con Mercado Pago'
        }
    });
}

// Función para generar número de referencia
function generarNumeroReferencia() {
    const timestamp = Date.now().toString();
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `REF-${timestamp.slice(-6)}-${random}`;
}

// Función para mostrar página de éxito
function mostrarPaginaExito(datosCompra, numeroReferencia) {
    const container = document.querySelector('.container');
    const itemsList = datosCompra.items.map(item => `
        <div class="d-flex align-items-center mb-3 p-3 border-bottom">
            <img src="${item.imagen}" class="rounded me-3" style="width: 80px; height: 80px; object-fit: cover;" alt="${item.nombre}">
            <div class="flex-grow-1">
                <h6 class="mb-1">${item.nombre}</h6>
                <p class="small text-muted mb-1">${item.kilos} kg x ${item.cantidad} unidad(es)</p>
                <div class="d-flex justify-content-between">
                    <span>$${item.precio} c/u</span>
                    <strong>Subtotal: $${item.precio * item.cantidad}</strong>
                </div>
            </div>
        </div>
    `).join('');

    // Determinar el texto del método de pago
    let metodoPagoTexto = '';
    switch(datosCompra.metodoPago) {
        case 'efectivo':
            metodoPagoTexto = 'Pago a recibir el pedido';
            break;
        case 'mercadopago':
            metodoPagoTexto = 'Pago por MercadoPago';
            break;
        case 'transferencia':
            metodoPagoTexto = 'Pago por transferencia';
            break;
    }

    container.innerHTML = `
        <div class="row justify-content-center py-5">
            <div class="col-md-8">
                <div class="card border-0 shadow-sm">
                    <div class="card-body p-5 text-center">
                        <div class="mb-4">
                            <i class="fas fa-check-circle text-success fa-4x"></i>
                        </div>
                        <h2 class="mb-4">¡Compra realizada con éxito!</h2>
                        <div class="alert alert-success mb-4">
                            <p class="mb-2">Número de referencia: <strong>${numeroReferencia}</strong></p>
                            <p class="mb-0">Un correo electrónico se ha enviado a <strong>${datosCompra.email}</strong> con los detalles de tu compra.</p>
                        </div>
                        
                        <div class="card mb-4">
                            <div class="card-header bg-light">
                                <h5 class="mb-0">Resumen de la Compra</h5>
                            </div>
                            <div class="card-body">
                                ${itemsList}
                                <hr>
                                <div class="d-flex justify-content-between mb-2">
                                    <span>Subtotal:</span>
                                    <span>$${datosCompra.total - shippingCost}</span>
                                </div>
                                <div class="d-flex justify-content-between mb-2">
                                    <span>Envío:</span>
                                    <span>$${shippingCost}</span>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <strong>Total:</strong>
                                    <strong class="text-danger">$${datosCompra.total}</strong>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-4">
                            <div class="card-header bg-light">
                                <h5 class="mb-0">Información de Envío</h5>
                            </div>
                            <div class="card-body">
                                <p class="mb-1"><strong>Nombre:</strong> ${datosCompra.nombre}</p>
                                <p class="mb-1"><strong>Dirección:</strong> ${datosCompra.direccion}</p>
                                <p class="mb-1"><strong>Ciudad:</strong> ${datosCompra.ciudad}</p>
                                <p class="mb-1"><strong>Código Postal:</strong> ${datosCompra.codigoPostal}</p>
                                <p class="mb-1"><strong>Teléfono:</strong> ${datosCompra.telefono}</p>
                                <p class="mb-0"><strong>Método de Pago:</strong> ${metodoPagoTexto}</p>
                            </div>
                        </div>

                        <a href="index.html" class="btn btn-primary">
                            <i class="fas fa-home me-2"></i>Volver al Inicio
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Función para mostrar el loader de procesamiento
function mostrarLoader() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="row justify-content-center py-5">
            <div class="col-md-6 text-center">
                <div class="card border-0 shadow-sm">
                    <div class="card-body p-5">
                        <div class="spinner-container mb-4">
                            <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;">
                                <span class="visually-hidden">Cargando...</span>
                            </div>
                        </div>
                        <h3 class="mb-3">Procesando tu compra...</h3>
                        <p class="text-muted">Por favor, no cierres esta ventana mientras procesamos tu pago.</p>
                        <div class="progress mt-4" style="height: 4px;">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 100%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Función para mostrar error de pago
function mostrarErrorPago(mensaje) {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="row justify-content-center py-5">
            <div class="col-md-6 text-center">
                <div class="card border-0 shadow-sm">
                    <div class="card-body p-5">
                        <div class="error-container mb-4">
                            <i class="fas fa-times-circle text-danger fa-4x animate__animated animate__bounceIn"></i>
                        </div>
                        <h3 class="mb-3 text-danger">Error en el Pago</h3>
                        <p class="text-muted mb-4">${mensaje}</p>
                        <div class="d-flex justify-content-center gap-3">
                            <button class="btn btn-outline-primary" onclick="window.location.reload()">
                                <i class="fas fa-redo me-2"></i>Intentar Nuevamente
                            </button>
                            <a href="index.html" class="btn btn-primary">
                                <i class="fas fa-home me-2"></i>Volver al Inicio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Función para simular verificación de pago
async function verificarPago(metodo, datosCompra) {
    // Simulamos diferentes escenarios de pago
    const escenarios = {
        'transferencia': {
            exito: Math.random() > 0.2, // 80% de probabilidad de éxito
            mensaje: 'La transferencia no pudo ser verificada. Por favor, intente nuevamente.'
        },
        'mercadopago': {
            exito: Math.random() > 0.1, // 90% de probabilidad de éxito
            mensaje: 'El pago con Mercado Pago fue rechazado. Por favor, intente con otro método.'
        },
        'efectivo': {
            exito: true, // Siempre exitoso para efectivo
            mensaje: 'Error al procesar el pago en efectivo.'
        }
    };

    // Simulamos un delay de verificación
    await new Promise(resolve => setTimeout(resolve, 1500));

    const escenario = escenarios[metodo];
    if (!escenario.exito) {
        throw new Error(escenario.mensaje);
    }

    return true;
}

// Función para procesar el pago
async function procesarPago() {
    const metodo = document.getElementById('paymentMethod').value;
    const form = document.getElementById('checkoutForm');
    
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Mostrar loader
    mostrarLoader();

    const formData = new FormData(form);
    const datosCompra = {
        nombre: formData.get('nombre'),
        email: formData.get('email'),
        telefono: formData.get('telefono'),
        direccion: formData.get('direccion'),
        ciudad: formData.get('ciudad'),
        codigoPostal: formData.get('codigoPostal'),
        instrucciones: formData.get('instrucciones'),
        metodoPago: metodo,
        items: carrito,
        total: calcularTotal()
    };

    try {
        // Simular procesamiento con delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Verificar el pago
        await verificarPago(metodo, datosCompra);
        
        // Aquí iría la llamada a tu backend para procesar la compra
        await simularProcesamientoCompra(datosCompra);
        
        // Generar número de referencia
        const numeroReferencia = generarNumeroReferencia();
        
        // Enviar correo de confirmación
        await enviarCorreoConfirmacion(datosCompra);
        
        // Limpiar carrito
        localStorage.removeItem('carrito');
        
        // Mostrar página de éxito
        mostrarPaginaExito(datosCompra, numeroReferencia);
        
    } catch (error) {
        mostrarErrorPago(error.message);
    }
}

// Función para simular el procesamiento de la compra
function simularProcesamientoCompra(datosCompra) {
    return new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });
}

// Función para enviar correo de confirmación
async function enviarCorreoConfirmacion(datosCompra) {
    // Aquí iría la llamada a tu backend para enviar el correo
    // Por ahora solo simularemos el envío
    console.log('Enviando correo a:', datosCompra.email);
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
}

// Función para calcular el total
function calcularTotal() {
    const subtotal = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    return subtotal + shippingCost;
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje) {
    const toast = document.getElementById('notificationToast');
    const toastBody = toast.querySelector('.toast-body');
    toastBody.textContent = mensaje;
    
    const bsToast = new bootstrap.Toast(toast, {
        animation: true,
        autohide: true,
        delay: 3000
    });
    
    bsToast.show();
}

// Función para mostrar los items en el checkout
function mostrarItemsCheckout() {
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutSubtotal = document.getElementById('checkoutSubtotal');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    if (carrito.length === 0) {
        window.location.href = 'index.html';
        return;
    }

    let subtotal = 0;
    checkoutItems.innerHTML = '';

    carrito.forEach(item => {
        const itemTotal = item.precio * item.cantidad;
        subtotal += itemTotal;

        checkoutItems.innerHTML += `
            <div class="d-flex align-items-center mb-3 p-3 border-bottom">
                <img src="${item.imagen}" class="rounded me-3" style="width: 80px; height: 80px; object-fit: cover;" alt="${item.nombre}">
                <div class="flex-grow-1">
                    <h6 class="mb-1">${item.nombre}</h6>
                    <p class="small text-muted mb-1">${item.kilos} kg x ${item.cantidad} unidad(es)</p>
                    <div class="d-flex justify-content-between">
                        <span>$${item.precio} c/u</span>
                        <strong>Subtotal: $${itemTotal}</strong>
                    </div>
                </div>
            </div>
        `;
    });

    checkoutSubtotal.textContent = `$${subtotal}`;
    checkoutTotal.textContent = `$${subtotal + shippingCost}`;
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarItemsCheckout();
    mostrarDetallesPago();
}); 