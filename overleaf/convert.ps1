# Replace this with your actual full path to inkscape.exe
$inkscapePath = "C:\Program Files\Inkscape\bin\inkscape.exe"

# Wrap the path in & "..." to call it
Get-ChildItem -Filter *.pdf | ForEach-Object {
    $name = $_.BaseName
    Write-Host "Converting $($_.Name) → $name.svg"
    & "$inkscapePath" "$($_.FullName)" `
        --export-type=svg `
        --export-plain-svg `
        --pdf-poppler `
        --export-text-to-path `
        --export-filename="$name.svg"
}

Write-Host "`n✅ All files converted."
