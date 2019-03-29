from player import Player


def test_import():
    assert 'Player' == Player.__name__


def test_construction():
    p = Player('Tatiana', 'Jones')
    assert 'Tatiana' == p.first_name
    assert 'Jones' == p.last_name
