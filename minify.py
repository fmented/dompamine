import os
from rjsmin import jsmin as minifier
from pathlib import Path

in_dir = "dompamine-dev"
out_dir = "dompamine-min"

exclude = set(['.git', '.gitignore', 'index.html', 'index.js'])

for root, dirs, files in os.walk(in_dir, topdown=True):
    dirs[:] = [d for d in dirs if d not in exclude]
    files[:] = [d for d in files if d not in exclude]
    for f in files:
        inpath = os.path.abspath(os.path.join(root, f))
        outpath = inpath.replace(in_dir, out_dir)
        jsdev = open(inpath,'r')
        try:
            jsmin =  open(outpath, 'a')
        except:
            p=Path(os.path.dirname(outpath))
            p.mkdir(exist_ok=True)
            jsmin =  open(outpath, 'w+')
        dev = jsdev.read()
        minify = minifier(dev)
        print(minify, file=jsmin)
        print("{jsmin} written succesfully")
        jsdev.close()
        jsmin.close()
print("done")