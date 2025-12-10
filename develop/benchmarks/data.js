window.BENCHMARK_DATA = {
  "lastUpdate": 1765374488423,
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
      },
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
          "id": "ef99c51a50ecb4a1dc062ccaf7bbccf7bc2a5301",
          "message": "Remove local stub from SemVer version to comply with PEP440 (#53)",
          "timestamp": "2025-11-26T14:52:06+01:00",
          "tree_id": "6afa37f35b7882e37b1e829ebdf17f45917bd307",
          "url": "https://github.com/tudo-seal/cosy/commit/ef99c51a50ecb4a1dc062ccaf7bbccf7bc2a5301"
        },
        "date": 1764165152360,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_benchmark_maximal_elements.py::test_benchmark_maximal_elements",
            "value": 9.962084684250664,
            "unit": "iter/sec",
            "range": "stddev: 0.0004617887281894475",
            "extra": "mean: 100.38059620000297 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_maze.py::test_benchmark_maze",
            "value": 3.954854362970587,
            "unit": "iter/sec",
            "range": "stddev: 0.017238770465210586",
            "extra": "mean: 252.85381159999932 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_contains.py::test_benchmark_maze_contains",
            "value": 3.6095656773711142,
            "unit": "iter/sec",
            "range": "stddev: 0.019410321438580874",
            "extra": "mean: 277.041641400001 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_loopfree.py::test_benchmark_maze_loopfree",
            "value": 3.8150404393867325,
            "unit": "iter/sec",
            "range": "stddev: 0.01982246128508269",
            "extra": "mean: 262.1204193999972 msec\nrounds: 5"
          }
        ]
      },
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
          "id": "66126ba81531a3fbe7e9dce9860d07eeb31b5f78",
          "message": "Update README.md to build badges based on pypi.org (#54)\n\n* Update README.md to build badges based on pypi.org (instead of test.pypi.org)\n\n* Rename release step in pre-release workflow to pre-release",
          "timestamp": "2025-11-26T15:14:07+01:00",
          "tree_id": "8cc10209465656f33a91b31e683368b624c07bbe",
          "url": "https://github.com/tudo-seal/cosy/commit/66126ba81531a3fbe7e9dce9860d07eeb31b5f78"
        },
        "date": 1764166477695,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_benchmark_maximal_elements.py::test_benchmark_maximal_elements",
            "value": 9.97636778047421,
            "unit": "iter/sec",
            "range": "stddev: 0.0002731099256832097",
            "extra": "mean: 100.23688200000049 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_benchmark_maze.py::test_benchmark_maze",
            "value": 4.011942252215591,
            "unit": "iter/sec",
            "range": "stddev: 0.015521784436499519",
            "extra": "mean: 249.25583099999784 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_contains.py::test_benchmark_maze_contains",
            "value": 3.727955987656155,
            "unit": "iter/sec",
            "range": "stddev: 0.016071693748730187",
            "extra": "mean: 268.24351020000137 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_loopfree.py::test_benchmark_maze_loopfree",
            "value": 3.92310245897336,
            "unit": "iter/sec",
            "range": "stddev: 0.018750882616963276",
            "extra": "mean: 254.90030159999722 msec\nrounds: 5"
          }
        ]
      },
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
          "id": "00b12d1f364d9ae2a3d8d56373c16bb238b82271",
          "message": "Update formatting of all files to be compatible with Hatch 1.16.1 and corresponding ruff version (#56)",
          "timestamp": "2025-12-01T14:34:14+01:00",
          "tree_id": "c9df2c551468dbc8e6adc8a5ae11492720cc143f",
          "url": "https://github.com/tudo-seal/cosy/commit/00b12d1f364d9ae2a3d8d56373c16bb238b82271"
        },
        "date": 1764596088287,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_benchmark_maximal_elements.py::test_benchmark_maximal_elements",
            "value": 9.832806942862879,
            "unit": "iter/sec",
            "range": "stddev: 0.0005174767603265798",
            "extra": "mean: 101.70035940000304 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_maze.py::test_benchmark_maze",
            "value": 3.5764874669671487,
            "unit": "iter/sec",
            "range": "stddev: 0.026208882608819338",
            "extra": "mean: 279.60394360000294 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_contains.py::test_benchmark_maze_contains",
            "value": 3.4847909969905797,
            "unit": "iter/sec",
            "range": "stddev: 0.024766768188498624",
            "extra": "mean: 286.9612556000021 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_loopfree.py::test_benchmark_maze_loopfree",
            "value": 3.7722158389960145,
            "unit": "iter/sec",
            "range": "stddev: 0.018082439744633957",
            "extra": "mean: 265.0961775999946 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "31094379+mrhaandi@users.noreply.github.com",
            "name": "Andrej Dudenhefner",
            "username": "mrhaandi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d3d1cfe1a545d8123755756a03a18b172b1e1117",
          "message": "compute the greatest lower bound on necessary substitutions instead of discarding multiple candidates (#55)\n\nadd test for overlapping necessary substitutions\nrefactor substitution upper and lower bounds into subtypes",
          "timestamp": "2025-12-01T16:10:31+01:00",
          "tree_id": "066bab3bbadb8c2ce625358972a317a28aded54a",
          "url": "https://github.com/tudo-seal/cosy/commit/d3d1cfe1a545d8123755756a03a18b172b1e1117"
        },
        "date": 1764601863586,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_benchmark_maximal_elements.py::test_benchmark_maximal_elements",
            "value": 9.839175817895473,
            "unit": "iter/sec",
            "range": "stddev: 0.0008225371312546343",
            "extra": "mean: 101.63452900000038 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_maze.py::test_benchmark_maze",
            "value": 4.22027796548528,
            "unit": "iter/sec",
            "range": "stddev: 0.010365459195633718",
            "extra": "mean: 236.95121699999504 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_contains.py::test_benchmark_maze_contains",
            "value": 3.9075922182405063,
            "unit": "iter/sec",
            "range": "stddev: 0.013737887234858807",
            "extra": "mean: 255.91206659999844 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_loopfree.py::test_benchmark_maze_loopfree",
            "value": 4.125755247862721,
            "unit": "iter/sec",
            "range": "stddev: 0.008312884035643037",
            "extra": "mean: 242.37986499999806 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "31094379+mrhaandi@users.noreply.github.com",
            "name": "Andrej Dudenhefner",
            "username": "mrhaandi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abdb5f855c09aed68397a24a01d29e5771b28ebd",
          "message": "fix and test generator in contains_tree desyncs tree traversal (#60)",
          "timestamp": "2025-12-10T14:47:36+01:00",
          "tree_id": "9ca1650b74800ced1c7c09c791309249ffda78c6",
          "url": "https://github.com/tudo-seal/cosy/commit/abdb5f855c09aed68397a24a01d29e5771b28ebd"
        },
        "date": 1765374488020,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_benchmark_maximal_elements.py::test_benchmark_maximal_elements",
            "value": 9.881649685326781,
            "unit": "iter/sec",
            "range": "stddev: 0.0007778146375851244",
            "extra": "mean: 101.19767769999939 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_maze.py::test_benchmark_maze",
            "value": 3.823977295780284,
            "unit": "iter/sec",
            "range": "stddev: 0.02132768682544793",
            "extra": "mean: 261.50782880000065 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_contains.py::test_benchmark_maze_contains",
            "value": 3.5327667143873196,
            "unit": "iter/sec",
            "range": "stddev: 0.02254599951185756",
            "extra": "mean: 283.06426120000054 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_loopfree.py::test_benchmark_maze_loopfree",
            "value": 3.773285178667883,
            "unit": "iter/sec",
            "range": "stddev: 0.0215985109951076",
            "extra": "mean: 265.02105 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}