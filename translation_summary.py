import re
from pathlib import Path
text = Path('groften_new.js').read_text(encoding='utf-8')
langs = ['dk','fi','se','no','nl','de']
summary = {kind: {lang: 0 for lang in langs} for kind in ['name','desc']}
for match in re.finditer(r"(name|desc)\s*:\s*\{([^}]+?)\}", text, re.DOTALL):
    kind = match.group(1)
    block = match.group(2)
    for lang in langs:
        if re.search(rf"\b{lang}\s*:\s*''", block):
            summary[kind][lang] += 1
print('Translation blank summary:')
for kind in ['name','desc']:
    print(kind)
    for lang in langs:
        print(f'  {lang}: {summary[kind][lang]}')
