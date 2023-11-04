export const fuchenschlag = () => {
    alert("Attention you have been fuchenschlaged!");
    const body = document.body;
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", atob("aHR0cHM6Ly9naXBoeS5jb20vZW1iZWQvVnV3OW01d1h2aUZJUQ=="));
    iframe.height = "398";
    iframe.width = "480";
    body.appendChild(iframe);
    setTimeout(() => {
        window.location.href = atob("aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUSZhYl9jaGFubmVsPVJpY2tBc3RsZXk=");
    }, 2000);
};
