// Namespace de la aplicación para evitar conflictos de variables
const AvicolaApp = {
    // Inicialización
    init() {
        this.bindEvents();
        this.updateDate();
    },

    // Manejo de eventos del DOM
    bindEvents() {
        const btnSave = document.getElementById('btn-save');
        if (btnSave) {
            btnSave.addEventListener('click', () => this.handleSave());
        }

        // Observador para cambios en inputs de huevos para cálculo en tiempo real
        const inputHuevos = document.getElementById('input-huevos-buenos');
        if (inputHuevos) {
            inputHuevos.addEventListener('input', (e) => this.calculateTrayConversion(e.target.value));
        }
    },

    // Actualiza la fecha del panel
    updateDate() {
        const dateElement = document.getElementById('current-date');
        if (dateElement) {
            const now = new Date();
            dateElement.textContent = now.toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            });
        }
    },

    // Lógica para guardar registros
    handleSave() {
        console.log("Guardando registro de producción...");
        // Aquí iría la lógica de validación y envío a una API o LocalStorage
        alert("¡Registro guardado exitosamente!");
    },

    // Cálculo de conversión a cubetas (30 huevos por cubeta)
    calculateTrayConversion(totalHuevos) {
        const cubetas = Math.floor(totalHuevos / 30);
        const sobrantes = totalHuevos % 30;
        console.log(`Resultado: ${cubetas} cubetas y ${sobrantes} huevos sueltos.`);
    },

    // Control del modal de historial
    toggleModal(show) {
        const modal = document.getElementById('modal-historial');
        if (modal) {
            modal.classList.toggle('hidden', !show);
        }
    }
};

// Arrancar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => AvicolaApp.init());