<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

// Ověření vstupu
if (!$data || !isset($data['email'], $data['jmeno'], $data['prijmeni'], $data['film'], $data['seats'], $data['price'])) {
    echo json_encode(["success" => false, "error" => "Chybí požadovaná data."]);
    exit;
}

// DATA
$customerEmail = $data["email"];
$film = $data["film"];
$seats = implode(", ", $data["seats"]);
$price = $data["price"];
$jmeno = $data["jmeno"];
$prijmeni = $data["prijmeni"];

// SPOLEČNÁ HLAVIČKA
$headersCustomer = "From: Kino Oasis <info@oasiskino.jednoduse.cz>\r\n";
$headersCustomer .= "Reply-To: info@oasiskino.jednoduse.cz\r\n";
$headersCustomer .= "Content-Type: text/plain; charset=UTF-8";

$headersAdmin = "From: Rezervace <info@oasiskino.jednoduse.cz>\r\n";
$headersAdmin .= "Reply-To: info@oasiskino.jednoduse.cz\r\n";
$headersAdmin .= "Content-Type: text/plain; charset=UTF-8";

// ZPRÁVA PRO ZÁKAZNÍKA
$messageCustomer = "Dobrý den {$jmeno} {$prijmeni},\n\n"
    . "děkujeme za Vaši rezervaci na film: {$film}\n"
    . "Rezervovaná sedadla: {$seats}\n"
    . "Celková cena: {$price} Kč\n\n"
    . "Těšíme se na Vaši návštěvu!\n\nKino Oasis";

// ZPRÁVA PRO ADMINA
$messageAdmin = "📥 Nová rezervace z webu:\n\n"
    . "Jméno: {$jmeno} {$prijmeni}\n"
    . "E-mail zákazníka: {$customerEmail}\n"
    . "Film: {$film}\n"
    . "Sedadla: {$seats}\n"
    . "Cena: {$price} Kč\n";

// ODESLAT E-MAILY
$successCustomer = mail($customerEmail, "Potvrzení rezervace – {$film}", $messageCustomer, $headersCustomer);
$successAdmin = mail($adminEmail, "Nová rezervace – {$film}", $messageAdmin, $headersAdmin);


// ODPOVĚĎ
if ($successCustomer && $successAdmin) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode([
        "success" => false,
        "error" => "Nepodařilo se odeslat e-mail.",
        "debug" => error_get_last()
    ]);
}

