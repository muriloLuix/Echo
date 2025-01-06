<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../../vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);

    try {
        // Configuração do servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'contato@goecho.com.br';
        $mail->Password = 'Murylindos1204*';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Remetente e destinatário
        $mail->setFrom('contato@goecho.com.br', 'Contato - Echo');
        $mail->addAddress('contato@goecho.com.br');

        // Conteúdo do e-mail
        $mail->isHTML(true);
        $mail->Subject = 'Nova contribuicao recebida!';
        $mail->Body = "
            <h2>Detalhes do formulário enviado:</h2>
            <p><strong>Nome Completo:</strong> " . htmlspecialchars($_POST['nome'] ?? '') . "</p>
            <p><strong>RG:</strong> " . htmlspecialchars($_POST['rg'] ?? '') . "</p>
            <p><strong>UF:</strong> " . htmlspecialchars($_POST['uf'] ?? '') . "</p>
            <p><strong>Cidade:</strong> " . htmlspecialchars($_POST['cidade'] ?? '') . "</p>
            <p><strong>Celular:</strong> " . htmlspecialchars($_POST['celular'] ?? '') . "</p>
            <p><strong>E-mail:</strong> " . htmlspecialchars($_POST['email'] ?? '') . "</p>
            <p><strong>Contribuição:</strong> " . htmlspecialchars($_POST['contribuicao'] ?? '') . "</p>
            <p><strong>Observações:</strong> " . htmlspecialchars($_POST['observacoes'] ?? '') . "</p>
        ";

        // Enviar e-mail
        $mail->send();
        echo "Mensagem enviada com sucesso!";
    } catch (Exception $e) {
        echo "Erro ao enviar a mensagem: {$mail->ErrorInfo}";
    }
} else {
    echo "Método de requisição inválido.";
}

?>