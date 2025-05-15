<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "s.gorzolka@seznam.cz";
    $subject = "📩 Nová zpráva z kontaktního formuláře";
    $headers = "From: Web Kino Oasis <info@oasiskino.jednoduse.cz>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8";

    $body = "📬 Nová zpráva z webu:\n\n"
          . "👤 Jméno: $name\n"
          . "✉️ E-mail: $email\n"
          . "📝 Zpráva:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Zpráva byla úspěšně odeslána.'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Nepodařilo se odeslat zprávu. Zkuste to prosím později.'); window.location.href='index.html';</script>";
    }
}
?>
