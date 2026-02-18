/**
 * AVISENA COL - Notification Center Logic
 * Versión 2.4.0
 */

document.addEventListener('DOMContentLoaded', () => {
    // Referencias a elementos del DOM
    const tabs = document.querySelectorAll('#filter-tabs button');
    const rows = document.querySelectorAll('#notification-table tbody tr');
    const searchInput = document.getElementById('search-alerts');
    const markAllBtn = document.getElementById('mark-all-read');
    const badge = document.getElementById('unread-count-badge');

    /**
     * Actualiza el contador visual de notificaciones pendientes
     */
    const updateBadge = () => {
        const unreadCount = document.querySelectorAll('tr[data-status="unread"]').length;
        if (badge) {
            badge.innerText = unreadCount;
            badge.classList.toggle('hidden', unreadCount === 0);
        }
    };

    /**
     * Lógica para marcar una notificación como leída
     * Se define en window para que el atributo onclick del HTML la encuentre
     */
    window.markAsRead = (btn) => {
        const row = btn.closest('tr');
        if (!row) return;

        // Actualizar estados visuales y de datos
        row.classList.remove('unread-row');
        row.classList.add('read');
        row.dataset.status = 'read';

        // Transformar el botón de "Ver" a "Detalles"
        btn.innerText = 'Detalles';
        btn.className = 'text-primary font-bold text-sm hover:underline';
        btn.onclick = null; // Limpiar el evento para que no se repita

        updateBadge();
    };

    /**
     * Marcar todas las alertas como leídas
     */
    markAllBtn.addEventListener('click', () => {
        const unreadRows = document.querySelectorAll('tr[data-status="unread"]');
        unreadRows.forEach(row => {
            const btn = row.querySelector('button');
            if (btn) window.markAsRead(btn);
        });
    });

    /**
     * Filtros por categoría (Todas, No leídas, Críticas)
     */
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const filter = tab.dataset.filter;

            // Actualizar estilos de las pestañas
            tabs.forEach(t => {
                t.classList.remove('tab-active');
                t.classList.add('text-[#5f974e]');
            });
            tab.classList.add('tab-active');
            tab.classList.remove('text-[#5f974e]');

            // Filtrar filas de la tabla
            rows.forEach(row => {
                const isUnread = row.dataset.status === 'unread';
                const isCritical = row.dataset.type === 'critical';

                switch (filter) {
                    case 'unread':
                        row.classList.toggle('hidden', !isUnread);
                        break;
                    case 'critical':
                        row.classList.toggle('hidden', !isCritical);
                        break;
                    default: // 'all'
                        row.classList.remove('hidden');
                }
            });
        });
    });

    /**
     * Buscador en tiempo real
     */
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        rows.forEach(row => {
            const text = row.innerText.toLowerCase();
            row.classList.toggle('hidden', !text.includes(term));
        });
    });
});