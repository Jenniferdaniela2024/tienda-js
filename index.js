// index.js

// Encuentra todos los botones de compra
const botonesCompra = document.querySelectorAll('.btnCompra');

// Variable para mantener el total de la factura
let totalFactura = 0;
let nombre = "";

// Asigna la función al evento click de cada botón
botonesCompra.forEach(boton => {
    boton.onclick = function () {
        // Obtén el tipo de producto y el precio desde los atributos
        const producto = this.getAttribute('data-producto');
        const precio = parseFloat(this.getAttribute('data-precio'));

        // Agrega el precio al total de la factura
        totalFactura += precio;
 

        // Actualiza el total en la interfaz
        document.getElementById('total').textContent = `$${totalFactura.toLocaleString()}`;
    
        // Define las descripciones basadas en el producto
        let descripcion = '';
        switch (producto) {
            case 'leche':
                descripcion = `
                    La leche es una bebida nutritiva rica en calcio y proteínas.<br><br>
                    <strong>Precio: </strong> $27.600<br><br>
                    <strong>Categoría:</strong> Lacteos<br><br>
                    <span>COMPRADA</span><br>
                `;
                alert('Producto Agregado a la factura correctamente')
                break;
            case 'tortillas':
                descripcion = `
                    Deliciosas tortillas de trigo.<br><br>
                    <strong>Precio: </strong> $20.000<br><br>
                    <strong>Categoría:</strong> Panadería<br><br>
                    <span>COMPRADO</span><br>
                `;
                break;
            case 'salchicha':
                descripcion = `
                    La salchicha es un embutido hecho de carne y especias.<br><br>
                    <strong>Precio: </strong> $18.000<br><br>
                    <strong>Categoría:</strong> Embutidos<br><br>
                    <span>COMPRADA</span><br>
                    
                `;
                alert('Producto Agregado a la factura correctamente')
                break;
            case 'salsa':
                descripcion = `
                    Salsa Marca: Fruco<br><br>
                    <strong>Precio: </strong> $11.000<br><br>
                    <strong>Categoría:</strong> Salsas<br><br>
                    <span>COMPRADO</span><br>
                `;
                alert('Producto Agregado a la factura correctamente')
                break;
            case 'arroz':
                descripcion = `
                    El arroz es un alimento básico y versátil.<br><br>
                    <strong>Precio: </strong> $5.000<br><br>
                    <strong>Categoría:</strong> Cereales<br><br>
                    <span>COMPRADO</span><br>
                `;
                alert('Producto Agregado a la factura correctamente')
                break;
            case 'aceite':
                descripcion = `
                    El aceite es esencial para cocinar y preparar alimentos.<br><br>
                    <strong>Precio: </strong> $8.000<br><br>
                    <strong>Categoría:</strong> Aceites<br><br>
                    <span>COMPRADO</span><br>
                `; alert('Producto Agregado a la factura correctamente')
                break;
            case 'mantequilla':
                descripcion = `
                    La mantequilla es un ingrediente clave en la repostería.<br><br>
                    <strong>Precio: </strong> $12.000<br><br>
                    <strong>Categoría:</strong> Lácteos<br><br>
                    <span>COMPRADA</span><br>
                `; alert('Producto Agregado a la factura correctamente')
                break;
            case 'queso':
                descripcion = `
                    El queso es un producto lácteo popular en muchas cocinas.<br><br>
                    <strong>Precio: </strong> $20.000<br><br>
                    <strong>Categoría:</strong> Lácteos<br><br>
                    <span>COMPRADO</span><br>
                `; alert('Producto Agregado a la factura correctamente')
                break;
            default:
                descripcion = 'Descripción no disponible.';
                alert('Producto  No Agregado a la factura')
        }

        // Muestra la descripción en el span correspondiente dentro del producto
        const productoActual = this.closest('.producto');
        const descripcionSpan = productoActual.querySelector('.descripcion');
        descripcionSpan.innerHTML = descripcion;
    }
});
