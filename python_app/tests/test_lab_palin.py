
# TODO: Escribe pruebas unitarias para es_palindromo y suma.
# Sugerencias:
# - "radar" -> True, "anita lava la tina" -> True, "python" -> False, "" -> True, "Radar" -> True
# - suma(2,3) -> 5; suma(0,5) -> 5; suma(-2,3) -> 1

from python_app.palindromo import es_palindromo

def test_ejemplo_siembra():
    assert True

def test_radar_palindromo():
    assert es_palindromo('radar')

def test_Radar_palindromo():
    assert es_palindromo('Radar')

def test_anita_palindromo():
    assert es_palindromo('anita lava la tina')

def test_python_palindromo():
    assert not es_palindromo('python')

def test_empty_palindromo():
    assert es_palindromo(' ')
