import re
from pathlib import Path
text = Path(r'c:\Users\Mert\Desktop\Yeni klasör\groften_new.js').read_text(encoding='utf-8')
name_blank = 0
desc_blank = 0
for match in re.finditer(r"(name|desc)\s*:\s*\{([^}]+?)\}", text, re.DOTALL):
    kind = match.group(1)
    block = match.group(2)
    if re.search(r"\b(dk|fi|se|no|nl|de)\s*:\s*''", block):
        if kind == 'name':
            name_blank += 1
        else:
            desc_blank += 1
print('name blank count:', name_blank)
print('desc blank count:', desc_blank)
