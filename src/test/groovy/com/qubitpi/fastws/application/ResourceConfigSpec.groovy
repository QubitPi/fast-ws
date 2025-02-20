/*
 * Copyright 2025 Jiaqi Liu. All rights reserved.
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
package com.qubitpi.fastws.application

import com.qubitpi.fastws.web.filters.CorsFilter

import org.glassfish.jersey.internal.inject.Binder

import spock.lang.Specification

class ResourceConfigSpec extends Specification {

    static final Set<Class> ALWAYS_REGISTERED_FILTERS = [CorsFilter] as Set

    @SuppressWarnings('GroovyAccessibility')
    def "Instantiation triggers initialization and binding lifecycles"() {
        setup: "binder is mocked out"
        BinderFactory binderFactory = Mock(BinderFactory)
        binderFactory.buildBinder() >> Mock(Binder)

        when: "injecting resources"
        org.glassfish.jersey.server.ResourceConfig resourceConfig = new ResourceConfig()

        then: "all request & response filters are injected"
        resourceConfig.classes.containsAll(ALWAYS_REGISTERED_FILTERS)
    }
}
