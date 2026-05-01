import re
from pathlib import Path
text = Path('groften_new.js').read_text(encoding='utf-8')
count = 0
for match in re.finditer(r"desc\s*:\s*\{([^}]+?)\}", text, re.DOTALL):
    block = match.group(1)
    if re.search(r"\ben\s*:\s*'[^']+'", block) and re.search(r"\bdk\s*:\s*''", block):
        count += 1
print(count)
