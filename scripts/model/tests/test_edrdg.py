from io import StringIO
import textwrap
import unittest
from unittest.mock import mock_open, patch

from edrdg import parse_radkfile, parse_kradfile, parse_kanjidic

class TestEdrdg(unittest.TestCase):

    def test_parse_radkfile(self):
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

        with patch('edrdg.open', mock_open(read_data=mock_data)) as m:
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

        with patch('edrdg.open', mock_open(read_data=mock_data)) as m:
            radkfile = parse_radkfile(path='foo')
            m.assert_called_once_with('foo')

    def test_parse_kradfile(self):
        mock_data = textwrap.dedent(
            """\
            # comment
            # another comment
            亜 : ｜ 一 口
            緯 : 口 糸 幺 小 韋
            # comment
            一 : 一
            齲 : ノ 止 歯 虫 米 冂 凵 禹
            """
        )

        with patch('edrdg.open', mock_open(read_data=mock_data)) as m:
            kradfile = parse_kradfile()
            m.assert_called_once_with('kradfile')
            self.assertDictEqual(kradfile, {
                '亜': {'｜', '一', '口'},
                '緯': {'口', '糸', '幺', '小', '韋'},
                '一': {'一'},
                '齲': {'ノ', '止', '歯', '虫', '米', '冂', '凵', '禹'}
            })

        with patch('edrdg.open', mock_open(read_data=mock_data)) as m:
            kradfile = parse_kradfile(path='foo')
            m.assert_called_once_with('foo')

    def test_parse_kanjidic(self):
        mock_data = textwrap.dedent(
            """\
            <?xml version="1.0" encoding="UTF-8"?>
            <!DOCTYPE kanjidic2 [
                <!-- documentation -->
            ]>
            <kanjidic2>
            <!-- Entry for Kanji: 亜 -->
            <character>
            <literal>亜</literal>
            <misc>
            <grade>8</grade>
            <stroke_count>7</stroke_count>
            </misc>
            </character>
            <!-- Entry for Kanji: 水 -->
            <character>
            <literal>水</literal>
            <misc>
            <grade>1</grade>
            <stroke_count>4</stroke_count>
            </misc>
            </character>
            <!-- Entry for Kanji: 唖 -->
            <character>
            <literal>唖</literal>
            <misc>
            <stroke_count>10</stroke_count>
            </misc>
            </character>
            </kanjidic2>
            """
        )

        kanjidic = parse_kanjidic(path=StringIO(initial_value=mock_data))
        self.assertDictEqual(kanjidic, {
            '亜': {'grade': 8},
            '水': {'grade': 1},
            '唖': {}
        })

        with patch('edrdg.ET', autospec=True) as m:
            kanjidic = parse_kanjidic()
            m.parse.assert_called_once_with('kanjidic2.xml')

if __name__ == '__main__':
    unittest.main()
