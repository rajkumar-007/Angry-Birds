const text = "I'm sorry for my mistake🤧.I have something special for you🤗."
const typingElement = document.getElementById("typing");
if (typingElement) {
  let i = 0;
    function typeWriter() {
        if (i < text.length) {
            if (text.charAt(i) === "\n") {
                typingElement.innerHTML += "<br>";
            } else {
                typingElement.innerHTML += text.charAt(i);
            }
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
}
