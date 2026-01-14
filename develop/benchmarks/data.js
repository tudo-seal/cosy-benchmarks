window.BENCHMARK_DATA = {
  "lastUpdate": 1768399237015,
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
          "id": "e419ba9c9769dbcc58f462f14fcfd2f95a2c65b4",
          "message": "Update README.md to fix MyPy badge (#62)",
          "timestamp": "2026-01-14T13:04:03+01:00",
          "tree_id": "1eb5c76bf78464cf6026bd005573a0a494343076",
          "url": "https://github.com/tudo-seal/cosy/commit/e419ba9c9769dbcc58f462f14fcfd2f95a2c65b4"
        },
        "date": 1768392271749,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_benchmark_maximal_elements.py::test_benchmark_maximal_elements",
            "value": 9.903805231132367,
            "unit": "iter/sec",
            "range": "stddev: 0.0001570212089370726",
            "extra": "mean: 100.97129100000117 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_maze.py::test_benchmark_maze",
            "value": 4.176770738007325,
            "unit": "iter/sec",
            "range": "stddev: 0.012014229569108512",
            "extra": "mean: 239.41941340000028 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_contains.py::test_benchmark_maze_contains",
            "value": 3.891035413161501,
            "unit": "iter/sec",
            "range": "stddev: 0.013192576328700776",
            "extra": "mean: 257.00100200000264 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_loopfree.py::test_benchmark_maze_loopfree",
            "value": 4.094871553301691,
            "unit": "iter/sec",
            "range": "stddev: 0.012871224793249338",
            "extra": "mean: 244.2079041999989 msec\nrounds: 5"
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
          "id": "490e16ffda8f5eafde406d5ce4442232ef2602d6",
          "message": "Update CI so that forks run the benchmarks (#63)",
          "timestamp": "2026-01-14T14:05:27+01:00",
          "tree_id": "4d08872e4c28004e5f5b43ace7998e162e8a37a6",
          "url": "https://github.com/tudo-seal/cosy/commit/490e16ffda8f5eafde406d5ce4442232ef2602d6"
        },
        "date": 1768395954784,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_benchmark_maximal_elements.py::test_benchmark_maximal_elements",
            "value": 9.846264744785127,
            "unit": "iter/sec",
            "range": "stddev: 0.0001322483484541215",
            "extra": "mean: 101.56135610000021 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_maze.py::test_benchmark_maze",
            "value": 4.138006827928071,
            "unit": "iter/sec",
            "range": "stddev: 0.014582274549526954",
            "extra": "mean: 241.66224020000158 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_contains.py::test_benchmark_maze_contains",
            "value": 3.816414771651689,
            "unit": "iter/sec",
            "range": "stddev: 0.014978732126225415",
            "extra": "mean: 262.02602699999886 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_loopfree.py::test_benchmark_maze_loopfree",
            "value": 4.0470719831220165,
            "unit": "iter/sec",
            "range": "stddev: 0.015151019479569323",
            "extra": "mean: 247.09221979999825 msec\nrounds: 5"
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
          "id": "9d9f21423b2b252e98bb8957dc80bd716597d607",
          "message": "Update CI so that dependabot runs the benchmarks (#64)",
          "timestamp": "2026-01-14T14:24:46+01:00",
          "tree_id": "c97b6c6731285373b50eba58f08fef65c8465d34",
          "url": "https://github.com/tudo-seal/cosy/commit/9d9f21423b2b252e98bb8957dc80bd716597d607"
        },
        "date": 1768397113550,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_benchmark_maximal_elements.py::test_benchmark_maximal_elements",
            "value": 9.773886052662476,
            "unit": "iter/sec",
            "range": "stddev: 0.00022439505230073276",
            "extra": "mean: 102.31344979999974 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_maze.py::test_benchmark_maze",
            "value": 3.5853431884655964,
            "unit": "iter/sec",
            "range": "stddev: 0.029285593923551685",
            "extra": "mean: 278.9133277999994 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_contains.py::test_benchmark_maze_contains",
            "value": 3.397316688119535,
            "unit": "iter/sec",
            "range": "stddev: 0.023132150617264428",
            "extra": "mean: 294.3499507999988 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_loopfree.py::test_benchmark_maze_loopfree",
            "value": 3.651161701802359,
            "unit": "iter/sec",
            "range": "stddev: 0.025554770875854223",
            "extra": "mean: 273.8854320000016 msec\nrounds: 5"
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
          "id": "4265a249ba56dee02781254b5b6f09346ce36ad1",
          "message": "Resolve issue with wrong token for checking out public repo (#65)",
          "timestamp": "2026-01-14T14:35:28+01:00",
          "tree_id": "91a4c9b6655888dd317653773a03f7a7826ad36d",
          "url": "https://github.com/tudo-seal/cosy/commit/4265a249ba56dee02781254b5b6f09346ce36ad1"
        },
        "date": 1768397755452,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_benchmark_maximal_elements.py::test_benchmark_maximal_elements",
            "value": 9.813184502861176,
            "unit": "iter/sec",
            "range": "stddev: 0.00017953856489341566",
            "extra": "mean: 101.90371940000063 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_maze.py::test_benchmark_maze",
            "value": 3.9796494449218427,
            "unit": "iter/sec",
            "range": "stddev: 0.006123792976507627",
            "extra": "mean: 251.27841379999722 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_contains.py::test_benchmark_maze_contains",
            "value": 3.749998049063497,
            "unit": "iter/sec",
            "range": "stddev: 0.01482580432224148",
            "extra": "mean: 266.6668054000013 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_loopfree.py::test_benchmark_maze_loopfree",
            "value": 3.9365867367268264,
            "unit": "iter/sec",
            "range": "stddev: 0.015318126018128351",
            "extra": "mean: 254.02717299999722 msec\nrounds: 5"
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
          "id": "2529f00488a0dbd379c51f2a6e2915e64012a2f6",
          "message": "Update benchmarks.yml to fix token-acquiring logic (#66)\n\n* Resolve issue with wrong token for checking out public repo\n\n* Update benchmarks.yml to fix token-acquiring logic",
          "timestamp": "2026-01-14T15:00:10+01:00",
          "tree_id": "124a43d0726d140e11db781d55b9530cb940897a",
          "url": "https://github.com/tudo-seal/cosy/commit/2529f00488a0dbd379c51f2a6e2915e64012a2f6"
        },
        "date": 1768399236873,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_benchmark_maximal_elements.py::test_benchmark_maximal_elements",
            "value": 9.827359802486743,
            "unit": "iter/sec",
            "range": "stddev: 0.000877566863528534",
            "extra": "mean: 101.75673020000318 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_maze.py::test_benchmark_maze",
            "value": 3.6772224531464546,
            "unit": "iter/sec",
            "range": "stddev: 0.023877851597054547",
            "extra": "mean: 271.9443854000019 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_contains.py::test_benchmark_maze_contains",
            "value": 3.429945255316075,
            "unit": "iter/sec",
            "range": "stddev: 0.02465046303048392",
            "extra": "mean: 291.5498427999978 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_maze_loopfree.py::test_benchmark_maze_loopfree",
            "value": 3.629112337354938,
            "unit": "iter/sec",
            "range": "stddev: 0.02481982421894964",
            "extra": "mean: 275.5494752000004 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}