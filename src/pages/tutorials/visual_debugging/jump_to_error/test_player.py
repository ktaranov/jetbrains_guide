import pytest
from guardian import Guardian
from player import Player
from pytest import skip


def test_import():
    assert 'Player' == Player.__name__


def test_construction():
    p = Player('Tatiana', 'Jones')
    assert 'Tatiana' == p.first_name
    assert 'Jones' == p.last_name
    assert [] == p.guardians


def test_add_guardian():
    g = Guardian('Mary', 'Jones')
    p = Player('Tatiana', 'Jones')
    p.add_guardian(g)
    assert [g] == p.guardians


@pytest.mark.skip
def test_diff():
    l1 = [dict(x=1, y=2, z=3), dict(x=1, y=2, z=3), dict(x=1, y=2, z=3)]
    l2 = [dict(x=1, y=2, z=3), dict(x=1, y=2, z=99), dict(x=1, y=2, z=3)]
    assert l1 == l2
