'''
Script for calculating repository statistics
'''

print(">>> python / processing stats...")

import json
import os
from pathlib import Path

import git


root = Path(__file__).parents[2]
repo = git.Repo(root)

files = list(root.glob("**/*"))
folders = list(root.glob("**/*"))

data = {
  "commits": repo.git.rev_list("--count", "HEAD"),
  "total-size": sum(os.stat(each).st_size for each in files),

  "source-folders": sum(1 for each in folders if each.is_dir()),
  "source-files": len(files),
    "readme": sum(1 for each in files if each.name.casefold() == "readme.md"),
    "md": sum(1 for each in files if each.suffix == ".md"),
    "svelte": sum(1 for each in files if each.suffix == ".svelte"),
    "ts": sum(1 for each in files if each.suffix == ".ts"),
    "scss": sum(1 for each in files if each.suffix == ".scss"),
}

with open(root / ".site/src/data/stats.json", "w") as dest:
  json.dump(data, dest, indent = 2)


print("           / done!")
