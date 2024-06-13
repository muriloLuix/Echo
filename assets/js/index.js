function input() {
    const input = document.querySelector("#email");
  
    input.addEventListener("input", function () {
      const inputWidth = this.value.length * 1.2 + 21; // Ajuste conforme necessário
  
      if (inputWidth > 35) {
        this.style.width = "35em";
      } else {
        this.style.width = inputWidth + "em";
      }
    });
  }
  