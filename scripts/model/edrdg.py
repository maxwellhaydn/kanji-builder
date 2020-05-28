"""
Functions for parsing dictionary files from the Electronic Dictionary Research
and Development Group (EDRDG), like KANJIDIC and RADKFILE/KRADFILE.
"""

def parse_radkfile(path='radkfile'):
    """Parse the supplied radkfile.

    Keyword arguments:
    path -- the path to the file (default 'radkfile')

    Returns:
    A dictionary with character radicals/elements as keys and dictionaries
    containing information about each element as values, e.g.

        {
            '一': {
                'strokes': 1
                'characters': {'亜', '唖', '阿', ...}
            },
            '｜': {
                'strokes': 1
                'characters': {'亜', '唖', '逢', ...}
            },
            ...
        }
    """

    data = {}
    id = 0

    with open(path) as f:
        for line in f:
            if line.startswith('#'):
                continue

            if line.startswith('$'):
                id += 1
                element, strokes = line.split()[1:3]
                data.setdefault(element, {})
                data[element].setdefault('characters', set())
                data[element]['id'] = id
                data[element]['strokes'] = int(strokes)
            else:
                data[element]['characters'].update(set(line.strip()))

    return data

def parse_kradfile(path='kradfile'):
    """Parse the supplied kradfile.

    Keyword arguments:
    path -- the path to the file (default 'kradfile')

    Returns:
    A dictionary with characters as keys and sets of their component
    radicals/elements as values, e.g.

        {
            '亜': {'｜', '一', '口'},
            '緯': {'口', '糸', '幺', '小', '韋'},
            '一': {'一'},
            ...
        }
    """

    data = {}

    with open(path) as f:
        for line in f:
            if line.startswith('#'):
                continue

            character, elements = line.split(' : ', 1)
            data[character] = set(elements.split())

    return data
