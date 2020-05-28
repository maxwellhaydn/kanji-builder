"""
Generate input data for training an AWS SageMaker image classification model.
The model will try to find character radicals/elements in images. This script
outputs two RecordIO .rec files: one for model training and one for validation.
"""

from edrdg import parse_kanjidic

def get_characters_below_grade(grade):
    """Get kanji below the given grade level.

    Returns:
    A set of characters
    """

    kanjidic = parse_kanjidic()
    return {x for x in kanjidic
            if 'grade' in kanjidic[x] and kanjidic[x]['grade'] < grade}
