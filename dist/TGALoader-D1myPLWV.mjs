import { Z as q, _ as J } from "./index-ChGdgC32.mjs";
class W extends q {
  /**
   * Constructs a new TGA loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(u) {
    super(u);
  }
  /**
   * Parses the given TGA texture data.
   *
   * @param {ArrayBuffer} buffer - The raw texture data.
   * @return {DataTextureLoader~TexData} An object representing the parsed texture data.
   */
  parse(u) {
    function N(e) {
      switch (e.image_type) {
        // check indexed type
        case y:
        case b:
          if (e.colormap_length > 256 || e.colormap_size !== 24 || e.colormap_type !== 1)
            throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");
          break;
        // check colormap type
        case I:
        case R:
        case k:
        case L:
          if (e.colormap_type)
            throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");
          break;
        // What the need of a file without data ?
        case M:
          throw new Error("THREE.TGALoader: No data.");
        // Invalid type ?
        default:
          throw new Error("THREE.TGALoader: Invalid type " + e.image_type);
      }
      if (e.width <= 0 || e.height <= 0)
        throw new Error("THREE.TGALoader: Invalid image size.");
      if (e.pixel_size !== 8 && e.pixel_size !== 16 && e.pixel_size !== 24 && e.pixel_size !== 32)
        throw new Error("THREE.TGALoader: Invalid pixel size " + e.pixel_size);
    }
    function Y(e, G, _, l, a) {
      let i, c;
      const n = _.pixel_size >> 3, s = _.width * _.height * n;
      if (G && (c = a.subarray(l, l += _.colormap_length * (_.colormap_size >> 3))), e) {
        i = new Uint8Array(s);
        let r, t, o, p = 0;
        const x = new Uint8Array(n);
        for (; p < s; )
          if (r = a[l++], t = (r & 127) + 1, r & 128) {
            for (o = 0; o < n; ++o)
              x[o] = a[l++];
            for (o = 0; o < t; ++o)
              i.set(x, p + o * n);
            p += n * t;
          } else {
            for (t *= n, o = 0; o < t; ++o)
              i[p + o] = a[l++];
            p += t;
          }
      } else
        i = a.subarray(
          l,
          l += G ? _.width * _.height : s
        );
      return {
        pixel_data: i,
        palettes: c
      };
    }
    function P(e, G, _, l, a, i, c, n, s) {
      const r = s;
      let t, o = 0, p, x;
      const f = E.width;
      for (x = G; x !== l; x += _)
        for (p = a; p !== c; p += i, o++)
          t = n[o], e[(p + f * x) * 4 + 3] = 255, e[(p + f * x) * 4 + 2] = r[t * 3 + 0], e[(p + f * x) * 4 + 1] = r[t * 3 + 1], e[(p + f * x) * 4 + 0] = r[t * 3 + 2];
      return e;
    }
    function O(e, G, _, l, a, i, c, n) {
      let s, r = 0, t, o;
      const p = E.width;
      for (o = G; o !== l; o += _)
        for (t = a; t !== c; t += i, r += 2)
          s = n[r + 0] + (n[r + 1] << 8), e[(t + p * o) * 4 + 0] = (s & 31744) >> 7, e[(t + p * o) * 4 + 1] = (s & 992) >> 2, e[(t + p * o) * 4 + 2] = (s & 31) << 3, e[(t + p * o) * 4 + 3] = s & 32768 ? 0 : 255;
      return e;
    }
    function F(e, G, _, l, a, i, c, n) {
      let s = 0, r, t;
      const o = E.width;
      for (t = G; t !== l; t += _)
        for (r = a; r !== c; r += i, s += 3)
          e[(r + o * t) * 4 + 3] = 255, e[(r + o * t) * 4 + 2] = n[s + 0], e[(r + o * t) * 4 + 1] = n[s + 1], e[(r + o * t) * 4 + 0] = n[s + 2];
      return e;
    }
    function U(e, G, _, l, a, i, c, n) {
      let s = 0, r, t;
      const o = E.width;
      for (t = G; t !== l; t += _)
        for (r = a; r !== c; r += i, s += 4)
          e[(r + o * t) * 4 + 2] = n[s + 0], e[(r + o * t) * 4 + 1] = n[s + 1], e[(r + o * t) * 4 + 0] = n[s + 2], e[(r + o * t) * 4 + 3] = n[s + 3];
      return e;
    }
    function v(e, G, _, l, a, i, c, n) {
      let s, r = 0, t, o;
      const p = E.width;
      for (o = G; o !== l; o += _)
        for (t = a; t !== c; t += i, r++)
          s = n[r], e[(t + p * o) * 4 + 0] = s, e[(t + p * o) * 4 + 1] = s, e[(t + p * o) * 4 + 2] = s, e[(t + p * o) * 4 + 3] = 255;
      return e;
    }
    function B(e, G, _, l, a, i, c, n) {
      let s = 0, r, t;
      const o = E.width;
      for (t = G; t !== l; t += _)
        for (r = a; r !== c; r += i, s += 2)
          e[(r + o * t) * 4 + 0] = n[s + 0], e[(r + o * t) * 4 + 1] = n[s + 0], e[(r + o * t) * 4 + 2] = n[s + 0], e[(r + o * t) * 4 + 3] = n[s + 1];
      return e;
    }
    function g(e, G, _, l, a) {
      let i, c, n, s, r, t;
      switch ((E.flags & C) >> S) {
        default:
        case Z:
          i = 0, n = 1, r = G, c = 0, s = 1, t = _;
          break;
        case X:
          i = 0, n = 1, r = G, c = _ - 1, s = -1, t = -1;
          break;
        case j:
          i = G - 1, n = -1, r = -1, c = 0, s = 1, t = _;
          break;
        case K:
          i = G - 1, n = -1, r = -1, c = _ - 1, s = -1, t = -1;
          break;
      }
      if (A)
        switch (E.pixel_size) {
          case 8:
            v(e, c, s, t, i, n, r, l);
            break;
          case 16:
            B(e, c, s, t, i, n, r, l);
            break;
          default:
            throw new Error("THREE.TGALoader: Format not supported.");
        }
      else
        switch (E.pixel_size) {
          case 8:
            P(e, c, s, t, i, n, r, l, a);
            break;
          case 16:
            O(e, c, s, t, i, n, r, l);
            break;
          case 24:
            F(e, c, s, t, i, n, r, l);
            break;
          case 32:
            U(e, c, s, t, i, n, r, l);
            break;
          default:
            throw new Error("THREE.TGALoader: Format not supported.");
        }
      return e;
    }
    const M = 0, y = 1, I = 2, R = 3, b = 9, k = 10, L = 11, C = 48, S = 4, X = 0, K = 1, Z = 2, j = 3;
    if (u.length < 19) throw new Error("THREE.TGALoader: Not enough data to contain header.");
    let w = 0;
    const T = new Uint8Array(u), E = {
      id_length: T[w++],
      colormap_type: T[w++],
      image_type: T[w++],
      colormap_index: T[w++] | T[w++] << 8,
      colormap_length: T[w++] | T[w++] << 8,
      colormap_size: T[w++],
      origin: [
        T[w++] | T[w++] << 8,
        T[w++] | T[w++] << 8
      ],
      width: T[w++] | T[w++] << 8,
      height: T[w++] | T[w++] << 8,
      pixel_size: T[w++],
      flags: T[w++]
    };
    if (N(E), E.id_length + w > u.length)
      throw new Error("THREE.TGALoader: No data.");
    w += E.id_length;
    let h = !1, d = !1, A = !1;
    switch (E.image_type) {
      case b:
        h = !0, d = !0;
        break;
      case y:
        d = !0;
        break;
      case k:
        h = !0;
        break;
      case I:
        break;
      case L:
        h = !0, A = !0;
        break;
      case R:
        A = !0;
        break;
    }
    const z = new Uint8Array(E.width * E.height * 4), H = Y(h, d, E, w, T);
    return g(z, E.width, E.height, H.pixel_data, H.palettes), {
      data: z,
      width: E.width,
      height: E.height,
      flipY: !0,
      generateMipmaps: !0,
      minFilter: J
    };
  }
}
export {
  W as TGALoader
};
