#!/bin/bash

# Batch convert PDFs to SVG with text-to-path using Inkscape
for file in *.pdf; do
  name="${file%.pdf}"
  echo "Converting $file → $name.svg"
  inkscape "$file" --export-type=svg --export-plain-svg --pdf-poppler --export-text-to-path --export-filename="$name.svg"
done

echo "✅ All files converted."
