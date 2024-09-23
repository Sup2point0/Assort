import json
from pathlib import Path


if __name__ == "__main__":
  print(">> running!")

  SITE = Path(__file__).parent.parent
  route = SITE / "src" / "data" / "status.json"

  with open(route, "r", encoding = "utf-8") as source:
    data = json.load(source)

  data["standard"].sort()

  with open(route, "w", encoding = "utf-8") as dest:
    json.dump(data, dest, indent = 2, ensure_ascii = False)

  print(">> done!")
