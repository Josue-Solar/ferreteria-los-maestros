const CARRITO_KEY = 'carritoFerreteria';

function obtenerCarrito() {
	const datos = localStorage.getItem(CARRITO_KEY);
	return datos ? JSON.parse(datos) : [];
}

function guardarCarrito(carrito) {
	localStorage.setItem(CARRITO_KEY, JSON.stringify(carrito));
	actualizarContadorCarrito();
}

function agregarAlCarrito(producto, cantidad) {
	const carrito = obtenerCarrito();
	const existente = carrito.find(item => item.id === producto.id);

	if (existente) {
		existente.cantidad += cantidad;
	} else {
		carrito.push({
			id: producto.id,
			nombre: producto.nombre,
			precio: producto.precio,
			imagen: producto.imagen,
			cantidad: cantidad
		});
	}

	guardarCarrito(carrito);
}

function eliminarDelCarrito(id) {
	const carrito = obtenerCarrito().filter(item => item.id !== id);
	guardarCarrito(carrito);
}

function vaciarCarrito() {
	guardarCarrito([]);
}

function contarUnidadesCarrito() {
	return obtenerCarrito().reduce((total, item) => total + item.cantidad, 0);
}

function calcularTotalCarrito() {
	return obtenerCarrito().reduce((total, item) => total + (item.precio * item.cantidad), 0);
}

function actualizarContadorCarrito() {
	const contador = document.getElementById('carrito-contador');
	if (contador) {
		contador.textContent = contarUnidadesCarrito();
	}
}

// al cargar pagina, actualiza el numero del icono inkreible
document.addEventListener('DOMContentLoaded', actualizarContadorCarrito);