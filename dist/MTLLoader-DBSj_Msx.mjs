import { L as b, U as w, W as M, F as x, K as F, h as d, g as u, S as f, o as L, p as g, aE as O, Y as y } from "./index-Bkxrq-S-.mjs";
class S extends b {
  constructor(s) {
    super(s);
  }
  /**
   * Starts loading from the given URL and passes the loaded MTL asset
   * to the `onLoad()` callback.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function(MaterialCreator)} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Executed while the loading is in progress.
   * @param {onErrorCallback} onError - Executed when errors occur.
   */
  load(s, o, p, e) {
    const a = this, n = this.path === "" ? w.extractUrlBase(s) : this.path, r = new M(this.manager);
    r.setPath(this.path), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials), r.load(s, function(t) {
      try {
        o(a.parse(t, n));
      } catch (i) {
        e ? e(i) : console.error(i), a.manager.itemError(s);
      }
    }, p, e);
  }
  /**
   * Sets the material options.
   *
   * @param {MTLLoader~MaterialOptions} value - The material options.
   * @return {MTLLoader} A reference to this loader.
   */
  setMaterialOptions(s) {
    return this.materialOptions = s, this;
  }
  /**
   * Parses the given MTL data and returns the resulting material creator.
   *
   * @param {string} text - The raw MTL data as a string.
   * @param {string} path - The URL base path.
   * @return {MaterialCreator} The material creator.
   */
  parse(s, o) {
    const p = s.split(`
`);
    let e = {};
    const a = /\s+/, n = {};
    for (let t = 0; t < p.length; t++) {
      let i = p[t];
      if (i = i.trim(), i.length === 0 || i.charAt(0) === "#")
        continue;
      const c = i.indexOf(" ");
      let l = c >= 0 ? i.substring(0, c) : i;
      l = l.toLowerCase();
      let h = c >= 0 ? i.substring(c + 1) : "";
      if (h = h.trim(), l === "newmtl")
        e = { name: h }, n[h] = e;
      else if (l === "ka" || l === "kd" || l === "ks" || l === "ke") {
        const m = h.split(a, 3);
        e[l] = [parseFloat(m[0]), parseFloat(m[1]), parseFloat(m[2])];
      } else
        e[l] = h;
    }
    const r = new C(this.resourcePath || o, this.materialOptions);
    return r.setCrossOrigin(this.crossOrigin), r.setManager(this.manager), r.setMaterials(n), r;
  }
}
class C {
  constructor(s = "", o = {}) {
    this.baseUrl = s, this.options = o, this.materialsInfo = {}, this.materials = {}, this.materialsArray = [], this.nameLookup = {}, this.crossOrigin = "anonymous", this.side = this.options.side !== void 0 ? this.options.side : x, this.wrap = this.options.wrap !== void 0 ? this.options.wrap : F;
  }
  setCrossOrigin(s) {
    return this.crossOrigin = s, this;
  }
  setManager(s) {
    this.manager = s;
  }
  setMaterials(s) {
    this.materialsInfo = this.convert(s), this.materials = {}, this.materialsArray = [], this.nameLookup = {};
  }
  convert(s) {
    if (!this.options) return s;
    const o = {};
    for (const p in s) {
      const e = s[p], a = {};
      o[p] = a;
      for (const n in e) {
        let r = !0, t = e[n];
        const i = n.toLowerCase();
        switch (i) {
          case "kd":
          case "ka":
          case "ks":
            this.options && this.options.normalizeRGB && (t = [t[0] / 255, t[1] / 255, t[2] / 255]), this.options && this.options.ignoreZeroRGBs && t[0] === 0 && t[1] === 0 && t[2] === 0 && (r = !1);
            break;
        }
        r && (a[i] = t);
      }
    }
    return o;
  }
  preload() {
    for (const s in this.materialsInfo)
      this.create(s);
  }
  getIndex(s) {
    return this.nameLookup[s];
  }
  getAsArray() {
    let s = 0;
    for (const o in this.materialsInfo)
      this.materialsArray[s] = this.create(o), this.nameLookup[o] = s, s++;
    return this.materialsArray;
  }
  create(s) {
    return this.materials[s] === void 0 && this.createMaterial_(s), this.materials[s];
  }
  createMaterial_(s) {
    const o = this, p = this.materialsInfo[s], e = {
      name: s,
      side: this.side
    };
    function a(r, t) {
      return typeof t != "string" || t === "" ? "" : /^https?:\/\//i.test(t) ? t : r + t;
    }
    function n(r, t) {
      if (e[r]) return;
      const i = o.getTextureParams(t, e), c = o.loadTexture(a(o.baseUrl, i.url));
      c.repeat.copy(i.scale), c.offset.copy(i.offset), c.wrapS = o.wrap, c.wrapT = o.wrap, (r === "map" || r === "emissiveMap") && (c.colorSpace = f), e[r] = c;
    }
    for (const r in p) {
      const t = p[r];
      let i;
      if (t !== "")
        switch (r.toLowerCase()) {
          // Ns is material specular exponent
          case "kd":
            e.color = d.colorSpaceToWorking(new u().fromArray(t), f);
            break;
          case "ks":
            e.specular = d.colorSpaceToWorking(new u().fromArray(t), f);
            break;
          case "ke":
            e.emissive = d.colorSpaceToWorking(new u().fromArray(t), f);
            break;
          case "map_kd":
            n("map", t);
            break;
          case "map_ks":
            n("specularMap", t);
            break;
          case "map_ke":
            n("emissiveMap", t);
            break;
          case "norm":
            n("normalMap", t);
            break;
          case "map_bump":
          case "bump":
            n("bumpMap", t);
            break;
          case "disp":
            n("displacementMap", t);
            break;
          case "map_d":
            n("alphaMap", t), e.transparent = !0;
            break;
          case "ns":
            e.shininess = parseFloat(t);
            break;
          case "d":
            i = parseFloat(t), i < 1 && (e.opacity = i, e.transparent = !0);
            break;
          case "tr":
            i = parseFloat(t), this.options && this.options.invertTrProperty && (i = 1 - i), i > 0 && (e.opacity = 1 - i, e.transparent = !0);
            break;
        }
    }
    return this.materials[s] = new L(e), this.materials[s];
  }
  getTextureParams(s, o) {
    const p = {
      scale: new g(1, 1),
      offset: new g(0, 0)
    }, e = s.split(/\s+/);
    let a;
    return a = e.indexOf("-bm"), a >= 0 && (o.bumpScale = parseFloat(e[a + 1]), e.splice(a, 2)), a = e.indexOf("-mm"), a >= 0 && (o.displacementBias = parseFloat(e[a + 1]), o.displacementScale = parseFloat(e[a + 2]), e.splice(a, 3)), a = e.indexOf("-s"), a >= 0 && (p.scale.set(parseFloat(e[a + 1]), parseFloat(e[a + 2])), e.splice(a, 4)), a = e.indexOf("-o"), a >= 0 && (p.offset.set(parseFloat(e[a + 1]), parseFloat(e[a + 2])), e.splice(a, 4)), p.url = e.join(" ").trim(), p;
  }
  loadTexture(s, o, p, e, a) {
    const n = this.manager !== void 0 ? this.manager : O;
    let r = n.getHandler(s);
    r === null && (r = new y(n)), r.setCrossOrigin && r.setCrossOrigin(this.crossOrigin);
    const t = r.load(s, p, e, a);
    return o !== void 0 && (t.mapping = o), t;
  }
}
export {
  S as MTLLoader
};
