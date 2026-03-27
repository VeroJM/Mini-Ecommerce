# Mini Ecommerce - React

Este proyecto es una aplicación web tipo ecommerce desarrollada con React, que permite visualizar una lista de productos obtenidos desde una API externa, incluyendo funcionalidades como filtrado, búsqueda, ordenamiento y visualización detallada de productos.
---

## Funcionalidades

* Carga de productos
* Filtro por categoría
* Filtro de productos con descuento
* Ordenamiento por rating
* Busqueda por nombre del producto
* Tarjeta del producto
* Visualización detallada del producto (modal)
* Consumo de API externa (DummyJSON)

---

## Preguntas para desarrollar

1. ¿Cuántos useState necesitaré? ¿Qué guardará cada uno?

necesité de 8 estados de los cuales:
- se lista el producto de la API
- se guarda el estado de carga
- se guarda mensaje en caso de error
- se guarda la categoria seleccionada
- se guarda texto de busqueda
- se filtra por descuentos
- se filtra por rating asc/desc
- se seleciona un producto desplegando un modal con mas detalles del mismo.

2. ¿Cuántos useEffect necesitaré? ¿Cuál es el propósito de cada uno?

en este caso solo hice uso de uno que cumple la funcion de cargar los productos desde la API.


3. ¿Cuándo debe ejecutarse la petición a la API: una vez, o cada vez que algo cambia?

una vez, al iniciar la app ya que no es necesario volver a pedir datos y los filtros trabajan sobre los datos ya cargados.

4. ¿Cómo aplico varios filtros al mismo tiempo sin perder los demás?

esto se logra usando una variable acumulativa, luego se aplican los filtros uno tras otro de modo que trabajan sobre el resultado anterior.

5. ¿Dónde vive la lógica de filtrado: dentro de un efecto o fuera?

vive fuera de useEffect ya que se ejecuta en cada render automaticamente. 

---

## Mi Repositorio

https://github.com/VeroJM/Mini-Ecommerce.git

---
## Estudiante Veronica Jaramillo Morales 
## Ficha 3155613
---
