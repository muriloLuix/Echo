        // Configuração para o primeiro título (Rápido)
        const rapidoElement = document.getElementById('rapido-text');
        const rapidoTexts = ['Site Rápido', 'Sistema Rápido'];
        let rapidoIndex = 0;
        let rapidoCharIndex = 0;
        let rapidoDeleting = false;

        // Configuração para o segundo título (Exclusivo)
        const exclusivoElement = document.getElementById('exclusivo-text');
        const exclusivoTexts = ['Site Exclusivo', 'Sistema Exclusivo'];
        let exclusivoIndex = 0;
        let exclusivoCharIndex = 0;
        let exclusivoDeleting = false;

        // Velocidades e pausas
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const pauseBeforeDelete = 2000;
        const pauseBeforeType = 1000;

        function typeRapido() {
            const currentText = rapidoTexts[rapidoIndex];
            
            if (rapidoDeleting) {
                rapidoElement.textContent = currentText.substring(0, rapidoCharIndex - 1);
                rapidoCharIndex--;
                speed = deletingSpeed;
            } else {
                rapidoElement.textContent = currentText.substring(0, rapidoCharIndex + 1);
                rapidoCharIndex++;
                speed = typingSpeed;
            }

            if (!rapidoDeleting && rapidoCharIndex === currentText.length) {
                rapidoDeleting = true;
                setTimeout(typeRapido, pauseBeforeDelete);
                return;
            }

            if (rapidoDeleting && rapidoCharIndex === 0) {
                rapidoDeleting = false;
                rapidoIndex = (rapidoIndex + 1) % rapidoTexts.length;
                setTimeout(typeRapido, pauseBeforeType);
                return;
            }

            setTimeout(typeRapido, speed);
        }

        function typeExclusivo() {
            const currentText = exclusivoTexts[exclusivoIndex];
            
            if (exclusivoDeleting) {
                exclusivoElement.textContent = currentText.substring(0, exclusivoCharIndex - 1);
                exclusivoCharIndex--;
                speed = deletingSpeed;
            } else {
                exclusivoElement.textContent = currentText.substring(0, exclusivoCharIndex + 1);
                exclusivoCharIndex++;
                speed = typingSpeed;
            }

            if (!exclusivoDeleting && exclusivoCharIndex === currentText.length) {
                exclusivoDeleting = true;
                setTimeout(typeExclusivo, pauseBeforeDelete);
                return;
            }

            if (exclusivoDeleting && exclusivoCharIndex === 0) {
                exclusivoDeleting = false;
                exclusivoIndex = (exclusivoIndex + 1) % exclusivoTexts.length;
                setTimeout(typeExclusivo, pauseBeforeType);
                return;
            }

            setTimeout(typeExclusivo, speed);
        }

        // Inicia as animações
        window.onload = function() {
            setTimeout(typeRapido, 1000);
            setTimeout(typeExclusivo, 1500); // Inicia com um pequeno delay para não ficar sincronizado
        };