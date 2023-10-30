# geolocation
# Link deploy
- https://geolocation-pied.vercel.app/
# Descripcion
Este proyecto es un sitio web que proporciona información sobre la moneda aplicable a la ubicación geográfica del usuario. Utiliza servicios de geolocalización y datos de monedas para mostrar la moneda en uso en función de la ubicación.
# Requisitos
Node.js (v14 o superior)
NPM (normalmente se instala con Node.js)
Conexión a Internet para acceder a servicios de geolocalización y datos de monedas
# Instalación
# 1 Clona este repositorio en tu máquina local:
- git clone https://github.com/andres101010/geolocation.git
# 2 Navega al directorio del proyecto:
- cd geolocation
- cd frontend
- aplica el comando : npm install
- levanta el servidor con el comando : npm run dev
- luego en una terminal diferente navega a la carpeta backend
- cd backend
- aplica el comando : npm install
- levanta el servidor con el comando : npm run dev
# Uso
- Ingresa a la página principal.
- En la pagina principa veras un boton "Click here" haz click y Verás la moneda aplicable a tu ubicación junto con la información relacionada.
- Asi tambien en la pagina principal veras en la parte superior de la ventana un boton "see all location" al hacer click en dicho boton veras todas las ubicaciones captadas por el sitio web.

# Nota// 
La base de datos esta desplegada en un servicio de la nube llamado clever cloud
para proceder con el uso de dicha base de datos deberia crear el archivo .env en la carpeta "backend" del proyecto y pasarle las variables de entorno correspondientes.
