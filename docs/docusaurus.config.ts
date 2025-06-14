/**
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
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FastWS',
  tagline: 'You can innovate given the right technology',
  favicon: 'img/favicon.ico',

  url: 'https://fastws.qubitpi.org',
  baseUrl: '/',

  organizationName: 'QubitPi',
  projectName: 'fast-ws',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/QubitPi/fast-ws/tree/master/docs/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          editUrl: 'https://github.com/QubitPi/fast-ws/tree/master/docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    navbar: {
      title: 'FastWS',
      logo: {
        alt: 'FastWS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: "https://fastws.qubitpi.org/apidocs",
          label: "API",
          position: "left",
        },
        {
          href: 'https://github.com/QubitPi/fast-ws',
          label: ' ',
          position: 'right',
          className: 'header-icon-link header-github-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
            {
              label: 'Jersey Framework',
              href: 'https://jersey.qubitpi.org/',
            },
            {
                label: 'Jetty Server',
                href: 'https://jetty.qubitpi.org/',
            },
            {
                label: 'Owner Configuration Library',
                href: 'https://owner.qubitpi.org/',
            },
            {
                label: 'Groovy Spock (Testing)',
                href: 'https://spock.qubitpi.org/',
            },
          ],
        },
        {
          title: 'Webservice Standards',
          items: [
              {
                label: 'Jakarta RESTful Web Services',
                href: 'https://jakartaee-rest.qubitpi.org',
              },
              {
                label: 'JSR 330 - Dependency Injection',
                href: 'https://javax-inject.qubitpi.org',
              },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/QubitPi/fast-ws',
            },
            {
                label: 'Jiaqi Liu',
                href: 'https://github.com/QubitPi',
            },
            {
                label: "Jiaqi's Blog",
                href: 'https://leadership.qubitpi.org/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jiaqi Liu. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["java", "bash", "json"]
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
