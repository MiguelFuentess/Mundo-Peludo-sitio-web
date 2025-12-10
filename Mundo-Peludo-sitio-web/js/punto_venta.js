        // --- BOTONES PRINCIPALES ---
        const btnCharge = document.getElementById('btn-charge');
        const btnCancelSale = document.getElementById('btn-cancel-sale');

        // --- MODALES ---
        const receiptModal = document.getElementById('receipt-modal');
        const warningModal = document.getElementById('warning-modal');
        const cancelSuccessModal = document.getElementById('cancel-success-modal');

        // --- BOTONES DENTRO DE MODALES ---
        const btnReceiptAccept = document.getElementById('btn-receipt-accept');
        
        const btnWarningCancel = document.getElementById('btn-warning-cancel');
        const btnWarningAccept = document.getElementById('btn-warning-accept');
        
        const btnCancelSuccessAccept = document.getElementById('btn-cancel-success-accept');


        // --- FLUJO DE COBRO ---
        btnCharge.addEventListener('click', () => {
            receiptModal.classList.add('visible');
        });

        btnReceiptAccept.addEventListener('click', () => {
            receiptModal.classList.remove('visible');
        });


        // --- FLUJO DE CANCELACIÓN ---
        
        // 1. Abrir advertencia al pulsar "Cancelar"
        btnCancelSale.addEventListener('click', () => {
            warningModal.classList.add('visible');
        });

        // 2. Opción "Cancelar" dentro del modal (Regresa a la venta)
        btnWarningCancel.addEventListener('click', () => {
            warningModal.classList.remove('visible');
        });

        // 3. Opción "Aceptar" dentro del modal (Confirma cancelación)
        btnWarningAccept.addEventListener('click', () => {
            warningModal.classList.remove('visible');     // Cierra advertencia
            cancelSuccessModal.classList.add('visible');  // Abre confirmación de cancelación
        });

        // 4. Cerrar modal final de cancelación
        btnCancelSuccessAccept.addEventListener('click', () => {
            cancelSuccessModal.classList.remove('visible');
            // Aquí puedes agregar lógica para limpiar la pantalla de ventas
            console.log("Venta cancelada y limpiada.");
        });