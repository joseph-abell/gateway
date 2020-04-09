(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    '9uM0': function(n, t, e) {
      'use strict';
      var r = e('h4VS');
      function a() {
        var n = Object(r.a)([
          '\n  padding: 100px 20px;\n  margin-bottom: 20px;\n  text-align: center;\n  font-size: 30px;\n  line-height: 36px;\n  color: #fff;\n  background-color: ',
          ';\n'
        ]);
        return (
          (a = function() {
            return n;
          }),
          n
        );
      }
      var i = e('vOnD').a.div(a(), function(n) {
        return n.color;
      });
      t.a = i;
    },
    o9Sz: function(n, t, e) {
      'use strict';
      var r = e('h4VS');
      function a() {
        var n = Object(r.a)([
          '\n  position: relative;\n  height: ',
          ';\n  background: ',
          ';\n  overflow: hidden;\n  margin-bottom: ',
          ';\n\n  @media screen and (min-width: 991px) {\n    height: 500px;\n  }\n'
        ]);
        return (
          (a = function() {
            return n;
          }),
          n
        );
      }
      var i = e('vOnD').a.div(
        a(),
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
      t.a = i;
    },
    rON6: function(n, t, e) {
      'use strict';
      e.r(t);
      var r = e('ODXe'),
        a = e('h4VS'),
        i = e('q1tI'),
        o = e.n(i),
        u = e('vOnD'),
        c = e('wd/R'),
        l = e.n(c),
        f = e('8Kt/'),
        d = e.n(f),
        p = e('YFqc'),
        s = e.n(p),
        b = e('hd/a'),
        m = e('ff+w'),
        g = e('rQ2n'),
        v = e('d+M8'),
        h = e('xY5u'),
        x = e('o9Sz'),
        O = e('9uM0'),
        j = e('lHlY'),
        k = e('+oZ+'),
        w = e('pRT7'),
        S = o.a.createElement;
      function H() {
        var n = Object(a.a)(['\n  margin-bottom: 20px;\n']);
        return (
          (H = function() {
            return n;
          }),
          n
        );
      }
      function y() {
        var n = Object(a.a)([
          '\n  margin: 20px 0;\n  font-size: 30px;\n  line-height: 36px;\n'
        ]);
        return (
          (y = function() {
            return n;
          }),
          n
        );
      }
      function M() {
        var n = Object(a.a)([
          '\n  @media screen and (min-width: 991px) {\n    margin-top: 50px;\n    margin-bottom: 20px;\n  }\n'
        ]);
        return (
          (M = function() {
            return n;
          }),
          n
        );
      }
      function T() {
        var n = Object(a.a)([
          '\n  margin-top: -35px;\n  margin-bottom: -35px;\n  margin-right: -35px;\n'
        ]);
        return (
          (T = function() {
            return n;
          }),
          n
        );
      }
      function Y() {
        var n = Object(a.a)(['\n  float: right;\n  width: 40%;\n']);
        return (
          (Y = function() {
            return n;
          }),
          n
        );
      }
      function z() {
        var n = Object(a.a)([
          '\n  @media screen and (min-width: 991px) {\n    float: left;\n    width: 60%;\n    font-size: 24px;\n    line-height: 30px;\n  }\n'
        ]);
        return (
          (z = function() {
            return n;
          }),
          n
        );
      }
      function D() {
        var n = Object(a.a)([
          '\n  padding: 100px 20px;\n  text-align: center;\n  font-size: 24px;\n  line-height: 1.3em;\n  color: #fff;\n\n  @media screen and (min-width: 991px) {\n    font-size: 30px;\n    line-height: 36px;\n    padding: 100px 20%;\n  }\n'
        ]);
        return (
          (D = function() {
            return n;
          }),
          n
        );
      }
      function _() {
        var n = Object(a.a)([
          '\n  padding: 35px;\n  background: ',
          ';\n  color: #fff;\n  line-height: 30px;\n  margin: 20px 0 20px;\n  display: block;\n'
        ]);
        return (
          (_ = function() {
            return n;
          }),
          n
        );
      }
      function C() {
        var n = Object(a.a)([
          '\n  background: ',
          ';\n  padding: 10px 20px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: #fff;\n'
        ]);
        return (
          (C = function() {
            return n;
          }),
          n
        );
      }
      function E() {
        var n = Object(a.a)([
          '\n  display: inline-block;\n  margin-right: 20px;\n  color: #fff;\n  border-bottom: 2px solid #fff;\n'
        ]);
        return (
          (E = function() {
            return n;
          }),
          n
        );
      }
      function I() {
        var n = Object(a.a)([
          '\n  display: inline-block;\n  margin-right: 20px;\n'
        ]);
        return (
          (I = function() {
            return n;
          }),
          n
        );
      }
      function N() {
        var n = Object(a.a)([
          '\n  padding: 40px;\n  background-color: ',
          ';\n  color: white;\n  margin-bottom: 20px;\n'
        ]);
        return (
          (N = function() {
            return n;
          }),
          n
        );
      }
      var P = u.a.div(N(), function(n) {
          return n.colour;
        }),
        B = u.a.div(I()),
        F = u.a.a(E()),
        Q = function(n) {
          for (
            var t = n.maxCount,
              e = n.currentPage,
              r = void 0 === e ? 1 : e,
              a = [],
              i = 1;
            i < t + 1;
            i++
          )
            a.push(i);
          return a.map(function(n) {
            return n === r
              ? S(B, {key: n}, n)
              : S(
                  s.a,
                  1 === n
                    ? {href: 'events', key: n, passHref: !0}
                    : {href: 'events?page='.concat(n), key: n, passHref: !0},
                  S(F, null, n)
                );
          });
        },
        R = u.a.div(C(), function(n) {
          return n.color;
        }),
        V = u.a.a(_(), function(n) {
          return n.color;
        }),
        X = u.a.p(D()),
        q = u.a.div(z()),
        A = u.a.div(Y()),
        J = Object(u.a)(x.a)(T()),
        G = u.a.div(M()),
        K = u.a.h1(y()),
        L = u.a.p(H()),
        U = function(n) {
          var t = n.events,
            e = n.color;
          return t.map(function(n) {
            var t = l()(n.dateTime).format('dddd, DD MMM YYYY'),
              r = l()(n.dateTime).format('HH:mm'),
              a = Object(w.d)(n.image),
              i = n.listImage && Object(w.d)(n.listImage),
              o = n.title
                .split('-')
                .map(function(n) {
                  return n[0].toUpperCase() + n.slice(1);
                })
                .join(' '),
              u = n.title.split('?').join('');
            return S(
              s.a,
              {key: n.title + t + r, href: 'events/'.concat(u)},
              S(
                V,
                {color: e},
                S(
                  q,
                  null,
                  S('h2', null, o),
                  S('div', null, t),
                  S('div', null, r),
                  S(G, null, n.deck),
                  S('div', null, 'Read More +')
                ),
                S(
                  k.HideAt,
                  {breakpoint: 'mediumAndBelow'},
                  S(A, null, S(J, null, S(h.a, {url: i || a})))
                ),
                S(j.a, null)
              )
            );
          });
        };
      t.default = function(n) {
        var t = n.location,
          e = void 0 === t ? {} : t,
          a = Object(i.useState)(''),
          u = a[0],
          c = a[1],
          f = Object(i.useState)(''),
          p = f[0],
          s = f[1],
          j = Object(i.useState)(''),
          k = j[0],
          H = j[1],
          y = Object(i.useState)(''),
          M = y[0],
          T = y[1],
          Y = Object(i.useState)(''),
          z = Y[0],
          D = Y[1],
          _ = Object(i.useState)(''),
          C = _[0],
          E = _[1],
          I = Object(i.useState)(''),
          N = I[0],
          B = I[1],
          F = Object(i.useState)(''),
          V = F[0],
          q = F[1],
          A = Object(i.useState)([]),
          J = A[0],
          G = A[1],
          Z = Object(i.useState)(0),
          W = Z[0],
          $ = Z[1],
          nn = Object(i.useState)(0),
          tn = nn[0],
          en = nn[1],
          rn = Object(i.useState)(1),
          an = rn[0],
          on = rn[1],
          un = Object(i.useState)(''),
          cn = un[0],
          ln = un[1],
          fn = Object(i.useState)(''),
          dn = fn[0],
          pn = fn[1];
        return (
          Object(i.useEffect)(function() {
            var n = e.search;
            n || (n = '?page=1'),
              on(parseInt(n.split('page=')[1], 10)),
              Promise.all([
                Object(w.c)('data/events/index.json'),
                Object(w.c)('data/pages/events.json')
              ]).then(function(n) {
                var t = Object(r.a)(n, 2),
                  e = t[0],
                  a = t[1],
                  i = Object(w.b)(Object(w.g)(e)),
                  o = Object(r.a)(i, 3),
                  u = o[0],
                  f = o[1],
                  d = o[2];
                H(u),
                  T(f),
                  D(d),
                  E(Object(w.d)(a.header.image)),
                  s(a.title),
                  B(Object(w.d)(a.subtitle.image)),
                  q(a.subtitle.subtitle),
                  ln(a.deck.title),
                  pn(a.deck.paragraph);
                var p = Object.values(e)
                    .map(function(n) {
                      return n.data;
                    })
                    .filter(function(n) {
                      return (
                        n &&
                        n.dateTime &&
                        !n.draft &&
                        l()().isBefore(n.dateTime)
                      );
                    })
                    .sort(function(n, t) {
                      return l()(n.dateTime).isBefore(t.dateTime) ? -1 : 1;
                    }),
                  b = p.length;
                $(b),
                  G(p.slice(10 * an - 10, 10 * an)),
                  en(Math.ceil(b / 10)),
                  c(!1);
              });
          }, []),
          u
            ? S('div', null)
            : S(
                o.a.Fragment,
                null,
                S(
                  d.a,
                  null,
                  S('title', {key: 'title'}, 'Events - Gateway Church, York')
                ),
                S(b.a, {
                  colour: k,
                  colourHex: M,
                  colourHexLight: z,
                  title: p,
                  image: C,
                  Header: v.a
                }),
                0 === W &&
                  S(
                    g.a,
                    null,
                    S(K, null, 'No events in the Calendar...'),
                    S(
                      L,
                      null,
                      'It looks like we forgot to keep our events updated, sorry about that!'
                    )
                  ),
                W > 0 &&
                  S(
                    o.a.Fragment,
                    null,
                    S(
                      g.a,
                      null,
                      N &&
                        S(
                          x.a,
                          null,
                          S(h.a, {url: N}),
                          S(g.a, null, S(O.a, {color: M}, V))
                        )
                    ),
                    S(
                      P,
                      {colour: M},
                      S(g.a, null, cn && S(H2, null, cn), dn && S(X, null, dn))
                    ),
                    tn > 1 &&
                      S(R, {color: M}, S(Q, {maxCount: tn, currentPage: an})),
                    S(g.a, null, S(U, {events: J, color: z}))
                  ),
                S(m.a, null)
              )
        );
      };
    },
    tQ09: function(n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/events',
        function() {
          return e('rON6');
        }
      ]);
    }
  },
  [['tQ09', 0, 1, 6, 5, 2, 3, 4, 9]]
]);
