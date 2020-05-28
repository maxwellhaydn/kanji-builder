import textwrap
import unittest
from unittest.mock import mock_open, patch

from edrdg import parse_radkfile

class TestRadkfile(unittest.TestCase):
    mock_data = textwrap.dedent(
        """\
        # comment
        # another comment
        $ 一 1
        亜唖阿姶悪芦
        或袷夷椅畏異
        何可夏寡歌河
        # comment
        $ 化 2 js01
        伊位依偉荏液億俺化
        $ 刈 2 3331
        劃割刈苅刊帰刑型
        $ 鼓 13
        鼓瞽皷鼕鼔
        """
    )

    def test_parse_radkfile(self):
        with patch('edrdg.open', mock_open(read_data=self.mock_data)) as m:
            radkfile = parse_radkfile()
            m.assert_called_once_with('radkfile')
            self.assertDictEqual(radkfile, {
                '一': {
                    'id': 1,
                    'strokes': 1,
                    'characters': {
                        '亜', '唖', '阿', '姶', '悪', '芦', '或', '袷', '夷',
                        '椅', '畏', '異', '何', '可', '夏', '寡', '歌', '河'
                    }
                },
                '化': {
                    'id': 2,
                    'strokes': 2,
                    'characters': {
                        '伊', '位', '依', '偉', '荏', '液', '億', '俺', '化'
                    }
                },
                '刈': {
                    'id': 3,
                    'strokes': 2,
                    'characters': {
                        '劃', '割', '刈', '苅', '刊', '帰', '刑', '型'
                    }
                },
                '鼓': {
                    'id': 4,
                    'strokes': 13,
                    'characters': {
                        '鼓', '瞽', '皷', '鼕', '鼔'
                    }
                }
            })

        with patch('edrdg.open', mock_open(read_data=self.mock_data)) as m:
            radkfile = parse_radkfile(path='foo')
            m.assert_called_once_with('foo')

if __name__ == '__main__':
    unittest.main()
