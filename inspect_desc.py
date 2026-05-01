import re
from pathlib import Path
text = Path('groften_new.js').read_text(encoding='utf-8')
desc_with_text = 0
desc_no_text = 0
for match in re.finditer(r"desc\s*:\s*\{([^}]+?)\}", text, re.DOTALL):
    block = match.group(1)
    if re.search(r"'(?:[^']*)'", block) and not re.search(r"\btr\s*:\s*''|\ben\s*:\s*''|\bru\s*:\s*''|\bdk\s*:\s*''|\bfi\s*:\s*''|\bse\s*:\s*''|\bno\s*:\s*''|\bnl\s*:\s*''|\bde\s*:\s*''", block):
        desc_with_text += 1
    elif re.search(r"\btr\s*:\s*''|\ben\s*:\s*''|\bru\s*:\s*''|\bdk\s*:\s*''|\bfi\s*:\s*''|\bse\s*:\s*''|\bno\s*:\s*''|\bnl\s*:\s*''|\bde\s*:\s*''", block):
        # if all are blank or some blank
        if not re.search(r"\btr\s*:\s*'[^']+'|\ben\s*:\s*'[^']+'|\bru\s*:\s*'[^']+'|\bdk\s*:\s*'[^']+'|\bfi\s*:\s*'[^']+'|\bse\s*:\s*'[^']+'|\bno\s*:\s*'[^']+'|\bnl\s*:\s*'[^']+'|\bde\s*:\s*'[^']+'", block):
            desc_no_text += 1
print('desc objects with non-empty entry:', desc_with_text)
print('desc objects empty:', desc_no_text)
