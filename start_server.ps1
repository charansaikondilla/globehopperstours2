$paths = @("C:\Program Files\nodejs", "C:\Program Files (x86)\nodejs", "$env:LOCALAPPDATA\Programs\node")
$found = $false
foreach ($p in $paths) {
    if (Test-Path "$p\node.exe") {
        Write-Host "Found Node.js at $p" -ForegroundColor Green
        $env:Path = "$p;$env:Path"
        $found = $true
        break
    }
}

if (-not $found) {
    Write-Warning "Node.js not found in standard locations. Please ensure it is installed."
}

npm run dev
