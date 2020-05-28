import unittest
from unittest.mock import patch

from generate_input_data import get_characters_below_grade

class TestGenerateInputData(unittest.TestCase):

    @patch('generate_input_data.parse_kanjidic')
    def test_get_characters_below_grade(self, mock_parse_kanjidic):
        mock_parse_kanjidic.return_value = {
            '亜': {'grade': 8},
            '水': {'grade': 1},
            '唖': {},
            '悪': {'grade': 3},
            '引': {'grade': 2},
            '胤': {'grade': 9}
        }

        characters = get_characters_below_grade(3)
        self.assertEqual(characters, {'水', '引'})
