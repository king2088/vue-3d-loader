import { C as Ct, R as G, a as _t, b as it, c as mt, d as dt, e as Dt, f as pt } from "./index-CGYvzX_H.mjs";
class xt extends Ct {
  /**
   * Constructs a new DDS loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(m) {
    super(m);
  }
  /**
   * Parses the given S3TC texture data.
   *
   * @param {ArrayBuffer} buffer - The raw texture data.
   * @param {boolean} loadMipmaps - Whether to load mipmaps or not.
   * @return {CompressedTextureLoader~TexData} An object representing the parsed texture data.
   */
  parse(m, P) {
    const t = { mipmaps: [], width: 0, height: 0, format: null, mipmapCount: 1, isCubemap: !1 }, g = 542327876, b = 131072, y = 512, X = 1024, O = 2048, k = 4096, w = 8192, L = 16384, H = 32768, N = 95, V = 96;
    function D(e) {
      return e.charCodeAt(0) + (e.charCodeAt(1) << 8) + (e.charCodeAt(2) << 16) + (e.charCodeAt(3) << 24);
    }
    function Y(e) {
      return String.fromCharCode(
        e & 255,
        e >> 8 & 255,
        e >> 16 & 255,
        e >> 24 & 255
      );
    }
    function Z(e, a, n, i) {
      const C = n * i * 4, c = new Uint8Array(e, a, C), f = new Uint8Array(C);
      let r = 0, s = 0;
      for (let A = 0; A < i; A++)
        for (let l = 0; l < n; l++) {
          const x = c[s];
          s++;
          const u = c[s];
          s++;
          const T = c[s];
          s++;
          const ft = c[s];
          s++, f[r] = T, r++, f[r] = u, r++, f[r] = x, r++, f[r] = ft, r++;
        }
      return f;
    }
    function z(e, a, n, i) {
      const C = n * i * 3, c = new Uint8Array(e, a, C), f = new Uint8Array(n * i * 4);
      let r = 0, s = 0;
      for (let A = 0; A < i; A++)
        for (let l = 0; l < n; l++) {
          const x = c[s];
          s++;
          const u = c[s];
          s++;
          const T = c[s];
          s++, f[r] = T, r++, f[r] = u, r++, f[r] = x, r++, f[r] = 255, r++;
        }
      return f;
    }
    const j = D("DXT1"), q = D("DXT3"), J = D("DXT5"), K = D("ETC1"), Q = D("DX10"), B = 31, S = 5, W = 0, $ = 1, v = 2, tt = 3, ot = 4, et = 7, rt = 21, h = 22, E = 23, R = 24, M = 25, st = 26, at = 28, nt = 0, o = new Int32Array(m, 0, B);
    if (o[W] !== g)
      return console.error("THREE.DDSLoader.parse: Invalid magic number in DDS header."), t;
    let _;
    const U = o[rt];
    let I = !1, F = !1, p = o[$] + 4;
    switch (U) {
      case j:
        _ = 8, t.format = pt;
        break;
      case q:
        _ = 16, t.format = Dt;
        break;
      case J:
        _ = 16, t.format = dt;
        break;
      case K:
        _ = 8, t.format = mt;
        break;
      case Q:
        p += S * 4;
        const a = new Int32Array(m, (B + 1) * 4, S)[nt];
        switch (a) {
          case V: {
            _ = 16, t.format = it;
            break;
          }
          case N: {
            _ = 16, t.format = _t;
            break;
          }
          default:
            return console.error("THREE.DDSLoader.parse: Unsupported DXGI_FORMAT code ", a), t;
        }
        break;
      default:
        if (o[h] === 32 && o[E] & 16711680 && o[R] & 65280 && o[M] & 255 && o[st] & 4278190080)
          I = !0, _ = 64, t.format = G;
        else if (o[h] === 24 && o[E] & 16711680 && o[R] & 65280 && o[M] & 255)
          F = !0, _ = 64, t.format = G;
        else
          return console.error("THREE.DDSLoader.parse: Unsupported FourCC code ", Y(U)), t;
    }
    t.mipmapCount = 1, o[v] & b && P !== !1 && (t.mipmapCount = Math.max(1, o[et]));
    const d = o[at];
    if (t.isCubemap = !!(d & y), t.isCubemap && (!(d & X) || !(d & O) || !(d & k) || !(d & w) || !(d & L) || !(d & H)))
      return console.error("THREE.DDSLoader.parse: Incomplete cubemap faces"), t;
    t.width = o[ot], t.height = o[tt];
    const ct = t.isCubemap ? 6 : 1;
    for (let e = 0; e < ct; e++) {
      let a = t.width, n = t.height;
      for (let i = 0; i < t.mipmapCount; i++) {
        let C, c;
        I ? (C = Z(m, p, a, n), c = C.length) : F ? (C = z(m, p, a, n), c = a * n * 3) : (c = Math.max(4, a) / 4 * Math.max(4, n) / 4 * _, C = new Uint8Array(m, p, c));
        const f = { data: C, width: a, height: n };
        t.mipmaps.push(f), p += c, a = Math.max(a >> 1, 1), n = Math.max(n >> 1, 1);
      }
    }
    return t;
  }
}
export {
  xt as DDSLoader
};
