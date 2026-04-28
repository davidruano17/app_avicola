document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('morbilidad-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        
        showNotification('¡Registro Exitoso!', 'La incidencia de morbilidad ha sido documentada.');
        form.reset();
    });
});

function showNotification(title, message) {
    
    console.log(`${title}: ${message}`);
    
    const toast = document.createElement('div');
    toast.className = "fixed bottom-6 right-6 bg-slate-900 text-white p-4 rounded-xl shadow-2xl flex gap-3 animate-bounce";
    toast.innerHTML = `
        <span class="material-icons text-emerald-400">check_circle</span>
        <div>
            <p class="font-bold text-sm">${title}</p>
            <p class="text-xs text-slate-400">${message}</p>
        </div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}