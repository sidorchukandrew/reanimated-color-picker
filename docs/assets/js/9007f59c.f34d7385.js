'use strict';
(self.webpackChunkmy_docs = self.webpackChunkmy_docs || []).push([
  [257],
  {
    3905: (e, t, n) => {
      n.d(t, { Zo: () => u, kt: () => c });
      var a = n(7294);
      function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function l(e, t) {
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
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function o(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
        }
        return r;
      }
      var d = a.createContext({}),
        p = function (e) {
          var t = a.useContext(d),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : i(i({}, t), e)), n;
        },
        u = function (e) {
          var t = p(e.components);
          return a.createElement(d.Provider, { value: t }, e.children);
        },
        m = 'mdxType',
        s = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        h = a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            l = e.originalType,
            d = e.parentName,
            u = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            m = p(n),
            h = r,
            c = m[''.concat(d, '.').concat(h)] || m[h] || s[h] || l;
          return n ? a.createElement(c, i(i({ ref: t }, u), {}, { components: n })) : a.createElement(c, i({ ref: t }, u));
        });
      function c(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var l = n.length,
            i = new Array(l);
          i[0] = h;
          var o = {};
          for (var d in t) hasOwnProperty.call(t, d) && (o[d] = t[d]);
          (o.originalType = e), (o[m] = 'string' == typeof e ? e : r), (i[1] = o);
          for (var p = 2; p < l; p++) i[p] = n[p];
          return a.createElement.apply(null, i);
        }
        return a.createElement.apply(null, n);
      }
      h.displayName = 'MDXCreateElement';
    },
    4108: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => o,
          default: () => s,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => u,
        });
      var a = n(7462),
        r = (n(7294), n(3905)),
        l = n(6862);
      const i = {
          sidebar_position: 13,
          sidebar_label: 'Panel4',
          description: 'A slider with a square shape is used to adjust the channels of hue, saturation, and brightness.',
        },
        o = '<Panel4 />',
        d = {
          unversionedId: 'API/Panel4',
          id: 'API/Panel4',
          title: '<Panel4 />',
          description: 'A slider with a square shape is used to adjust the channels of hue, saturation, and brightness.',
          source: '@site/docs/API/Panel4.mdx',
          sourceDirName: 'API',
          slug: '/API/Panel4',
          permalink: '/reanimated-color-picker/docs/API/Panel4',
          draft: !1,
          tags: [],
          version: 'current',
          sidebarPosition: 13,
          frontMatter: {
            sidebar_position: 13,
            sidebar_label: 'Panel4',
            description: 'A slider with a square shape is used to adjust the channels of hue, saturation, and brightness.',
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'Panel3', permalink: '/reanimated-color-picker/docs/API/Panel3' },
          next: { title: 'Panel5', permalink: '/reanimated-color-picker/docs/API/Panel5' },
        },
        p = {},
        u = [
          { value: 'Props', id: 'props', level: 2 },
          { value: '<code>boundedThumb</code>', id: 'boundedthumb', level: 3 },
          { value: '<code>thumbSize</code>', id: 'thumbsize', level: 3 },
          { value: '<code>thumbColor</code>', id: 'thumbcolor', level: 3 },
          { value: '<code>thumbShape</code>', id: 'thumbshape', level: 3 },
          { value: '<code>thumbStyle</code>', id: 'thumbstyle', level: 3 },
          { value: '<code>thumbInnerStyle</code>', id: 'thumbinnerstyle', level: 3 },
          { value: '<code>reverseHue</code>', id: 'reversehue', level: 3 },
          { value: '<code>reverseHorizontalChannels</code>', id: 'reversehorizontalchannels', level: 3 },
          { value: '<code>style</code>', id: 'style', level: 3 },
        ],
        m = { toc: u };
      function s(e) {
        let { components: t, ...i } = e;
        return (0, r.kt)(
          'wrapper',
          (0, a.Z)({}, m, i, { components: t, mdxType: 'MDXLayout' }),
          (0, r.kt)('h1', { id: 'panel4-' }, (0, r.kt)('inlineCode', { parentName: 'h1' }, '<Panel4 />')),
          (0, r.kt)('p', null, (0, r.kt)('img', { alt: 'panel4', src: n(575).Z, width: '200', height: '200' })),
          (0, r.kt)(
            'ul',
            null,
            (0, r.kt)(
              'li',
              { parentName: 'ul' },
              (0, r.kt)(
                'p',
                { parentName: 'li' },
                'A slider with a square shape is used to adjust the channels of hue, saturation, and brightness.'
              )
            ),
            (0, r.kt)(
              'li',
              { parentName: 'ul' },
              (0, r.kt)(
                'p',
                { parentName: 'li' },
                "To adjust the color's saturation and brightness, move the handle horizontally.."
              )
            ),
            (0, r.kt)(
              'li',
              { parentName: 'ul' },
              (0, r.kt)('p', { parentName: 'li' }, "Move the handle vertically to change the color's hue.")
            )
          ),
          (0, r.kt)(
            'admonition',
            { type: 'danger' },
            (0, r.kt)(
              'p',
              { parentName: 'admonition' },
              'This panel cannot show all colors because it has a limited range of colors it can display. For example, if the input color has 50% saturation and 50% brightness, the panel thumb (handle) location won\u2019t be accurate because it cannot show that color. This means that the color you select may not be exactly what you see in the panel.'
            )
          ),
          (0, r.kt)('h2', { id: 'props' }, 'Props'),
          (0, r.kt)('h3', { id: 'boundedthumb' }, (0, r.kt)('inlineCode', { parentName: 'h3' }, 'boundedThumb')),
          (0, r.kt)(
            'ul',
            null,
            (0, r.kt)(
              'li',
              { parentName: 'ul' },
              'Determines whether the panel slider thumb (or handle) should be constrained to stay within the boundaries of the panel.'
            ),
            (0, r.kt)(
              'li',
              { parentName: 'ul' },
              'When set to ',
              (0, r.kt)('inlineCode', { parentName: 'li' }, 'true'),
              ', the thumb will not be allowed to move beyond the edges of the panel.'
            ),
            (0, r.kt)(
              'li',
              { parentName: 'ul' },
              'When set to ',
              (0, r.kt)('inlineCode', { parentName: 'li' }, 'false'),
              ', part of it will be outside of the panel bounds.'
            ),
            (0, r.kt)('li', { parentName: 'ul' }, (0, r.kt)('inlineCode', { parentName: 'li' }, 'type: boolean')),
            (0, r.kt)('li', { parentName: 'ul' }, (0, r.kt)('inlineCode', { parentName: 'li' }, 'default: false'))
          ),
          (0, r.kt)('h3', { id: 'thumbsize' }, (0, r.kt)('inlineCode', { parentName: 'h3' }, 'thumbSize')),
          (0, r.kt)(
            'ul',
            null,
            (0, r.kt)('li', { parentName: 'ul' }, "Panel's handle (thumb) size (height", '*', 'width).'),
            (0, r.kt)('li', { parentName: 'ul' }, (0, r.kt)('inlineCode', { parentName: 'li' }, 'type: number')),
            (0, r.kt)('li', { parentName: 'ul' }, (0, r.kt)('inlineCode', { parentName: 'li' }, 'default: 35'))
          ),
          (0, r.kt)('h3', { id: 'thumbcolor' }, (0, r.kt)('inlineCode', { parentName: 'h3' }, 'thumbColor')),
          (0, r.kt)(
            'ul',
            null,
            (0, r.kt)('li', { parentName: 'ul' }, "Change thumb's color."),
            (0, r.kt)('li', { parentName: 'ul' }, (0, r.kt)('inlineCode', { parentName: 'li' }, 'type: string')),
            (0, r.kt)('li', { parentName: 'ul' }, (0, r.kt)('inlineCode', { parentName: 'li' }, 'default'), ': interactive', '*')
          ),
          (0, r.kt)(
            'admonition',
            { type: 'info' },
            (0, r.kt)(
              'mdxAdmonitionTitle',
              { parentName: 'admonition' },
              (0, r.kt)('strong', { parentName: 'mdxAdmonitionTitle' }, '*', 'interactive')
            ),
            (0, r.kt)(
              'ul',
              { parentName: 'admonition' },
              (0, r.kt)(
                'li',
                { parentName: 'ul' },
                'The thumb color will be changed depending on the contrast ratio if no color value is passed.'
              )
            )
          ),
          (0, r.kt)('h3', { id: 'thumbshape' }, (0, r.kt)('inlineCode', { parentName: 'h3' }, 'thumbShape')),
          (0, r.kt)(
            'ul',
            null,
            (0, r.kt)('li', { parentName: 'ul' }, "Change thumb's shape and appearance."),
            (0, r.kt)('li', { parentName: 'ul' }, (0, r.kt)('inlineCode', { parentName: 'li' }, 'type: string')),
            (0, r.kt)(
              'li',
              { parentName: 'ul' },
              (0, r.kt)('inlineCode', { parentName: 'li' }, 'values'),
              ': ',
              (0, r.kt)('shapes', null)
            ),
            (0, r.kt)('li', { parentName: 'ul' }, (0, r.kt)('inlineCode', { parentName: 'li' }, "default: 'ring'"))
          ),
          (0, r.kt)('h3', { id: 'thumbstyle' }, (0, r.kt)('inlineCode', { parentName: 'h3' }, 'thumbStyle')),
          (0, r.kt)(
            'ul',
            null,
            (0, r.kt)('li', { parentName: 'ul' }, "Thumb's containing View's style."),
            (0, r.kt)('li', { parentName: 'ul' }, (0, r.kt)('inlineCode', { parentName: 'li' }, 'type: ViewStyle'))
          ),
          (0, r.kt)('h3', { id: 'thumbinnerstyle' }, (0, r.kt)('inlineCode', { parentName: 'h3' }, 'thumbInnerStyle')),
          (0, r.kt)(
            'ul',
            null,
            (0, r.kt)('li', { parentName: 'ul' }, "Thumb's inner View(s) style."),
            (0, r.kt)('li', { parentName: 'ul' }, (0, r.kt)('inlineCode', { parentName: 'li' }, 'type: ViewStyle'))
          ),
          (0, r.kt)(l.ZP, { mdxType: 'RenderThumb' }),
          (0, r.kt)('h3', { id: 'reversehue' }, (0, r.kt)('inlineCode', { parentName: 'h3' }, 'reverseHue')),
          (0, r.kt)(
            'ul',
            null,
            (0, r.kt)('li', { parentName: 'ul' }, 'Reverse (flip) hue direction.'),
            (0, r.kt)('li', { parentName: 'ul' }, (0, r.kt)('inlineCode', { parentName: 'li' }, 'type: boolean')),
            (0, r.kt)('li', { parentName: 'ul' }, (0, r.kt)('inlineCode', { parentName: 'li' }, 'default: false'))
          ),
          (0, r.kt)(
            'h3',
            { id: 'reversehorizontalchannels' },
            (0, r.kt)('inlineCode', { parentName: 'h3' }, 'reverseHorizontalChannels')
          ),
          (0, r.kt)(
            'ul',
            null,
            (0, r.kt)(
              'li',
              { parentName: 'ul' },
              "Reverse (flip) the direction of the horizontal channel's brightness and saturation.."
            ),
            (0, r.kt)('li', { parentName: 'ul' }, (0, r.kt)('inlineCode', { parentName: 'li' }, 'type: boolean')),
            (0, r.kt)('li', { parentName: 'ul' }, (0, r.kt)('inlineCode', { parentName: 'li' }, 'default: false'))
          ),
          (0, r.kt)('h3', { id: 'style' }, (0, r.kt)('inlineCode', { parentName: 'h3' }, 'style')),
          (0, r.kt)(
            'ul',
            null,
            (0, r.kt)('li', { parentName: 'ul' }, "Panel's container style."),
            (0, r.kt)('li', { parentName: 'ul' }, (0, r.kt)('inlineCode', { parentName: 'li' }, 'type: ViewStyle'))
          ),
          (0, r.kt)(
            'admonition',
            { title: 'note', type: 'info' },
            (0, r.kt)(
              'ul',
              { parentName: 'admonition' },
              (0, r.kt)('li', { parentName: 'ul' }, 'Certain style properties will be overridden.')
            )
          )
        );
      }
      s.isMDXComponent = !0;
    },
    6862: (e, t, n) => {
      n.d(t, { ZP: () => i });
      var a = n(7462),
        r = (n(7294), n(3905));
      const l = {
        toc: [
          { value: '<code>renderThumb</code>', id: 'renderthumb', level: 3 },
          { value: '<code>ThumbProps</code>', id: 'thumbprops', level: 4 },
        ],
      };
      function i(e) {
        let { components: t, ...n } = e;
        return (0, r.kt)(
          'wrapper',
          (0, a.Z)({}, l, n, { components: t, mdxType: 'MDXLayout' }),
          (0, r.kt)('h3', { id: 'renderthumb' }, (0, r.kt)('inlineCode', { parentName: 'h3' }, 'renderThumb')),
          (0, r.kt)(
            'ul',
            null,
            (0, r.kt)(
              'li',
              { parentName: 'ul' },
              'Function which receives ',
              (0, r.kt)('inlineCode', { parentName: 'li' }, 'ThumbProps'),
              ' and returns a custom thumb component.'
            ),
            (0, r.kt)('li', { parentName: 'ul' }, 'Overrides ', (0, r.kt)('inlineCode', { parentName: 'li' }, 'thumbShape'))
          ),
          (0, r.kt)('h4', { id: 'thumbprops' }, (0, r.kt)('inlineCode', { parentName: 'h4' }, 'ThumbProps')),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'center' }, 'Prop'),
                (0, r.kt)('th', { parentName: 'tr', align: 'center' }, 'Type'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Description')
              )
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'center' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'positionStyle')
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'center' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'StyleProp')
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'This style determines the position of the thumb and is a crucial element that should be included.'
                )
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)('td', { parentName: 'tr', align: 'center' }, (0, r.kt)('inlineCode', { parentName: 'td' }, 'width')),
                (0, r.kt)('td', { parentName: 'tr', align: 'center' }, (0, r.kt)('inlineCode', { parentName: 'td' }, 'number')),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'Extracted from the ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'thumbSize'),
                  " prop and it's important for thumb position calculation."
                )
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)('td', { parentName: 'tr', align: 'center' }, (0, r.kt)('inlineCode', { parentName: 'td' }, 'height')),
                (0, r.kt)('td', { parentName: 'tr', align: 'center' }, (0, r.kt)('inlineCode', { parentName: 'td' }, 'number')),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'Extracted from the ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'thumbSize'),
                  " prop and it's important for thumb position calculation."
                )
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'center' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'adaptiveColor')
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'center' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'SharedValue<string>')
                ),
                (0, r.kt)('td', { parentName: 'tr', align: 'left' }, 'White or black based on the contrast ratio.')
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'center' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'currentColor')
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'center' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'SharedValue<string>')
                ),
                (0, r.kt)('td', { parentName: 'tr', align: 'left' }, 'This shared value will update whenever the color changes.')
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'center' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'initialColor')
                ),
                (0, r.kt)('td', { parentName: 'tr', align: 'center' }, (0, r.kt)('inlineCode', { parentName: 'td' }, 'string')),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'The initial color value as a ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  '.'
                )
              )
            )
          ),
          (0, r.kt)('ul', null, (0, r.kt)('li', { parentName: 'ul' }, 'Example Usage:')),
          (0, r.kt)(
            'pre',
            null,
            (0, r.kt)(
              'code',
              { parentName: 'pre', className: 'language-tsx' },
              "import Animated, { useAnimatedStyle } from 'react-native-reanimated';\nimport type { RenderThumbProps } from 'reanimated-color-picker';\n\nfunction MyCustomThumb({\n  width,\n  height,\n  positionStyle,\n  adaptiveColor,\n  currentColor,\n  initialColor,\n}: RenderThumbProps) {\n\n  const animatedStyle = useAnimatedStyle(() => ({\n    borderColor: adaptiveColor.value,\n    backgroundColor: currentColor.value,\n  }));\n\n  return (\n    <Animated.View\n      style={[\n        { width, height, borderWidth: 1, borderRadius: width / 2, overflow: 'hidden' },\n        animatedStyle,\n        positionStyle,\n        ]}\n    >\n      <View style={{ backgroundColor: initialColor, width: '50%', height, alignSelf: 'flex-end' }} />\n    </Animated.View>\n  );\n}\n"
            )
          )
        );
      }
      i.isMDXComponent = !0;
    },
    575: (e, t, n) => {
      n.d(t, { Z: () => a });
      const a = n.p + 'assets/images/panel4-fdad34ed193f56d62d7c09ca309bedf6.png';
    },
  },
]);
