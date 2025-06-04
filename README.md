FastWS
======

![Java Version Badge][Java Version Badge]
[![Docker Hub][Docker Pulls Badge]][Docker Hub URL]
[![GitHub Workflow Status][GitHub Workflow Status]](https://github.com/QubitPi/fast-ws/actions/workflows/ci-cd.yaml)
[![Apache License Badge]][Apache License, Version 2.0]

__FastWS__ is a [JSR 370] webservice template that lets us spin up Java webservice quickly through [GitHub templates].
One can think of FastWS as the Jersey/Jetty version of [Spring Initializr]. At the end of the day, FastWS helps
organization to improve the velocity and quality of their teams' work

✨ Features
-----------

- Out-of-the-box healthcheck endpoint
- Docusaurus-based documentation site freely hosted on GitHub Pages
- Dockerized webservice
- ELK application monitoring
- Flexible modular architecture which covers the need of variety of projects. More details about the design of FastWS
  can be found at [![DeepWiki](https://img.shields.io/badge/DeepWiki-QubitPi%2Ffast--ws-blue.svg?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyCAYAAAAnWDnqAAAAAXNSR0IArs4c6QAAA05JREFUaEPtmUtyEzEQhtWTQyQLHNak2AB7ZnyXZMEjXMGeK/AIi+QuHrMnbChYY7MIh8g01fJoopFb0uhhEqqcbWTp06/uv1saEDv4O3n3dV60RfP947Mm9/SQc0ICFQgzfc4CYZoTPAswgSJCCUJUnAAoRHOAUOcATwbmVLWdGoH//PB8mnKqScAhsD0kYP3j/Yt5LPQe2KvcXmGvRHcDnpxfL2zOYJ1mFwrryWTz0advv1Ut4CJgf5uhDuDj5eUcAUoahrdY/56ebRWeraTjMt/00Sh3UDtjgHtQNHwcRGOC98BJEAEymycmYcWwOprTgcB6VZ5JK5TAJ+fXGLBm3FDAmn6oPPjR4rKCAoJCal2eAiQp2x0vxTPB3ALO2CRkwmDy5WohzBDwSEFKRwPbknEggCPB/imwrycgxX2NzoMCHhPkDwqYMr9tRcP5qNrMZHkVnOjRMWwLCcr8ohBVb1OMjxLwGCvjTikrsBOiA6fNyCrm8V1rP93iVPpwaE+gO0SsWmPiXB+jikdf6SizrT5qKasx5j8ABbHpFTx+vFXp9EnYQmLx02h1QTTrl6eDqxLnGjporxl3NL3agEvXdT0WmEost648sQOYAeJS9Q7bfUVoMGnjo4AZdUMQku50McDcMWcBPvr0SzbTAFDfvJqwLzgxwATnCgnp4wDl6Aa+Ax283gghmj+vj7feE2KBBRMW3FzOpLOADl0Isb5587h/U4gGvkt5v60Z1VLG8BhYjbzRwyQZemwAd6cCR5/XFWLYZRIMpX39AR0tjaGGiGzLVyhse5C9RKC6ai42ppWPKiBagOvaYk8lO7DajerabOZP46Lby5wKjw1HCRx7p9sVMOWGzb/vA1hwiWc6jm3MvQDTogQkiqIhJV0nBQBTU+3okKCFDy9WwferkHjtxib7t3xIUQtHxnIwtx4mpg26/HfwVNVDb4oI9RHmx5WGelRVlrtiw43zboCLaxv46AZeB3IlTkwouebTr1y2NjSpHz68WNFjHvupy3q8TFn3Hos2IAk4Ju5dCo8B3wP7VPr/FGaKiG+T+v+TQqIrOqMTL1VdWV1DdmcbO8KXBz6esmYWYKPwDL5b5FA1a0hwapHiom0r/cKaoqr+27/XcrS5UwSMbQAAAABJRU5ErkJggg==)](https://deepwiki.com/QubitPi/fast-ws)

🚀 Quick Start
--------------

Please make sure Docker is installed
([_Installing Docker_](https://docker.qubitpi.org/desktop/setup/install/mac-install/)), then execute this on-click
command:

```console
docker run --name=fast-ws -it -p 8080:8080 jack20191124/fast-ws
```

That's it. A healthcheck endpoint can be pinned with

```console
curl -v localhost:8080/v1/healthcheck
```

which would gave

```console
$ curl -v localhost:8080/v1/healthcheck
*   Trying 127.0.0.1:8080...
* Connected to localhost (127.0.0.1) port 8080 (#0)
> GET /v1/healthcheck HTTP/1.1
> Host: localhost:8080
> User-Agent: curl/7.85.0
> Accept: */*
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Content-Length: 0
< Server: Jetty(11.0.15)
<
* Connection #0 to host localhost left intact
```

Developer can now start adding business values without repeating the time-consuming scaffolding works. To proceed from
here, including getting and developing the webservice source code, please refer to the [documentation][Documentation]
for details.

License
-------

The use and distribution terms for [fast-ws]() are covered by the [Apache License, Version 2.0].

[Apache License Badge]: https://img.shields.io/badge/Apache%202.0-F25910.svg?style=for-the-badge&logo=Apache&logoColor=white
[Apache License, Version 2.0]: https://www.apache.org/licenses/LICENSE-2.0

[Docker Pulls Badge]: https://img.shields.io/docker/pulls/jack20191124/fast-ws?style=for-the-badge&logo=docker&color=2596EC
[Docker Hub URL]: https://hub.docker.com/r/jack20191124/fast-ws
[Documentation]: https://fastws.qubitpi.org/

[GitHub templates]: https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository#about-template-repositories
[GitHub Workflow Status]: https://img.shields.io/github/actions/workflow/status/QubitPi/fast-ws/ci-cd.yaml?branch=master&logo=github&style=for-the-badge

[Java Version Badge]: https://img.shields.io/badge/Java-17-brightgreen?style=for-the-badge&logo=OpenJDK&logoColor=white
[fast-ws]: https://fastws.qubitpi.org/
[JSR 370]: https://jcp.org/en/jsr/detail?id=370

[Spring Initializr]: https://start.spring.io/
