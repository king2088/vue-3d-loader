import { $ as J, V as R, a0 as Ne, L as ge, U as Ye, W as Ze, Y as qe, K as Se, N as Ee, a1 as Qe, o as re, n as $e, h as _, g as z, S as L, a2 as Je, i as F, G as De, x as ke, a3 as ae, a4 as ie, P as et, s as Me, M, r as tt, t as nt, z as rt, E as it, y as st, H as at, w as ot, q as lt, B as pe, u as Y, a5 as ct, a6 as ut, p as pt, v as ft, a7 as H, A as ht, Q as G, j as mt, k as dt, a8 as gt } from "./index-Bkxrq-S-.mjs";
var b = Uint8Array, q = Uint16Array, yt = Int32Array, be = new b([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), Re = new b([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), vt = new b([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Be = function(c, e) {
  for (var t = new q(31), n = 0; n < 31; ++n)
    t[n] = e += 1 << c[n - 1];
  for (var r = new yt(t[30]), n = 1; n < 30; ++n)
    for (var i = t[n]; i < t[n + 1]; ++i)
      r[i] = i - t[n] << 5 | n;
  return { b: t, r };
}, Oe = Be(be, 2), Ve = Oe.b, wt = Oe.r;
Ve[28] = 258, wt[258] = 28;
var Tt = Be(Re, 0), It = Tt.b, ye = new q(32768);
for (var I = 0; I < 32768; ++I) {
  var j = (I & 43690) >> 1 | (I & 21845) << 1;
  j = (j & 52428) >> 2 | (j & 13107) << 2, j = (j & 61680) >> 4 | (j & 3855) << 4, ye[I] = ((j & 65280) >> 8 | (j & 255) << 8) >> 1;
}
var $ = (function(c, e, t) {
  for (var n = c.length, r = 0, i = new q(e); r < n; ++r)
    c[r] && ++i[c[r] - 1];
  var s = new q(e);
  for (r = 1; r < e; ++r)
    s[r] = s[r - 1] + i[r - 1] << 1;
  var a;
  if (t) {
    a = new q(1 << e);
    var l = 15 - e;
    for (r = 0; r < n; ++r)
      if (c[r])
        for (var p = r << 4 | c[r], u = e - c[r], o = s[c[r] - 1]++ << u, f = o | (1 << u) - 1; o <= f; ++o)
          a[ye[o] >> l] = p;
  } else
    for (a = new q(n), r = 0; r < n; ++r)
      c[r] && (a[r] = ye[s[c[r] - 1]++] >> 15 - c[r]);
  return a;
}), te = new b(288);
for (var I = 0; I < 144; ++I)
  te[I] = 8;
for (var I = 144; I < 256; ++I)
  te[I] = 9;
for (var I = 256; I < 280; ++I)
  te[I] = 7;
for (var I = 280; I < 288; ++I)
  te[I] = 8;
var Ue = new b(32);
for (var I = 0; I < 32; ++I)
  Ue[I] = 5;
var xt = /* @__PURE__ */ $(te, 9, 1), Ft = /* @__PURE__ */ $(Ue, 5, 1), fe = function(c) {
  for (var e = c[0], t = 1; t < c.length; ++t)
    c[t] > e && (e = c[t]);
  return e;
}, B = function(c, e, t) {
  var n = e / 8 | 0;
  return (c[n] | c[n + 1] << 8) >> (e & 7) & t;
}, he = function(c, e) {
  var t = e / 8 | 0;
  return (c[t] | c[t + 1] << 8 | c[t + 2] << 16) >> (e & 7);
}, At = function(c) {
  return (c + 7) / 8 | 0;
}, Pt = function(c, e, t) {
  return (t == null || t > c.length) && (t = c.length), new b(c.subarray(e, t));
}, St = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
], O = function(c, e, t) {
  var n = new Error(e || St[c]);
  if (n.code = c, Error.captureStackTrace && Error.captureStackTrace(n, O), !t)
    throw n;
  return n;
}, Et = function(c, e, t, n) {
  var r = c.length, i = 0;
  if (!r || e.f && !e.l)
    return t || new b(0);
  var s = !t, a = s || e.i != 2, l = e.i;
  s && (t = new b(r * 3));
  var p = function(Fe) {
    var Ae = t.length;
    if (Fe > Ae) {
      var Pe = new b(Math.max(Ae * 2, Fe));
      Pe.set(t), t = Pe;
    }
  }, u = e.f || 0, o = e.p || 0, f = e.b || 0, h = e.l, m = e.d, d = e.m, g = e.n, w = r * 8;
  do {
    if (!h) {
      u = B(c, o, 1);
      var T = B(c, o + 1, 3);
      if (o += 3, T)
        if (T == 1)
          h = xt, m = Ft, d = 9, g = 5;
        else if (T == 2) {
          var S = B(c, o, 31) + 257, C = B(c, o + 10, 15) + 4, k = S + B(c, o + 5, 31) + 1;
          o += 14;
          for (var V = new b(k), U = new b(19), x = 0; x < C; ++x)
            U[vt[x]] = B(c, o + x * 3, 7);
          o += C * 3;
          for (var K = fe(U), oe = (1 << K) - 1, _e = $(U, K, 1), x = 0; x < k; ) {
            var ve = _e[B(c, o, oe)];
            o += ve & 15;
            var y = ve >> 4;
            if (y < 16)
              V[x++] = y;
            else {
              var W = 0, ne = 0;
              for (y == 16 ? (ne = 3 + B(c, o, 3), o += 2, W = V[x - 1]) : y == 17 ? (ne = 3 + B(c, o, 7), o += 3) : y == 18 && (ne = 11 + B(c, o, 127), o += 7); ne--; )
                V[x++] = W;
            }
          }
          var we = V.subarray(0, S), X = V.subarray(S);
          d = fe(we), g = fe(X), h = $(we, d, 1), m = $(X, g, 1);
        } else
          O(1);
      else {
        var y = At(o) + 4, P = c[y - 4] | c[y - 3] << 8, E = y + P;
        if (E > r) {
          l && O(0);
          break;
        }
        a && p(f + P), t.set(c.subarray(y, E), f), e.b = f += P, e.p = o = E * 8, e.f = u;
        continue;
      }
      if (o > w) {
        l && O(0);
        break;
      }
    }
    a && p(f + 131072);
    for (var He = (1 << d) - 1, Ke = (1 << g) - 1, le = o; ; le = o) {
      var W = h[he(c, o) & He], N = W >> 4;
      if (o += W & 15, o > w) {
        l && O(0);
        break;
      }
      if (W || O(2), N < 256)
        t[f++] = N;
      else if (N == 256) {
        le = o, h = null;
        break;
      } else {
        var Te = N - 254;
        if (N > 264) {
          var x = N - 257, Q = be[x];
          Te = B(c, o, (1 << Q) - 1) + Ve[x], o += Q;
        }
        var ce = m[he(c, o) & Ke], ue = ce >> 4;
        ce || O(3), o += ce & 15;
        var X = It[ue];
        if (ue > 3) {
          var Q = Re[ue];
          X += he(c, o) & (1 << Q) - 1, o += Q;
        }
        if (o > w) {
          l && O(0);
          break;
        }
        a && p(f + 131072);
        var Ie = f + Te;
        if (f < X) {
          var xe = i - X, We = Math.min(X, Ie);
          for (xe + f < 0 && O(3); f < We; ++f)
            t[f] = n[xe + f];
        }
        for (; f < Ie; ++f)
          t[f] = t[f - X];
      }
    }
    e.l = h, e.p = le, e.b = f, e.f = u, h && (u = 1, e.m = d, e.d = m, e.n = g);
  } while (!u);
  return f != t.length && s ? Pt(t, 0, f) : t.subarray(0, f);
}, Dt = /* @__PURE__ */ new b(0), kt = function(c, e) {
  return ((c[0] & 15) != 8 || c[0] >> 4 > 7 || (c[0] << 8 | c[1]) % 31) && O(6, "invalid zlib data"), (c[1] >> 5 & 1) == 1 && O(6, "invalid zlib data: " + (c[1] & 32 ? "need" : "unexpected") + " dictionary"), (c[1] >> 3 & 4) + 2;
};
function Mt(c, e) {
  return Et(c.subarray(kt(c), -4), { i: 2 }, e, e);
}
var Ct = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Lt = 0;
try {
  Ct.decode(Dt, { stream: !0 }), Lt = 1;
} catch {
}
function ze(c, e, t) {
  const n = t.length - c - 1;
  if (e >= t[n])
    return n - 1;
  if (e <= t[c])
    return c;
  let r = c, i = n, s = Math.floor((r + i) / 2);
  for (; e < t[s] || e >= t[s + 1]; )
    e < t[s] ? i = s : r = s, s = Math.floor((r + i) / 2);
  return s;
}
function bt(c, e, t, n) {
  const r = [], i = [], s = [];
  r[0] = 1;
  for (let a = 1; a <= t; ++a) {
    i[a] = e - n[c + 1 - a], s[a] = n[c + a] - e;
    let l = 0;
    for (let p = 0; p < a; ++p) {
      const u = s[p + 1], o = i[a - p], f = r[p] / (u + o);
      r[p] = l + u * f, l = o * f;
    }
    r[a] = l;
  }
  return r;
}
function Rt(c, e, t, n) {
  const r = ze(c, n, e), i = bt(r, n, c, e), s = new J(0, 0, 0, 0);
  for (let a = 0; a <= c; ++a) {
    const l = t[r - c + a], p = i[a], u = l.w * p;
    s.x += l.x * u, s.y += l.y * u, s.z += l.z * u, s.w += l.w * p;
  }
  return s;
}
function Bt(c, e, t, n, r) {
  const i = [];
  for (let o = 0; o <= t; ++o)
    i[o] = 0;
  const s = [];
  for (let o = 0; o <= n; ++o)
    s[o] = i.slice(0);
  const a = [];
  for (let o = 0; o <= t; ++o)
    a[o] = i.slice(0);
  a[0][0] = 1;
  const l = i.slice(0), p = i.slice(0);
  for (let o = 1; o <= t; ++o) {
    l[o] = e - r[c + 1 - o], p[o] = r[c + o] - e;
    let f = 0;
    for (let h = 0; h < o; ++h) {
      const m = p[h + 1], d = l[o - h];
      a[o][h] = m + d;
      const g = a[h][o - 1] / a[o][h];
      a[h][o] = f + m * g, f = d * g;
    }
    a[o][o] = f;
  }
  for (let o = 0; o <= t; ++o)
    s[0][o] = a[o][t];
  for (let o = 0; o <= t; ++o) {
    let f = 0, h = 1;
    const m = [];
    for (let d = 0; d <= t; ++d)
      m[d] = i.slice(0);
    m[0][0] = 1;
    for (let d = 1; d <= n; ++d) {
      let g = 0;
      const w = o - d, T = t - d;
      o >= d && (m[h][0] = m[f][0] / a[T + 1][w], g = m[h][0] * a[w][T]);
      const y = w >= -1 ? 1 : -w, P = o - 1 <= T ? d - 1 : t - o;
      for (let S = y; S <= P; ++S)
        m[h][S] = (m[f][S] - m[f][S - 1]) / a[T + 1][w + S], g += m[h][S] * a[w + S][T];
      o <= T && (m[h][d] = -m[f][d - 1] / a[T + 1][o], g += m[h][d] * a[o][T]), s[d][o] = g;
      const E = f;
      f = h, h = E;
    }
  }
  let u = t;
  for (let o = 1; o <= n; ++o) {
    for (let f = 0; f <= t; ++f)
      s[o][f] *= u;
    u *= t - o;
  }
  return s;
}
function Ot(c, e, t, n, r) {
  const i = r < c ? r : c, s = [], a = ze(c, n, e), l = Bt(a, n, c, i, e), p = [];
  for (let u = 0; u < t.length; ++u) {
    const o = t[u].clone(), f = o.w;
    o.x *= f, o.y *= f, o.z *= f, p[u] = o;
  }
  for (let u = 0; u <= i; ++u) {
    const o = p[a - c].clone().multiplyScalar(l[u][0]);
    for (let f = 1; f <= c; ++f)
      o.add(p[a - c + f].clone().multiplyScalar(l[u][f]));
    s[u] = o;
  }
  for (let u = i + 1; u <= r + 1; ++u)
    s[u] = new J(0, 0, 0);
  return s;
}
function Vt(c, e) {
  let t = 1;
  for (let r = 2; r <= c; ++r)
    t *= r;
  let n = 1;
  for (let r = 2; r <= e; ++r)
    n *= r;
  for (let r = 2; r <= c - e; ++r)
    n *= r;
  return t / n;
}
function Ut(c) {
  const e = c.length, t = [], n = [];
  for (let i = 0; i < e; ++i) {
    const s = c[i];
    t[i] = new R(s.x, s.y, s.z), n[i] = s.w;
  }
  const r = [];
  for (let i = 0; i < e; ++i) {
    const s = t[i].clone();
    for (let a = 1; a <= i; ++a)
      s.sub(r[i - a].clone().multiplyScalar(Vt(i, a) * n[a]));
    r[i] = s.divideScalar(n[0]);
  }
  return r;
}
function zt(c, e, t, n, r) {
  const i = Ot(c, e, t, n, r);
  return Ut(i);
}
class Xt extends Ne {
  /**
   * Constructs a new NURBS curve.
   *
   * @param {number} degree - The NURBS degree.
   * @param {Array<number>} knots - The knots as a flat array of numbers.
   * @param {Array<Vector2|Vector3|Vector4>} controlPoints - An array holding control points.
   * @param {number} [startKnot] - Index of the start knot into the `knots` array.
   * @param {number} [endKnot] - Index of the end knot into the `knots` array.
   */
  constructor(e, t, n, r, i) {
    super();
    const s = t ? t.length - 1 : 0, a = n ? n.length : 0;
    this.degree = e, this.knots = t, this.controlPoints = [], this.startKnot = r || 0, this.endKnot = i || s;
    for (let l = 0; l < a; ++l) {
      const p = n[l];
      this.controlPoints[l] = new J(p.x, p.y, p.z, p.w);
    }
  }
  /**
   * This method returns a vector in 3D space for the given interpolation factor.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector3} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector3} The position on the curve.
   */
  getPoint(e, t = new R()) {
    const n = t, r = this.knots[this.startKnot] + e * (this.knots[this.endKnot] - this.knots[this.startKnot]), i = Rt(this.degree, this.knots, this.controlPoints, r);
    return i.w !== 1 && i.divideScalar(i.w), n.set(i.x, i.y, i.z);
  }
  /**
   * Returns a unit vector tangent for the given interpolation factor.
   *
   * @param {number} t - The interpolation factor.
   * @param {Vector3} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector3} The tangent vector.
   */
  getTangent(e, t = new R()) {
    const n = t, r = this.knots[0] + e * (this.knots[this.knots.length - 1] - this.knots[0]), i = zt(this.degree, this.knots, this.controlPoints, r, 1);
    return n.copy(i[1]).normalize(), n;
  }
  toJSON() {
    const e = super.toJSON();
    return e.degree = this.degree, e.knots = [...this.knots], e.controlPoints = this.controlPoints.map((t) => t.toArray()), e.startKnot = this.startKnot, e.endKnot = this.endKnot, e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.degree = e.degree, this.knots = [...e.knots], this.controlPoints = e.controlPoints.map((t) => new J(t[0], t[1], t[2], t[3])), this.startKnot = e.startKnot, this.endKnot = e.endKnot, this;
  }
}
let v, A, D;
class Jt extends ge {
  /**
   * Constructs a new FBX loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e);
  }
  /**
   * Starts loading from the given URL and passes the loaded FBX asset
   * to the `onLoad()` callback.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function(Group)} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Executed while the loading is in progress.
   * @param {onErrorCallback} onError - Executed when errors occur.
   */
  load(e, t, n, r) {
    const i = this, s = i.path === "" ? Ye.extractUrlBase(e) : i.path, a = new Ze(this.manager);
    a.setPath(i.path), a.setResponseType("arraybuffer"), a.setRequestHeader(i.requestHeader), a.setWithCredentials(i.withCredentials), a.load(e, function(l) {
      try {
        t(i.parse(l, s));
      } catch (p) {
        r ? r(p) : console.error(p), i.manager.itemError(e);
      }
    }, n, r);
  }
  /**
   * Parses the given FBX data and returns the resulting group.
   *
   * @param {ArrayBuffer} FBXBuffer - The raw FBX data as an array buffer.
   * @param {string} path - The URL base path.
   * @return {Group} An object representing the parsed asset.
   */
  parse(e, t) {
    if (Wt(e))
      v = new Kt().parse(e);
    else {
      const r = je(e);
      if (!Nt(r))
        throw new Error("THREE.FBXLoader: Unknown format.");
      if (Le(r) < 7e3)
        throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + Le(r));
      v = new Ht().parse(r);
    }
    const n = new qe(this.manager).setPath(this.resourcePath || t).setCrossOrigin(this.crossOrigin);
    return new Gt(n, this.manager).parse(v);
  }
}
class Gt {
  constructor(e, t) {
    this.textureLoader = e, this.manager = t;
  }
  parse() {
    A = this.parseConnections();
    const e = this.parseImages(), t = this.parseTextures(e), n = this.parseMaterials(t), r = this.parseDeformers(), i = new jt().parse(r);
    return this.parseScene(r, i, n), D;
  }
  // Parses FBXTree.Connections which holds parent-child connections between objects (e.g. material -> texture, model->geometry )
  // and details the connection type
  parseConnections() {
    const e = /* @__PURE__ */ new Map();
    return "Connections" in v && v.Connections.connections.forEach(function(n) {
      const r = n[0], i = n[1], s = n[2];
      e.has(r) || e.set(r, {
        parents: [],
        children: []
      });
      const a = { ID: i, relationship: s };
      e.get(r).parents.push(a), e.has(i) || e.set(i, {
        parents: [],
        children: []
      });
      const l = { ID: r, relationship: s };
      e.get(i).children.push(l);
    }), e;
  }
  // Parse FBXTree.Objects.Video for embedded image data
  // These images are connected to textures in FBXTree.Objects.Textures
  // via FBXTree.Connections.
  parseImages() {
    const e = {}, t = {};
    if ("Video" in v.Objects) {
      const n = v.Objects.Video;
      for (const r in n) {
        const i = n[r], s = parseInt(r);
        if (e[s] = i.RelativeFilename || i.Filename, "Content" in i) {
          const a = i.Content instanceof ArrayBuffer && i.Content.byteLength > 0, l = typeof i.Content == "string" && i.Content !== "";
          if (a || l) {
            const p = this.parseImage(n[r]);
            t[i.RelativeFilename || i.Filename] = p;
          }
        }
      }
    }
    for (const n in e) {
      const r = e[n];
      t[r] !== void 0 ? e[n] = t[r] : e[n] = e[n].split("\\").pop();
    }
    return e;
  }
  // Parse embedded image data in FBXTree.Video.Content
  parseImage(e) {
    const t = e.Content, n = e.RelativeFilename || e.Filename, r = n.slice(n.lastIndexOf(".") + 1).toLowerCase();
    let i;
    switch (r) {
      case "bmp":
        i = "image/bmp";
        break;
      case "jpg":
      case "jpeg":
        i = "image/jpeg";
        break;
      case "png":
        i = "image/png";
        break;
      case "tif":
        i = "image/tiff";
        break;
      case "tga":
        this.manager.getHandler(".tga") === null && console.warn("FBXLoader: TGA loader not found, skipping ", n), i = "image/tga";
        break;
      case "webp":
        i = "image/webp";
        break;
      default:
        console.warn('FBXLoader: Image type "' + r + '" is not supported.');
        return;
    }
    if (typeof t == "string")
      return "data:" + i + ";base64," + t;
    {
      const s = new Uint8Array(t);
      return window.URL.createObjectURL(new Blob([s], { type: i }));
    }
  }
  // Parse nodes in FBXTree.Objects.Texture
  // These contain details such as UV scaling, cropping, rotation etc and are connected
  // to images in FBXTree.Objects.Video
  parseTextures(e) {
    const t = /* @__PURE__ */ new Map();
    if ("Texture" in v.Objects) {
      const n = v.Objects.Texture;
      for (const r in n) {
        const i = this.parseTexture(n[r], e);
        t.set(parseInt(r), i);
      }
    }
    return t;
  }
  // Parse individual node in FBXTree.Objects.Texture
  parseTexture(e, t) {
    const n = this.loadTexture(e, t);
    n.ID = e.id, n.name = e.attrName;
    const r = e.WrapModeU, i = e.WrapModeV, s = r !== void 0 ? r.value : 0, a = i !== void 0 ? i.value : 0;
    if (n.wrapS = s === 0 ? Se : Ee, n.wrapT = a === 0 ? Se : Ee, "Scaling" in e) {
      const l = e.Scaling.value;
      n.repeat.x = l[0], n.repeat.y = l[1];
    }
    if ("Translation" in e) {
      const l = e.Translation.value;
      n.offset.x = l[0], n.offset.y = l[1];
    }
    return n;
  }
  // load a texture specified as a blob or data URI, or via an external URL using TextureLoader
  loadTexture(e, t) {
    const n = e.FileName.split(".").pop().toLowerCase();
    let r = this.manager.getHandler(`.${n}`);
    r === null && (r = this.textureLoader);
    const i = r.path;
    i || r.setPath(this.textureLoader.path);
    const s = A.get(e.id).children;
    let a;
    if (s !== void 0 && s.length > 0 && t[s[0].ID] !== void 0 && (a = t[s[0].ID], (a.indexOf("blob:") === 0 || a.indexOf("data:") === 0) && r.setPath(void 0)), a === void 0)
      return console.warn("FBXLoader: Undefined filename, creating placeholder texture."), new Qe();
    const l = r.load(a);
    return r.setPath(i), l;
  }
  // Parse nodes in FBXTree.Objects.Material
  parseMaterials(e) {
    const t = /* @__PURE__ */ new Map();
    if ("Material" in v.Objects) {
      const n = v.Objects.Material;
      for (const r in n) {
        const i = this.parseMaterial(n[r], e);
        i !== null && t.set(parseInt(r), i);
      }
    }
    return t;
  }
  // Parse single node in FBXTree.Objects.Material
  // Materials are connected to texture maps in FBXTree.Objects.Textures
  // FBX format currently only supports Lambert and Phong shading models
  parseMaterial(e, t) {
    const n = e.id, r = e.attrName;
    let i = e.ShadingModel;
    if (typeof i == "object" && (i = i.value), !A.has(n)) return null;
    const s = this.parseParameters(e, t, n);
    let a;
    switch (i.toLowerCase()) {
      case "phong":
        a = new re();
        break;
      case "lambert":
        a = new $e();
        break;
      default:
        console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', i), a = new re();
        break;
    }
    return a.setValues(s), a.name = r, a;
  }
  // Parse FBX material and return parameters suitable for a three.js material
  // Also parse the texture map and return any textures associated with the material
  parseParameters(e, t, n) {
    const r = {};
    e.BumpFactor && (r.bumpScale = e.BumpFactor.value), e.Diffuse ? r.color = _.colorSpaceToWorking(new z().fromArray(e.Diffuse.value), L) : e.DiffuseColor && (e.DiffuseColor.type === "Color" || e.DiffuseColor.type === "ColorRGB") && (r.color = _.colorSpaceToWorking(new z().fromArray(e.DiffuseColor.value), L)), e.DisplacementFactor && (r.displacementScale = e.DisplacementFactor.value), e.Emissive ? r.emissive = _.colorSpaceToWorking(new z().fromArray(e.Emissive.value), L) : e.EmissiveColor && (e.EmissiveColor.type === "Color" || e.EmissiveColor.type === "ColorRGB") && (r.emissive = _.colorSpaceToWorking(new z().fromArray(e.EmissiveColor.value), L)), e.EmissiveFactor && (r.emissiveIntensity = parseFloat(e.EmissiveFactor.value)), r.opacity = 1 - (e.TransparencyFactor ? parseFloat(e.TransparencyFactor.value) : 0), (r.opacity === 1 || r.opacity === 0) && (r.opacity = e.Opacity ? parseFloat(e.Opacity.value) : null, r.opacity === null && (r.opacity = 1)), r.opacity < 1 && (r.transparent = !0), e.ReflectionFactor && (r.reflectivity = e.ReflectionFactor.value), e.Shininess && (r.shininess = e.Shininess.value), e.Specular ? r.specular = _.colorSpaceToWorking(new z().fromArray(e.Specular.value), L) : e.SpecularColor && e.SpecularColor.type === "Color" && (r.specular = _.colorSpaceToWorking(new z().fromArray(e.SpecularColor.value), L));
    const i = this;
    return A.get(n).children.forEach(function(s) {
      const a = s.relationship;
      switch (a) {
        case "Bump":
          r.bumpMap = i.getTexture(t, s.ID);
          break;
        case "Maya|TEX_ao_map":
          r.aoMap = i.getTexture(t, s.ID);
          break;
        case "DiffuseColor":
        case "Maya|TEX_color_map":
          r.map = i.getTexture(t, s.ID), r.map !== void 0 && (r.map.colorSpace = L);
          break;
        case "DisplacementColor":
          r.displacementMap = i.getTexture(t, s.ID);
          break;
        case "EmissiveColor":
          r.emissiveMap = i.getTexture(t, s.ID), r.emissiveMap !== void 0 && (r.emissiveMap.colorSpace = L);
          break;
        case "NormalMap":
        case "Maya|TEX_normal_map":
          r.normalMap = i.getTexture(t, s.ID);
          break;
        case "ReflectionColor":
          r.envMap = i.getTexture(t, s.ID), r.envMap !== void 0 && (r.envMap.mapping = Je, r.envMap.colorSpace = L);
          break;
        case "SpecularColor":
          r.specularMap = i.getTexture(t, s.ID), r.specularMap !== void 0 && (r.specularMap.colorSpace = L);
          break;
        case "TransparentColor":
        case "TransparencyFactor":
          r.alphaMap = i.getTexture(t, s.ID), r.transparent = !0;
          break;
        // NOTE: Seems to be a copy of DisplacementColor
        default:
          console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.", a);
          break;
      }
    }), r;
  }
  // get a texture from the textureMap for use by a material.
  getTexture(e, t) {
    return "LayeredTexture" in v.Objects && t in v.Objects.LayeredTexture && (console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."), t = A.get(t).children[0].ID), e.get(t);
  }
  // Parse nodes in FBXTree.Objects.Deformer
  // Deformer node can contain skinning or Vertex Cache animation data, however only skinning is supported here
  // Generates map of Skeleton-like objects for use later when generating and binding skeletons.
  parseDeformers() {
    const e = {}, t = {};
    if ("Deformer" in v.Objects) {
      const n = v.Objects.Deformer;
      for (const r in n) {
        const i = n[r], s = A.get(parseInt(r));
        if (i.attrType === "Skin") {
          const a = this.parseSkeleton(s, n);
          a.ID = r, s.parents.length > 1 && console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."), a.geometryID = s.parents[0].ID, e[r] = a;
        } else if (i.attrType === "BlendShape") {
          const a = {
            id: r
          };
          a.rawTargets = this.parseMorphTargets(s, n), a.id = r, s.parents.length > 1 && console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."), t[r] = a;
        }
      }
    }
    return {
      skeletons: e,
      morphTargets: t
    };
  }
  // Parse single nodes in FBXTree.Objects.Deformer
  // The top level skeleton node has type 'Skin' and sub nodes have type 'Cluster'
  // Each skin node represents a skeleton and each cluster node represents a bone
  parseSkeleton(e, t) {
    const n = [];
    return e.children.forEach(function(r) {
      const i = t[r.ID];
      if (i.attrType !== "Cluster") return;
      const s = {
        ID: r.ID,
        indices: [],
        weights: [],
        transformLink: new F().fromArray(i.TransformLink.a)
      };
      "Indexes" in i && (s.indices = i.Indexes.a, s.weights = i.Weights.a), n.push(s);
    }), {
      rawBones: n,
      bones: []
    };
  }
  // The top level morph deformer node has type "BlendShape" and sub nodes have type "BlendShapeChannel"
  parseMorphTargets(e, t) {
    const n = [];
    for (let r = 0; r < e.children.length; r++) {
      const i = e.children[r], s = t[i.ID], a = {
        name: s.attrName,
        initialWeight: s.DeformPercent,
        id: s.id,
        fullWeights: s.FullWeights.a
      };
      if (s.attrType !== "BlendShapeChannel") return;
      a.geoID = A.get(parseInt(i.ID)).children.filter(function(l) {
        return l.relationship === void 0;
      })[0].ID, n.push(a);
    }
    return n;
  }
  // create the main Group() to be returned by the loader
  parseScene(e, t, n) {
    D = new De();
    const r = this.parseModels(e.skeletons, t, n), i = v.Objects.Model, s = this;
    r.forEach(function(o) {
      const f = i[o.ID];
      s.setLookAtProperties(o, f), A.get(o.ID).parents.forEach(function(m) {
        const d = r.get(m.ID);
        d !== void 0 && d.add(o);
      }), o.parent === null && D.add(o);
    }), this.addGlobalSceneSettings(), D.traverse(function(o) {
      if (o.userData.transformData) {
        o.parent && (o.userData.transformData.parentMatrix = o.parent.matrix, o.userData.transformData.parentMatrixWorld = o.parent.matrixWorld);
        const f = Ge(o.userData.transformData);
        o.applyMatrix4(f), o.updateWorldMatrix();
      }
    });
    const a = this.parsePoseNodes(), l = /* @__PURE__ */ new Set();
    for (const o in e.skeletons)
      e.skeletons[o].rawBones.forEach(function(f, h) {
        const m = e.skeletons[o].bones[h];
        m && l.add(m.ID);
      });
    const p = new F();
    D.traverse(function(o) {
      if (o.isBone && o.ID !== void 0 && !l.has(o.ID)) {
        const f = a[o.ID];
        f !== void 0 && (o.parent ? (p.copy(o.parent.matrixWorld).invert(), p.multiply(f)) : p.copy(f), p.decompose(o.position, o.quaternion, o.scale), o.updateMatrix(), o.matrixWorld.copy(f));
      }
    }), this.bindSkeleton(e.skeletons, t, r);
    const u = new _t().parse();
    D.children.length === 1 && D.children[0].isGroup && (D.children[0].animations = u, D = D.children[0]), D.animations = u, "GlobalSettings" in v && "UpAxis" in v.GlobalSettings && v.GlobalSettings.UpAxis.value === 2 && (console.warn("THREE.FBXLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted."), D.rotation.set(-Math.PI / 2, 0, 0));
  }
  // parse nodes in FBXTree.Objects.Model
  parseModels(e, t, n) {
    const r = /* @__PURE__ */ new Map(), i = v.Objects.Model;
    for (const s in i) {
      const a = parseInt(s), l = i[s], p = A.get(a);
      let u = this.buildSkeleton(p, e, a, l.attrName);
      if (!u) {
        switch (l.attrType) {
          case "Camera":
            u = this.createCamera(p);
            break;
          case "Light":
            u = this.createLight(p);
            break;
          case "Mesh":
            u = this.createMesh(p, t, n);
            break;
          case "NurbsCurve":
            u = this.createCurve(p, t);
            break;
          case "LimbNode":
          case "Root":
            u = new ke();
            break;
          default:
            u = new De();
            break;
        }
        u.name = l.attrName ? ae.sanitizeNodeName(l.attrName) : "", u.userData.originalName = l.attrName, u.ID = a;
      }
      this.getTransformData(u, l), r.set(a, u);
    }
    return r;
  }
  buildSkeleton(e, t, n, r) {
    let i = null;
    return e.parents.forEach(function(s) {
      for (const a in t) {
        const l = t[a];
        l.rawBones.forEach(function(p, u) {
          if (p.ID === s.ID) {
            const o = i;
            i = new ke(), i.matrixWorld.copy(p.transformLink), i.name = r ? ae.sanitizeNodeName(r) : "", i.userData.originalName = r, i.ID = n, l.bones[u] = i, o !== null && i.add(o);
          }
        });
      }
    }), i;
  }
  // create a PerspectiveCamera or OrthographicCamera
  createCamera(e) {
    let t, n;
    if (e.children.forEach(function(r) {
      const i = v.Objects.NodeAttribute[r.ID];
      i !== void 0 && (n = i);
    }), n === void 0)
      t = new ie();
    else {
      let r = 0;
      n.CameraProjectionType !== void 0 && n.CameraProjectionType.value === 1 && (r = 1);
      let i = 1;
      n.NearPlane !== void 0 && (i = n.NearPlane.value / 1e3);
      let s = 1e3;
      n.FarPlane !== void 0 && (s = n.FarPlane.value / 1e3);
      let a = window.innerWidth, l = window.innerHeight;
      n.AspectWidth !== void 0 && n.AspectHeight !== void 0 && (a = n.AspectWidth.value, l = n.AspectHeight.value);
      const p = a / l;
      let u = 45;
      n.FieldOfView !== void 0 && (u = n.FieldOfView.value);
      const o = n.FocalLength ? n.FocalLength.value : null;
      switch (r) {
        case 0:
          t = new et(u, p, i, s), o !== null && t.setFocalLength(o);
          break;
        case 1:
          console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."), t = new ie();
          break;
        default:
          console.warn("THREE.FBXLoader: Unknown camera type " + r + "."), t = new ie();
          break;
      }
    }
    return t;
  }
  // Create a DirectionalLight, PointLight or SpotLight
  createLight(e) {
    let t, n;
    if (e.children.forEach(function(r) {
      const i = v.Objects.NodeAttribute[r.ID];
      i !== void 0 && (n = i);
    }), n === void 0)
      t = new ie();
    else {
      let r;
      n.LightType === void 0 ? r = 0 : r = n.LightType.value;
      let i = 16777215;
      n.Color !== void 0 && (i = _.colorSpaceToWorking(new z().fromArray(n.Color.value), L));
      let s = n.Intensity === void 0 ? 1 : n.Intensity.value / 100;
      n.CastLightOnObject !== void 0 && n.CastLightOnObject.value === 0 && (s = 0);
      let a = 0;
      n.FarAttenuationEnd !== void 0 && (n.EnableFarAttenuation !== void 0 && n.EnableFarAttenuation.value === 0 ? a = 0 : a = n.FarAttenuationEnd.value);
      const l = 1;
      switch (r) {
        case 0:
          t = new Me(i, s, a, l);
          break;
        case 1:
          t = new nt(i, s);
          break;
        case 2:
          let p = Math.PI / 3, u = 0;
          n.OuterAngle !== void 0 ? (p = M.degToRad(n.OuterAngle.value), n.InnerAngle !== void 0 && (u = 1 - n.InnerAngle.value / n.OuterAngle.value, u = Math.max(0, u))) : n.InnerAngle !== void 0 && (p = M.degToRad(n.InnerAngle.value)), t = new tt(i, s, a, p, u, l);
          break;
        default:
          console.warn("THREE.FBXLoader: Unknown light type " + n.LightType.value + ", defaulting to a PointLight."), t = new Me(i, s);
          break;
      }
      n.CastShadows !== void 0 && n.CastShadows.value === 1 && (t.castShadow = !0);
    }
    return t;
  }
  createMesh(e, t, n) {
    let r, i = null, s = null;
    const a = [];
    if (e.children.forEach(function(l) {
      t.has(l.ID) && (i = t.get(l.ID)), n.has(l.ID) && a.push(n.get(l.ID));
    }), a.length > 1 ? s = a : a.length > 0 ? s = a[0] : (s = new re({
      name: ge.DEFAULT_MATERIAL_NAME,
      color: 13421772
    }), a.push(s)), "color" in i.attributes && a.forEach(function(l) {
      l.vertexColors = !0;
    }), i.groups.length > 0) {
      let l = !1;
      for (let p = 0, u = i.groups.length; p < u; p++) {
        const o = i.groups[p];
        (o.materialIndex < 0 || o.materialIndex >= a.length) && (o.materialIndex = a.length, l = !0);
      }
      if (l) {
        const p = new re();
        a.push(p);
      }
    }
    return i.FBX_Deformer ? (r = new rt(i, s), r.normalizeSkinWeights()) : r = new it(i, s), r;
  }
  createCurve(e, t) {
    const n = e.children.reduce(function(i, s) {
      return t.has(s.ID) && (i = t.get(s.ID)), i;
    }, null), r = new st({
      name: ge.DEFAULT_MATERIAL_NAME,
      color: 3342591,
      linewidth: 1
    });
    return new at(n, r);
  }
  // parse the model node for transform data
  getTransformData(e, t) {
    const n = {};
    "InheritType" in t && (n.inheritType = parseInt(t.InheritType.value)), "RotationOrder" in t ? n.eulerOrder = ee(t.RotationOrder.value) : n.eulerOrder = ee(0), "Lcl_Translation" in t && (n.translation = t.Lcl_Translation.value), "PreRotation" in t && (n.preRotation = t.PreRotation.value), "Lcl_Rotation" in t && (n.rotation = t.Lcl_Rotation.value), "PostRotation" in t && (n.postRotation = t.PostRotation.value), "Lcl_Scaling" in t && (n.scale = t.Lcl_Scaling.value), "ScalingOffset" in t && (n.scalingOffset = t.ScalingOffset.value), "ScalingPivot" in t && (n.scalingPivot = t.ScalingPivot.value), "RotationOffset" in t && (n.rotationOffset = t.RotationOffset.value), "RotationPivot" in t && (n.rotationPivot = t.RotationPivot.value), e.userData.transformData = n;
  }
  setLookAtProperties(e, t) {
    "LookAtProperty" in t && A.get(e.ID).children.forEach(function(r) {
      if (r.relationship === "LookAtProperty") {
        const i = v.Objects.Model[r.ID];
        if ("Lcl_Translation" in i) {
          const s = i.Lcl_Translation.value;
          e.target !== void 0 ? (e.target.position.fromArray(s), D.add(e.target)) : e.lookAt(new R().fromArray(s));
        }
      }
    });
  }
  bindSkeleton(e, t, n) {
    for (const r in e) {
      const i = e[r], s = [];
      for (let l = 0, p = i.bones.length; l < p; l++) {
        const u = new F();
        i.bones[l] && i.rawBones[l] && u.copy(i.rawBones[l].transformLink).invert(), s.push(u);
      }
      A.get(parseInt(i.ID)).parents.forEach(function(l) {
        if (t.has(l.ID)) {
          const p = l.ID;
          A.get(p).parents.forEach(function(o) {
            if (n.has(o.ID)) {
              const f = n.get(o.ID);
              f.updateMatrixWorld(!0), f.bind(new ot(i.bones, s), f.matrixWorld);
            }
          });
        }
      });
    }
  }
  // Parse BindPose nodes and return a map of node ID to bind matrix.
  parsePoseNodes() {
    const e = {};
    if ("Pose" in v.Objects) {
      const t = v.Objects.Pose;
      for (const n in t)
        if (t[n].attrType === "BindPose" && t[n].NbPoseNodes > 0) {
          const r = t[n].PoseNode;
          Array.isArray(r) ? r.forEach(function(i) {
            e[i.Node] = new F().fromArray(i.Matrix.a);
          }) : e[r.Node] = new F().fromArray(r.Matrix.a);
        }
    }
    return e;
  }
  addGlobalSceneSettings() {
    if ("GlobalSettings" in v) {
      if ("AmbientColor" in v.GlobalSettings) {
        const e = v.GlobalSettings.AmbientColor.value, t = e[0], n = e[1], r = e[2];
        if (t !== 0 || n !== 0 || r !== 0) {
          const i = new z().setRGB(t, n, r, L);
          D.add(new lt(i, 1));
        }
      }
      "UnitScaleFactor" in v.GlobalSettings && (D.userData.unitScaleFactor = v.GlobalSettings.UnitScaleFactor.value);
    }
  }
}
class jt {
  constructor() {
    this.negativeMaterialIndices = !1;
  }
  // Parse nodes in FBXTree.Objects.Geometry
  parse(e) {
    const t = /* @__PURE__ */ new Map();
    if ("Geometry" in v.Objects) {
      const n = v.Objects.Geometry;
      for (const r in n) {
        const i = A.get(parseInt(r)), s = this.parseGeometry(i, n[r], e);
        t.set(parseInt(r), s);
      }
    }
    return this.negativeMaterialIndices === !0 && console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."), t;
  }
  // Parse single node in FBXTree.Objects.Geometry
  parseGeometry(e, t, n) {
    switch (t.attrType) {
      case "Mesh":
        return this.parseMeshGeometry(e, t, n);
      case "NurbsCurve":
        return this.parseNurbsGeometry(t);
    }
  }
  // Parse single node mesh geometry in FBXTree.Objects.Geometry
  parseMeshGeometry(e, t, n) {
    const r = n.skeletons, i = [], s = e.parents.map(function(o) {
      return v.Objects.Model[o.ID];
    });
    if (s.length === 0) return;
    const a = e.children.reduce(function(o, f) {
      return r[f.ID] !== void 0 && (o = r[f.ID]), o;
    }, null);
    e.children.forEach(function(o) {
      n.morphTargets[o.ID] !== void 0 && i.push(n.morphTargets[o.ID]);
    });
    const l = s[0], p = {};
    "RotationOrder" in l && (p.eulerOrder = ee(l.RotationOrder.value)), "InheritType" in l && (p.inheritType = parseInt(l.InheritType.value)), "GeometricTranslation" in l && (p.translation = l.GeometricTranslation.value), "GeometricRotation" in l && (p.rotation = l.GeometricRotation.value), "GeometricScaling" in l && (p.scale = l.GeometricScaling.value);
    const u = Ge(p);
    return this.genGeometry(t, a, i, u);
  }
  // Generate a BufferGeometry from a node in FBXTree.Objects.Geometry
  genGeometry(e, t, n, r) {
    const i = new pe();
    e.attrName && (i.name = e.attrName);
    const s = this.parseGeoNode(e, t), a = this.genBuffers(s), l = new Y(a.vertex, 3);
    if (l.applyMatrix4(r), i.setAttribute("position", l), a.colors.length > 0 && i.setAttribute("color", new Y(a.colors, 3)), t && (i.setAttribute("skinIndex", new ct(a.weightsIndices, 4)), i.setAttribute("skinWeight", new Y(a.vertexWeights, 4)), i.FBX_Deformer = t), a.normal.length > 0) {
      const p = new ut().getNormalMatrix(r), u = new Y(a.normal, 3);
      u.applyNormalMatrix(p), i.setAttribute("normal", u);
    }
    if (a.uvs.forEach(function(p, u) {
      const o = u === 0 ? "uv" : `uv${u}`;
      i.setAttribute(o, new Y(a.uvs[u], 2));
    }), s.material && s.material.mappingType !== "AllSame") {
      let p = a.materialIndex[0], u = 0;
      if (a.materialIndex.forEach(function(o, f) {
        o !== p && (i.addGroup(u, f - u, p), p = o, u = f);
      }), i.groups.length > 0) {
        const o = i.groups[i.groups.length - 1], f = o.start + o.count;
        f !== a.materialIndex.length && i.addGroup(f, a.materialIndex.length - f, p);
      }
      i.groups.length === 0 && i.addGroup(0, a.materialIndex.length, a.materialIndex[0]);
    }
    return this.addMorphTargets(i, e, n, r), i;
  }
  parseGeoNode(e, t) {
    const n = {};
    if (n.vertexPositions = e.Vertices !== void 0 ? e.Vertices.a : [], n.vertexIndices = e.PolygonVertexIndex !== void 0 ? e.PolygonVertexIndex.a : [], e.LayerElementColor && e.LayerElementColor[0].Colors && (n.color = this.parseVertexColors(e.LayerElementColor[0])), e.LayerElementMaterial && (n.material = this.parseMaterialIndices(e.LayerElementMaterial[0])), e.LayerElementNormal && (n.normal = this.parseNormals(e.LayerElementNormal[0])), e.LayerElementUV) {
      n.uv = [];
      let r = 0;
      for (; e.LayerElementUV[r]; )
        e.LayerElementUV[r].UV && n.uv.push(this.parseUVs(e.LayerElementUV[r])), r++;
    }
    return n.weightTable = {}, t !== null && (n.skeleton = t, t.rawBones.forEach(function(r, i) {
      r.indices.forEach(function(s, a) {
        n.weightTable[s] === void 0 && (n.weightTable[s] = []), n.weightTable[s].push({
          id: i,
          weight: r.weights[a]
        });
      });
    })), n;
  }
  genBuffers(e) {
    const t = {
      vertex: [],
      normal: [],
      colors: [],
      uvs: [],
      materialIndex: [],
      vertexWeights: [],
      weightsIndices: []
    };
    let n = 0, r = 0, i = !1, s = [], a = [], l = [], p = [], u = [], o = [];
    const f = this;
    return e.vertexIndices.forEach(function(h, m) {
      let d, g = !1;
      h < 0 && (h = h ^ -1, g = !0);
      let w = [], T = [];
      if (s.push(h * 3, h * 3 + 1, h * 3 + 2), e.color) {
        const y = se(m, n, h, e.color);
        l.push(y[0], y[1], y[2]);
      }
      if (e.skeleton) {
        if (e.weightTable[h] !== void 0 && e.weightTable[h].forEach(function(y) {
          T.push(y.weight), w.push(y.id);
        }), T.length > 4) {
          i || (console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."), i = !0);
          const y = [0, 0, 0, 0], P = [0, 0, 0, 0];
          T.forEach(function(E, S) {
            let C = E, k = w[S];
            P.forEach(function(V, U, x) {
              if (C > V) {
                x[U] = C, C = V;
                const K = y[U];
                y[U] = k, k = K;
              }
            });
          }), w = y, T = P;
        }
        for (; T.length < 4; )
          T.push(0), w.push(0);
        for (let y = 0; y < 4; ++y)
          u.push(T[y]), o.push(w[y]);
      }
      if (e.normal) {
        const y = se(m, n, h, e.normal);
        a.push(y[0], y[1], y[2]);
      }
      e.material && e.material.mappingType !== "AllSame" && (d = se(m, n, h, e.material)[0], d < 0 && (f.negativeMaterialIndices = !0, d = 0)), e.uv && e.uv.forEach(function(y, P) {
        const E = se(m, n, h, y);
        p[P] === void 0 && (p[P] = []), p[P].push(E[0]), p[P].push(E[1]);
      }), r++, g && (f.genFace(t, e, s, d, a, l, p, u, o, r), n++, r = 0, s = [], a = [], l = [], p = [], u = [], o = []);
    }), t;
  }
  // See https://www.khronos.org/opengl/wiki/Calculating_a_Surface_Normal
  getNormalNewell(e) {
    const t = new R(0, 0, 0);
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = e[(n + 1) % e.length];
      t.x += (r.y - i.y) * (r.z + i.z), t.y += (r.z - i.z) * (r.x + i.x), t.z += (r.x - i.x) * (r.y + i.y);
    }
    return t.normalize(), t;
  }
  getNormalTangentAndBitangent(e) {
    const t = this.getNormalNewell(e), r = (Math.abs(t.z) > 0.5 ? new R(0, 1, 0) : new R(0, 0, 1)).cross(t).normalize(), i = t.clone().cross(r).normalize();
    return {
      normal: t,
      tangent: r,
      bitangent: i
    };
  }
  flattenVertex(e, t, n) {
    return new pt(
      e.dot(t),
      e.dot(n)
    );
  }
  // Generate data for a single face in a geometry. If the face is a quad then split it into 2 tris
  genFace(e, t, n, r, i, s, a, l, p, u) {
    let o;
    if (u > 3) {
      const f = [], h = t.baseVertexPositions || t.vertexPositions;
      for (let w = 0; w < n.length; w += 3)
        f.push(
          new R(
            h[n[w]],
            h[n[w + 1]],
            h[n[w + 2]]
          )
        );
      const { tangent: m, bitangent: d } = this.getNormalTangentAndBitangent(f), g = [];
      for (const w of f)
        g.push(this.flattenVertex(w, m, d));
      o = ft.triangulateShape(g, []);
    } else
      o = [[0, 1, 2]];
    for (const [f, h, m] of o)
      e.vertex.push(t.vertexPositions[n[f * 3]]), e.vertex.push(t.vertexPositions[n[f * 3 + 1]]), e.vertex.push(t.vertexPositions[n[f * 3 + 2]]), e.vertex.push(t.vertexPositions[n[h * 3]]), e.vertex.push(t.vertexPositions[n[h * 3 + 1]]), e.vertex.push(t.vertexPositions[n[h * 3 + 2]]), e.vertex.push(t.vertexPositions[n[m * 3]]), e.vertex.push(t.vertexPositions[n[m * 3 + 1]]), e.vertex.push(t.vertexPositions[n[m * 3 + 2]]), t.skeleton && (e.vertexWeights.push(l[f * 4]), e.vertexWeights.push(l[f * 4 + 1]), e.vertexWeights.push(l[f * 4 + 2]), e.vertexWeights.push(l[f * 4 + 3]), e.vertexWeights.push(l[h * 4]), e.vertexWeights.push(l[h * 4 + 1]), e.vertexWeights.push(l[h * 4 + 2]), e.vertexWeights.push(l[h * 4 + 3]), e.vertexWeights.push(l[m * 4]), e.vertexWeights.push(l[m * 4 + 1]), e.vertexWeights.push(l[m * 4 + 2]), e.vertexWeights.push(l[m * 4 + 3]), e.weightsIndices.push(p[f * 4]), e.weightsIndices.push(p[f * 4 + 1]), e.weightsIndices.push(p[f * 4 + 2]), e.weightsIndices.push(p[f * 4 + 3]), e.weightsIndices.push(p[h * 4]), e.weightsIndices.push(p[h * 4 + 1]), e.weightsIndices.push(p[h * 4 + 2]), e.weightsIndices.push(p[h * 4 + 3]), e.weightsIndices.push(p[m * 4]), e.weightsIndices.push(p[m * 4 + 1]), e.weightsIndices.push(p[m * 4 + 2]), e.weightsIndices.push(p[m * 4 + 3])), t.color && (e.colors.push(s[f * 3]), e.colors.push(s[f * 3 + 1]), e.colors.push(s[f * 3 + 2]), e.colors.push(s[h * 3]), e.colors.push(s[h * 3 + 1]), e.colors.push(s[h * 3 + 2]), e.colors.push(s[m * 3]), e.colors.push(s[m * 3 + 1]), e.colors.push(s[m * 3 + 2])), t.material && t.material.mappingType !== "AllSame" && (e.materialIndex.push(r), e.materialIndex.push(r), e.materialIndex.push(r)), t.normal && (e.normal.push(i[f * 3]), e.normal.push(i[f * 3 + 1]), e.normal.push(i[f * 3 + 2]), e.normal.push(i[h * 3]), e.normal.push(i[h * 3 + 1]), e.normal.push(i[h * 3 + 2]), e.normal.push(i[m * 3]), e.normal.push(i[m * 3 + 1]), e.normal.push(i[m * 3 + 2])), t.uv && t.uv.forEach(function(d, g) {
        e.uvs[g] === void 0 && (e.uvs[g] = []), e.uvs[g].push(a[g][f * 2]), e.uvs[g].push(a[g][f * 2 + 1]), e.uvs[g].push(a[g][h * 2]), e.uvs[g].push(a[g][h * 2 + 1]), e.uvs[g].push(a[g][m * 2]), e.uvs[g].push(a[g][m * 2 + 1]);
      });
  }
  addMorphTargets(e, t, n, r) {
    if (n.length === 0) return;
    e.morphTargetsRelative = !0, e.morphAttributes.position = [];
    const i = r.clone().setPosition(0, 0, 0), s = this;
    n.forEach(function(a) {
      a.rawTargets.forEach(function(l) {
        const p = v.Objects.Geometry[l.geoID];
        p !== void 0 && s.genMorphGeometry(e, t, p, i, l.name);
      });
    });
  }
  // a morph geometry node is similar to a standard  node, and the node is also contained
  // in FBXTree.Objects.Geometry, however it can only have attributes for position, normal
  // and a special attribute Index defining which vertices of the original geometry are affected
  // Normal and position attributes only have data for the vertices that are affected by the morph
  genMorphGeometry(e, t, n, r, i) {
    const s = t.Vertices !== void 0 ? t.Vertices.a : [], a = t.PolygonVertexIndex !== void 0 ? t.PolygonVertexIndex.a : [], l = n.Vertices !== void 0 ? n.Vertices.a : [], p = n.Indexes !== void 0 ? n.Indexes.a : [], u = e.attributes.position.count * 3, o = new Float32Array(u);
    for (let d = 0; d < p.length; d++) {
      const g = p[d] * 3;
      o[g] = l[d * 3], o[g + 1] = l[d * 3 + 1], o[g + 2] = l[d * 3 + 2];
    }
    const f = {
      vertexIndices: a,
      vertexPositions: o,
      baseVertexPositions: s
    }, h = this.genBuffers(f), m = new Y(h.vertex, 3);
    m.name = i || n.attrName, m.applyMatrix4(r), e.morphAttributes.position.push(m);
  }
  // Parse normal from FBXTree.Objects.Geometry.LayerElementNormal if it exists
  parseNormals(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType, r = e.Normals.a;
    let i = [];
    return n === "IndexToDirect" && ("NormalIndex" in e ? i = e.NormalIndex.a : "NormalsIndex" in e && (i = e.NormalsIndex.a)), {
      dataSize: 3,
      buffer: r,
      indices: i,
      mappingType: t,
      referenceType: n
    };
  }
  // Parse UVs from FBXTree.Objects.Geometry.LayerElementUV if it exists
  parseUVs(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType, r = e.UV.a;
    let i = [];
    return n === "IndexToDirect" && (i = e.UVIndex.a), {
      dataSize: 2,
      buffer: r,
      indices: i,
      mappingType: t,
      referenceType: n
    };
  }
  // Parse Vertex Colors from FBXTree.Objects.Geometry.LayerElementColor if it exists
  parseVertexColors(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType, r = e.Colors.a;
    let i = [];
    n === "IndexToDirect" && (i = e.ColorIndex.a);
    for (let s = 0, a = new z(); s < r.length; s += 4)
      a.fromArray(r, s), _.colorSpaceToWorking(a, L), a.toArray(r, s);
    return {
      dataSize: 4,
      buffer: r,
      indices: i,
      mappingType: t,
      referenceType: n
    };
  }
  // Parse mapping and material data in FBXTree.Objects.Geometry.LayerElementMaterial if it exists
  parseMaterialIndices(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType;
    if (t === "NoMappingInformation")
      return {
        dataSize: 1,
        buffer: [0],
        indices: [0],
        mappingType: "AllSame",
        referenceType: n
      };
    const r = e.Materials.a, i = [];
    for (let s = 0; s < r.length; ++s)
      i.push(s);
    return {
      dataSize: 1,
      buffer: r,
      indices: i,
      mappingType: t,
      referenceType: n
    };
  }
  // Generate a NurbGeometry from a node in FBXTree.Objects.Geometry
  parseNurbsGeometry(e) {
    const t = parseInt(e.Order);
    if (isNaN(t))
      return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s", e.Order, e.id), new pe();
    const n = t - 1, r = e.KnotVector.a, i = [], s = e.Points.a;
    for (let o = 0, f = s.length; o < f; o += 4)
      i.push(new J().fromArray(s, o));
    let a, l;
    if (e.Form === "Closed")
      i.push(i[0]);
    else if (e.Form === "Periodic") {
      a = n, l = r.length - 1 - a;
      for (let o = 0; o < n; ++o)
        i.push(i[o]);
    }
    const u = new Xt(n, r, i, a, l).getPoints(i.length * 12);
    return new pe().setFromPoints(u);
  }
}
class _t {
  // take raw animation clips and turn them into three.js animation clips
  parse() {
    const e = [], t = this.parseClips();
    if (t !== void 0)
      for (const n in t) {
        const r = t[n], i = this.addClip(r);
        e.push(i);
      }
    return e;
  }
  parseClips() {
    if (v.Objects.AnimationCurve === void 0) return;
    const e = this.parseAnimationCurveNodes();
    this.parseAnimationCurves(e);
    const t = this.parseAnimationLayers(e);
    return this.parseAnimStacks(t);
  }
  // parse nodes in FBXTree.Objects.AnimationCurveNode
  // each AnimationCurveNode holds data for an animation transform for a model (e.g. left arm rotation )
  // and is referenced by an AnimationLayer
  parseAnimationCurveNodes() {
    const e = v.Objects.AnimationCurveNode, t = /* @__PURE__ */ new Map();
    for (const n in e) {
      const r = e[n];
      if (r.attrName.match(/S|R|T|DeformPercent/) !== null) {
        const i = {
          id: r.id,
          attr: r.attrName,
          curves: {}
        };
        t.set(i.id, i);
      }
    }
    return t;
  }
  // parse nodes in FBXTree.Objects.AnimationCurve and connect them up to
  // previously parsed AnimationCurveNodes. Each AnimationCurve holds data for a single animated
  // axis ( e.g. times and values of x rotation)
  parseAnimationCurves(e) {
    const t = v.Objects.AnimationCurve;
    for (const n in t) {
      const r = {
        id: t[n].id,
        times: t[n].KeyTime.a.map(Yt),
        values: t[n].KeyValueFloat.a
      }, i = A.get(r.id);
      if (i !== void 0) {
        const s = i.parents[0].ID, a = i.parents[0].relationship;
        a.match(/X/) ? e.get(s).curves.x = r : a.match(/Y/) ? e.get(s).curves.y = r : a.match(/Z/) ? e.get(s).curves.z = r : a.match(/DeformPercent/) && e.has(s) && (e.get(s).curves.morph = r);
      }
    }
  }
  // parse nodes in FBXTree.Objects.AnimationLayer. Each layers holds references
  // to various AnimationCurveNodes and is referenced by an AnimationStack node
  // note: theoretically a stack can have multiple layers, however in practice there always seems to be one per stack
  parseAnimationLayers(e) {
    const t = v.Objects.AnimationLayer, n = /* @__PURE__ */ new Map();
    for (const r in t) {
      const i = [], s = A.get(parseInt(r));
      s !== void 0 && (s.children.forEach(function(l, p) {
        if (e.has(l.ID)) {
          const u = e.get(l.ID);
          if (u.curves.x !== void 0 || u.curves.y !== void 0 || u.curves.z !== void 0) {
            if (i[p] === void 0) {
              const o = A.get(l.ID).parents.filter(function(h) {
                return h.relationship !== void 0;
              });
              if (o.length === 0) return;
              const f = o[0].ID;
              if (f !== void 0) {
                const h = v.Objects.Model[f.toString()];
                if (h === void 0) {
                  console.warn("THREE.FBXLoader: Encountered a unused curve.", l);
                  return;
                }
                const m = {
                  modelName: h.attrName ? ae.sanitizeNodeName(h.attrName) : "",
                  ID: h.id,
                  initialPosition: [0, 0, 0],
                  initialRotation: [0, 0, 0],
                  initialScale: [1, 1, 1]
                };
                D.traverse(function(d) {
                  d.ID === h.id && (m.transform = d.matrix, d.userData.transformData && (m.eulerOrder = d.userData.transformData.eulerOrder, d.userData.transformData.rotation && (m.initialRotation = d.userData.transformData.rotation)));
                }), m.transform || (m.transform = new F()), "PreRotation" in h && (m.preRotation = h.PreRotation.value), "PostRotation" in h && (m.postRotation = h.PostRotation.value), i[p] = m;
              }
            }
            i[p] && (i[p][u.attr] = u);
          } else if (u.curves.morph !== void 0) {
            if (i[p] === void 0) {
              const o = A.get(l.ID).parents.filter(function(T) {
                return T.relationship !== void 0;
              });
              if (o.length === 0) return;
              const f = o[0].ID, h = A.get(f).parents[0].ID, m = A.get(h).parents[0].ID, d = A.get(m).parents[0].ID, g = v.Objects.Model[d], w = {
                modelName: g.attrName ? ae.sanitizeNodeName(g.attrName) : "",
                morphName: v.Objects.Deformer[f].attrName
              };
              i[p] = w;
            }
            i[p][u.attr] = u;
          }
        }
      }), n.set(parseInt(r), i));
    }
    return n;
  }
  // parse nodes in FBXTree.Objects.AnimationStack. These are the top level node in the animation
  // hierarchy. Each Stack node will be used to create an AnimationClip
  parseAnimStacks(e) {
    const t = v.Objects.AnimationStack, n = {};
    for (const r in t) {
      const i = A.get(parseInt(r)).children;
      i.length > 1 && console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");
      const s = e.get(i[0].ID);
      n[r] = {
        name: t[r].attrName,
        layer: s
      };
    }
    return n;
  }
  addClip(e) {
    let t = [];
    const n = this;
    return e.layer.forEach(function(r) {
      t = t.concat(n.generateTracks(r));
    }), new ht(e.name, -1, t);
  }
  generateTracks(e) {
    const t = [];
    let n = new R(), r = new R();
    if (e.transform && e.transform.decompose(n, new G(), r), n = n.toArray(), r = r.toArray(), e.T !== void 0 && Object.keys(e.T.curves).length > 0) {
      const i = this.generateVectorTrack(e.modelName, e.T.curves, n, "position");
      i !== void 0 && t.push(i);
    }
    if (e.R !== void 0 && Object.keys(e.R.curves).length > 0) {
      const i = this.generateRotationTrack(e.modelName, e.R.curves, e.preRotation, e.postRotation, e.eulerOrder, e.initialRotation);
      i !== void 0 && t.push(i);
    }
    if (e.S !== void 0 && Object.keys(e.S.curves).length > 0) {
      const i = this.generateVectorTrack(e.modelName, e.S.curves, r, "scale");
      i !== void 0 && t.push(i);
    }
    if (e.DeformPercent !== void 0) {
      const i = this.generateMorphTrack(e);
      i !== void 0 && t.push(i);
    }
    return t;
  }
  generateVectorTrack(e, t, n, r) {
    const i = this.getTimesForAllAxes(t), s = this.getKeyframeTrackValues(i, t, n);
    return new mt(e + "." + r, i, s);
  }
  generateRotationTrack(e, t, n, r, i, s) {
    let a, l;
    if (t.x !== void 0 || t.y !== void 0 || t.z !== void 0) {
      const h = this.getTimesForAllAxes(t);
      if (h.length > 0) {
        const m = s || [0, 0, 0], d = this.synchronizeCurve(t.x, h, m[0]), g = this.synchronizeCurve(t.y, h, m[1]), w = this.synchronizeCurve(t.z, h, m[2]), T = this.interpolateRotations(d, g, w, i);
        a = T[0], l = T[1];
      }
    }
    const p = ee(0);
    n !== void 0 && (n = n.map(M.degToRad), n.push(p), n = new H().fromArray(n), n = new G().setFromEuler(n)), r !== void 0 && (r = r.map(M.degToRad), r.push(p), r = new H().fromArray(r), r = new G().setFromEuler(r).invert());
    const u = new G(), o = new H(), f = [];
    if (!(!l || !a)) {
      for (let h = 0; h < l.length; h += 3)
        o.set(l[h], l[h + 1], l[h + 2], i), u.setFromEuler(o), n !== void 0 && u.premultiply(n), r !== void 0 && u.multiply(r), h > 2 && new G().fromArray(
          f,
          (h - 3) / 3 * 4
        ).dot(u) < 0 && u.set(-u.x, -u.y, -u.z, -u.w), u.toArray(f, h / 3 * 4);
      return new dt(e + ".quaternion", a, f);
    }
  }
  generateMorphTrack(e) {
    const t = e.DeformPercent.curves.morph, n = t.values.map(function(i) {
      return i / 100;
    }), r = D.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];
    return new gt(e.modelName + ".morphTargetInfluences[" + r + "]", t.times, n);
  }
  // For all animated objects, times are defined separately for each axis
  // Here we'll combine the times into one sorted array without duplicates
  getTimesForAllAxes(e) {
    let t = [];
    if (e.x !== void 0 && (t = t.concat(e.x.times)), e.y !== void 0 && (t = t.concat(e.y.times)), e.z !== void 0 && (t = t.concat(e.z.times)), t = t.sort(function(n, r) {
      return n - r;
    }), t.length > 1) {
      let n = 1, r = t[0];
      for (let i = 1; i < t.length; i++) {
        const s = t[i];
        s !== r && (t[n] = s, r = s, n++);
      }
      t = t.slice(0, n);
    }
    return t;
  }
  getKeyframeTrackValues(e, t, n) {
    const r = n, i = [];
    let s = -1, a = -1, l = -1;
    return e.forEach(function(p) {
      if (t.x && (s = t.x.times.indexOf(p)), t.y && (a = t.y.times.indexOf(p)), t.z && (l = t.z.times.indexOf(p)), s !== -1) {
        const u = t.x.values[s];
        i.push(u), r[0] = u;
      } else
        i.push(r[0]);
      if (a !== -1) {
        const u = t.y.values[a];
        i.push(u), r[1] = u;
      } else
        i.push(r[1]);
      if (l !== -1) {
        const u = t.z.values[l];
        i.push(u), r[2] = u;
      } else
        i.push(r[2]);
    }), i;
  }
  // Synchronize a curve to a target time array using linear interpolation.
  // If the curve is undefined (axis not animated), returns constant values from initialValue.
  synchronizeCurve(e, t, n) {
    if (e === void 0)
      return { times: t, values: t.map(() => n) };
    if (e.times.length === t.length) return e;
    const r = [];
    for (let i = 0; i < t.length; i++)
      r.push(this.sampleCurveValue(e, t[i], n));
    return { times: t, values: r };
  }
  // Sample a single value from a curve at a given time using linear interpolation
  sampleCurveValue(e, t, n) {
    const r = e.times, i = e.values;
    if (t <= r[0]) return i[0];
    if (t >= r[r.length - 1]) return i[i.length - 1];
    for (let s = 0; s < r.length - 1; s++)
      if (t >= r[s] && t <= r[s + 1]) {
        if (r[s] === t) return i[s];
        const a = (t - r[s]) / (r[s + 1] - r[s]);
        return i[s] * (1 - a) + i[s + 1] * a;
      }
    return n;
  }
  // Rotations are defined as Euler angles which can have values  of any size
  // These will be converted to quaternions which don't support values greater than
  // PI, so we'll interpolate large rotations
  interpolateRotations(e, t, n, r) {
    const i = [], s = [];
    i.push(e.times[0]), s.push(M.degToRad(e.values[0])), s.push(M.degToRad(t.values[0])), s.push(M.degToRad(n.values[0]));
    for (let a = 1; a < e.values.length; a++) {
      const l = [
        e.values[a - 1],
        t.values[a - 1],
        n.values[a - 1]
      ];
      if (isNaN(l[0]) || isNaN(l[1]) || isNaN(l[2]))
        continue;
      const p = l.map(M.degToRad), u = [
        e.values[a],
        t.values[a],
        n.values[a]
      ];
      if (isNaN(u[0]) || isNaN(u[1]) || isNaN(u[2]))
        continue;
      const o = u.map(M.degToRad), f = [
        u[0] - l[0],
        u[1] - l[1],
        u[2] - l[2]
      ], h = [
        Math.abs(f[0]),
        Math.abs(f[1]),
        Math.abs(f[2])
      ];
      if (h[0] >= 180 || h[1] >= 180 || h[2] >= 180) {
        const d = Math.max(...h) / 180, g = new H(...p, r), w = new H(...o, r), T = new G().setFromEuler(g), y = new G().setFromEuler(w);
        T.dot(y) < 0 && y.set(-y.x, -y.y, -y.z, -y.w);
        const P = e.times[a - 1], E = e.times[a] - P, S = new G(), C = new H();
        for (let k = 0; k < 1; k += 1 / d)
          S.copy(T.clone().slerp(y.clone(), k)), i.push(P + k * E), C.setFromQuaternion(S, r), s.push(C.x), s.push(C.y), s.push(C.z);
      } else
        i.push(e.times[a]), s.push(M.degToRad(e.values[a])), s.push(M.degToRad(t.values[a])), s.push(M.degToRad(n.values[a]));
    }
    return [i, s];
  }
}
class Ht {
  getPrevNode() {
    return this.nodeStack[this.currentIndent - 2];
  }
  getCurrentNode() {
    return this.nodeStack[this.currentIndent - 1];
  }
  getCurrentProp() {
    return this.currentProp;
  }
  pushStack(e) {
    this.nodeStack.push(e), this.currentIndent += 1;
  }
  popStack() {
    this.nodeStack.pop(), this.currentIndent -= 1;
  }
  setCurrentProp(e, t) {
    this.currentProp = e, this.currentPropName = t;
  }
  parse(e) {
    this.currentIndent = 0, this.allNodes = new Xe(), this.nodeStack = [], this.currentProp = [], this.currentPropName = "";
    const t = this, n = e.split(/[\r\n]+/);
    return n.forEach(function(r, i) {
      const s = r.match(/^[\s\t]*;/), a = r.match(/^[\s\t]*$/);
      if (s || a) return;
      const l = r.match("^\\t{" + t.currentIndent + "}(\\w+):(.*){", ""), p = r.match("^\\t{" + t.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)"), u = r.match("^\\t{" + (t.currentIndent - 1) + "}}");
      l ? t.parseNodeBegin(r, l) : p ? t.parseNodeProperty(r, p, n[++i]) : u ? t.popStack() : r.match(/^[^\s\t}]/) && t.parseNodePropertyContinued(r);
    }), this.allNodes;
  }
  parseNodeBegin(e, t) {
    const n = t[1].trim().replace(/^"/, "").replace(/"$/, ""), r = t[2].split(",").map(function(l) {
      return l.trim().replace(/^"/, "").replace(/"$/, "");
    }), i = { name: n }, s = this.parseNodeAttr(r), a = this.getCurrentNode();
    this.currentIndent === 0 ? this.allNodes.add(n, i) : n in a ? (n === "PoseNode" ? a.PoseNode.push(i) : a[n].id !== void 0 && (a[n] = {}, a[n][a[n].id] = a[n]), s.id !== "" && (a[n][s.id] = i)) : typeof s.id == "number" ? (a[n] = {}, a[n][s.id] = i) : n !== "Properties70" && (n === "PoseNode" ? a[n] = [i] : a[n] = i), typeof s.id == "number" && (i.id = s.id), s.name !== "" && (i.attrName = s.name), s.type !== "" && (i.attrType = s.type), this.pushStack(i);
  }
  parseNodeAttr(e) {
    let t = e[0];
    e[0] !== "" && (t = parseInt(e[0]), isNaN(t) && (t = e[0]));
    let n = "", r = "";
    return e.length > 1 && (n = e[1].replace(/^(\w+)::/, ""), r = e[2]), { id: t, name: n, type: r };
  }
  parseNodeProperty(e, t, n) {
    let r = t[1].replace(/^"/, "").replace(/"$/, "").trim(), i = t[2].replace(/^"/, "").replace(/"$/, "").trim();
    r === "Content" && i === "," && (i = n.replace(/"/g, "").replace(/,$/, "").trim());
    const s = this.getCurrentNode();
    if (s.name === "Properties70") {
      this.parseNodeSpecialProperty(e, r, i);
      return;
    }
    if (r === "C") {
      const l = i.split(",").slice(1), p = parseInt(l[0]), u = parseInt(l[1]);
      let o = i.split(",").slice(3);
      o = o.map(function(f) {
        return f.trim().replace(/^"/, "");
      }), r = "connections", i = [p, u], qt(i, o), s[r] === void 0 && (s[r] = []);
    }
    r === "Node" && (s.id = i), r in s && Array.isArray(s[r]) ? s[r].push(i) : r !== "a" ? s[r] = i : s.a = i, this.setCurrentProp(s, r), r === "a" && i.slice(-1) !== "," && (s.a = de(i));
  }
  parseNodePropertyContinued(e) {
    const t = this.getCurrentNode();
    t.a += e, e.slice(-1) !== "," && (t.a = de(t.a));
  }
  // parse "Property70"
  parseNodeSpecialProperty(e, t, n) {
    const r = n.split('",').map(function(u) {
      return u.trim().replace(/^\"/, "").replace(/\s/, "_");
    }), i = r[0], s = r[1], a = r[2], l = r[3];
    let p = r[4];
    switch (s) {
      case "int":
      case "enum":
      case "bool":
      case "ULongLong":
      case "double":
      case "Number":
      case "FieldOfView":
        p = parseFloat(p);
        break;
      case "Color":
      case "ColorRGB":
      case "Vector3D":
      case "Lcl_Translation":
      case "Lcl_Rotation":
      case "Lcl_Scaling":
        p = de(p);
        break;
    }
    this.getPrevNode()[i] = {
      type: s,
      type2: a,
      flag: l,
      value: p
    }, this.setCurrentProp(this.getPrevNode(), i);
  }
}
class Kt {
  parse(e) {
    const t = new Ce(e);
    t.skip(23);
    const n = t.getUint32();
    if (n < 6400)
      throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + n);
    const r = new Xe();
    for (; !this.endOfContent(t); ) {
      const i = this.parseNode(t, n);
      i !== null && r.add(i.name, i);
    }
    return r;
  }
  // Check if reader has reached the end of content.
  endOfContent(e) {
    return e.size() % 16 === 0 ? (e.getOffset() + 160 + 16 & -16) >= e.size() : e.getOffset() + 160 + 16 >= e.size();
  }
  // recursively parse nodes until the end of the file is reached
  parseNode(e, t) {
    const n = {}, r = t >= 7500 ? e.getUint64() : e.getUint32(), i = t >= 7500 ? e.getUint64() : e.getUint32();
    t >= 7500 ? e.getUint64() : e.getUint32();
    const s = e.getUint8(), a = e.getString(s);
    if (r === 0) return null;
    const l = [];
    for (let f = 0; f < i; f++)
      l.push(this.parseProperty(e));
    const p = l.length > 0 ? l[0] : "", u = l.length > 1 ? l[1] : "", o = l.length > 2 ? l[2] : "";
    for (n.singleProperty = i === 1 && e.getOffset() === r; r > e.getOffset(); ) {
      const f = this.parseNode(e, t);
      f !== null && this.parseSubNode(a, n, f);
    }
    return n.propertyList = l, typeof p == "number" && (n.id = p), u !== "" && (n.attrName = u), o !== "" && (n.attrType = o), a !== "" && (n.name = a), n;
  }
  parseSubNode(e, t, n) {
    if (n.singleProperty === !0) {
      const r = n.propertyList[0];
      Array.isArray(r) ? (t[n.name] = n, n.a = r) : t[n.name] = r;
    } else if (e === "Connections" && n.name === "C") {
      const r = [];
      n.propertyList.forEach(function(i, s) {
        s !== 0 && r.push(i);
      }), t.connections === void 0 && (t.connections = []), t.connections.push(r);
    } else if (n.name === "Properties70")
      Object.keys(n).forEach(function(i) {
        t[i] = n[i];
      });
    else if (e === "Properties70" && n.name === "P") {
      let r = n.propertyList[0], i = n.propertyList[1];
      const s = n.propertyList[2], a = n.propertyList[3];
      let l;
      r.indexOf("Lcl ") === 0 && (r = r.replace("Lcl ", "Lcl_")), i.indexOf("Lcl ") === 0 && (i = i.replace("Lcl ", "Lcl_")), i === "Color" || i === "ColorRGB" || i === "Vector" || i === "Vector3D" || i.indexOf("Lcl_") === 0 ? l = [
        n.propertyList[4],
        n.propertyList[5],
        n.propertyList[6]
      ] : l = n.propertyList[4], t[r] = {
        type: i,
        type2: s,
        flag: a,
        value: l
      };
    } else t[n.name] === void 0 ? typeof n.id == "number" ? (t[n.name] = {}, t[n.name][n.id] = n) : t[n.name] = n : n.name === "PoseNode" ? (Array.isArray(t[n.name]) || (t[n.name] = [t[n.name]]), t[n.name].push(n)) : t[n.name][n.id] === void 0 && (t[n.name][n.id] = n);
  }
  parseProperty(e) {
    const t = e.getString(1);
    let n;
    switch (t) {
      case "C":
        return e.getBoolean();
      case "D":
        return e.getFloat64();
      case "F":
        return e.getFloat32();
      case "I":
        return e.getInt32();
      case "L":
        return e.getInt64();
      case "R":
        return n = e.getUint32(), e.getArrayBuffer(n);
      case "S":
        return n = e.getUint32(), e.getString(n);
      case "Y":
        return e.getInt16();
      case "b":
      case "c":
      case "d":
      case "f":
      case "i":
      case "l":
        const r = e.getUint32(), i = e.getUint32(), s = e.getUint32();
        if (i === 0)
          switch (t) {
            case "b":
            case "c":
              return e.getBooleanArray(r);
            case "d":
              return e.getFloat64Array(r);
            case "f":
              return e.getFloat32Array(r);
            case "i":
              return e.getInt32Array(r);
            case "l":
              return e.getInt64Array(r);
          }
        const a = Mt(new Uint8Array(e.getArrayBuffer(s))), l = new Ce(a.buffer);
        switch (t) {
          case "b":
          case "c":
            return l.getBooleanArray(r);
          case "d":
            return l.getFloat64Array(r);
          case "f":
            return l.getFloat32Array(r);
          case "i":
            return l.getInt32Array(r);
          case "l":
            return l.getInt64Array(r);
        }
        break;
      // cannot happen but is required by the DeepScan
      default:
        throw new Error("THREE.FBXLoader: Unknown property type " + t);
    }
  }
}
class Ce {
  constructor(e, t) {
    this.dv = new DataView(e), this.offset = 0, this.littleEndian = t !== void 0 ? t : !0, this._textDecoder = new TextDecoder();
  }
  getOffset() {
    return this.offset;
  }
  size() {
    return this.dv.buffer.byteLength;
  }
  skip(e) {
    this.offset += e;
  }
  // seems like true/false representation depends on exporter.
  // true: 1 or 'Y'(=0x59), false: 0 or 'T'(=0x54)
  // then sees LSB.
  getBoolean() {
    return (this.getUint8() & 1) === 1;
  }
  getBooleanArray(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getBoolean());
    return t;
  }
  getUint8() {
    const e = this.dv.getUint8(this.offset);
    return this.offset += 1, e;
  }
  getInt16() {
    const e = this.dv.getInt16(this.offset, this.littleEndian);
    return this.offset += 2, e;
  }
  getInt32() {
    const e = this.dv.getInt32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  getInt32Array(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getInt32());
    return t;
  }
  getUint32() {
    const e = this.dv.getUint32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  // JavaScript doesn't support 64-bit integer so calculate this here
  // 1 << 32 will return 1 so using multiply operation instead here.
  // There's a possibility that this method returns wrong value if the value
  // is out of the range between Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER.
  // TODO: safely handle 64-bit integer
  getInt64() {
    let e, t;
    return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), t & 2147483648 ? (t = ~t & 4294967295, e = ~e & 4294967295, e === 4294967295 && (t = t + 1 & 4294967295), e = e + 1 & 4294967295, -(t * 4294967296 + e)) : t * 4294967296 + e;
  }
  getInt64Array(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getInt64());
    return t;
  }
  // Note: see getInt64() comment
  getUint64() {
    let e, t;
    return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), t * 4294967296 + e;
  }
  getFloat32() {
    const e = this.dv.getFloat32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  getFloat32Array(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getFloat32());
    return t;
  }
  getFloat64() {
    const e = this.dv.getFloat64(this.offset, this.littleEndian);
    return this.offset += 8, e;
  }
  getFloat64Array(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getFloat64());
    return t;
  }
  getArrayBuffer(e) {
    const t = this.dv.buffer.slice(this.offset, this.offset + e);
    return this.offset += e, t;
  }
  getString(e) {
    const t = this.offset;
    let n = new Uint8Array(this.dv.buffer, t, e);
    this.skip(e);
    const r = n.indexOf(0);
    return r >= 0 && (n = new Uint8Array(this.dv.buffer, t, r)), this._textDecoder.decode(n);
  }
}
class Xe {
  add(e, t) {
    this[e] = t;
  }
}
function Wt(c) {
  const e = "Kaydara FBX Binary  \0";
  return c.byteLength >= e.length && e === je(c, 0, e.length);
}
function Nt(c) {
  const e = ["K", "a", "y", "d", "a", "r", "a", "\\", "F", "B", "X", "\\", "B", "i", "n", "a", "r", "y", "\\", "\\"];
  let t = 0;
  function n(r) {
    const i = c[r - 1];
    return c = c.slice(t + r), t++, i;
  }
  for (let r = 0; r < e.length; ++r)
    if (n(1) === e[r])
      return !1;
  return !0;
}
function Le(c) {
  const e = /FBXVersion: (\d+)/, t = c.match(e);
  if (t)
    return parseInt(t[1]);
  throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.");
}
function Yt(c) {
  return c / 46186158e3;
}
const Zt = [];
function se(c, e, t, n) {
  let r;
  switch (n.mappingType) {
    case "ByPolygonVertex":
      r = c;
      break;
    case "ByPolygon":
      r = e;
      break;
    case "ByVertice":
      r = t;
      break;
    case "AllSame":
      r = n.indices[0];
      break;
    default:
      console.warn("THREE.FBXLoader: unknown attribute mapping type " + n.mappingType);
  }
  n.referenceType === "IndexToDirect" && (r = n.indices[r]);
  const i = r * n.dataSize, s = i + n.dataSize;
  return Qt(Zt, n.buffer, i, s);
}
const me = new H(), Z = new R();
function Ge(c) {
  const e = new F(), t = new F(), n = new F(), r = new F(), i = new F(), s = new F(), a = new F(), l = new F(), p = new F(), u = new F(), o = new F(), f = new F(), h = c.inheritType ? c.inheritType : 0;
  c.translation && e.setPosition(Z.fromArray(c.translation));
  const m = ee(0);
  if (c.preRotation) {
    const x = c.preRotation.map(M.degToRad);
    x.push(m), t.makeRotationFromEuler(me.fromArray(x));
  }
  if (c.rotation) {
    const x = c.rotation.map(M.degToRad);
    x.push(c.eulerOrder || m), n.makeRotationFromEuler(me.fromArray(x));
  }
  if (c.postRotation) {
    const x = c.postRotation.map(M.degToRad);
    x.push(m), r.makeRotationFromEuler(me.fromArray(x)), r.invert();
  }
  c.scale && i.scale(Z.fromArray(c.scale)), c.scalingOffset && a.setPosition(Z.fromArray(c.scalingOffset)), c.scalingPivot && s.setPosition(Z.fromArray(c.scalingPivot)), c.rotationOffset && l.setPosition(Z.fromArray(c.rotationOffset)), c.rotationPivot && p.setPosition(Z.fromArray(c.rotationPivot)), c.parentMatrixWorld && (o.copy(c.parentMatrix), u.copy(c.parentMatrixWorld));
  const d = t.clone().multiply(n).multiply(r), g = new F();
  g.extractRotation(u);
  const w = new F();
  w.copyPosition(u);
  const T = w.clone().invert().multiply(u), y = g.clone().invert().multiply(T), P = i, E = new F();
  if (h === 0)
    E.copy(g).multiply(d).multiply(y).multiply(P);
  else if (h === 1)
    E.copy(g).multiply(y).multiply(d).multiply(P);
  else {
    const K = new F().scale(new R().setFromMatrixScale(o)).clone().invert(), oe = y.clone().multiply(K);
    E.copy(g).multiply(d).multiply(oe).multiply(P);
  }
  const S = p.clone().invert(), C = s.clone().invert();
  let k = e.clone().multiply(l).multiply(p).multiply(t).multiply(n).multiply(r).multiply(S).multiply(a).multiply(s).multiply(i).multiply(C);
  const V = new F().copyPosition(k), U = u.clone().multiply(V);
  return f.copyPosition(U), k = f.clone().multiply(E), k.premultiply(u.invert()), k;
}
function ee(c) {
  c = c || 0;
  const e = [
    "ZYX",
    // -> XYZ extrinsic
    "YZX",
    // -> XZY extrinsic
    "XZY",
    // -> YZX extrinsic
    "ZXY",
    // -> YXZ extrinsic
    "YXZ",
    // -> ZXY extrinsic
    "XYZ"
    // -> ZYX extrinsic
    //'SphericXYZ', // not possible to support
  ];
  return c === 6 ? (console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."), e[0]) : e[c];
}
function de(c) {
  return c.split(",").map(function(t) {
    return parseFloat(t);
  });
}
function je(c, e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = c.byteLength), new TextDecoder().decode(new Uint8Array(c, e, t));
}
function qt(c, e) {
  for (let t = 0, n = c.length, r = e.length; t < r; t++, n++)
    c[n] = e[t];
}
function Qt(c, e, t, n) {
  for (let r = t, i = 0; r < n; r++, i++)
    c[i] = e[r];
  return c;
}
export {
  Jt as FBXLoader
};
