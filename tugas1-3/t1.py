import tree_sitter_python as tspython
from tree_sitter import Language, Parser

parser = Parser(Language(tspython.language()))

kode = b"""
nilai = 80

if nilai >= 75:
    print("Lulus")
else:
    print("Tidak lulus")
"""

tree = parser.parse(kode)
print(tree.root_node)