---
sidebar_position: 2
title: Setup
---

:::caution

Before proceeding, it is important to note that **we DO NOT support Spring/Spring Boot paradigm**.
[Jersey Webservice Template] runs as a **[JAX-RS]** webservice backed by its reference implementation [Jersey] running
as a WAR inside [Jetty] container.

More info about difference between JAX-RS and Spring can be found in [this thread](https://stackoverflow.com/a/42955575)

:::

This section discusses the one-time setup in order to develop [Jersey Webservice Template].

Prepare for Local Development
-----------------------------

### Installing Java & Maven (on Mac)

```bash
brew update
brew install openjdk@17
```

At the end of the last command prompt, something like the below will show up:

```bash
For the system Java wrappers to find this JDK, symlink it with
  sudo ln -sfn ...openjdk@17/libexec/openjdk.jdk .../JavaVirtualMachines/openjdk-17.jdk

openjdk@17 is keg-only, which means it was not symlinked into /usr/local,
because this is an alternate version of another formula.

If you need to have openjdk@17 first in your PATH, run:
  echo 'export PATH=".../openjdk@17/bin:$PATH"' >> .../.bash_profile

For compilers to find openjdk@17 you may need to set:
  export CPPFLAGS="-I.../openjdk@17/include"
```

Make sure to execute the `sudo ln -sfn`, `echo 'export PATH=...`, and the `export CPPFLAGS=` commands above

:::tip

Maven uses a separate JDK version, which can be seen via `mvn -v`. If it's not JDK 17, we should have Maven point
to our JDK 17 using [JAVA_HOME](https://stackoverflow.com/a/2503679):

```bash
$ /usr/libexec/java_home
/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home

$ export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
```

:::

If we see something similar after typing the command with the version flag below we're good to go

```bash
$ java --version
openjdk 17.0.10 2021-01-19
OpenJDK Runtime Environment (build 17.0.10+9)
OpenJDK 64-Bit Server VM (build 17.0.10+9, mixed mode)
```

### Installing Docker Engine

[Jersey Webservice Template] has [Docker-based integration tests][Docker-based integration tests];
it also supports [running template webserivce in Docker][jersey-webservice-template Dockerfile]. Docker can be
installed by following its [official instructions](https://docs.docker.com/desktop/install/mac-install/)

Getting Source Code
-------------------

```bash
git clone git@github.com:QubitPi/jersey-webservice-template.git
cd jersey-webservice-template
```

### Syncing up with jersey-webservice-template's Code Styles with IntelliJ

For the moment, we have distilled the most important code style conventions with respect to
jersey-webservice-template's code as IntelliJ settings. If IntelliJ is used for IDE, we may import these code style
settings by importing the [jersey-webservice-template-Project-intellij-code-style.xml][style config] file in the root
of the repo. The setting for the project will appear as a new Scheme named "jersey-webservice-template-Project" under
IDE's **Editor** -> **Code Style** section.

Please also enable "remove unused imports" by **Editor** -> **General** -> **Auto Import** -> **Optimize Imports on the
Fly**, which will automatically remove unused imports.

#### IntelliJ Troubleshooting

##### IntelliJ Cannot READ Resource File

We sometimes see errors when we run unit tests in IntelliJ, saying "some resource file" cannot be found. We know the
path is absolutely right. If this is the case, it's simply a IntelliJ issue which is solved by simply loading those
resources explicitly by telling IntelliJ where those resources are:

![Error loading intelliJ-find-resource.png](img/intelliJ-find-resource.png)

##### Tab Width

We use 4-space as tab. This can be configured at **Code Style** -> **Java** -> **Tabs and Indents** with the following
settings:

Tab size: 4
Indent: 4
Continuation indent: 8

If tabs still come out at 2 spaces when hitting TAB or Enter, not 4 spaces, try:

1. "Settings | Editor | Code Style" -- try disabling "Detect and use existing file indents for editing" in case if you
   have it enabled (it is by default). NOTE: re-opening file in editor may be required.
2. Do you have any .editorconfig files anywhere in the path of that file? Settings from .editorconfig
   ("Settings | Editor | Code Style") have priority (will overwrite) over your IDE settings.

[Caching]: https://github.com/QubitPi/jersey-webservice-template/tree/master/src/main/java/com/qubitpi/ws/jersey/template/cache
[Caching tests]: https://github.com/QubitPi/jersey-webservice-template/tree/master/src/test/groovy/org/qubitpi/ws/jersey/template/cache

[Docker-based integration tests]: https://github.com/QubitPi/jersey-webservice-template/blob/master/src/test/groovy/com/qubitpi/ws/jersey/template/DataServletITSpec.groovy

[JAX-RS]: https://jcp.org/en/jsr/detail?id=370
[Jersey]: https://eclipse-ee4j.github.io/jersey.github.io/documentation/latest/index.html
[Jersey Webservice Template]: https://qubitpi.github.io/jersey-webservice-template/
[jersey-webservice-template Dockerfile]: https://github.com/QubitPi/jersey-webservice-template/blob/master/Dockerfile
[Jetty]: https://en.wikipedia.org/wiki/Jetty_(web_server)

[style config]: https://github.com/QubitPi/jersey-webservice-template/blob/master/Jersey-Webservice-Template-Project-intellij-code-style.xml
