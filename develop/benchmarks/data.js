window.BENCHMARK_DATA = {
  "lastUpdate": 1764095819364,
  "repoUrl": "https://github.com/tudo-seal/cosy",
  "entries": {
    "Benchmark CoSy": [
      {
        "commit": {
          "author": {
            "email": "16308584+Jekannadar@users.noreply.github.com",
            "name": "Constantin Chaumet",
            "username": "Jekannadar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9696582f4f73336755aca6adbab9b7eee3face52",
          "message": "Extract and rename the easy to use interface 'CoSy' to 'Maestro' (#52)\n\n* Extract and rename the easy to use interface 'CoSy' to 'Maestro'\n\n* Reformat files with 'hatch fmt'",
          "timestamp": "2025-11-25T19:36:34+01:00",
          "tree_id": "68accad24ecb9ef0ad5499812d74f127f182790a",
          "url": "https://github.com/tudo-seal/cosy/commit/9696582f4f73336755aca6adbab9b7eee3face52"
        },
        "date": 1764095819160,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_benchmark_maximal_elements.py::test_benchmark_maximal_elements",
            "value": 9.885223959569895,
            "unit": "iter/sec",
            "range": "stddev: 0.00092765385488887",
            "extra": "mean: 101.16108689999876 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_maze.py::test_benchmark_maze",
            "value": 4.170099621252969,
            "unit": "iter/sec",
            "range": "stddev: 0.011748820288563415",
            "extra": "mean: 239.80242459999914 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_contains.py::test_benchmark_maze_contains",
            "value": 3.8756487945569074,
            "unit": "iter/sec",
            "range": "stddev: 0.011912461538197094",
            "extra": "mean: 258.0213154000006 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_loopfree.py::test_benchmark_maze_loopfree",
            "value": 4.04515388133877,
            "unit": "iter/sec",
            "range": "stddev: 0.004752526210955358",
            "extra": "mean: 247.20938420000067 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}