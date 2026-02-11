document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const errorBox = document.getElementById("errorBox");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que la página se recargue

    const correoCorrecto = "admin@gmail.com";
    const claveCorrecta = "12345";

    if (email.value === correoCorrecto && password.value === claveCorrecta) {
      errorBox.classList.add("hidden");
      alert("Inicio de sesión exitoso ✅");

      // Redirigir al perfil del administrador
      window.location.href = "perfil admin.html";
    } else {
      // Mostrar mensaje de error si fallan los datos
      errorBox.classList.remove("hidden");
    }
  });
});

// Función para mostrar/ocultar contraseña
function togglePassword() {
  const passInput = document.getElementById('password');
  passInput.type = passInput.type === 'password' ? 'text' : 'password';
}
const btnGoogle = document.getElementById('btnGoogle');

btnGoogle.addEventListener('click', () => {
  const client = google.accounts.oauth2.initCodeClient({
    client_id: 'TU_CLIENT_ID_DE_GOOGLE.apps.googleusercontent.com',
    scope: 'email profile',
    ux_mode: 'popup',
    callback: (response) => {
      console.log("Respuesta de Google:", response);
      // Aquí enviarías el código a tu backend o redirigirías
      window.location.href = "perfil admin.html";
    },
  });
  client.requestCode();
});
// 1. Inicialización automática al cargar la página
window.fbAsyncInit = function () {
  FB.init({
    appId: 'TU_APP_ID_AQUÍ', // Sustituye por tu ID de Meta for Developers
    cookie: true,
    xfbml: true,
    version: 'v18.0'
  });
};

// 2. Vincular el botón que ya tienes en tu HTML
const btnFacebook = document.getElementById('btnFacebook');

btnFacebook.addEventListener('click', () => {
  // Abrir el diálogo de login de Facebook
  FB.login(function (response) {
    if (response.status === 'connected') {
      // Si la conexión es exitosa, obtenemos los datos
      FB.api('/me', { fields: 'name,email' }, function (userData) {
        console.log("Bienvenido: " + userData.name);

        // Redirección directa a tu página de perfil admin
        window.location.href = "perfil admin.html";
      });
    } else {
      console.log('El usuario no autorizó el acceso.');
    }
  }, { scope: 'public_profile,email' });
});