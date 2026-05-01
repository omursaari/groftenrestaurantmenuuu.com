import re
from pathlib import Path
text = Path('groften_new.js').read_text(encoding='utf-8')
count = 0
for match in re.finditer(r"desc\s*:\s*\{([^}]+?)\}", text, re.DOTALL):
    block = match.group(1)
    if re.search(r"'(?:[^']+)'", block) and not re.search(r"\btr\s*:\s*''|\ben\s*:\s*''|\bru\s*:\s*''|\bdk\s*:\s*''|\bfi\s*:\s*''|\bse\s*:\s*''|\bno\s*:\s*''|\bnl\s*:\s*''|\bde\s*:\s*''", block):
        print(block.strip())
        count += 1
        if count >= 10:
            break
print('printed', count)
