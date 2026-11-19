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

for c in tree.root_node.children[0].children:
    print(c.type, "bernama" if c.is_named else "anonim")

    parameters = tree.root_node.children[0].child_by_field_name("body").children[0].child_by_field_name("parameters")

    print("\nAnak-anak node parameters:")
    for c in parameters.children:
        print(c.type, "bernama" if c.is_named else "anonim")