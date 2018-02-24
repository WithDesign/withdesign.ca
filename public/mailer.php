<?php

  $email = filter_var(trim($_POST["form_email"]), FILTER_SANITIZE_EMAIL);

  $message = strip_tags($_POST["form_msg"]);

  $bizName = strip_tags($_POST["form_biz_name"]);;

  $name = strip_tags($_POST["form_name"]);

  $pack1 = strip_tags($_POST["form_pack1"]);

  $pack2 = strip_tags($_POST["form_pack2"]);

  $pack3 = strip_tags($_POST["form_pack3"]);

  // Check that data was sent to the mailer.
  if ( empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Set a 400 (bad request) response code and exit.
    http_response_code(400);
    echo "Oops! There was a problem with your submission. Please complete the form and try again.";
    exit;
  }

  // Set the recipient email address.
  $recipient = "codreev@gmail.com";
  // Set the email subject.
  $subject = "Interfacewithdesign.com Work Request";

  // Build the email content.
  $body .= "Name: $name\n\n";
  $body .= "Email: $email\n\n";
  $body .= "Business Name: $bizName\n\n";
  $body .= "Message: \n$message\n";
  $body .= "Pack 1: $padck1\n\n";
  $body .= "Pack 2: $padck2\n\n";
  $body .= "Pack 3: $padck3\n\n";

  // success
  $success = mail($recipient, $subject, $body, "From:" . $email);

  // Send the email.
  if ($success) {
    // Set a 200 (okay) response code.
    http_response_code(200);
    echo "Thank You! Your message has been sent.";
  } else {
    // Set a 500 (internal server error) response code.
    http_response_code(500);
    echo "Oops! Something went wrong and we couldn’t send your message.";
  }

?>
