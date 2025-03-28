function enableButtons() {
    document.getElementById("render-btn").disabled = false;
    document.getElementById("download-btn").disabled = false;
  
    document.getElementById("render-btn").addEventListener("click", updateMath);
    document.getElementById("download-btn").addEventListener("click", downloadSVG);
  
    // Render initial content
    updateMath();
  }
  
  // Expose to MathJax config
  window.enableButtons = enableButtons;
  
  async function updateMath() {
    const tex = document.getElementById("latex").value;
    const mathDiv = document.getElementById("math");
    mathDiv.innerHTML = tex;
    await MathJax.typesetPromise([mathDiv]);
  }
  
  function downloadSVG() {
    const svg = document.querySelector('#math svg');
    if (!svg) {
      alert("No SVG rendered yet!");
      return;
    }
  
    const clone = svg.cloneNode(true);
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(clone);
    const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement("a");
    link.href = url;
    link.download = "equation.svg";
    link.click();
  
    URL.revokeObjectURL(url);
  }
  