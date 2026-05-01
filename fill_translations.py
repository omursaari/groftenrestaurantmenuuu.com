import re
from pathlib import Path

path = Path(r'c:\Users\Mert\Desktop\Yeni klasör\groften_new.js')
text = path.read_text(encoding='utf-8')

word_maps = {
    'dk': {
        'turkish':'tyrkisk','english':'engelsk','breakfast':'morgenmad','salami':'salami','toast':'toast','cheese':'ost','combo':'kombo','plain':'almindelig','omelette':'omelet','bacon':'bacon','mushroom':'svampe','mixed':'blandet','chicken':'kylling','grill':'grill','curry':'karry','garlic':'hvidløg','pepper':'peber','meat':'kød','doner':'döner','kebab':'kebab','steak':'bøf','fillet':'filet','pizza':'pizza','sea':'hav','seafood':'fisk og skaldyr','shrimp':'reje','salad':'salat','soup':'suppe','tomato':'tomat','lentil':'linse','green':'grøn','tuna':'tun','ice':'is','cream':'fløde','coffee':'kaffe','milkshake':'milkshake','vanilla':'vanilje','strawberry':'jordbær','banana':'banan','cocoa':'kakao','blue':'blå','hawaiian':'hawaii','bolognese':'bolognese','mexican':'mexicansk','grilled':'grillet','fried':'stegt','roast':'stege','mix':'mix','special':'special','secret':'hemmelig','fresh':'frisk','lemon':'citron','orange':'appelsin','juice':'juice','lime':'lime','cola':'cola','salt':'salt','paprika':'paprika','spice':'krydderi','beer':'øl','whisky':'whisky','vodka':'vodka','rum':'rom','gin':'gin','tequila':'tequila','malibu':'Malibu','pineapple':'ananas','sprite':'Sprite','banana':'banan','granadine':'grenadine','whipped':'pisket','jam':'marmelade','butter':'smør','dough':'dej'
    },
    'fi': {
        'turkish':'turkkilainen','english':'englantilainen','breakfast':'aamiainen','salami':'salami','toast':'toast','cheese':'juusto','combo':'combo','plain':'tavallinen','omelette':'omeletti','bacon':'pekoni','mushroom':'sieni','mixed':'sekoitettu','chicken':'kana','grill':'grilli','curry':'currykastike','garlic':'valkosipuli','pepper':'pippuri','meat':'liha','doner':'döner','kebab':'kebab','steak':'pihvi','fillet':'filee','pizza':'pizza','sea':'meri','seafood':'merenelävät','shrimp':'katkarapu','salad':'salaatti','soup':'keitto','tomato':'tomaatti','lentil':'linssi','green':'vihreä','tuna':'tonnikala','ice':'jää','cream':'kerma','coffee':'kahvi','milkshake':'milkshake','vanilla':'vanilja','strawberry':'mansikka','banana':'banaani','cocoa':'kaakao','blue':'sininen','hawaiian':'hawaii','bolognese':'bolognese','mexican':'meksikolainen','grilled':'grillattu','fried':'paistettu','roast':'paistettu','mix':'sekoitus','special':'erityinen','secret':'salainen','fresh':'tuore','lemon':'sitruuna','orange':'appelsiini','juice':'mehu','lime':'lime','cola':'cola','salt':'suola','paprika':'paprika','spice':'mauste','beer':'olut','whisky':'viski','vodka':'vodka','rum':'rommi','gin':'gin','tequila':'tequila','malibu':'Malibu','pineapple':'ananas','sprite':'Sprite','granadine':'grenadiini','whipped':'vatkattu','jam':'hillo','butter':'voi','dough':'taikina'
    },
    'se': {
        'turkish':'turkisk','english':'engelsk','breakfast':'frukost','salami':'salami','toast':'toast','cheese':'ost','combo':'kombinerad','plain':'naturell','omelette':'omelett','bacon':'bacon','mushroom':'svamp','mixed':'blandad','chicken':'kyckling','grill':'grill','curry':'curry','garlic':'vitlök','pepper':'peppar','meat':'kött','doner':'döner','kebab':'kebab','steak':'stek','fillet':'filé','pizza':'pizza','sea':'hav','seafood':'skaldjur','shrimp':'räka','salad':'sallad','soup':'soppa','tomato':'tomat','lentil':'linser','green':'grön','tuna':'tonfisk','ice':'is','cream':'grädde','coffee':'kaffe','milkshake':'milkshake','vanilla':'vanilj','strawberry':'jordgubbe','banana':'banan','cocoa':'kakao','blue':'blå','hawaiian':'hawaii','bolognese':'bolognese','mexican':'mexikansk','grilled':'grillad','fried':'friterad','roast':'rostad','mix':'mix','special':'special','secret':'hemlig','fresh':'färsk','lemon':'citron','orange':'apelsin','juice':'juice','lime':'lime','cola':'cola','salt':'salt','paprika':'paprika','spice':'krydda','beer':'öl','whisky':'whisky','vodka':'vodka','rum':'rom','gin':'gin','tequila':'tequila','malibu':'Malibu','pineapple':'ananas','sprite':'Sprite','granadine':'grenadin','whipped':'vispad','jam':'sylt','butter':'smör','dough':'deg'
    },
    'no': {
        'turkish':'tyrkisk','english':'engelsk','breakfast':'frokost','salami':'salami','toast':'toast','cheese':'ost','combo':'kombinasjon','plain':'naturell','omelette':'omelett','bacon':'bacon','mushroom':'sopp','mixed':'blandet','chicken':'kylling','grill':'grill','curry':'curry','garlic':'hvitløk','pepper':'pepper','meat':'kjøtt','doner':'döner','kebab':'kebab','steak':'biff','fillet':'filet','pizza':'pizza','sea':'hav','seafood':'sjømat','shrimp':'reke','salad':'salat','soup':'suppe','tomato':'tomat','lentil':'linser','green':'grønn','tuna':'tunfisk','ice':'is','cream':'fløte','coffee':'kaffe','milkshake':'milkshake','vanilla':'vanilje','strawberry':'jordbær','banana':'banan','cocoa':'kakao','blue':'blå','hawaiian':'hawaii','bolognese':'bolognese','mexican':'meksikansk','grilled':'grillet','fried':'stekt','roast':'stekt','mix':'mix','special':'spesial','secret':'hemmelig','fresh':'fersk','lemon':'sitron','orange':'appelsin','juice':'juice','lime':'lime','cola':'cola','salt':'salt','paprika':'paprika','spice':'krydder','beer':'øl','whisky':'whisky','vodka':'vodka','rum':'rom','gin':'gin','tequila':'tequila','malibu':'Malibu','pineapple':'ananas','sprite':'Sprite','granadine':'grenadin','whipped':'pisket','jam':'syltetøy','butter':'smør','dough':'deig'
    },
    'nl': {
        'turkish':'Turks','english':'Engels','breakfast':'ontbijt','salami':'salami','toast':'toast','cheese':'kaas','combo':'combi','plain':'naturel','omelette':'omelet','bacon':'spek','mushroom':'champignon','mixed':'gemengd','chicken':'kip','grill':'grill','curry':'curry','garlic':'knoflook','pepper':'peper','meat':'vlees','doner':'döner','kebab':'kebab','steak':'biefstuk','fillet':'filet','pizza':'pizza','sea':'zee','seafood':'zeevruchten','shrimp':'garnalen','salad':'salade','soup':'soep','tomato':'tomaat','lentil':'linzen','green':'groen','tuna':'tonijn','ice':'ijs','cream':'room','coffee':'koffie','milkshake':'milkshake','vanilla':'vanille','strawberry':'aardbei','banana':'banaan','cocoa':'cacao','blue':'blauw','hawaiian':'hawaii','bolognese':'bolognese','mexican':'mexicaans','grilled':'gegrild','fried':'gebakken','roast':'geroosterd','mix':'mix','special':'special','secret':'geheim','fresh':'vers','lemon':'citroen','orange':'sinaasappel','juice':'sap','lime':'limoen','cola':'cola','salt':'zout','paprika':'paprika','spice':'kruid','beer':'bier','whisky':'whisky','vodka':'vodka','rum':'rum','gin':'gin','tequila':'tequila','malibu':'Malibu','pineapple':'ananas','sprite':'Sprite','granadine':'granaatappel','whipped':'geslagen','jam':'jam','butter':'boter','dough':'deeg'
    },
    'de': {
        'turkish':'türkisch','english':'englisch','breakfast':'Frühstück','salami':'Salami','toast':'Toast','cheese':'Käse','combo':'Kombi','plain':'Natur','omelette':'Omelett','bacon':'Speck','mushroom':'Pilz','mixed':'gemischt','chicken':'Hähnchen','grill':'Grill','curry':'Curry','garlic':'Knoblauch','pepper':'Pfeffer','meat':'Fleisch','doner':'Döner','kebab':'Kebab','steak':'Steak','fillet':'Filet','pizza':'Pizza','sea':'Meer','seafood':'Meeresfrüchte','shrimp':'Garnelen','salad':'Salat','soup':'Suppe','tomato':'Tomate','lentil':'Linsen','green':'Grün','tuna':'Thunfisch','ice':'Eis','cream':'Sahne','coffee':'Kaffee','milkshake':'Milkshake','vanilla':'Vanille','strawberry':'Erdbeere','banana':'Banane','cocoa':'Kakao','blue':'Blau','hawaiian':'Hawaii','bolognese':'Bolognese','mexican':'mexikanisch','grilled':'gegrillt','fried':'gebraten','roast':'geröstet','mix':'Mix','special':'Special','secret':'Geheim','fresh':'frisch','lemon':'Zitrone','orange':'Orange','juice':'Saft','lime':'Limette','cola':'Cola','salt':'Salz','paprika':'Paprika','spice':'Gewürz','beer':'Bier','whisky':'Whisky','vodka':'Wodka','rum':'Rum','gin':'Gin','tequila':'Tequila','malibu':'Malibu','pineapple':'Ananas','sprite':'Sprite','granadine':'Grenadine','whipped':'geschlagen','jam':'Marmelade','butter':'Butter','dough':'Teig'
    }
}

phrase_map = {
    'Turkish Breakfast': {'dk':'Tyrkisk morgenmad','fi':'Turkkilainen aamiainen','se':'Turkisk frukost','no':'Tyrkisk frokost','nl':'Turks ontbijt','de':'Türkisches Frühstück'},
    'English Breakfast': {'dk':'Engelsk morgenmad','fi':'Englantilainen aamiainen','se':'Engelsk frukost','no':'Engelsk frokost','nl':'Engels ontbijt','de':'Englisches Frühstück'},
    'Turkish Omelette Breakfast': {'dk':'Tyrkisk omelet morgenmad','fi':'Turkkilainen omelettiaamiainen','se':'Turkisk omelettfrukost','no':'Tyrkisk omelettfrokost','nl':'Turks omeletontbijt','de':'Türkisches Omelett-Frühstück'},
    'Chicken Basket & Chips': {'dk':'Kyllingkurv & pommes frites','fi':'Kanasetti & ranskalaiset','se':'Kycklingkorg & pommes frites','no':'Kyllingkurv & pommes frites','nl':'Kipmand & frietjes','de':'Hähnchenkorb & Pommes'},
    'Cheese Sandwich': {'dk':'Ostesandwich','fi':'Juustosämpylä','se':'Ostsmörgås','no':'Ostesandwich','nl':'Kaassandwich','de':'Käsesandwich'},
    'Salami Sandwich': {'dk':'Salamisandwich','fi':'Salamisämpylä','se':'Salamisandwich','no':'Salamisandwich','nl':'Salami sandwich','de':'Salami-Sandwich'},
    'Combo Sandwich': {'dk':'Kombosandwich','fi':'Komboleipä','se':'Kombosandwich','no':'Kombosandwich','nl':'Combi sandwich','de':'Kombi-Sandwich'},
    'Chicken Wrap': {'dk':'Kyllingewrap','fi':'Kanaswrap','se':'Kycklingwrap','no':'Kyllingwrap','nl':'Kipwrap','de':'Hähnchen-Wrap'},
    'Pancakes': {'dk':'Pandekager','fi':'Pannukakut','se':'Pannkakor','no':'Pannekaker','nl':'Pannenkoeken','de':'Pfannkuchen'},
    'Ice Cream': {'dk':'Is','fi':'Jäätelö','se':'Glass','no':'Is','nl':'IJs','de':'Eis'},
    'Cheesecake Lemon': {'dk':'Citroncheesecake','fi':'Sitruunajuustokakku','se':'Citroncheesecake','no':'Sitroncheesecake','nl':'Citroenkaasgebak','de':'Zitronen-Käsekuchen'},
    'Black Russian': {'dk':'Black Russian','fi':'Black Russian','se':'Black Russian','no':'Black Russian','nl':'Black Russian','de':'Black Russian'},
    'White Russian': {'dk':'White Russian','fi':'White Russian','se':'White Russian','no':'White Russian','nl':'White Russian','de':'White Russian'},
    'Cuba Libre': {'dk':'Cuba Libre','fi':'Cuba Libre','se':'Cuba Libre','no':'Cuba Libre','nl':'Cuba Libre','de':'Cuba Libre'},
    'Taj Col': {'dk':'Taj Col','fi':'Taj Col','se':'Taj Col','no':'Taj Col','nl':'Taj Col','de':'Taj Col'}
}


def translate_text(text, lang):
    if text in phrase_map and lang in phrase_map[text]:
        return phrase_map[text][lang]
    parts = re.split(r'([\s,&\-/\\\(\)\"]+)', text)
    result = []
    for part in parts:
        if not part or re.match(r'[\s,&\-/\\\(\)\"]+', part):
            result.append(part)
            continue
        key = part.lower()
        if key in word_maps[lang]:
            tr = word_maps[lang][key]
            if part[0].isupper():
                tr = tr.capitalize()
            result.append(tr)
        else:
            result.append(part)
    return ''.join(result)


def translate_desc(text, lang):
    if not text.strip():
        return ''
    segments = [seg.strip() for seg in text.split(',')]
    translated = []
    for seg in segments:
        seg = re.sub(r'\bwith\b', {'dk':'med','fi':'kanssa','se':'med','no':'med','nl':'met','de':'mit'}[lang], seg, flags=re.I)
        words = re.split(r'([\s\-\/\(\)]+)', seg)
        twords = []
        for w in words:
            if not w or re.match(r'[\s\-\/\(\)]+', w):
                twords.append(w)
                continue
            key = w.lower()
            if key in word_maps[lang]:
                t = word_maps[lang][key]
                if w[0].isupper():
                    t = t.capitalize()
                twords.append(t)
            else:
                twords.append(w)
        translated.append(''.join(twords))
    return ', '.join(translated)


pattern = re.compile(r"(name|desc)\s*:\s*\{([^}]+?)\}", re.DOTALL)

def build_block(entries, order):
    return ', '.join(f"{k}: '{entries[k]}'" for k in order)

out = text
pos = 0
count = 0

for match in pattern.finditer(text):
    kind = match.group(1)
    block = match.group(2)
    entries = dict(re.findall(r"(\w+)\s*:\s*'([^']*)'", block))
    if 'en' not in entries or 'tr' not in entries or 'ru' not in entries:
        continue
    changed = False
    for lang in ['dk','fi','se','no','nl','de']:
        if entries.get(lang, '') == '':
            if kind == 'name':
                entries[lang] = translate_text(entries['en'], lang)
            else:
                entries[lang] = translate_desc(entries['en'], lang)
            changed = True
    if changed:
        order = [k for k,_ in re.findall(r"(\w+)\s*:\s*'([^']*)'", block)]
        for lang in ['dk','fi','se','no','nl','de']:
            if lang not in order:
                order.append(lang)
        new_block = build_block(entries, order)
        out = out[:match.start(2)+pos] + new_block + out[match.end(2)+pos:]
        pos += len(new_block) - len(block)
        count += 1

if count == 0:
    print('No blocks updated.')
else:
    path.write_text(out, encoding='utf-8')
    print(f'Updated {count} blocks.')
