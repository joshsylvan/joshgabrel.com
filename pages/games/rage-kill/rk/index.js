!(function () {
  "use strict";
  function l(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function n(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  function c(t, e, i) {
    return e && n(t.prototype, e), i && n(t, i), t;
  }
  function e(e, t) {
    var i,
      n = Object.keys(e);
    return (
      Object.getOwnPropertySymbols &&
        ((i = Object.getOwnPropertySymbols(e)),
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
        n.push.apply(n, i)),
      n
    );
  }
  function u(n) {
    for (var t = 1; t < arguments.length; t++) {
      var a = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? e(Object(a), !0).forEach(function (t) {
            var e, i;
            (e = n),
              (t = a[(i = t)]),
              i in e
                ? Object.defineProperty(e, i, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[i] = t);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
        : e(Object(a)).forEach(function (t) {
            Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(a, t));
          });
    }
    return n;
  }
  function d(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      e && a(t, e);
  }
  function o(t) {
    return (o = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function a(t, e) {
    return (a =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function s() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {})
        ),
        !0
      );
    } catch (t) {
      return !1;
    }
  }
  function r(t, e, i) {
    return (r = s()
      ? Reflect.construct
      : function (t, e, i) {
          var n = [null];
          n.push.apply(n, e);
          n = new (Function.bind.apply(t, n))();
          return i && a(n, i.prototype), n;
        }).apply(null, arguments);
  }
  function h(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function f(i) {
    var n = s();
    return function () {
      var t,
        e = o(i);
      return (
        (t = n
          ? ((t = o(this).constructor), Reflect.construct(e, arguments, t))
          : e.apply(this, arguments)),
        (e = this),
        !(t = t) || ("object" != typeof t && "function" != typeof t) ? h(e) : t
      );
    };
  }
  function m(t, e, i) {
    return (m =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (t, e, i) {
            t = (function (t, e) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(t, e) &&
                null !== (t = o(t));

              );
              return t;
            })(t, e);
            if (t) {
              e = Object.getOwnPropertyDescriptor(t, e);
              return e.get ? e.get.call(i) : e.value;
            }
          })(t, e, i || t);
  }
  function g(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
          return;
        var i = [],
          n = !0,
          a = !1,
          s = void 0;
        try {
          for (
            var r, o = t[Symbol.iterator]();
            !(n = (r = o.next()).done) &&
            (i.push(r.value), !e || i.length !== e);
            n = !0
          );
        } catch (t) {
          (a = !0), (s = t);
        } finally {
          try {
            n || null == o.return || o.return();
          } finally {
            if (a) throw s;
          }
        }
        return i;
      })(t, e) ||
      i(t, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function v(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return y(t);
      })(t) ||
      (function (t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
          return Array.from(t);
      })(t) ||
      i(t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function i(t, e) {
    if (t) {
      if ("string" == typeof t) return y(t, e);
      var i = Object.prototype.toString.call(t).slice(8, -1);
      return (
        "Object" === i && t.constructor && (i = t.constructor.name),
        "Map" === i || "Set" === i
          ? Array.from(t)
          : "Arguments" === i ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
          ? y(t, e)
          : void 0
      );
    }
  }
  function y(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
    return n;
  }
  function p(t, e) {
    var i = t.x + t.collider.xOffset * t.scale,
      n = t.x + t.collider.xOffset * t.scale + t.collider.width * t.scale,
      a = t.y + t.collider.yOffset * t.scale,
      s = t.y + t.collider.yOffset * t.scale + t.collider.height * t.scale,
      r = e.x + e.collider.xOffset * e.scale,
      o = e.x + e.collider.xOffset * e.scale + e.collider.width * e.scale,
      t = e.y + e.collider.yOffset * e.scale,
      e = e.y + e.collider.yOffset * e.scale + e.collider.height * e.scale;
    return i < o && r < n && a < e && t < s;
  }
  function w(t, e, i, n, a, s, r) {
    l(this, w),
      (this.x = t),
      (this.y = e),
      (this.tileWidth = i),
      (this.tileHeight = n),
      (this.frameCount = a),
      (this.frameDuration = s),
      (this.loop = !0),
      (this.next = null),
      (this.isLoop = r);
  }
  (Math.distance = function (t, e, i, n) {
    return Math.sqrt(Math.pow(t - i, 2) + Math.pow(e - n, 2));
  }),
    (Math.moveTowards = function (t, e, i, n, a) {
      t = Math.atan2(e - n, t - i);
      return { x: i + Math.cos(t) * a, y: n + Math.sin(t) * a };
    });
  var b,
    k,
    x,
    _,
    O,
    S,
    A,
    t = (function () {
      function i(t) {
        var e = this;
        l(this, i),
          (this._keyDown = {}),
          (this._keyPressed = {}),
          (this._keyUpDelay = 100),
          (this._mouseDown = !1),
          (this._mouseUp = !1),
          (this._mouseData = null),
          (this._canvas = t),
          window.addEventListener("keydown", function (t) {
            return e._onKeyDown(t);
          }),
          window.addEventListener("keyup", function (t) {
            return e._onKeyUp(t);
          }),
          (t.onmousedown = function (t) {
            return e._onMouseDown(t);
          }),
          (t.onmouseup = function (t) {
            return e._onMouseUp(t);
          }),
          t.addEventListener("mousemove", function (t) {
            return (e._mouseData = t);
          });
      }
      return (
        c(i, [
          {
            key: "_onKeyDown",
            value: function (t) {
              (this._keyDown[t.code] = !0), t.preventDefault();
            },
          },
          {
            key: "_onKeyUp",
            value: function (t) {
              var e = this;
              (this._keyDown[t.code] = !1),
                (this._keyPressed[t.code] = !0),
                setTimeout(function () {
                  return (e._keyPressed[t.code] = !1);
                }, this._keyUpDelay);
            },
          },
          {
            key: "_onMouseDown",
            value: function (t) {
              this._mouseDown = !0;
            },
          },
          {
            key: "_onMouseUp",
            value: function (t) {
              var e = this;
              (this._mouseUp = !0),
                (this._mouseDown = !1),
                setTimeout(function () {
                  return (e._mouseUp = !1);
                }, this._keyUpDelay);
            },
          },
          {
            key: "isMouseDown",
            value: function () {
              return this._mouseDown;
            },
          },
          {
            key: "isMouseUp",
            value: function () {
              return !!this._mouseUp && !(this._mouseUp = !1);
            },
          },
          {
            key: "getMouseData",
            value: function () {
              return this._mouseData;
            },
          },
          {
            key: "getMousePosition",
            value: function () {
              if (!this._mouseData) return { x: -1, y: -1 };
              const rect = this._canvas.getBoundingClientRect();
              var t = this._mouseData,
                n = this._canvas,
                e = t.x - rect.left,
                i = t.y - rect.top,
                a = n.clientWidth,
                t = n.clientHeight;
              return { x: (e / a) * n.width, y: (i / t) * n.height };
            },
          },
          {
            key: "isKeyUp",
            value: function (t) {
              return !!this._keyPressed[t] && !(this._keyPressed[t] = !1);
            },
          },
          {
            key: "isKeyHeld",
            value: function (t) {
              return this._keyDown[t] || !1;
            },
          },
        ]),
        i
      );
    })(),
    j = (function () {
      function t() {
        l(this, t), (this.sounds = {}), (this.files = {});
      }
      return (
        c(t, [
          {
            key: "playSound",
            value: function (t) {
              this.sounds[t].play();
            },
          },
          {
            key: "playEffect",
            value: function (t) {
              new Audio(
                "rage-kill/rk/resources/sounds/".concat(this.files[t])
              ).play();
            },
          },
          {
            key: "addSound",
            value: function (t, e) {
              (this.files[e] = t),
                (this.sounds[e] = new Audio(
                  "rage-kill/rk/resources/sounds/".concat(t)
                ));
            },
          },
          {
            key: "getSound",
            value: function (t) {
              return this.sounds[t];
            },
          },
          {
            key: "addSounds",
            value: function (t) {
              var i = this;
              t.forEach(function (t) {
                var e = g(t, 2),
                  t = e[0],
                  e = e[1];
                return i.addSound(t, e);
              });
            },
          },
          {
            key: "stopSound",
            value: function (t) {
              this.sounds[t].pause(), (this.sounds[t].currentTime = 0);
            },
          },
          {
            key: "stopAllSounds",
            value: function () {
              var e = this;
              Object.keys(this.sounds).forEach(function (t) {
                e.stopSound(t);
              });
            },
          },
        ]),
        t
      );
    })(),
    M = (function () {
      function a(t, e, i) {
        var n = this;
        if (
          (l(this, a),
          (this._canvas = i),
          (this._nextScene = null),
          (this._state = e),
          !t || 0 === t.length)
        )
          throw new Error("No scenes in scene manager");
        (this._scenes = {}),
          t.forEach(function (t) {
            return (n._scenes[t.name] = t);
          }),
          (this._currentScene = t[0]);
      }
      return (
        c(a, [
          {
            key: "getCurrentScene",
            value: function () {
              return this._currentScene;
            },
          },
          {
            key: "getState",
            value: function () {
              return this._state;
            },
          },
          {
            key: "setState",
            value: function (t) {
              this._state = u(u({}, this._state), t);
            },
          },
          {
            key: "loadScene",
            value: function (t) {
              if (!this._scenes[t]) throw new Error("Scene");
              this._nextScene = t;
            },
          },
          {
            key: "updateScene",
            value: function () {
              this._currentScene.updateScene(this);
              var t = this._nextScene,
                e = this._scenes,
                i = this._currentScene;
              t &&
                (i.onDestroy(this),
                (t = e[t]),
                (this._currentScene = t),
                (this._nextScene = null),
                this.initScene());
            },
          },
          {
            key: "initScene",
            value: function () {
              this._currentScene.loadScene(),
                this._currentScene.init(this._canvas, this);
            },
          },
        ]),
        a
      );
    })(),
    D = (function () {
      function n(t, e, i) {
        l(this, n),
          (this.x = t),
          (this.y = e),
          (this.canvas = i),
          (this._target = null);
      }
      return (
        c(n, [
          {
            key: "setTarget",
            value: function (t) {
              this._target = t;
            },
          },
          {
            key: "setPosition",
            value: function (t, e) {
              (this.x = t), (this.y = e);
            },
          },
          {
            key: "update",
            value: function () {
              this._target
                ? ((this.x = -this._target.x + this.canvas.width / 2),
                  (this.y = -this._target.y + this.canvas.height / 2))
                : ((this.x = this.canvas.width / 2),
                  (this.y = this.canvas.height / 2));
            },
          },
        ]),
        n
      );
    })(),
    I = (function () {
      function n(t, e, i) {
        l(this, n),
          (this.name = t),
          (this._gameObjectsData = e),
          (this._uiObjectsData = i),
          (this.gameObjects = []),
          (this.uiObjects = []),
          this.loadScene();
      }
      return (
        c(n, [
          {
            key: "loadScene",
            value: function () {
              var e = this;
              (this.gameObjects = this._gameObjectsData.map(function (t) {
                t = g(t, 2);
                return r(t[0], v(t[1]));
              })),
                (this.uiObjects = this._uiObjectsData.map(function (t) {
                  t = g(t, 2);
                  return r(t[0], v(t[1]));
                })),
                (this.newGameObjects = []),
                (this.toDelete = new Set()),
                (this._idGameMap = {}),
                (this._shouldUpdateObjectMap = !1),
                (this.newUiObjects = []),
                (this.toDeleteUi = new Set()),
                (this._idUiMap = {}),
                (this._shouldUpdateUiMap = !1),
                this.gameObjects.forEach(function (t) {
                  e._addGameObjectToMap(t);
                }),
                this.gameObjects.sort(function (t, e) {
                  return t.layer - e.layer;
                }),
                this.uiObjects.forEach(function (t) {
                  e._addUiObjectToMap(t);
                }),
                this.uiObjects.sort(function (t, e) {
                  return t.layer - e.layer;
                });
            },
          },
          {
            key: "init",
            value: function (t, e) {
              var i = this;
              (this.camera = new D(0, 0, t)),
                this.gameObjects.forEach(function (t) {
                  t.init(i, e);
                }),
                this.uiObjects.forEach(function (t) {
                  t.init(i, e);
                });
            },
          },
          {
            key: "onDestroy",
            value: function (e) {
              var i = this;
              this.gameObjects.forEach(function (t) {
                return t.onDestroy(i, e);
              }),
                this.uiObjects.forEach(function (t) {
                  return t.onDestroy(i, e);
                });
            },
          },
          {
            key: "_addGameObjectToMap",
            value: function (t) {
              var e = t.tag;
              this._idGameMap[e]
                ? this._idGameMap[e].push(t)
                : (this._idGameMap[e] = [t]);
            },
          },
          {
            key: "_addUiObjectToMap",
            value: function (t) {
              var e = t.tag;
              this._idUiMap[e]
                ? this._idUiMap[e].push(t)
                : (this._idUiMap[e] = [t]);
            },
          },
          {
            key: "findGameObjectsById",
            value: function (t) {
              return this._idGameMap[t] || [];
            },
          },
          {
            key: "findUiObjectsById",
            value: function (t) {
              return this._idUiMap[t] || [];
            },
          },
          {
            key: "addGameObject",
            value: function (t) {
              this.newGameObjects.push(t), (this._shouldUpdateObjectMap = !0);
            },
          },
          {
            key: "addUiObject",
            value: function (t) {
              this.newUiObjects.push(t), (this._shouldUpdateUiMap = !0);
            },
          },
          {
            key: "removeGameObject",
            value: function (t) {
              this.toDelete.add(this.gameObjects.indexOf(t)),
                (this._shouldUpdateObjectMap = !0);
            },
          },
          {
            key: "removeUiObject",
            value: function (t) {
              this.toDeleteUi.add(this.uiObjects.indexOf(t)),
                (this._shouldUpdateUiMap = !0);
            },
          },
          {
            key: "updateScene",
            value: function (i) {
              var n = this;
              0 < this.toDelete.size &&
                ((this.gameObjects = this.gameObjects.filter(function (t, e) {
                  return !n.toDelete.has(e) || (t.onDestroy(n, i), !1);
                })),
                this.toDelete.clear()),
                0 < this.newGameObjects.length &&
                  ((this.gameObjects = [].concat(
                    v(this.gameObjects),
                    v(this.newGameObjects)
                  )),
                  (this.newGameObjects = [])),
                0 < this.toDeleteUi.size &&
                  ((this.uiObjects = this.uiObjects.filter(function (t, e) {
                    return !n.toDeleteUi.has(e) || (t.onDestroy(n, i), !1);
                  })),
                  this.toDeleteUi.clear()),
                0 < this.newUiObjects.length &&
                  ((this.uiObjects = [].concat(
                    v(this.uiObjects),
                    v(this.newUiObjects)
                  )),
                  (this.newUiObjects = [])),
                this._shouldUpdateObjectMap &&
                  ((this._shouldUpdateObjectMap = !1),
                  (this._idGameMap = {}),
                  this.gameObjects.forEach(function (t) {
                    n._addGameObjectToMap(t);
                  }),
                  this.gameObjects.sort(function (t, e) {
                    return t.layer - e.layer;
                  })),
                this._shouldUpdateUiMap &&
                  ((this._shouldUpdateUiMap = !1),
                  (this._idUiMap = {}),
                  this.uiObjects.forEach(function (t) {
                    n._addUiObjectToMap(t);
                  }),
                  this.uiObjects.sort(function (t, e) {
                    return t.layer - e.layer;
                  }));
            },
          },
        ]),
        n
      );
    })(),
    T = (function () {
      function r(t, e, i, n, a, s) {
        l(this, r),
          (this.x = t),
          (this.y = e),
          (this.width = i),
          (this.height = n),
          (this.scale = a),
          (this.collider = null),
          (this.animator = null),
          (this.tag = s),
          (this.layer = 0);
      }
      return (
        c(r, [
          { key: "init", value: function (t, e) {} },
          { key: "onDestroy", value: function (t, e) {} },
          {
            key: "input",
            value: function (t) {
              t.canvas,
                t.ctx,
                t.deltaTime,
                t.InputManager,
                t.GameManager,
                t.Camera;
            },
          },
          {
            key: "update",
            value: function (t) {
              t.canvas,
                t.ctx,
                t.deltaTime,
                t.InputManager,
                t.GameManager,
                t.Camera;
            },
          },
          {
            key: "render",
            value: function (t) {
              t.canvas,
                t.ctx,
                t.deltaTime,
                t.InputManager,
                t.GameManager,
                t.Camera;
            },
          },
        ]),
        r
      );
    })(),
    C = "rage-kill/rk/level-1.png",
    G = "rage-kill/rk/level-2.png",
    E = "rage-kill/rk/level-3.png",
    U = "rage-kill/rk/boss.png",
    P = (function () {
      d(r, T);
      var s = f(r);
      function r(t, e, i, n, a) {
        return (
          l(this, r),
          ((n = s.call(this, t, e, i, n, 2, "background"))._levels = {
            "level-1": C,
            "level-2": G,
            "level-3": E,
            boss: U,
          }),
          (n._level = a),
          n
        );
      }
      return (
        c(r, [
          {
            key: "init",
            value: function (t) {
              var e = new Image();
              (e.src = this._levels[this._level]), (this.spriteImg = e);
            },
          },
          {
            key: "render",
            value: function (t) {
              var e = t.ctx,
                i = this.x,
                n = this.y,
                a = this.width,
                s = this.height,
                r = this.scale,
                t = this.spriteImg;
              e.drawImage(t, i, n, a * r, s * r);
            },
          },
        ]),
        r
      );
    })(),
    B = (function () {
      function s(t, e, i, n, a) {
        l(this, s),
          (this.xOffset = t),
          (this.yOffset = e),
          (this.width = i),
          (this.height = n),
          (this.scale = a),
          (this.isTrigger = !1),
          (this.isStatic = !1),
          (this.type = "box");
      }
      return (
        c(s, [
          {
            key: "render",
            value: function (t, e, i, n, a) {
              var s = this.xOffset,
                r = this.yOffset,
                o = this.width,
                c = this.scale,
                s = 0 === s ? 1 : s,
                r = 0 === r ? 1 : r;
              i.beginPath(),
                (i.strokeStyle = "#00ff00"),
                i.rect(n + s * c, a + r * c, o * c, this.height * c),
                i.stroke(),
                i.closePath(),
                (i.strokeStyle = "#000000");
            },
          },
        ]),
        s
      );
    })(),
    R = (function () {
      d(s, T);
      var a = f(s);
      function s(t, e, i, n) {
        return l(this, s), a.call(this, t, e, i, n, 2, "wall");
      }
      return (
        c(s, [
          {
            key: "init",
            value: function (t) {
              (this.collider = new B(
                -1,
                -1,
                this.width + 2,
                this.height + 2,
                this.scale
              )),
                (this.collider.isStatic = !0);
            },
          },
          {
            key: "render",
            value: function (t) {
              t.canvas, t.ctx, t.deltaTime;
            },
          },
          {
            key: "update",
            value: function (t) {
              t.canvas,
                t.ctx,
                t.deltaTime,
                t.InputManager,
                t.GameManager,
                t.Camera;
            },
          },
        ]),
        s
      );
    })(),
    K = (function () {
      function e(t) {
        l(this, e),
          (this.animations = {}),
          (this.currentAnimation = null),
          (this.state = null),
          (this.currentTime = 0),
          (this.currentFrame = 0),
          (this.isActive = !1),
          (this.img = t);
      }
      return (
        c(e, [
          {
            key: "addAnimation",
            value: function (t, e) {
              this.animations[t] = e;
            },
          },
          {
            key: "setActive",
            value: function (t) {
              this.isActive = t;
            },
          },
          {
            key: "setCurrentTime",
            value: function (t) {
              this.currentTime = t;
            },
          },
          {
            key: "getCurrentAnimation",
            value: function () {
              return this.currentAnimation;
            },
          },
          {
            key: "hasAnimationFinished",
            value: function () {
              var t = this.animations[this.currentAnimation];
              return !t.isLoop && this.currentFrame === t.frameCount;
            },
          },
          {
            key: "setAnimation",
            value: function (t) {
              t !== this.currentAnimation &&
                ((this.currentAnimation = t),
                (this.currentTime = 0),
                (this.currentFrame = 0));
            },
          },
          {
            key: "render",
            value: function (t, e, i, n, a, s) {
              var r = this.animations[this.currentAnimation],
                o = r.x,
                c = r.y,
                u = r.tileWidth,
                h = r.tileHeight,
                l = r.frameDuration,
                d = r.frameCount,
                r = r.isLoop;
              this.isActive &&
                ((this.currentFrame === d && !r) ||
                  ((this.currentTime += t),
                  this.currentTime >= l &&
                    ((l = this.currentTime - l),
                    (this.currentTime = l),
                    this.currentFrame++,
                    this.currentFrame > d && (this.currentFrame = 0))),
                i.drawImage(
                  this.img,
                  o + this.currentFrame * u,
                  c,
                  u,
                  h,
                  n,
                  a,
                  u * s,
                  h * s
                ));
            },
          },
        ]),
        e
      );
    })(),
    H = "rage-kill/rk/sprites.png",
    F = (function () {
      d(n, T);
      var i = f(n);
      function n(t, e) {
        return l(this, n), i.call(this, t, e, 10, 10, 2, "coin");
      }
      return (
        c(n, [
          {
            key: "init",
            value: function (t) {
              var e = new Image();
              (e.src = H), (this.spriteImg = e), (this.animator = new K(e));
              e = this.animator;
              e.addAnimation("idle", new w(144, 138, 10, 10, 3, 0.1, !0)),
                e.setAnimation("idle"),
                e.setActive(!0),
                (this.collider = new B(
                  0,
                  0,
                  this.width,
                  this.height,
                  this.scale
                ));
            },
          },
          {
            key: "render",
            value: function (t) {
              var e = t.canvas,
                i = t.ctx,
                n = t.deltaTime,
                a = this.x,
                s = this.y,
                t = this.scale;
              this.animator.render(n, e, i, a, s, t);
            },
          },
        ]),
        n
      );
    })(),
    z = (function () {
      d(r, T);
      var s = f(r);
      function r(t, e, i, n) {
        var a;
        switch (
          (l(this, r),
          ((a = s.call(this, t, e, 8, 8, 2, "bullet")).direction = i),
          (a.speed = n),
          (a.dx = 0),
          i)
        ) {
          case (a.dy = 0):
            a.dy = -a.speed;
            break;
          case 1:
            a.dx = a.speed;
            break;
          case 2:
            a.dy = a.speed;
            break;
          case 3:
            a.dx = -a.speed;
        }
        return a.init(), a;
      }
      return (
        c(r, [
          {
            key: "init",
            value: function () {
              var t = new Image();
              (t.src = H), (this.spriteImg = t), (this.animator = new K(t));
              t = this.animator;
              t.addAnimation("idle", new w(144, 161, 8, 8, 3, 0.4, !0)),
                t.setAnimation("idle"),
                t.setActive(!0),
                (this.collider = new B(
                  0,
                  0,
                  this.width,
                  this.height,
                  this.scale
                ));
            },
          },
          {
            key: "update",
            value: function (t) {
              var s = this,
                e = (t.canvas, t.ctx, t.deltaTime),
                r = (t.InputManager, t.GameManager),
                i = (t.Camera, this.dx),
                t = this.dy,
                o = r.getCurrentScene();
              (this.x += i * e),
                (this.y += t * e),
                o.findGameObjectsById("zombie").forEach(function (t) {
                  var e, i, n, a;
                  p(s, t) &&
                    !t.isDead &&
                    (r.Sounds.playEffect("splat"),
                    (e = t.x),
                    (i = t.y),
                    (n = t.width),
                    (a = t.height),
                    (a = new F(e + n / 2, i + a / 2)).init(),
                    o.addGameObject(a),
                    (t.isDead = !0),
                    t.animator.setAnimation("death_0"),
                    o.removeGameObject(s),
                    setTimeout(function () {
                      return o.removeGameObject(t);
                    }, 1e3),
                    o.findUiObjectsById("killui")[0].addKill());
                }),
                o.findGameObjectsById("wall").forEach(function (t) {
                  p(s, t) && o.removeGameObject(s);
                });
            },
          },
          {
            key: "render",
            value: function (t) {
              var e = t.canvas,
                i = t.ctx,
                n = t.deltaTime,
                a = this.x,
                s = this.y,
                t = this.scale;
              this.animator.render(n, e, i, a, s, t);
            },
          },
        ]),
        r
      );
    })(),
    L = (function () {
      d(n, T);
      var i = f(n);
      function n(t) {
        var e;
        return (
          l(this, n),
          ((e = i.call(this, 0, 0, 20, 20, 2, "gun")).parent = t),
          (e.direction = -1),
          (e.offsetX = 0),
          (e.offsetY = 0),
          (e.bulletOffsetX = 0),
          (e.bulletOffsetY = 0),
          (e.currentTime = 0),
          (e.shootTime = 0.4),
          (e.ammo = 30),
          (e.isRageMode = !1),
          (e.rageModeDuration = 15),
          (e.currentRageTime = 0),
          e
        );
      }
      return (
        c(n, [
          {
            key: "init",
            value: function (t) {
              this.animator = new K(t);
              var e = this.animator,
                t = this.shootTime;
              e.addAnimation("up", new w(0, 230, 18, 23, 3, t / 4, !0)),
                e.addAnimation("down", new w(0, 323, 18, 23, 3, t / 4, !0)),
                e.addAnimation("right", new w(0, 280, 36, 23, 3, t / 4, !0)),
                e.addAnimation("left", new w(0, 372, 36, 20, 3, t / 4, !0)),
                e.setAnimation("left"),
                e.setActive(!0);
            },
          },
          {
            key: "input",
            value: function (t, e) {
              var i = this.animator;
              i.setActive(!0);
              var n = 0,
                a = 0,
                s = 0,
                r = 0,
                o = -1;
              e.isKeyHeld("ArrowUp")
                ? (i.setAnimation("up"),
                  (o = 0),
                  (a = -40),
                  (r = -30),
                  (s = 10))
                : e.isKeyHeld("ArrowDown")
                ? (i.setAnimation("down"),
                  (o = 2),
                  (a = 40),
                  (r = 30),
                  (s = 10))
                : e.isKeyHeld("ArrowLeft")
                ? (i.setAnimation("left"),
                  (o = 3),
                  (n = -33),
                  (r = 10),
                  (s = -30))
                : e.isKeyHeld("ArrowRight")
                ? (i.setAnimation("right"),
                  (o = 1),
                  (n = 33),
                  (r = 10),
                  (s = 50))
                : (i.setActive(!1),
                  i.setCurrentTime(0),
                  (this.currentTime = 0),
                  (o = -1)),
                (this.offsetX = n),
                (this.offsetY = a),
                (this.bulletOffsetX = s),
                (this.bulletOffsetY = r),
                (this.direction = o);
            },
          },
          {
            key: "update",
            value: function (t, e, i) {
              var n = this.direction,
                a = this.shootTime,
                s = this.parent,
                r = this.bulletOffsetX,
                o = this.bulletOffsetY,
                c = this.ammo,
                u = this.isRageMode;
              c <= 0 ||
                (0 <= this.direction
                  ? ((this.currentTime -= t),
                    this.currentTime <= 0 &&
                      ((this.currentTime = a + -this.currentTime),
                      this.isRageMode || this.ammo--,
                      e
                        .findUiObjectsById("ammoui")[0]
                        .setAmmo(u ? "🔥👺🔥" : this.ammo),
                      e.addGameObject(
                        new z(s.x + r, s.y + o, n, u ? 600 : 300)
                      ),
                      i.playEffect("gunshot")))
                  : (this.currentTime = 0));
            },
          },
          {
            key: "render",
            value: function (t, e, i) {
              var n = this.scale,
                a = this.direction,
                s = this.animator,
                r = this.offsetX,
                o = this.offsetY,
                c = this.parent,
                u = c.x,
                c = c.y;
              a < 0 || s.render(t, e, i, u + r, c + o, n);
            },
          },
          {
            key: "enableRageMode",
            value: function (t, e) {
              var i = this;
              e.Sounds.stopAllSounds(),
                e.Sounds.playSound("rage"),
                (this.isRageMode = !0),
                (this.shootTime = 0.05),
                t.findUiObjectsById("rageui")[0].toggleRage(),
                setTimeout(function () {
                  e.Sounds.stopAllSounds(),
                    e.Sounds.playSound("level-bg"),
                    (i.isRageMode = !1),
                    (i.shootTime = 0.4),
                    t.findUiObjectsById("rageui")[0].toggleRage();
                }, 1e3 * this.rageModeDuration);
            },
          },
        ]),
        n
      );
    })(),
    V = (function () {
      d(n, T);
      var i = f(n);
      function n(t, e) {
        return (
          l(this, n),
          ((e = i.call(this, t, e, 18, 23, 2, "player")).direction = 0),
          (e.speed = 150),
          (e.health = 6),
          (e.score = 0),
          (e.gunObject = new L(h(e))),
          (e.hitCooldown = 1e3),
          (e.invincible = !1),
          (e.isDead = !1),
          (e.layer = 5),
          e
        );
      }
      return (
        c(n, [
          {
            key: "init",
            value: function (t) {
              var e = new Image();
              (e.src = H), (this.spriteImg = e), (this.animator = new K(e));
              var i = this.animator,
                n = this.width,
                a = this.height,
                s = this.gunObject,
                e = this.scale;
              i.addAnimation("idle_down", new w(0, 0, n, a, 7, 0.08, !0)),
                i.addAnimation("idle_right", new w(0, 23, n, a, 7, 0.08, !0)),
                i.addAnimation("idle_up", new w(0, 46, n, a, 7, 0.08, !0)),
                i.addAnimation("idle_left", new w(0, 69, n, a, 7, 0.08, !0)),
                i.addAnimation("run_down", new w(0, 92, n, a, 7, 0.08, !0)),
                i.addAnimation("run_up", new w(0, 115, n, a, 7, 0.08, !0)),
                i.addAnimation("run_right", new w(0, 138, n, a, 7, 0.08, !0)),
                i.addAnimation("run_left", new w(0, 161, n, a, 7, 0.08, !0)),
                i.addAnimation("death", new w(0, 184, n, a, 7, 0.08, !1)),
                i.setAnimation("idle_down"),
                i.setActive(!0),
                (this.collider = new B(2, 1, n - 3, a - 1, e)),
                s.init(this.spriteImg),
                t.camera.setTarget(this);
            },
          },
          {
            key: "input",
            value: function (t) {
              var e = t.deltaTime,
                i = t.InputManager,
                n = this.isDead,
                a = this.speed,
                s = this.animator,
                r = this.gunObject;
              if (!n) {
                (t = 0), (n = 0);
                if (
                  (i.isKeyHeld("KeyW") && (--n, (this.direction = 0)),
                  i.isKeyHeld("KeyS") && ((n += 1), (this.direction = 2)),
                  i.isKeyHeld("KeyA") && (--t, (this.direction = 3)),
                  i.isKeyHeld("KeyD") && ((t += 1), (this.direction = 1)),
                  t || n)
                )
                  switch (this.direction) {
                    case 0:
                      s.setAnimation("run_up"), (this.y -= a * e);
                      break;
                    case 1:
                      s.setAnimation("run_right"), (this.x += a * e);
                      break;
                    case 2:
                      s.setAnimation("run_down"), (this.y += a * e);
                      break;
                    case 3:
                      s.setAnimation("run_left"), (this.x -= a * e);
                  }
                else
                  switch (this.direction) {
                    case 0:
                      s.setAnimation("idle_up");
                      break;
                    case 1:
                      s.setAnimation("idle_right");
                      break;
                    case 2:
                      s.setAnimation("idle_down");
                      break;
                    case 3:
                      s.setAnimation("idle_left");
                  }
                r.input(e, i);
              }
            },
          },
          {
            key: "update",
            value: function (t) {
              var e = this,
                i = t.deltaTime,
                n = t.GameManager,
                a = this.isDead,
                t = this.animator,
                s = this.speed,
                r = this.direction,
                o = this.hitCooldown,
                c = this.gunObject,
                u = n.getCurrentScene();
              if (a)
                return (
                  "death" !== t.currentAnimation &&
                    setTimeout(function () {
                      return n.loadScene("menu");
                    }, 2e3),
                  void t.setAnimation("death")
                );
              u.findGameObjectsById("wall").forEach(function (t) {
                if (p(e, t))
                  switch (r) {
                    case 0:
                      e.y += s * i;
                      break;
                    case 1:
                      e.x -= s * i;
                      break;
                    case 2:
                      e.y -= s * i;
                      break;
                    case 3:
                      e.x += s * i;
                  }
              }),
                u.findGameObjectsById("coin").forEach(function (t) {
                  p(e, t) &&
                    (n.Sounds.playEffect("coin"),
                    e.score++,
                    u.removeGameObject(t),
                    u.findUiObjectsById("scoreui")[0].setScore(e.score));
                }),
                u.findGameObjectsById("zombie").forEach(function (t) {
                  t.isChasing &&
                    !t.isDead &&
                    !e.invincible &&
                    p(t, e) &&
                    (n.Sounds.playEffect("hurt"),
                    e.health--,
                    u.findUiObjectsById("healthbar")[0].setHealth(e.health),
                    e.health <= 0
                      ? ((e.isDead = !0),
                        n.Sounds.stopAllSounds(),
                        n.Sounds.playEffect("splat"))
                      : ((e.invincible = !0),
                        setTimeout(function () {
                          return (e.invincible = !1);
                        }, o)));
                }),
                u.findGameObjectsById("boss").forEach(function (t) {
                  t.isDead ||
                    e.invincible ||
                    !p(t, e) ||
                    (n.Sounds.playEffect("hurt"),
                    e.health--,
                    u.findUiObjectsById("healthbar")[0].setHealth(e.health),
                    e.health <= 0
                      ? ((e.isDead = !0),
                        n.Sounds.stopAllSounds(),
                        n.Sounds.playEffect("splat"))
                      : ((e.invincible = !0),
                        setTimeout(function () {
                          return (e.invincible = !1);
                        }, o)));
                }),
                u.findGameObjectsById("healthpack").forEach(function (t) {
                  p(t, e) &&
                    e.health < 6 &&
                    (n.Sounds.playEffect("health"),
                    (e.health = 6),
                    u.findUiObjectsById("healthbar")[0].setHealth(e.health),
                    u.removeGameObject(t));
                }),
                u.findGameObjectsById("ammopack").forEach(function (t) {
                  p(t, e) &&
                    (n.Sounds.playEffect("ammo"),
                    (c.ammo += 30),
                    u.findUiObjectsById("ammoui")[0].setAmmo(c.ammo),
                    u.removeGameObject(t));
                }),
                u.findGameObjectsById("ragepower").forEach(function (t) {
                  p(t, e) && (u.removeGameObject(t), c.enableRageMode(u, n));
                }),
                c.update(i, u, n.Sounds);
            },
          },
          {
            key: "render",
            value: function (t) {
              var e = t.canvas,
                i = t.ctx,
                n = t.deltaTime,
                a = this.x,
                s = this.y,
                r = (this.width, this.height, this.scale),
                o = this.invincible,
                c = this.animator,
                t = this.gunObject;
              (i.globalAlpha = o ? 0.4 : 1),
                c.render(n, e, i, a, s, r),
                (i.globalAlpha = 1),
                t.render(n, e, i);
            },
          },
        ]),
        n
      );
    })(),
    X = (function () {
      d(n, T);
      var i = f(n);
      function n(t, e) {
        return (
          l(this, n),
          ((e = i.call(this, t, e, 18, 23, 2, "zombie")).direction = "down"),
          (e.target = null),
          (e.speed = Math.floor(20 * Math.random()) - 10 + 50),
          (e.minimumDistance = 200),
          (e.isSpawning = !0),
          (e.isChasing = !1),
          (e.isDead = !1),
          (e.DIRECTIONS = ["up", "right", "down", "left"]),
          (e.idleDirection = ""),
          (e.idleDistance = 0),
          (e.idleDx = 0),
          (e.idleDy = 0),
          e
        );
      }
      return (
        c(n, [
          {
            key: "init",
            value: function (t) {
              var e = new Image();
              (e.src = H), (this.spriteImg = e), (this.animator = new K(e));
              var i = this.animator,
                n = this.width,
                e = this.height;
              i.addAnimation("idle_down", new w(216, 0, n, e, 7, 0.08, !0)),
                i.addAnimation("idle_right", new w(216, 23, n, e, 7, 0.08, !0)),
                i.addAnimation("idle_up", new w(216, 46, n, e, 7, 0.08, !0)),
                i.addAnimation("idle_left", new w(216, 69, n, e, 7, 0.08, !0)),
                i.addAnimation("run_down", new w(216, 92, n, e, 7, 0.08, !0)),
                i.addAnimation("run_up", new w(216, 138, n, e, 7, 0.08, !0)),
                i.addAnimation("run_right", new w(216, 115, n, e, 7, 0.08, !0)),
                i.addAnimation("run_left", new w(216, 161, n, e, 7, 0.08, !0)),
                i.addAnimation("death_0", new w(216, 184, n, e, 7, 0.08, !1)),
                i.addAnimation("death_1", new w(216, 207, n, e, 7, 0.08, !1)),
                i.addAnimation("spawn", new w(216, 230, n, e, 7, 0.08, !1)),
                i.setAnimation("spawn"),
                i.setActive(!0),
                (this.collider = new B(
                  2,
                  1,
                  this.width - 3,
                  this.height - 1,
                  this.scale
                )),
                (this.target = t.findGameObjectsById("player")[0]);
            },
          },
          {
            key: "calculateDirection",
            value: function () {
              var t = this.target,
                e = this.x;
              t.x > e && (this.direction = "right"),
                t.x < e && (this.direction = "left");
            },
          },
          {
            key: "getDirectionVector",
            value: function (t) {
              switch (t) {
                case "up":
                  return [0, -1];
                case "right":
                  return [1, 0];
                case "down":
                  return [0, 1];
                case "left":
                  return [-1, 0];
              }
            },
          },
          {
            key: "update",
            value: function (t) {
              var e = this,
                i = t.deltaTime,
                n = t.GameManager,
                a = this.x,
                s = this.y,
                r = (this.width, this.height, this.target),
                o = this.isDead,
                c = this.animator,
                u = this.minimumDistance,
                h = this.direction,
                l = this.speed,
                t = this.isSpawning;
              if (r && !o)
                if (t) c.hasAnimationFinished() && (this.isSpawning = !1);
                else {
                  if (r.isDead)
                    return (
                      (this.isChasing = !1),
                      void c.setAnimation("idle_".concat(h))
                    );
                  var d,
                    f,
                    m,
                    v,
                    y,
                    n = n.getCurrentScene();
                  Math.distance(r.x, r.y, a, s) <= u
                    ? ((this.isChasing = !0),
                      (l = Math.moveTowards(r.x, r.y, a, s, l * i)),
                      (this.x = l.x),
                      (this.y = l.y),
                      (d = !1),
                      n.findGameObjectsById("wall").forEach(function (t) {
                        p(e, t) && ((e.x = a), (e.y = s), (d = !0));
                      }),
                      c.setAnimation(
                        "".concat(d ? "idle" : "run", "_").concat(h)
                      ))
                    : ((this.isChasing = !1),
                      this.idleDistance <= 0
                        ? ((this.idleDistance = Math.floor(
                            100 * Math.random()
                          )),
                          (this.idleDirection =
                            this.DIRECTIONS[Math.floor(4 * Math.random())]),
                          (v = (y = g(
                            this.getDirectionVector(this.idleDirection),
                            2
                          ))[0]),
                          (y = y[1]),
                          (this.idleDx = v),
                          (this.idleDy = y),
                          c.setAnimation("run_".concat(this.idleDirection)))
                        : ((f = this.x),
                          (m = this.y),
                          (v = this.idleDx),
                          (y = this.idleDy),
                          (c = this.speed),
                          (this.x += v * (c / 2) * i),
                          (this.y += y * (c / 2) * i),
                          n.findGameObjectsById("wall").forEach(function (t) {
                            p(e, t) &&
                              ((e.x = f), (e.y = m), (e.idleDistance = 0));
                          }),
                          (this.idleDistance -= (this.speed / 2) * i))),
                    this.calculateDirection();
                }
            },
          },
          {
            key: "render",
            value: function (t) {
              var e = t.canvas,
                i = t.ctx,
                n = t.deltaTime,
                a = this.x,
                s = this.y,
                t = (this.width, this.height, this.scale);
              (i.strokeStyle = "#000000"),
                this.animator.render(n, e, i, a, s, t);
            },
          },
        ]),
        n
      );
    })(),
    Y = (function () {
      d(n, T);
      var i = f(n);
      function n(t, e) {
        return l(this, n), i.call(this, t, e, 18, 23, 2, "spawner");
      }
      return (
        c(n, [
          {
            key: "init",
            value: function (t) {
              var e = 3 + Math.floor(5 * Math.random());
              (this.cooldown = e), (this.currentTime = e);
            },
          },
          {
            key: "update",
            value: function (t) {
              var e = t.deltaTime,
                i = t.GameManager,
                n = this.cooldown,
                a = this.x,
                t = this.y,
                i = i.getCurrentScene();
              (this.currentTime += e),
                this.currentTime >= n &&
                  ((this.currentTime = this.currentTime - n),
                  (t = new X(a, t)).init(i),
                  i.addGameObject(t));
            },
          },
        ]),
        n
      );
    })(),
    N = (function () {
      d(n, T);
      var i = f(n);
      function n(t, e) {
        return l(this, n), i.call(this, t, e, 16, 15, 2, "healthpack");
      }
      return (
        c(n, [
          {
            key: "init",
            value: function (t) {
              var e = new Image();
              (e.src = H), (this.spriteImg = e), (this.animator = new K(e));
              e = this.animator;
              e.addAnimation("idle", new w(144, 0, 17, 15, 0, 0.1, !1)),
                e.setAnimation("idle"),
                e.setActive(!0),
                (this.collider = new B(
                  0,
                  0,
                  this.width,
                  this.height,
                  this.scale
                ));
            },
          },
          {
            key: "render",
            value: function (t) {
              var e = t.canvas,
                i = t.ctx,
                n = t.deltaTime,
                a = this.x,
                s = this.y,
                t = this.scale;
              this.animator.render(n, e, i, a, s, t);
            },
          },
        ]),
        n
      );
    })(),
    W = (function () {
      d(n, T);
      var i = f(n);
      function n(t, e) {
        return l(this, n), i.call(this, t, e, 12, 15, 2, "ragepower");
      }
      return (
        c(n, [
          {
            key: "init",
            value: function (t) {
              var e = new Image();
              (e.src = H), (this.spriteImg = e), (this.animator = new K(e));
              var i = this.animator,
                n = this.width,
                a = this.height,
                e = this.scale;
              i.addAnimation("idle", new w(182, 0, 13, 16, 0, 0.1, !1)),
                i.setAnimation("idle"),
                i.setActive(!0),
                (this.collider = new B(0, 0, n, a, e));
            },
          },
          {
            key: "render",
            value: function (t) {
              var e = t.canvas,
                i = t.ctx,
                n = t.deltaTime,
                a = this.x,
                s = this.y,
                t = this.scale;
              this.animator.render(n, e, i, a, s, t);
            },
          },
        ]),
        n
      );
    })(),
    q = (function () {
      d(n, T);
      var i = f(n);
      function n(t, e) {
        return l(this, n), i.call(this, t, e, 22, 24, 2, "ammopack");
      }
      return (
        c(n, [
          {
            key: "init",
            value: function (t) {
              var e = new Image();
              (e.src = H), (this.spriteImg = e), (this.animator = new K(e));
              e = this.animator;
              e.addAnimation("idle", new w(90, 230, 22, 24, 0, 0.1, !1)),
                e.setAnimation("idle"),
                e.setActive(!0),
                (this.collider = new B(
                  0,
                  10,
                  this.width,
                  this.height - 10,
                  this.scale
                ));
            },
          },
          {
            key: "render",
            value: function (t) {
              var e = t.canvas,
                i = t.ctx,
                n = t.deltaTime,
                a = this.x,
                s = this.y,
                t = this.scale;
              this.animator.render(n, e, i, a, s, t);
            },
          },
        ]),
        n
      );
    })(),
    $ = (function () {
      d(i, T);
      var e = f(i);
      function i() {
        var t;
        return (
          l(this, i),
          ((t = e.call(this, 0, 0, 200, 13, 2, "healthbar")).hearts = []),
          (t.padding = 10),
          (t.health = 6),
          t
        );
      }
      return (
        c(i, [
          {
            key: "init",
            value: function (e) {
              (this.hearts = [
                new J(this.padding, this.padding),
                new J((this.padding + 13) * this.scale, this.padding),
                new J(
                  (this.padding + 26) * this.scale + this.padding,
                  this.padding
                ),
              ]),
                this.hearts.forEach(function (t) {
                  t.init(e), t.setState("full");
                });
            },
          },
          {
            key: "setHealth",
            value: function (t) {
              for (
                var e = 6 < t ? 3 : t <= 0 ? 0 : t / 2, i = 0;
                i < this.hearts.length;
                i++
              )
                0.5 < e
                  ? this.hearts[i].setState("full")
                  : 0.5 === e
                  ? this.hearts[i].setState("half")
                  : this.hearts[i].setState("empty"),
                  e--;
            },
          },
          {
            key: "render",
            value: function (e, i, n, a, s) {
              this.hearts.forEach(function (t) {
                t.render(e, i, n, a, s);
              });
            },
          },
        ]),
        i
      );
    })(),
    J = (function () {
      d(n, T);
      var i = f(n);
      function n(t, e) {
        return l(this, n), i.call(this, t, e, 200, 30, 2);
      }
      return (
        c(n, [
          {
            key: "init",
            value: function (t) {
              var e = new Image();
              (e.src = H),
                (this.spriteImg = e),
                (this.animator = new K(e)),
                this.animator.addAnimation(
                  "full",
                  new w(144, 23, 13, 11, 0, 0.1, !1)
                ),
                this.animator.addAnimation(
                  "half",
                  new w(162, 23, 13, 11, 0, 0.1, !1)
                ),
                this.animator.addAnimation(
                  "empty",
                  new w(180, 23, 13, 11, 0, 0.1, !1)
                ),
                this.animator.setAnimation("empty"),
                this.animator.setActive(!0);
            },
          },
          {
            key: "setState",
            value: function (t) {
              this.animator.setAnimation(t);
            },
          },
          {
            key: "render",
            value: function (t) {
              var e = t.canvas,
                i = t.ctx,
                n = t.deltaTime,
                a = t.Camera,
                s = this.x,
                r = this.y,
                t = this.scale;
              this.animator.render(n, e, i, s - a.x, r - a.y, t);
            },
          },
        ]),
        n
      );
    })(),
    Q = (function () {
      d(h, T);
      var u = f(h);
      function h(t, e, i, n, a, s, r, o, c) {
        l(this, h), ((o = u.call(this, t, e, a, s, r, o)).dx = i), (o.dy = n);
        n = new Image();
        return (n.src = c), (o.imageSrc = n), o;
      }
      return (
        c(h, [
          {
            key: "render",
            value: function (t) {
              t.canvas;
              var e = t.ctx,
                i = (t.deltaTime, t.InputManager, t.GameManager, t.Camera),
                n = this.x,
                a = this.y,
                s = this.scale,
                r = this.imageSrc,
                o = this.width,
                c = this.height,
                u = this.dx,
                t = this.dy;
              e.drawImage(r, u, t, o, c, n - i.x, a - i.y, o * s, c * s);
            },
          },
        ]),
        h
      );
    })(),
    Z = (function () {
      d(i, T);
      var e = f(i);
      function i() {
        var t;
        return (
          l(this, i),
          ((t = e.call(this, 0, 30, 200, 13, 2, "scoreui")).padding = 13),
          (t.score = 0),
          t
        );
      }
      return (
        c(i, [
          {
            key: "init",
            value: function (t) {
              this.coinImage = new Q(15, 45, 144, 138, 10, 10, 2, "coin", H);
            },
          },
          {
            key: "setScore",
            value: function (t) {
              this.score = t;
            },
          },
          {
            key: "render",
            value: function (t) {
              var e = t.canvas,
                i = t.ctx,
                n = t.deltaTime,
                a = t.InputManager,
                s = t.GameManager,
                r = t.Camera,
                o = this.x,
                c = this.y,
                u = (this.scale, this.padding),
                t = this.score;
              this.coinImage;
              this.coinImage.render({
                canvas: e,
                ctx: i,
                deltaTime: n,
                InputManager: a,
                GameManager: s,
                Camera: r,
              }),
                (i.font = "18px Verdana"),
                (i.fillStyle = "black"),
                (i.textAlign = "left"),
                i.fillText("𝗑 ".concat(t), o - r.x + u + 30, c - r.y + u + 17);
            },
          },
        ]),
        i
      );
    })(),
    tt = (function () {
      d(i, T);
      var e = f(i);
      function i() {
        var t;
        return (
          l(this, i),
          ((t = e.call(this, 0, 60, 200, 13, 2, "killui")).padding = 13),
          (t.kills = 0),
          t
        );
      }
      return (
        c(i, [
          {
            key: "init",
            value: function (t) {
              this.ammoImage = new Q(15, 100, 216, 0, 18, 23, 1, "coin", H);
            },
          },
          {
            key: "setKills",
            value: function (t) {
              this.kills = t;
            },
          },
          {
            key: "addKill",
            value: function () {
              this.kills += 1;
            },
          },
          {
            key: "render",
            value: function (t) {
              var e = t.canvas,
                i = t.ctx,
                n = t.deltaTime,
                a = t.InputManager,
                s = t.GameManager,
                r = t.Camera,
                o = this.x,
                c = this.y,
                u = (this.scale, this.padding),
                t = this.kills;
              this.ammoImage.render({
                canvas: e,
                ctx: i,
                deltaTime: n,
                InputManager: a,
                GameManager: s,
                Camera: r,
              }),
                (i.font = "18px Verdana"),
                (i.fillStyle = "black"),
                (i.textAlign = "left"),
                i.fillText("𝗑 ".concat(t), o - r.x + u + 30, c - r.y + u + 44);
            },
          },
        ]),
        i
      );
    })(),
    et = (function () {
      d(i, T);
      var e = f(i);
      function i() {
        var t;
        return (
          l(this, i),
          ((t = e.call(this, 0, 60, 200, 13, 2, "ammoui")).padding = 13),
          (t.ammo = 30),
          t
        );
      }
      return (
        c(i, [
          {
            key: "init",
            value: function (t) {
              this.ammoImage = new Q(15, 70, 90, 230, 22, 24, 1, "coin", H);
            },
          },
          {
            key: "setAmmo",
            value: function (t) {
              this.ammo = t;
            },
          },
          {
            key: "render",
            value: function (t) {
              var e = t.canvas,
                i = t.ctx,
                n = t.deltaTime,
                a = t.InputManager,
                s = t.GameManager,
                r = t.Camera,
                o = this.x,
                c = this.y,
                u = (this.scale, this.padding),
                t = this.ammo;
              this.ammoImage;
              this.ammoImage.render({
                canvas: e,
                ctx: i,
                deltaTime: n,
                InputManager: a,
                GameManager: s,
                Camera: r,
              }),
                (i.font = "18px Verdana"),
                (i.fillStyle = "black"),
                (i.textAlign = "left"),
                i.fillText("𝗑 ".concat(t), o - r.x + u + 30, c - r.y + u + 17);
            },
          },
        ]),
        i
      );
    })(),
    it = (function () {
      d(i, T);
      var e = f(i);
      function i() {
        var t;
        return (
          l(this, i),
          ((t = e.call(this, 0, 30, 200, 13, 2, "rageui")).isActive = !1),
          t
        );
      }
      return (
        c(i, [
          {
            key: "init",
            value: function (t) {
              this.rageImage = new Q(
                0,
                0,
                0,
                0,
                640,
                480,
                1,
                "rageui",
                "rage-kill/rk/rage.png"
              );
            },
          },
          {
            key: "toggleRage",
            value: function () {
              this.isActive = !this.isActive;
            },
          },
          {
            key: "render",
            value: function (t) {
              var e = t.canvas,
                i = t.ctx,
                n = t.deltaTime,
                a = t.InputManager,
                s = t.GameManager,
                t = t.Camera;
              this.isActive &&
                this.rageImage.render({
                  canvas: e,
                  ctx: i,
                  deltaTime: n,
                  InputManager: a,
                  GameManager: s,
                  Camera: t,
                });
            },
          },
        ]),
        i
      );
    })(),
    nt = (function () {
      d(o, T);
      var r = f(o);
      function o(t, e, i, n, a, s) {
        l(this, o),
          ((a = r.call(this, t, e, i, n, a, s))._text = "button"),
          (a._hoverBackgroundColor = "red");
        s = { textSize: 13, textColor: "#ffffff", backgroundColor: "blue" };
        return (
          (a._buttonStates = {
            idle: u({}, s),
            hover: u({}, s),
            clicked: u({}, s),
            disabled: u({}, s),
          }),
          (a._buttonProps = a._buttonStates.idle),
          (a.collider = new B(0, 0, a.width, a.height, a.scale)),
          (a._events = { onclick: null, onhover: null, onidle: null }),
          a
        );
      }
      return (
        c(o, [
          {
            key: "setText",
            value: function (t) {
              this._text = t;
            },
          },
          {
            key: "setButtonState",
            value: function (t) {
              if (!this._buttonStates[t])
                throw new Error("Invalid button state");
              this._buttonProps = this._buttonStates[t];
            },
          },
          {
            key: "setButtonProps",
            value: function (t, e) {
              var i = e.text,
                n = e.textSize,
                a = e.textColor,
                e = e.backgroundColor;
              if (!this._buttonStates[t])
                throw new Error("Invalid button state");
              this._buttonStates[t] = {
                text: i,
                textSize: n,
                textColor: a,
                backgroundColor: e,
              };
            },
          },
          {
            key: "addEvent",
            value: function (t, e) {
              this._events[t] = e;
            },
          },
          {
            key: "onClick",
            value: function () {
              this._events.onclick && this._events.onclick();
            },
          },
          {
            key: "onHover",
            value: function () {
              this._events.onhover && this._events.onhover();
            },
          },
          {
            key: "onIdle",
            value: function () {
              this._events.onidle && this._events.onidle();
            },
          },
          {
            key: "input",
            value: function (t) {
              t.canvas, t.ctx, t.deltaTime;
              var e,
                i,
                n,
                a,
                s = t.InputManager,
                r = (t.GameManager, t.Camera, s.getMousePosition());
              (e = r.x),
                (i = r.y),
                (a = (n = this).x + n.collider.xOffset * n.scale),
                (t =
                  n.x +
                  n.collider.xOffset * n.scale +
                  n.collider.width * n.scale),
                (r = n.y + n.collider.yOffset * n.scale),
                (n =
                  n.y +
                  n.collider.yOffset * n.scale +
                  n.collider.height * n.scale),
                e < t && a < e && i < n && r < i
                  ? s.isMouseUp()
                    ? this.onClick()
                    : this.onHover()
                  : this.onIdle();
            },
          },
          {
            key: "update",
            value: function (t) {
              t.canvas,
                t.ctx,
                t.deltaTime,
                t.InputManager,
                t.GameManager,
                t.Camera;
            },
          },
          {
            key: "render",
            value: function (t) {
              t.canvas;
              var e = t.ctx,
                i = (t.deltaTime, t.InputManager, t.GameManager, t.Camera),
                n = this.x,
                a = this.y,
                s = this.width,
                r = this.height,
                o = this.scale,
                c = this._buttonProps,
                u = this._text,
                h = c.textSize,
                t = c.textColor,
                c = c.backgroundColor;
              e.beginPath(),
                (e.fillStyle = c),
                e.rect(n - i.x, a - i.y, s * o, r * o),
                e.fill(),
                (e.font = "".concat(h, "px Verdana")),
                (e.fillStyle = t),
                (e.textAlign = "center"),
                e.fillText(
                  u,
                  n - i.x + (s * o) / 2,
                  a - i.y + (r * o) / 2 + h / 3
                ),
                e.closePath();
            },
          },
        ]),
        o
      );
    })(),
    at = (function () {
      d(e, nt);
      var t = f(e);
      function e() {
        return l(this, e), t.call(this, 520, 0, 120, 30, 1, "pause-button");
      }
      return (
        c(e, [
          {
            key: "init",
            value: function (t, e) {
              var i = this;
              this.setButtonProps("idle", {
                textSize: 19,
                textColor: "#ffffff",
                backgroundColor: "#C0DE5D",
              }),
                this.setButtonProps("hover", {
                  textSize: 19,
                  textColor: "#ffffff",
                  backgroundColor: "#A9BD68",
                }),
                this.setButtonProps("clicked", {
                  textSize: 19,
                  textColor: "#ffffff",
                  backgroundColor: "#ffffff",
                }),
                this.setText("Pause"),
                this.addEvent("onclick", function () {
                  i.setButtonState("clicked"),
                    e.togglePause(),
                    i.setText(e.isPaused() ? "Resume" : "Pause");
                }),
                this.addEvent("onidle", function () {
                  i.setButtonState("idle");
                }),
                this.addEvent("onhover", function () {
                  i.setButtonState("hover");
                });
            },
          },
        ]),
        e
      );
    })(),
    st = (function () {
      d(a, T);
      var n = f(a);
      function a(t, e) {
        var i;
        return (
          l(this, a),
          ((i = n.call(this, 0, 0, 0, 0, 1))._player = null),
          (i._goal = t),
          (i._nextLevel = e),
          i
        );
      }
      return (
        c(a, [
          {
            key: "init",
            value: function (t) {
              (this._killUi = t.findUiObjectsById("killui")[0]),
                (this._scoreUi = t.findUiObjectsById("scoreui")[0]);
            },
          },
          {
            key: "update",
            value: function (t) {
              t = t.GameManager;
              this._killUi.kills >= this._goal &&
                (t.setState({
                  score: this._scoreUi.score,
                  nextLevel: this._nextLevel,
                }),
                t.loadScene("victory"));
            },
          },
        ]),
        a
      );
    })(),
    rt = new I(
      "level-one",
      [
        [P, [0, 0, 648, 546, "level-1"]],
        [R, [140, 200, 8, 250]],
        [R, [140, 200, 28, 40]],
        [R, [140, 200, 500, 25]],
        [R, [1140, 200, 8, 250]],
        [R, [140, 655, 500, 25]],
        [R, [537, 394, 45, 20]],
        [R, [755, 394, 45, 20]],
        [R, [846, 394, 45, 20]],
        [R, [1061, 394, 45, 20]],
        [R, [1080, 394, 37, 30]],
        [R, [537, 394, 37, 30]],
        [R, [773, 394, 37, 30]],
        [R, [844, 394, 37, 30]],
        [R, [537, 394, 7, 130]],
        [R, [679, 394, 12, 130]],
        [R, [832, 394, 12, 130]],
        [R, [987, 394, 12, 130]],
        [R, [480, 460, 20, 45]],
        [R, [360, 470, 10, 30]],
        [R, [160, 380, 25, 95]],
        [R, [550, 555, 22, 45]],
        [R, [785, 555, 22, 45]],
        [R, [860, 555, 22, 45]],
        [R, [1090, 555, 22, 45]],
        [R, [652, 587, 10, 30]],
        [R, [710, 587, 10, 30]],
        [R, [960, 587, 10, 30]],
        [R, [1018, 587, 10, 30]],
        [Y, [345, 360]],
        [Y, [345, 550]],
        [Y, [205, 270]],
        [Y, [600, 520]],
        [Y, [750, 500]],
        [Y, [920, 500]],
        [Y, [1020, 350]],
        [N, [600, 350]],
        [N, [200, 600]],
        [q, [830, 300]],
        [q, [250, 500]],
        [q, [480, 600]],
        [q, [605, 600]],
        [W, [550, 300]],
        [V, [500, 300]],
        [st, [120, "level-two"]],
        [
          (ct = (function () {
            d(n, T);
            var i = f(n);
            function n(t) {
              var e;
              return (
                l(this, n),
                ((e = i.call(this, 0, 0, 0, 0, 0, "bgMusic"))._sound = t),
                e
              );
            }
            return (
              c(n, [
                {
                  key: "init",
                  value: function (t, e) {
                    (e.Sounds.getSound(this._sound).loop = !0),
                      (e.Sounds.getSound(this._sound).volume = 0.5),
                      e.Sounds.playSound(this._sound);
                  },
                },
                {
                  key: "onDestroy",
                  value: function (t, e) {
                    e.Sounds.stopAllSounds();
                  },
                },
              ]),
              n
            );
          })()),
          ["level-bg"],
        ],
      ],
      [
        [$, []],
        [Z, []],
        [at, []],
        [et, []],
        [tt, []],
        [it, []],
      ]
    ),
    ot = new I(
      "level-two",
      [
        [P, [0, 0, 648, 546, "level-2"]],
        [R, [140, 200, 8, 250]],
        [R, [140, 200, 28, 40]],
        [R, [140, 200, 500, 25]],
        [R, [1140, 200, 8, 250]],
        [R, [140, 655, 500, 25]],
        [R, [537, 394, 45, 20]],
        [R, [537, 434, 30, 40]],
        [R, [597, 434, 40, 17]],
        [R, [652, 434, 10, 41]],
        [R, [755, 394, 45, 20]],
        [R, [846, 394, 45, 20]],
        [R, [1061, 394, 45, 23]],
        [R, [773, 394, 37, 30]],
        [R, [844, 394, 37, 30]],
        [R, [824, 210, 33, 30]],
        [R, [537, 394, 7, 130]],
        [R, [679, 394, 12, 75]],
        [R, [832, 394, 12, 130]],
        [R, [987, 394, 12, 130]],
        [R, [480, 400, 20, 45]],
        [R, [333, 240, 20, 45]],
        [R, [290, 550, 10, 27]],
        [R, [160, 380, 25, 95]],
        [R, [785, 555, 22, 45]],
        [R, [1090, 555, 22, 45]],
        [R, [960, 587, 10, 30]],
        [R, [1018, 587, 10, 30]],
        [R, [433, 545, 10, 5]],
        [Y, [220, 290]],
        [Y, [425, 290]],
        [Y, [365, 580]],
        [Y, [750, 260]],
        [Y, [780, 480]],
        [Y, [930, 500]],
        [Y, [1060, 300]],
        [N, [635, 390]],
        [N, [250, 450]],
        [q, [470, 580]],
        [q, [570, 580]],
        [q, [900, 600]],
        [W, [1100, 500]],
        [V, [500, 300]],
        [st, [140, "level-three"]],
        [ct, ["level-bg"]],
      ],
      [
        [$, []],
        [Z, []],
        [at, []],
        [et, []],
        [tt, []],
        [it, []],
      ]
    ),
    st = new I(
      "level-three",
      [
        [P, [0, 0, 648, 546, "level-3"]],
        [R, [140, 200, 8, 250]],
        [R, [140, 200, 28, 40]],
        [R, [140, 200, 500, 25]],
        [R, [1140, 200, 8, 250]],
        [R, [140, 655, 500, 25]],
        [R, [537, 394, 45, 20]],
        [R, [537, 434, 30, 40]],
        [R, [597, 434, 40, 17]],
        [R, [652, 434, 10, 41]],
        [R, [755, 394, 200, 30]],
        [R, [599, 210, 8, 30]],
        [R, [897, 210, 8, 30]],
        [R, [679, 394, 12, 75]],
        [R, [832, 394, 12, 60]],
        [R, [987, 394, 12, 60]],
        [R, [480, 460, 20, 40]],
        [R, [308, 345, 40, 8]],
        [R, [363, 470, 8, 27]],
        [R, [160, 380, 25, 95]],
        [R, [960, 450, 10, 30]],
        [R, [861, 425, 22, 45]],
        [R, [700, 410, 22, 22]],
        [Y, [260, 380]],
        [Y, [335, 270]],
        [Y, [200, 590]],
        [Y, [590, 570]],
        [Y, [770, 470]],
        [Y, [1090, 575]],
        [Y, [1080, 295]],
        [N, [635, 390]],
        [N, [250, 600]],
        [q, [230, 260]],
        [q, [605, 470]],
        [q, [900, 600]],
        [q, [1e3, 300]],
        [W, [1100, 500]],
        [V, [500, 300]],
        [st, [150, "boss"]],
        [ct, ["level-bg"]],
      ],
      [
        [$, []],
        [Z, []],
        [at, []],
        [et, []],
        [tt, []],
        [it, []],
      ]
    ),
    V = new I(
      "boss",
      [
        [P, [0, 0, 648, 546, "boss"]],
        [R, [140, 200, 8, 250]],
        [R, [140, 200, 500, 25]],
        [R, [1140, 200, 8, 250]],
        [R, [140, 655, 500, 25]],
        [
          (function () {
            d(n, T);
            var i = f(n);
            function n(t, e) {
              return (
                l(this, n),
                ((e = i.call(this, t, e, 18, 23, 6, "boss")).direction =
                  "down"),
                (e.target = null),
                (e.speed = 25),
                (e.minimumDistance = 200),
                (e.isSpawning = !0),
                (e.isChasing = !1),
                (e.isDead = !1),
                (e.health = 100),
                (e.layer = 6),
                (e.DIRECTIONS = ["up", "right", "down", "left"]),
                (e.idleDirection = ""),
                (e.idleDistance = 0),
                (e.idleDx = 0),
                (e.idleDy = 0),
                e
              );
            }
            return (
              c(n, [
                {
                  key: "init",
                  value: function (t) {
                    var e = new Image();
                    (e.src = H),
                      (this.spriteImg = e),
                      (this.animator = new K(e));
                    var i = this.animator,
                      n = this.width,
                      a = this.height,
                      e = this.scale;
                    i.addAnimation(
                      "idle_down",
                      new w(216, 0, n, a, 7, 0.15, !0)
                    ),
                      i.addAnimation(
                        "idle_right",
                        new w(216, 23, n, a, 7, 0.15, !0)
                      ),
                      i.addAnimation(
                        "idle_up",
                        new w(216, 46, n, a, 7, 0.15, !0)
                      ),
                      i.addAnimation(
                        "idle_left",
                        new w(216, 69, n, a, 7, 0.15, !0)
                      ),
                      i.addAnimation(
                        "run_down",
                        new w(216, 92, n, a, 7, 0.15, !0)
                      ),
                      i.addAnimation(
                        "run_up",
                        new w(216, 138, n, a, 7, 0.15, !0)
                      ),
                      i.addAnimation(
                        "run_right",
                        new w(216, 115, n, a, 7, 0.15, !0)
                      ),
                      i.addAnimation(
                        "run_left",
                        new w(216, 161, n, a, 7, 0.15, !0)
                      ),
                      i.addAnimation(
                        "death_0",
                        new w(216, 184, n, a, 7, 0.15, !1)
                      ),
                      i.addAnimation(
                        "death_1",
                        new w(216, 207, n, a, 7, 0.15, !1)
                      ),
                      i.addAnimation(
                        "spawn",
                        new w(216, 230, n, a, 7, 0.3, !1)
                      ),
                      i.setAnimation("spawn"),
                      i.setActive(!0),
                      (this.collider = new B(5, 5, n - 10, a - 5, e)),
                      (this.target = t.findGameObjectsById("player")[0]);
                  },
                },
                {
                  key: "calculateDirection",
                  value: function () {
                    var t = this.target,
                      e = this.x;
                    t.x > e && (this.direction = "right"),
                      t.x < e && (this.direction = "left");
                  },
                },
                {
                  key: "update",
                  value: function (t) {
                    var e = this,
                      i = t.deltaTime,
                      n = t.GameManager,
                      a = this.x,
                      s = this.y,
                      r = (this.width, this.height, this.target),
                      o = this.isDead,
                      c = this.animator,
                      u = this.direction,
                      h = this.speed,
                      t = this.isSpawning;
                    if (r && !o)
                      if (t) c.hasAnimationFinished() && (this.isSpawning = !1);
                      else {
                        if (r.isDead)
                          return (
                            (this.isChasing = !1),
                            void c.setAnimation("idle_".concat(u))
                          );
                        var l = n.getCurrentScene();
                        this.isChasing = !0;
                        i = Math.moveTowards(r.x, r.y, a, s, h * i);
                        (this.x = i.x),
                          (this.y = i.y),
                          l.findGameObjectsById("wall").forEach(function (t) {
                            p(e, t) && ((e.x = a), (e.y = s));
                          }),
                          l.findGameObjectsById("bullet").forEach(function (t) {
                            p(e, t) &&
                              (l.removeGameObject(t),
                              e.health--,
                              e.health <= 0 &&
                                ((e.isDead = !0),
                                e.animator.setAnimation("death_0"),
                                setTimeout(function () {
                                  n.loadScene("win");
                                }, 2e3)));
                          }),
                          c.setAnimation("run_".concat(u)),
                          this.calculateDirection();
                      }
                    else c.setAnimation("death_0");
                  },
                },
                {
                  key: "render",
                  value: function (t) {
                    var e = t.canvas,
                      i = t.ctx,
                      n = t.deltaTime,
                      a = this.x,
                      s = this.y,
                      t = (this.width, this.height, this.scale);
                    (i.strokeStyle = "#000000"),
                      this.animator.render(n, e, i, a, s, t);
                  },
                },
              ]),
              n
            );
          })(),
          [280, 300],
        ],
        [Y, [265, 280]],
        [Y, [640, 420]],
        [Y, [400, 550]],
        [Y, [195, 590]],
        [Y, [820, 280]],
        [Y, [810, 560]],
        [Y, [1080, 430]],
        [N, [600, 350]],
        [N, [600, 350]],
        [N, [800, 500]],
        [N, [300, 600]],
        [q, [1050, 300]],
        [q, [250, 500]],
        [q, [210, 300]],
        [q, [190, 400]],
        [q, [200, 600]],
        [q, [1e3, 600]],
        [q, [1e3, 400]],
        [q, [1070, 550]],
        [V, [500, 300]],
        [ct, ["boss-bg"]],
      ],
      [
        [$, []],
        [Z, []],
        [at, []],
        [et, []],
        [tt, []],
        [it, []],
      ]
    ),
    Z = (function () {
      d(e, Q);
      var t = f(e);
      function e() {
        return (
          l(this, e), t.call(this, 108.5, 30, 0, 393, 141, 44, 3, "title", H)
        );
      }
      return e;
    })(),
    at = (function () {
      d(e, Q);
      var t = f(e);
      function e() {
        return (
          l(this, e), t.call(this, 144.5, 170, 0, 437, 117, 44, 3, "title", H)
        );
      }
      return e;
    })(),
    et = (function () {
      d(e, Q);
      var t = f(e);
      function e() {
        return (
          l(this, e), t.call(this, 12, 400, 90, 667, 23, 17, 3, "author", H)
        );
      }
      return e;
    })(),
    $ = new I(
      "menu",
      [[ct, ["menu"]]],
      [
        [
          (tt = (function () {
            d(o, T);
            var r = f(o);
            function o(t, e, i, n, a, s) {
              return (
                l(this, o),
                ((a = r.call(this, t, e, i, n, a, "rect")).color = s),
                a
              );
            }
            return (
              c(o, [
                {
                  key: "render",
                  value: function (t) {
                    t.canvas;
                    var e = t.ctx,
                      i =
                        (t.deltaTime, t.InputManager, t.GameManager, t.Camera),
                      n = this.x,
                      a = this.y,
                      s = this.scale,
                      r = this.color,
                      o = this.width,
                      t = this.height;
                    e.beginPath(),
                      (e.fillStyle = r),
                      e.rect(n - i.x, a - i.y, o * s, t * s),
                      e.fill(),
                      e.closePath();
                  },
                },
              ]),
              o
            );
          })()),
          [0, 0, 640, 480, 2, "#000000"],
        ],
        [Z, []],
        [at, []],
        [et, []],
        [
          (function () {
            d(e, nt);
            var t = f(e);
            function e() {
              return (
                l(this, e), t.call(this, 260, 330, 120, 30, 1, "play-button")
              );
            }
            return (
              c(e, [
                {
                  key: "init",
                  value: function (t, e) {
                    var i = this;
                    this.setButtonProps("idle", {
                      textSize: 19,
                      textColor: "#ffffff",
                      backgroundColor: "#DC5B3E",
                    }),
                      this.setButtonProps("hover", {
                        textSize: 19,
                        textColor: "#ffffff",
                        backgroundColor: "#FF5254",
                      }),
                      this.setButtonProps("clicked", {
                        textSize: 19,
                        textColor: "#ffffff",
                        backgroundColor: "#ffffff",
                      }),
                      this.setText("New Game"),
                      this.addEvent("onclick", function () {
                        i.setButtonState("clicked"), e.loadScene("level-one");
                      }),
                      this.addEvent("onidle", function () {
                        i.setButtonState("idle");
                      }),
                      this.addEvent("onhover", function () {
                        i.setButtonState("hover");
                      });
                  },
                },
              ]),
              e
            );
          })(),
          [],
        ],
      ]
    ),
    it = (function () {
      d(r, Q);
      var t = f(r);
      function r() {
        return (
          l(this, r), t.call(this, 166, 112, 211, 541, 77, 29, 4, "title", H)
        );
      }
      return (
        c(r, [
          {
            key: "init",
            value: function (t, e) {
              var i = e.getState(),
                e = i.score,
                i = i.nextLevel;
              (this._score = e), (this._nextLevel = i);
            },
          },
          {
            key: "render",
            value: function (t) {
              var e = t.canvas,
                i = t.ctx,
                n = t.deltaTime,
                a = t.InputManager,
                s = t.GameManager,
                t = t.Camera;
              m(o(r.prototype), "render", this).call(this, {
                canvas: e,
                ctx: i,
                deltaTime: n,
                InputManager: a,
                GameManager: s,
                Camera: t,
              });
              (n = this.x), (a = this.y), (s = this._score);
              (i.font = "30px Verdana"),
                (i.fillStyle = "white"),
                (i.textAlign = "right"),
                i.fillText("".concat(s), n + 260 - t.x, a + 106 - t.y);
            },
          },
        ]),
        r
      );
    })(),
    ct = (function () {
      d(e, Q);
      var t = f(e);
      function e() {
        return (
          l(this, e), t.call(this, 60, 336, 216, 597, 36, 11, 4, "title", H)
        );
      }
      return e;
    })(),
    Z = (function () {
      d(e, Q);
      var t = f(e);
      function e() {
        return (
          l(this, e), t.call(this, 428, 316, 288, 592, 38, 22, 4, "title", H)
        );
      }
      return e;
    })(),
    at = (function () {
      d(e, Q);
      var t = f(e);
      function e() {
        return (
          l(this, e), t.call(this, 32, 56, 198, 644, 144, 92, 4, "title", H)
        );
      }
      return e;
    })(),
    Z = new I(
      "victory",
      [
        [
          (et = (function () {
            d(n, T);
            var i = f(n);
            function n(t) {
              var e;
              return (
                l(this, n), ((e = i.call(this, 0, 0, 0, 0, 0)).type = t), e
              );
            }
            return (
              c(n, [
                {
                  key: "init",
                  value: function (t, e) {
                    (this._nextLevel = e.getState().nextLevel),
                      e.Sounds.playSound("victory");
                  },
                },
                {
                  key: "input",
                  value: function (t) {
                    t.canvas, t.ctx, t.deltaTime;
                    var e = t.InputManager,
                      i = t.GameManager;
                    t.Camera;
                    e.isKeyUp("Escape") && i.loadScene("menu"),
                      "win" !== this.type &&
                        e.isKeyUp("Enter") &&
                        i.loadScene(this._nextLevel);
                  },
                },
                {
                  key: "onDestroy",
                  value: function (t, e) {
                    e.Sounds.stopSound("victory");
                  },
                },
              ]),
              n
            );
          })()),
          ["default"],
        ],
      ],
      [
        [tt, [0, 0, 640, 480, 2, "#000000"]],
        [it, []],
        [ct, []],
        [Z, []],
      ]
    ),
    tt = new I(
      "win",
      [[et, ["win"]]],
      [
        [tt, [0, 0, 640, 480, 2, "#000000"]],
        [at, []],
      ]
    ),
    at = document.getElementById("canvas");
  (at.width = 640),
    (at.height = 480),
    (x = (b = at).getContext("2d")),
    (_ = x.imageSmoothingEnabled = !1),
    (O = 0),
    (S = new t(b)),
    (A = new M(
      [$, V, tt, st, Z, rt, ot],
      { score: 0, nextScene: "level-one" },
      b
    )),
    (j = new j()).addSounds([
      ["menu.mp3", "menu"],
      ["level-music.wav", "level-bg"],
      ["gunshot.wav", "gunshot"],
      ["ammo.wav", "ammo"],
      ["coin.wav", "coin"],
      ["health.wav", "health"],
      ["hurt.wav", "hurt"],
      ["splat.wav", "splat"],
      ["victory.wav", "victory"],
      ["boss-music.wav", "boss-bg"],
      ["rage.wav", "rage"],
    ]),
    (A.pauseGame = function () {
      return (_ = !0);
    }),
    (A.resumeGame = function () {
      return (_ = !1);
    }),
    (A.togglePause = function () {
      return (_ = !_);
    }),
    (A.isPaused = function () {
      return _;
    }),
    (A.Sounds = j),
    (j = function t() {
      var e = performance.now();
      k = A.getCurrentScene().camera;
      var i,
        n,
        a,
        s = (e - O) / 1e3;
      (i = s),
        _ ||
          A.getCurrentScene().gameObjects.forEach(function (t) {
            t.input({
              canvas: b,
              ctx: x,
              deltaTime: i,
              InputManager: S,
              GameManager: A,
              Camera: k,
            });
          }),
        A.getCurrentScene().uiObjects.forEach(function (t) {
          t.input({
            canvas: b,
            ctx: x,
            deltaTime: i,
            InputManager: S,
            GameManager: A,
            Camera: k,
          });
        }),
        (n = s),
        _ ||
          A.getCurrentScene().gameObjects.forEach(function (t) {
            t.update({
              canvas: b,
              ctx: x,
              deltaTime: n,
              InputManager: S,
              GameManager: A,
              Camera: k,
            });
          }),
        A.getCurrentScene().uiObjects.forEach(function (t) {
          t.update({
            canvas: b,
            ctx: x,
            deltaTime: n,
            InputManager: S,
            GameManager: A,
            Camera: k,
          });
        }),
        k.update(n, A.getCurrentScene()),
        (a = s),
        _ ||
          (x.setTransform(1, 0, 0, 1, 0, 0),
          x.beginPath(),
          x.clearRect(0, 0, b.width, b.height),
          x.closePath(),
          x.translate(k.x, k.y),
          A.getCurrentScene().gameObjects.forEach(function (t) {
            t.render({
              canvas: b,
              ctx: x,
              deltaTime: a,
              InputManager: S,
              GameManager: A,
              Camera: k,
            });
          })),
        A.getCurrentScene().uiObjects.forEach(function (t) {
          t.render({
            canvas: b,
            ctx: x,
            deltaTime: a,
            InputManager: S,
            GameManager: A,
            Camera: k,
          });
        }),
        A.updateScene(),
        (O = e),
        requestAnimationFrame(t);
    }),
    A.initScene(),
    (O = performance.now()),
    requestAnimationFrame(j);
})();
