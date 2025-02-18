'use strict';
(self.webpackChunkmy_docs = self.webpackChunkmy_docs || []).push([
  [817],
  {
    1310: (e, t, n) => {
      n.d(t, { Z: () => E });
      var a = n(7462),
        r = n(7294),
        i = n(6010),
        l = n(5281),
        s = n(3438),
        c = n(8596),
        o = n(9960),
        m = n(5999),
        d = n(4996);
      function u(e) {
        return r.createElement(
          'svg',
          (0, a.Z)({ viewBox: '0 0 24 24' }, e),
          r.createElement('path', {
            d: 'M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z',
            fill: 'currentColor',
          })
        );
      }
      const h = 'breadcrumbHomeIcon_YNFT';
      function b() {
        const e = (0, d.Z)('/');
        return r.createElement(
          'li',
          { className: 'breadcrumbs__item' },
          r.createElement(
            o.Z,
            {
              'aria-label': (0, m.I)({
                id: 'theme.docs.breadcrumbs.home',
                message: 'Home page',
                description: 'The ARIA label for the home page in the breadcrumbs',
              }),
              className: 'breadcrumbs__link',
              href: e,
            },
            r.createElement(u, { className: h })
          )
        );
      }
      const v = 'breadcrumbsContainer_Z_bl';
      function g(e) {
        let { children: t, href: n, isLast: a } = e;
        const i = 'breadcrumbs__link';
        return a
          ? r.createElement('span', { className: i, itemProp: 'name' }, t)
          : n
          ? r.createElement(o.Z, { className: i, href: n, itemProp: 'item' }, r.createElement('span', { itemProp: 'name' }, t))
          : r.createElement('span', { className: i }, t);
      }
      function p(e) {
        let { children: t, active: n, index: l, addMicrodata: s } = e;
        return r.createElement(
          'li',
          (0, a.Z)({}, s && { itemScope: !0, itemProp: 'itemListElement', itemType: 'https://schema.org/ListItem' }, {
            className: (0, i.Z)('breadcrumbs__item', { 'breadcrumbs__item--active': n }),
          }),
          t,
          r.createElement('meta', { itemProp: 'position', content: String(l + 1) })
        );
      }
      function E() {
        const e = (0, s.s1)(),
          t = (0, c.Ns)();
        return e
          ? r.createElement(
              'nav',
              {
                className: (0, i.Z)(l.k.docs.docBreadcrumbs, v),
                'aria-label': (0, m.I)({
                  id: 'theme.docs.breadcrumbs.navAriaLabel',
                  message: 'Breadcrumbs',
                  description: 'The ARIA label for the breadcrumbs',
                }),
              },
              r.createElement(
                'ul',
                { className: 'breadcrumbs', itemScope: !0, itemType: 'https://schema.org/BreadcrumbList' },
                t && r.createElement(b, null),
                e.map((t, n) => {
                  const a = n === e.length - 1;
                  return r.createElement(
                    p,
                    { key: n, active: a, index: n, addMicrodata: !!t.href },
                    r.createElement(g, { href: t.href, isLast: a }, t.label)
                  );
                })
              )
            )
          : null;
      }
    },
    4228: (e, t, n) => {
      n.r(t), n.d(t, { default: () => A });
      var a = n(7294),
        r = n(1944),
        i = n(3438),
        l = n(4996),
        s = n(6010),
        c = n(9960),
        o = n(3919),
        m = n(5999);
      const d = 'cardContainer_fWXF',
        u = 'cardTitle_rnsV',
        h = 'cardDescription_PWke';
      function b(e) {
        let { href: t, children: n } = e;
        return a.createElement(c.Z, { href: t, className: (0, s.Z)('card padding--lg', d) }, n);
      }
      function v(e) {
        let { href: t, icon: n, title: r, description: i } = e;
        return a.createElement(
          b,
          { href: t },
          a.createElement('h2', { className: (0, s.Z)('text--truncate', u), title: r }, n, ' ', r),
          i && a.createElement('p', { className: (0, s.Z)('text--truncate', h), title: i }, i)
        );
      }
      function g(e) {
        let { item: t } = e;
        const n = (0, i.Wl)(t);
        return n
          ? a.createElement(v, {
              href: n,
              icon: '\ud83d\uddc3\ufe0f',
              title: t.label,
              description:
                t.description ??
                (0, m.I)(
                  {
                    message: '{count} items',
                    id: 'theme.docs.DocCard.categoryDescription',
                    description:
                      'The default description for a category card in the generated index about how many items this category includes',
                  },
                  { count: t.items.length }
                ),
            })
          : null;
      }
      function p(e) {
        let { item: t } = e;
        const n = (0, o.Z)(t.href) ? '\ud83d\udcc4\ufe0f' : '\ud83d\udd17',
          r = (0, i.xz)(t.docId ?? void 0);
        return a.createElement(v, {
          href: t.href,
          icon: n,
          title: t.label,
          description: t.description ?? (null == r ? void 0 : r.description),
        });
      }
      function E(e) {
        let { item: t } = e;
        switch (t.type) {
          case 'link':
            return a.createElement(p, { item: t });
          case 'category':
            return a.createElement(g, { item: t });
          default:
            throw new Error(`unknown item type ${JSON.stringify(t)}`);
        }
      }
      function f(e) {
        let { className: t } = e;
        const n = (0, i.jA)();
        return a.createElement(N, { items: n.items, className: t });
      }
      function N(e) {
        const { items: t, className: n } = e;
        if (!t) return a.createElement(f, e);
        const r = (0, i.MN)(t);
        return a.createElement(
          'section',
          { className: (0, s.Z)('row', n) },
          r.map((e, t) =>
            a.createElement('article', { key: t, className: 'col col--6 margin-bottom--lg' }, a.createElement(E, { item: e }))
          )
        );
      }
      var Z = n(4966),
        k = n(3120),
        _ = n(4364),
        L = n(1310),
        T = n(2503);
      const y = 'generatedIndexPage_vN6x',
        x = 'list_eTzJ',
        I = 'title_kItE';
      function w(e) {
        let { categoryGeneratedIndex: t } = e;
        return a.createElement(r.d, {
          title: t.title,
          description: t.description,
          keywords: t.keywords,
          image: (0, l.Z)(t.image),
        });
      }
      function V(e) {
        let { categoryGeneratedIndex: t } = e;
        const n = (0, i.jA)();
        return a.createElement(
          'div',
          { className: y },
          a.createElement(k.Z, null),
          a.createElement(L.Z, null),
          a.createElement(_.Z, null),
          a.createElement(
            'header',
            null,
            a.createElement(T.Z, { as: 'h1', className: I }, t.title),
            t.description && a.createElement('p', null, t.description)
          ),
          a.createElement('article', { className: 'margin-top--lg' }, a.createElement(N, { items: n.items, className: x })),
          a.createElement(
            'footer',
            { className: 'margin-top--lg' },
            a.createElement(Z.Z, { previous: t.navigation.previous, next: t.navigation.next })
          )
        );
      }
      function A(e) {
        return a.createElement(a.Fragment, null, a.createElement(w, e), a.createElement(V, e));
      }
    },
    4966: (e, t, n) => {
      n.d(t, { Z: () => o });
      var a = n(7462),
        r = n(7294),
        i = n(5999),
        l = n(6010),
        s = n(9960);
      function c(e) {
        const { permalink: t, title: n, subLabel: a, isNext: i } = e;
        return r.createElement(
          s.Z,
          { className: (0, l.Z)('pagination-nav__link', i ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: t },
          a && r.createElement('div', { className: 'pagination-nav__sublabel' }, a),
          r.createElement('div', { className: 'pagination-nav__label' }, n)
        );
      }
      function o(e) {
        const { previous: t, next: n } = e;
        return r.createElement(
          'nav',
          {
            className: 'pagination-nav docusaurus-mt-lg',
            'aria-label': (0, i.I)({
              id: 'theme.docs.paginator.navAriaLabel',
              message: 'Docs pages navigation',
              description: 'The ARIA label for the docs pagination',
            }),
          },
          t &&
            r.createElement(
              c,
              (0, a.Z)({}, t, {
                subLabel: r.createElement(
                  i.Z,
                  { id: 'theme.docs.paginator.previous', description: 'The label used to navigate to the previous doc' },
                  'Previous'
                ),
              })
            ),
          n &&
            r.createElement(
              c,
              (0, a.Z)({}, n, {
                subLabel: r.createElement(
                  i.Z,
                  { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc' },
                  'Next'
                ),
                isNext: !0,
              })
            )
        );
      }
    },
    4364: (e, t, n) => {
      n.d(t, { Z: () => c });
      var a = n(7294),
        r = n(6010),
        i = n(5999),
        l = n(5281),
        s = n(4477);
      function c(e) {
        let { className: t } = e;
        const n = (0, s.E)();
        return n.badge
          ? a.createElement(
              'span',
              { className: (0, r.Z)(t, l.k.docs.docVersionBadge, 'badge badge--secondary') },
              a.createElement(
                i.Z,
                { id: 'theme.docs.versionBadge.label', values: { versionLabel: n.label } },
                'Version: {versionLabel}'
              )
            )
          : null;
      }
    },
    3120: (e, t, n) => {
      n.d(t, { Z: () => g });
      var a = n(7294),
        r = n(6010),
        i = n(2263),
        l = n(9960),
        s = n(5999),
        c = n(143),
        o = n(5281),
        m = n(373),
        d = n(4477);
      const u = {
        unreleased: function (e) {
          let { siteTitle: t, versionMetadata: n } = e;
          return a.createElement(
            s.Z,
            {
              id: 'theme.docs.versions.unreleasedVersionLabel',
              description: "The label used to tell the user that he's browsing an unreleased doc version",
              values: { siteTitle: t, versionLabel: a.createElement('b', null, n.label) },
            },
            'This is unreleased documentation for {siteTitle} {versionLabel} version.'
          );
        },
        unmaintained: function (e) {
          let { siteTitle: t, versionMetadata: n } = e;
          return a.createElement(
            s.Z,
            {
              id: 'theme.docs.versions.unmaintainedVersionLabel',
              description: "The label used to tell the user that he's browsing an unmaintained doc version",
              values: { siteTitle: t, versionLabel: a.createElement('b', null, n.label) },
            },
            'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.'
          );
        },
      };
      function h(e) {
        const t = u[e.versionMetadata.banner];
        return a.createElement(t, e);
      }
      function b(e) {
        let { versionLabel: t, to: n, onClick: r } = e;
        return a.createElement(
          s.Z,
          {
            id: 'theme.docs.versions.latestVersionSuggestionLabel',
            description: 'The label used to tell the user to check the latest version',
            values: {
              versionLabel: t,
              latestVersionLink: a.createElement(
                'b',
                null,
                a.createElement(
                  l.Z,
                  { to: n, onClick: r },
                  a.createElement(
                    s.Z,
                    {
                      id: 'theme.docs.versions.latestVersionLinkLabel',
                      description: 'The label used for the latest version suggestion link label',
                    },
                    'latest version'
                  )
                )
              ),
            },
          },
          'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).'
        );
      }
      function v(e) {
        let { className: t, versionMetadata: n } = e;
        const {
            siteConfig: { title: l },
          } = (0, i.Z)(),
          { pluginId: s } = (0, c.gA)({ failfast: !0 }),
          { savePreferredVersionName: d } = (0, m.J)(s),
          { latestDocSuggestion: u, latestVersionSuggestion: v } = (0, c.Jo)(s),
          g = u ?? (p = v).docs.find(e => e.id === p.mainDocId);
        var p;
        return a.createElement(
          'div',
          { className: (0, r.Z)(t, o.k.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'), role: 'alert' },
          a.createElement('div', null, a.createElement(h, { siteTitle: l, versionMetadata: n })),
          a.createElement(
            'div',
            { className: 'margin-top--md' },
            a.createElement(b, { versionLabel: v.label, to: g.path, onClick: () => d(v.name) })
          )
        );
      }
      function g(e) {
        let { className: t } = e;
        const n = (0, d.E)();
        return n.banner ? a.createElement(v, { className: t, versionMetadata: n }) : null;
      }
    },
    2503: (e, t, n) => {
      n.d(t, { Z: () => d });
      var a = n(7462),
        r = n(7294),
        i = n(6010),
        l = n(5999),
        s = n(6668),
        c = n(9960);
      const o = 'anchorWithStickyNavbar_LWe7',
        m = 'anchorWithHideOnScrollNavbar_WYt5';
      function d(e) {
        let { as: t, id: n, ...d } = e;
        const {
          navbar: { hideOnScroll: u },
        } = (0, s.L)();
        if ('h1' === t || !n) return r.createElement(t, (0, a.Z)({}, d, { id: void 0 }));
        const h = (0, l.I)(
          { id: 'theme.common.headingLinkTitle', message: 'Direct link to {heading}', description: 'Title for link to heading' },
          { heading: 'string' == typeof d.children ? d.children : n }
        );
        return r.createElement(
          t,
          (0, a.Z)({}, d, { className: (0, i.Z)('anchor', u ? m : o, d.className), id: n }),
          d.children,
          r.createElement(c.Z, { className: 'hash-link', to: `#${n}`, 'aria-label': h, title: h }, '\u200b')
        );
      }
    },
  },
]);
