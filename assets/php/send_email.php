<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email2'];
    $option = $_POST['option'];
    $message = $_POST['msg'];

    // Validate email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Email content
        $to = 'muriloluiz654@gmail.com'; // Replace with your email address
        $subject = 'New Form Submission';
        $body = "Name: $name\nEmail: $email\nOption: $option\nMessage: $message";
        $headers = "From: $email\r\n";
        
        // Send email
        if (mail($to, $subject, $body, $headers)) {
            echo "Email sent successfully!";
        } else {
            echo "Failed to send email.";
        }
    } else {
        echo "Invalid email address.";
    }
} else {
    echo "Invalid request method.";
}
