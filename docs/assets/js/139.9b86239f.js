(self.webpackChunkmy_docs = self.webpackChunkmy_docs || []).push([
  [139],
  {
    3905: (e, t, n) => {
      'use strict';
      n.d(t, { Zo: () => d, kt: () => f });
      var a = n(7294);
      function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function c(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              o = Object.keys(e);
            for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (a = 0; a < o.length; a++)
            (n = o[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
        }
        return r;
      }
      var s = a.createContext({}),
        i = function (e) {
          var t = a.useContext(s),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : l(l({}, t), e)), n;
        },
        d = function (e) {
          var t = i(e.components);
          return a.createElement(s.Provider, { value: t }, e.children);
        },
        m = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        p = a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            o = e.originalType,
            s = e.parentName,
            d = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
            m = i(n),
            p = r,
            f = m[''.concat(s, '.').concat(p)] || m[p] || u[p] || o;
          return n ? a.createElement(f, l(l({ ref: t }, d), {}, { components: n })) : a.createElement(f, l({ ref: t }, d));
        });
      function f(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var o = n.length,
            l = new Array(o);
          l[0] = p;
          var c = {};
          for (var s in t) hasOwnProperty.call(t, s) && (c[s] = t[s]);
          (c.originalType = e), (c[m] = 'string' == typeof e ? e : r), (l[1] = c);
          for (var i = 2; i < o; i++) l[i] = n[i];
          return a.createElement.apply(null, l);
        }
        return a.createElement.apply(null, n);
      }
      p.displayName = 'MDXCreateElement';
    },
    1310: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => b });
      var a = n(7462),
        r = n(7294),
        o = n(6010),
        l = n(5281),
        c = n(3438),
        s = n(8596),
        i = n(9960),
        d = n(5999),
        m = n(4996);
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
      const p = 'breadcrumbHomeIcon_YNFT';
      function f() {
        const e = (0, m.Z)('/');
        return r.createElement(
          'li',
          { className: 'breadcrumbs__item' },
          r.createElement(
            i.Z,
            {
              'aria-label': (0, d.I)({
                id: 'theme.docs.breadcrumbs.home',
                message: 'Home page',
                description: 'The ARIA label for the home page in the breadcrumbs',
              }),
              className: 'breadcrumbs__link',
              href: e,
            },
            r.createElement(u, { className: p })
          )
        );
      }
      const h = 'breadcrumbsContainer_Z_bl';
      function g(e) {
        let { children: t, href: n, isLast: a } = e;
        const o = 'breadcrumbs__link';
        return a
          ? r.createElement('span', { className: o, itemProp: 'name' }, t)
          : n
          ? r.createElement(i.Z, { className: o, href: n, itemProp: 'item' }, r.createElement('span', { itemProp: 'name' }, t))
          : r.createElement('span', { className: o }, t);
      }
      function v(e) {
        let { children: t, active: n, index: l, addMicrodata: c } = e;
        return r.createElement(
          'li',
          (0, a.Z)({}, c && { itemScope: !0, itemProp: 'itemListElement', itemType: 'https://schema.org/ListItem' }, {
            className: (0, o.Z)('breadcrumbs__item', { 'breadcrumbs__item--active': n }),
          }),
          t,
          r.createElement('meta', { itemProp: 'position', content: String(l + 1) })
        );
      }
      function b() {
        const e = (0, c.s1)(),
          t = (0, s.Ns)();
        return e
          ? r.createElement(
              'nav',
              {
                className: (0, o.Z)(l.k.docs.docBreadcrumbs, h),
                'aria-label': (0, d.I)({
                  id: 'theme.docs.breadcrumbs.navAriaLabel',
                  message: 'Breadcrumbs',
                  description: 'The ARIA label for the breadcrumbs',
                }),
              },
              r.createElement(
                'ul',
                { className: 'breadcrumbs', itemScope: !0, itemType: 'https://schema.org/BreadcrumbList' },
                t && r.createElement(f, null),
                e.map((t, n) => {
                  const a = n === e.length - 1;
                  return r.createElement(
                    v,
                    { key: n, active: a, index: n, addMicrodata: !!t.href },
                    r.createElement(g, { href: t.href, isLast: a }, t.label)
                  );
                })
              )
            )
          : null;
      }
    },
    4465: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => he });
      var a = n(7294),
        r = n(1944),
        o = n(902);
      const l = a.createContext(null);
      function c(e) {
        let { children: t, content: n } = e;
        const r = (function (e) {
          return (0, a.useMemo)(
            () => ({
              metadata: e.metadata,
              frontMatter: e.frontMatter,
              assets: e.assets,
              contentTitle: e.contentTitle,
              toc: e.toc,
            }),
            [e]
          );
        })(n);
        return a.createElement(l.Provider, { value: r }, t);
      }
      function s() {
        const e = (0, a.useContext)(l);
        if (null === e) throw new o.i6('DocProvider');
        return e;
      }
      function i() {
        const { metadata: e, frontMatter: t, assets: n } = s();
        return a.createElement(r.d, {
          title: e.title,
          description: e.description,
          keywords: t.keywords,
          image: n.image ?? t.image,
        });
      }
      var d = n(6010),
        m = n(7524),
        u = n(4966);
      function p() {
        const { metadata: e } = s();
        return a.createElement(u.Z, { previous: e.previous, next: e.next });
      }
      var f = n(3120),
        h = n(4364),
        g = n(5281),
        v = n(5999);
      function b(e) {
        let { lastUpdatedAt: t, formattedLastUpdatedAt: n } = e;
        return a.createElement(
          v.Z,
          {
            id: 'theme.lastUpdated.atDate',
            description: 'The words used to describe on which date a page has been last updated',
            values: {
              date: a.createElement('b', null, a.createElement('time', { dateTime: new Date(1e3 * t).toISOString() }, n)),
            },
          },
          ' on {date}'
        );
      }
      function E(e) {
        let { lastUpdatedBy: t } = e;
        return a.createElement(
          v.Z,
          {
            id: 'theme.lastUpdated.byUser',
            description: 'The words used to describe by who the page has been last updated',
            values: { user: a.createElement('b', null, t) },
          },
          ' by {user}'
        );
      }
      function y(e) {
        let { lastUpdatedAt: t, formattedLastUpdatedAt: n, lastUpdatedBy: r } = e;
        return a.createElement(
          'span',
          { className: g.k.common.lastUpdated },
          a.createElement(
            v.Z,
            {
              id: 'theme.lastUpdated.lastUpdatedAtBy',
              description: 'The sentence used to display when a page has been last updated, and by who',
              values: {
                atDate: t && n ? a.createElement(b, { lastUpdatedAt: t, formattedLastUpdatedAt: n }) : '',
                byUser: r ? a.createElement(E, { lastUpdatedBy: r }) : '',
              },
            },
            'Last updated{atDate}{byUser}'
          ),
          !1
        );
      }
      var k = n(7462);
      const N = 'iconEdit_Z9Sw';
      function L(e) {
        let { className: t, ...n } = e;
        return a.createElement(
          'svg',
          (0, k.Z)(
            {
              fill: 'currentColor',
              height: '20',
              width: '20',
              viewBox: '0 0 40 40',
              className: (0, d.Z)(N, t),
              'aria-hidden': 'true',
            },
            n
          ),
          a.createElement(
            'g',
            null,
            a.createElement('path', {
              d: 'm34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z',
            })
          )
        );
      }
      function C(e) {
        let { editUrl: t } = e;
        return a.createElement(
          'a',
          { href: t, target: '_blank', rel: 'noreferrer noopener', className: g.k.common.editThisPage },
          a.createElement(L, null),
          a.createElement(
            v.Z,
            { id: 'theme.common.editThisPage', description: 'The link label to edit the current page' },
            'Edit this page'
          )
        );
      }
      var Z = n(9960);
      const T = 'tag_zVej',
        _ = 'tagRegular_sFm0',
        w = 'tagWithCount_h2kH';
      function x(e) {
        let { permalink: t, label: n, count: r } = e;
        return a.createElement(Z.Z, { href: t, className: (0, d.Z)(T, r ? w : _) }, n, r && a.createElement('span', null, r));
      }
      const B = 'tags_jXut',
        O = 'tag_QGVx';
      function A(e) {
        let { tags: t } = e;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            'b',
            null,
            a.createElement(v.Z, { id: 'theme.tags.tagsListLabel', description: 'The label alongside a tag list' }, 'Tags:')
          ),
          a.createElement(
            'ul',
            { className: (0, d.Z)(B, 'padding--none', 'margin-left--sm') },
            t.map(e => {
              let { label: t, permalink: n } = e;
              return a.createElement('li', { key: n, className: O }, a.createElement(x, { label: t, permalink: n }));
            })
          )
        );
      }
      const j = 'lastUpdated_vwxv';
      function H(e) {
        return a.createElement(
          'div',
          { className: (0, d.Z)(g.k.docs.docFooterTagsRow, 'row margin-bottom--sm') },
          a.createElement('div', { className: 'col' }, a.createElement(A, e))
        );
      }
      function S(e) {
        let { editUrl: t, lastUpdatedAt: n, lastUpdatedBy: r, formattedLastUpdatedAt: o } = e;
        return a.createElement(
          'div',
          { className: (0, d.Z)(g.k.docs.docFooterEditMetaRow, 'row') },
          a.createElement('div', { className: 'col' }, t && a.createElement(C, { editUrl: t })),
          a.createElement(
            'div',
            { className: (0, d.Z)('col', j) },
            (n || r) && a.createElement(y, { lastUpdatedAt: n, formattedLastUpdatedAt: o, lastUpdatedBy: r })
          )
        );
      }
      function M() {
        const { metadata: e } = s(),
          { editUrl: t, lastUpdatedAt: n, formattedLastUpdatedAt: r, lastUpdatedBy: o, tags: l } = e,
          c = l.length > 0,
          i = !!(t || n || o);
        return c || i
          ? a.createElement(
              'footer',
              { className: (0, d.Z)(g.k.docs.docFooter, 'docusaurus-mt-lg') },
              c && a.createElement(H, { tags: l }),
              i && a.createElement(S, { editUrl: t, lastUpdatedAt: n, lastUpdatedBy: o, formattedLastUpdatedAt: r })
            )
          : null;
      }
      var I = n(6043),
        P = n(6668);
      function U(e) {
        const t = e.map(e => ({ ...e, parentIndex: -1, children: [] })),
          n = Array(7).fill(-1);
        t.forEach((e, t) => {
          const a = n.slice(2, e.level);
          (e.parentIndex = Math.max(...a)), (n[e.level] = t);
        });
        const a = [];
        return (
          t.forEach(e => {
            const { parentIndex: n, ...r } = e;
            n >= 0 ? t[n].children.push(r) : a.push(r);
          }),
          a
        );
      }
      function z(e) {
        let { toc: t, minHeadingLevel: n, maxHeadingLevel: a } = e;
        return t.flatMap(e => {
          const t = z({ toc: e.children, minHeadingLevel: n, maxHeadingLevel: a });
          return (function (e) {
            return e.level >= n && e.level <= a;
          })(e)
            ? [{ ...e, children: t }]
            : t;
        });
      }
      function V(e) {
        const t = e.getBoundingClientRect();
        return t.top === t.bottom ? V(e.parentNode) : t;
      }
      function D(e, t) {
        let { anchorTopOffset: n } = t;
        const a = e.find(e => V(e).top >= n);
        if (a) {
          return (function (e) {
            return e.top > 0 && e.bottom < window.innerHeight / 2;
          })(V(a))
            ? a
            : e[e.indexOf(a) - 1] ?? null;
        }
        return e[e.length - 1] ?? null;
      }
      function R() {
        const e = (0, a.useRef)(0),
          {
            navbar: { hideOnScroll: t },
          } = (0, P.L)();
        return (
          (0, a.useEffect)(() => {
            e.current = t ? 0 : document.querySelector('.navbar').clientHeight;
          }, [t]),
          e
        );
      }
      function $(e) {
        const t = (0, a.useRef)(void 0),
          n = R();
        (0, a.useEffect)(() => {
          if (!e) return () => {};
          const { linkClassName: a, linkActiveClassName: r, minHeadingLevel: o, maxHeadingLevel: l } = e;
          function c() {
            const e = (function (e) {
                return Array.from(document.getElementsByClassName(e));
              })(a),
              c = (function (e) {
                let { minHeadingLevel: t, maxHeadingLevel: n } = e;
                const a = [];
                for (let r = t; r <= n; r += 1) a.push(`h${r}.anchor`);
                return Array.from(document.querySelectorAll(a.join()));
              })({ minHeadingLevel: o, maxHeadingLevel: l }),
              s = D(c, { anchorTopOffset: n.current }),
              i = e.find(
                e =>
                  s &&
                  s.id ===
                    (function (e) {
                      return decodeURIComponent(e.href.substring(e.href.indexOf('#') + 1));
                    })(e)
              );
            e.forEach(e => {
              !(function (e, n) {
                n
                  ? (t.current && t.current !== e && t.current.classList.remove(r), e.classList.add(r), (t.current = e))
                  : e.classList.remove(r);
              })(e, e === i);
            });
          }
          return (
            document.addEventListener('scroll', c),
            document.addEventListener('resize', c),
            c(),
            () => {
              document.removeEventListener('scroll', c), document.removeEventListener('resize', c);
            }
          );
        }, [e, n]);
      }
      function W(e) {
        let { toc: t, className: n, linkClassName: r, isChild: o } = e;
        return t.length
          ? a.createElement(
              'ul',
              { className: o ? void 0 : n },
              t.map(e =>
                a.createElement(
                  'li',
                  { key: e.id },
                  a.createElement('a', {
                    href: `#${e.id}`,
                    className: r ?? void 0,
                    dangerouslySetInnerHTML: { __html: e.value },
                  }),
                  a.createElement(W, { isChild: !0, toc: e.children, className: n, linkClassName: r })
                )
              )
            )
          : null;
      }
      const F = a.memo(W);
      function q(e) {
        let {
          toc: t,
          className: n = 'table-of-contents table-of-contents__left-border',
          linkClassName: r = 'table-of-contents__link',
          linkActiveClassName: o,
          minHeadingLevel: l,
          maxHeadingLevel: c,
          ...s
        } = e;
        const i = (0, P.L)(),
          d = l ?? i.tableOfContents.minHeadingLevel,
          m = c ?? i.tableOfContents.maxHeadingLevel,
          u = (function (e) {
            let { toc: t, minHeadingLevel: n, maxHeadingLevel: r } = e;
            return (0, a.useMemo)(() => z({ toc: U(t), minHeadingLevel: n, maxHeadingLevel: r }), [t, n, r]);
          })({ toc: t, minHeadingLevel: d, maxHeadingLevel: m });
        return (
          $(
            (0, a.useMemo)(() => {
              if (r && o) return { linkClassName: r, linkActiveClassName: o, minHeadingLevel: d, maxHeadingLevel: m };
            }, [r, o, d, m])
          ),
          a.createElement(F, (0, k.Z)({ toc: u, className: n, linkClassName: r }, s))
        );
      }
      const G = 'tocCollapsibleButton_TO0P',
        Y = 'tocCollapsibleButtonExpanded_MG3E';
      function J(e) {
        let { collapsed: t, ...n } = e;
        return a.createElement(
          'button',
          (0, k.Z)({ type: 'button' }, n, { className: (0, d.Z)('clean-btn', G, !t && Y, n.className) }),
          a.createElement(
            v.Z,
            {
              id: 'theme.TOCCollapsible.toggleButtonLabel',
              description: 'The label used by the button on the collapsible TOC component',
            },
            'On this page'
          )
        );
      }
      const Q = 'tocCollapsible_ETCw',
        X = 'tocCollapsibleContent_vkbj',
        K = 'tocCollapsibleExpanded_sAul';
      function ee(e) {
        let { toc: t, className: n, minHeadingLevel: r, maxHeadingLevel: o } = e;
        const { collapsed: l, toggleCollapsed: c } = (0, I.u)({ initialState: !0 });
        return a.createElement(
          'div',
          { className: (0, d.Z)(Q, !l && K, n) },
          a.createElement(J, { collapsed: l, onClick: c }),
          a.createElement(
            I.z,
            { lazy: !0, className: X, collapsed: l },
            a.createElement(q, { toc: t, minHeadingLevel: r, maxHeadingLevel: o })
          )
        );
      }
      const te = 'tocMobile_ITEo';
      function ne() {
        const { toc: e, frontMatter: t } = s();
        return a.createElement(ee, {
          toc: e,
          minHeadingLevel: t.toc_min_heading_level,
          maxHeadingLevel: t.toc_max_heading_level,
          className: (0, d.Z)(g.k.docs.docTocMobile, te),
        });
      }
      const ae = 'tableOfContents_bqdL';
      function re(e) {
        let { className: t, ...n } = e;
        return a.createElement(
          'div',
          { className: (0, d.Z)(ae, 'thin-scrollbar', t) },
          a.createElement(
            q,
            (0, k.Z)({}, n, {
              linkClassName: 'table-of-contents__link toc-highlight',
              linkActiveClassName: 'table-of-contents__link--active',
            })
          )
        );
      }
      function oe() {
        const { toc: e, frontMatter: t } = s();
        return a.createElement(re, {
          toc: e,
          minHeadingLevel: t.toc_min_heading_level,
          maxHeadingLevel: t.toc_max_heading_level,
          className: g.k.docs.docTocDesktop,
        });
      }
      var le = n(2503),
        ce = n(3905),
        se = n(7397);
      function ie(e) {
        let { children: t } = e;
        return a.createElement(ce.Zo, { components: se.Z }, t);
      }
      function de(e) {
        let { children: t } = e;
        const n = (function () {
          const { metadata: e, frontMatter: t, contentTitle: n } = s();
          return t.hide_title || void 0 !== n ? null : e.title;
        })();
        return a.createElement(
          'div',
          { className: (0, d.Z)(g.k.docs.docMarkdown, 'markdown') },
          n && a.createElement('header', null, a.createElement(le.Z, { as: 'h1' }, n)),
          a.createElement(ie, null, t)
        );
      }
      var me = n(1310);
      const ue = 'docItemContainer_Djhp',
        pe = 'docItemCol_VOVn';
      function fe(e) {
        let { children: t } = e;
        const n = (function () {
          const { frontMatter: e, toc: t } = s(),
            n = (0, m.i)(),
            r = e.hide_table_of_contents,
            o = !r && t.length > 0;
          return {
            hidden: r,
            mobile: o ? a.createElement(ne, null) : void 0,
            desktop: !o || ('desktop' !== n && 'ssr' !== n) ? void 0 : a.createElement(oe, null),
          };
        })();
        return a.createElement(
          'div',
          { className: 'row' },
          a.createElement(
            'div',
            { className: (0, d.Z)('col', !n.hidden && pe) },
            a.createElement(f.Z, null),
            a.createElement(
              'div',
              { className: ue },
              a.createElement(
                'article',
                null,
                a.createElement(me.Z, null),
                a.createElement(h.Z, null),
                n.mobile,
                a.createElement(de, null, t),
                a.createElement(M, null)
              ),
              a.createElement(p, null)
            )
          ),
          n.desktop && a.createElement('div', { className: 'col col--3' }, n.desktop)
        );
      }
      function he(e) {
        const t = `docs-doc-id-${e.content.metadata.unversionedId}`,
          n = e.content;
        return a.createElement(
          c,
          { content: e.content },
          a.createElement(r.FG, { className: t }, a.createElement(i, null), a.createElement(fe, null, a.createElement(n, null)))
        );
      }
    },
    4966: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => i });
      var a = n(7462),
        r = n(7294),
        o = n(5999),
        l = n(6010),
        c = n(9960);
      function s(e) {
        const { permalink: t, title: n, subLabel: a, isNext: o } = e;
        return r.createElement(
          c.Z,
          { className: (0, l.Z)('pagination-nav__link', o ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: t },
          a && r.createElement('div', { className: 'pagination-nav__sublabel' }, a),
          r.createElement('div', { className: 'pagination-nav__label' }, n)
        );
      }
      function i(e) {
        const { previous: t, next: n } = e;
        return r.createElement(
          'nav',
          {
            className: 'pagination-nav docusaurus-mt-lg',
            'aria-label': (0, o.I)({
              id: 'theme.docs.paginator.navAriaLabel',
              message: 'Docs pages navigation',
              description: 'The ARIA label for the docs pagination',
            }),
          },
          t &&
            r.createElement(
              s,
              (0, a.Z)({}, t, {
                subLabel: r.createElement(
                  o.Z,
                  { id: 'theme.docs.paginator.previous', description: 'The label used to navigate to the previous doc' },
                  'Previous'
                ),
              })
            ),
          n &&
            r.createElement(
              s,
              (0, a.Z)({}, n, {
                subLabel: r.createElement(
                  o.Z,
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
      'use strict';
      n.d(t, { Z: () => s });
      var a = n(7294),
        r = n(6010),
        o = n(5999),
        l = n(5281),
        c = n(4477);
      function s(e) {
        let { className: t } = e;
        const n = (0, c.E)();
        return n.badge
          ? a.createElement(
              'span',
              { className: (0, r.Z)(t, l.k.docs.docVersionBadge, 'badge badge--secondary') },
              a.createElement(
                o.Z,
                { id: 'theme.docs.versionBadge.label', values: { versionLabel: n.label } },
                'Version: {versionLabel}'
              )
            )
          : null;
      }
    },
    3120: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => g });
      var a = n(7294),
        r = n(6010),
        o = n(2263),
        l = n(9960),
        c = n(5999),
        s = n(143),
        i = n(5281),
        d = n(373),
        m = n(4477);
      const u = {
        unreleased: function (e) {
          let { siteTitle: t, versionMetadata: n } = e;
          return a.createElement(
            c.Z,
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
            c.Z,
            {
              id: 'theme.docs.versions.unmaintainedVersionLabel',
              description: "The label used to tell the user that he's browsing an unmaintained doc version",
              values: { siteTitle: t, versionLabel: a.createElement('b', null, n.label) },
            },
            'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.'
          );
        },
      };
      function p(e) {
        const t = u[e.versionMetadata.banner];
        return a.createElement(t, e);
      }
      function f(e) {
        let { versionLabel: t, to: n, onClick: r } = e;
        return a.createElement(
          c.Z,
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
                    c.Z,
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
      function h(e) {
        let { className: t, versionMetadata: n } = e;
        const {
            siteConfig: { title: l },
          } = (0, o.Z)(),
          { pluginId: c } = (0, s.gA)({ failfast: !0 }),
          { savePreferredVersionName: m } = (0, d.J)(c),
          { latestDocSuggestion: u, latestVersionSuggestion: h } = (0, s.Jo)(c),
          g = u ?? (v = h).docs.find(e => e.id === v.mainDocId);
        var v;
        return a.createElement(
          'div',
          { className: (0, r.Z)(t, i.k.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'), role: 'alert' },
          a.createElement('div', null, a.createElement(p, { siteTitle: l, versionMetadata: n })),
          a.createElement(
            'div',
            { className: 'margin-top--md' },
            a.createElement(f, { versionLabel: h.label, to: g.path, onClick: () => m(h.name) })
          )
        );
      }
      function g(e) {
        let { className: t } = e;
        const n = (0, m.E)();
        return n.banner ? a.createElement(h, { className: t, versionMetadata: n }) : null;
      }
    },
    2503: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => m });
      var a = n(7462),
        r = n(7294),
        o = n(6010),
        l = n(5999),
        c = n(6668),
        s = n(9960);
      const i = 'anchorWithStickyNavbar_LWe7',
        d = 'anchorWithHideOnScrollNavbar_WYt5';
      function m(e) {
        let { as: t, id: n, ...m } = e;
        const {
          navbar: { hideOnScroll: u },
        } = (0, c.L)();
        if ('h1' === t || !n) return r.createElement(t, (0, a.Z)({}, m, { id: void 0 }));
        const p = (0, l.I)(
          { id: 'theme.common.headingLinkTitle', message: 'Direct link to {heading}', description: 'Title for link to heading' },
          { heading: 'string' == typeof m.children ? m.children : n }
        );
        return r.createElement(
          t,
          (0, a.Z)({}, m, { className: (0, o.Z)('anchor', u ? d : i, m.className), id: n }),
          m.children,
          r.createElement(s.Z, { className: 'hash-link', to: `#${n}`, 'aria-label': p, title: p }, '\u200b')
        );
      }
    },
    617: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => he });
      var a = n(7462),
        r = n(7294),
        o = n(5742);
      var l = n(2389),
        c = n(6010),
        s = n(2949),
        i = n(6668);
      function d() {
        const { prism: e } = (0, i.L)(),
          { colorMode: t } = (0, s.I)(),
          n = e.theme,
          a = e.darkTheme || n;
        return 'dark' === t ? a : n;
      }
      var m = n(5281),
        u = n(7594),
        p = n.n(u);
      const f = /title=(?<quote>["'])(?<title>.*?)\1/,
        h = /\{(?<range>[\d,-]+)\}/,
        g = {
          js: { start: '\\/\\/', end: '' },
          jsBlock: { start: '\\/\\*', end: '\\*\\/' },
          jsx: { start: '\\{\\s*\\/\\*', end: '\\*\\/\\s*\\}' },
          bash: { start: '#', end: '' },
          html: { start: '\x3c!--', end: '--\x3e' },
        };
      function v(e, t) {
        const n = e
          .map(e => {
            const { start: n, end: a } = g[e];
            return `(?:${n}\\s*(${t
              .flatMap(e => {
                var t, n;
                return [e.line, null == (t = e.block) ? void 0 : t.start, null == (n = e.block) ? void 0 : n.end].filter(Boolean);
              })
              .join('|')})\\s*${a})`;
          })
          .join('|');
        return new RegExp(`^\\s*(?:${n})\\s*$`);
      }
      function b(e, t) {
        let n = e.replace(/\n$/, '');
        const { language: a, magicComments: r, metastring: o } = t;
        if (o && h.test(o)) {
          const e = o.match(h).groups.range;
          if (0 === r.length)
            throw new Error(
              `A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`
            );
          const t = r[0].className,
            a = p()(e)
              .filter(e => e > 0)
              .map(e => [e - 1, [t]]);
          return { lineClassNames: Object.fromEntries(a), code: n };
        }
        if (void 0 === a) return { lineClassNames: {}, code: n };
        const l = (function (e, t) {
            switch (e) {
              case 'js':
              case 'javascript':
              case 'ts':
              case 'typescript':
                return v(['js', 'jsBlock'], t);
              case 'jsx':
              case 'tsx':
                return v(['js', 'jsBlock', 'jsx'], t);
              case 'html':
                return v(['js', 'jsBlock', 'html'], t);
              case 'python':
              case 'py':
              case 'bash':
                return v(['bash'], t);
              case 'markdown':
              case 'md':
                return v(['html', 'jsx', 'bash'], t);
              default:
                return v(Object.keys(g), t);
            }
          })(a, r),
          c = n.split('\n'),
          s = Object.fromEntries(r.map(e => [e.className, { start: 0, range: '' }])),
          i = Object.fromEntries(
            r
              .filter(e => e.line)
              .map(e => {
                let { className: t, line: n } = e;
                return [n, t];
              })
          ),
          d = Object.fromEntries(
            r
              .filter(e => e.block)
              .map(e => {
                let { className: t, block: n } = e;
                return [n.start, t];
              })
          ),
          m = Object.fromEntries(
            r
              .filter(e => e.block)
              .map(e => {
                let { className: t, block: n } = e;
                return [n.end, t];
              })
          );
        for (let p = 0; p < c.length; ) {
          const e = c[p].match(l);
          if (!e) {
            p += 1;
            continue;
          }
          const t = e.slice(1).find(e => void 0 !== e);
          i[t]
            ? (s[i[t]].range += `${p},`)
            : d[t]
            ? (s[d[t]].start = p)
            : m[t] && (s[m[t]].range += `${s[m[t]].start}-${p - 1},`),
            c.splice(p, 1);
        }
        n = c.join('\n');
        const u = {};
        return (
          Object.entries(s).forEach(e => {
            let [t, { range: n }] = e;
            p()(n).forEach(e => {
              (u[e] ??= []), u[e].push(t);
            });
          }),
          { lineClassNames: u, code: n }
        );
      }
      const E = 'codeBlockContainer_Ckt0';
      function y(e) {
        let { as: t, ...n } = e;
        const o = (function (e) {
          const t = { color: '--prism-color', backgroundColor: '--prism-background-color' },
            n = {};
          return (
            Object.entries(e.plain).forEach(e => {
              let [a, r] = e;
              const o = t[a];
              o && 'string' == typeof r && (n[o] = r);
            }),
            n
          );
        })(d());
        return r.createElement(t, (0, a.Z)({}, n, { style: o, className: (0, c.Z)(n.className, E, m.k.common.codeBlock) }));
      }
      const k = {
        codeBlockContent: 'codeBlockContent_biex',
        codeBlockTitle: 'codeBlockTitle_Ktv7',
        codeBlock: 'codeBlock_bY9V',
        codeBlockStandalone: 'codeBlockStandalone_MEMb',
        codeBlockLines: 'codeBlockLines_e6Vv',
        codeBlockLinesWithNumbering: 'codeBlockLinesWithNumbering_o6Pm',
        buttonGroup: 'buttonGroup__atx',
      };
      function N(e) {
        let { children: t, className: n } = e;
        return r.createElement(
          y,
          { as: 'pre', tabIndex: 0, className: (0, c.Z)(k.codeBlockStandalone, 'thin-scrollbar', n) },
          r.createElement('code', { className: k.codeBlockLines }, t)
        );
      }
      var L = n(902);
      const C = { attributes: !0, characterData: !0, childList: !0, subtree: !0 };
      function Z(e, t) {
        const [n, a] = (0, r.useState)(),
          o = (0, r.useCallback)(() => {
            var t;
            a(null == (t = e.current) ? void 0 : t.closest('[role=tabpanel][hidden]'));
          }, [e, a]);
        (0, r.useEffect)(() => {
          o();
        }, [o]),
          (function (e, t, n) {
            void 0 === n && (n = C);
            const a = (0, L.zX)(t),
              o = (0, L.Ql)(n);
            (0, r.useEffect)(() => {
              const t = new MutationObserver(a);
              return e && t.observe(e, o), () => t.disconnect();
            }, [e, a, o]);
          })(
            n,
            e => {
              e.forEach(e => {
                'attributes' === e.type && 'hidden' === e.attributeName && (t(), o());
              });
            },
            { attributes: !0, characterData: !1, childList: !1, subtree: !1 }
          );
      }
      const T = {
        plain: { backgroundColor: '#2a2734', color: '#9a86fd' },
        styles: [
          { types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'], style: { color: '#6c6783' } },
          { types: ['namespace'], style: { opacity: 0.7 } },
          { types: ['tag', 'operator', 'number'], style: { color: '#e09142' } },
          { types: ['property', 'function'], style: { color: '#9a86fd' } },
          { types: ['tag-id', 'selector', 'atrule-id'], style: { color: '#eeebff' } },
          { types: ['attr-name'], style: { color: '#c4b9fe' } },
          {
            types: [
              'boolean',
              'string',
              'entity',
              'url',
              'attr-value',
              'keyword',
              'control',
              'directive',
              'unit',
              'statement',
              'regex',
              'atrule',
              'placeholder',
              'variable',
            ],
            style: { color: '#ffcc99' },
          },
          { types: ['deleted'], style: { textDecorationLine: 'line-through' } },
          { types: ['inserted'], style: { textDecorationLine: 'underline' } },
          { types: ['italic'], style: { fontStyle: 'italic' } },
          { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
          { types: ['important'], style: { color: '#c4b9fe' } },
        ],
      };
      var _ = { Prism: n(7410).Z, theme: T };
      function w(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function x() {
        return (
          (x =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          x.apply(this, arguments)
        );
      }
      var B = /\r\n|\r|\n/,
        O = function (e) {
          0 === e.length
            ? e.push({ types: ['plain'], content: '\n', empty: !0 })
            : 1 === e.length && '' === e[0].content && ((e[0].content = '\n'), (e[0].empty = !0));
        },
        A = function (e, t) {
          var n = e.length;
          return n > 0 && e[n - 1] === t ? e : e.concat(t);
        },
        j = function (e, t) {
          var n = e.plain,
            a = Object.create(null),
            r = e.styles.reduce(function (e, n) {
              var a = n.languages,
                r = n.style;
              return (
                (a && !a.includes(t)) ||
                  n.types.forEach(function (t) {
                    var n = x({}, e[t], r);
                    e[t] = n;
                  }),
                e
              );
            }, a);
          return (r.root = n), (r.plain = x({}, n, { backgroundColor: null })), r;
        };
      function H(e, t) {
        var n = {};
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && -1 === t.indexOf(a) && (n[a] = e[a]);
        return n;
      }
      const S = (function (e) {
          function t() {
            for (var t = this, n = [], a = arguments.length; a--; ) n[a] = arguments[a];
            e.apply(this, n),
              w(this, 'getThemeDict', function (e) {
                if (void 0 !== t.themeDict && e.theme === t.prevTheme && e.language === t.prevLanguage) return t.themeDict;
                (t.prevTheme = e.theme), (t.prevLanguage = e.language);
                var n = e.theme ? j(e.theme, e.language) : void 0;
                return (t.themeDict = n);
              }),
              w(this, 'getLineProps', function (e) {
                var n = e.key,
                  a = e.className,
                  r = e.style,
                  o = x({}, H(e, ['key', 'className', 'style', 'line']), { className: 'token-line', style: void 0, key: void 0 }),
                  l = t.getThemeDict(t.props);
                return (
                  void 0 !== l && (o.style = l.plain),
                  void 0 !== r && (o.style = void 0 !== o.style ? x({}, o.style, r) : r),
                  void 0 !== n && (o.key = n),
                  a && (o.className += ' ' + a),
                  o
                );
              }),
              w(this, 'getStyleForToken', function (e) {
                var n = e.types,
                  a = e.empty,
                  r = n.length,
                  o = t.getThemeDict(t.props);
                if (void 0 !== o) {
                  if (1 === r && 'plain' === n[0]) return a ? { display: 'inline-block' } : void 0;
                  if (1 === r && !a) return o[n[0]];
                  var l = a ? { display: 'inline-block' } : {},
                    c = n.map(function (e) {
                      return o[e];
                    });
                  return Object.assign.apply(Object, [l].concat(c));
                }
              }),
              w(this, 'getTokenProps', function (e) {
                var n = e.key,
                  a = e.className,
                  r = e.style,
                  o = e.token,
                  l = x({}, H(e, ['key', 'className', 'style', 'token']), {
                    className: 'token ' + o.types.join(' '),
                    children: o.content,
                    style: t.getStyleForToken(o),
                    key: void 0,
                  });
                return (
                  void 0 !== r && (l.style = void 0 !== l.style ? x({}, l.style, r) : r),
                  void 0 !== n && (l.key = n),
                  a && (l.className += ' ' + a),
                  l
                );
              }),
              w(this, 'tokenize', function (e, t, n, a) {
                var r = { code: t, grammar: n, language: a, tokens: [] };
                e.hooks.run('before-tokenize', r);
                var o = (r.tokens = e.tokenize(r.code, r.grammar, r.language));
                return e.hooks.run('after-tokenize', r), o;
              });
          }
          return (
            e && (t.__proto__ = e),
            (t.prototype = Object.create(e && e.prototype)),
            (t.prototype.constructor = t),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.Prism,
                n = e.language,
                a = e.code,
                r = e.children,
                o = this.getThemeDict(this.props),
                l = t.languages[n];
              return r({
                tokens: (function (e) {
                  for (var t = [[]], n = [e], a = [0], r = [e.length], o = 0, l = 0, c = [], s = [c]; l > -1; ) {
                    for (; (o = a[l]++) < r[l]; ) {
                      var i = void 0,
                        d = t[l],
                        m = n[l][o];
                      if (
                        ('string' == typeof m
                          ? ((d = l > 0 ? d : ['plain']), (i = m))
                          : ((d = A(d, m.type)), m.alias && (d = A(d, m.alias)), (i = m.content)),
                        'string' == typeof i)
                      ) {
                        var u = i.split(B),
                          p = u.length;
                        c.push({ types: d, content: u[0] });
                        for (var f = 1; f < p; f++) O(c), s.push((c = [])), c.push({ types: d, content: u[f] });
                      } else l++, t.push(d), n.push(i), a.push(0), r.push(i.length);
                    }
                    l--, t.pop(), n.pop(), a.pop(), r.pop();
                  }
                  return O(c), s;
                })(void 0 !== l ? this.tokenize(t, a, l, n) : [a]),
                className: 'prism-code language-' + n,
                style: void 0 !== o ? o.root : {},
                getLineProps: this.getLineProps,
                getTokenProps: this.getTokenProps,
              });
            }),
            t
          );
        })(r.Component),
        M = 'codeLine_lJS_',
        I = 'codeLineNumber_Tfdd',
        P = 'codeLineContent_feaV';
      function U(e) {
        let { line: t, classNames: n, showLineNumbers: o, getLineProps: l, getTokenProps: s } = e;
        1 === t.length && '\n' === t[0].content && (t[0].content = '');
        const i = l({ line: t, className: (0, c.Z)(n, o && M) }),
          d = t.map((e, t) => r.createElement('span', (0, a.Z)({ key: t }, s({ token: e, key: t }))));
        return r.createElement(
          'span',
          i,
          o
            ? r.createElement(
                r.Fragment,
                null,
                r.createElement('span', { className: I }),
                r.createElement('span', { className: P }, d)
              )
            : d,
          r.createElement('br', null)
        );
      }
      var z = n(5999);
      const V = {
        copyButtonCopied: 'copyButtonCopied_obH4',
        copyButtonIcons: 'copyButtonIcons_eSgA',
        copyButtonIcon: 'copyButtonIcon_y97N',
        copyButtonSuccessIcon: 'copyButtonSuccessIcon_LjdS',
      };
      function D(e) {
        let { code: t, className: n } = e;
        const [a, o] = (0, r.useState)(!1),
          l = (0, r.useRef)(void 0),
          s = (0, r.useCallback)(() => {
            !(function (e, { target: t = document.body } = {}) {
              if ('string' != typeof e)
                throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);
              const n = document.createElement('textarea'),
                a = document.activeElement;
              (n.value = e),
                n.setAttribute('readonly', ''),
                (n.style.contain = 'strict'),
                (n.style.position = 'absolute'),
                (n.style.left = '-9999px'),
                (n.style.fontSize = '12pt');
              const r = document.getSelection(),
                o = r.rangeCount > 0 && r.getRangeAt(0);
              t.append(n), n.select(), (n.selectionStart = 0), (n.selectionEnd = e.length);
              let l = !1;
              try {
                l = document.execCommand('copy');
              } catch {}
              n.remove(), o && (r.removeAllRanges(), r.addRange(o)), a && a.focus();
            })(t),
              o(!0),
              (l.current = window.setTimeout(() => {
                o(!1);
              }, 1e3));
          }, [t]);
        return (
          (0, r.useEffect)(() => () => window.clearTimeout(l.current), []),
          r.createElement(
            'button',
            {
              type: 'button',
              'aria-label': a
                ? (0, z.I)({
                    id: 'theme.CodeBlock.copied',
                    message: 'Copied',
                    description: 'The copied button label on code blocks',
                  })
                : (0, z.I)({
                    id: 'theme.CodeBlock.copyButtonAriaLabel',
                    message: 'Copy code to clipboard',
                    description: 'The ARIA label for copy code blocks button',
                  }),
              title: (0, z.I)({
                id: 'theme.CodeBlock.copy',
                message: 'Copy',
                description: 'The copy button label on code blocks',
              }),
              className: (0, c.Z)('clean-btn', n, V.copyButton, a && V.copyButtonCopied),
              onClick: s,
            },
            r.createElement(
              'span',
              { className: V.copyButtonIcons, 'aria-hidden': 'true' },
              r.createElement(
                'svg',
                { className: V.copyButtonIcon, viewBox: '0 0 24 24' },
                r.createElement('path', {
                  d: 'M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z',
                })
              ),
              r.createElement(
                'svg',
                { className: V.copyButtonSuccessIcon, viewBox: '0 0 24 24' },
                r.createElement('path', { d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' })
              )
            )
          )
        );
      }
      const R = 'wordWrapButtonIcon_Bwma',
        $ = 'wordWrapButtonEnabled_EoeP';
      function W(e) {
        let { className: t, onClick: n, isEnabled: a } = e;
        const o = (0, z.I)({
          id: 'theme.CodeBlock.wordWrapToggle',
          message: 'Toggle word wrap',
          description: 'The title attribute for toggle word wrapping button of code block lines',
        });
        return r.createElement(
          'button',
          { type: 'button', onClick: n, className: (0, c.Z)('clean-btn', t, a && $), 'aria-label': o, title: o },
          r.createElement(
            'svg',
            { className: R, viewBox: '0 0 24 24', 'aria-hidden': 'true' },
            r.createElement('path', {
              fill: 'currentColor',
              d: 'M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z',
            })
          )
        );
      }
      function F(e) {
        let { children: t, className: n = '', metastring: o, title: l, showLineNumbers: s, language: m } = e;
        const {
            prism: { defaultLanguage: u, magicComments: p },
          } = (0, i.L)(),
          h =
            m ??
            (function (e) {
              const t = e.split(' ').find(e => e.startsWith('language-'));
              return null == t ? void 0 : t.replace(/language-/, '');
            })(n) ??
            u,
          g = d(),
          v = (function () {
            const [e, t] = (0, r.useState)(!1),
              [n, a] = (0, r.useState)(!1),
              o = (0, r.useRef)(null),
              l = (0, r.useCallback)(() => {
                const n = o.current.querySelector('code');
                e ? n.removeAttribute('style') : ((n.style.whiteSpace = 'pre-wrap'), (n.style.overflowWrap = 'anywhere')),
                  t(e => !e);
              }, [o, e]),
              c = (0, r.useCallback)(() => {
                const { scrollWidth: e, clientWidth: t } = o.current,
                  n = e > t || o.current.querySelector('code').hasAttribute('style');
                a(n);
              }, [o]);
            return (
              Z(o, c),
              (0, r.useEffect)(() => {
                c();
              }, [e, c]),
              (0, r.useEffect)(
                () => (
                  window.addEventListener('resize', c, { passive: !0 }),
                  () => {
                    window.removeEventListener('resize', c);
                  }
                ),
                [c]
              ),
              { codeBlockRef: o, isEnabled: e, isCodeScrollable: n, toggle: l }
            );
          })(),
          E =
            (function (e) {
              var t;
              return (null == e || null == (t = e.match(f)) ? void 0 : t.groups.title) ?? '';
            })(o) || l,
          { lineClassNames: N, code: L } = b(t, { metastring: o, language: h, magicComments: p }),
          C =
            s ??
            (function (e) {
              return Boolean(null == e ? void 0 : e.includes('showLineNumbers'));
            })(o);
        return r.createElement(
          y,
          { as: 'div', className: (0, c.Z)(n, h && !n.includes(`language-${h}`) && `language-${h}`) },
          E && r.createElement('div', { className: k.codeBlockTitle }, E),
          r.createElement(
            'div',
            { className: k.codeBlockContent },
            r.createElement(S, (0, a.Z)({}, _, { theme: g, code: L, language: h ?? 'text' }), e => {
              let { className: t, tokens: n, getLineProps: a, getTokenProps: o } = e;
              return r.createElement(
                'pre',
                { tabIndex: 0, ref: v.codeBlockRef, className: (0, c.Z)(t, k.codeBlock, 'thin-scrollbar') },
                r.createElement(
                  'code',
                  { className: (0, c.Z)(k.codeBlockLines, C && k.codeBlockLinesWithNumbering) },
                  n.map((e, t) =>
                    r.createElement(U, {
                      key: t,
                      line: e,
                      getLineProps: a,
                      getTokenProps: o,
                      classNames: N[t],
                      showLineNumbers: C,
                    })
                  )
                )
              );
            }),
            r.createElement(
              'div',
              { className: k.buttonGroup },
              (v.isEnabled || v.isCodeScrollable) &&
                r.createElement(W, { className: k.codeButton, onClick: () => v.toggle(), isEnabled: v.isEnabled }),
              r.createElement(D, { className: k.codeButton, code: L })
            )
          )
        );
      }
      function q(e) {
        let { children: t, ...n } = e;
        const o = (0, l.Z)(),
          c = (function (e) {
            return r.Children.toArray(e).some(e => (0, r.isValidElement)(e)) ? e : Array.isArray(e) ? e.join('') : e;
          })(t),
          s = 'string' == typeof c ? F : N;
        return r.createElement(s, (0, a.Z)({ key: String(o) }, n), c);
      }
      var G = n(9960);
      var Y = n(6043);
      const J = 'details_lb9f',
        Q = 'isBrowser_bmU9',
        X = 'collapsibleContent_i85q';
      function K(e) {
        return !!e && ('SUMMARY' === e.tagName || K(e.parentElement));
      }
      function ee(e, t) {
        return !!e && (e === t || ee(e.parentElement, t));
      }
      function te(e) {
        let { summary: t, children: n, ...o } = e;
        const s = (0, l.Z)(),
          i = (0, r.useRef)(null),
          { collapsed: d, setCollapsed: m } = (0, Y.u)({ initialState: !o.open }),
          [u, p] = (0, r.useState)(o.open),
          f = r.isValidElement(t) ? t : r.createElement('summary', null, t ?? 'Details');
        return r.createElement(
          'details',
          (0, a.Z)({}, o, {
            ref: i,
            open: u,
            'data-collapsed': d,
            className: (0, c.Z)(J, s && Q, o.className),
            onMouseDown: e => {
              K(e.target) && e.detail > 1 && e.preventDefault();
            },
            onClick: e => {
              e.stopPropagation();
              const t = e.target;
              K(t) && ee(t, i.current) && (e.preventDefault(), d ? (m(!1), p(!0)) : m(!0));
            },
          }),
          f,
          r.createElement(
            Y.z,
            {
              lazy: !1,
              collapsed: d,
              disableSSRStyle: !0,
              onCollapseTransitionEnd: e => {
                m(e), p(!e);
              },
            },
            r.createElement('div', { className: X }, n)
          )
        );
      }
      const ne = 'details_b_Ee';
      function ae(e) {
        let { ...t } = e;
        return r.createElement(te, (0, a.Z)({}, t, { className: (0, c.Z)('alert alert--info', ne, t.className) }));
      }
      var re = n(2503);
      function oe(e) {
        return r.createElement(re.Z, e);
      }
      const le = 'containsTaskList_mC6p';
      const ce = 'img_ev3q';
      const se = 'admonition_LlT9',
        ie = 'admonitionHeading_tbUL',
        de = 'admonitionIcon_kALy',
        me = 'admonitionContent_S0QG';
      const ue = {
          note: {
            infimaClassName: 'secondary',
            iconComponent: function () {
              return r.createElement(
                'svg',
                { viewBox: '0 0 14 16' },
                r.createElement('path', {
                  fillRule: 'evenodd',
                  d: 'M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z',
                })
              );
            },
            label: r.createElement(
              z.Z,
              { id: 'theme.admonition.note', description: 'The default label used for the Note admonition (:::note)' },
              'note'
            ),
          },
          tip: {
            infimaClassName: 'success',
            iconComponent: function () {
              return r.createElement(
                'svg',
                { viewBox: '0 0 12 16' },
                r.createElement('path', {
                  fillRule: 'evenodd',
                  d: 'M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z',
                })
              );
            },
            label: r.createElement(
              z.Z,
              { id: 'theme.admonition.tip', description: 'The default label used for the Tip admonition (:::tip)' },
              'tip'
            ),
          },
          danger: {
            infimaClassName: 'danger',
            iconComponent: function () {
              return r.createElement(
                'svg',
                { viewBox: '0 0 12 16' },
                r.createElement('path', {
                  fillRule: 'evenodd',
                  d: 'M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z',
                })
              );
            },
            label: r.createElement(
              z.Z,
              { id: 'theme.admonition.danger', description: 'The default label used for the Danger admonition (:::danger)' },
              'danger'
            ),
          },
          info: {
            infimaClassName: 'info',
            iconComponent: function () {
              return r.createElement(
                'svg',
                { viewBox: '0 0 14 16' },
                r.createElement('path', {
                  fillRule: 'evenodd',
                  d: 'M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z',
                })
              );
            },
            label: r.createElement(
              z.Z,
              { id: 'theme.admonition.info', description: 'The default label used for the Info admonition (:::info)' },
              'info'
            ),
          },
          caution: {
            infimaClassName: 'warning',
            iconComponent: function () {
              return r.createElement(
                'svg',
                { viewBox: '0 0 16 16' },
                r.createElement('path', {
                  fillRule: 'evenodd',
                  d: 'M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z',
                })
              );
            },
            label: r.createElement(
              z.Z,
              { id: 'theme.admonition.caution', description: 'The default label used for the Caution admonition (:::caution)' },
              'caution'
            ),
          },
        },
        pe = { secondary: 'note', important: 'info', success: 'tip', warning: 'danger' };
      function fe(e) {
        const { mdxAdmonitionTitle: t, rest: n } = (function (e) {
          const t = r.Children.toArray(e),
            n = t.find(e => {
              var t;
              return r.isValidElement(e) && 'mdxAdmonitionTitle' === (null == (t = e.props) ? void 0 : t.mdxType);
            }),
            a = r.createElement(
              r.Fragment,
              null,
              t.filter(e => e !== n)
            );
          return { mdxAdmonitionTitle: n, rest: a };
        })(e.children);
        return { ...e, title: e.title ?? t, children: n };
      }
      const he = {
        head: function (e) {
          const t = r.Children.map(e.children, e =>
            r.isValidElement(e)
              ? (function (e) {
                  var t;
                  if (null != (t = e.props) && t.mdxType && e.props.originalType) {
                    const { mdxType: t, originalType: n, ...a } = e.props;
                    return r.createElement(e.props.originalType, a);
                  }
                  return e;
                })(e)
              : e
          );
          return r.createElement(o.Z, e, t);
        },
        code: function (e) {
          const t = [
            'a',
            'abbr',
            'b',
            'br',
            'button',
            'cite',
            'code',
            'del',
            'dfn',
            'em',
            'i',
            'img',
            'input',
            'ins',
            'kbd',
            'label',
            'object',
            'output',
            'q',
            'ruby',
            's',
            'small',
            'span',
            'strong',
            'sub',
            'sup',
            'time',
            'u',
            'var',
            'wbr',
          ];
          return r.Children.toArray(e.children).every(e => {
            var n;
            return (
              ('string' == typeof e && !e.includes('\n')) ||
              ((0, r.isValidElement)(e) && t.includes(null == (n = e.props) ? void 0 : n.mdxType))
            );
          })
            ? r.createElement('code', e)
            : r.createElement(q, e);
        },
        a: function (e) {
          return r.createElement(G.Z, e);
        },
        pre: function (e) {
          var t;
          return r.createElement(
            q,
            (0, r.isValidElement)(e.children) && 'code' === (null == (t = e.children.props) ? void 0 : t.originalType)
              ? e.children.props
              : { ...e }
          );
        },
        details: function (e) {
          const t = r.Children.toArray(e.children),
            n = t.find(e => {
              var t;
              return r.isValidElement(e) && 'summary' === (null == (t = e.props) ? void 0 : t.mdxType);
            }),
            o = r.createElement(
              r.Fragment,
              null,
              t.filter(e => e !== n)
            );
          return r.createElement(ae, (0, a.Z)({}, e, { summary: n }), o);
        },
        ul: function (e) {
          return r.createElement(
            'ul',
            (0, a.Z)({}, e, {
              className: ((t = e.className), (0, c.Z)(t, (null == t ? void 0 : t.includes('contains-task-list')) && le)),
            })
          );
          var t;
        },
        img: function (e) {
          return r.createElement('img', (0, a.Z)({ loading: 'lazy' }, e, { className: ((t = e.className), (0, c.Z)(t, ce)) }));
          var t;
        },
        h1: e => r.createElement(oe, (0, a.Z)({ as: 'h1' }, e)),
        h2: e => r.createElement(oe, (0, a.Z)({ as: 'h2' }, e)),
        h3: e => r.createElement(oe, (0, a.Z)({ as: 'h3' }, e)),
        h4: e => r.createElement(oe, (0, a.Z)({ as: 'h4' }, e)),
        h5: e => r.createElement(oe, (0, a.Z)({ as: 'h5' }, e)),
        h6: e => r.createElement(oe, (0, a.Z)({ as: 'h6' }, e)),
        admonition: function (e) {
          const { children: t, type: n, title: a, icon: o } = fe(e),
            l = (function (e) {
              const t = pe[e] ?? e,
                n = ue[t];
              return (
                n || (console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`), ue.info)
              );
            })(n),
            s = a ?? l.label,
            { iconComponent: i } = l,
            d = o ?? r.createElement(i, null);
          return r.createElement(
            'div',
            {
              className: (0, c.Z)(
                m.k.common.admonition,
                m.k.common.admonitionType(e.type),
                'alert',
                `alert--${l.infimaClassName}`,
                se
              ),
            },
            r.createElement('div', { className: ie }, r.createElement('span', { className: de }, d), s),
            r.createElement('div', { className: me }, t)
          );
        },
        mermaid: n(1875).Z,
      };
    },
    7594: (e, t) => {
      function n(e) {
        let t,
          n = [];
        for (let a of e.split(',').map(e => e.trim()))
          if (/^-?\d+$/.test(a)) n.push(parseInt(a, 10));
          else if ((t = a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))) {
            let [e, a, r, o] = t;
            if (a && o) {
              (a = parseInt(a)), (o = parseInt(o));
              const e = a < o ? 1 : -1;
              ('-' !== r && '..' !== r && '\u2025' !== r) || (o += e);
              for (let t = a; t !== o; t += e) n.push(t);
            }
          }
        return n;
      }
      (t.default = n), (e.exports = n);
    },
  },
]);
