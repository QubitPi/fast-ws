/*
 * Copyright Jiaqi Liu
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.qubitpi.ws.jersey.template.application

import static com.yahoo.elide.test.graphql.GraphQLDSL.argument
import static com.yahoo.elide.test.graphql.GraphQLDSL.arguments
import static com.yahoo.elide.test.graphql.GraphQLDSL.document
import static com.yahoo.elide.test.graphql.GraphQLDSL.field
import static com.yahoo.elide.test.graphql.GraphQLDSL.mutation
import static com.yahoo.elide.test.graphql.GraphQLDSL.query
import static com.yahoo.elide.test.graphql.GraphQLDSL.selection
import static com.yahoo.elide.test.graphql.GraphQLDSL.selections
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.attr
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.attributes
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.data
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.datum
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.id
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.resource
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.type
import static org.hamcrest.Matchers.equalTo

import com.yahoo.elide.jsonapi.JsonApi

import com.qubitpi.ws.jersey.template.models.Book
import com.qubitpi.ws.jersey.template.web.filters.OAuthFilter

import org.apache.http.HttpStatus
import org.eclipse.jetty.server.Server
import org.eclipse.jetty.servlet.ServletContextHandler
import org.eclipse.jetty.servlet.ServletHolder
import org.glassfish.jersey.servlet.ServletContainer
import org.testcontainers.containers.MySQLContainer
import org.testcontainers.spock.Testcontainers

import io.restassured.RestAssured
import io.restassured.builder.RequestSpecBuilder
import io.restassured.response.Response
import spock.lang.Shared

@Testcontainers
class ResourceConfigITSpec extends AbstractITSpec {

    final Server jettyEmbeddedServer = new Server(WS_PORT)

    @Shared
    final MySQLContainer MYSQL = new MySQLContainer("mysql:5.7.43").withDatabaseName("elide")

    @Override
    def childSetupSpec() {
        RestAssured.requestSpecification = new RequestSpecBuilder()
                .addHeader(OAuthFilter.AUTHORIZATION_HEADER, OAuthFilter.AUTHORIZATION_SCHEME + " " + "someAccessToken")
                .build()

        System.setProperty(
                "DB_URL",
                String.format("jdbc:mysql://localhost:%s/elide?serverTimezone=UTC", MYSQL.firstMappedPort)
        )
    }

    @Override
    def childCleanupSpec() {
        System.clearProperty("DB_URL")
    }

    @SuppressWarnings('GroovyAccessibility')
    def setup() {
        ServletContextHandler servletContextHandler = new ServletContextHandler()
        servletContextHandler.setContextPath("/")

        jettyEmbeddedServer.setHandler(servletContextHandler)

        ServletHolder jerseyServlet = servletContextHandler.addServlet(ServletContainer.class, "/v1/data/*")
        jerseyServlet.setInitOrder(0)
        jerseyServlet.setInitParameter(
                "jersey.config.server.provider.packages",
                [ResourceConfig.JAON_API_ENDPOINT_PACKAGE, ResourceConfig.GRAPHQL_ENDPOINT_PACKAGE].join(";")
        )
        jerseyServlet.setInitParameter("jakarta.ws.rs.Application", ResourceConfig.class.getCanonicalName())

        jettyEmbeddedServer.start()
    }

    def cleanup() {
        jettyEmbeddedServer.stop()
        jettyEmbeddedServer.destroy()
    }
}
