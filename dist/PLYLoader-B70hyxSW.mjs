import { L as G, W as O, B as q, g as W, S as L, u as Y, az as $, aA as J, a5 as K, aB as Q, aC as X, aD as Z, ah as ee } from "./index-CtpvIlZc.mjs";
const h = new W();
class re extends G {
  /**
   * Constructs a new PLY loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(m) {
    super(m), this.propertyNameMapping = {}, this.customPropertyMapping = {};
  }
  /**
   * Starts loading from the given URL and passes the loaded PLY asset
   * to the `onLoad()` callback.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function(BufferGeometry)} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Executed while the loading is in progress.
   * @param {onErrorCallback} onError - Executed when errors occur.
   */
  load(m, C, x, z) {
    const B = this, f = new O(this.manager);
    f.setPath(this.path), f.setResponseType("arraybuffer"), f.setRequestHeader(this.requestHeader), f.setWithCredentials(this.withCredentials), f.load(m, function(P) {
      try {
        C(B.parse(P));
      } catch (v) {
        z ? z(v) : console.error(v), B.manager.itemError(m);
      }
    }, x, z);
  }
  /**
   * Sets a property name mapping that maps default property names
   * to custom ones. For example, the following maps the properties
   * “diffuse_(red|green|blue)” in the file to standard color names.
   *
   * ```js
   * loader.setPropertyNameMapping( {
   * 	diffuse_red: 'red',
   * 	diffuse_green: 'green',
   * 	diffuse_blue: 'blue'
   * } );
   * ```
   *
   * @param {Object} mapping - The mapping dictionary.
   */
  setPropertyNameMapping(m) {
    this.propertyNameMapping = m;
  }
  /**
   * Custom properties outside of the defaults for position, uv, normal
   * and color attributes can be added using the setCustomPropertyNameMapping method.
   * For example, the following maps the element properties “custom_property_a”
   * and “custom_property_b” to an attribute “customAttribute” with an item size of 2.
   * Attribute item sizes are set from the number of element properties in the property array.
   *
   * ```js
   * loader.setCustomPropertyNameMapping( {
   *	customAttribute: ['custom_property_a', 'custom_property_b'],
   * } );
   * ```
   * @param {Object} mapping - The mapping dictionary.
   */
  setCustomPropertyNameMapping(m) {
    this.customPropertyMapping = m;
  }
  /**
   * Parses the given PLY data and returns the resulting geometry.
   *
   * @param {ArrayBuffer} data - The raw PLY data as an array buffer.
   * @return {BufferGeometry} The parsed geometry.
   */
  parse(m) {
    function C(e, s = 0) {
      const n = /^ply([\s\S]*)end_header(\r\n|\r|\n)/;
      let c = "";
      const t = n.exec(e);
      t !== null && (c = t[1]);
      const o = {
        comments: [],
        elements: [],
        headerLength: s,
        objInfo: ""
      }, a = c.split(/\r\n|\r|\n/);
      let r;
      function u(i, p) {
        const l = { type: i[0] };
        return l.type === "list" ? (l.name = i[3], l.countType = i[1], l.itemType = i[2]) : l.name = i[1], l.name in p && (l.name = p[l.name]), l;
      }
      for (let i = 0; i < a.length; i++) {
        let p = a[i];
        if (p = p.trim(), p === "") continue;
        const l = p.split(/\s+/), g = l.shift();
        switch (p = l.join(" "), g) {
          case "format":
            o.format = l[0], o.version = l[1];
            break;
          case "comment":
            o.comments.push(p);
            break;
          case "element":
            r !== void 0 && o.elements.push(r), r = {}, r.name = l[0], r.count = parseInt(l[1]), r.properties = [];
            break;
          case "property":
            r.properties.push(u(l, y.propertyNameMapping));
            break;
          case "obj_info":
            o.objInfo = p;
            break;
          default:
            console.log("unhandled", g, l);
        }
      }
      return r !== void 0 && o.elements.push(r), o;
    }
    function x(e, s) {
      switch (s) {
        case "char":
        case "uchar":
        case "short":
        case "ushort":
        case "int":
        case "uint":
        case "int8":
        case "uint8":
        case "int16":
        case "uint16":
        case "int32":
        case "uint32":
          return parseInt(e);
        case "float":
        case "double":
        case "float32":
        case "float64":
          return parseFloat(e);
      }
    }
    function z(e, s) {
      const n = {};
      for (let c = 0; c < e.length; c++) {
        if (s.empty()) return null;
        if (e[c].type === "list") {
          const t = [], o = x(s.next(), e[c].countType);
          for (let a = 0; a < o; a++) {
            if (s.empty()) return null;
            t.push(x(s.next(), e[c].itemType));
          }
          n[e[c].name] = t;
        } else
          n[e[c].name] = x(s.next(), e[c].type);
      }
      return n;
    }
    function B() {
      const e = {
        indices: [],
        vertices: [],
        normals: [],
        uvs: [],
        faceVertexUvs: [],
        colors: [],
        faceVertexColors: [],
        descriptors: {}
      };
      for (const s of Object.keys(y.customPropertyMapping))
        e[s] = [];
      return e;
    }
    function f(e) {
      switch (e) {
        case "int8":
        case "char":
          return Z;
        case "uint8":
        case "uchar":
          return X;
        case "int16":
        case "short":
          return Q;
        case "uint16":
        case "ushort":
          return K;
        case "int32":
        case "int":
          return J;
        case "uint32":
        case "uint":
          return $;
        case "float32":
        case "float":
          return Y;
        case "float64":
        case "double":
          return te;
      }
    }
    function P(e) {
      switch (e) {
        case "uchar":
        case "uint8":
          return 1 / 255;
        case "ushort":
        case "uint16":
          return 1 / 65535;
        case "float":
        case "float32":
        case "double":
        case "float64":
          return 1;
        default:
          return 1 / 255;
      }
    }
    function v(e) {
      return e === "float" || e === "float32" || e === "double" || e === "float64";
    }
    function M(e) {
      function s(T) {
        for (const V of T) {
          const b = e.find((A) => A.name === V);
          if (b) return b;
        }
        return null;
      }
      const n = s(["x", "px", "posx"]), c = s(["y", "py", "posy"]), t = s(["z", "pz", "posz"]), o = s(["nx", "normalx"]), a = s(["ny", "normaly"]), r = s(["nz", "normalz"]), u = s(["s", "u", "texture_u", "tx"]), i = s(["t", "v", "texture_v", "ty"]), p = s(["red", "diffuse_red", "r", "diffuse_r"]), l = s(["green", "diffuse_green", "g", "diffuse_g"]), g = s(["blue", "diffuse_blue", "b", "diffuse_b"]), w = s(["texcoord"]), j = {};
      for (const T of Object.keys(y.customPropertyMapping)) {
        const b = y.customPropertyMapping[T].map((d) => e.find((H) => H.name === d)), A = b.filter((d) => d).map((d) => d.type), E = A.length > 0 && A.every((d) => d === A[0]);
        j[T] = {
          type: E ? A[0] : "float32",
          usage: b.every((d) => d !== void 0)
        };
      }
      return {
        position: {
          names: [n ? n.name : "x", c ? c.name : "y", t ? t.name : "z"],
          type: n ? n.type : "float32",
          usage: !!(n && c && t)
        },
        normal: {
          names: [o ? o.name : "nx", a ? a.name : "ny", r ? r.name : "nz"],
          type: o ? o.type : "float32",
          usage: !!(o && a && r)
        },
        uv: {
          names: [u ? u.name : "s", i ? i.name : "t"],
          type: u ? u.type : "float32",
          usage: !!(u && i)
        },
        texcoord: {
          type: w ? w.itemType : "float32",
          usage: !!w
        },
        color: {
          names: [p ? p.name : "red", l ? l.name : "green", g ? g.name : "blue"],
          type: p ? p.type : "uchar",
          usage: !!(p && l && g)
        },
        custom: j
      };
    }
    function R(e, s) {
      const n = B(), c = /end_header\s+(\S[\s\S]*\S|\S)\s*$/;
      let t, o;
      (o = c.exec(e)) !== null ? t = o[1].split(/\s+/) : t = [];
      const a = new se(t);
      e: for (let r = 0; r < s.elements.length; r++) {
        const u = s.elements[r], i = M(u.properties);
        n.descriptors[u.name] = i;
        for (let p = 0; p < u.count; p++) {
          const l = z(u.properties, a);
          if (!l) break e;
          _(n, u.name, l, i);
        }
      }
      return U(n);
    }
    function U(e) {
      let s = new q();
      const n = e.descriptors.vertex;
      e.indices.length > 0 && s.setIndex(e.indices);
      const c = f(n ? n.position.type : "float32");
      if (s.setAttribute("position", new c(e.vertices, 3)), e.normals.length > 0) {
        const t = f(n.normal.type);
        s.setAttribute("normal", new t(e.normals, 3));
      }
      if (e.uvs.length > 0) {
        const t = f(n.uv.type);
        s.setAttribute("uv", new t(e.uvs, 2));
      }
      if (e.colors.length > 0) {
        const t = n.color.type, o = !v(t), a = f(t);
        s.setAttribute("color", new a(e.colors, 3, o));
      }
      if (e.faceVertexUvs.length > 0 || e.faceVertexColors.length > 0) {
        if (s = s.toNonIndexed(), e.faceVertexUvs.length > 0) {
          const t = f(e.descriptors.face.texcoord.type);
          s.setAttribute("uv", new t(e.faceVertexUvs, 2));
        }
        if (e.faceVertexColors.length > 0) {
          const t = e.descriptors.face.color.type, o = !v(t), a = f(t);
          s.setAttribute("color", new a(e.faceVertexColors, 3, o));
        }
      }
      for (const t of Object.keys(y.customPropertyMapping))
        if (e[t].length > 0) {
          const o = f(n.custom[t].type);
          s.setAttribute(t, new o(e[t], y.customPropertyMapping[t].length));
        }
      return s.computeBoundingSphere(), s;
    }
    function _(e, s, n, c) {
      if (s === "vertex") {
        const { position: t, normal: o, uv: a, color: r } = c;
        if (t.usage && e.vertices.push(
          n[t.names[0]],
          n[t.names[1]],
          n[t.names[2]]
        ), o.usage && e.normals.push(
          n[o.names[0]],
          n[o.names[1]],
          n[o.names[2]]
        ), a.usage && e.uvs.push(
          n[a.names[0]],
          n[a.names[1]]
        ), r.usage) {
          const u = P(r.type), i = v(r.type);
          h.setRGB(
            n[r.names[0]] * u,
            n[r.names[1]] * u,
            n[r.names[2]] * u,
            L
          );
          const p = 1 / u;
          e.colors.push(
            i ? h.r : Math.round(h.r * p),
            i ? h.g : Math.round(h.g * p),
            i ? h.b : Math.round(h.b * p)
          );
        }
        for (const u of Object.keys(y.customPropertyMapping))
          for (const i of y.customPropertyMapping[u])
            e[u].push(n[i]);
      } else if (s === "face") {
        const t = n.vertex_indices || n.vertex_index, o = n.texcoord;
        t.length === 3 ? (e.indices.push(t[0], t[1], t[2]), o && o.length === 6 && (e.faceVertexUvs.push(o[0], o[1]), e.faceVertexUvs.push(o[2], o[3]), e.faceVertexUvs.push(o[4], o[5]))) : t.length === 4 && (e.indices.push(t[0], t[1], t[3]), e.indices.push(t[1], t[2], t[3]));
        const { color: a } = c;
        if (a.usage) {
          const r = P(a.type);
          h.setRGB(
            n[a.names[0]] * r,
            n[a.names[1]] * r,
            n[a.names[2]] * r,
            L
          );
          const u = 1 / r, i = h.r * u, p = h.g * u, l = h.b * u;
          e.faceVertexColors.push(i, p, l), e.faceVertexColors.push(i, p, l), e.faceVertexColors.push(i, p, l);
        }
      }
    }
    function D(e, s) {
      const n = {};
      let c = 0;
      for (let t = 0; t < s.length; t++) {
        const o = s[t], a = o.valueReader;
        if (o.type === "list") {
          const r = [], u = o.countReader.read(e + c);
          c += o.countReader.size;
          for (let i = 0; i < u; i++)
            r.push(a.read(e + c)), c += a.size;
          n[o.name] = r;
        } else
          n[o.name] = a.read(e + c), c += a.size;
      }
      return [n, c];
    }
    function F(e, s, n) {
      function c(t, o, a) {
        switch (o) {
          // correspondences for non-specific length types here match rply:
          case "int8":
          case "char":
            return { read: (r) => t.getInt8(r), size: 1 };
          case "uint8":
          case "uchar":
            return { read: (r) => t.getUint8(r), size: 1 };
          case "int16":
          case "short":
            return { read: (r) => t.getInt16(r, a), size: 2 };
          case "uint16":
          case "ushort":
            return { read: (r) => t.getUint16(r, a), size: 2 };
          case "int32":
          case "int":
            return { read: (r) => t.getInt32(r, a), size: 4 };
          case "uint32":
          case "uint":
            return { read: (r) => t.getUint32(r, a), size: 4 };
          case "float32":
          case "float":
            return { read: (r) => t.getFloat32(r, a), size: 4 };
          case "float64":
          case "double":
            return { read: (r) => t.getFloat64(r, a), size: 8 };
        }
      }
      for (let t = 0, o = e.length; t < o; t++) {
        const a = e[t];
        a.type === "list" ? (a.countReader = c(s, a.countType, n), a.valueReader = c(s, a.itemType, n)) : a.valueReader = c(s, a.type, n);
      }
    }
    function N(e, s) {
      const n = B(), c = s.format === "binary_little_endian", t = new DataView(e, s.headerLength);
      let o, a = 0;
      for (let r = 0; r < s.elements.length; r++) {
        const u = s.elements[r], i = u.properties, p = M(i);
        n.descriptors[u.name] = p, F(i, t, c);
        for (let l = 0; l < u.count; l++) {
          o = D(a, i), a += o[1];
          const g = o[0];
          _(n, u.name, g, p);
        }
      }
      return U(n);
    }
    function k(e) {
      let s = 0, n = !0, c = "";
      const t = [], o = new TextDecoder().decode(e.subarray(0, 5)), a = /^ply\r\n/.test(o);
      do {
        const r = String.fromCharCode(e[s++]);
        r !== `
` && r !== "\r" ? c += r : (c === "end_header" && (n = !1), c !== "" && (t.push(c), c = ""));
      } while (n && s < e.length);
      return a === !0 && s++, { headerText: t.join("\r") + "\r", headerLength: s };
    }
    let I;
    const y = this;
    if (m instanceof ArrayBuffer) {
      const e = new Uint8Array(m), { headerText: s, headerLength: n } = k(e), c = C(s, n);
      if (c.format === "ascii") {
        const t = new TextDecoder().decode(e);
        I = R(t, c);
      } else
        I = N(m, c);
    } else
      I = R(m, C(m));
    return I;
  }
}
class te extends ee {
  constructor(m, C, x) {
    super(new Float64Array(m), C, x);
  }
}
class se {
  constructor(m) {
    this.arr = m, this.i = 0;
  }
  empty() {
    return this.i >= this.arr.length;
  }
  next() {
    return this.arr[this.i++];
  }
}
export {
  re as PLYLoader
};
