Ultima modificacion:

Mi Pokedex - Proyecto Frontend con React

¡Hola! Bienvenido a mi proyecto. Esta es la parte visual (Frontend) de mi sistema de gestión de Pokémon. Básicamente, es la cara bonita que se conecta con la API que construí en el backend.

Este proyecto ha sido súper interesante porque reciclé y adapté un CRUD que ya tenía, pero lo llevé al siguiente nivel conectándolo a una base de datos real y manejando lógica compleja.

## ¿Con qué lo construí?:

Quise usar tecnologías modernas pero manteniendo el control de lo que pasaba "bajo el capó":

* **React 19 + Vite:** Para que la app vuele de rápida.
* **React Router:** Para moverme entre el Login, el Registro y la lista de Pokémon sin recargar la página.
* **Fetch API:** Decidí no usar librerías externas (como Axios) para las peticiones HTTP. Preferí hacerlo "a mano" con `fetch` nativo para entender realmente cómo funcionan las promesas, los headers y el envío de datos.
* **SweetAlert2:** Para que las alertas de "Guardado con éxito" o "¿Estás seguro de borrar?" se vean profesionales y no sean el típico cuadro gris del navegador.
* **Estilos:** CSS propio para darle identidad.

## Lo que aprendí y los retos:

Siendo sincero, me enfrenté a varios problemas de lógica, especialmente al principio.
* **Conexión Frontend-Backend:** Entender cómo enviar las imágenes junto con los datos de texto (usando `FormData`) fue un reto, pero logré que funcionara.
* **Reciclaje de Código:** Tomé un CRUD viejo y lo transformé. Aprendí que leer y adaptar código es tan importante como escribirlo desde cero.
* **Fetch:** Manejar las respuestas asíncronas y pintar los errores en pantalla me ayudó a comprender mucho mejor cómo funciona JavaScript.

Al final, aprendí de mis errores, simplifiqué el código y me gustó mucho el resultado final.

## Funcionalidades Actuales:

Actualmente, la aplicación permite:
1.  **Autenticación:** Puedes registrarte e iniciar sesión (se guarda un Token de seguridad).
2.  **Ver Pokémon:** Una galería visual que carga las imágenes desde el servidor.
3.  **Crear y Editar:** Formularios para agregar nuevos Pokémon (subiendo su foto) o corregir sus datos.
4.  **Eliminar:** Borrado de registros con confirmación de seguridad.

## 📦 ¿Cómo probarlo en tu PC?

Si quieres correr este proyecto localmente:

1.  **Clona el repo:**
    ```bash
    git clone [https://github.com/Gadieiru/proyect_pokemon_search-frontend.git](https://github.com/Gadieiru/proyect_pokemon_search-frontend.git)
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Configura el entorno:**
    Asegúrate de tener el Backend corriendo (revisa el repo del backend para eso).
    Crea un archivo `.env` si es necesario para apuntar a `http://localhost:3000`.

4.  **¡Arráncalo!**
    ```bash
    npm run dev
    ```

## Enlaces Relacionados:
* **Backend Repository:**  "https://github.com/Gadieiru/proyect_pokemon_search-backend.git"

----------------------------
Hecho con esfuerzo y mucho café ☕.