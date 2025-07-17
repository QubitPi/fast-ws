FastWS Documentation
====================

Another great way to contribute to fast-ws is to help us write and maintain our documentation.

fast-ws follows a ["docs as code"](https://writethedocs.qubitpi.org/en/latest/guide/docs-as-code/) philosophy, meaning
we use the same tools to maintain and CI/CD our code and docs. As such, the docs are maintained directly within the
fast-ws codebase at `docs/`. This [documentation](http://fastws.qubitpi.org/) is built using
[Docusaurus](https://docusaurus.qubitpi.org/), a modern static website generator.

Markdown
--------

Our docs are written in [Markdown](https://en.wikipedia.org/wiki/Markdown), a markup language for writing technical
content. Markdown supports many advanced features, such as robust linking across different documentation sets, while
remaining human-readable.

Although fast-ws takes advantage of many of these features, one doesn't need to be a Markdown expert to contribute to
our documentation. In fact, a couple of quick rules from out
[contributing guide](https://fastws.qubitpi.org/docs/contributing/markdown-documentation-style-guide) is more than
enough to give you a head start.

Local Development
-----------------

In order to build the documentation locally, we first need to make sure Node is
[installed](https://nodesource.com/products/distributions) and then run the following command from the `doc` folder of
fast-ws project:

```console
yarn
```

The docs are maintained as a separate unit within fast-ws, which means we can build the docs separately from the rest
of the project. Then we can use the following command to start a local development server which, when ready, opens up a
browser window automatically:

```console
yarn start
```

Note that most changes are reflected live without having to restart the server.

CI/CD
-----

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting
service.
