import sys
from pathlib import Path
import tree_sitter_python as tspython
from tree_sitter import Language, Parser, Query, QueryCursor

PY = Language(tspython.language())
parser = Parser(PY)

Q_TODO = Query(PY, '((comment) @c (#match? @c "TODO|FIXME"))')

def cek_file(path):
    tree = parser.parse(path.read_bytes())

    # Fitur 1: komentar TODO/FIXME (sudah jadi)
    for node in QueryCursor(Q_TODO).captures(tree.root_node).get("c", []):
        print(f"{path}:{node.start_point[0] + 1}: {node.text.decode().strip()}")

    # Fitur 2: fungsi yang lebih dari 30 baris
    def cari_fungsi(node):
        if node.type == "function_definition":
            jumlah_baris = node.end_point[0] - node.start_point[0] + 1

            if jumlah_baris > 30:
                nama = node.child_by_field_name("name")
                print(
                    f"{path}: Fungsi {nama.text.decode()} "
                    f"memiliki {jumlah_baris} baris"
                )

        for child in node.children:
            cari_fungsi(child)

    cari_fungsi(tree.root_node)

    # Fitur 3: file yang pohonnya mengandung error
    if tree.root_node.has_error:
        print(f"{path}: Ditemukan syntax error")


for path in Path(sys.argv[1]).rglob("*.py"):
    cek_file(path)