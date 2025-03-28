### Method A: Inkscape GUI Approach
If you have complex LaTeX equations, then follow below steps:

1. Place all the files from this directory to the overleaf.
2. Make sure compiler is set to: XeLaTeX
3. Complie the .tex file and download the PDF.
4. Open this downloaded PDF in Inkscape and save it as .svg.
5. There you go, feel free to use this .svg anywhere you need.

### Method B: Inkscape Automation Approach (recommended for large no. of files)
If you have complex LaTeX equations and there are lot of them, then follow below steps:

1. Place all the files from this directory to the overleaf.
2. Make sure compiler is set to: XeLaTeX
3. Complie the .tex file and download all the PDFs in a separate folder.
4. Based on your operating system choose your script (convert.ps1 or convert.sh) and paste it into that separate folder.
5. Execute the script in that folder (make sure you have right inkscape path in convert.ps1).
6. There you go, feel free to use these .svg's anywhere you need.
