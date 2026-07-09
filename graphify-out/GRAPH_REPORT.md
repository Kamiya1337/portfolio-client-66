# Graph Report - portfolio-client-28  (2026-06-27)

## Corpus Check
- 20 files · ~11,811 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 70 nodes · 96 edges · 11 communities (10 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]

## God Nodes (most connected - your core abstractions)
1. `portfolioData` - 8 edges
2. `scripts` - 5 edges
3. `useScrollReveal()` - 5 edges
4. `App()` - 3 edges
5. `AssignmentCard()` - 3 edges
6. `PreviewModal()` - 3 edges
7. `ProjectsTab()` - 3 edges
8. `isAvailable()` - 2 edges
9. `AssignmentDetail()` - 2 edges
10. `EvidenceTable()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `useScrollReveal()`  [EXTRACTED]
  src/App.jsx → src/hooks/useScrollReveal.js
- `ProjectsTab()` --calls--> `useScrollReveal()`  [EXTRACTED]
  src/components/ProjectsTab.jsx → src/hooks/useScrollReveal.js

## Import Cycles
- None detected.

## Communities (11 total, 1 thin omitted)

### Community 1 - "Community 1"
Cohesion: 0.15
Nodes (13): devDependencies, autoprefixer, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, postcss (+5 more)

### Community 2 - "Community 2"
Cohesion: 0.20
Nodes (9): name, private, scripts, build, dev, lint, preview, type (+1 more)

### Community 3 - "Community 3"
Cohesion: 0.35
Nodes (6): AssignmentCard(), isAvailable(), ProjectsTab(), useScrollReveal(), App(), tabTitles

### Community 4 - "Community 4"
Cohesion: 0.50
Nodes (3): Hero(), HomeTab(), modules

### Community 5 - "Community 5"
Cohesion: 0.25
Nodes (8): dependencies, framer-motion, gsap, @gsap/react, lenis, lucide-react, react, react-dom

### Community 6 - "Community 6"
Cohesion: 0.19
Nodes (7): EvidenceTable(), RubricTable(), navItems, Sidebar(), sections, Summary(), portfolioData

## Knowledge Gaps
- **31 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+26 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 1` to `Community 2`?**
  _High betweenness centrality (0.120) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 5` to `Community 2`?**
  _High betweenness centrality (0.078) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _31 weakly-connected nodes found - possible documentation gaps or missing edges._