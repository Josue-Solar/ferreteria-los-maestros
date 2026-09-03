document.addEventListener('DOMContentLoaded', function () {
	const contenedorItems = document.getElementById('carrito-items');
	const carritoVacio = document.getElementById('carrito-vacio');
	const resumen = document.getElementById('carrito-resumen');
	const totalEl = document.getElementById('carrito-total');
	const btnPagar = document.getElementById('btn-pagar');
	const mensajePago = document.getElementById('mensaje-pago');

	function renderizarCarrito() {
		const carrito = obtenerCarrito();
		contenedorItems.innerHTML = '';

		if (carrito.length === 0) {
			carritoVacio.style.display = 'block';
			resumen.style.display = 'none';
			return;
		}

		carritoVacio.style.display = 'none';
		resumen.style.display = 'block';

		carrito.forEach(function (item) {
			const tarjeta = document.createElement('article');
			tarjeta.className = 'tarjeta';

			const imagenHtml = item.imagen
				? '<img src="' + item.imagen + '" alt="' + item.nombre + '" style="height:120px; width:100%; object-fit:contain; background-color:white; border-radius:5px;">'
				: '<p class="titulo">Sin imagen</p>';

			tarjeta.innerHTML =
				'<div class="espacio-imagen">' + imagenHtml + '</div>' +
				'<h3>' + item.nombre + '</h3>' +
				'<p>Cantidad: ' + item.cantidad + '</p>' +
				'<p class="precio">$' + (item.precio * item.cantidad).toLocaleString('es-CL') + '</p>' +
				'<button type="button" class="btn-ver btn-quitar" data-id="' + item.id + '" style="border:none; cursor:pointer;">Quitar</button>';

			contenedorItems.appendChild(tarjeta);
		});

		totalEl.textContent = 'Total: $' + calcularTotalCarrito().toLocaleString('es-CL');

		document.querySelectorAll('.btn-quitar').forEach(function (boton) {
			boton.addEventListener('click', function () {
				eliminarDelCarrito(boton.dataset.id);
				renderizarCarrito();
			});
		});
	}

	btnPagar.addEventListener('click', function () {
		const total = calcularTotalCarrito();
		mensajePago.textContent = '✔ Pago simulado por $' + total.toLocaleString('es-CL') + '. ¡Gracias por tu compra! (Simulación: no se procesó ningún pago real)';
		mensajePago.style.display = 'block';
		vaciarCarrito();
		renderizarCarrito();
	});

	renderizarCarrito();
});