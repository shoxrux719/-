const express = require("express");
const { exec } = require("child_process");

const app = express();

app.use(express.static("public")); // Для отдачи HTML

app.get("/shutdown", (req, res) => {
    exec("shutdown /s /t 0", (error) => {
        if (error) {
            res.send("Ошибка: " + error.message);
            return;
        }
        res.send("Компьютер выключается...");
    });
});

app.listen(3000, () => console.log("Сервер запущен на http://localhost:3000"));
