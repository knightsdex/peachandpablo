(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  33525,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "warnOnce", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
    let o = (e) => {};
  },
  18581,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return r;
        },
      });
    let o = e.r(71645);
    function r(e, t) {
      let n = (0, o.useRef)(null),
        r = (0, o.useRef)(null);
      return (0, o.useCallback)(
        (o) => {
          if (null === o) {
            let e = n.current;
            e && ((n.current = null), e());
            let t = r.current;
            t && ((r.current = null), t());
          } else e && (n.current = a(e, o)), t && (r.current = a(t, o));
        },
        [e, t]
      );
    }
    function a(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let n = e(t);
        return "function" == typeof n ? n : () => e(null);
      }
    }
    ("function" == typeof n.default ||
      ("object" == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, "__esModule", { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  3484,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(75254);
    let o = (0, n.default)("circle-check", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
      ]),
      r = (0, n.default)("info", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M12 16v-4", key: "1dtifu" }],
        ["path", { d: "M12 8h.01", key: "e9boi3" }],
      ]),
      a = (0, n.default)("loader-circle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]),
      i = (0, n.default)("octagon-x", [
        ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
        [
          "path",
          {
            d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
            key: "2d38gg",
          },
        ],
        ["path", { d: "m9 9 6 6", key: "z0biqf" }],
      ]),
      s = (0, n.default)("triangle-alert", [
        [
          "path",
          {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq",
          },
        ],
        ["path", { d: "M12 9v4", key: "juzpu7" }],
        ["path", { d: "M12 17h.01", key: "p32p05" }],
      ]);
    var c = e.i(46696);
    let l = ({ ...e }) =>
      (0, t.jsx)(c.Toaster, {
        theme: "light",
        richColors: !1,
        className: "toaster group",
        icons: {
          success: (0, t.jsx)(o, { className: "size-4 text-black" }),
          info: (0, t.jsx)(r, { className: "size-4 text-black" }),
          warning: (0, t.jsx)(s, { className: "size-4 text-black" }),
          error: (0, t.jsx)(i, { className: "size-4 text-black" }),
          loading: (0, t.jsx)(a, {
            className: "size-4 animate-spin text-black",
          }),
        },
        style: {
          "--normal-bg": "white",
          "--normal-text": "#000",
          "--success-bg": "white",
          "--success-text": "#000",
          "--error-bg": "white",
          "--error-text": "#000",
          "--warning-bg": "white",
          "--warning-text": "#000",
          "--info-bg": "white",
          "--info-text": "#000",
          "--normal-border": "rgba(0,0,0,0.1)",
          "--border-radius": "var(--radius)",
        },
        toastOptions: {
          classNames: {
            toast:
              "bg-white text-black border border-black/10 shadow-lg rounded-lg",
            success:
              "bg-white text-black border border-black/10 shadow-lg rounded-lg",
            error:
              "bg-white text-black border border-black/10 shadow-lg rounded-lg",
            warning:
              "bg-white text-black border border-black/10 shadow-lg rounded-lg",
            info: "bg-white text-black border border-black/10 shadow-lg rounded-lg",
            description: "text-black/80",
            title: "text-black font-semibold",
            actionButton:
              "bg-black text-white hover:bg-black/90 focus-visible:ring-black/30",
            cancelButton:
              "bg-white text-black border border-black/10 hover:bg-black/5",
            closeButton: "text-black/60 hover:text-black",
            icon: "text-black",
          },
        },
        ...e,
      });
    e.s(["Toaster", () => l], 3484);
  },
  63780,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(71645),
      o = e.i(47163),
      r = e.i(57688);
    let a = [
      { name: "Exchanges", href: "#contract" },
      { name: "About", href: "#creator-fund" },
      { name: "Tokenomics", href: "#tokenomics" },
      { name: "Telegram", href: "https://t.me/peachpabloETH" },
      { name: "X", href: "https://x.com/peachpabloETH" },
      { name: "FAQs", href: "#faq" },
    ];
    function i() {
      let [e, i] = (0, n.useState)(!1),
        [s, c] = (0, n.useState)("#contract");
      return (
        (0, n.useEffect)(() => {
          let e = a
              .map((e) => (e.href.startsWith("#") ? e.href.slice(1) : ""))
              .filter(Boolean),
            t = [];
          return (
            e.forEach((e) => {
              let n = document.getElementById(e);
              if (!n) return;
              let o = new IntersectionObserver(
                (t) => {
                  t.forEach((t) => {
                    t.isIntersecting && c(`#${e}`);
                  });
                },
                {
                  rootMargin: "-40% 0px -55% 0px",
                  threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
                }
              );
              o.observe(n), t.push(o);
            }),
            () => {
              t.forEach((e) => e.disconnect());
            }
          );
        }, []),
        (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className:
                "pointer-events-none fixed top-4 left-0 right-0 z-50 hidden md:flex justify-center",
              children: (0, t.jsx)("nav", {
                className: (0, o.cn)(
                  "pointer-events-auto inline-flex items-center gap-8 px-8 py-3 rounded-[var(--radius-full)]",
                  "backdrop-blur-xl bg-primary/70 border border-white/30 shadow-lg"
                ),
                "aria-label": "Primary",
                children: a.map((e) =>
                  (0, t.jsx)(
                    "a",
                    {
                      href: e.href,
                      className: (0, o.cn)(
                        "text-white font-semibold transition-colors",
                        "md:pb-1 md:border-b-2 md:border-transparent md:hover:border-white",
                        s === e.href && "md:border-white"
                      ),
                      children: e.name,
                    },
                    e.name
                  )
                ),
              }),
            }),
            (0, t.jsxs)("div", {
              className: "fixed top-3 left-0 right-0 z-50 md:hidden",
              children: [
                (0, t.jsxs)("div", {
                  className: "px-4 flex justify-between items-center",
                  children: [
                    (0, t.jsx)("div", {
                      className: "flex items-center",
                      children: (0, t.jsx)(r.default, {
                        src: "/icons/pplogo.png",
                        alt: "Peach & Pablo",
                        width: 64,
                        height: 64,
                        className: "rounded-full w-16 h-16",
                        priority: !0,
                      }),
                    }),
                    (0, t.jsxs)("button", {
                      "aria-label": "Toggle menu",
                      onClick: () => i((e) => !e),
                      className: (0, o.cn)(
                        "p-3 rounded-[var(--radius-full)]",
                        "backdrop-blur-xl bg-primary/70 border border-white/30 text-white",
                        "flex justify-center items-center w-12 h-12 relative"
                      ),
                      children: [
                        (0, t.jsx)("span", {
                          className: (0, o.cn)(
                            "absolute block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out",
                            e ? "rotate-45" : "-translate-y-1.5"
                          ),
                        }),
                        (0, t.jsx)("span", {
                          className: (0, o.cn)(
                            "absolute block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out",
                            e ? "-rotate-45" : "translate-y-1.5"
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: (0, o.cn)(
                    "mx-4 mt-3 rounded-[var(--radius-xl)] backdrop-blur-xl bg-primary/70 border border-white/30 text-white shadow-lg overflow-hidden",
                    "transition-all duration-200 ease-out",
                    e
                      ? "opacity-100 translate-y-0 max-h-[70vh] pointer-events-auto"
                      : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
                  ),
                  "aria-hidden": !e,
                  children: (0, t.jsx)("nav", {
                    className: "flex flex-col p-2",
                    "aria-label": "Primary",
                    children: a.map((e) =>
                      (0, t.jsx)(
                        "a",
                        {
                          href: e.href,
                          onClick: () => i(!1),
                          className:
                            "px-4 py-3 rounded-[var(--radius-lg)] hover:bg-white/10",
                          children: e.name,
                        },
                        e.name
                      )
                    ),
                  }),
                }),
              ],
            }),
          ],
        })
      );
    }
    e.s(["Navbar", () => i]);
  },
  18191,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(71645);
    let o = (0, e.i(75254).default)("arrow-up", [
      ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
      ["path", { d: "M12 19V5", key: "x0mq9r" }],
    ]);
    var r = e.i(47163);
    function a() {
      let [e, a] = (0, n.useState)(!1);
      return (
        (0, n.useEffect)(() => {
          let e = () => {
            a(window.scrollY > 600);
          };
          return (
            e(),
            window.addEventListener("scroll", e, { passive: !0 }),
            () => window.removeEventListener("scroll", e)
          );
        }, []),
        (0, t.jsx)("button", {
          "aria-label": "Back to top",
          onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
          className: (0, r.cn)(
            "fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50",
            "rounded-full p-3 md:p-4 border border-white/30 backdrop-blur-xl",
            "bg-primary/80 text-white shadow-lg transition-all duration-300",
            "hover:bg-primary/90 hover:scale-110",
            e
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-2 pointer-events-none"
          ),
          children: (0, t.jsx)(o, { className: "w-5 h-5 md:w-6 md:h-6" }),
        })
      );
    }
    e.s(["BackToTop", () => a], 18191);
  },
  19447,
  (e, t, n) => {
    var o = function () {
      function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
          var n = arguments[e];
          for (var o in n) t[o] = n[o];
        }
        return t;
      }
      function t(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }
      return (function n(o) {
        function r() {}
        function a(t, n, a) {
          if ("undefined" != typeof document) {
            "number" == typeof (a = e({ path: "/" }, r.defaults, a)).expires &&
              (a.expires = new Date(new Date() * 1 + 864e5 * a.expires)),
              (a.expires = a.expires ? a.expires.toUTCString() : "");
            try {
              var i = JSON.stringify(n);
              /^[\{\[]/.test(i) && (n = i);
            } catch (e) {}
            (n = o.write
              ? o.write(n, t)
              : encodeURIComponent(String(n)).replace(
                  /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                  decodeURIComponent
                )),
              (t = encodeURIComponent(String(t))
                .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                .replace(/[\(\)]/g, escape));
            var s = "";
            for (var c in a)
              a[c] &&
                ((s += "; " + c),
                !0 !== a[c] && (s += "=" + a[c].split(";")[0]));
            return (document.cookie = t + "=" + n + s);
          }
        }
        function i(e, n) {
          if ("undefined" != typeof document) {
            for (
              var r = {},
                a = document.cookie ? document.cookie.split("; ") : [],
                i = 0;
              i < a.length;
              i++
            ) {
              var s = a[i].split("="),
                c = s.slice(1).join("=");
              n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
              try {
                var l = t(s[0]);
                if (((c = (o.read || o)(c, l) || t(c)), n))
                  try {
                    c = JSON.parse(c);
                  } catch (e) {}
                if (((r[l] = c), e === l)) break;
              } catch (e) {}
            }
            return e ? r[e] : r;
          }
        }
        return (
          (r.set = a),
          (r.get = function (e) {
            return i(e, !1);
          }),
          (r.getJSON = function (e) {
            return i(e, !0);
          }),
          (r.remove = function (t, n) {
            a(t, "", e(n, { expires: -1 }));
          }),
          (r.defaults = {}),
          (r.withConverter = n),
          r
        );
      })(function () {});
    };
    if ("function" == typeof define && define.amd) {
      let r;
      void 0 !== (r = o(e.r, n, t)) && e.v(r);
    }
    t.exports = o();
  },
  81888,
  (e) => {
    "use strict";
    var t,
      n,
      o = e.i(43476),
      r = e.i(19447),
      a = e.i(71645),
      i = function (e) {
        var t = e.condition,
          n = e.wrapper,
          o = e.children;
        return t ? n(o) : o;
      };
    function s() {
      return (s = Object.assign.bind()).apply(this, arguments);
    }
    function c(e, t) {
      return (c = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
    }
    var l = "bottom";
    ((t = n || (n = {})).STRICT = "strict"), (t.LAX = "lax"), (t.NONE = "none");
    var d = "byCookieValue",
      u = "CookieConsent",
      p = ["children"],
      b = {
        disableStyles: !1,
        hideOnAccept: !0,
        hideOnDecline: !0,
        location: l,
        visible: d,
        onAccept: function (e) {},
        onDecline: function () {},
        cookieName: u,
        cookieValue: "true",
        declineCookieValue: "false",
        setDeclineCookie: !0,
        buttonText: "I understand",
        declineButtonText: "I decline",
        debug: !1,
        expires: 365,
        containerClasses: "CookieConsent",
        contentClasses: "",
        buttonClasses: "",
        buttonWrapperClasses: "",
        declineButtonClasses: "",
        buttonId: "rcc-confirm-button",
        declineButtonId: "rcc-decline-button",
        extraCookieOptions: {},
        disableButtonStyles: !1,
        enableDeclineButton: !1,
        flipButtons: !1,
        sameSite: n.LAX,
        ButtonComponent: function (e) {
          var t = e.children,
            n = (function (e, t) {
              if (null == e) return {};
              var n,
                o,
                r = {},
                a = Object.keys(e);
              for (o = 0; o < a.length; o++)
                (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
              return r;
            })(e, p);
          return a.default.createElement("button", Object.assign({}, n), t);
        },
        overlay: !1,
        overlayClasses: "",
        onOverlayClick: function () {},
        acceptOnOverlayClick: !1,
        ariaAcceptLabel: "Accept cookies",
        ariaDeclineLabel: "Decline cookies",
        acceptOnScroll: !1,
        acceptOnScrollPercentage: 25,
        customContentAttributes: {},
        customContainerAttributes: {},
        customButtonProps: {},
        customDeclineButtonProps: {},
        customButtonWrapperAttributes: {},
        style: {},
        buttonStyle: {},
        declineButtonStyle: {},
        contentStyle: {},
        overlayStyle: {},
      },
      f = {
        visible: !1,
        style: {
          alignItems: "baseline",
          background: "#353535",
          color: "white",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          left: "0",
          position: "fixed",
          width: "100%",
          zIndex: "999",
        },
        buttonStyle: {
          background: "#ffd42d",
          border: "0",
          borderRadius: "0px",
          boxShadow: "none",
          color: "black",
          cursor: "pointer",
          flex: "0 0 auto",
          padding: "5px 10px",
          margin: "15px",
        },
        declineButtonStyle: {
          background: "#c12a2a",
          border: "0",
          borderRadius: "0px",
          boxShadow: "none",
          color: "#e5e5e5",
          cursor: "pointer",
          flex: "0 0 auto",
          padding: "5px 10px",
          margin: "15px",
        },
        contentStyle: { flex: "1 0 300px", margin: "15px" },
        overlayStyle: {
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: "999",
          backgroundColor: "rgba(0,0,0,0.3)",
        },
      },
      h = function (e) {
        void 0 === e && (e = u);
        var t = r.default.get(e);
        return void 0 === t ? r.default.get(m(e)) : t;
      },
      m = function (e) {
        return e + "-legacy";
      },
      g = (function (e) {
        function t() {
          var t;
          return (
            (t = e.apply(this, arguments) || this),
            (t.state = f),
            (t.handleScroll = function () {
              var e = s({}, b, t.props).acceptOnScrollPercentage,
                n = document.documentElement,
                o = document.body,
                r = "scrollTop",
                a = "scrollHeight";
              ((n[r] || o[r]) / ((n[a] || o[a]) - n.clientHeight)) * 100 > e &&
                t.accept(!0);
            }),
            (t.removeScrollListener = function () {
              t.props.acceptOnScroll &&
                window.removeEventListener("scroll", t.handleScroll);
            }),
            t
          );
        }
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          c(t, e);
        var o = t.prototype;
        return (
          (o.componentDidMount = function () {
            var e = this.props.debug;
            (void 0 === this.getCookieValue() || e) &&
              (this.setState({ visible: !0 }),
              this.props.acceptOnScroll &&
                window.addEventListener("scroll", this.handleScroll, {
                  passive: !0,
                }));
          }),
          (o.componentWillUnmount = function () {
            this.removeScrollListener();
          }),
          (o.accept = function (e) {
            void 0 === e && (e = !1);
            var t,
              n = s({}, b, this.props),
              o = n.cookieName,
              r = n.cookieValue,
              a = n.hideOnAccept,
              i = n.onAccept;
            this.setCookie(o, r),
              i(null != (t = e) && t),
              a &&
                (this.setState({ visible: !1 }), this.removeScrollListener());
          }),
          (o.overlayClick = function () {
            var e = s({}, b, this.props),
              t = e.acceptOnOverlayClick,
              n = e.onOverlayClick;
            t && this.accept(), n();
          }),
          (o.decline = function () {
            var e = s({}, b, this.props),
              t = e.cookieName,
              n = e.declineCookieValue,
              o = e.hideOnDecline,
              r = e.onDecline;
            e.setDeclineCookie && this.setCookie(t, n),
              r(),
              o && this.setState({ visible: !1 });
          }),
          (o.setCookie = function (e, t) {
            var o = this.props,
              a = o.extraCookieOptions,
              i = o.expires,
              c = o.sameSite,
              l = this.props.cookieSecurity;
            void 0 === l &&
              (l = !window.location || "https:" === window.location.protocol);
            var d = s({ expires: i }, a, { sameSite: c, secure: l });
            c === n.NONE && r.default.set(m(e), t, d), r.default.set(e, t, d);
          }),
          (o.getCookieValue = function () {
            return h(this.props.cookieName);
          }),
          (o.render = function () {
            var e = this;
            switch (this.props.visible) {
              case "hidden":
                return null;
              case d:
                if (!this.state.visible) return null;
            }
            var t = this.props,
              n = t.location,
              o = t.style,
              r = t.buttonStyle,
              c = t.declineButtonStyle,
              u = t.contentStyle,
              p = t.disableStyles,
              b = t.buttonText,
              f = t.declineButtonText,
              h = t.containerClasses,
              m = t.contentClasses,
              g = t.buttonClasses,
              y = t.buttonWrapperClasses,
              v = t.declineButtonClasses,
              x = t.buttonId,
              k = t.declineButtonId,
              w = t.disableButtonStyles,
              C = t.enableDeclineButton,
              j = t.flipButtons,
              S = t.ButtonComponent,
              O = t.overlay,
              B = t.overlayClasses,
              N = t.overlayStyle,
              A = t.ariaAcceptLabel,
              E = t.ariaDeclineLabel,
              T = t.customContainerAttributes,
              D = t.customContentAttributes,
              z = t.customButtonProps,
              P = t.customDeclineButtonProps,
              L = t.customButtonWrapperAttributes,
              I = {},
              M = {},
              R = {},
              W = {},
              _ = {};
            switch (
              (p
                ? ((I = Object.assign({}, o)),
                  (M = Object.assign({}, r)),
                  (R = Object.assign({}, c)),
                  (W = Object.assign({}, u)),
                  (_ = Object.assign({}, N)))
                : ((I = Object.assign({}, s({}, this.state.style, o))),
                  (W = Object.assign({}, s({}, this.state.contentStyle, u))),
                  (_ = Object.assign({}, s({}, this.state.overlayStyle, N))),
                  w
                    ? ((M = Object.assign({}, r)), (R = Object.assign({}, c)))
                    : ((M = Object.assign(
                        {},
                        s({}, this.state.buttonStyle, r)
                      )),
                      (R = Object.assign(
                        {},
                        s({}, this.state.declineButtonStyle, c)
                      )))),
              n)
            ) {
              case "top":
                I.top = "0";
                break;
              case l:
                I.bottom = "0";
            }
            var F = [];
            return (
              C &&
                F.push(
                  a.default.createElement(
                    S,
                    Object.assign(
                      {
                        key: "declineButton",
                        style: R,
                        className: v,
                        id: k,
                        "aria-label": E,
                        onClick: function () {
                          e.decline();
                        },
                      },
                      P
                    ),
                    f
                  )
                ),
              F.push(
                a.default.createElement(
                  S,
                  Object.assign(
                    {
                      key: "acceptButton",
                      style: M,
                      className: g,
                      id: x,
                      "aria-label": A,
                      onClick: function () {
                        e.accept();
                      },
                    },
                    z
                  ),
                  b
                )
              ),
              j && F.reverse(),
              a.default.createElement(
                i,
                {
                  condition: O,
                  wrapper: function (t) {
                    return a.default.createElement(
                      "div",
                      {
                        style: _,
                        className: B,
                        onClick: function () {
                          e.overlayClick();
                        },
                      },
                      t
                    );
                  },
                },
                a.default.createElement(
                  "div",
                  Object.assign({ className: "" + h, style: I }, T),
                  a.default.createElement(
                    "div",
                    Object.assign({ style: W, className: m }, D),
                    this.props.children
                  ),
                  a.default.createElement(
                    "div",
                    Object.assign({ className: "" + y }, L),
                    F.map(function (e) {
                      return e;
                    })
                  )
                )
              )
            );
          }),
          t
        );
      })(a.Component);
    function y() {
      return (0, o.jsxs)(g, {
        location: "bottom",
        buttonText: "Accept",
        declineButtonText: "Decline",
        cookieName: "peach-pablo-cookie-consent",
        style: {
          background: "#ffffff",
          borderTop: "2px solid var(--peach-orange)",
          padding: "1rem 1.5rem",
          fontSize: "14px",
          fontFamily: "var(--font-fredoka), sans-serif",
        },
        buttonStyle: {
          background: "var(--peach-orange)",
          color: "white",
          fontSize: "14px",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.5rem",
          fontWeight: "600",
          border: "none",
          cursor: "pointer",
          fontFamily: "var(--font-fredoka), sans-serif",
        },
        declineButtonStyle: {
          background: "transparent",
          color: "var(--peach-orange)",
          fontSize: "14px",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.5rem",
          fontWeight: "600",
          border: "2px solid var(--peach-orange)",
          cursor: "pointer",
          fontFamily: "var(--font-fredoka), sans-serif",
          marginRight: "1rem",
        },
        expires: 365,
        enableDeclineButton: !0,
        onAccept: () => {
          let e, t, n, o;
          (window.dataLayer &&
            document.querySelector(
              'script[src*="googletagmanager.com/gtm.js"]'
            )) ||
            ((e = "GTM-TFLSC5GF"),
            (window.dataLayer = window.dataLayer || []),
            (window.gtag = function (...e) {
              window.dataLayer.push(e);
            }),
            window.gtag("js", new Date()),
            window.gtag("config", e),
            ((t = document.createElement("script")).async = !0),
            (t.src = `https://www.googletagmanager.com/gtm.js?id=${e}`),
            document.head.appendChild(t),
            (n = document.createElement("noscript")),
            ((o =
              document.createElement(
                "iframe"
              )).src = `https://www.googletagmanager.com/ns.html?id=${e}`),
            (o.height = "0"),
            (o.width = "0"),
            (o.style.display = "none"),
            (o.style.visibility = "hidden"),
            n.appendChild(o),
            document.body.insertBefore(n, document.body.firstChild));
        },
        children: [
          (0, o.jsx)("span", {
            style: { color: "var(--peach-orange)", fontWeight: "600" },
            children: "🍪 We use cookies",
          }),
          (0, o.jsx)("br", {}),
          (0, o.jsxs)("span", {
            style: { color: "#333", fontSize: "13px" },
            children: [
              'We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept", you consent to our use of cookies.',
              " ",
              (0, o.jsx)("a", {
                href: "/privacy",
                style: {
                  color: "var(--peach-orange)",
                  textDecoration: "underline",
                },
                children: "Learn more",
              }),
            ],
          }),
        ],
      });
    }
    (g.defaultProps = b),
      e.i(47167),
      e.s(["CookieConsentBanner", () => y], 81888);
  },
  13301,
  (e) => {
    "use strict";
    function t() {
      return null;
    }
    e.s(["AnalyticsScripts", () => t]);
  },
]);
