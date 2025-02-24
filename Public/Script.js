function shutdownPC() {
    fetch("/shutdown")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error("Ошибка:", error));
}
