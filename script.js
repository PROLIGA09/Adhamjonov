document.addEventListener("DOMContentLoaded", () => {
    console.log("Proliga sayti ishga tushdi");

    const button = document.querySelector(".btn");
    button.addEventListener("click", () => {
        alert("Kirish funksiyasi hali mavjud emas");
    });
});
