(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    '1jS1': function(n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/page',
        function() {
          return e('k9zA');
        }
      ]);
    },
    k9zA: function(n, t, e) {
      'use strict';
      e.r(t);
      var i = e('ODXe'),
        r = e('h4VS'),
        o = e('q1tI'),
        c = e.n(o),
        a = e('vOnD'),
        u = e('nOHt'),
        l = e('8Kt/'),
        d = e.n(l),
        h = e('jdwX'),
        f = e('c3X+'),
        g = e('ptOl'),
        p = e('hd/a'),
        s = e('ff+w'),
        b = e('d+M8'),
        m = e('xY5u'),
        x = e('o9Sz'),
        v = e('rQ2n'),
        w = e('lHlY'),
        j = e('pRT7'),
        k = c.a.createElement;
      function O() {
        var n = Object(r.a)(['\n  display: block;\n  width: 100%;\n']);
        return (
          (O = function() {
            return n;
          }),
          n
        );
      }
      function S() {
        var n = Object(r.a)([
          '\n  float: ',
          ';\n  background-color: ',
          ';\n  width: ',
          ';\n  min-height: 200px;\n\n  @media screen and (min-width: 991px) {\n    width: calc(',
          '% - 10px);\n    border-right: ',
          ';\n    border-left: ',
          ';\n    border-bottom: ',
          ';\n    height: 500px;\n  }\n\n  h2 {\n    font-size: 2em;\n    line-height: 3em;\n  }\n\n  p {\n    margin-bottom: 1em;\n  }\n\n  a {\n    color: #fff;\n    text-decoration: underline;\n  }\n'
        ]);
        return (
          (S = function() {
            return n;
          }),
          n
        );
      }
      function z() {
        var n = Object(r.a)([
          '\n  position: absolute;\n  z-index: 1;\n  text-align: center;\n  color: white;\n  line-height: 200px;\n  height: 200px;\n  text-align: center;\n  font-size: 50px;\n  display: block;\n  width: 100%;\n\n  @media screen and (min-width: 991px) {\n    height: 500px;\n    line-height: 500px;\n  }\n'
        ]);
        return (
          (z = function() {
            return n;
          }),
          n
        );
      }
      function y() {
        var n = Object(r.a)([
          '\n  @media screen and (min-width: 991px) {\n    font-size: 24px;\n    line-height: 30px;\n    width: 850px;\n    margin: 0 auto;\n    text-align: center;\n  }\n'
        ]);
        return (
          (y = function() {
            return n;
          }),
          n
        );
      }
      function H() {
        var n = Object(r.a)([
          '\n  font-size: 30px;\n  line-height: 36px;\n  margin-bottom: 20px;\n\n  @media screen and (min-width: 991px) {\n    width: 850px;\n    margin: 0 auto 20px;\n    text-align: center;\n  }\n'
        ]);
        return (
          (H = function() {
            return n;
          }),
          n
        );
      }
      function _() {
        var n = Object(r.a)([
          '\n  padding: 40px;\n  background-color: ',
          ';\n  color: white;\n  margin-bottom: 20px;\n'
        ]);
        return (
          (_ = function() {
            return n;
          }),
          n
        );
      }
      function T() {
        var n = Object(r.a)([
          '\n  position: absolute;\n  z-index: 1;\n  text-align: center;\n  font-size: 30px;\n  line-height: 36px;\n  color: #fff;\n  height: 200px;\n  width: 100%;\n  padding: 40px 0;\n  text-align: center;\n\n  @media screen and (min-width: 991px) {\n    height: 500px;\n    padding: 175px 0 0;\n  }\n\n  @media screen and (min-width: 1021px) {\n    font-size: 90px;\n    line-height: 1.5em;\n  }\n'
        ]);
        return (
          (T = function() {
            return n;
          }),
          n
        );
      }
      function M() {
        var n = Object(r.a)([
          '\n  position: relative;\n  z-index: 1;\n  padding: 35px;\n  line-height: 30px;\n  color: #fff;\n'
        ]);
        return (
          (M = function() {
            return n;
          }),
          n
        );
      }
      var R = a.a.div(M()),
        X = a.a.div(T()),
        D = a.a.div(_(), function(n) {
          return n.colour;
        }),
        E = a.a.h2(H()),
        L = a.a.p(y()),
        Y = a.a.h3(z()),
        P = a.a.div(
          S(),
          function(n) {
            return n.direction;
          },
          function(n) {
            return n.colour;
          },
          function(n) {
            return n.width ? '100%' : 0;
          },
          function(n) {
            return n.width;
          },
          function(n) {
            return 'left' === n.direction && n.width ? '10px solid #fff' : 0;
          },
          function(n) {
            return 'right' === n.direction && n.width ? '10px solid #fff' : 0;
          },
          function(n) {
            return n.width ? '20px solid white' : 0;
          }
        ),
        V = function(n) {
          var t = n.direction,
            e = n.deck,
            i = n.image,
            r = n.colour,
            o = n.width,
            a = t;
          return i
            ? k(
                P,
                {direction: a, colour: r, width: o},
                k(
                  x.a,
                  {color: r, mobileMarginBottom: '0'},
                  k(m.a, {url: Object(j.d)(i)}),
                  e && k(Y, null, e)
                )
              )
            : 'undefined' === typeof e
            ? k('div', null)
            : k(
                c.a.Fragment,
                null,
                e &&
                  k(
                    P,
                    {direction: a, colour: r, width: o},
                    k(R, {
                      dangerouslySetInnerHTML: {__html: h.markdown.toHTML(e)}
                    })
                  )
              );
        },
        A = a.a.li(O()),
        B = function(n) {
          var t = n.content,
            e = t.left,
            r = void 0 === e ? {} : e,
            o = t.right,
            c = void 0 === o ? {} : o,
            a = (function() {
              var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                e = 0,
                i = 0;
              return (
                n.deck && t.deck
                  ? ((e = 50), (i = 50))
                  : n.image && t.image
                  ? ((e = 50), (i = 50))
                  : n.image && t.deck
                  ? ((e = 60), (i = 40))
                  : n.deck && t.image
                  ? ((e = 40), (i = 60))
                  : n.deck || n.image || (!t.image && !t.deck)
                  ? t.deck ||
                    t.image ||
                    (!n.image && !n.deck) ||
                    ((e = 100), (i = 0))
                  : ((e = 0), (i = 100)),
                [e, i]
              );
            })(r, c),
            u = Object(i.a)(a, 2),
            l = u[0],
            d = u[1];
          return c.deck && c.image
            ? k(
                A,
                null,
                k(V, {
                  direction: 'right',
                  deck: c.deck,
                  image: c.image,
                  colour: Object(j.a)(c.colour),
                  width: d
                }),
                k(V, {
                  direction: 'left',
                  deck: r.deck,
                  image: r.image,
                  colour: Object(j.a)(r.colour),
                  width: l
                }),
                k(w.a, null)
              )
            : k(
                A,
                null,
                k(V, {
                  direction: 'left',
                  deck: r.deck,
                  image: r.image,
                  colour: Object(j.a)(r.colour),
                  width: l
                }),
                k(V, {
                  direction: 'right',
                  deck: c.deck,
                  image: c.image,
                  colour: Object(j.a)(c.colour),
                  width: d
                }),
                k(w.a, null)
              );
        },
        C = function(n) {
          var t = n.contents;
          return k(
            'ul',
            null,
            (void 0 === t ? [] : t).map(function(n) {
              var t = n.content;
              if (!t) return null;
              var e = (t.left || {}).deck || '',
                i = (t.right || {}).deck || '';
              return t && k(B, {content: t, key: e + i});
            })
          );
        };
      t.default = function() {
        var n = Object(o.useState)(!0),
          t = n[0],
          e = n[1],
          r = Object(o.useState)(!1),
          a = r[0],
          l = r[1],
          h = Object(o.useState)(''),
          w = h[0],
          O = h[1],
          S = Object(o.useState)(''),
          z = S[0],
          y = S[1],
          H = Object(o.useState)(''),
          _ = H[0],
          T = H[1],
          M = Object(o.useState)(''),
          R = M[0],
          Y = M[1],
          P = Object(o.useState)(''),
          V = P[0],
          A = P[1],
          B = Object(o.useState)(''),
          F = B[0],
          I = B[1],
          J = Object(o.useState)(''),
          N = J[0],
          q = J[1],
          G = Object(o.useState)(''),
          K = G[0],
          Q = G[1],
          U = Object(o.useState)(''),
          W = U[0],
          Z = U[1],
          $ = Object(o.useState)([]),
          nn = $[0],
          tn = $[1],
          en = Object(u.useRouter)().asPath;
        return (
          Object(o.useEffect)(function() {
            Object(j.c)(
              'data/pages'.concat(
                en
                  .split(' ')
                  .join('-')
                  .split('%20')
                  .join('-')
                  .toLowerCase(),
                '.json'
              )
            )
              .then(function(n) {
                O(n.title), y(n.header.image);
                var t = Object(j.b)(Object(j.g)(n)),
                  r = Object(i.a)(t, 3),
                  o = r[0],
                  c = r[1],
                  a = r[2];
                T(o),
                  Y(c),
                  A(a),
                  q(n.subtitle.subtitle),
                  I(
                    n.subtitle &&
                      n.subtitle.image &&
                      g.b + n.subtitle.image.slice(1)
                  ),
                  Q(n.deck && n.deck.title),
                  Z(n.deck && n.deck.paragraph),
                  tn(n.contents),
                  e(!1);
              })
              .catch(function(n) {
                console.log(n), l(!0), e(!1);
              });
          }, []),
          t
            ? k('div', null)
            : a
            ? k(c.a.Fragment, null, f.Router.replaceRoute('/404'))
            : k(
                'div',
                null,
                k(
                  d.a,
                  null,
                  k('title', {key: 'title'}, w, ' - Gateway Church, York')
                ),
                k(p.a, {
                  colour: _,
                  colourHex: R,
                  colourHexLight: V,
                  title: w,
                  image: z,
                  Header: b.a
                }),
                k(
                  v.a,
                  null,
                  F &&
                    k(
                      x.a,
                      null,
                      k(m.a, {url: F}),
                      k(v.a, null, k(X, {color: R}, N))
                    )
                ),
                k(
                  D,
                  {colour: R},
                  k(v.a, null, K && k(E, null, K), W && k(L, null, W))
                ),
                k(v.a, null, k(C, {contents: nn})),
                k(s.a, null)
              )
        );
      };
    },
    o9Sz: function(n, t, e) {
      'use strict';
      var i = e('h4VS');
      function r() {
        var n = Object(i.a)([
          '\n  position: relative;\n  height: ',
          ';\n  background: ',
          ';\n  overflow: hidden;\n  margin-bottom: ',
          ';\n\n  @media screen and (min-width: 991px) {\n    height: 500px;\n  }\n'
        ]);
        return (
          (r = function() {
            return n;
          }),
          n
        );
      }
      var o = e('vOnD').a.div(
        r(),
        function(n) {
          return n.mobileHeight || '200px';
        },
        function(n) {
          return n.color;
        },
        function(n) {
          return n.mobileMarginBottom || '20px';
        }
      );
      t.a = o;
    },
    xY5u: function(n, t, e) {
      'use strict';
      var i = e('h4VS'),
        r = e('vOnD'),
        o = e('pRT7');
      function c() {
        var n = Object(i.a)([
          "\n  background-image: url('",
          "');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transition: opacity 0.3s;\n"
        ]);
        return (
          (c = function() {
            return n;
          }),
          n
        );
      }
      var a = r.a.div(c(), function(n) {
        return Object(o.h)(n.url);
      });
      t.a = a;
    }
  },
  [['1jS1', 0, 1, 6, 4, 2, 3, 5, 9]]
]);
