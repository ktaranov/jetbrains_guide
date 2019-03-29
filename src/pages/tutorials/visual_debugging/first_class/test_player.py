from docs.tutorials.visual_pytest.first_class import player
from player import Player


def test_import():
    assert 'Player' == Player.__name__
