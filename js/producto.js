document.addEventListener('DOMContentLoaded', function () {
	// "Base de datos" simple de productos (en un proyecto real vendría de un servidor)
	const productos = {
		'sierra-circular-1400w': {
			nombre: 'Sierra Circular Eléctrica 1400W Disco 185mm',
			precio: 49990,
			imagen: 'img/Sierra_circular/402-2.jpg',
			descripcion: 'Motor potente de 1400W para cortes rápidos y precisos en madera. Profundidad y ángulo de corte ajustables, disco de 185mm incluido, 4800 rpm sin carga.'
		},
		'sierra-circular-total-tools': {
			nombre: 'Sierra Circular Profesional Total Tools',
			precio: 54990,
			imagen: 'img/Sierra_circular/total-tools-sierras-circulares.jpg',
			descripcion: 'Diseñada para uso intensivo en obra, con carcasa reforzada y buena disipación de calor.'
		},
		'set-cinceles': {
			nombre: 'Set de Cinceles para Madera (3 piezas)',
			precio: 12990,
			imagen: 'img/Cincel/img1.jpg',
			descripcion: 'Acero templado para tallado y ajuste fino en carpintería. Incluye 3 anchos distintos.'
		},
		'cincel-biselado': {
			nombre: 'Cincel Biselado para Carpintería',
			precio: 6990,
			imagen: 'img/Cincel/img2.jpg',
			descripcion: 'Filo de precisión con mango ergonómico antideslizante.'
		},
		'serrucho-tradicional': {
			nombre: 'Serrucho de Carpintero Tradicional',
			precio: 9990,
			imagen: 'img/Sierra/Sierra_carpinteria.jpg',
			descripcion: 'Herramienta manual clásica, ideal para cortes rectos en madera blanda y dura.'
		},
		'taladro-percutor': {
			nombre: 'Taladro Percutor 750W',
			precio: 39990,
			imagen: 'img/Taladro_percutor.jpg',
			descripcion: 'Perfora madera, metal y hormigón con velocidad variable. Incluye mango auxiliar y tope de profundidad.'
		},
		'llave-paso-pvc': {
			nombre: 'Llave de Paso PVC 1/2"',
			precio: 2990,
			imagen: null,
			descripcion: 'Para instalaciones de agua potable, cierre hermético. Resistente a la corrosión.'
		},
		'cinta-aislante': {
			nombre: 'Cinta Aislante Eléctrica (Pack 5un)',
			precio: 3490,
			imagen: null,
			descripcion: 'Aislación segura para conexiones e instalaciones eléctricas. Resistente a la humedad.'
		},
		'saco-cemento': {
			nombre: 'Saco de Cemento 25kg',
			precio: 6490,
			imagen: null,
			descripcion: 'Ideal para obras menores, reparaciones y trabajos de albañilería.'
		},
		'barniz-madera': {
			nombre: 'Barniz Protector para Madera 1L',
			precio: 8990,
			imagen: null,
			descripcion: 'Protege y realza el color natural de la madera. Secado rápido.'
		},
		'destornillador-set': {
			nombre: 'Set de Destornilladores Phillips y Plano (6 piezas)',
			precio: 5990,
			imagen: null,
			descripcion: 'Puntas magnetizadas y mangos ergonómicos para uso general.'
		},
		'huincha-medir': {
			nombre: 'Huincha de Medir 5m',
			precio: 3990,
			imagen: null,
			descripcion: 'Cinta métrica de 5 metros con freno automático y carcasa resistente a caídas.'
		}
	};

	// lee el id del producto desde la url con el ?id=
	const parametros = new URLSearchParams(window.location.search);
	const idProducto = parametros.get('id');
	const producto = productos[idProducto];

	const contenedorImagen = document.getElementById('producto-imagen');
	const nombreEl = document.getElementById('producto-nombre');
	const descripcionEl = document.getElementById('producto-descripcion');
	const precioEl = document.getElementById('producto-precio');
	const cantidadInput = document.getElementById('cantidad');
	const totalEl = document.getElementById('producto-total');
	const mensajeEl = document.getElementById('mensaje-carrito');
	const botonCarrito = document.getElementById('btn-agregar');

	if (!producto) {
		nombreEl.textContent = 'Producto no encontrado';
		descripcionEl.textContent = 'Vuelve al catálogo y selecciona un producto válido.';
		document.getElementById('detalle-interactivo').style.display = 'none';
		return;
	}

	// Rellena la info del producto en la pagina
	document.title = producto.nombre + ' - Ferretería Los Maestros';
	nombreEl.textContent = producto.nombre;
	descripcionEl.textContent = producto.descripcion;
	precioEl.textContent = '$' + producto.precio.toLocaleString('es-CL');

	if (producto.imagen) {
		contenedorImagen.innerHTML = '<img src="' + producto.imagen + '" alt="' + producto.nombre + '" style="max-width:100%; max-height:280px; object-fit:contain; background-color:white; border-radius:5px;">';
	} else {
		contenedorImagen.innerHTML = '<p class="titulo">Imagen próximamente</p>';
	}

	function calcularTotal() {
		const cantidad = parseInt(cantidadInput.value, 10) || 1;
		const total = producto.precio * cantidad;
		totalEl.textContent = 'Total: $' + total.toLocaleString('es-CL');
		return { cantidad, total };
	}

	cantidadInput.addEventListener('input', calcularTotal);

	botonCarrito.addEventListener('click', function () {
	const { cantidad, total } = calcularTotal();
	agregarAlCarrito({ id: idProducto, nombre: producto.nombre, precio: producto.precio, imagen: producto.imagen }, cantidad);
	mensajeEl.textContent = '✔ Agregaste ' + cantidad + ' unidad(es) de "' + producto.nombre + '" al carrito — Total: $' + total.toLocaleString('es-CL');
	mensajeEl.style.display = 'block';
    });

	calcularTotal();
});