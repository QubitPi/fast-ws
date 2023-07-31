Jersey Webservice Template <sup>![Java Version Badge][Java Version Badge]</sup>
===============================================================================

[![GitHub Workflow Status][GitHub Workflow Status]](https://github.com/QubitPi/jersey-ws-template/actions/workflows/ci-cd.yml)
![Last Commit](https://img.shields.io/github/last-commit/QubitPi/jersey-ws-template/master?logo=github&style=for-the-badge)
[![Apache License Badge]](https://www.apache.org/licenses/LICENSE-2.0)

<a href="https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template">
    <img
        align="left"
        width="17%"
        alt="SonarCloud Quality Gate"
        src="https://sonarcloud.io/api/project_badges/quality_gate?project=QubitPi_jersey-ws-template"
    >
</a>

[![Bugs][Sonar Bugs]](https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template)
[![Vulnerabilities][Sonar Vulnerabilities]](https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template)
[![Security Rating][Sonar Security Rating]](https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template)

[![Coverage][Sonar Coverage]](https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template)
[![Code Smells][Sonar Code Smells]](https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template)
[![Maintainability Rating][Sonar Maintainability Rating]](https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template)

[![Lines of Code][Sonar Lines of Code]](https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template)
[![Duplicated Lines (%)][Sonar Duplicated Lines (%)]](https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template)
[![Reliability Rating][Sonar Reliability Rating]](https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template)
[![Technical Debt][Sonar Technical Debt]](https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template)

Features
--------

- [Healthcheck Endpoint](https://github.com/QubitPi/jersey-ws-template/blob/master/src/main/java/com/qubitpi/ws/jersey/template/web/endpoints/DataServlet.java)
- [CORS Filter](https://github.com/QubitPi/jersey-ws-template/blob/master/src/main/java/com/qubitpi/ws/jersey/template/web/filters/CorsFilter.java)
- [Tests in Groovy Spock](https://github.com/QubitPi/jersey-ws-template/tree/master/src/test/groovy/com/qubitpi/ws/jersey/template)
- [Docker-based integration tests](https://github.com/QubitPi/jersey-ws-template/blob/master/src/test/groovy/com/qubitpi/ws/jersey/template/DataServletITSpec.groovy)
- [Immutable Infrastructure Approach](#cicd-sup--sup)
- [Easy config mechanism](./src/main/java/com/qubitpi/ws/jersey/template/application/ApplicationConfig.java)
- [Out-of-box caching](./src/main/java/com/qubitpi/ws/jersey/template/cache) class if needed

Setup
-----

### Prepare for Local Development

#### Install Java & Maven (on Mac)

```bash
brew update
brew install java11
sudo ln -sfn /usr/local/opt/openjdk@11/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-11.jdk
brew install maven
```

If we see something similar after typing the command with the version flag below you're good to go

```bash
$ java --version
openjdk 11.0.10 2021-01-19
OpenJDK Runtime Environment (build 11.0.10+9)
OpenJDK 64-Bit Server VM (build 11.0.10+9, mixed mode)
```

#### Install Docker Engine

### Get Source Code

```bash
https://github.com/QubitPi/jersey-ws-template.git
cd jersey-ws-template
```

### Syncing up with jersey-ws-template's Code Styles with IntelliJ

For the moment, we have distilled the most important code style conventions with respect to jersey-ws-template's code as
IntelliJ settings. If you are using IntelliJ, you may import these code style settings by importing the
[Jersey-WS-Template-Project-intellij-code-style.xml](./Jersey-WS-Template-Project-intellij-code-style.xml) file in the
root of the repo. The setting for the project will appear as a new Scheme named Jersey-WS-Template-Project under your
`Editor -> Code Style` section.

### Removing Unneeded Classes

[jersey-ws-template][jersey-ws-template] comes with common classes many webservices need, such as caching feature.
Remove them if not needed:

- [LRU Caching](./src/main/java/com/qubitpi/ws/jersey/template/cache/LruCache.java) and
  [its tests](./src/test/groovy/com/qubitpi/ws/jersey/template/cache/LruCacheSpec.groovy)

### HTTP Request from within Webservice

[async-http-client][async-http-client] has been set up in this template so that we could easily send HTTP request from
within webservice. For example

```java
import org.asynchttpclient.AsyncHttpClient;
import org.asynchttpclient.DefaultAsyncHttpClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.validation.constraints.NotNull;

import java.util.Objects;
import java.util.concurrent.ExecutionException;

public class MyHttpClient {

    private static final Logger LOG = LoggerFactory.getLogger(Graph.class);

    private final AsyncHttpClient webClient;

    private String sentRequest(
            @NotNull final String httpParamName,
            @NotNull final String httpParamValue,
            @NotNull final String url
    ) {
        try {
            return getWebClient()
                    .prepareGet(url)
                    .addQueryParam(
                            httpParamName,
                            Objects.requireNonNull(value, String.format("query param '%s'", httpParamValue))
                    )
                    .execute()
                    .get()
                    .getResponseBody();
        } catch (final ExecutionException exception) {
            LOG.error("AsyncHttpClient error: {}", exception.getMessage());
            throw new IllegalStateException(exception);
        } catch (final InterruptedException exception) {
            LOG.error("InterruptedException: {}", exception.getMessage());
            Thread.currentThread().interrupt();
            throw new IllegalStateException(exception);
        }
    }

    @NotNull
    private AsyncHttpClient getWebClient() {
        return webClient;
    }
}
```

Running Tests
-------------

```bash
mvn clean verify
```

Packaging
---------

```bash
mvn clean package
```

A **WAR** file will be generated under _target_ directory

Running in Standalone Jetty
---------------------------

### Download Jetty

At [download page](https://www.eclipse.org/jetty/download.php), pick up a `.tgz` distribution. Since this template
requires Java 11+, we will use "11.0.15" release as an example:

![Error loading download-jetty.png](./download-jetty.png)

Put the `tar.gz` file into a location of your choice as the installation path and extract the Jetty binary using

```bash
tar -xzvf jetty-home-11.0.15.tar.gz
```

The extracted directory *jetty-home-11.0.15* is the Jetty distribution. We call this directory **$JETTY_HOME**, which
should not be modified.

### Setting Up Standalone Jetty

Our [WAR file](#packaging) will be dropped to a directory where Jetty can pick up and run. We call this directory
**$JETTY_BASE**, which is usually different from the _$JETTY_HOME_. The _$JETTY_BASE_ also contains container runtime
configs. In short, the Standalone Jetty container will be setup with

```bash
export JETTY_HOME=/path/to/jetty-home-11.0.15
mkdir -p /path/to/jetty-base
cd /path/to/jetty-base
java -jar $JETTY_HOME/start.jar --add-module=annotations,server,http,deploy
```

The `--add-module=annotations,server,http,deploy` is how we configure the Jetty container.

Lastly, drop the [WAR file](#packaging) into **/path/to/jetty-base/webapps** directory and rename the WAR file to
**ROOT.war**:

```bash
mv /path/to/war-file /path/to/jetty-base/webapps/ROOT.war
```

### Running Jersey Template Webservice

```bash
java -jar $JETTY_HOME/start.jar
```

The webservice will run on port **8080**

[CI/CD](./.github/workflows/ci-cd.yml)
----------------------------------------

![GitHub Actions Badge][GitHub Actions Badge]
![HashiCorp Packer Badge][HashiCorp Packer Badge]
![HashiCorp Terraform Badge][HashiCorp Terraform Badge]

![Error loading ci-cd.png](./docs/ci-cd.png)

The following [GitHub Secrets][How to set up GitHub Action Secrets] needs to be defined

- [**SONAR_TOKEN**](https://sonarcloud.io/project/overview?id=QubitPi_jersey-ws-template)
- **SSL_CERTIFICATE** SSL certificate file content (for
  [exposing webservice endpoints over HTTPS](./hashicorp/images/nginx-ssl.conf))
- **SSL_CERTIFICATE_KEY** SSL certificate key file content (for
  [exposing webservice endpoints over HTTPS](./hashicorp/images/nginx-ssl.conf))
- [**AWS_ACCESS_KEY_ID**](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)
- [**AWS_SECRET_ACCESS_KEY**](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)
- [**AWS_REGION**](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)
- **ZONE_ID** AWS Route 53 hosted zone ID (DNS routing)

Setting Up Sentry
-----------------

Sentry is a developer-first error tracking and performance monitoring platform that helps developers see what actually
matters, solve quicker, and learn continuously about their applications.

<p align="center">
  <img src="https://github.com/getsentry/sentry/raw/master/.github/screenshots/projects.png" width="270">
  <img src="https://github.com/getsentry/sentry/raw/master/.github/screenshots/issue-details.png" width="270">
  <img src="https://github.com/getsentry/sentry/raw/master/.github/screenshots/transaction-summary.png" width="270">
  <img src="https://github.com/getsentry/sentry/raw/master/.github/screenshots/releases.png" width="270">
</p>

<details>
<summary>The logging framework has to be <b>Logback</b>, which is the logging library used in
jersey-ws-template</summary>

<img align="center" width="100%" alt="Create Project" src="./docs/setup-sentry-1.png">
<img align="center" width="100%" alt="Choose Java Platform" src="./docs/setup-sentry-2.png">
<img align="center" width="100%" alt="Pick up Logging Framework" src="./docs/setup-sentry-3.png">

</details>

License
-------

The use and distribution terms for [jersey-ws-template][jersey-ws-template] are covered by the
[Apache License, Version 2.0][Apache License, Version 2.0].

<div align="center">
    <a href="https://opensource.org/licenses">
        <img align="center" width="50%" alt="License Illustration" src="https://github.com/QubitPi/QubitPi/blob/master/img/apache-2.png?raw=true">
    </a>
</div>

[Apache License Badge]: https://img.shields.io/badge/Apache%202.0-F25910.svg?style=for-the-badge&logo=Apache&logoColor=white
[Apache License, Version 2.0]: http://www.apache.org/licenses/LICENSE-2.0.html
[async-http-client]: https://github.com/AsyncHttpClient/async-http-client

[How to set up GitHub Action Secrets]: https://docs.github.com/en/actions/security-guides/encrypted-secrets

[GitHub Actions Badge]: https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white
[GitHub Workflow Status]: https://img.shields.io/github/actions/workflow/status/QubitPi/jersey-ws-template/ci-cd.yml?branch=master&logo=github&style=for-the-badge

[HashiCorp Packer Badge]: https://img.shields.io/badge/Packer-02A8EF?style=for-the-badge&logo=Packer&logoColor=white
[HashiCorp Terraform Badge]: https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white

[Java Version Badge]: https://img.shields.io/badge/Java-11-brightgreen?style=for-the-badge&logo=OpenJDK&logoColor=white
[jersey-ws-template]: https://github.com/QubitPi/jersey-ws-template

[Sonar Bugs]: https://sonarcloud.io/api/project_badges/measure?project=QubitPi_jersey-ws-template&metric=bugs
[Sonar Vulnerabilities]: https://sonarcloud.io/api/project_badges/measure?project=QubitPi_jersey-ws-template&metric=vulnerabilities
[Sonar Security Rating]: https://sonarcloud.io/api/project_badges/measure?project=QubitPi_jersey-ws-template&metric=security_rating
[Sonar Coverage]: https://sonarcloud.io/api/project_badges/measure?project=QubitPi_jersey-ws-template&metric=coverage
[Sonar Code Smells]: https://sonarcloud.io/api/project_badges/measure?project=QubitPi_jersey-ws-template&metric=code_smells
[Sonar Maintainability Rating]: https://sonarcloud.io/api/project_badges/measure?project=QubitPi_jersey-ws-template&metric=sqale_rating
[Sonar Lines of Code]: https://sonarcloud.io/api/project_badges/measure?project=QubitPi_jersey-ws-template&metric=ncloc
[Sonar Duplicated Lines (%)]: https://sonarcloud.io/api/project_badges/measure?project=QubitPi_jersey-ws-template&metric=duplicated_lines_density
[Sonar Reliability Rating]: https://sonarcloud.io/api/project_badges/measure?project=QubitPi_jersey-ws-template&metric=reliability_rating
[Sonar Technical Debt]: https://sonarcloud.io/api/project_badges/measure?project=QubitPi_jersey-ws-template&metric=sqale_index
