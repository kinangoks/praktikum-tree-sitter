import tree_sitter_python as tspython
from tree_sitter import Language, Parser

parser = Parser(Language(tspython.language()))

kode = b"""
def sapa(nama):
    print("Halo", nama)
"""
tree = parser.parse(kode)
print(tree.root_node)