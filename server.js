const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "simon.gorzolka@tria-tr.cz", // ⚠️ Nahraď vlastním e-mailem
        pass: "heslo" // ⚠️ Použij aplikacni heslo (ne běžné heslo)
    }
});

app.post("/send-email", (req, res) => {
    const { email, film, seats, price } = req.body;

    const mailOptions = {
        from: "simon.gorzolka@tria-tr.cz",
        to: email,
        subject: `Potvrzení rezervace - ${film}`,
        text: `Dobrý den,\n\nVaše rezervace byla úspěšně dokončena!\nFilm: ${film}\nSedadla: ${seats.join(", ")}\nCelková cena: ${price} Kč\n\nDěkujeme za nákup a přejeme hezký film!\n\nVaše Kino`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Chyba při odesílání e-mailu." });
        } else {
            console.log("E-mail odeslán: " + info.response);
            res.json({ success: true, message: "E-mail úspěšně odeslán!" });
        }
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server běží na http://localhost:${PORT}`);
});
