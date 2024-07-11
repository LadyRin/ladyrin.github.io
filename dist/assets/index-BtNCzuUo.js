const __vite__fileDeps = ['assets/AboutPage-BgfhWQYM.js', 'assets/AboutPage-upmSvS6r.css'],
  __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i])
var Li = Object.defineProperty
var Fi = (e, t, n) =>
  t in e ? Li(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)
var ye = (e, t, n) => (Fi(e, typeof t != 'symbol' ? t + '' : t, n), n)
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o)
  new MutationObserver((o) => {
    for (const r of o)
      if (r.type === 'childList')
        for (const i of r.addedNodes) i.tagName === 'LINK' && i.rel === 'modulepreload' && s(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(o) {
    const r = {}
    return (
      o.integrity && (r.integrity = o.integrity),
      o.referrerPolicy && (r.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (r.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (r.credentials = 'omit')
          : (r.credentials = 'same-origin'),
      r
    )
  }
  function s(o) {
    if (o.ep) return
    o.ep = !0
    const r = n(o)
    fetch(o.href, r)
  }
})()
/**
 * @vue/shared v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Ns(e, t) {
  const n = new Set(e.split(','))
  return (s) => n.has(s)
}
const ie = {},
  Ht = [],
  Le = () => {},
  Di = () => !1,
  Wn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Ls = (e) => e.startsWith('onUpdate:'),
  ve = Object.assign,
  Fs = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  ji = Object.prototype.hasOwnProperty,
  X = (e, t) => ji.call(e, t),
  V = Array.isArray,
  Vt = (e) => _n(e) === '[object Map]',
  Kn = (e) => _n(e) === '[object Set]',
  uo = (e) => _n(e) === '[object Date]',
  W = (e) => typeof e == 'function',
  de = (e) => typeof e == 'string',
  st = (e) => typeof e == 'symbol',
  le = (e) => e !== null && typeof e == 'object',
  ur = (e) => (le(e) || W(e)) && W(e.then) && W(e.catch),
  ar = Object.prototype.toString,
  _n = (e) => ar.call(e),
  Hi = (e) => _n(e).slice(8, -1),
  fr = (e) => _n(e) === '[object Object]',
  Ds = (e) => de(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  sn = Ns(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  zn = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Vi = /-(\w)/g,
  Be = zn((e) => e.replace(Vi, (t, n) => (n ? n.toUpperCase() : ''))),
  Bi = /\B([A-Z])/g,
  wt = zn((e) => e.replace(Bi, '-$1').toLowerCase()),
  qn = zn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  ls = zn((e) => (e ? `on${qn(e)}` : '')),
  Xe = (e, t) => !Object.is(e, t),
  Mn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  dr = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: s, value: n })
  },
  vs = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let ao
const hr = () =>
  ao ||
  (ao =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function ot(e) {
  if (V(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        o = de(s) ? zi(s) : ot(s)
      if (o) for (const r in o) t[r] = o[r]
    }
    return t
  } else if (de(e) || le(e)) return e
}
const Ui = /;(?![^(]*\))/g,
  Wi = /:([^]+)/,
  Ki = /\/\*[^]*?\*\//g
function zi(e) {
  const t = {}
  return (
    e
      .replace(Ki, '')
      .split(Ui)
      .forEach((n) => {
        if (n) {
          const s = n.split(Wi)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function Fe(e) {
  let t = ''
  if (de(e)) t = e
  else if (V(e))
    for (let n = 0; n < e.length; n++) {
      const s = Fe(e[n])
      s && (t += s + ' ')
    }
  else if (le(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const qi = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Gi = Ns(qi)
function pr(e) {
  return !!e || e === ''
}
function Yi(e, t) {
  if (e.length !== t.length) return !1
  let n = !0
  for (let s = 0; n && s < e.length; s++) n = Gn(e[s], t[s])
  return n
}
function Gn(e, t) {
  if (e === t) return !0
  let n = uo(e),
    s = uo(t)
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1
  if (((n = st(e)), (s = st(t)), n || s)) return e === t
  if (((n = V(e)), (s = V(t)), n || s)) return n && s ? Yi(e, t) : !1
  if (((n = le(e)), (s = le(t)), n || s)) {
    if (!n || !s) return !1
    const o = Object.keys(e).length,
      r = Object.keys(t).length
    if (o !== r) return !1
    for (const i in e) {
      const c = e.hasOwnProperty(i),
        l = t.hasOwnProperty(i)
      if ((c && !l) || (!c && l) || !Gn(e[i], t[i])) return !1
    }
  }
  return String(e) === String(t)
}
function mr(e, t) {
  return e.findIndex((n) => Gn(n, t))
}
const rt = (e) =>
    de(e)
      ? e
      : e == null
        ? ''
        : V(e) || (le(e) && (e.toString === ar || !W(e.toString)))
          ? JSON.stringify(e, gr, 2)
          : String(e),
  gr = (e, t) =>
    t && t.__v_isRef
      ? gr(e, t.value)
      : Vt(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, o], r) => ((n[cs(s, r) + ' =>'] = o), n),
              {}
            )
          }
        : Kn(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => cs(n)) }
          : st(t)
            ? cs(t)
            : le(t) && !V(t) && !fr(t)
              ? String(t)
              : t,
  cs = (e, t = '') => {
    var n
    return st(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Oe
class vr {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Oe),
      !t && Oe && (this.index = (Oe.scopes || (Oe.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = Oe
      try {
        return (Oe = this), t()
      } finally {
        Oe = n
      }
    }
  }
  on() {
    Oe = this
  }
  off() {
    Oe = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (this.scopes) for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop()
        o && o !== this && ((this.parent.scopes[this.index] = o), (o.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function _r(e) {
  return new vr(e)
}
function Xi(e, t = Oe) {
  t && t.active && t.effects.push(e)
}
function yr() {
  return Oe
}
function Ji(e) {
  Oe && Oe.cleanups.push(e)
}
let At
class js {
  constructor(t, n, s, o) {
    ;(this.fn = t),
      (this.trigger = n),
      (this.scheduler = s),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      Xi(this, o)
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      ;(this._dirtyLevel = 1), bt()
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t]
        if (n.computed && (Zi(n.computed), this._dirtyLevel >= 4)) break
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Ct()
    }
    return this._dirtyLevel >= 4
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = vt,
      n = At
    try {
      return (vt = !0), (At = this), this._runnings++, fo(this), this.fn()
    } finally {
      ho(this), this._runnings--, (At = n), (vt = t)
    }
  }
  stop() {
    this.active && (fo(this), ho(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function Zi(e) {
  return e.value
}
function fo(e) {
  e._trackId++, (e._depsLength = 0)
}
function ho(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) wr(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function wr(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let vt = !0,
  _s = 0
const br = []
function bt() {
  br.push(vt), (vt = !1)
}
function Ct() {
  const e = br.pop()
  vt = e === void 0 ? !0 : e
}
function Hs() {
  _s++
}
function Vs() {
  for (_s--; !_s && ys.length; ) ys.shift()()
}
function Cr(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const s = e.deps[e._depsLength]
    s !== t ? (s && wr(s, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const ys = []
function Er(e, t, n) {
  Hs()
  for (const s of e.keys()) {
    let o
    s._dirtyLevel < t &&
      (o ?? (o = e.get(s) === s._trackId)) &&
      (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), (s._dirtyLevel = t)),
      s._shouldSchedule &&
        (o ?? (o = e.get(s) === s._trackId)) &&
        (s.trigger(),
        (!s._runnings || s.allowRecurse) &&
          s._dirtyLevel !== 2 &&
          ((s._shouldSchedule = !1), s.scheduler && ys.push(s.scheduler)))
  }
  Vs()
}
const Sr = (e, t) => {
    const n = new Map()
    return (n.cleanup = e), (n.computed = t), n
  },
  Fn = new WeakMap(),
  It = Symbol(''),
  ws = Symbol('')
function Ae(e, t, n) {
  if (vt && At) {
    let s = Fn.get(e)
    s || Fn.set(e, (s = new Map()))
    let o = s.get(n)
    o || s.set(n, (o = Sr(() => s.delete(n)))), Cr(At, o)
  }
}
function nt(e, t, n, s, o, r) {
  const i = Fn.get(e)
  if (!i) return
  let c = []
  if (t === 'clear') c = [...i.values()]
  else if (n === 'length' && V(e)) {
    const l = Number(s)
    i.forEach((a, u) => {
      ;(u === 'length' || (!st(u) && u >= l)) && c.push(a)
    })
  } else
    switch ((n !== void 0 && c.push(i.get(n)), t)) {
      case 'add':
        V(e) ? Ds(n) && c.push(i.get('length')) : (c.push(i.get(It)), Vt(e) && c.push(i.get(ws)))
        break
      case 'delete':
        V(e) || (c.push(i.get(It)), Vt(e) && c.push(i.get(ws)))
        break
      case 'set':
        Vt(e) && c.push(i.get(It))
        break
    }
  Hs()
  for (const l of c) l && Er(l, 4)
  Vs()
}
function Qi(e, t) {
  const n = Fn.get(e)
  return n && n.get(t)
}
const el = Ns('__proto__,__v_isRef,__isVue'),
  xr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(st)
  ),
  po = tl()
function tl() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const s = J(this)
        for (let r = 0, i = this.length; r < i; r++) Ae(s, 'get', r + '')
        const o = s[t](...n)
        return o === -1 || o === !1 ? s[t](...n.map(J)) : o
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        bt(), Hs()
        const s = J(this)[t].apply(this, n)
        return Vs(), Ct(), s
      }
    }),
    e
  )
}
function nl(e) {
  st(e) || (e = String(e))
  const t = J(this)
  return Ae(t, 'has', e), t.hasOwnProperty(e)
}
class kr {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, s) {
    const o = this._isReadonly,
      r = this._isShallow
    if (n === '__v_isReactive') return !o
    if (n === '__v_isReadonly') return o
    if (n === '__v_isShallow') return r
    if (n === '__v_raw')
      return s === (o ? (r ? ml : Ir) : r ? Ar : Pr).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const i = V(t)
    if (!o) {
      if (i && X(po, n)) return Reflect.get(po, n, s)
      if (n === 'hasOwnProperty') return nl
    }
    const c = Reflect.get(t, n, s)
    return (st(n) ? xr.has(n) : el(n)) || (o || Ae(t, 'get', n), r)
      ? c
      : he(c)
        ? i && Ds(n)
          ? c
          : c.value
        : le(c)
          ? o
            ? Or(c)
            : yn(c)
          : c
  }
}
class Rr extends kr {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, o) {
    let r = t[n]
    if (!this._isShallow) {
      const l = fn(r)
      if ((!Dn(s) && !fn(s) && ((r = J(r)), (s = J(s))), !V(t) && he(r) && !he(s)))
        return l ? !1 : ((r.value = s), !0)
    }
    const i = V(t) && Ds(n) ? Number(n) < t.length : X(t, n),
      c = Reflect.set(t, n, s, o)
    return t === J(o) && (i ? Xe(s, r) && nt(t, 'set', n, s) : nt(t, 'add', n, s)), c
  }
  deleteProperty(t, n) {
    const s = X(t, n)
    t[n]
    const o = Reflect.deleteProperty(t, n)
    return o && s && nt(t, 'delete', n, void 0), o
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!st(n) || !xr.has(n)) && Ae(t, 'has', n), s
  }
  ownKeys(t) {
    return Ae(t, 'iterate', V(t) ? 'length' : It), Reflect.ownKeys(t)
  }
}
class sl extends kr {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const ol = new Rr(),
  rl = new sl(),
  il = new Rr(!0)
const Bs = (e) => e,
  Yn = (e) => Reflect.getPrototypeOf(e)
function xn(e, t, n = !1, s = !1) {
  e = e.__v_raw
  const o = J(e),
    r = J(t)
  n || (Xe(t, r) && Ae(o, 'get', t), Ae(o, 'get', r))
  const { has: i } = Yn(o),
    c = s ? Bs : n ? Ks : dn
  if (i.call(o, t)) return c(e.get(t))
  if (i.call(o, r)) return c(e.get(r))
  e !== o && e.get(t)
}
function kn(e, t = !1) {
  const n = this.__v_raw,
    s = J(n),
    o = J(e)
  return (
    t || (Xe(e, o) && Ae(s, 'has', e), Ae(s, 'has', o)), e === o ? n.has(e) : n.has(e) || n.has(o)
  )
}
function Rn(e, t = !1) {
  return (e = e.__v_raw), !t && Ae(J(e), 'iterate', It), Reflect.get(e, 'size', e)
}
function mo(e) {
  e = J(e)
  const t = J(this)
  return Yn(t).has.call(t, e) || (t.add(e), nt(t, 'add', e, e)), this
}
function go(e, t) {
  t = J(t)
  const n = J(this),
    { has: s, get: o } = Yn(n)
  let r = s.call(n, e)
  r || ((e = J(e)), (r = s.call(n, e)))
  const i = o.call(n, e)
  return n.set(e, t), r ? Xe(t, i) && nt(n, 'set', e, t) : nt(n, 'add', e, t), this
}
function vo(e) {
  const t = J(this),
    { has: n, get: s } = Yn(t)
  let o = n.call(t, e)
  o || ((e = J(e)), (o = n.call(t, e))), s && s.call(t, e)
  const r = t.delete(e)
  return o && nt(t, 'delete', e, void 0), r
}
function _o() {
  const e = J(this),
    t = e.size !== 0,
    n = e.clear()
  return t && nt(e, 'clear', void 0, void 0), n
}
function Pn(e, t) {
  return function (s, o) {
    const r = this,
      i = r.__v_raw,
      c = J(i),
      l = t ? Bs : e ? Ks : dn
    return !e && Ae(c, 'iterate', It), i.forEach((a, u) => s.call(o, l(a), l(u), r))
  }
}
function An(e, t, n) {
  return function (...s) {
    const o = this.__v_raw,
      r = J(o),
      i = Vt(r),
      c = e === 'entries' || (e === Symbol.iterator && i),
      l = e === 'keys' && i,
      a = o[e](...s),
      u = n ? Bs : t ? Ks : dn
    return (
      !t && Ae(r, 'iterate', l ? ws : It),
      {
        next() {
          const { value: h, done: p } = a.next()
          return p ? { value: h, done: p } : { value: c ? [u(h[0]), u(h[1])] : u(h), done: p }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function ut(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function ll() {
  const e = {
      get(r) {
        return xn(this, r)
      },
      get size() {
        return Rn(this)
      },
      has: kn,
      add: mo,
      set: go,
      delete: vo,
      clear: _o,
      forEach: Pn(!1, !1)
    },
    t = {
      get(r) {
        return xn(this, r, !1, !0)
      },
      get size() {
        return Rn(this)
      },
      has: kn,
      add: mo,
      set: go,
      delete: vo,
      clear: _o,
      forEach: Pn(!1, !0)
    },
    n = {
      get(r) {
        return xn(this, r, !0)
      },
      get size() {
        return Rn(this, !0)
      },
      has(r) {
        return kn.call(this, r, !0)
      },
      add: ut('add'),
      set: ut('set'),
      delete: ut('delete'),
      clear: ut('clear'),
      forEach: Pn(!0, !1)
    },
    s = {
      get(r) {
        return xn(this, r, !0, !0)
      },
      get size() {
        return Rn(this, !0)
      },
      has(r) {
        return kn.call(this, r, !0)
      },
      add: ut('add'),
      set: ut('set'),
      delete: ut('delete'),
      clear: ut('clear'),
      forEach: Pn(!0, !0)
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      ;(e[r] = An(r, !1, !1)),
        (n[r] = An(r, !0, !1)),
        (t[r] = An(r, !1, !0)),
        (s[r] = An(r, !0, !0))
    }),
    [e, n, t, s]
  )
}
const [cl, ul, al, fl] = ll()
function Us(e, t) {
  const n = t ? (e ? fl : al) : e ? ul : cl
  return (s, o, r) =>
    o === '__v_isReactive'
      ? !e
      : o === '__v_isReadonly'
        ? e
        : o === '__v_raw'
          ? s
          : Reflect.get(X(n, o) && o in s ? n : s, o, r)
}
const dl = { get: Us(!1, !1) },
  hl = { get: Us(!1, !0) },
  pl = { get: Us(!0, !1) }
const Pr = new WeakMap(),
  Ar = new WeakMap(),
  Ir = new WeakMap(),
  ml = new WeakMap()
function gl(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function vl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : gl(Hi(e))
}
function yn(e) {
  return fn(e) ? e : Ws(e, !1, ol, dl, Pr)
}
function Mr(e) {
  return Ws(e, !1, il, hl, Ar)
}
function Or(e) {
  return Ws(e, !0, rl, pl, Ir)
}
function Ws(e, t, n, s, o) {
  if (!le(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const r = o.get(e)
  if (r) return r
  const i = vl(e)
  if (i === 0) return e
  const c = new Proxy(e, i === 2 ? s : n)
  return o.set(e, c), c
}
function Mt(e) {
  return fn(e) ? Mt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function fn(e) {
  return !!(e && e.__v_isReadonly)
}
function Dn(e) {
  return !!(e && e.__v_isShallow)
}
function $r(e) {
  return e ? !!e.__v_raw : !1
}
function J(e) {
  const t = e && e.__v_raw
  return t ? J(t) : e
}
function tt(e) {
  return Object.isExtensible(e) && dr(e, '__v_skip', !0), e
}
const dn = (e) => (le(e) ? yn(e) : e),
  Ks = (e) => (le(e) ? Or(e) : e)
class Tr {
  constructor(t, n, s, o) {
    ;(this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new js(
        () => t(this._value),
        () => on(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = s)
  }
  get value() {
    const t = J(this)
    return (
      (!t._cacheable || t.effect.dirty) && Xe(t._value, (t._value = t.effect.run())) && on(t, 4),
      zs(t),
      t.effect._dirtyLevel >= 2 && on(t, 2),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
  get _dirty() {
    return this.effect.dirty
  }
  set _dirty(t) {
    this.effect.dirty = t
  }
}
function _l(e, t, n = !1) {
  let s, o
  const r = W(e)
  return r ? ((s = e), (o = Le)) : ((s = e.get), (o = e.set)), new Tr(s, o, r || !o, n)
}
function zs(e) {
  var t
  vt &&
    At &&
    ((e = J(e)),
    Cr(
      At,
      (t = e.dep) != null ? t : (e.dep = Sr(() => (e.dep = void 0), e instanceof Tr ? e : void 0))
    ))
}
function on(e, t = 4, n) {
  e = J(e)
  const s = e.dep
  s && Er(s, t)
}
function he(e) {
  return !!(e && e.__v_isRef === !0)
}
function q(e) {
  return Lr(e, !1)
}
function Nr(e) {
  return Lr(e, !0)
}
function Lr(e, t) {
  return he(e) ? e : new yl(e, t)
}
class yl {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : J(t)),
      (this._value = n ? t : dn(t))
  }
  get value() {
    return zs(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || Dn(t) || fn(t)
    ;(t = n ? t : J(t)),
      Xe(t, this._rawValue) && ((this._rawValue = t), (this._value = n ? t : dn(t)), on(this, 4))
  }
}
function re(e) {
  return he(e) ? e.value : e
}
const wl = {
  get: (e, t, n) => re(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t]
    return he(o) && !he(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, s)
  }
}
function Fr(e) {
  return Mt(e) ? e : new Proxy(e, wl)
}
class bl {
  constructor(t) {
    ;(this.dep = void 0), (this.__v_isRef = !0)
    const { get: n, set: s } = t(
      () => zs(this),
      () => on(this)
    )
    ;(this._get = n), (this._set = s)
  }
  get value() {
    return this._get()
  }
  set value(t) {
    this._set(t)
  }
}
function Cl(e) {
  return new bl(e)
}
function El(e) {
  const t = V(e) ? new Array(e.length) : {}
  for (const n in e) t[n] = xl(e, n)
  return t
}
class Sl {
  constructor(t, n, s) {
    ;(this._object = t), (this._key = n), (this._defaultValue = s), (this.__v_isRef = !0)
  }
  get value() {
    const t = this._object[this._key]
    return t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return Qi(J(this._object), this._key)
  }
}
function xl(e, t, n) {
  const s = e[t]
  return he(s) ? s : new Sl(e, t, n)
}
/**
 * @vue/runtime-core v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function _t(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (o) {
    Xn(o, t, n)
  }
}
function Ve(e, t, n, s) {
  if (W(e)) {
    const o = _t(e, t, n, s)
    return (
      o &&
        ur(o) &&
        o.catch((r) => {
          Xn(r, t, n)
        }),
      o
    )
  }
  if (V(e)) {
    const o = []
    for (let r = 0; r < e.length; r++) o.push(Ve(e[r], t, n, s))
    return o
  }
}
function Xn(e, t, n, s = !0) {
  const o = t ? t.vnode : null
  if (t) {
    let r = t.parent
    const i = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; r; ) {
      const a = r.ec
      if (a) {
        for (let u = 0; u < a.length; u++) if (a[u](e, i, c) === !1) return
      }
      r = r.parent
    }
    const l = t.appContext.config.errorHandler
    if (l) {
      bt(), _t(l, null, 10, [e, i, c]), Ct()
      return
    }
  }
  kl(e, n, o, s)
}
function kl(e, t, n, s = !0) {
  console.error(e)
}
let hn = !1,
  bs = !1
const Ee = []
let Ge = 0
const Bt = []
let ht = null,
  kt = 0
const Dr = Promise.resolve()
let qs = null
function Gs(e) {
  const t = qs || Dr
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Rl(e) {
  let t = Ge + 1,
    n = Ee.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      o = Ee[s],
      r = pn(o)
    r < e || (r === e && o.pre) ? (t = s + 1) : (n = s)
  }
  return t
}
function Ys(e) {
  ;(!Ee.length || !Ee.includes(e, hn && e.allowRecurse ? Ge + 1 : Ge)) &&
    (e.id == null ? Ee.push(e) : Ee.splice(Rl(e.id), 0, e), jr())
}
function jr() {
  !hn && !bs && ((bs = !0), (qs = Dr.then(Vr)))
}
function Pl(e) {
  const t = Ee.indexOf(e)
  t > Ge && Ee.splice(t, 1)
}
function Al(e) {
  V(e) ? Bt.push(...e) : (!ht || !ht.includes(e, e.allowRecurse ? kt + 1 : kt)) && Bt.push(e), jr()
}
function yo(e, t, n = hn ? Ge + 1 : 0) {
  for (; n < Ee.length; n++) {
    const s = Ee[n]
    if (s && s.pre) {
      if (e && s.id !== e.uid) continue
      Ee.splice(n, 1), n--, s()
    }
  }
}
function Hr(e) {
  if (Bt.length) {
    const t = [...new Set(Bt)].sort((n, s) => pn(n) - pn(s))
    if (((Bt.length = 0), ht)) {
      ht.push(...t)
      return
    }
    for (ht = t, kt = 0; kt < ht.length; kt++) ht[kt]()
    ;(ht = null), (kt = 0)
  }
}
const pn = (e) => (e.id == null ? 1 / 0 : e.id),
  Il = (e, t) => {
    const n = pn(e) - pn(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function Vr(e) {
  ;(bs = !1), (hn = !0), Ee.sort(Il)
  try {
    for (Ge = 0; Ge < Ee.length; Ge++) {
      const t = Ee[Ge]
      t && t.active !== !1 && _t(t, null, 14)
    }
  } finally {
    ;(Ge = 0), (Ee.length = 0), Hr(), (hn = !1), (qs = null), (Ee.length || Bt.length) && Vr()
  }
}
function Ml(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || ie
  let o = n
  const r = t.startsWith('update:'),
    i = r && t.slice(7)
  if (i && i in s) {
    const u = `${i === 'modelValue' ? 'model' : i}Modifiers`,
      { number: h, trim: p } = s[u] || ie
    p && (o = n.map((m) => (de(m) ? m.trim() : m))), h && (o = n.map(vs))
  }
  let c,
    l = s[(c = ls(t))] || s[(c = ls(Be(t)))]
  !l && r && (l = s[(c = ls(wt(t)))]), l && Ve(l, e, 6, o)
  const a = s[c + 'Once']
  if (a) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[c]) return
    ;(e.emitted[c] = !0), Ve(a, e, 6, o)
  }
}
function Br(e, t, n = !1) {
  const s = t.emitsCache,
    o = s.get(e)
  if (o !== void 0) return o
  const r = e.emits
  let i = {},
    c = !1
  if (!W(e)) {
    const l = (a) => {
      const u = Br(a, t, !0)
      u && ((c = !0), ve(i, u))
    }
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l)
  }
  return !r && !c
    ? (le(e) && s.set(e, null), null)
    : (V(r) ? r.forEach((l) => (i[l] = null)) : ve(i, r), le(e) && s.set(e, i), i)
}
function Jn(e, t) {
  return !e || !Wn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      X(e, t[0].toLowerCase() + t.slice(1)) || X(e, wt(t)) || X(e, t))
}
let xe = null,
  Zn = null
function jn(e) {
  const t = xe
  return (xe = e), (Zn = (e && e.type.__scopeId) || null), t
}
function wn(e) {
  Zn = e
}
function bn() {
  Zn = null
}
function Ol(e, t = xe, n) {
  if (!t || e._n) return e
  const s = (...o) => {
    s._d && Io(-1)
    const r = jn(t)
    let i
    try {
      i = e(...o)
    } finally {
      jn(r), s._d && Io(1)
    }
    return i
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function us(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: o,
      propsOptions: [r],
      slots: i,
      attrs: c,
      emit: l,
      render: a,
      renderCache: u,
      props: h,
      data: p,
      setupState: m,
      ctx: b,
      inheritAttrs: P
    } = e,
    T = jn(e)
  let v, _
  try {
    if (n.shapeFlag & 4) {
      const S = o || s,
        A = S
      ;(v = qe(a.call(A, S, u, h, m, p, b))), (_ = c)
    } else {
      const S = t
      ;(v = qe(S.length > 1 ? S(h, { attrs: c, slots: i, emit: l }) : S(h, null))),
        (_ = t.props ? c : $l(c))
    }
  } catch (S) {
    ;(ln.length = 0), Xn(S, e, 1), (v = ge(Ot))
  }
  let F = v
  if (_ && P !== !1) {
    const S = Object.keys(_),
      { shapeFlag: A } = F
    S.length && A & 7 && (r && S.some(Ls) && (_ = Tl(_, r)), (F = zt(F, _, !1, !0)))
  }
  return (
    n.dirs && ((F = zt(F, null, !1, !0)), (F.dirs = F.dirs ? F.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (F.transition = n.transition),
    (v = F),
    jn(T),
    v
  )
}
const $l = (e) => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || Wn(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Tl = (e, t) => {
    const n = {}
    for (const s in e) (!Ls(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function Nl(e, t, n) {
  const { props: s, children: o, component: r } = e,
    { props: i, children: c, patchFlag: l } = t,
    a = r.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && l >= 0) {
    if (l & 1024) return !0
    if (l & 16) return s ? wo(s, i, a) : !!i
    if (l & 8) {
      const u = t.dynamicProps
      for (let h = 0; h < u.length; h++) {
        const p = u[h]
        if (i[p] !== s[p] && !Jn(a, p)) return !0
      }
    }
  } else
    return (o || c) && (!c || !c.$stable) ? !0 : s === i ? !1 : s ? (i ? wo(s, i, a) : !0) : !!i
  return !1
}
function wo(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let o = 0; o < s.length; o++) {
    const r = s[o]
    if (t[r] !== e[r] && !Jn(n, r)) return !0
  }
  return !1
}
function Ll({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const Ur = 'components'
function Fl(e, t) {
  return zr(Ur, e, !0, t) || e
}
const Wr = Symbol.for('v-ndc')
function Kr(e) {
  return de(e) ? zr(Ur, e, !1) || e : e || Wr
}
function zr(e, t, n = !0, s = !1) {
  const o = xe || me
  if (o) {
    const r = o.type
    {
      const c = Oc(r, !1)
      if (c && (c === t || c === Be(t) || c === qn(Be(t)))) return r
    }
    const i = bo(o[e] || r[e], t) || bo(o.appContext[e], t)
    return !i && s ? r : i
  }
}
function bo(e, t) {
  return e && (e[t] || e[Be(t)] || e[qn(Be(t))])
}
const Dl = (e) => e.__isSuspense
function jl(e, t) {
  t && t.pendingBranch ? (V(e) ? t.effects.push(...e) : t.effects.push(e)) : Al(e)
}
const Hl = Symbol.for('v-scx'),
  Vl = () => Ye(Hl)
function Bl(e, t) {
  return Xs(e, null, { flush: 'sync' })
}
const In = {}
function yt(e, t, n) {
  return Xs(e, t, n)
}
function Xs(e, t, { immediate: n, deep: s, flush: o, once: r, onTrack: i, onTrigger: c } = ie) {
  if (t && r) {
    const x = t
    t = (...Z) => {
      x(...Z), A()
    }
  }
  const l = me,
    a = (x) => (s === !0 ? x : Pt(x, s === !1 ? 1 : void 0))
  let u,
    h = !1,
    p = !1
  if (
    (he(e)
      ? ((u = () => e.value), (h = Dn(e)))
      : Mt(e)
        ? ((u = () => a(e)), (h = !0))
        : V(e)
          ? ((p = !0),
            (h = e.some((x) => Mt(x) || Dn(x))),
            (u = () =>
              e.map((x) => {
                if (he(x)) return x.value
                if (Mt(x)) return a(x)
                if (W(x)) return _t(x, l, 2)
              })))
          : W(e)
            ? t
              ? (u = () => _t(e, l, 2))
              : (u = () => (m && m(), Ve(e, l, 3, [b])))
            : (u = Le),
    t && s)
  ) {
    const x = u
    u = () => Pt(x())
  }
  let m,
    b = (x) => {
      m = F.onStop = () => {
        _t(x, l, 4), (m = F.onStop = void 0)
      }
    },
    P
  if (ns)
    if (((b = Le), t ? n && Ve(t, l, 3, [u(), p ? [] : void 0, b]) : u(), o === 'sync')) {
      const x = Vl()
      P = x.__watcherHandles || (x.__watcherHandles = [])
    } else return Le
  let T = p ? new Array(e.length).fill(In) : In
  const v = () => {
    if (!(!F.active || !F.dirty))
      if (t) {
        const x = F.run()
        ;(s || h || (p ? x.some((Z, z) => Xe(Z, T[z])) : Xe(x, T))) &&
          (m && m(), Ve(t, l, 3, [x, T === In ? void 0 : p && T[0] === In ? [] : T, b]), (T = x))
      } else F.run()
  }
  v.allowRecurse = !!t
  let _
  o === 'sync'
    ? (_ = v)
    : o === 'post'
      ? (_ = () => Pe(v, l && l.suspense))
      : ((v.pre = !0), l && (v.id = l.uid), (_ = () => Ys(v)))
  const F = new js(u, Le, _),
    S = yr(),
    A = () => {
      F.stop(), S && Fs(S.effects, F)
    }
  return (
    t ? (n ? v() : (T = F.run())) : o === 'post' ? Pe(F.run.bind(F), l && l.suspense) : F.run(),
    P && P.push(A),
    A
  )
}
function Ul(e, t, n) {
  const s = this.proxy,
    o = de(e) ? (e.includes('.') ? qr(s, e) : () => s[e]) : e.bind(s, s)
  let r
  W(t) ? (r = t) : ((r = t.handler), (n = t))
  const i = Cn(this),
    c = Xs(o, r.bind(s), n)
  return i(), c
}
function qr(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let o = 0; o < n.length && s; o++) s = s[n[o]]
    return s
  }
}
function Pt(e, t = 1 / 0, n) {
  if (t <= 0 || !le(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e
  if ((n.add(e), t--, he(e))) Pt(e.value, t, n)
  else if (V(e)) for (let s = 0; s < e.length; s++) Pt(e[s], t, n)
  else if (Kn(e) || Vt(e))
    e.forEach((s) => {
      Pt(s, t, n)
    })
  else if (fr(e)) for (const s in e) Pt(e[s], t, n)
  return e
}
function Kt(e, t) {
  if (xe === null) return e
  const n = ss(xe) || xe.proxy,
    s = e.dirs || (e.dirs = [])
  for (let o = 0; o < t.length; o++) {
    let [r, i, c, l = ie] = t[o]
    r &&
      (W(r) && (r = { mounted: r, updated: r }),
      r.deep && Pt(i),
      s.push({ dir: r, instance: n, value: i, oldValue: void 0, arg: c, modifiers: l }))
  }
  return e
}
function St(e, t, n, s) {
  const o = e.dirs,
    r = t && t.dirs
  for (let i = 0; i < o.length; i++) {
    const c = o[i]
    r && (c.oldValue = r[i].value)
    let l = c.dir[s]
    l && (bt(), Ve(l, n, 8, [e.el, c, e, t]), Ct())
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function _e(e, t) {
  return W(e) ? ve({ name: e.name }, t, { setup: e }) : e
}
const On = (e) => !!e.type.__asyncLoader,
  Gr = (e) => e.type.__isKeepAlive
function Wl(e, t) {
  Yr(e, 'a', t)
}
function Kl(e, t) {
  Yr(e, 'da', t)
}
function Yr(e, t, n = me) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n
      for (; o; ) {
        if (o.isDeactivated) return
        o = o.parent
      }
      return e()
    })
  if ((Qn(t, s, n), n)) {
    let o = n.parent
    for (; o && o.parent; ) Gr(o.parent.vnode) && zl(s, t, n, o), (o = o.parent)
  }
}
function zl(e, t, n, s) {
  const o = Qn(t, e, s, !0)
  Xr(() => {
    Fs(s[t], o)
  }, n)
}
function Qn(e, t, n = me, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return
          bt()
          const c = Cn(n),
            l = Ve(t, n, e, i)
          return c(), Ct(), l
        })
    return s ? o.unshift(r) : o.push(r), r
  }
}
const lt =
    (e) =>
    (t, n = me) =>
      (!ns || e === 'sp') && Qn(e, (...s) => t(...s), n),
  ql = lt('bm'),
  Je = lt('m'),
  Gl = lt('bu'),
  Yl = lt('u'),
  es = lt('bum'),
  Xr = lt('um'),
  Xl = lt('sp'),
  Jl = lt('rtg'),
  Zl = lt('rtc')
function Ql(e, t = me) {
  Qn('ec', e, t)
}
function it(e, t, n, s) {
  let o
  const r = n
  if (V(e) || de(e)) {
    o = new Array(e.length)
    for (let i = 0, c = e.length; i < c; i++) o[i] = t(e[i], i, void 0, r)
  } else if (typeof e == 'number') {
    o = new Array(e)
    for (let i = 0; i < e; i++) o[i] = t(i + 1, i, void 0, r)
  } else if (le(e))
    if (e[Symbol.iterator]) o = Array.from(e, (i, c) => t(i, c, void 0, r))
    else {
      const i = Object.keys(e)
      o = new Array(i.length)
      for (let c = 0, l = i.length; c < l; c++) {
        const a = i[c]
        o[c] = t(e[a], a, c, r)
      }
    }
  else o = []
  return o
}
const Cs = (e) => (e ? (fi(e) ? ss(e) || e.proxy : Cs(e.parent)) : null),
  rn = ve(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Cs(e.parent),
    $root: (e) => Cs(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Js(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), Ys(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = Gs.bind(e.proxy)),
    $watch: (e) => Ul.bind(e)
  }),
  as = (e, t) => e !== ie && !e.__isScriptSetup && X(e, t),
  ec = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: c, appContext: l } = e
      let a
      if (t[0] !== '$') {
        const m = i[t]
        if (m !== void 0)
          switch (m) {
            case 1:
              return s[t]
            case 2:
              return o[t]
            case 4:
              return n[t]
            case 3:
              return r[t]
          }
        else {
          if (as(s, t)) return (i[t] = 1), s[t]
          if (o !== ie && X(o, t)) return (i[t] = 2), o[t]
          if ((a = e.propsOptions[0]) && X(a, t)) return (i[t] = 3), r[t]
          if (n !== ie && X(n, t)) return (i[t] = 4), n[t]
          Es && (i[t] = 0)
        }
      }
      const u = rn[t]
      let h, p
      if (u) return t === '$attrs' && Ae(e.attrs, 'get', ''), u(e)
      if ((h = c.__cssModules) && (h = h[t])) return h
      if (n !== ie && X(n, t)) return (i[t] = 4), n[t]
      if (((p = l.config.globalProperties), X(p, t))) return p[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: o, ctx: r } = e
      return as(o, t)
        ? ((o[t] = n), !0)
        : s !== ie && X(s, t)
          ? ((s[t] = n), !0)
          : X(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((r[t] = n), !0)
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r } },
      i
    ) {
      let c
      return (
        !!n[i] ||
        (e !== ie && X(e, i)) ||
        as(t, i) ||
        ((c = r[0]) && X(c, i)) ||
        X(s, i) ||
        X(rn, i) ||
        X(o.config.globalProperties, i)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : X(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    }
  }
function Co(e) {
  return V(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let Es = !0
function tc(e) {
  const t = Js(e),
    n = e.proxy,
    s = e.ctx
  ;(Es = !1), t.beforeCreate && Eo(t.beforeCreate, e, 'bc')
  const {
    data: o,
    computed: r,
    methods: i,
    watch: c,
    provide: l,
    inject: a,
    created: u,
    beforeMount: h,
    mounted: p,
    beforeUpdate: m,
    updated: b,
    activated: P,
    deactivated: T,
    beforeDestroy: v,
    beforeUnmount: _,
    destroyed: F,
    unmounted: S,
    render: A,
    renderTracked: x,
    renderTriggered: Z,
    errorCaptured: z,
    serverPrefetch: Y,
    expose: fe,
    inheritAttrs: be,
    components: Ie,
    directives: $e,
    filters: Et
  } = t
  if ((a && nc(a, s, null), i))
    for (const se in i) {
      const ee = i[se]
      W(ee) && (s[se] = ee.bind(n))
    }
  if (o) {
    const se = o.call(n, n)
    le(se) && (e.data = yn(se))
  }
  if (((Es = !0), r))
    for (const se in r) {
      const ee = r[se],
        Qe = W(ee) ? ee.bind(n, n) : W(ee.get) ? ee.get.bind(n, n) : Le,
        ct = !W(ee) && W(ee.set) ? ee.set.bind(n) : Le,
        We = Se({ get: Qe, set: ct })
      Object.defineProperty(s, se, {
        enumerable: !0,
        configurable: !0,
        get: () => We.value,
        set: (Re) => (We.value = Re)
      })
    }
  if (c) for (const se in c) Jr(c[se], s, n, se)
  if (l) {
    const se = W(l) ? l.call(n) : l
    Reflect.ownKeys(se).forEach((ee) => {
      $n(ee, se[ee])
    })
  }
  u && Eo(u, e, 'c')
  function Q(se, ee) {
    V(ee) ? ee.forEach((Qe) => se(Qe.bind(n))) : ee && se(ee.bind(n))
  }
  if (
    (Q(ql, h),
    Q(Je, p),
    Q(Gl, m),
    Q(Yl, b),
    Q(Wl, P),
    Q(Kl, T),
    Q(Ql, z),
    Q(Zl, x),
    Q(Jl, Z),
    Q(es, _),
    Q(Xr, S),
    Q(Xl, Y),
    V(fe))
  )
    if (fe.length) {
      const se = e.exposed || (e.exposed = {})
      fe.forEach((ee) => {
        Object.defineProperty(se, ee, { get: () => n[ee], set: (Qe) => (n[ee] = Qe) })
      })
    } else e.exposed || (e.exposed = {})
  A && e.render === Le && (e.render = A),
    be != null && (e.inheritAttrs = be),
    Ie && (e.components = Ie),
    $e && (e.directives = $e)
}
function nc(e, t, n = Le) {
  V(e) && (e = Ss(e))
  for (const s in e) {
    const o = e[s]
    let r
    le(o)
      ? 'default' in o
        ? (r = Ye(o.from || s, o.default, !0))
        : (r = Ye(o.from || s))
      : (r = Ye(o)),
      he(r)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (i) => (r.value = i)
          })
        : (t[s] = r)
  }
}
function Eo(e, t, n) {
  Ve(V(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Jr(e, t, n, s) {
  const o = s.includes('.') ? qr(n, s) : () => n[s]
  if (de(e)) {
    const r = t[e]
    W(r) && yt(o, r)
  } else if (W(e)) yt(o, e.bind(n))
  else if (le(e))
    if (V(e)) e.forEach((r) => Jr(r, t, n, s))
    else {
      const r = W(e.handler) ? e.handler.bind(n) : t[e.handler]
      W(r) && yt(o, r, e)
    }
}
function Js(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: o,
      optionsCache: r,
      config: { optionMergeStrategies: i }
    } = e.appContext,
    c = r.get(t)
  let l
  return (
    c
      ? (l = c)
      : !o.length && !n && !s
        ? (l = t)
        : ((l = {}), o.length && o.forEach((a) => Hn(l, a, i, !0)), Hn(l, t, i)),
    le(t) && r.set(t, l),
    l
  )
}
function Hn(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t
  r && Hn(e, r, n, !0), o && o.forEach((i) => Hn(e, i, n, !0))
  for (const i in t)
    if (!(s && i === 'expose')) {
      const c = sc[i] || (n && n[i])
      e[i] = c ? c(e[i], t[i]) : t[i]
    }
  return e
}
const sc = {
  data: So,
  props: xo,
  emits: xo,
  methods: nn,
  computed: nn,
  beforeCreate: ke,
  created: ke,
  beforeMount: ke,
  mounted: ke,
  beforeUpdate: ke,
  updated: ke,
  beforeDestroy: ke,
  beforeUnmount: ke,
  destroyed: ke,
  unmounted: ke,
  activated: ke,
  deactivated: ke,
  errorCaptured: ke,
  serverPrefetch: ke,
  components: nn,
  directives: nn,
  watch: rc,
  provide: So,
  inject: oc
}
function So(e, t) {
  return t
    ? e
      ? function () {
          return ve(W(e) ? e.call(this, this) : e, W(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function oc(e, t) {
  return nn(Ss(e), Ss(t))
}
function Ss(e) {
  if (V(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function ke(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function nn(e, t) {
  return e ? ve(Object.create(null), e, t) : t
}
function xo(e, t) {
  return e
    ? V(e) && V(t)
      ? [...new Set([...e, ...t])]
      : ve(Object.create(null), Co(e), Co(t ?? {}))
    : t
}
function rc(e, t) {
  if (!e) return t
  if (!t) return e
  const n = ve(Object.create(null), e)
  for (const s in t) n[s] = ke(e[s], t[s])
  return n
}
function Zr() {
  return {
    app: null,
    config: {
      isNativeTag: Di,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  }
}
let ic = 0
function lc(e, t) {
  return function (s, o = null) {
    W(s) || (s = ve({}, s)), o != null && !le(o) && (o = null)
    const r = Zr(),
      i = new WeakSet()
    let c = !1
    const l = (r.app = {
      _uid: ic++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Nc,
      get config() {
        return r.config
      },
      set config(a) {},
      use(a, ...u) {
        return (
          i.has(a) ||
            (a && W(a.install) ? (i.add(a), a.install(l, ...u)) : W(a) && (i.add(a), a(l, ...u))),
          l
        )
      },
      mixin(a) {
        return r.mixins.includes(a) || r.mixins.push(a), l
      },
      component(a, u) {
        return u ? ((r.components[a] = u), l) : r.components[a]
      },
      directive(a, u) {
        return u ? ((r.directives[a] = u), l) : r.directives[a]
      },
      mount(a, u, h) {
        if (!c) {
          const p = ge(s, o)
          return (
            (p.appContext = r),
            h === !0 ? (h = 'svg') : h === !1 && (h = void 0),
            u && t ? t(p, a) : e(p, a, h),
            (c = !0),
            (l._container = a),
            (a.__vue_app__ = l),
            ss(p.component) || p.component.proxy
          )
        }
      },
      unmount() {
        c && (e(null, l._container), delete l._container.__vue_app__)
      },
      provide(a, u) {
        return (r.provides[a] = u), l
      },
      runWithContext(a) {
        const u = Ut
        Ut = l
        try {
          return a()
        } finally {
          Ut = u
        }
      }
    })
    return l
  }
}
let Ut = null
function $n(e, t) {
  if (me) {
    let n = me.provides
    const s = me.parent && me.parent.provides
    s === n && (n = me.provides = Object.create(s)), (n[e] = t)
  }
}
function Ye(e, t, n = !1) {
  const s = me || xe
  if (s || Ut) {
    const o = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : Ut._context.provides
    if (o && e in o) return o[e]
    if (arguments.length > 1) return n && W(t) ? t.call(s && s.proxy) : t
  }
}
function cc() {
  return !!(me || xe || Ut)
}
const Qr = {},
  ei = () => Object.create(Qr),
  ti = (e) => Object.getPrototypeOf(e) === Qr
function uc(e, t, n, s = !1) {
  const o = {},
    r = ei()
  ;(e.propsDefaults = Object.create(null)), ni(e, t, o, r)
  for (const i in e.propsOptions[0]) i in o || (o[i] = void 0)
  n ? (e.props = s ? o : Mr(o)) : e.type.props ? (e.props = o) : (e.props = r), (e.attrs = r)
}
function ac(e, t, n, s) {
  const {
      props: o,
      attrs: r,
      vnode: { patchFlag: i }
    } = e,
    c = J(o),
    [l] = e.propsOptions
  let a = !1
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const u = e.vnode.dynamicProps
      for (let h = 0; h < u.length; h++) {
        let p = u[h]
        if (Jn(e.emitsOptions, p)) continue
        const m = t[p]
        if (l)
          if (X(r, p)) m !== r[p] && ((r[p] = m), (a = !0))
          else {
            const b = Be(p)
            o[b] = xs(l, c, b, m, e, !1)
          }
        else m !== r[p] && ((r[p] = m), (a = !0))
      }
    }
  } else {
    ni(e, t, o, r) && (a = !0)
    let u
    for (const h in c)
      (!t || (!X(t, h) && ((u = wt(h)) === h || !X(t, u)))) &&
        (l
          ? n && (n[h] !== void 0 || n[u] !== void 0) && (o[h] = xs(l, c, h, void 0, e, !0))
          : delete o[h])
    if (r !== c) for (const h in r) (!t || !X(t, h)) && (delete r[h], (a = !0))
  }
  a && nt(e.attrs, 'set', '')
}
function ni(e, t, n, s) {
  const [o, r] = e.propsOptions
  let i = !1,
    c
  if (t)
    for (let l in t) {
      if (sn(l)) continue
      const a = t[l]
      let u
      o && X(o, (u = Be(l)))
        ? !r || !r.includes(u)
          ? (n[u] = a)
          : ((c || (c = {}))[u] = a)
        : Jn(e.emitsOptions, l) || ((!(l in s) || a !== s[l]) && ((s[l] = a), (i = !0)))
    }
  if (r) {
    const l = J(n),
      a = c || ie
    for (let u = 0; u < r.length; u++) {
      const h = r[u]
      n[h] = xs(o, l, h, a[h], e, !X(a, h))
    }
  }
  return i
}
function xs(e, t, n, s, o, r) {
  const i = e[n]
  if (i != null) {
    const c = X(i, 'default')
    if (c && s === void 0) {
      const l = i.default
      if (i.type !== Function && !i.skipFactory && W(l)) {
        const { propsDefaults: a } = o
        if (n in a) s = a[n]
        else {
          const u = Cn(o)
          ;(s = a[n] = l.call(null, t)), u()
        }
      } else s = l
    }
    i[0] && (r && !c ? (s = !1) : i[1] && (s === '' || s === wt(n)) && (s = !0))
  }
  return s
}
function si(e, t, n = !1) {
  const s = t.propsCache,
    o = s.get(e)
  if (o) return o
  const r = e.props,
    i = {},
    c = []
  let l = !1
  if (!W(e)) {
    const u = (h) => {
      l = !0
      const [p, m] = si(h, t, !0)
      ve(i, p), m && c.push(...m)
    }
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u)
  }
  if (!r && !l) return le(e) && s.set(e, Ht), Ht
  if (V(r))
    for (let u = 0; u < r.length; u++) {
      const h = Be(r[u])
      ko(h) && (i[h] = ie)
    }
  else if (r)
    for (const u in r) {
      const h = Be(u)
      if (ko(h)) {
        const p = r[u],
          m = (i[h] = V(p) || W(p) ? { type: p } : ve({}, p))
        if (m) {
          const b = Ao(Boolean, m.type),
            P = Ao(String, m.type)
          ;(m[0] = b > -1), (m[1] = P < 0 || b < P), (b > -1 || X(m, 'default')) && c.push(h)
        }
      }
    }
  const a = [i, c]
  return le(e) && s.set(e, a), a
}
function ko(e) {
  return e[0] !== '$' && !sn(e)
}
function Ro(e) {
  return e === null
    ? 'null'
    : typeof e == 'function'
      ? e.name || ''
      : (typeof e == 'object' && e.constructor && e.constructor.name) || ''
}
function Po(e, t) {
  return Ro(e) === Ro(t)
}
function Ao(e, t) {
  return V(t) ? t.findIndex((n) => Po(n, e)) : W(t) && Po(t, e) ? 0 : -1
}
const oi = (e) => e[0] === '_' || e === '$stable',
  Zs = (e) => (V(e) ? e.map(qe) : [qe(e)]),
  fc = (e, t, n) => {
    if (t._n) return t
    const s = Ol((...o) => Zs(t(...o)), n)
    return (s._c = !1), s
  },
  ri = (e, t, n) => {
    const s = e._ctx
    for (const o in e) {
      if (oi(o)) continue
      const r = e[o]
      if (W(r)) t[o] = fc(o, r, s)
      else if (r != null) {
        const i = Zs(r)
        t[o] = () => i
      }
    }
  },
  ii = (e, t) => {
    const n = Zs(t)
    e.slots.default = () => n
  },
  dc = (e, t) => {
    const n = (e.slots = ei())
    if (e.vnode.shapeFlag & 32) {
      const s = t._
      s ? (ve(n, t), dr(n, '_', s, !0)) : ri(t, n)
    } else t && ii(e, t)
  },
  hc = (e, t, n) => {
    const { vnode: s, slots: o } = e
    let r = !0,
      i = ie
    if (s.shapeFlag & 32) {
      const c = t._
      c
        ? n && c === 1
          ? (r = !1)
          : (ve(o, t), !n && c === 1 && delete o._)
        : ((r = !t.$stable), ri(t, o)),
        (i = t)
    } else t && (ii(e, t), (i = { default: 1 }))
    if (r) for (const c in o) !oi(c) && i[c] == null && delete o[c]
  }
function ks(e, t, n, s, o = !1) {
  if (V(e)) {
    e.forEach((p, m) => ks(p, t && (V(t) ? t[m] : t), n, s, o))
    return
  }
  if (On(s) && !o) return
  const r = s.shapeFlag & 4 ? ss(s.component) || s.component.proxy : s.el,
    i = o ? null : r,
    { i: c, r: l } = e,
    a = t && t.r,
    u = c.refs === ie ? (c.refs = {}) : c.refs,
    h = c.setupState
  if (
    (a != null &&
      a !== l &&
      (de(a) ? ((u[a] = null), X(h, a) && (h[a] = null)) : he(a) && (a.value = null)),
    W(l))
  )
    _t(l, c, 12, [i, u])
  else {
    const p = de(l),
      m = he(l)
    if (p || m) {
      const b = () => {
        if (e.f) {
          const P = p ? (X(h, l) ? h[l] : u[l]) : l.value
          o
            ? V(P) && Fs(P, r)
            : V(P)
              ? P.includes(r) || P.push(r)
              : p
                ? ((u[l] = [r]), X(h, l) && (h[l] = u[l]))
                : ((l.value = [r]), e.k && (u[e.k] = l.value))
        } else p ? ((u[l] = i), X(h, l) && (h[l] = i)) : m && ((l.value = i), e.k && (u[e.k] = i))
      }
      i ? ((b.id = -1), Pe(b, n)) : b()
    }
  }
}
const Pe = jl
function pc(e) {
  return mc(e)
}
function mc(e, t) {
  const n = hr()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: o,
      patchProp: r,
      createElement: i,
      createText: c,
      createComment: l,
      setText: a,
      setElementText: u,
      parentNode: h,
      nextSibling: p,
      setScopeId: m = Le,
      insertStaticContent: b
    } = e,
    P = (f, d, g, C = null, y = null, R = null, $ = void 0, k = null, I = !!d.dynamicChildren) => {
      if (f === d) return
      f && !Qt(f, d) && ((C = w(f)), Re(f, y, R, !0), (f = null)),
        d.patchFlag === -2 && ((I = !1), (d.dynamicChildren = null))
      const { type: E, ref: L, shapeFlag: H } = d
      switch (E) {
        case ts:
          T(f, d, g, C)
          break
        case Ot:
          v(f, d, g, C)
          break
        case Tn:
          f == null && _(d, g, C, $)
          break
        case ae:
          Ie(f, d, g, C, y, R, $, k, I)
          break
        default:
          H & 1
            ? A(f, d, g, C, y, R, $, k, I)
            : H & 6
              ? $e(f, d, g, C, y, R, $, k, I)
              : (H & 64 || H & 128) && E.process(f, d, g, C, y, R, $, k, I, D)
      }
      L != null && y && ks(L, f && f.ref, R, d || f, !d)
    },
    T = (f, d, g, C) => {
      if (f == null) s((d.el = c(d.children)), g, C)
      else {
        const y = (d.el = f.el)
        d.children !== f.children && a(y, d.children)
      }
    },
    v = (f, d, g, C) => {
      f == null ? s((d.el = l(d.children || '')), g, C) : (d.el = f.el)
    },
    _ = (f, d, g, C) => {
      ;[f.el, f.anchor] = b(f.children, d, g, C, f.el, f.anchor)
    },
    F = ({ el: f, anchor: d }, g, C) => {
      let y
      for (; f && f !== d; ) (y = p(f)), s(f, g, C), (f = y)
      s(d, g, C)
    },
    S = ({ el: f, anchor: d }) => {
      let g
      for (; f && f !== d; ) (g = p(f)), o(f), (f = g)
      o(d)
    },
    A = (f, d, g, C, y, R, $, k, I) => {
      d.type === 'svg' ? ($ = 'svg') : d.type === 'math' && ($ = 'mathml'),
        f == null ? x(d, g, C, y, R, $, k, I) : Y(f, d, y, R, $, k, I)
    },
    x = (f, d, g, C, y, R, $, k) => {
      let I, E
      const { props: L, shapeFlag: H, transition: j, dirs: U } = f
      if (
        ((I = f.el = i(f.type, R, L && L.is, L)),
        H & 8 ? u(I, f.children) : H & 16 && z(f.children, I, null, C, y, fs(f, R), $, k),
        U && St(f, null, C, 'created'),
        Z(I, f, f.scopeId, $, C),
        L)
      ) {
        for (const oe in L)
          oe !== 'value' && !sn(oe) && r(I, oe, null, L[oe], R, f.children, C, y, Ce)
        'value' in L && r(I, 'value', null, L.value, R), (E = L.onVnodeBeforeMount) && ze(E, C, f)
      }
      U && St(f, null, C, 'beforeMount')
      const G = gc(y, j)
      G && j.beforeEnter(I),
        s(I, d, g),
        ((E = L && L.onVnodeMounted) || G || U) &&
          Pe(() => {
            E && ze(E, C, f), G && j.enter(I), U && St(f, null, C, 'mounted')
          }, y)
    },
    Z = (f, d, g, C, y) => {
      if ((g && m(f, g), C)) for (let R = 0; R < C.length; R++) m(f, C[R])
      if (y) {
        let R = y.subTree
        if (d === R) {
          const $ = y.vnode
          Z(f, $, $.scopeId, $.slotScopeIds, y.parent)
        }
      }
    },
    z = (f, d, g, C, y, R, $, k, I = 0) => {
      for (let E = I; E < f.length; E++) {
        const L = (f[E] = k ? pt(f[E]) : qe(f[E]))
        P(null, L, d, g, C, y, R, $, k)
      }
    },
    Y = (f, d, g, C, y, R, $) => {
      const k = (d.el = f.el)
      let { patchFlag: I, dynamicChildren: E, dirs: L } = d
      I |= f.patchFlag & 16
      const H = f.props || ie,
        j = d.props || ie
      let U
      if (
        (g && xt(g, !1),
        (U = j.onVnodeBeforeUpdate) && ze(U, g, d, f),
        L && St(d, f, g, 'beforeUpdate'),
        g && xt(g, !0),
        E
          ? fe(f.dynamicChildren, E, k, g, C, fs(d, y), R)
          : $ || ee(f, d, k, null, g, C, fs(d, y), R, !1),
        I > 0)
      ) {
        if (I & 16) be(k, d, H, j, g, C, y)
        else if (
          (I & 2 && H.class !== j.class && r(k, 'class', null, j.class, y),
          I & 4 && r(k, 'style', H.style, j.style, y),
          I & 8)
        ) {
          const G = d.dynamicProps
          for (let oe = 0; oe < G.length; oe++) {
            const ce = G[oe],
              pe = H[ce],
              De = j[ce]
            ;(De !== pe || ce === 'value') && r(k, ce, pe, De, y, f.children, g, C, Ce)
          }
        }
        I & 1 && f.children !== d.children && u(k, d.children)
      } else !$ && E == null && be(k, d, H, j, g, C, y)
      ;((U = j.onVnodeUpdated) || L) &&
        Pe(() => {
          U && ze(U, g, d, f), L && St(d, f, g, 'updated')
        }, C)
    },
    fe = (f, d, g, C, y, R, $) => {
      for (let k = 0; k < d.length; k++) {
        const I = f[k],
          E = d[k],
          L = I.el && (I.type === ae || !Qt(I, E) || I.shapeFlag & 70) ? h(I.el) : g
        P(I, E, L, null, C, y, R, $, !0)
      }
    },
    be = (f, d, g, C, y, R, $) => {
      if (g !== C) {
        if (g !== ie)
          for (const k in g) !sn(k) && !(k in C) && r(f, k, g[k], null, $, d.children, y, R, Ce)
        for (const k in C) {
          if (sn(k)) continue
          const I = C[k],
            E = g[k]
          I !== E && k !== 'value' && r(f, k, E, I, $, d.children, y, R, Ce)
        }
        'value' in C && r(f, 'value', g.value, C.value, $)
      }
    },
    Ie = (f, d, g, C, y, R, $, k, I) => {
      const E = (d.el = f ? f.el : c('')),
        L = (d.anchor = f ? f.anchor : c(''))
      let { patchFlag: H, dynamicChildren: j, slotScopeIds: U } = d
      U && (k = k ? k.concat(U) : U),
        f == null
          ? (s(E, g, C), s(L, g, C), z(d.children || [], g, L, y, R, $, k, I))
          : H > 0 && H & 64 && j && f.dynamicChildren
            ? (fe(f.dynamicChildren, j, g, y, R, $, k),
              (d.key != null || (y && d === y.subTree)) && li(f, d, !0))
            : ee(f, d, g, L, y, R, $, k, I)
    },
    $e = (f, d, g, C, y, R, $, k, I) => {
      ;(d.slotScopeIds = k),
        f == null
          ? d.shapeFlag & 512
            ? y.ctx.activate(d, g, C, $, I)
            : Et(d, g, C, y, R, $, I)
          : Te(f, d, I)
    },
    Et = (f, d, g, C, y, R, $) => {
      const k = (f.component = kc(f, C, y))
      if ((Gr(f) && (k.ctx.renderer = D), Pc(k), k.asyncDep)) {
        if ((y && y.registerDep(k, Q), !f.el)) {
          const I = (k.subTree = ge(Ot))
          v(null, I, d, g)
        }
      } else Q(k, f, d, g, y, R, $)
    },
    Te = (f, d, g) => {
      const C = (d.component = f.component)
      if (Nl(f, d, g))
        if (C.asyncDep && !C.asyncResolved) {
          se(C, d, g)
          return
        } else (C.next = d), Pl(C.update), (C.effect.dirty = !0), C.update()
      else (d.el = f.el), (C.vnode = d)
    },
    Q = (f, d, g, C, y, R, $) => {
      const k = () => {
          if (f.isMounted) {
            let { next: L, bu: H, u: j, parent: U, vnode: G } = f
            {
              const Lt = ci(f)
              if (Lt) {
                L && ((L.el = G.el), se(f, L, $)),
                  Lt.asyncDep.then(() => {
                    f.isUnmounted || k()
                  })
                return
              }
            }
            let oe = L,
              ce
            xt(f, !1),
              L ? ((L.el = G.el), se(f, L, $)) : (L = G),
              H && Mn(H),
              (ce = L.props && L.props.onVnodeBeforeUpdate) && ze(ce, U, L, G),
              xt(f, !0)
            const pe = us(f),
              De = f.subTree
            ;(f.subTree = pe),
              P(De, pe, h(De.el), w(De), f, y, R),
              (L.el = pe.el),
              oe === null && Ll(f, pe.el),
              j && Pe(j, y),
              (ce = L.props && L.props.onVnodeUpdated) && Pe(() => ze(ce, U, L, G), y)
          } else {
            let L
            const { el: H, props: j } = d,
              { bm: U, m: G, parent: oe } = f,
              ce = On(d)
            if (
              (xt(f, !1),
              U && Mn(U),
              !ce && (L = j && j.onVnodeBeforeMount) && ze(L, oe, d),
              xt(f, !0),
              H && ue)
            ) {
              const pe = () => {
                ;(f.subTree = us(f)), ue(H, f.subTree, f, y, null)
              }
              ce ? d.type.__asyncLoader().then(() => !f.isUnmounted && pe()) : pe()
            } else {
              const pe = (f.subTree = us(f))
              P(null, pe, g, C, f, y, R), (d.el = pe.el)
            }
            if ((G && Pe(G, y), !ce && (L = j && j.onVnodeMounted))) {
              const pe = d
              Pe(() => ze(L, oe, pe), y)
            }
            ;(d.shapeFlag & 256 || (oe && On(oe.vnode) && oe.vnode.shapeFlag & 256)) &&
              f.a &&
              Pe(f.a, y),
              (f.isMounted = !0),
              (d = g = C = null)
          }
        },
        I = (f.effect = new js(k, Le, () => Ys(E), f.scope)),
        E = (f.update = () => {
          I.dirty && I.run()
        })
      ;(E.id = f.uid), xt(f, !0), E()
    },
    se = (f, d, g) => {
      d.component = f
      const C = f.vnode.props
      ;(f.vnode = d), (f.next = null), ac(f, d.props, C, g), hc(f, d.children, g), bt(), yo(f), Ct()
    },
    ee = (f, d, g, C, y, R, $, k, I = !1) => {
      const E = f && f.children,
        L = f ? f.shapeFlag : 0,
        H = d.children,
        { patchFlag: j, shapeFlag: U } = d
      if (j > 0) {
        if (j & 128) {
          ct(E, H, g, C, y, R, $, k, I)
          return
        } else if (j & 256) {
          Qe(E, H, g, C, y, R, $, k, I)
          return
        }
      }
      U & 8
        ? (L & 16 && Ce(E, y, R), H !== E && u(g, H))
        : L & 16
          ? U & 16
            ? ct(E, H, g, C, y, R, $, k, I)
            : Ce(E, y, R, !0)
          : (L & 8 && u(g, ''), U & 16 && z(H, g, C, y, R, $, k, I))
    },
    Qe = (f, d, g, C, y, R, $, k, I) => {
      ;(f = f || Ht), (d = d || Ht)
      const E = f.length,
        L = d.length,
        H = Math.min(E, L)
      let j
      for (j = 0; j < H; j++) {
        const U = (d[j] = I ? pt(d[j]) : qe(d[j]))
        P(f[j], U, g, null, y, R, $, k, I)
      }
      E > L ? Ce(f, y, R, !0, !1, H) : z(d, g, C, y, R, $, k, I, H)
    },
    ct = (f, d, g, C, y, R, $, k, I) => {
      let E = 0
      const L = d.length
      let H = f.length - 1,
        j = L - 1
      for (; E <= H && E <= j; ) {
        const U = f[E],
          G = (d[E] = I ? pt(d[E]) : qe(d[E]))
        if (Qt(U, G)) P(U, G, g, null, y, R, $, k, I)
        else break
        E++
      }
      for (; E <= H && E <= j; ) {
        const U = f[H],
          G = (d[j] = I ? pt(d[j]) : qe(d[j]))
        if (Qt(U, G)) P(U, G, g, null, y, R, $, k, I)
        else break
        H--, j--
      }
      if (E > H) {
        if (E <= j) {
          const U = j + 1,
            G = U < L ? d[U].el : C
          for (; E <= j; ) P(null, (d[E] = I ? pt(d[E]) : qe(d[E])), g, G, y, R, $, k, I), E++
        }
      } else if (E > j) for (; E <= H; ) Re(f[E], y, R, !0), E++
      else {
        const U = E,
          G = E,
          oe = new Map()
        for (E = G; E <= j; E++) {
          const Me = (d[E] = I ? pt(d[E]) : qe(d[E]))
          Me.key != null && oe.set(Me.key, E)
        }
        let ce,
          pe = 0
        const De = j - G + 1
        let Lt = !1,
          io = 0
        const Zt = new Array(De)
        for (E = 0; E < De; E++) Zt[E] = 0
        for (E = U; E <= H; E++) {
          const Me = f[E]
          if (pe >= De) {
            Re(Me, y, R, !0)
            continue
          }
          let Ke
          if (Me.key != null) Ke = oe.get(Me.key)
          else
            for (ce = G; ce <= j; ce++)
              if (Zt[ce - G] === 0 && Qt(Me, d[ce])) {
                Ke = ce
                break
              }
          Ke === void 0
            ? Re(Me, y, R, !0)
            : ((Zt[Ke - G] = E + 1),
              Ke >= io ? (io = Ke) : (Lt = !0),
              P(Me, d[Ke], g, null, y, R, $, k, I),
              pe++)
        }
        const lo = Lt ? vc(Zt) : Ht
        for (ce = lo.length - 1, E = De - 1; E >= 0; E--) {
          const Me = G + E,
            Ke = d[Me],
            co = Me + 1 < L ? d[Me + 1].el : C
          Zt[E] === 0
            ? P(null, Ke, g, co, y, R, $, k, I)
            : Lt && (ce < 0 || E !== lo[ce] ? We(Ke, g, co, 2) : ce--)
        }
      }
    },
    We = (f, d, g, C, y = null) => {
      const { el: R, type: $, transition: k, children: I, shapeFlag: E } = f
      if (E & 6) {
        We(f.component.subTree, d, g, C)
        return
      }
      if (E & 128) {
        f.suspense.move(d, g, C)
        return
      }
      if (E & 64) {
        $.move(f, d, g, D)
        return
      }
      if ($ === ae) {
        s(R, d, g)
        for (let H = 0; H < I.length; H++) We(I[H], d, g, C)
        s(f.anchor, d, g)
        return
      }
      if ($ === Tn) {
        F(f, d, g)
        return
      }
      if (C !== 2 && E & 1 && k)
        if (C === 0) k.beforeEnter(R), s(R, d, g), Pe(() => k.enter(R), y)
        else {
          const { leave: H, delayLeave: j, afterLeave: U } = k,
            G = () => s(R, d, g),
            oe = () => {
              H(R, () => {
                G(), U && U()
              })
            }
          j ? j(R, G, oe) : oe()
        }
      else s(R, d, g)
    },
    Re = (f, d, g, C = !1, y = !1) => {
      const {
        type: R,
        props: $,
        ref: k,
        children: I,
        dynamicChildren: E,
        shapeFlag: L,
        patchFlag: H,
        dirs: j
      } = f
      if ((k != null && ks(k, null, g, f, !0), L & 256)) {
        d.ctx.deactivate(f)
        return
      }
      const U = L & 1 && j,
        G = !On(f)
      let oe
      if ((G && (oe = $ && $.onVnodeBeforeUnmount) && ze(oe, d, f), L & 6)) Sn(f.component, g, C)
      else {
        if (L & 128) {
          f.suspense.unmount(g, C)
          return
        }
        U && St(f, null, d, 'beforeUnmount'),
          L & 64
            ? f.type.remove(f, d, g, y, D, C)
            : E && (R !== ae || (H > 0 && H & 64))
              ? Ce(E, d, g, !1, !0)
              : ((R === ae && H & 384) || (!y && L & 16)) && Ce(I, d, g),
          C && Tt(f)
      }
      ;((G && (oe = $ && $.onVnodeUnmounted)) || U) &&
        Pe(() => {
          oe && ze(oe, d, f), U && St(f, null, d, 'unmounted')
        }, g)
    },
    Tt = (f) => {
      const { type: d, el: g, anchor: C, transition: y } = f
      if (d === ae) {
        Nt(g, C)
        return
      }
      if (d === Tn) {
        S(f)
        return
      }
      const R = () => {
        o(g), y && !y.persisted && y.afterLeave && y.afterLeave()
      }
      if (f.shapeFlag & 1 && y && !y.persisted) {
        const { leave: $, delayLeave: k } = y,
          I = () => $(g, R)
        k ? k(f.el, R, I) : I()
      } else R()
    },
    Nt = (f, d) => {
      let g
      for (; f !== d; ) (g = p(f)), o(f), (f = g)
      o(d)
    },
    Sn = (f, d, g) => {
      const { bum: C, scope: y, update: R, subTree: $, um: k } = f
      C && Mn(C),
        y.stop(),
        R && ((R.active = !1), Re($, f, d, g)),
        k && Pe(k, d),
        Pe(() => {
          f.isUnmounted = !0
        }, d),
        d &&
          d.pendingBranch &&
          !d.isUnmounted &&
          f.asyncDep &&
          !f.asyncResolved &&
          f.suspenseId === d.pendingId &&
          (d.deps--, d.deps === 0 && d.resolve())
    },
    Ce = (f, d, g, C = !1, y = !1, R = 0) => {
      for (let $ = R; $ < f.length; $++) Re(f[$], d, g, C, y)
    },
    w = (f) =>
      f.shapeFlag & 6
        ? w(f.component.subTree)
        : f.shapeFlag & 128
          ? f.suspense.next()
          : p(f.anchor || f.el)
  let N = !1
  const O = (f, d, g) => {
      f == null
        ? d._vnode && Re(d._vnode, null, null, !0)
        : P(d._vnode || null, f, d, null, null, null, g),
        N || ((N = !0), yo(), Hr(), (N = !1)),
        (d._vnode = f)
    },
    D = { p: P, um: Re, m: We, r: Tt, mt: Et, mc: z, pc: ee, pbc: fe, n: w, o: e }
  let te, ue
  return { render: O, hydrate: te, createApp: lc(O, te) }
}
function fs({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n
}
function xt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function gc(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function li(e, t, n = !1) {
  const s = e.children,
    o = t.children
  if (V(s) && V(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r]
      let c = o[r]
      c.shapeFlag & 1 &&
        !c.dynamicChildren &&
        ((c.patchFlag <= 0 || c.patchFlag === 32) && ((c = o[r] = pt(o[r])), (c.el = i.el)),
        n || li(i, c)),
        c.type === ts && (c.el = i.el)
    }
}
function vc(e) {
  const t = e.slice(),
    n = [0]
  let s, o, r, i, c
  const l = e.length
  for (s = 0; s < l; s++) {
    const a = e[s]
    if (a !== 0) {
      if (((o = n[n.length - 1]), e[o] < a)) {
        ;(t[s] = o), n.push(s)
        continue
      }
      for (r = 0, i = n.length - 1; r < i; ) (c = (r + i) >> 1), e[n[c]] < a ? (r = c + 1) : (i = c)
      a < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), (n[r] = s))
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; ) (n[r] = i), (i = t[i])
  return n
}
function ci(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : ci(t)
}
const _c = (e) => e.__isTeleport,
  ae = Symbol.for('v-fgt'),
  ts = Symbol.for('v-txt'),
  Ot = Symbol.for('v-cmt'),
  Tn = Symbol.for('v-stc'),
  ln = []
let He = null
function B(e = !1) {
  ln.push((He = e ? null : []))
}
function yc() {
  ln.pop(), (He = ln[ln.length - 1] || null)
}
let mn = 1
function Io(e) {
  mn += e
}
function ui(e) {
  return (e.dynamicChildren = mn > 0 ? He || Ht : null), yc(), mn > 0 && He && He.push(e), e
}
function K(e, t, n, s, o, r) {
  return ui(M(e, t, n, s, o, r, !0))
}
function Ze(e, t, n, s, o) {
  return ui(ge(e, t, n, s, o, !0))
}
function Rs(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Qt(e, t) {
  return e.type === t.type && e.key === t.key
}
const ai = ({ key: e }) => e ?? null,
  Nn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (de(e) || he(e) || W(e) ? { i: xe, r: e, k: t, f: !!n } : e) : null
  )
function M(e, t = null, n = null, s = 0, o = null, r = e === ae ? 0 : 1, i = !1, c = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ai(t),
    ref: t && Nn(t),
    scopeId: Zn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: xe
  }
  return (
    c ? (Qs(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= de(n) ? 8 : 16),
    mn > 0 && !i && He && (l.patchFlag > 0 || r & 6) && l.patchFlag !== 32 && He.push(l),
    l
  )
}
const ge = wc
function wc(e, t = null, n = null, s = 0, o = null, r = !1) {
  if (((!e || e === Wr) && (e = Ot), Rs(e))) {
    const c = zt(e, t, !0)
    return (
      n && Qs(c, n),
      mn > 0 && !r && He && (c.shapeFlag & 6 ? (He[He.indexOf(e)] = c) : He.push(c)),
      (c.patchFlag |= -2),
      c
    )
  }
  if (($c(e) && (e = e.__vccOpts), t)) {
    t = bc(t)
    let { class: c, style: l } = t
    c && !de(c) && (t.class = Fe(c)),
      le(l) && ($r(l) && !V(l) && (l = ve({}, l)), (t.style = ot(l)))
  }
  const i = de(e) ? 1 : Dl(e) ? 128 : _c(e) ? 64 : le(e) ? 4 : W(e) ? 2 : 0
  return M(e, t, n, s, o, i, r, !0)
}
function bc(e) {
  return e ? ($r(e) || ti(e) ? ve({}, e) : e) : null
}
function zt(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: c, transition: l } = e,
    a = t ? Ec(o || {}, t) : o,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: a,
      key: a && ai(a),
      ref: t && t.ref ? (n && r ? (V(r) ? r.concat(Nn(t)) : [r, Nn(t)]) : Nn(t)) : r,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: c,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== ae ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && zt(e.ssContent),
      ssFallback: e.ssFallback && zt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    }
  return l && s && (u.transition = l.clone(u)), u
}
function Cc(e = ' ', t = 0) {
  return ge(ts, null, e, t)
}
function Cd(e, t) {
  const n = ge(Tn, null, e)
  return (n.staticCount = t), n
}
function qt(e = '', t = !1) {
  return t ? (B(), Ze(Ot, null, e)) : ge(Ot, null, e)
}
function qe(e) {
  return e == null || typeof e == 'boolean'
    ? ge(Ot)
    : V(e)
      ? ge(ae, null, e.slice())
      : typeof e == 'object'
        ? pt(e)
        : ge(ts, null, String(e))
}
function pt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : zt(e)
}
function Qs(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (V(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const o = t.default
      o && (o._c && (o._d = !1), Qs(e, o()), o._c && (o._d = !0))
      return
    } else {
      n = 32
      const o = t._
      !o && !ti(t)
        ? (t._ctx = xe)
        : o === 3 && xe && (xe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    W(t)
      ? ((t = { default: t, _ctx: xe }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Cc(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Ec(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const o in s)
      if (o === 'class') t.class !== s.class && (t.class = Fe([t.class, s.class]))
      else if (o === 'style') t.style = ot([t.style, s.style])
      else if (Wn(o)) {
        const r = t[o],
          i = s[o]
        i && r !== i && !(V(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i)
      } else o !== '' && (t[o] = s[o])
  }
  return t
}
function ze(e, t, n, s = null) {
  Ve(e, t, 7, [n, s])
}
const Sc = Zr()
let xc = 0
function kc(e, t, n) {
  const s = e.type,
    o = (t ? t.appContext : e.appContext) || Sc,
    r = {
      uid: xc++,
      vnode: e,
      type: s,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new vr(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: si(s, o),
      emitsOptions: Br(s, o),
      emit: null,
      emitted: null,
      propsDefaults: ie,
      inheritAttrs: s.inheritAttrs,
      ctx: ie,
      data: ie,
      props: ie,
      attrs: ie,
      slots: ie,
      refs: ie,
      setupState: ie,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    }
  return (
    (r.ctx = { _: r }), (r.root = t ? t.root : r), (r.emit = Ml.bind(null, r)), e.ce && e.ce(r), r
  )
}
let me = null
const Rc = () => me || xe
let Vn, Ps
{
  const e = hr(),
    t = (n, s) => {
      let o
      return (
        (o = e[n]) || (o = e[n] = []),
        o.push(s),
        (r) => {
          o.length > 1 ? o.forEach((i) => i(r)) : o[0](r)
        }
      )
    }
  ;(Vn = t('__VUE_INSTANCE_SETTERS__', (n) => (me = n))),
    (Ps = t('__VUE_SSR_SETTERS__', (n) => (ns = n)))
}
const Cn = (e) => {
    const t = me
    return (
      Vn(e),
      e.scope.on(),
      () => {
        e.scope.off(), Vn(t)
      }
    )
  },
  Mo = () => {
    me && me.scope.off(), Vn(null)
  }
function fi(e) {
  return e.vnode.shapeFlag & 4
}
let ns = !1
function Pc(e, t = !1) {
  t && Ps(t)
  const { props: n, children: s } = e.vnode,
    o = fi(e)
  uc(e, n, o, t), dc(e, s)
  const r = o ? Ac(e, t) : void 0
  return t && Ps(!1), r
}
function Ac(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, ec))
  const { setup: s } = n
  if (s) {
    const o = (e.setupContext = s.length > 1 ? Mc(e) : null),
      r = Cn(e)
    bt()
    const i = _t(s, e, 0, [e.props, o])
    if ((Ct(), r(), ur(i))) {
      if ((i.then(Mo, Mo), t))
        return i
          .then((c) => {
            Oo(e, c, t)
          })
          .catch((c) => {
            Xn(c, e, 0)
          })
      e.asyncDep = i
    } else Oo(e, i, t)
  } else di(e, t)
}
function Oo(e, t, n) {
  W(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : le(t) && (e.setupState = Fr(t)),
    di(e, n)
}
let $o
function di(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && $o && !s.render) {
      const o = s.template || Js(e).template
      if (o) {
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config,
          { delimiters: c, compilerOptions: l } = s,
          a = ve(ve({ isCustomElement: r, delimiters: c }, i), l)
        s.render = $o(o, a)
      }
    }
    e.render = s.render || Le
  }
  {
    const o = Cn(e)
    bt()
    try {
      tc(e)
    } finally {
      Ct(), o()
    }
  }
}
const Ic = {
  get(e, t) {
    return Ae(e, 'get', ''), e[t]
  }
}
function Mc(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return { attrs: new Proxy(e.attrs, Ic), slots: e.slots, emit: e.emit, expose: t }
}
function ss(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Fr(tt(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in rn) return rn[n](e)
        },
        has(t, n) {
          return n in t || n in rn
        }
      }))
    )
}
function Oc(e, t = !0) {
  return W(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function $c(e) {
  return W(e) && '__vccOpts' in e
}
const Se = (e, t) => _l(e, t, ns)
function Tc(e, t, n = ie) {
  const s = Rc(),
    o = Be(t),
    r = wt(t),
    i = Cl((l, a) => {
      let u
      return (
        Bl(() => {
          const h = e[t]
          Xe(u, h) && ((u = h), a())
        }),
        {
          get() {
            return l(), n.get ? n.get(u) : u
          },
          set(h) {
            const p = s.vnode.props
            !(
              p &&
              (t in p || o in p || r in p) &&
              (`onUpdate:${t}` in p || `onUpdate:${o}` in p || `onUpdate:${r}` in p)
            ) &&
              Xe(h, u) &&
              ((u = h), a()),
              s.emit(`update:${t}`, n.set ? n.set(h) : h)
          }
        }
      )
    }),
    c = 'modelModifiers'
  return (
    (i[Symbol.iterator] = () => {
      let l = 0
      return {
        next() {
          return l < 2 ? { value: l++ ? e[c] || {} : i, done: !1 } : { done: !0 }
        }
      }
    }),
    i
  )
}
function hi(e, t, n) {
  const s = arguments.length
  return s === 2
    ? le(t) && !V(t)
      ? Rs(t)
        ? ge(e, null, [t])
        : ge(e, t)
      : ge(e, null, t)
    : (s > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : s === 3 && Rs(n) && (n = [n]),
      ge(e, t, n))
}
const Nc = '3.4.27'
/**
 * @vue/runtime-dom v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Lc = 'http://www.w3.org/2000/svg',
  Fc = 'http://www.w3.org/1998/Math/MathML',
  mt = typeof document < 'u' ? document : null,
  To = mt && mt.createElement('template'),
  Dc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const o =
        t === 'svg'
          ? mt.createElementNS(Lc, e)
          : t === 'mathml'
            ? mt.createElementNS(Fc, e)
            : mt.createElement(e, n ? { is: n } : void 0)
      return e === 'select' && s && s.multiple != null && o.setAttribute('multiple', s.multiple), o
    },
    createText: (e) => mt.createTextNode(e),
    createComment: (e) => mt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => mt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, o, r) {
      const i = n ? n.previousSibling : t.lastChild
      if (o && (o === r || o.nextSibling))
        for (; t.insertBefore(o.cloneNode(!0), n), !(o === r || !(o = o.nextSibling)); );
      else {
        To.innerHTML = s === 'svg' ? `<svg>${e}</svg>` : s === 'mathml' ? `<math>${e}</math>` : e
        const c = To.content
        if (s === 'svg' || s === 'mathml') {
          const l = c.firstChild
          for (; l.firstChild; ) c.appendChild(l.firstChild)
          c.removeChild(l)
        }
        t.insertBefore(c, n)
      }
      return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
  },
  jc = Symbol('_vtc')
function Hc(e, t, n) {
  const s = e[jc]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t)
}
const Bn = Symbol('_vod'),
  pi = Symbol('_vsh'),
  Vc = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e[Bn] = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : en(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), en(e, !0), s.enter(e))
            : s.leave(e, () => {
                en(e, !1)
              })
          : en(e, t))
    },
    beforeUnmount(e, { value: t }) {
      en(e, t)
    }
  }
function en(e, t) {
  ;(e.style.display = t ? e[Bn] : 'none'), (e[pi] = !t)
}
const Bc = Symbol(''),
  Uc = /(^|;)\s*display\s*:/
function Wc(e, t, n) {
  const s = e.style,
    o = de(n)
  let r = !1
  if (n && !o) {
    if (t)
      if (de(t))
        for (const i of t.split(';')) {
          const c = i.slice(0, i.indexOf(':')).trim()
          n[c] == null && Ln(s, c, '')
        }
      else for (const i in t) n[i] == null && Ln(s, i, '')
    for (const i in n) i === 'display' && (r = !0), Ln(s, i, n[i])
  } else if (o) {
    if (t !== n) {
      const i = s[Bc]
      i && (n += ';' + i), (s.cssText = n), (r = Uc.test(n))
    }
  } else t && e.removeAttribute('style')
  Bn in e && ((e[Bn] = r ? s.display : ''), e[pi] && (s.display = 'none'))
}
const No = /\s*!important$/
function Ln(e, t, n) {
  if (V(n)) n.forEach((s) => Ln(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = Kc(e, t)
    No.test(n) ? e.setProperty(wt(s), n.replace(No, ''), 'important') : (e[s] = n)
  }
}
const Lo = ['Webkit', 'Moz', 'ms'],
  ds = {}
function Kc(e, t) {
  const n = ds[t]
  if (n) return n
  let s = Be(t)
  if (s !== 'filter' && s in e) return (ds[t] = s)
  s = qn(s)
  for (let o = 0; o < Lo.length; o++) {
    const r = Lo[o] + s
    if (r in e) return (ds[t] = r)
  }
  return t
}
const Fo = 'http://www.w3.org/1999/xlink'
function zc(e, t, n, s, o) {
  if (s && t.startsWith('xlink:'))
    n == null ? e.removeAttributeNS(Fo, t.slice(6, t.length)) : e.setAttributeNS(Fo, t, n)
  else {
    const r = Gi(t)
    n == null || (r && !pr(n)) ? e.removeAttribute(t) : e.setAttribute(t, r ? '' : n)
  }
}
function qc(e, t, n, s, o, r, i) {
  if (t === 'innerHTML' || t === 'textContent') {
    s && i(s, o, r), (e[t] = n ?? '')
    return
  }
  const c = e.tagName
  if (t === 'value' && c !== 'PROGRESS' && !c.includes('-')) {
    const a = c === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      u = n ?? ''
    ;(a !== u || !('_value' in e)) && (e.value = u),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let l = !1
  if (n === '' || n == null) {
    const a = typeof e[t]
    a === 'boolean'
      ? (n = pr(n))
      : n == null && a === 'string'
        ? ((n = ''), (l = !0))
        : a === 'number' && ((n = 0), (l = !0))
  }
  try {
    e[t] = n
  } catch {}
  l && e.removeAttribute(t)
}
function Rt(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function Gc(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const Do = Symbol('_vei')
function Yc(e, t, n, s, o = null) {
  const r = e[Do] || (e[Do] = {}),
    i = r[t]
  if (s && i) i.value = s
  else {
    const [c, l] = Xc(t)
    if (s) {
      const a = (r[t] = Qc(s, o))
      Rt(e, c, a, l)
    } else i && (Gc(e, c, i, l), (r[t] = void 0))
  }
}
const jo = /(?:Once|Passive|Capture)$/
function Xc(e) {
  let t
  if (jo.test(e)) {
    t = {}
    let s
    for (; (s = e.match(jo)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : wt(e.slice(2)), t]
}
let hs = 0
const Jc = Promise.resolve(),
  Zc = () => hs || (Jc.then(() => (hs = 0)), (hs = Date.now()))
function Qc(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    Ve(eu(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = Zc()), n
}
function eu(e, t) {
  if (V(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (o) => !o._stopped && s && s(o))
    )
  } else return t
}
const Ho = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  tu = (e, t, n, s, o, r, i, c, l) => {
    const a = o === 'svg'
    t === 'class'
      ? Hc(e, s, a)
      : t === 'style'
        ? Wc(e, n, s)
        : Wn(t)
          ? Ls(t) || Yc(e, t, n, s, i)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : nu(e, t, s, a)
              )
            ? qc(e, t, s, r, i, c, l)
            : (t === 'true-value' ? (e._trueValue = s) : t === 'false-value' && (e._falseValue = s),
              zc(e, t, s, a))
  }
function nu(e, t, n, s) {
  if (s) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && Ho(t) && W(n)))
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const o = e.tagName
    if (o === 'IMG' || o === 'VIDEO' || o === 'CANVAS' || o === 'SOURCE') return !1
  }
  return Ho(t) && de(n) ? !1 : t in e
}
const Un = (e) => {
  const t = e.props['onUpdate:modelValue'] || !1
  return V(t) ? (n) => Mn(t, n) : t
}
function su(e) {
  e.target.composing = !0
}
function Vo(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')))
}
const Wt = Symbol('_assign'),
  mi = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
      e[Wt] = Un(o)
      const r = s || (o.props && o.props.type === 'number')
      Rt(e, t ? 'change' : 'input', (i) => {
        if (i.target.composing) return
        let c = e.value
        n && (c = c.trim()), r && (c = vs(c)), e[Wt](c)
      }),
        n &&
          Rt(e, 'change', () => {
            e.value = e.value.trim()
          }),
        t || (Rt(e, 'compositionstart', su), Rt(e, 'compositionend', Vo), Rt(e, 'change', Vo))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ''
    },
    beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: o } }, r) {
      if (((e[Wt] = Un(r)), e.composing)) return
      const i = (o || e.type === 'number') && !/^0\d/.test(e.value) ? vs(e.value) : e.value,
        c = t ?? ''
      i !== c &&
        ((document.activeElement === e &&
          e.type !== 'range' &&
          (n || (s && e.value.trim() === c))) ||
          (e.value = c))
    }
  },
  As = {
    deep: !0,
    created(e, t, n) {
      ;(e[Wt] = Un(n)),
        Rt(e, 'change', () => {
          const s = e._modelValue,
            o = ou(e),
            r = e.checked,
            i = e[Wt]
          if (V(s)) {
            const c = mr(s, o),
              l = c !== -1
            if (r && !l) i(s.concat(o))
            else if (!r && l) {
              const a = [...s]
              a.splice(c, 1), i(a)
            }
          } else if (Kn(s)) {
            const c = new Set(s)
            r ? c.add(o) : c.delete(o), i(c)
          } else i(gi(e, r))
        })
    },
    mounted: Bo,
    beforeUpdate(e, t, n) {
      ;(e[Wt] = Un(n)), Bo(e, t, n)
    }
  }
function Bo(e, { value: t, oldValue: n }, s) {
  ;(e._modelValue = t),
    V(t)
      ? (e.checked = mr(t, s.props.value) > -1)
      : Kn(t)
        ? (e.checked = t.has(s.props.value))
        : t !== n && (e.checked = Gn(t, gi(e, !0)))
}
function ou(e) {
  return '_value' in e ? e._value : e.value
}
function gi(e, t) {
  const n = t ? '_trueValue' : '_falseValue'
  return n in e ? e[n] : t
}
const ru = ['ctrl', 'shift', 'alt', 'meta'],
  iu = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => ru.some((n) => e[`${n}Key`] && !t.includes(n))
  },
  eo = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (o, ...r) => {
        for (let i = 0; i < t.length; i++) {
          const c = iu[t[i]]
          if (c && c(o, t)) return
        }
        return e(o, ...r)
      })
    )
  },
  lu = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
  },
  cu = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (o) => {
        if (!('key' in o)) return
        const r = wt(o.key)
        if (t.some((i) => i === r || lu[i] === r)) return e(o)
      })
    )
  },
  uu = ve({ patchProp: tu }, Dc)
let Uo
function au() {
  return Uo || (Uo = pc(uu))
}
const fu = (...e) => {
  const t = au().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const o = hu(s)
      if (!o) return
      const r = t._component
      !W(r) && !r.render && !r.template && (r.template = o.innerHTML), (o.innerHTML = '')
      const i = n(o, !1, du(o))
      return (
        o instanceof Element && (o.removeAttribute('v-cloak'), o.setAttribute('data-v-app', '')), i
      )
    }),
    t
  )
}
function du(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function hu(e) {
  return de(e) ? document.querySelector(e) : e
}
var pu = !1
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ let vi
const os = (e) => (vi = e),
  _i = Symbol()
function Is(e) {
  return (
    e &&
    typeof e == 'object' &&
    Object.prototype.toString.call(e) === '[object Object]' &&
    typeof e.toJSON != 'function'
  )
}
var cn
;(function (e) {
  ;(e.direct = 'direct'), (e.patchObject = 'patch object'), (e.patchFunction = 'patch function')
})(cn || (cn = {}))
function mu() {
  const e = _r(!0),
    t = e.run(() => q({}))
  let n = [],
    s = []
  const o = tt({
    install(r) {
      os(o),
        (o._a = r),
        r.provide(_i, o),
        (r.config.globalProperties.$pinia = o),
        s.forEach((i) => n.push(i)),
        (s = [])
    },
    use(r) {
      return !this._a && !pu ? s.push(r) : n.push(r), this
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t
  })
  return o
}
const yi = () => {}
function Wo(e, t, n, s = yi) {
  e.push(t)
  const o = () => {
    const r = e.indexOf(t)
    r > -1 && (e.splice(r, 1), s())
  }
  return !n && yr() && Ji(o), o
}
function Ft(e, ...t) {
  e.slice().forEach((n) => {
    n(...t)
  })
}
const gu = (e) => e()
function Ms(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, s) => e.set(s, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e)
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue
    const s = t[n],
      o = e[n]
    Is(o) && Is(s) && e.hasOwnProperty(n) && !he(s) && !Mt(s) ? (e[n] = Ms(o, s)) : (e[n] = s)
  }
  return e
}
const vu = Symbol()
function _u(e) {
  return !Is(e) || !e.hasOwnProperty(vu)
}
const { assign: ft } = Object
function yu(e) {
  return !!(he(e) && e.effect)
}
function wu(e, t, n, s) {
  const { state: o, actions: r, getters: i } = t,
    c = n.state.value[e]
  let l
  function a() {
    c || (n.state.value[e] = o ? o() : {})
    const u = El(n.state.value[e])
    return ft(
      u,
      r,
      Object.keys(i || {}).reduce(
        (h, p) => (
          (h[p] = tt(
            Se(() => {
              os(n)
              const m = n._s.get(e)
              return i[p].call(m, m)
            })
          )),
          h
        ),
        {}
      )
    )
  }
  return (l = wi(e, a, t, n, s, !0)), l
}
function wi(e, t, n = {}, s, o, r) {
  let i
  const c = ft({ actions: {} }, n),
    l = { deep: !0 }
  let a,
    u,
    h = [],
    p = [],
    m
  const b = s.state.value[e]
  !r && !b && (s.state.value[e] = {}), q({})
  let P
  function T(z) {
    let Y
    ;(a = u = !1),
      typeof z == 'function'
        ? (z(s.state.value[e]), (Y = { type: cn.patchFunction, storeId: e, events: m }))
        : (Ms(s.state.value[e], z),
          (Y = { type: cn.patchObject, payload: z, storeId: e, events: m }))
    const fe = (P = Symbol())
    Gs().then(() => {
      P === fe && (a = !0)
    }),
      (u = !0),
      Ft(h, Y, s.state.value[e])
  }
  const v = r
    ? function () {
        const { state: Y } = n,
          fe = Y ? Y() : {}
        this.$patch((be) => {
          ft(be, fe)
        })
      }
    : yi
  function _() {
    i.stop(), (h = []), (p = []), s._s.delete(e)
  }
  function F(z, Y) {
    return function () {
      os(s)
      const fe = Array.from(arguments),
        be = [],
        Ie = []
      function $e(Q) {
        be.push(Q)
      }
      function Et(Q) {
        Ie.push(Q)
      }
      Ft(p, { args: fe, name: z, store: A, after: $e, onError: Et })
      let Te
      try {
        Te = Y.apply(this && this.$id === e ? this : A, fe)
      } catch (Q) {
        throw (Ft(Ie, Q), Q)
      }
      return Te instanceof Promise
        ? Te.then((Q) => (Ft(be, Q), Q)).catch((Q) => (Ft(Ie, Q), Promise.reject(Q)))
        : (Ft(be, Te), Te)
    }
  }
  const S = {
      _p: s,
      $id: e,
      $onAction: Wo.bind(null, p),
      $patch: T,
      $reset: v,
      $subscribe(z, Y = {}) {
        const fe = Wo(h, z, Y.detached, () => be()),
          be = i.run(() =>
            yt(
              () => s.state.value[e],
              (Ie) => {
                ;(Y.flush === 'sync' ? u : a) && z({ storeId: e, type: cn.direct, events: m }, Ie)
              },
              ft({}, l, Y)
            )
          )
        return fe
      },
      $dispose: _
    },
    A = yn(S)
  s._s.set(e, A)
  const Z = ((s._a && s._a.runWithContext) || gu)(() => s._e.run(() => (i = _r()).run(t)))
  for (const z in Z) {
    const Y = Z[z]
    if ((he(Y) && !yu(Y)) || Mt(Y))
      r || (b && _u(Y) && (he(Y) ? (Y.value = b[z]) : Ms(Y, b[z])), (s.state.value[e][z] = Y))
    else if (typeof Y == 'function') {
      const fe = F(z, Y)
      ;(Z[z] = fe), (c.actions[z] = Y)
    }
  }
  return (
    ft(A, Z),
    ft(J(A), Z),
    Object.defineProperty(A, '$state', {
      get: () => s.state.value[e],
      set: (z) => {
        T((Y) => {
          ft(Y, z)
        })
      }
    }),
    s._p.forEach((z) => {
      ft(
        A,
        i.run(() => z({ store: A, app: s._a, pinia: s, options: c }))
      )
    }),
    b && r && n.hydrate && n.hydrate(A.$state, b),
    (a = !0),
    (u = !0),
    A
  )
}
function to(e, t, n) {
  let s, o
  const r = typeof t == 'function'
  typeof e == 'string' ? ((s = e), (o = r ? n : t)) : ((o = e), (s = e.id))
  function i(c, l) {
    const a = cc()
    return (
      (c = c || (a ? Ye(_i, null) : null)),
      c && os(c),
      (c = vi),
      c._s.has(s) || (r ? wi(s, t, o, c) : wu(s, o, c)),
      c._s.get(s)
    )
  }
  return (i.$id = s), i
}
const we = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, o] of t) n[s] = o
    return n
  },
  bu = {}
function Cu(e, t) {
  const n = Fl('RouterView')
  return B(), Ze(n)
}
const Eu = we(bu, [['render', Cu]])
/*!
 * vue-router v4.3.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Dt = typeof document < 'u'
function Su(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const ne = Object.assign
function ps(e, t) {
  const n = {}
  for (const s in t) {
    const o = t[s]
    n[s] = Ue(o) ? o.map(e) : e(o)
  }
  return n
}
const un = () => {},
  Ue = Array.isArray,
  bi = /#/g,
  xu = /&/g,
  ku = /\//g,
  Ru = /=/g,
  Pu = /\?/g,
  Ci = /\+/g,
  Au = /%5B/g,
  Iu = /%5D/g,
  Ei = /%5E/g,
  Mu = /%60/g,
  Si = /%7B/g,
  Ou = /%7C/g,
  xi = /%7D/g,
  $u = /%20/g
function no(e) {
  return encodeURI('' + e)
    .replace(Ou, '|')
    .replace(Au, '[')
    .replace(Iu, ']')
}
function Tu(e) {
  return no(e).replace(Si, '{').replace(xi, '}').replace(Ei, '^')
}
function Os(e) {
  return no(e)
    .replace(Ci, '%2B')
    .replace($u, '+')
    .replace(bi, '%23')
    .replace(xu, '%26')
    .replace(Mu, '`')
    .replace(Si, '{')
    .replace(xi, '}')
    .replace(Ei, '^')
}
function Nu(e) {
  return Os(e).replace(Ru, '%3D')
}
function Lu(e) {
  return no(e).replace(bi, '%23').replace(Pu, '%3F')
}
function Fu(e) {
  return e == null ? '' : Lu(e).replace(ku, '%2F')
}
function gn(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const Du = /\/$/,
  ju = (e) => e.replace(Du, '')
function ms(e, t, n = '/') {
  let s,
    o = {},
    r = '',
    i = ''
  const c = t.indexOf('#')
  let l = t.indexOf('?')
  return (
    c < l && c >= 0 && (l = -1),
    l > -1 && ((s = t.slice(0, l)), (r = t.slice(l + 1, c > -1 ? c : t.length)), (o = e(r))),
    c > -1 && ((s = s || t.slice(0, c)), (i = t.slice(c, t.length))),
    (s = Uu(s ?? t, n)),
    { fullPath: s + (r && '?') + r + i, path: s, query: o, hash: gn(i) }
  )
}
function Hu(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function Ko(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function Vu(e, t, n) {
  const s = t.matched.length - 1,
    o = n.matched.length - 1
  return (
    s > -1 &&
    s === o &&
    Gt(t.matched[s], n.matched[o]) &&
    ki(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Gt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function ki(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!Bu(e[n], t[n])) return !1
  return !0
}
function Bu(e, t) {
  return Ue(e) ? zo(e, t) : Ue(t) ? zo(t, e) : e === t
}
function zo(e, t) {
  return Ue(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function Uu(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    s = e.split('/'),
    o = s[s.length - 1]
  ;(o === '..' || o === '.') && s.push('')
  let r = n.length - 1,
    i,
    c
  for (i = 0; i < s.length; i++)
    if (((c = s[i]), c !== '.'))
      if (c === '..') r > 1 && r--
      else break
  return n.slice(0, r).join('/') + '/' + s.slice(i).join('/')
}
var vn
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(vn || (vn = {}))
var an
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(an || (an = {}))
function Wu(e) {
  if (!e)
    if (Dt) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), ju(e)
}
const Ku = /^[^#]+#/
function zu(e, t) {
  return e.replace(Ku, '#') + t
}
function qu(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  }
}
const rs = () => ({ left: window.scrollX, top: window.scrollY })
function Gu(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      s = typeof n == 'string' && n.startsWith('#'),
      o =
        typeof n == 'string'
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!o) return
    t = qu(o, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      )
}
function qo(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const $s = new Map()
function Yu(e, t) {
  $s.set(e, t)
}
function Xu(e) {
  const t = $s.get(e)
  return $s.delete(e), t
}
let Ju = () => location.protocol + '//' + location.host
function Ri(e, t) {
  const { pathname: n, search: s, hash: o } = t,
    r = e.indexOf('#')
  if (r > -1) {
    let c = o.includes(e.slice(r)) ? e.slice(r).length : 1,
      l = o.slice(c)
    return l[0] !== '/' && (l = '/' + l), Ko(l, '')
  }
  return Ko(n, e) + s + o
}
function Zu(e, t, n, s) {
  let o = [],
    r = [],
    i = null
  const c = ({ state: p }) => {
    const m = Ri(e, location),
      b = n.value,
      P = t.value
    let T = 0
    if (p) {
      if (((n.value = m), (t.value = p), i && i === b)) {
        i = null
        return
      }
      T = P ? p.position - P.position : 0
    } else s(m)
    o.forEach((v) => {
      v(n.value, b, {
        delta: T,
        type: vn.pop,
        direction: T ? (T > 0 ? an.forward : an.back) : an.unknown
      })
    })
  }
  function l() {
    i = n.value
  }
  function a(p) {
    o.push(p)
    const m = () => {
      const b = o.indexOf(p)
      b > -1 && o.splice(b, 1)
    }
    return r.push(m), m
  }
  function u() {
    const { history: p } = window
    p.state && p.replaceState(ne({}, p.state, { scroll: rs() }), '')
  }
  function h() {
    for (const p of r) p()
    ;(r = []),
      window.removeEventListener('popstate', c),
      window.removeEventListener('beforeunload', u)
  }
  return (
    window.addEventListener('popstate', c),
    window.addEventListener('beforeunload', u, { passive: !0 }),
    { pauseListeners: l, listen: a, destroy: h }
  )
}
function Go(e, t, n, s = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: o ? rs() : null
  }
}
function Qu(e) {
  const { history: t, location: n } = window,
    s = { value: Ri(e, n) },
    o = { value: t.state }
  o.value ||
    r(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
      },
      !0
    )
  function r(l, a, u) {
    const h = e.indexOf('#'),
      p = h > -1 ? (n.host && document.querySelector('base') ? e : e.slice(h)) + l : Ju() + e + l
    try {
      t[u ? 'replaceState' : 'pushState'](a, '', p), (o.value = a)
    } catch (m) {
      console.error(m), n[u ? 'replace' : 'assign'](p)
    }
  }
  function i(l, a) {
    const u = ne({}, t.state, Go(o.value.back, l, o.value.forward, !0), a, {
      position: o.value.position
    })
    r(l, u, !0), (s.value = l)
  }
  function c(l, a) {
    const u = ne({}, o.value, t.state, { forward: l, scroll: rs() })
    r(u.current, u, !0)
    const h = ne({}, Go(s.value, l, null), { position: u.position + 1 }, a)
    r(l, h, !1), (s.value = l)
  }
  return { location: s, state: o, push: c, replace: i }
}
function ea(e) {
  e = Wu(e)
  const t = Qu(e),
    n = Zu(e, t.state, t.location, t.replace)
  function s(r, i = !0) {
    i || n.pauseListeners(), history.go(r)
  }
  const o = ne({ location: '', base: e, go: s, createHref: zu.bind(null, e) }, t, n)
  return (
    Object.defineProperty(o, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(o, 'state', { enumerable: !0, get: () => t.state.value }),
    o
  )
}
function ta(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function Pi(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const at = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0
  },
  Ai = Symbol('')
var Yo
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(Yo || (Yo = {}))
function Yt(e, t) {
  return ne(new Error(), { type: e, [Ai]: !0 }, t)
}
function et(e, t) {
  return e instanceof Error && Ai in e && (t == null || !!(e.type & t))
}
const Xo = '[^/]+?',
  na = { sensitive: !1, strict: !1, start: !0, end: !0 },
  sa = /[.+*?^${}()[\]/\\]/g
function oa(e, t) {
  const n = ne({}, na, t),
    s = []
  let o = n.start ? '^' : ''
  const r = []
  for (const a of e) {
    const u = a.length ? [] : [90]
    n.strict && !a.length && (o += '/')
    for (let h = 0; h < a.length; h++) {
      const p = a[h]
      let m = 40 + (n.sensitive ? 0.25 : 0)
      if (p.type === 0) h || (o += '/'), (o += p.value.replace(sa, '\\$&')), (m += 40)
      else if (p.type === 1) {
        const { value: b, repeatable: P, optional: T, regexp: v } = p
        r.push({ name: b, repeatable: P, optional: T })
        const _ = v || Xo
        if (_ !== Xo) {
          m += 10
          try {
            new RegExp(`(${_})`)
          } catch (S) {
            throw new Error(`Invalid custom RegExp for param "${b}" (${_}): ` + S.message)
          }
        }
        let F = P ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`
        h || (F = T && a.length < 2 ? `(?:/${F})` : '/' + F),
          T && (F += '?'),
          (o += F),
          (m += 20),
          T && (m += -8),
          P && (m += -20),
          _ === '.*' && (m += -50)
      }
      u.push(m)
    }
    s.push(u)
  }
  if (n.strict && n.end) {
    const a = s.length - 1
    s[a][s[a].length - 1] += 0.7000000000000001
  }
  n.strict || (o += '/?'), n.end ? (o += '$') : n.strict && (o += '(?:/|$)')
  const i = new RegExp(o, n.sensitive ? '' : 'i')
  function c(a) {
    const u = a.match(i),
      h = {}
    if (!u) return null
    for (let p = 1; p < u.length; p++) {
      const m = u[p] || '',
        b = r[p - 1]
      h[b.name] = m && b.repeatable ? m.split('/') : m
    }
    return h
  }
  function l(a) {
    let u = '',
      h = !1
    for (const p of e) {
      ;(!h || !u.endsWith('/')) && (u += '/'), (h = !1)
      for (const m of p)
        if (m.type === 0) u += m.value
        else if (m.type === 1) {
          const { value: b, repeatable: P, optional: T } = m,
            v = b in a ? a[b] : ''
          if (Ue(v) && !P)
            throw new Error(
              `Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`
            )
          const _ = Ue(v) ? v.join('/') : v
          if (!_)
            if (T) p.length < 2 && (u.endsWith('/') ? (u = u.slice(0, -1)) : (h = !0))
            else throw new Error(`Missing required param "${b}"`)
          u += _
        }
    }
    return u || '/'
  }
  return { re: i, score: s, keys: r, parse: c, stringify: l }
}
function ra(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n]
    if (s) return s
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0
}
function ia(e, t) {
  let n = 0
  const s = e.score,
    o = t.score
  for (; n < s.length && n < o.length; ) {
    const r = ra(s[n], o[n])
    if (r) return r
    n++
  }
  if (Math.abs(o.length - s.length) === 1) {
    if (Jo(s)) return 1
    if (Jo(o)) return -1
  }
  return o.length - s.length
}
function Jo(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const la = { type: 0, value: '' },
  ca = /[a-zA-Z0-9_]/
function ua(e) {
  if (!e) return [[]]
  if (e === '/') return [[la]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(m) {
    throw new Error(`ERR (${n})/"${a}": ${m}`)
  }
  let n = 0,
    s = n
  const o = []
  let r
  function i() {
    r && o.push(r), (r = [])
  }
  let c = 0,
    l,
    a = '',
    u = ''
  function h() {
    a &&
      (n === 0
        ? r.push({ type: 0, value: a })
        : n === 1 || n === 2 || n === 3
          ? (r.length > 1 &&
              (l === '*' || l === '+') &&
              t(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),
            r.push({
              type: 1,
              value: a,
              regexp: u,
              repeatable: l === '*' || l === '+',
              optional: l === '*' || l === '?'
            }))
          : t('Invalid state to consume buffer'),
      (a = ''))
  }
  function p() {
    a += l
  }
  for (; c < e.length; ) {
    if (((l = e[c++]), l === '\\' && n !== 2)) {
      ;(s = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        l === '/' ? (a && h(), i()) : l === ':' ? (h(), (n = 1)) : p()
        break
      case 4:
        p(), (n = s)
        break
      case 1:
        l === '('
          ? (n = 2)
          : ca.test(l)
            ? p()
            : (h(), (n = 0), l !== '*' && l !== '?' && l !== '+' && c--)
        break
      case 2:
        l === ')' ? (u[u.length - 1] == '\\' ? (u = u.slice(0, -1) + l) : (n = 3)) : (u += l)
        break
      case 3:
        h(), (n = 0), l !== '*' && l !== '?' && l !== '+' && c--, (u = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${a}"`), h(), i(), o
}
function aa(e, t, n) {
  const s = oa(ua(e.path), n),
    o = ne(s, { record: e, parent: t, children: [], alias: [] })
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o
}
function fa(e, t) {
  const n = [],
    s = new Map()
  t = er({ strict: !1, end: !0, sensitive: !1 }, t)
  function o(u) {
    return s.get(u)
  }
  function r(u, h, p) {
    const m = !p,
      b = da(u)
    b.aliasOf = p && p.record
    const P = er(t, u),
      T = [b]
    if ('alias' in u) {
      const F = typeof u.alias == 'string' ? [u.alias] : u.alias
      for (const S of F)
        T.push(
          ne({}, b, {
            components: p ? p.record.components : b.components,
            path: S,
            aliasOf: p ? p.record : b
          })
        )
    }
    let v, _
    for (const F of T) {
      const { path: S } = F
      if (h && S[0] !== '/') {
        const A = h.record.path,
          x = A[A.length - 1] === '/' ? '' : '/'
        F.path = h.record.path + (S && x + S)
      }
      if (
        ((v = aa(F, h, P)),
        p
          ? p.alias.push(v)
          : ((_ = _ || v), _ !== v && _.alias.push(v), m && u.name && !Qo(v) && i(u.name)),
        b.children)
      ) {
        const A = b.children
        for (let x = 0; x < A.length; x++) r(A[x], v, p && p.children[x])
      }
      ;(p = p || v),
        ((v.record.components && Object.keys(v.record.components).length) ||
          v.record.name ||
          v.record.redirect) &&
          l(v)
    }
    return _
      ? () => {
          i(_)
        }
      : un
  }
  function i(u) {
    if (Pi(u)) {
      const h = s.get(u)
      h && (s.delete(u), n.splice(n.indexOf(h), 1), h.children.forEach(i), h.alias.forEach(i))
    } else {
      const h = n.indexOf(u)
      h > -1 &&
        (n.splice(h, 1),
        u.record.name && s.delete(u.record.name),
        u.children.forEach(i),
        u.alias.forEach(i))
    }
  }
  function c() {
    return n
  }
  function l(u) {
    let h = 0
    for (
      ;
      h < n.length && ia(u, n[h]) >= 0 && (u.record.path !== n[h].record.path || !Ii(u, n[h]));

    )
      h++
    n.splice(h, 0, u), u.record.name && !Qo(u) && s.set(u.record.name, u)
  }
  function a(u, h) {
    let p,
      m = {},
      b,
      P
    if ('name' in u && u.name) {
      if (((p = s.get(u.name)), !p)) throw Yt(1, { location: u })
      ;(P = p.record.name),
        (m = ne(
          Zo(
            h.params,
            p.keys
              .filter((_) => !_.optional)
              .concat(p.parent ? p.parent.keys.filter((_) => _.optional) : [])
              .map((_) => _.name)
          ),
          u.params &&
            Zo(
              u.params,
              p.keys.map((_) => _.name)
            )
        )),
        (b = p.stringify(m))
    } else if (u.path != null)
      (b = u.path), (p = n.find((_) => _.re.test(b))), p && ((m = p.parse(b)), (P = p.record.name))
    else {
      if (((p = h.name ? s.get(h.name) : n.find((_) => _.re.test(h.path))), !p))
        throw Yt(1, { location: u, currentLocation: h })
      ;(P = p.record.name), (m = ne({}, h.params, u.params)), (b = p.stringify(m))
    }
    const T = []
    let v = p
    for (; v; ) T.unshift(v.record), (v = v.parent)
    return { name: P, path: b, params: m, matched: T, meta: pa(T) }
  }
  return (
    e.forEach((u) => r(u)),
    { addRoute: r, resolve: a, removeRoute: i, getRoutes: c, getRecordMatcher: o }
  )
}
function Zo(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function da(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: ha(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component }
  }
}
function ha(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == 'object' ? n[s] : n
  return t
}
function Qo(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function pa(e) {
  return e.reduce((t, n) => ne(t, n.meta), {})
}
function er(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
function Ii(e, t) {
  return t.children.some((n) => n === e || Ii(e, n))
}
function ma(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const s = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let o = 0; o < s.length; ++o) {
    const r = s[o].replace(Ci, ' '),
      i = r.indexOf('='),
      c = gn(i < 0 ? r : r.slice(0, i)),
      l = i < 0 ? null : gn(r.slice(i + 1))
    if (c in t) {
      let a = t[c]
      Ue(a) || (a = t[c] = [a]), a.push(l)
    } else t[c] = l
  }
  return t
}
function tr(e) {
  let t = ''
  for (let n in e) {
    const s = e[n]
    if (((n = Nu(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Ue(s) ? s.map((r) => r && Os(r)) : [s && Os(s)]).forEach((r) => {
      r !== void 0 && ((t += (t.length ? '&' : '') + n), r != null && (t += '=' + r))
    })
  }
  return t
}
function ga(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 &&
      (t[n] = Ue(s) ? s.map((o) => (o == null ? null : '' + o)) : s == null ? s : '' + s)
  }
  return t
}
const va = Symbol(''),
  nr = Symbol(''),
  so = Symbol(''),
  Mi = Symbol(''),
  Ts = Symbol('')
function tn() {
  let e = []
  function t(s) {
    return (
      e.push(s),
      () => {
        const o = e.indexOf(s)
        o > -1 && e.splice(o, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function gt(e, t, n, s, o, r = (i) => i()) {
  const i = s && (s.enterCallbacks[o] = s.enterCallbacks[o] || [])
  return () =>
    new Promise((c, l) => {
      const a = (p) => {
          p === !1
            ? l(Yt(4, { from: n, to: t }))
            : p instanceof Error
              ? l(p)
              : ta(p)
                ? l(Yt(2, { from: t, to: p }))
                : (i && s.enterCallbacks[o] === i && typeof p == 'function' && i.push(p), c())
        },
        u = r(() => e.call(s && s.instances[o], t, n, a))
      let h = Promise.resolve(u)
      e.length < 3 && (h = h.then(a)), h.catch((p) => l(p))
    })
}
function gs(e, t, n, s, o = (r) => r()) {
  const r = []
  for (const i of e)
    for (const c in i.components) {
      let l = i.components[c]
      if (!(t !== 'beforeRouteEnter' && !i.instances[c]))
        if (_a(l)) {
          const u = (l.__vccOpts || l)[t]
          u && r.push(gt(u, n, s, i, c, o))
        } else {
          let a = l()
          r.push(() =>
            a.then((u) => {
              if (!u)
                return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${i.path}"`))
              const h = Su(u) ? u.default : u
              i.components[c] = h
              const m = (h.__vccOpts || h)[t]
              return m && gt(m, n, s, i, c, o)()
            })
          )
        }
    }
  return r
}
function _a(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function sr(e) {
  const t = Ye(so),
    n = Ye(Mi),
    s = Se(() => {
      const l = re(e.to)
      return t.resolve(l)
    }),
    o = Se(() => {
      const { matched: l } = s.value,
        { length: a } = l,
        u = l[a - 1],
        h = n.matched
      if (!u || !h.length) return -1
      const p = h.findIndex(Gt.bind(null, u))
      if (p > -1) return p
      const m = or(l[a - 2])
      return a > 1 && or(u) === m && h[h.length - 1].path !== m
        ? h.findIndex(Gt.bind(null, l[a - 2]))
        : p
    }),
    r = Se(() => o.value > -1 && Ca(n.params, s.value.params)),
    i = Se(() => o.value > -1 && o.value === n.matched.length - 1 && ki(n.params, s.value.params))
  function c(l = {}) {
    return ba(l) ? t[re(e.replace) ? 'replace' : 'push'](re(e.to)).catch(un) : Promise.resolve()
  }
  return { route: s, href: Se(() => s.value.href), isActive: r, isExactActive: i, navigate: c }
}
const ya = _e({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' }
    },
    useLink: sr,
    setup(e, { slots: t }) {
      const n = yn(sr(e)),
        { options: s } = Ye(so),
        o = Se(() => ({
          [rr(e.activeClass, s.linkActiveClass, 'router-link-active')]: n.isActive,
          [rr(e.exactActiveClass, s.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive
        }))
      return () => {
        const r = t.default && t.default(n)
        return e.custom
          ? r
          : hi(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value
              },
              r
            )
      }
    }
  }),
  wa = ya
function ba(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function Ca(e, t) {
  for (const n in t) {
    const s = t[n],
      o = e[n]
    if (typeof s == 'string') {
      if (s !== o) return !1
    } else if (!Ue(o) || o.length !== s.length || s.some((r, i) => r !== o[i])) return !1
  }
  return !0
}
function or(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const rr = (e, t, n) => e ?? t ?? n,
  Ea = _e({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = Ye(Ts),
        o = Se(() => e.route || s.value),
        r = Ye(nr, 0),
        i = Se(() => {
          let a = re(r)
          const { matched: u } = o.value
          let h
          for (; (h = u[a]) && !h.components; ) a++
          return a
        }),
        c = Se(() => o.value.matched[i.value])
      $n(
        nr,
        Se(() => i.value + 1)
      ),
        $n(va, c),
        $n(Ts, o)
      const l = q()
      return (
        yt(
          () => [l.value, c.value, e.name],
          ([a, u, h], [p, m, b]) => {
            u &&
              ((u.instances[h] = a),
              m &&
                m !== u &&
                a &&
                a === p &&
                (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards),
                u.updateGuards.size || (u.updateGuards = m.updateGuards))),
              a && u && (!m || !Gt(u, m) || !p) && (u.enterCallbacks[h] || []).forEach((P) => P(a))
          },
          { flush: 'post' }
        ),
        () => {
          const a = o.value,
            u = e.name,
            h = c.value,
            p = h && h.components[u]
          if (!p) return ir(n.default, { Component: p, route: a })
          const m = h.props[u],
            b = m ? (m === !0 ? a.params : typeof m == 'function' ? m(a) : m) : null,
            T = hi(
              p,
              ne({}, b, t, {
                onVnodeUnmounted: (v) => {
                  v.component.isUnmounted && (h.instances[u] = null)
                },
                ref: l
              })
            )
          return ir(n.default, { Component: T, route: a }) || T
        }
      )
    }
  })
function ir(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const Sa = Ea
function xa(e) {
  const t = fa(e.routes, e),
    n = e.parseQuery || ma,
    s = e.stringifyQuery || tr,
    o = e.history,
    r = tn(),
    i = tn(),
    c = tn(),
    l = Nr(at)
  let a = at
  Dt && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const u = ps.bind(null, (w) => '' + w),
    h = ps.bind(null, Fu),
    p = ps.bind(null, gn)
  function m(w, N) {
    let O, D
    return Pi(w) ? ((O = t.getRecordMatcher(w)), (D = N)) : (D = w), t.addRoute(D, O)
  }
  function b(w) {
    const N = t.getRecordMatcher(w)
    N && t.removeRoute(N)
  }
  function P() {
    return t.getRoutes().map((w) => w.record)
  }
  function T(w) {
    return !!t.getRecordMatcher(w)
  }
  function v(w, N) {
    if (((N = ne({}, N || l.value)), typeof w == 'string')) {
      const d = ms(n, w, N.path),
        g = t.resolve({ path: d.path }, N),
        C = o.createHref(d.fullPath)
      return ne(d, g, { params: p(g.params), hash: gn(d.hash), redirectedFrom: void 0, href: C })
    }
    let O
    if (w.path != null) O = ne({}, w, { path: ms(n, w.path, N.path).path })
    else {
      const d = ne({}, w.params)
      for (const g in d) d[g] == null && delete d[g]
      ;(O = ne({}, w, { params: h(d) })), (N.params = h(N.params))
    }
    const D = t.resolve(O, N),
      te = w.hash || ''
    D.params = u(p(D.params))
    const ue = Hu(s, ne({}, w, { hash: Tu(te), path: D.path })),
      f = o.createHref(ue)
    return ne({ fullPath: ue, hash: te, query: s === tr ? ga(w.query) : w.query || {} }, D, {
      redirectedFrom: void 0,
      href: f
    })
  }
  function _(w) {
    return typeof w == 'string' ? ms(n, w, l.value.path) : ne({}, w)
  }
  function F(w, N) {
    if (a !== w) return Yt(8, { from: N, to: w })
  }
  function S(w) {
    return Z(w)
  }
  function A(w) {
    return S(ne(_(w), { replace: !0 }))
  }
  function x(w) {
    const N = w.matched[w.matched.length - 1]
    if (N && N.redirect) {
      const { redirect: O } = N
      let D = typeof O == 'function' ? O(w) : O
      return (
        typeof D == 'string' &&
          ((D = D.includes('?') || D.includes('#') ? (D = _(D)) : { path: D }), (D.params = {})),
        ne({ query: w.query, hash: w.hash, params: D.path != null ? {} : w.params }, D)
      )
    }
  }
  function Z(w, N) {
    const O = (a = v(w)),
      D = l.value,
      te = w.state,
      ue = w.force,
      f = w.replace === !0,
      d = x(O)
    if (d)
      return Z(
        ne(_(d), { state: typeof d == 'object' ? ne({}, te, d.state) : te, force: ue, replace: f }),
        N || O
      )
    const g = O
    g.redirectedFrom = N
    let C
    return (
      !ue && Vu(s, D, O) && ((C = Yt(16, { to: g, from: D })), We(D, D, !0, !1)),
      (C ? Promise.resolve(C) : fe(g, D))
        .catch((y) => (et(y) ? (et(y, 2) ? y : ct(y)) : ee(y, g, D)))
        .then((y) => {
          if (y) {
            if (et(y, 2))
              return Z(
                ne({ replace: f }, _(y.to), {
                  state: typeof y.to == 'object' ? ne({}, te, y.to.state) : te,
                  force: ue
                }),
                N || g
              )
          } else y = Ie(g, D, !0, f, te)
          return be(g, D, y), y
        })
    )
  }
  function z(w, N) {
    const O = F(w, N)
    return O ? Promise.reject(O) : Promise.resolve()
  }
  function Y(w) {
    const N = Nt.values().next().value
    return N && typeof N.runWithContext == 'function' ? N.runWithContext(w) : w()
  }
  function fe(w, N) {
    let O
    const [D, te, ue] = ka(w, N)
    O = gs(D.reverse(), 'beforeRouteLeave', w, N)
    for (const d of D)
      d.leaveGuards.forEach((g) => {
        O.push(gt(g, w, N))
      })
    const f = z.bind(null, w, N)
    return (
      O.push(f),
      Ce(O)
        .then(() => {
          O = []
          for (const d of r.list()) O.push(gt(d, w, N))
          return O.push(f), Ce(O)
        })
        .then(() => {
          O = gs(te, 'beforeRouteUpdate', w, N)
          for (const d of te)
            d.updateGuards.forEach((g) => {
              O.push(gt(g, w, N))
            })
          return O.push(f), Ce(O)
        })
        .then(() => {
          O = []
          for (const d of ue)
            if (d.beforeEnter)
              if (Ue(d.beforeEnter)) for (const g of d.beforeEnter) O.push(gt(g, w, N))
              else O.push(gt(d.beforeEnter, w, N))
          return O.push(f), Ce(O)
        })
        .then(
          () => (
            w.matched.forEach((d) => (d.enterCallbacks = {})),
            (O = gs(ue, 'beforeRouteEnter', w, N, Y)),
            O.push(f),
            Ce(O)
          )
        )
        .then(() => {
          O = []
          for (const d of i.list()) O.push(gt(d, w, N))
          return O.push(f), Ce(O)
        })
        .catch((d) => (et(d, 8) ? d : Promise.reject(d)))
    )
  }
  function be(w, N, O) {
    c.list().forEach((D) => Y(() => D(w, N, O)))
  }
  function Ie(w, N, O, D, te) {
    const ue = F(w, N)
    if (ue) return ue
    const f = N === at,
      d = Dt ? history.state : {}
    O &&
      (D || f
        ? o.replace(w.fullPath, ne({ scroll: f && d && d.scroll }, te))
        : o.push(w.fullPath, te)),
      (l.value = w),
      We(w, N, O, f),
      ct()
  }
  let $e
  function Et() {
    $e ||
      ($e = o.listen((w, N, O) => {
        if (!Sn.listening) return
        const D = v(w),
          te = x(D)
        if (te) {
          Z(ne(te, { replace: !0 }), D).catch(un)
          return
        }
        a = D
        const ue = l.value
        Dt && Yu(qo(ue.fullPath, O.delta), rs()),
          fe(D, ue)
            .catch((f) =>
              et(f, 12)
                ? f
                : et(f, 2)
                  ? (Z(f.to, D)
                      .then((d) => {
                        et(d, 20) && !O.delta && O.type === vn.pop && o.go(-1, !1)
                      })
                      .catch(un),
                    Promise.reject())
                  : (O.delta && o.go(-O.delta, !1), ee(f, D, ue))
            )
            .then((f) => {
              ;(f = f || Ie(D, ue, !1)),
                f &&
                  (O.delta && !et(f, 8)
                    ? o.go(-O.delta, !1)
                    : O.type === vn.pop && et(f, 20) && o.go(-1, !1)),
                be(D, ue, f)
            })
            .catch(un)
      }))
  }
  let Te = tn(),
    Q = tn(),
    se
  function ee(w, N, O) {
    ct(w)
    const D = Q.list()
    return D.length ? D.forEach((te) => te(w, N, O)) : console.error(w), Promise.reject(w)
  }
  function Qe() {
    return se && l.value !== at
      ? Promise.resolve()
      : new Promise((w, N) => {
          Te.add([w, N])
        })
  }
  function ct(w) {
    return se || ((se = !w), Et(), Te.list().forEach(([N, O]) => (w ? O(w) : N())), Te.reset()), w
  }
  function We(w, N, O, D) {
    const { scrollBehavior: te } = e
    if (!Dt || !te) return Promise.resolve()
    const ue =
      (!O && Xu(qo(w.fullPath, 0))) || ((D || !O) && history.state && history.state.scroll) || null
    return Gs()
      .then(() => te(w, N, ue))
      .then((f) => f && Gu(f))
      .catch((f) => ee(f, w, N))
  }
  const Re = (w) => o.go(w)
  let Tt
  const Nt = new Set(),
    Sn = {
      currentRoute: l,
      listening: !0,
      addRoute: m,
      removeRoute: b,
      hasRoute: T,
      getRoutes: P,
      resolve: v,
      options: e,
      push: S,
      replace: A,
      go: Re,
      back: () => Re(-1),
      forward: () => Re(1),
      beforeEach: r.add,
      beforeResolve: i.add,
      afterEach: c.add,
      onError: Q.add,
      isReady: Qe,
      install(w) {
        const N = this
        w.component('RouterLink', wa),
          w.component('RouterView', Sa),
          (w.config.globalProperties.$router = N),
          Object.defineProperty(w.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => re(l)
          }),
          Dt && !Tt && l.value === at && ((Tt = !0), S(o.location).catch((te) => {}))
        const O = {}
        for (const te in at)
          Object.defineProperty(O, te, { get: () => l.value[te], enumerable: !0 })
        w.provide(so, N), w.provide(Mi, Mr(O)), w.provide(Ts, l)
        const D = w.unmount
        Nt.add(w),
          (w.unmount = function () {
            Nt.delete(w),
              Nt.size < 1 &&
                ((a = at), $e && $e(), ($e = null), (l.value = at), (Tt = !1), (se = !1)),
              D()
          })
      }
    }
  function Ce(w) {
    return w.reduce((N, O) => N.then(() => Y(O)), Promise.resolve())
  }
  return Sn
}
function ka(e, t) {
  const n = [],
    s = [],
    o = [],
    r = Math.max(t.matched.length, e.matched.length)
  for (let i = 0; i < r; i++) {
    const c = t.matched[i]
    c && (e.matched.find((a) => Gt(a, c)) ? s.push(c) : n.push(c))
    const l = e.matched[i]
    l && (t.matched.find((a) => Gt(a, l)) || o.push(l))
  }
  return [n, s, o]
}
const je = { NORMAL: 0, MINIMIZED: 1, MAXIMIZED: 2 },
  Oi = {
    text: 'text-html.svg',
    html: 'text-html.svg',
    vue: 'text-html.svg',
    dir: 'folder-cyan.svg',
    console: 'console.svg',
    welcome: 'info.svg',
    settings: 'settings.svg',
    minesweeper: 'mines.svg'
  }
let lr = 0
const $t = to('windows', () => {
    const e = q([])
    function t(a, u) {
      const h = lr++,
        { x: p, y: m } = s(),
        b = {
          id: h,
          app: a,
          title: a.name,
          x: p,
          y: m,
          zIndex: 0,
          width: 800,
          height: 600,
          state: je.NORMAL,
          args: u
        }
      e.value.push(b), o(b)
    }
    function n(a, u, h) {
      const m = {
        id: lr++,
        app: a,
        title: a.name,
        x: u,
        y: h,
        zIndex: 0,
        width: 800,
        height: 600,
        state: je.NORMAL,
        args: null
      }
      e.value.push(m), o(m)
    }
    function s() {
      const a = e.value.length,
        u = 100 + a * 20,
        h = 100 + a * 20
      return { x: u, y: h }
    }
    function o(a) {
      const u = Math.max(...e.value.map((h) => h.zIndex))
      a.zIndex = u + 1
    }
    function r(a) {
      const u = e.value.indexOf(a)
      e.value.splice(u, 1)
    }
    function i(a) {
      const u = e.value.find((h) => h.id === a)
      u && r(u)
    }
    function c(a) {
      a.state === je.MAXIMIZED ? (a.state = je.NORMAL) : (a.state = je.MAXIMIZED)
    }
    function l(a) {
      a.state === je.MINIMIZED ? (a.state = je.NORMAL) : (a.state = je.MINIMIZED)
    }
    return {
      windows: e,
      launchApp: t,
      launchAppAt: n,
      killApp: r,
      killWithId: i,
      placeOnTop: o,
      maximize: c,
      minimize: l
    }
  }),
  Ra = { class: 'window-icon' },
  Pa = ['src'],
  Aa = { class: 'window-title' },
  Ia = { class: 'window-content' },
  Ma = _e({
    __name: 'WindowComponent',
    props: { modelValue: { required: !0 }, modelModifiers: {} },
    emits: ['update:modelValue'],
    setup(e) {
      const t = $t(),
        n = Tc(e, 'modelValue'),
        s = q(!1),
        o = () => {
          t.minimize(n.value)
        },
        r = () => {
          t.maximize(n.value)
        },
        i = () => {
          t.killApp(n.value)
        },
        c = () => {
          t.placeOnTop(n.value)
        },
        l = q('rgb(0, 0, 0)')
      return (
        Je(() => {
          const a = Math.random() * 255,
            u = Math.random() * 255,
            h = Math.random() * 255
          ;(l.value = `rgb(${a}, ${u}, ${h})`),
            document.addEventListener('mousemove', (p) => {
              s.value && ((n.value.x += p.movementX), (n.value.y += p.movementY))
            }),
            document.addEventListener('mouseup', () => {
              s.value = !1
            })
        }),
        es(() => {
          document.removeEventListener('mousemove', () => {}),
            document.removeEventListener('mouseup', () => {})
        }),
        (a, u) => (
          B(),
          K(
            'div',
            {
              class: Fe([
                'window',
                {
                  maximized: n.value.state == re(je).MAXIMIZED,
                  minimized: n.value.state == re(je).MINIMIZED,
                  grabbed: s.value
                }
              ]),
              style: ot({
                '--positionX': n.value.x + 'px',
                '--positionY': n.value.y + 'px',
                'z-index': n.value.zIndex
              }),
              onMousedown: c
            },
            [
              M(
                'div',
                {
                  class: 'window-header',
                  onMousedown: u[0] || (u[0] = (h) => (s.value = !0)),
                  onMouseup: u[1] || (u[1] = (h) => (s.value = !1))
                },
                [
                  M('div', Ra, [
                    M(
                      'img',
                      { src: 'icons/' + n.value.app.icon, alt: 'icon', draggable: 'false' },
                      null,
                      8,
                      Pa
                    )
                  ]),
                  M('div', Aa, [M('p', null, rt(n.value.title), 1)]),
                  M('div', { class: 'window-buttons' }, [
                    M('div', { class: 'window-button minimize', onClick: o }),
                    M('div', { class: 'window-button maximize', onClick: r }),
                    M('div', { class: 'window-button close', onClick: i })
                  ])
                ],
                32
              ),
              M('div', Ia, [
                (B(), Ze(Kr(n.value.app.component), { args: n.value.args }, null, 8, ['args']))
              ])
            ],
            38
          )
        )
      )
    }
  }),
  Oa = we(Ma, [['__scopeId', 'data-v-eedbd371']])
class jt {
  constructor(t, n) {
    ye(this, 'name')
    ye(this, 'parent', null)
    ye(this, 'nodeType', 'file')
    ye(this, 'fileType', 'text')
    ;(this.name = t), (this.fileType = n)
  }
}
class dt extends jt {
  constructor(n, s) {
    super(n, 'html')
    ye(this, 'fileType', 'html')
    ye(this, 'path')
    this.path = s
  }
}
class $i extends jt {
  constructor(n, s) {
    super(n, 'vue')
    ye(this, 'fileType', 'vue')
    ye(this, 'path')
    this.path = s
  }
}
class Ne {
  constructor(t) {
    ye(this, 'name')
    ye(this, 'children')
    ye(this, 'parent', null)
    ye(this, 'nodeType', 'directory')
    ye(this, 'fileType', 'dir')
    ;(this.name = t), (this.children = [])
  }
  addChild(t) {
    return this.children.find((n) => n.name === t.name)
      ? null
      : (this.children.push(t), (t.parent = this), t)
  }
  removeChild(t) {
    const n = this.children.indexOf(t)
    n !== -1 && this.children.splice(n, 1)
  }
}
class $a {
  constructor() {
    ye(this, 'root')
    ;(this.root = new Ne('root')),
      this.root.addChild(new Ne('bin')),
      this.root.addChild(new Ne('boot')),
      this.root.addChild(new Ne('dev')),
      this.root.addChild(new Ne('etc'))
    const n = this.root.addChild(new Ne('home')).addChild(new Ne('shark')),
      s = n.addChild(new Ne('Desktop')),
      o = n.addChild(new Ne('Documents')),
      r = s.addChild(new Ne('projets'))
    s.addChild(new $i('About.html', 'AboutPage')),
      o.addChild(new dt('Projects.html', 'content/projects.html')),
      o.addChild(new dt('Contact.html', 'content/contact.html')),
      r.addChild(new dt('3DSlicer.html', 'content/projects/3dslicer.html')),
      r.addChild(new dt('E:cclesia.html', 'content/projects/ecclesia.html')),
      r.addChild(new dt('Exactly Enough Items.html', 'content/projects/eei.html')),
      r.addChild(new dt('SharkOS.html', 'content/projects/sharkos.html')),
      r.addChild(new dt('Shift.html', 'content/projects/shift.html')),
      s.addChild(new jt('Console', 'console')),
      s.addChild(new jt('Welcome', 'welcome')),
      s.addChild(new jt('Settings', 'settings')),
      s.addChild(new jt('Minesweeper', 'minesweeper'))
  }
}
const Ta = new $a()
class is {
  constructor() {
    ye(this, 'fs', Ta)
    ye(this, 'workingDirectory')
    console.log('Creating FSExplorer'), (this.workingDirectory = q(this.fs.root))
  }
  get pathToWorkingDirectory() {
    const t = []
    let n = this.workingDirectory.value
    for (; n; ) t.unshift(n), (n = n.parent)
    return t
  }
  pwd() {
    let t = '',
      n = this.workingDirectory.value
    for (; n; ) (t = `${n.name}/${t}`), (n = n.parent)
    return t
  }
  ls() {
    return this.workingDirectory.value.children.map(
      (t) => t.name + (t.nodeType === 'directory' ? '/' : '')
    )
  }
  mkdir(t) {
    return this.workingDirectory.value.addChild(new Ne(t)) === null
      ? `mkdir: cannot create directory '${t}': File exists`
      : `mkdir: created directory '${t}'`
  }
  cd(t) {
    if (t === '/' || t === 'root') return (this.workingDirectory.value = this.fs.root), this
    t.startsWith('/') && ((this.workingDirectory.value = this.fs.root), (t = t.substring(1)))
    const n = t.split('/'),
      s = this.workingDirectory
    for (const o of n)
      o === '..'
        ? (s.value = s.value.parent ?? s.value)
        : (s.value = s.value.children.find((r) => r.name === o) ?? s.value)
    return (this.workingDirectory.value = s.value), this
  }
  getFile(t) {
    const n = t.split('/')
    let s = this.workingDirectory.value
    for (const o of n)
      o === '..' ? (s = s.parent ?? s) : (s = s.children.find((r) => r.name === o) || s)
    return s.nodeType === 'file' ? s : null
  }
  getFullPathOfNode(t) {
    let n = '',
      s = t
    for (; s; ) (n = `${s.name}/${n}`), (s = s.parent)
    return n.slice(0, -1).replace('root/', '/')
  }
}
const Na = ['src'],
  La = _e({
    __name: 'DolphinAppIcon',
    props: { node: {} },
    emits: ['openApp'],
    setup(e) {
      return (t, n) => (
        B(),
        K(
          'div',
          { class: 'app-icon', onDblclick: n[0] || (n[0] = (s) => t.$emit('openApp')) },
          [
            M(
              'img',
              { src: 'icons/' + re(Oi)[t.node.fileType], alt: 'icon', draggable: 'false' },
              null,
              8,
              Na
            ),
            M('p', null, rt(t.node.name), 1)
          ],
          32
        )
      )
    }
  }),
  Fa = we(La, [['__scopeId', 'data-v-5cdd077d']]),
  Da = { class: 'dolphin-file-manager' },
  ja = { class: 'header' },
  Ha = { class: 'arrows' },
  Va = ['disabled'],
  Ba = ['disabled'],
  Ua = { class: 'path' },
  Wa = ['onClick'],
  Ka = { key: 0 },
  za = { key: 0 },
  qa = _e({
    __name: 'DolphinApp',
    props: { args: {} },
    setup(e) {
      const t = e
      Je(() => {
        ;(c.value = t.args), s.value.push(c.value)
      })
      const n = new is(),
        s = q([]),
        o = q(0),
        r = oo(),
        i = $t(),
        c = n.workingDirectory,
        l = Se(() => c.value.children),
        a = q(''),
        u = (b) => {
          console.log(b.name),
            b !== c.value &&
              ((c.value = b),
              o.value != s.value.length - 1 && (s.value = s.value.slice(0, o.value + 1)),
              s.value.push(b),
              o.value++)
        },
        h = () => {
          o.value > 0 && (o.value--, (c.value = s.value[o.value]))
        },
        p = () => {
          o.value < s.value.length - 1 && (o.value++, (c.value = s.value[o.value]))
        },
        m = (b) => {
          if (b instanceof Ne) {
            u(b)
            return
          }
          const P = r.findByFileType(b.fileType)
          P && i.launchApp(P, b)
        }
      return (b, P) => (
        B(),
        K('div', Da, [
          M('div', ja, [
            M('div', Ha, [
              M(
                'button',
                { class: 'material-symbols-outlined', onClick: h, disabled: o.value <= 0 },
                ' arrow_back ',
                8,
                Va
              ),
              M(
                'button',
                {
                  class: 'material-symbols-outlined',
                  onClick: p,
                  disabled: o.value == s.value.length - 1
                },
                ' arrow_forward ',
                8,
                Ba
              )
            ]),
            M('div', Ua, [
              (B(!0),
              K(
                ae,
                null,
                it(
                  re(n).pathToWorkingDirectory,
                  (T) => (
                    B(),
                    K(
                      ae,
                      { key: T.name },
                      [
                        M('button', { onClick: (v) => u(T) }, rt(T.name), 9, Wa),
                        T !== re(c) ? (B(), K('span', Ka, '/')) : qt('', !0)
                      ],
                      64
                    )
                  )
                ),
                128
              ))
            ])
          ]),
          M(
            'div',
            {
              class: Fe(['content', { empty: l.value.length == 0 }]),
              onClick: P[0] || (P[0] = (T) => (a.value = ''))
            },
            [
              l.value.length == 0
                ? (B(), K('p', za, 'This folder is empty'))
                : (B(!0),
                  K(
                    ae,
                    { key: 1 },
                    it(
                      l.value,
                      (T) => (
                        B(),
                        Ze(
                          Fa,
                          {
                            class: Fe(['icon', { selected: a.value == T.name }]),
                            key: T.name,
                            node: T,
                            onClick: eo((v) => (a.value = T.name), ['stop']),
                            onOpenApp: (v) => m(T)
                          },
                          null,
                          8,
                          ['node', 'class', 'onClick', 'onOpenApp']
                        )
                      )
                    ),
                    128
                  ))
            ],
            2
          )
        ])
      )
    }
  }),
  Ga = we(qa, [['__scopeId', 'data-v-a2c43fea']]),
  Ti = (e) => (wn('data-v-d263e885'), (e = e()), bn(), e),
  Ya = { class: 'console-app' },
  Xa = { class: 'log' },
  Ja = { key: 0, class: 'welcome' },
  Za = Ti(() => M('span', { class: 'userinfo' }, 'user@sharkos$ ', -1)),
  Qa = { class: 'command' },
  ef = { class: 'output' },
  tf = { class: 'wrapper' },
  nf = Ti(() => M('label', { for: 'inputline' }, 'user@sharkos$ ', -1)),
  sf = _e({
    __name: 'ConsoleApp',
    setup(e) {
      const t = new is(),
        n = $t(),
        s = q(''),
        o = q([])
      let r = !1,
        i = 0
      const P = [
          {
            name: 'help',
            description: 'Liste les commandes disponibles.',
            callback: () => {
              let S = ''
              for (const A of P)
                S +=
                  A.name +
                  ' - ' +
                  A.description +
                  `
`
              return S
            }
          },
          {
            name: 'clear',
            description: 'Efface le terminal.',
            callback: () => ((o.value = []), (r = !0), '')
          },
          { name: 'pwd', description: 'Affiche le répertoire actuel.', callback: () => t.pwd() },
          { name: 'mkdir', description: 'Crée un répertoire.', callback: (S) => t.mkdir(S[1]) },
          {
            name: 'ls',
            description: 'Liste les fichiers et répertoires.',
            callback: () => {
              const S = t.ls()
              let A = ''
              for (const x of S)
                A +=
                  x +
                  `
`
              return A
            }
          },
          {
            name: 'cd',
            description: 'Change le répertoire actuel.',
            callback: (S) => (S.length < 2 ? 'cd: missing operand' : (t.cd(S[1]), ''))
          },
          {
            name: 'ps',
            description: 'Liste les processus en cours.',
            callback: () => {
              let S = ''
              for (const A of n.windows)
                S +=
                  A.id +
                  ' ' +
                  A.app.name +
                  `
`
              return S
            }
          },
          {
            name: 'kill',
            description: 'Tue un processus avec son ID.',
            callback: (S) => {
              if (S.length < 2) return 'kill: missing operand'
              let A = parseInt(S[1])
              return n.killWithId(A), ''
            }
          }
        ],
        T = () => {
          let S = { command: s.value, output: '', number: o.value.length + 1 },
            A = s.value.split(' '),
            x = !1
          for (const z of P)
            if (z.name == A[0]) {
              ;(S.output = z.callback(A)), o.value.push(S), (x = !0)
              break
            }
          x || ((S.output = 'Command not found.'), o.value.push(S)),
            (i = o.value.length),
            (s.value = '')
          const Z = document.querySelector('#inputline')
          Z == null || Z.scrollIntoView()
        },
        v = (S) => {
          S.key == 'ArrowUp'
            ? i > 0 && (i--, (s.value = o.value[i].command))
            : S.key == 'ArrowDown'
              ? i < o.value.length &&
                (i++, i == o.value.length ? (s.value = '') : (s.value = o.value[i].command))
              : S.key == 'Tab' && (S.preventDefault(), _())
        },
        _ = () => {
          let S = s.value.split(' ')
          if (S.length == 1) {
            let A = []
            for (const x of P) x.name.startsWith(S[0]) && A.push(x.name)
            if (A.length == 1) s.value = A[0]
            else if (A.length > 1) {
              let x = ''
              for (const Z of A) x += Z + ' '
              o.value.push({ command: s.value, output: x, number: o.value.length + 1 })
            }
          } else S[0] == 'cd' && F(S)
        },
        F = (S) => {
          let A = []
          for (const x of t.ls()) x.startsWith(S[1]) && A.push(x)
          if (A.length == 1) s.value = 'cd ' + A[0]
          else if (A.length > 1) {
            let x = ''
            for (const Z of A) x += Z + ' '
            o.value.push({ command: s.value, output: x, number: o.value.length + 1 })
          }
        }
      return (
        Je(() => {
          var S
          ;(S = document.getElementById('inputline')) == null || S.focus(),
            window.addEventListener('keydown', v),
            window.addEventListener('click', () => {
              var A, x
              ;((A = document.getSelection()) == null ? void 0 : A.toString()) == '' &&
                ((x = document.getElementById('inputline')) == null || x.focus())
            })
        }),
        (S, A) => (
          B(),
          K('div', Ya, [
            M('div', Xa, [
              re(r)
                ? qt('', !0)
                : (B(), K('div', Ja, " Bienvenue sur SharkOS! Pour commencer, tapez 'help'. ")),
              (B(!0),
              K(
                ae,
                null,
                it(
                  o.value,
                  (x) => (
                    B(),
                    K('div', { key: x.number }, [
                      M('div', null, [Za, M('span', Qa, rt(x.command), 1)]),
                      M('div', ef, rt(x.output), 1)
                    ])
                  )
                ),
                128
              ))
            ]),
            M('div', tf, [
              nf,
              Kt(
                M(
                  'input',
                  {
                    id: 'inputline',
                    type: 'text',
                    onKeyup: cu(T, ['enter']),
                    'onUpdate:modelValue': A[0] || (A[0] = (x) => (s.value = x))
                  },
                  null,
                  544
                ),
                [[mi, s.value]]
              )
            ])
          ])
        )
      )
    }
  }),
  of = we(sf, [['__scopeId', 'data-v-d263e885']]),
  rf = 'modulepreload',
  lf = function (e) {
    return '/' + e
  },
  cr = {},
  cf = function (t, n, s) {
    let o = Promise.resolve()
    if (n && n.length > 0) {
      document.getElementsByTagName('link')
      const r = document.querySelector('meta[property=csp-nonce]'),
        i = (r == null ? void 0 : r.nonce) || (r == null ? void 0 : r.getAttribute('nonce'))
      o = Promise.all(
        n.map((c) => {
          if (((c = lf(c)), c in cr)) return
          cr[c] = !0
          const l = c.endsWith('.css'),
            a = l ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${c}"]${a}`)) return
          const u = document.createElement('link')
          if (
            ((u.rel = l ? 'stylesheet' : rf),
            l || ((u.as = 'script'), (u.crossOrigin = '')),
            (u.href = c),
            i && u.setAttribute('nonce', i),
            document.head.appendChild(u),
            l)
          )
            return new Promise((h, p) => {
              u.addEventListener('load', h),
                u.addEventListener('error', () => p(new Error(`Unable to preload CSS for ${c}`)))
            })
        })
      )
    }
    return o
      .then(() => t())
      .catch((r) => {
        const i = new Event('vite:preloadError', { cancelable: !0 })
        if (((i.payload = r), window.dispatchEvent(i), !i.defaultPrevented)) throw r
      })
  },
  uf = (e, t, n) => {
    const s = e[t]
    return s
      ? typeof s == 'function'
        ? s()
        : Promise.resolve(s)
      : new Promise((o, r) => {
          ;(typeof queueMicrotask == 'function' ? queueMicrotask : setTimeout)(
            r.bind(
              null,
              new Error(
                'Unknown variable dynamic import: ' +
                  t +
                  (t.split('/').length !== n
                    ? '. Note that variables only represent file names one level deep.'
                    : '')
              )
            )
          )
        })
  },
  af =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%20-960%20960%20960'%20width='24'%3e%3cpath%20fill='%23fff'%20d='M480-160q-134%200-227-93t-93-227q0-134%2093-227t227-93q69%200%20132%2028.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100%200-170%2070t-70%20170q0%20100%2070%20170t170%2070q77%200%20139-44t87-116h84q-28%20106-114%20173t-196%2067Z'%20/%3e%3c/svg%3e",
  ff = (e) => (wn('data-v-5850699f'), (e = e()), bn(), e),
  df = { class: 'firefox' },
  hf = { class: 'header' },
  pf = ff(() =>
    M(
      'div',
      { class: 'refresh' },
      [M('img', { src: af, alt: 'Start Button', draggable: 'false' })],
      -1
    )
  ),
  mf = { class: 'url' },
  gf = ['src'],
  vf = _e({
    __name: 'FirefoxApp',
    props: { args: {} },
    setup(e) {
      const t = new is(),
        n = q(''),
        s = q(0),
        o = q(''),
        r = Nr(null),
        i = e
      Je(() => {
        var p
        ;(n.value = t.getFullPathOfNode(i.args)),
          c(),
          (p = document.getElementById('iframe')) == null ||
            p.addEventListener('load', (m) => {
              var T
              m.preventDefault()
              const P = (T = m.target.contentWindow) == null ? void 0 : T.location.toString()
              h(P)
            })
      }),
        es(() => {
          var p
          ;(p = document.getElementById('iframe')) == null ||
            p.removeEventListener('load', () => {})
        })
      const c = () => {
          const p = t.getFile(n.value)
          p instanceof dt ? l(p) : p instanceof $i ? a(p) : u()
        },
        l = (p) => {
          ;(s.value = 0), (o.value = p.path)
        },
        a = (p) => {
          ;(s.value = 1),
            uf(
              Object.assign({
                '../../pages/AboutPage.vue': () =>
                  cf(() => import('./AboutPage-BgfhWQYM.js'), __vite__mapDeps([0, 1]))
              }),
              `../../pages/${p.path}.vue`,
              4
            )
              .then((m) => {
                r.value = m.default
              })
              .catch((m) => {
                console.error(m), u()
              })
        },
        u = () => {
          ;(s.value = 0), (o.value = 'content/nothing.html')
        },
        h = (p) => {
          if (!p) return
          const b = decodeURI(p).split('?path=')[1]
          console.log(b), b && ((n.value = b), c())
        }
      return (p, m) => (
        B(),
        K('div', df, [
          M('div', hf, [
            pf,
            M('div', mf, [
              Kt(
                M(
                  'input',
                  { type: 'text', 'onUpdate:modelValue': m[0] || (m[0] = (b) => (n.value = b)) },
                  null,
                  512
                ),
                [[mi, n.value]]
              )
            ])
          ]),
          M(
            'div',
            { class: 'content', style: ot({ overflow: s.value === 0 ? 'hidden' : 'auto' }) },
            [
              Kt(M('iframe', { id: 'iframe', src: o.value, title: 'page' }, null, 8, gf), [
                [Vc, s.value === 0]
              ]),
              s.value === 1
                ? (B(), Ze(Kr(r.value), { key: 0, onOpenPage: h }, null, 32))
                : qt('', !0)
            ],
            4
          )
        ])
      )
    }
  }),
  _f = we(vf, [['__scopeId', 'data-v-5850699f']]),
  En = to('settings', () => {
    function e(o, r) {
      const i = localStorage.getItem(o)
      return i === null ? r : JSON.parse(i)
    }
    const t = q(e('wallpaperPath', 'sweet-1.png')),
      n = q(e('shouldDockHide', !0)),
      s = q(e('dontShowWelcomeAtStartup', !1))
    return (
      yt(t, (o) => {
        localStorage.setItem('wallpaperPath', JSON.stringify(o))
      }),
      yt(n, (o) => {
        localStorage.setItem('shouldDockHide', JSON.stringify(o))
      }),
      yt(s, (o) => {
        console.log(o), localStorage.setItem('dontShowWelcomeAtStartup', JSON.stringify(o))
      }),
      { wallpaperPath: t, shouldDockHide: n, dontShowWelcomeAtStartup: s }
    )
  }),
  Xt = (e) => (wn('data-v-307d81c3'), (e = e()), bn(), e),
  yf = Xt(() => M('h1', null, 'Bienvenue sur SharkOS', -1)),
  wf = Xt(() =>
    M(
      'p',
      null,
      ' Ceci est mon portfolio numérique, vous pouvez y trouvez mes projets, mes compétences et mes informations de contact. ',
      -1
    )
  ),
  bf = Xt(() =>
    M(
      'p',
      null,
      " Ce site est fait pour ressembler à un système d'exploitation, vous pouvez naviguer entre les applications en cliquant sur les icônes du bureau, ou avec la barre des tâches en bas de l'écran. ",
      -1
    )
  ),
  Cf = Xt(() =>
    M(
      'p',
      null,
      ' Vous semblez être sur un appareil mobile. le site vous est donc inaccessible pour le moment. Venez le visiter sur un ordinateur pour une meilleure expérience. ',
      -1
    )
  ),
  Ef = { key: 0 },
  Sf = Xt(() => M('p', null, 'Bonne visite ^_^', -1)),
  xf = { class: 'dont-show-again' },
  kf = Xt(() =>
    M(
      'label',
      { for: 'dont-show-again' },
      [M('p', null, 'Ne plus afficher cette fenêtre au démarrage')],
      -1
    )
  ),
  Rf = _e({
    __name: 'WelcomeApp',
    props: { mobile: Boolean },
    setup(e) {
      const t = En()
      return (n, s) => (
        B(),
        K(
          'div',
          { class: Fe(['welcome-app', { mobile: e.mobile }]) },
          [
            yf,
            wf,
            bf,
            e.mobile
              ? (B(),
                K(
                  ae,
                  { key: 0 },
                  [
                    Cf,
                    e.mobile
                      ? (B(),
                        K(
                          'p',
                          Ef,
                          " Une version mobile est prévue, mais n'est malheureusement pas encore disponible :/ "
                        ))
                      : qt('', !0)
                  ],
                  64
                ))
              : (B(),
                K(
                  ae,
                  { key: 1 },
                  [
                    Sf,
                    M('div', xf, [
                      Kt(
                        M(
                          'input',
                          {
                            type: 'checkbox',
                            id: 'dont-show-again',
                            'onUpdate:modelValue':
                              s[0] || (s[0] = (o) => (re(t).dontShowWelcomeAtStartup = o))
                          },
                          null,
                          512
                        ),
                        [[As, re(t).dontShowWelcomeAtStartup]]
                      ),
                      kf
                    ])
                  ],
                  64
                ))
          ],
          2
        )
      )
    }
  }),
  Ni = we(Rf, [['__scopeId', 'data-v-307d81c3']]),
  Jt = (e) => (wn('data-v-0a8e152e'), (e = e()), bn(), e),
  Pf = { class: 'settings-app' },
  Af = Jt(() => M('h1', null, 'Settings', -1)),
  If = { class: 'settings-section' },
  Mf = Jt(() => M('h2', null, "Fond d'écran", -1)),
  Of = Jt(() => M('p', null, "Changez le fond d'écran du bureau", -1)),
  $f = { class: 'wallpaper-select' },
  Tf = ['onClick'],
  Nf = ['src', 'alt'],
  Lf = { class: 'settings-section' },
  Ff = Jt(() => M('h2', null, 'Autre', -1)),
  Df = Jt(() => M('span', null, " Ne pas afficher l'écran de bienvenue au démarrage ", -1)),
  jf = Jt(() => M('span', null, ' Cacher le dock automatiquement ', -1)),
  Hf = _e({
    __name: 'SettingsApp',
    setup(e) {
      const t = En(),
        n = q([
          'sweet-1.png',
          'sweet-2.png',
          'sweet-3.png',
          'sweet-4.png',
          'arch-btw.png',
          'wave.jpg',
          'milky-way.jpg'
        ]),
        s = (o) => o.replace('.png', '').replace('.jpg', '').replace('-', ' ')
      return (o, r) => (
        B(),
        K('div', Pf, [
          Af,
          M('div', If, [
            Mf,
            Of,
            M('div', $f, [
              (B(!0),
              K(
                ae,
                null,
                it(
                  n.value,
                  (i) => (
                    B(),
                    K(
                      'div',
                      {
                        key: i,
                        class: Fe(['wallpaper-option', { selected: re(t).wallpaperPath === i }]),
                        onClick: (c) => (re(t).wallpaperPath = i)
                      },
                      [
                        M('img', { src: 'wallpapers/' + i, alt: i }, null, 8, Nf),
                        M('p', null, rt(s(i)), 1)
                      ],
                      10,
                      Tf
                    )
                  )
                ),
                128
              ))
            ])
          ]),
          M('div', Lf, [
            Ff,
            M('div', null, [
              Kt(
                M(
                  'input',
                  {
                    type: 'checkbox',
                    'onUpdate:modelValue':
                      r[0] || (r[0] = (i) => (re(t).dontShowWelcomeAtStartup = i))
                  },
                  null,
                  512
                ),
                [[As, re(t).dontShowWelcomeAtStartup]]
              ),
              Df
            ]),
            M('div', null, [
              Kt(
                M(
                  'input',
                  {
                    type: 'checkbox',
                    'onUpdate:modelValue': r[1] || (r[1] = (i) => (re(t).shouldDockHide = i))
                  },
                  null,
                  512
                ),
                [[As, re(t).shouldDockHide]]
              ),
              jf
            ])
          ])
        ])
      )
    }
  }),
  Vf = we(Hf, [['__scopeId', 'data-v-0a8e152e']]),
  Bf = _e({
    __name: 'MinesweeperCell',
    props: {
      revealed: { type: Boolean },
      minesNearby: {},
      isMine: { type: Boolean },
      isFlagged: { type: Boolean },
      x: {},
      y: {}
    },
    emits: ['reveal', 'flag'],
    setup(e) {
      const t = e,
        n = Se(() =>
          t.isFlagged
            ? '🚩'
            : t.revealed
              ? t.isMine
                ? '💣'
                : t.minesNearby === 0
                  ? ''
                  : t.minesNearby
              : ''
        )
      return (s, o) => (
        B(),
        K(
          'div',
          {
            class: Fe([
              'minesweeper-cell',
              {
                revealed: s.revealed,
                mine: s.isMine,
                one: s.minesNearby === 1,
                two: s.minesNearby === 2,
                three: s.minesNearby === 3,
                four: s.minesNearby === 4,
                five: s.minesNearby === 5,
                six: s.minesNearby === 6,
                seven: s.minesNearby === 7,
                eight: s.minesNearby === 8
              }
            ]),
            onClick: o[0] || (o[0] = (r) => s.$emit('reveal', { x: s.x, y: s.y })),
            onContextmenu:
              o[1] || (o[1] = eo((r) => s.$emit('flag', { x: s.x, y: s.y }), ['prevent']))
          },
          rt(n.value),
          35
        )
      )
    }
  }),
  Uf = we(Bf, [['__scopeId', 'data-v-b523042d']]),
  Wf = { key: 0, class: 'minesweeper-board' },
  Kf = { key: 0, class: 'results' },
  zf = { key: 0 },
  qf = { key: 1 },
  Gf = _e({
    __name: 'MinesweeperBoard',
    props: { rows: {}, cols: {}, numMines: {} },
    emits: ['end'],
    setup(e) {
      const t = e,
        n = q([]),
        s = q([]),
        o = q([]),
        r = q(!1),
        i = q(!1),
        c = (v, _) => (v < 0 || _ < 0 || v >= t.cols || _ >= t.rows ? !1 : n.value[_][v]),
        l = (v, _) =>
          [
            [v - 1, _ - 1],
            [v, _ - 1],
            [v + 1, _ - 1],
            [v - 1, _],
            [v + 1, _],
            [v - 1, _ + 1],
            [v, _ + 1],
            [v + 1, _ + 1]
          ].filter(([S, A]) => c(S, A)).length,
        a = (v, _) => {
          if (!(v < 0 || _ < 0 || v >= t.cols || _ >= t.rows) && !b(v, _)) {
            if (s.value[_][v]) {
              h(v, _)
              return
            }
            if (((s.value[_][v] = !0), c(v, _))) {
              ;(i.value = !0), u()
              return
            }
            l(v, _) === 0 &&
              [
                [v - 1, _ - 1],
                [v, _ - 1],
                [v + 1, _ - 1],
                [v - 1, _],
                [v + 1, _],
                [v - 1, _ + 1],
                [v, _ + 1],
                [v + 1, _ + 1]
              ].forEach(([S, A]) => {
                if (!(S < 0 || A < 0 || S >= t.cols || A >= t.rows))
                  try {
                    s.value[A][S] || a(S, A)
                  } catch (x) {
                    console.log('error', S, A, x)
                  }
              })
          }
        },
        u = () => {
          s.value = s.value.map((v) => v.map(() => !0))
        },
        h = (v, _) => {
          if (!s.value[_][v]) return
          const F = [
            [v - 1, _ - 1],
            [v, _ - 1],
            [v + 1, _ - 1],
            [v - 1, _],
            [v + 1, _],
            [v - 1, _ + 1],
            [v, _ + 1],
            [v + 1, _ + 1]
          ]
          F.filter(([A, x]) => b(A, x)).length === l(v, _) &&
            F.forEach(([A, x]) => {
              A < 0 || x < 0 || A >= t.cols || x >= t.rows || m(A, x) || a(A, x)
            })
        },
        p = (v, _) => {
          v < 0 ||
            _ < 0 ||
            v >= t.cols ||
            _ >= t.rows ||
            s.value[_][v] ||
            (o.value[_][v] = !o.value[_][v])
        },
        m = (v, _) => (v < 0 || _ < 0 || v >= t.cols || _ >= t.rows ? !1 : s.value[_][v]),
        b = (v, _) => (v < 0 || _ < 0 || v >= t.cols || _ >= t.rows ? !1 : o.value[_][v]),
        P = Se(() => {
          let v = 0
          return (
            s.value.forEach((_) => {
              _.forEach((F) => {
                F || v++
              })
            }),
            v === t.numMines
          )
        }),
        T = () => {
          n.value = Array.from({ length: t.rows }, () => Array.from({ length: t.cols }, () => !1))
          let v = 0
          for (; v < t.numMines; ) {
            const _ = Math.floor(Math.random() * t.cols),
              F = Math.floor(Math.random() * t.rows)
            !n.value[F][_] && _ !== 0 && F !== 0 && ((n.value[F][_] = !0), v++)
          }
        }
      return (
        Je(() => {
          T(),
            (s.value = Array.from({ length: t.cols }, () =>
              Array.from({ length: t.rows }, () => !1)
            )),
            (o.value = Array.from({ length: t.cols }, () =>
              Array.from({ length: t.rows }, () => !1)
            )),
            (r.value = !0)
        }),
        (v, _) =>
          r.value
            ? (B(),
              K('div', Wf, [
                (B(!0),
                K(
                  ae,
                  null,
                  it(
                    t.rows,
                    (F, S) => (
                      B(),
                      K(
                        'div',
                        { key: S, class: 'minesweeper-row', style: ot({ '--rows': t.rows }) },
                        [
                          (B(!0),
                          K(
                            ae,
                            null,
                            it(
                              t.cols,
                              (A, x) => (
                                B(),
                                Ze(
                                  Uf,
                                  {
                                    key: x,
                                    x,
                                    y: S,
                                    revealed: m(x, S),
                                    minesNearby: l(x, S),
                                    isMine: c(x, S),
                                    isFlagged: b(x, S),
                                    onReveal: (Z) => a(x, S),
                                    onFlag: (Z) => p(x, S)
                                  },
                                  null,
                                  8,
                                  [
                                    'x',
                                    'y',
                                    'revealed',
                                    'minesNearby',
                                    'isMine',
                                    'isFlagged',
                                    'onReveal',
                                    'onFlag'
                                  ]
                                )
                              )
                            ),
                            128
                          ))
                        ],
                        4
                      )
                    )
                  ),
                  128
                )),
                i.value || P.value
                  ? (B(),
                    K('div', Kf, [
                      i.value ? (B(), K('h1', zf, 'Game Over')) : (B(), K('h1', qf, 'You Win!')),
                      M('button', { onClick: _[0] || (_[0] = (F) => v.$emit('end')) }, 'Play Again')
                    ]))
                  : qt('', !0)
              ]))
            : qt('', !0)
      )
    }
  }),
  Yf = we(Gf, [['__scopeId', 'data-v-d8d209c9']]),
  Xf = (e) => (wn('data-v-b48d6c0d'), (e = e()), bn(), e),
  Jf = { class: 'minesweeper-app' },
  Zf = Xf(() => M('h1', null, 'Choose a difficulty:', -1)),
  Qf = _e({
    __name: 'MinesweeperApp',
    setup(e) {
      const t = q(!1),
        n = q(0),
        s = q(0),
        o = q(0),
        r = (c, l, a) => {
          ;(n.value = c), (s.value = l), (o.value = a), (t.value = !0)
        },
        i = () => {
          t.value = !1
        }
      return (c, l) => (
        B(),
        K('div', Jf, [
          t.value
            ? (B(),
              Ze(
                Yf,
                { key: 1, rows: n.value, cols: s.value, numMines: o.value, onEnd: i },
                null,
                8,
                ['rows', 'cols', 'numMines']
              ))
            : (B(),
              K(
                ae,
                { key: 0 },
                [
                  Zf,
                  M(
                    'button',
                    { onClick: l[0] || (l[0] = (a) => r(10, 10, 10)) },
                    'Easy 10x10 (10 mines)'
                  ),
                  M(
                    'button',
                    { onClick: l[1] || (l[1] = (a) => r(15, 15, 30)) },
                    'Medium 15x15 (30 mines)'
                  ),
                  M(
                    'button',
                    { onClick: l[2] || (l[2] = (a) => r(20, 20, 75)) },
                    'Hard 20x20 (75 mines)'
                  ),
                  M(
                    'button',
                    { onClick: l[3] || (l[3] = (a) => r(30, 30, 200)) },
                    'Stella 30x30 (200 mines)'
                  )
                ],
                64
              ))
        ])
      )
    }
  }),
  ed = we(Qf, [['__scopeId', 'data-v-b48d6c0d']]),
  oo = to('apps', () => {
    const e = {
        html: 'Firefox',
        vue: 'Firefox',
        dir: 'Dolphin File Manager',
        console: 'Console',
        welcome: 'Welcome',
        settings: 'Settings',
        minesweeper: 'Minesweeper'
      },
      t = q([
        { name: 'Console', icon: 'console.svg', component: tt(of) },
        { name: 'Dolphin File Manager', icon: 'folder-cyan.svg', component: tt(Ga) },
        { name: 'Firefox', icon: 'firefox.svg', component: tt(_f) },
        { name: 'Welcome', icon: 'info.svg', component: tt(Ni) },
        { name: 'Settings', icon: 'settings.svg', component: tt(Vf) },
        { name: 'Minesweeper', icon: 'mines.svg', component: tt(ed) }
      ])
    function n(o) {
      return t.value.find((r) => r.name === o)
    }
    function s(o) {
      return n(e[o])
    }
    return { apps: t, get: n, findByFileType: s }
  }),
  td = { class: 'window-manager' },
  nd = _e({
    __name: 'WindowManagerComponent',
    setup(e) {
      const t = $t(),
        n = oo(),
        s = En()
      return (
        Je(() => {
          if (s.dontShowWelcomeAtStartup) return
          const o = n.get('Welcome'),
            r = window.innerWidth,
            i = window.innerHeight,
            c = 960,
            l = 640,
            a = (r - c) / 2,
            u = (i - l) / 2
          o && t.launchAppAt(o, a, u)
        }),
        (o, r) => (
          B(),
          K('div', td, [
            (B(!0),
            K(
              ae,
              null,
              it(
                re(t).windows,
                (i, c) => (
                  B(),
                  Ze(
                    Oa,
                    {
                      key: i.id,
                      modelValue: re(t).windows[c],
                      'onUpdate:modelValue': (l) => (re(t).windows[c] = l)
                    },
                    null,
                    8,
                    ['modelValue', 'onUpdate:modelValue']
                  )
                )
              ),
              128
            ))
          ])
        )
      )
    }
  }),
  sd = we(nd, [['__scopeId', 'data-v-4a3e1c83']]),
  od = ['src'],
  rd = _e({
    __name: 'DesktopAppIcon',
    props: { node: {} },
    setup(e) {
      const t = oo(),
        n = $t(),
        s = e,
        o = () => {
          const r = t.findByFileType(s.node.fileType)
          r && n.launchApp(r, s.node)
        }
      return (r, i) => (
        B(),
        K(
          'div',
          { class: 'app-icon', onDblclick: o },
          [
            M(
              'img',
              { src: 'icons/' + re(Oi)[r.node.fileType], alt: 'icon', draggable: 'false' },
              null,
              8,
              od
            ),
            M('p', null, rt(r.node.name), 1)
          ],
          32
        )
      )
    }
  }),
  id = we(rd, [['__scopeId', 'data-v-c3027b9a']]),
  ld = _e({
    __name: 'DesktopComponent',
    setup(e) {
      const t = new is().cd('/home/shark/Desktop'),
        n = En(),
        s = t.workingDirectory,
        o = q([]),
        r = q(!1)
      Je(() => {
        document.addEventListener('mouseup', h)
      })
      const i = (m) => {
          const b = m.getBoundingClientRect()
          return { top: b.top, right: b.right, bottom: b.bottom, left: b.left }
        },
        c = (m, b) => {
          m.ctrlKey
            ? o.value.includes(b)
              ? (o.value = o.value.filter((P) => P !== b))
              : (o.value = [...o.value, b])
            : (o.value = [b])
        },
        l = q({ startX: 0, startY: 0, endX: 0, endY: 0 }),
        a = (m) => {
          ;(o.value = []),
            (r.value = !0),
            (l.value.startX = m.clientX),
            (l.value.startY = m.clientY),
            (l.value.endX = m.clientX),
            (l.value.endY = m.clientY)
        },
        u = (m) => {
          if (!r.value) return
          ;(l.value.endX = m.clientX),
            (l.value.endY = m.clientY),
            document.querySelectorAll('.icon').forEach((P) => {
              const T = i(P),
                v = T.left,
                _ = T.top,
                F = T.right - T.left,
                S = T.bottom - T.top
              v < Math.max(l.value.startX, l.value.endX) &&
              v + F > Math.min(l.value.startX, l.value.endX) &&
              _ < Math.max(l.value.startY, l.value.endY) &&
              _ + S > Math.min(l.value.startY, l.value.endY)
                ? (o.value = [...o.value, P.dataset.name])
                : (o.value = o.value.filter((A) => A !== P.dataset.name))
            })
        },
        h = () => {
          r.value = !1
        },
        p = Se(() => `url('wallpapers/${n.wallpaperPath}')`)
      return (m, b) => (
        B(),
        K(
          ae,
          null,
          [
            M(
              'div',
              {
                class: 'icons-wrapper',
                onMousedown: a,
                onMousemove: u,
                onMouseup: h,
                style: ot({ backgroundImage: p.value })
              },
              [
                (B(!0),
                K(
                  ae,
                  null,
                  it(
                    re(s).children,
                    (P) => (
                      B(),
                      Ze(
                        id,
                        {
                          class: Fe(['icon', { selected: o.value.includes(P.name) }]),
                          'data-name': P.name,
                          onClick: eo((T) => c(T, P.name), ['stop']),
                          key: P.name,
                          node: P
                        },
                        null,
                        8,
                        ['data-name', 'class', 'onClick', 'node']
                      )
                    )
                  ),
                  128
                ))
              ],
              36
            ),
            M(
              'div',
              {
                class: 'rectangle-select',
                style: ot({
                  display: r.value ? 'block' : 'none',
                  left: Math.min(l.value.startX, l.value.endX) + 'px',
                  top: Math.min(l.value.startY, l.value.endY) + 'px',
                  width: Math.abs(l.value.endX - l.value.startX) + 'px',
                  height: Math.abs(l.value.endY - l.value.startY) + 'px'
                })
              },
              null,
              4
            )
          ],
          64
        )
      )
    }
  }),
  cd = we(ld, [['__scopeId', 'data-v-e8b86ace']]),
  ud = ['src'],
  ad = { class: 'tooltip' },
  fd = _e({
    __name: 'DockIcon',
    props: { window: {} },
    setup(e) {
      const t = $t(),
        n = q(null),
        s = q(1),
        o = q(0.5)
      Je(() => {
        document.addEventListener('mousemove', r)
      }),
        es(() => {
          document.removeEventListener('mousemove', r)
        })
      const r = (c) => {
          function l(P, T, v) {
            return P + v * (T - P)
          }
          const { dx: a, dy: u } = i(c),
            h = 200,
            p = 50,
            m = Math.sqrt(a ** 2 + u ** 2),
            b = Math.min(1, Math.max(0, (m - h) / (p - h)))
          ;(s.value = l(1, 1.5, b)), (o.value = l(0.5, 1, b))
        },
        i = (c) => {
          const l = c.clientX,
            a = c.clientY,
            u = n.value.getBoundingClientRect(),
            h = u.left + u.width / 2,
            p = u.top + u.height / 2,
            m = l - h,
            b = a - p
          return { dx: m, dy: b }
        }
      return (c, l) => (
        B(),
        K(
          'div',
          {
            class: Fe(['dock-icon', { minimized: c.window.state === re(je).MINIMIZED }]),
            ref_key: 'thisIcon',
            ref: n,
            onClick: l[0] || (l[0] = (a) => re(t).minimize(c.window)),
            style: ot({
              transform: `scale(${s.value})`,
              margin: `0 ${o.value}rem`,
              marginBottom: `${o.value}rem`
            })
          },
          [
            M('img', { src: 'icons/' + c.window.app.icon, alt: 'icon' }, null, 8, ud),
            M('div', ad, rt(c.window.app.name), 1)
          ],
          6
        )
      )
    }
  }),
  dd = we(fd, [['__scopeId', 'data-v-83c97a13']]),
  hd = { class: 'dock-container' },
  pd = _e({
    __name: 'DockComponent',
    setup(e) {
      const t = $t(),
        n = En(),
        s = q(null),
        o = q({ x: 0, y: 0 }),
        r = q(0),
        i = () => {
          if (t.windows.length === 0) return !0
          const c = window.innerHeight - 100
          return n.shouldDockHide ? (o.value.y > c ? ((r.value = 1e3), !1) : r.value <= 0) : !1
        }
      return (
        Je(() => {
          document.addEventListener('mousemove', (c) => {
            o.value = { x: c.clientX, y: c.clientY }
          }),
            setInterval(() => {
              r.value > 0 && (r.value -= 100)
            }, 100)
        }),
        (c, l) => (
          B(),
          K('div', hd, [
            M(
              'div',
              { class: Fe(['dock', { hidden: i() }]), ref_key: 'thisDock', ref: s },
              [
                (B(!0),
                K(
                  ae,
                  null,
                  it(
                    re(t).windows,
                    (a) => (B(), Ze(dd, { key: a.id, window: a }, null, 8, ['window']))
                  ),
                  128
                ))
              ],
              2
            )
          ])
        )
      )
    }
  }),
  md = we(pd, [['__scopeId', 'data-v-21c1bf32']]),
  gd = { key: 0 },
  vd = { key: 1 },
  _d = _e({
    __name: 'DesktopView',
    setup(e) {
      const t = function () {
        let n = !1
        return (
          (function (s) {
            ;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              s
            ) ||
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas|your|zeto|zte-/i.test(
                s.substr(0, 4)
              )) &&
              (n = !0)
          })(navigator.userAgent || navigator.vendor || window.opera),
          n
        )
      }
      return (n, s) =>
        t()
          ? (B(), K('main', vd, [ge(Ni, { mobile: !0 })]))
          : (B(), K('main', gd, [ge(cd), ge(sd, { id: 'window-manager' }), ge(md, { id: 'dock' })]))
    }
  }),
  yd = we(_d, [['__scopeId', 'data-v-7624739b']]),
  wd = xa({ history: ea('/'), routes: [{ path: '/', name: 'desktop', component: yd }] }),
  ro = fu(Eu)
ro.use(mu())
ro.use(wd)
ro.mount('#app')
export {
  ae as F,
  we as _,
  M as a,
  Je as b,
  K as c,
  _e as d,
  it as e,
  Ze as f,
  Cd as g,
  bn as h,
  Cc as i,
  af as j,
  ot as n,
  B as o,
  wn as p,
  q as r,
  rt as t
}
