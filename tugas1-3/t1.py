import tree_sitter_python as tspython
from tree_sitter import Language, Parser

parser = Parser(Language(tspython.language()))

kode = b"""
class Mahasiswa:
    def __init__(self, nama):
        self.nama = nama

    def sapa(self):
        print("Halo", self.nama)
"""

tree = parser.parse(kode)
print(tree.root_node)