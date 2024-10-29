<?php
// Inclua o autoload do Composer
require '../../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $help = filter_input(INPUT_POST, 'help', FILTER_SANITIZE_STRING);
    $mensagem = filter_input(INPUT_POST, 'msg', FILTER_SANITIZE_STRING);

    // Configurações do PHPMailer
    $mail = new PHPMailer(true);
    try {
        // Configurações do servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'ns1032.hostgator.com.br';  // Endereço do servidor SMTP do seu domínio
        $mail->SMTPAuth = true;
        $mail->Username = 'contato@goecho.com.br'; 
        $mail->Password = 'Dev$Echo2024!84C[1L4jj$z|';         
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Configurações do e-mail
        $mail->setFrom('seuemail@seudominio.com', 'Nome do Site');
        $mail->addAddress('contato@goecho.com.br'); // E-mail que receberá as mensagens do formulário
        $mail->addReplyTo($email); // Define o "Responder para" como o e-mail do usuário

        // Conteúdo do e-mail
        $mail->isHTML(true);
        $mail->Subject = 'Nova mensagem do formulário de contato';
        $mail->Body = "
            <html>
            <body>
                <h2>Nova mensagem do formulário de contato</h2>
                <p><strong>Nome:</strong> $nome</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Assunto:</strong> $help</p>
                <p><strong>Mensagem:</strong><br>$mensagem</p>
            </body>
            </html>
        ";

        // Envia o e-mail
        $mail->send();
        echo "E-mail enviado com sucesso!";
        header("Location: /obrigado.html"); // Redireciona para a página de agradecimento
        exit;
    } catch (Exception $e) {
        echo "Erro ao enviar o e-mail: {$mail->ErrorInfo}";
    }
}
?>