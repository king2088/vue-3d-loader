import { TGALoader as X } from "./TGALoader-D-XtylYk.mjs";
import { M as O, g as se, h as U, S as q, V as I, i as M, Q as j, j as _, k as J, I as ne, l as re, A as Z, m as Y, n as ae, o as Q, p as G, D as oe, F as ce, P as D, O as le, q as de, r as ue, s as he, t as fe, B as me, u as R, T as pe, v as $, w as be, x as ge, G as z, L as ie, y as ee, z as ye, E as ke, H as Ae, J as Te, K as H, N as te, U as Ne, W as we, X as xe, Y as Ee } from "./index-DOY_rME3.mjs";
function C(x, t) {
  const e = [], i = x.childNodes;
  for (let s = 0, n = i.length; s < n; s++) {
    const r = i[s];
    r.nodeName === t && e.push(r);
  }
  return e;
}
function ve(x) {
  return x.length === 0 ? [] : x.trim().split(/\s+/);
}
function E(x) {
  return x.length === 0 ? [] : x.trim().split(/\s+/).map(parseFloat);
}
function K(x) {
  return x.length === 0 ? [] : x.trim().split(/\s+/).map((t) => parseInt(t));
}
function w(x) {
  return x.substring(1);
}
class Ce {
  constructor() {
    this.count = 0;
  }
  generateId() {
    return "three_default_" + this.count++;
  }
  parse(t) {
    if (t.length === 0)
      return null;
    const e = new DOMParser().parseFromString(t, "application/xml"), i = C(e, "COLLADA")[0], s = e.getElementsByTagName("parsererror")[0];
    if (s !== void 0) {
      const c = C(s, "div")[0];
      let l;
      return c ? l = c.textContent : l = this.parserErrorToText(s), console.error(`THREE.ColladaLoader: Failed to parse collada file.
`, l), null;
    }
    const n = i.getAttribute("version");
    console.debug("THREE.ColladaLoader: File version", n);
    const r = this.parseAsset(C(i, "asset")[0]), a = {
      animations: {},
      clips: {},
      controllers: {},
      images: {},
      effects: {},
      materials: {},
      cameras: {},
      lights: {},
      geometries: {},
      nodes: {},
      visualScenes: {},
      kinematicsModels: {},
      physicsModels: {},
      kinematicsScenes: {},
      joints: {}
    };
    return this.library = a, this.collada = i, this.parseLibrary(i, "library_animations", "animation", this.parseAnimation.bind(this)), this.parseLibrary(i, "library_animation_clips", "animation_clip", this.parseAnimationClip.bind(this)), this.parseLibrary(i, "library_controllers", "controller", this.parseController.bind(this)), this.parseLibrary(i, "library_images", "image", this.parseImage.bind(this)), this.parseLibrary(i, "library_effects", "effect", this.parseEffect.bind(this)), this.parseLibrary(i, "library_materials", "material", this.parseMaterial.bind(this)), this.parseLibrary(i, "library_cameras", "camera", this.parseCamera.bind(this)), this.parseLibrary(i, "library_lights", "light", this.parseLight.bind(this)), this.parseLibrary(i, "library_geometries", "geometry", this.parseGeometry.bind(this)), this.parseLibrary(i, "library_nodes", "node", this.parseNode.bind(this)), this.parseLibrary(i, "library_visual_scenes", "visual_scene", this.parseVisualScene.bind(this)), this.parseLibrary(i, "library_joints", "joint", this.parseLibraryJoint.bind(this)), this.parseLibrary(i, "library_kinematics_models", "kinematics_model", this.parseKinematicsModel.bind(this)), this.parseLibrary(i, "library_physics_models", "physics_model", this.parsePhysicsModel.bind(this)), this.parseLibrary(i, "scene", "instance_kinematics_scene", this.parseKinematicsScene.bind(this)), {
      library: a,
      asset: r,
      collada: i
    };
  }
  // convert the parser error element into text with each child elements text
  // separated by new lines.
  parserErrorToText(t) {
    const e = [], i = [t];
    for (; i.length; ) {
      const s = i.shift();
      s.nodeType === Node.TEXT_NODE ? e.push(s.textContent) : (e.push(`
`), i.push(...s.childNodes));
    }
    return e.join("").trim();
  }
  // asset
  parseAsset(t) {
    return {
      unit: this.parseAssetUnit(C(t, "unit")[0]),
      upAxis: this.parseAssetUpAxis(C(t, "up_axis")[0])
    };
  }
  parseAssetUnit(t) {
    return t !== void 0 && t.hasAttribute("meter") === !0 ? parseFloat(t.getAttribute("meter")) : 1;
  }
  parseAssetUpAxis(t) {
    return t !== void 0 ? t.textContent : "Y_UP";
  }
  // library
  parseLibrary(t, e, i, s) {
    const n = C(t, e)[0];
    if (n !== void 0) {
      const r = C(n, i);
      for (let a = 0; a < r.length; a++)
        s(r[a]);
    }
  }
  // animation
  parseAnimation(t) {
    const e = {
      sources: {},
      samplers: {},
      channels: {}
    };
    let i = !1;
    for (let s = 0, n = t.childNodes.length; s < n; s++) {
      const r = t.childNodes[s];
      if (r.nodeType !== 1) continue;
      let a;
      switch (r.nodeName) {
        case "source":
          a = r.getAttribute("id"), e.sources[a] = this.parseSource(r);
          break;
        case "sampler":
          a = r.getAttribute("id"), e.samplers[a] = this.parseAnimationSampler(r);
          break;
        case "channel":
          a = r.getAttribute("target"), e.channels[a] = this.parseAnimationChannel(r);
          break;
        case "animation":
          this.parseAnimation(r), i = !0;
          break;
      }
    }
    i === !1 && (this.library.animations[t.getAttribute("id") || O.generateUUID()] = e);
  }
  parseAnimationSampler(t) {
    const e = {
      inputs: {}
    };
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      if (n.nodeType === 1 && n.nodeName === "input") {
        const r = w(n.getAttribute("source")), a = n.getAttribute("semantic");
        e.inputs[a] = r;
      }
    }
    return e;
  }
  parseAnimationChannel(t) {
    const e = {};
    let s = t.getAttribute("target").split("/");
    const n = s.shift();
    let r = s.shift();
    const a = r.indexOf("(") !== -1, c = r.indexOf(".") !== -1;
    if (c)
      s = r.split("."), r = s.shift(), e.member = s.shift();
    else if (a) {
      const l = r.split("(");
      r = l.shift();
      for (let o = 0; o < l.length; o++)
        l[o] = parseInt(l[o].replace(/\)/, ""));
      e.indices = l;
    }
    return e.id = n, e.sid = r, e.arraySyntax = a, e.memberSyntax = c, e.sampler = w(t.getAttribute("source")), e;
  }
  // animation clips
  parseAnimationClip(t) {
    const e = {
      name: t.getAttribute("id") || "default",
      start: parseFloat(t.getAttribute("start") || 0),
      end: parseFloat(t.getAttribute("end") || 0),
      animations: []
    };
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      n.nodeType === 1 && n.nodeName === "instance_animation" && e.animations.push(w(n.getAttribute("url")));
    }
    this.library.clips[t.getAttribute("id")] = e;
  }
  // controller
  parseController(t) {
    const e = {};
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      if (n.nodeType === 1)
        switch (n.nodeName) {
          case "skin":
            e.id = w(n.getAttribute("source")), e.skin = this.parseSkin(n);
            break;
          case "morph":
            e.id = w(n.getAttribute("source")), console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");
            break;
        }
    }
    this.library.controllers[t.getAttribute("id")] = e;
  }
  parseSkin(t) {
    const e = {
      sources: {}
    };
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      if (n.nodeType === 1)
        switch (n.nodeName) {
          case "bind_shape_matrix":
            e.bindShapeMatrix = E(n.textContent);
            break;
          case "source":
            const r = n.getAttribute("id");
            e.sources[r] = this.parseSource(n);
            break;
          case "joints":
            e.joints = this.parseJoints(n);
            break;
          case "vertex_weights":
            e.vertexWeights = this.parseVertexWeights(n);
            break;
        }
    }
    return e;
  }
  parseJoints(t) {
    const e = {
      inputs: {}
    };
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      if (n.nodeType === 1 && n.nodeName === "input") {
        const r = n.getAttribute("semantic"), a = w(n.getAttribute("source"));
        e.inputs[r] = a;
      }
    }
    return e;
  }
  parseVertexWeights(t) {
    const e = {
      inputs: {}
    };
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      if (n.nodeType === 1)
        switch (n.nodeName) {
          case "input":
            const r = n.getAttribute("semantic"), a = w(n.getAttribute("source")), c = parseInt(n.getAttribute("offset"));
            e.inputs[r] = { id: a, offset: c };
            break;
          case "vcount":
            e.vcount = K(n.textContent);
            break;
          case "v":
            e.v = K(n.textContent);
            break;
        }
    }
    return e;
  }
  // image
  parseImage(t) {
    const e = {
      init_from: C(t, "init_from")[0].textContent
    };
    this.library.images[t.getAttribute("id")] = e;
  }
  // effect
  parseEffect(t) {
    const e = {};
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      n.nodeType === 1 && n.nodeName === "profile_COMMON" && (e.profile = this.parseEffectProfileCOMMON(n));
    }
    this.library.effects[t.getAttribute("id")] = e;
  }
  parseEffectProfileCOMMON(t) {
    const e = {
      surfaces: {},
      samplers: {}
    };
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      if (n.nodeType === 1)
        switch (n.nodeName) {
          case "newparam":
            this.parseEffectNewparam(n, e);
            break;
          case "technique":
            e.technique = this.parseEffectTechnique(n);
            break;
          case "extra":
            e.extra = this.parseEffectExtra(n);
            break;
        }
    }
    return e;
  }
  parseEffectNewparam(t, e) {
    const i = t.getAttribute("sid");
    for (let s = 0, n = t.childNodes.length; s < n; s++) {
      const r = t.childNodes[s];
      if (r.nodeType === 1)
        switch (r.nodeName) {
          case "surface":
            e.surfaces[i] = this.parseEffectSurface(r);
            break;
          case "sampler2D":
            e.samplers[i] = this.parseEffectSampler(r);
            break;
        }
    }
  }
  parseEffectSurface(t) {
    const e = {};
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      n.nodeType === 1 && n.nodeName === "init_from" && (e.init_from = n.textContent);
    }
    return e;
  }
  parseEffectSampler(t) {
    const e = {};
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      n.nodeType === 1 && n.nodeName === "source" && (e.source = n.textContent);
    }
    return e;
  }
  parseEffectTechnique(t) {
    const e = {};
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      if (n.nodeType === 1)
        switch (n.nodeName) {
          case "constant":
          case "lambert":
          case "blinn":
          case "phong":
            e.type = n.nodeName, e.parameters = this.parseEffectParameters(n);
            break;
          case "extra":
            e.extra = this.parseEffectExtra(n);
            break;
        }
    }
    return e;
  }
  parseEffectParameters(t) {
    const e = {};
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      if (n.nodeType === 1)
        switch (n.nodeName) {
          case "emission":
          case "diffuse":
          case "specular":
          case "bump":
          case "ambient":
          case "shininess":
          case "transparency":
            e[n.nodeName] = this.parseEffectParameter(n);
            break;
          case "transparent":
            e[n.nodeName] = {
              opaque: n.hasAttribute("opaque") ? n.getAttribute("opaque") : "A_ONE",
              data: this.parseEffectParameter(n)
            };
            break;
        }
    }
    return e;
  }
  parseEffectParameter(t) {
    const e = {};
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      if (n.nodeType === 1)
        switch (n.nodeName) {
          case "color":
            e[n.nodeName] = E(n.textContent);
            break;
          case "float":
            e[n.nodeName] = parseFloat(n.textContent);
            break;
          case "texture":
            e[n.nodeName] = { id: n.getAttribute("texture"), extra: this.parseEffectParameterTexture(n) };
            break;
        }
    }
    return e;
  }
  parseEffectParameterTexture(t) {
    const e = {
      technique: {}
    };
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      n.nodeType === 1 && n.nodeName === "extra" && this.parseEffectParameterTextureExtra(n, e);
    }
    return e;
  }
  parseEffectParameterTextureExtra(t, e) {
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      n.nodeType === 1 && n.nodeName === "technique" && this.parseEffectParameterTextureExtraTechnique(n, e);
    }
  }
  parseEffectParameterTextureExtraTechnique(t, e) {
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      if (n.nodeType === 1)
        switch (n.nodeName) {
          case "repeatU":
          case "repeatV":
          case "offsetU":
          case "offsetV":
            e.technique[n.nodeName] = parseFloat(n.textContent);
            break;
          case "wrapU":
          case "wrapV":
            n.textContent.toUpperCase() === "TRUE" ? e.technique[n.nodeName] = 1 : n.textContent.toUpperCase() === "FALSE" ? e.technique[n.nodeName] = 0 : e.technique[n.nodeName] = parseInt(n.textContent);
            break;
          case "bump":
            e[n.nodeName] = this.parseEffectExtraTechniqueBump(n);
            break;
        }
    }
  }
  parseEffectExtra(t) {
    const e = {};
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      n.nodeType === 1 && n.nodeName === "technique" && (e.technique = this.parseEffectExtraTechnique(n));
    }
    return e;
  }
  parseEffectExtraTechnique(t) {
    const e = {};
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      if (n.nodeType === 1)
        switch (n.nodeName) {
          case "double_sided":
            e[n.nodeName] = parseInt(n.textContent);
            break;
          case "bump":
            e[n.nodeName] = this.parseEffectExtraTechniqueBump(n);
            break;
        }
    }
    return e;
  }
  parseEffectExtraTechniqueBump(t) {
    const e = {};
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      n.nodeType === 1 && n.nodeName === "texture" && (e[n.nodeName] = { id: n.getAttribute("texture"), texcoord: n.getAttribute("texcoord"), extra: this.parseEffectParameterTexture(n) });
    }
    return e;
  }
  // material
  parseMaterial(t) {
    const e = {
      name: t.getAttribute("name")
    };
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      n.nodeType === 1 && n.nodeName === "instance_effect" && (e.url = w(n.getAttribute("url")));
    }
    this.library.materials[t.getAttribute("id")] = e;
  }
  // camera
  parseCamera(t) {
    const e = {
      name: t.getAttribute("name")
    };
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      n.nodeType === 1 && n.nodeName === "optics" && (e.optics = this.parseCameraOptics(n));
    }
    this.library.cameras[t.getAttribute("id")] = e;
  }
  parseCameraOptics(t) {
    for (let e = 0; e < t.childNodes.length; e++) {
      const i = t.childNodes[e];
      if (i.nodeName === "technique_common")
        return this.parseCameraTechnique(i);
    }
    return {};
  }
  parseCameraTechnique(t) {
    const e = {};
    for (let i = 0; i < t.childNodes.length; i++) {
      const s = t.childNodes[i];
      switch (s.nodeName) {
        case "perspective":
        case "orthographic":
          e.technique = s.nodeName, e.parameters = this.parseCameraParameters(s);
          break;
      }
    }
    return e;
  }
  parseCameraParameters(t) {
    const e = {};
    for (let i = 0; i < t.childNodes.length; i++) {
      const s = t.childNodes[i];
      switch (s.nodeName) {
        case "xfov":
        case "yfov":
        case "xmag":
        case "ymag":
        case "znear":
        case "zfar":
        case "aspect_ratio":
          e[s.nodeName] = parseFloat(s.textContent);
          break;
      }
    }
    return e;
  }
  // light
  parseLight(t) {
    let e = {};
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      n.nodeType === 1 && n.nodeName === "technique_common" && (e = this.parseLightTechnique(n));
    }
    this.library.lights[t.getAttribute("id")] = e;
  }
  parseLightTechnique(t) {
    const e = {};
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      if (n.nodeType === 1)
        switch (n.nodeName) {
          case "directional":
          case "point":
          case "spot":
          case "ambient":
            e.technique = n.nodeName, e.parameters = this.parseLightParameters(n);
            break;
        }
    }
    return e;
  }
  parseLightParameters(t) {
    const e = {};
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      if (n.nodeType === 1)
        switch (n.nodeName) {
          case "color":
            const r = E(n.textContent);
            e.color = new se().fromArray(r), U.colorSpaceToWorking(e.color, q);
            break;
          case "falloff_angle":
            e.falloffAngle = parseFloat(n.textContent);
            break;
          case "quadratic_attenuation":
            const a = parseFloat(n.textContent);
            e.distance = a ? Math.sqrt(1 / a) : 0;
            break;
        }
    }
    return e;
  }
  // geometry
  parseGeometry(t) {
    const e = {
      name: t.getAttribute("name"),
      sources: {},
      vertices: {},
      primitives: []
    }, i = C(t, "mesh")[0];
    if (i !== void 0) {
      for (let s = 0; s < i.childNodes.length; s++) {
        const n = i.childNodes[s];
        if (n.nodeType !== 1) continue;
        const r = n.getAttribute("id");
        switch (n.nodeName) {
          case "source":
            e.sources[r] = this.parseSource(n);
            break;
          case "vertices":
            e.vertices = this.parseGeometryVertices(n);
            break;
          case "polygons":
          case "lines":
          case "linestrips":
          case "polylist":
          case "triangles":
            e.primitives.push(this.parseGeometryPrimitive(n));
            break;
        }
      }
      this.library.geometries[t.getAttribute("id")] = e;
    }
  }
  parseSource(t) {
    const e = {
      array: [],
      stride: 3
    };
    for (let i = 0; i < t.childNodes.length; i++) {
      const s = t.childNodes[i];
      if (s.nodeType === 1)
        switch (s.nodeName) {
          case "float_array":
            e.array = E(s.textContent);
            break;
          case "Name_array":
            e.array = ve(s.textContent);
            break;
          case "technique_common":
            const n = C(s, "accessor")[0];
            n !== void 0 && (e.stride = parseInt(n.getAttribute("stride")));
            break;
        }
    }
    return e;
  }
  parseGeometryVertices(t) {
    const e = {};
    for (let i = 0; i < t.childNodes.length; i++) {
      const s = t.childNodes[i];
      s.nodeType === 1 && (e[s.getAttribute("semantic")] = w(s.getAttribute("source")));
    }
    return e;
  }
  parseGeometryPrimitive(t) {
    const e = {
      type: t.nodeName,
      material: t.getAttribute("material"),
      count: parseInt(t.getAttribute("count")),
      inputs: {},
      stride: 0,
      hasUV: !1
    };
    for (let i = 0, s = t.childNodes.length; i < s; i++) {
      const n = t.childNodes[i];
      if (n.nodeType === 1)
        switch (n.nodeName) {
          case "input":
            const r = w(n.getAttribute("source")), a = n.getAttribute("semantic"), c = parseInt(n.getAttribute("offset")), l = parseInt(n.getAttribute("set")), o = l > 0 ? a + l : a;
            e.inputs[o] = { id: r, offset: c }, e.stride = Math.max(e.stride, c + 1), a === "TEXCOORD" && (e.hasUV = !0);
            break;
          case "vcount":
            e.vcount = K(n.textContent);
            break;
          case "p":
            e.p = K(n.textContent);
            break;
        }
    }
    return e.type === "polygons" && (e.vcount = [e.p.length / e.stride]), e;
  }
  // kinematics
  parseLibraryJoint(t) {
    this.library.joints[t.getAttribute("id")] = this.parseKinematicsJoint(t);
  }
  parseKinematicsModel(t) {
    const e = {
      name: t.getAttribute("name") || "",
      joints: {},
      links: []
    };
    for (let i = 0; i < t.childNodes.length; i++) {
      const s = t.childNodes[i];
      s.nodeType === 1 && s.nodeName === "technique_common" && this.parseKinematicsTechniqueCommon(s, e);
    }
    this.library.kinematicsModels[t.getAttribute("id")] = e;
  }
  parseKinematicsTechniqueCommon(t, e) {
    for (let i = 0; i < t.childNodes.length; i++) {
      const s = t.childNodes[i];
      if (s.nodeType === 1)
        switch (s.nodeName) {
          case "joint":
            e.joints[s.getAttribute("sid")] = this.parseKinematicsJoint(s);
            break;
          case "instance_joint":
            e.joints[s.getAttribute("sid")] = this.library.joints[w(s.getAttribute("url"))];
            break;
          case "link":
            e.links.push(this.parseKinematicsLink(s));
            break;
        }
    }
  }
  parseKinematicsJoint(t) {
    let e;
    for (let i = 0; i < t.childNodes.length; i++) {
      const s = t.childNodes[i];
      if (s.nodeType === 1)
        switch (s.nodeName) {
          case "prismatic":
          case "revolute":
            e = this.parseKinematicsJointParameter(s);
            break;
        }
    }
    return e;
  }
  parseKinematicsJointParameter(t) {
    const e = {
      sid: t.getAttribute("sid"),
      name: t.getAttribute("name") || "",
      axis: new I(),
      limits: {
        min: 0,
        max: 0
      },
      type: t.nodeName,
      static: !1,
      zeroPosition: 0,
      middlePosition: 0
    };
    for (let i = 0; i < t.childNodes.length; i++) {
      const s = t.childNodes[i];
      if (s.nodeType === 1)
        switch (s.nodeName) {
          case "axis":
            const n = E(s.textContent);
            e.axis.fromArray(n);
            break;
          case "limits":
            const r = s.getElementsByTagName("max")[0], a = s.getElementsByTagName("min")[0];
            e.limits.max = parseFloat(r.textContent), e.limits.min = parseFloat(a.textContent);
            break;
        }
    }
    return e.limits.min >= e.limits.max && (e.static = !0), e.middlePosition = (e.limits.min + e.limits.max) / 2, e;
  }
  parseKinematicsLink(t) {
    const e = {
      sid: t.getAttribute("sid"),
      name: t.getAttribute("name") || "",
      attachments: [],
      transforms: []
    };
    for (let i = 0; i < t.childNodes.length; i++) {
      const s = t.childNodes[i];
      if (s.nodeType === 1)
        switch (s.nodeName) {
          case "attachment_full":
            e.attachments.push(this.parseKinematicsAttachment(s));
            break;
          case "matrix":
          case "translate":
          case "rotate":
            e.transforms.push(this.parseKinematicsTransform(s));
            break;
        }
    }
    return e;
  }
  parseKinematicsAttachment(t) {
    const e = {
      joint: t.getAttribute("joint").split("/").pop(),
      transforms: [],
      links: []
    };
    for (let i = 0; i < t.childNodes.length; i++) {
      const s = t.childNodes[i];
      if (s.nodeType === 1)
        switch (s.nodeName) {
          case "link":
            e.links.push(this.parseKinematicsLink(s));
            break;
          case "matrix":
          case "translate":
          case "rotate":
            e.transforms.push(this.parseKinematicsTransform(s));
            break;
        }
    }
    return e;
  }
  parseKinematicsTransform(t) {
    const e = {
      type: t.nodeName
    }, i = E(t.textContent);
    switch (e.type) {
      case "matrix":
        e.obj = new M(), e.obj.fromArray(i).transpose();
        break;
      case "translate":
        e.obj = new I(), e.obj.fromArray(i);
        break;
      case "rotate":
        e.obj = new I(), e.obj.fromArray(i), e.angle = O.degToRad(i[3]);
        break;
    }
    return e;
  }
  // physics
  parsePhysicsModel(t) {
    const e = {
      name: t.getAttribute("name") || "",
      rigidBodies: {}
    };
    for (let i = 0; i < t.childNodes.length; i++) {
      const s = t.childNodes[i];
      s.nodeType === 1 && s.nodeName === "rigid_body" && (e.rigidBodies[s.getAttribute("name")] = {}, this.parsePhysicsRigidBody(s, e.rigidBodies[s.getAttribute("name")]));
    }
    this.library.physicsModels[t.getAttribute("id")] = e;
  }
  parsePhysicsRigidBody(t, e) {
    for (let i = 0; i < t.childNodes.length; i++) {
      const s = t.childNodes[i];
      s.nodeType === 1 && s.nodeName === "technique_common" && this.parsePhysicsTechniqueCommon(s, e);
    }
  }
  parsePhysicsTechniqueCommon(t, e) {
    for (let i = 0; i < t.childNodes.length; i++) {
      const s = t.childNodes[i];
      if (s.nodeType === 1)
        switch (s.nodeName) {
          case "inertia":
            e.inertia = E(s.textContent);
            break;
          case "mass":
            e.mass = E(s.textContent)[0];
            break;
        }
    }
  }
  // scene
  parseKinematicsScene(t) {
    const e = {
      bindJointAxis: []
    };
    for (let i = 0; i < t.childNodes.length; i++) {
      const s = t.childNodes[i];
      s.nodeType === 1 && s.nodeName === "bind_joint_axis" && e.bindJointAxis.push(this.parseKinematicsBindJointAxis(s));
    }
    this.library.kinematicsScenes[w(t.getAttribute("url"))] = e;
  }
  parseKinematicsBindJointAxis(t) {
    const e = {
      target: t.getAttribute("target").split("/").pop()
    };
    for (let i = 0; i < t.childNodes.length; i++) {
      const s = t.childNodes[i];
      if (s.nodeType === 1 && s.nodeName === "axis") {
        const n = s.getElementsByTagName("param")[0];
        e.axis = n.textContent;
        const r = e.axis.split("inst_").pop().split("axis")[0];
        e.jointIndex = r.substring(0, r.length - 1);
      }
    }
    return e;
  }
  // nodes
  prepareNodes(t) {
    const e = t.getElementsByTagName("node");
    for (let i = 0; i < e.length; i++) {
      const s = e[i];
      s.hasAttribute("id") === !1 && s.setAttribute("id", this.generateId());
    }
  }
  parseNode(t) {
    const e = new M(), i = new I(), s = {
      name: t.getAttribute("name") || "",
      type: t.getAttribute("type"),
      id: t.getAttribute("id"),
      sid: t.getAttribute("sid"),
      matrix: new M(),
      nodes: [],
      instanceCameras: [],
      instanceControllers: [],
      instanceLights: [],
      instanceGeometries: [],
      instanceNodes: [],
      transforms: {},
      transformData: {},
      transformOrder: []
    };
    for (let n = 0; n < t.childNodes.length; n++) {
      const r = t.childNodes[n];
      if (r.nodeType !== 1) continue;
      let a;
      switch (r.nodeName) {
        case "node":
          s.nodes.push(r.getAttribute("id")), this.parseNode(r);
          break;
        case "instance_camera":
          s.instanceCameras.push(w(r.getAttribute("url")));
          break;
        case "instance_controller":
          s.instanceControllers.push(this.parseNodeInstance(r));
          break;
        case "instance_light":
          s.instanceLights.push(w(r.getAttribute("url")));
          break;
        case "instance_geometry":
          s.instanceGeometries.push(this.parseNodeInstance(r));
          break;
        case "instance_node":
          s.instanceNodes.push(w(r.getAttribute("url")));
          break;
        case "matrix":
          a = E(r.textContent), s.matrix.multiply(e.fromArray(a).transpose());
          {
            const c = r.getAttribute("sid");
            s.transforms[c] = r.nodeName, s.transformData[c] = { type: "matrix", array: a }, s.transformOrder.push(c);
          }
          break;
        case "translate":
          a = E(r.textContent), i.fromArray(a), s.matrix.multiply(e.makeTranslation(i.x, i.y, i.z));
          {
            const c = r.getAttribute("sid");
            s.transforms[c] = r.nodeName, s.transformData[c] = { type: "translate", x: a[0], y: a[1], z: a[2] }, s.transformOrder.push(c);
          }
          break;
        case "rotate":
          a = E(r.textContent);
          {
            const c = O.degToRad(a[3]);
            s.matrix.multiply(e.makeRotationAxis(i.fromArray(a), c));
            const l = r.getAttribute("sid");
            s.transforms[l] = r.nodeName, s.transformData[l] = { type: "rotate", axis: [a[0], a[1], a[2]], angle: a[3] }, s.transformOrder.push(l);
          }
          break;
        case "scale":
          a = E(r.textContent), s.matrix.scale(i.fromArray(a));
          {
            const c = r.getAttribute("sid");
            s.transforms[c] = r.nodeName, s.transformData[c] = { type: "scale", x: a[0], y: a[1], z: a[2] }, s.transformOrder.push(c);
          }
          break;
      }
    }
    return this.hasNode(s.id) ? console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.", s.id) : this.library.nodes[s.id] = s, s;
  }
  parseNodeInstance(t) {
    const e = {
      id: w(t.getAttribute("url")),
      materials: {},
      skeletons: []
    };
    for (let i = 0; i < t.childNodes.length; i++) {
      const s = t.childNodes[i];
      switch (s.nodeName) {
        case "bind_material":
          const n = s.getElementsByTagName("instance_material");
          for (let r = 0; r < n.length; r++) {
            const a = n[r], c = a.getAttribute("symbol"), l = a.getAttribute("target");
            e.materials[c] = w(l);
          }
          break;
        case "skeleton":
          e.skeletons.push(w(s.textContent));
          break;
      }
    }
    return e;
  }
  // visual scenes
  parseVisualScene(t) {
    const e = {
      name: t.getAttribute("name"),
      children: []
    };
    this.prepareNodes(t);
    const i = C(t, "node");
    for (let s = 0; s < i.length; s++)
      e.children.push(this.parseNode(i[s]));
    this.library.visualScenes[t.getAttribute("id")] = e;
  }
  hasNode(t) {
    return this.library.nodes[t] !== void 0;
  }
}
class Ie {
  constructor(t, e, i, s) {
    this.library = t, this.collada = e, this.textureLoader = i, this.tgaLoader = s, this.tempColor = new se(), this.animations = [], this.kinematics = {}, this.position = new I(), this.scale = new I(), this.quaternion = new j(), this.matrix = new M(), this.deferredPivotAnimations = {}, this.transformNodes = {};
  }
  compose() {
    const t = this.library;
    this.buildLibrary(t.animations, this.buildAnimation.bind(this)), this.buildLibrary(t.clips, this.buildAnimationClip.bind(this)), this.buildLibrary(t.controllers, this.buildController.bind(this)), this.buildLibrary(t.images, this.buildImage.bind(this)), this.buildLibrary(t.effects, this.buildEffect.bind(this)), this.buildLibrary(t.materials, this.buildMaterial.bind(this)), this.buildLibrary(t.cameras, this.buildCamera.bind(this)), this.buildLibrary(t.lights, this.buildLight.bind(this)), this.buildLibrary(t.geometries, this.buildGeometry.bind(this)), this.buildLibrary(t.visualScenes, this.buildVisualScene.bind(this)), this.setupAnimations(), this.setupKinematics();
    const e = this.parseScene(C(this.collada, "scene")[0]);
    return e.animations = this.animations, {
      scene: e,
      animations: this.animations,
      kinematics: this.kinematics
    };
  }
  buildLibrary(t, e) {
    for (const i in t) {
      const s = t[i];
      s.build = e(t[i]);
    }
  }
  getBuild(t, e) {
    return t.build !== void 0 || (t.build = e(t)), t.build;
  }
  isEmpty(t) {
    return Object.keys(t).length === 0;
  }
  buildAnimation(t) {
    const e = [], i = t.channels, s = t.samplers, n = t.sources, r = this.aggregateAnimationChannels(i, s, n);
    for (const a in r) {
      const c = this.library.nodes[a];
      if (!c) continue;
      const l = r[a];
      if (this.hasPivotTransforms(c))
        this.collectDeferredPivotAnimation(a, l);
      else {
        const o = this.getNode(a);
        let d = !1;
        for (const u in l) {
          const h = c.transforms[u], m = c.transformData[u], p = l[u];
          switch (h) {
            case "matrix":
              this.buildMatrixTracks(o, p, c, e);
              break;
            case "translate":
              this.buildTranslateTrack(o, p, m, e);
              break;
            case "rotate":
              d || (this.buildRotateTrack(o, u, p, m, c, e), d = !0);
              break;
            case "scale":
              this.buildScaleTrack(o, p, m, e);
              break;
          }
        }
      }
    }
    return e;
  }
  collectDeferredPivotAnimation(t, e) {
    this.deferredPivotAnimations[t] || (this.deferredPivotAnimations[t] = {});
    const i = this.deferredPivotAnimations[t];
    for (const s in e) {
      i[s] || (i[s] = {});
      for (const n in e[s])
        i[s][n] = e[s][n];
    }
  }
  hasPivotTransforms(t) {
    const e = [
      "rotatePivot",
      "rotatePivotInverse",
      "rotatePivotTranslation",
      "scalePivot",
      "scalePivotInverse",
      "scalePivotTranslation"
    ];
    for (const i of e)
      if (t.transforms[i] !== void 0)
        return !0;
    return !1;
  }
  getAnimation(t) {
    return this.getBuild(this.library.animations[t], this.buildAnimation.bind(this));
  }
  aggregateAnimationChannels(t, e, i) {
    const s = {};
    for (const n in t) {
      if (!t.hasOwnProperty(n)) continue;
      const r = t[n], a = e[r.sampler], c = a.inputs.INPUT, l = a.inputs.OUTPUT, o = i[c], d = i[l], u = a.inputs.INTERPOLATION, h = a.inputs.IN_TANGENT, m = a.inputs.OUT_TANGENT, p = u ? i[u] : null, f = h ? i[h] : null, b = m ? i[m] : null, g = r.id, k = r.sid, y = r.member || "default";
      s[g] || (s[g] = {}), s[g][k] || (s[g][k] = {}), s[g][k][y] = {
        times: o.array,
        values: d.array,
        stride: d.stride,
        arraySyntax: r.arraySyntax,
        indices: r.indices,
        interpolation: p ? p.array : null,
        inTangent: f ? f.array : null,
        outTangent: b ? b.array : null,
        inTangentStride: f ? f.stride : 0,
        outTangentStride: b ? b.stride : 0
      };
    }
    return s;
  }
  buildMatrixTracks(t, e, i, s) {
    const n = i.matrix.clone().transpose(), r = {};
    for (const l in e) {
      const o = e[l], d = o.times, u = o.values, h = o.stride;
      for (let m = 0, p = d.length; m < p; m++) {
        const f = d[m], b = m * h;
        if (r[f] === void 0 && (r[f] = {}), o.arraySyntax === !0) {
          const g = u[b], k = o.indices[0] + 4 * o.indices[1];
          r[f][k] = g;
        } else
          for (let g = 0; g < h; g++)
            r[f][g] = u[b + g];
      }
    }
    const a = this.prepareAnimationData(r, n), c = { name: t.uuid, keyframes: a };
    this.createKeyframeTracks(c, s);
  }
  buildTranslateTrack(t, e, i, s) {
    if (e.default && e.default.stride === 3) {
      const l = e.default, o = Array.from(l.times), d = Array.from(l.values), u = new _(
        t.uuid + ".position",
        o,
        d
      ), h = this.getInterpolationInfo(e);
      this.applyInterpolation(u, h, e), s.push(u);
      return;
    }
    const n = this.getTimesForAllAxes(e);
    if (n.length === 0) return;
    const r = [], a = this.getInterpolationInfo(e);
    for (let l = 0; l < n.length; l++) {
      const o = n[l], d = this.getValueAtTime(e.X, o, i.x), u = this.getValueAtTime(e.Y, o, i.y), h = this.getValueAtTime(e.Z, o, i.z);
      r.push(d, u, h);
    }
    const c = new _(
      t.uuid + ".position",
      n,
      r
    );
    this.applyInterpolation(c, a), s.push(c);
  }
  buildRotateTrack(t, e, i, s, n, r) {
    const a = i.ANGLE || i.default;
    if (!a) return;
    const c = Array.from(a.times);
    if (c.length === 0) return;
    const l = [];
    for (const f of n.transformOrder)
      if (n.transforms[f] === "rotate") {
        const g = n.transformData[f];
        l.push({
          sid: f,
          axis: new I(g.axis[0], g.axis[1], g.axis[2]),
          defaultAngle: g.angle
        });
      }
    const o = new j(), d = new j(), u = new j(), h = [], m = this.getInterpolationInfo(i);
    for (let f = 0; f < c.length; f++) {
      const b = c[f];
      o.identity();
      for (const g of l) {
        let k;
        g.sid === e ? k = this.getValueAtTime(a, b, g.defaultAngle) : k = g.defaultAngle;
        const y = O.degToRad(k);
        u.setFromAxisAngle(g.axis, y), o.multiply(u);
      }
      f > 0 && d.dot(o) < 0 && (o.x = -o.x, o.y = -o.y, o.z = -o.z, o.w = -o.w), d.copy(o), h.push(o.x, o.y, o.z, o.w);
    }
    const p = new J(
      t.uuid + ".quaternion",
      c,
      h
    );
    this.applyInterpolation(p, m), r.push(p);
  }
  buildScaleTrack(t, e, i, s) {
    if (e.default && e.default.stride === 3) {
      const l = e.default, o = Array.from(l.times), d = Array.from(l.values), u = new _(
        t.uuid + ".scale",
        o,
        d
      ), h = this.getInterpolationInfo(e);
      this.applyInterpolation(u, h, e), s.push(u);
      return;
    }
    const n = this.getTimesForAllAxes(e);
    if (n.length === 0) return;
    const r = [], a = this.getInterpolationInfo(e);
    for (let l = 0; l < n.length; l++) {
      const o = n[l], d = this.getValueAtTime(e.X, o, i.x), u = this.getValueAtTime(e.Y, o, i.y), h = this.getValueAtTime(e.Z, o, i.z);
      r.push(d, u, h);
    }
    const c = new _(
      t.uuid + ".scale",
      n,
      r
    );
    this.applyInterpolation(c, a), s.push(c);
  }
  getTimesForAllAxes(t) {
    let e = [];
    return t.X && (e = e.concat(Array.from(t.X.times))), t.Y && (e = e.concat(Array.from(t.Y.times))), t.Z && (e = e.concat(Array.from(t.Z.times))), t.ANGLE && (e = e.concat(Array.from(t.ANGLE.times))), t.default && (e = e.concat(Array.from(t.default.times))), e = [...new Set(e)].sort((i, s) => i - s), e;
  }
  getValueAtTime(t, e, i) {
    if (!t) return i;
    const s = t.times, n = t.values, r = t.interpolation;
    for (let a = 0; a < s.length; a++) {
      if (s[a] === e)
        return n[a];
      if (s[a] > e) {
        if (a === 0)
          return n[0];
        const c = a - 1, l = a, o = s[c], d = s[l], u = n[c], h = n[l], m = r ? r[c] : "LINEAR";
        if (m === "STEP")
          return u;
        if (m === "BEZIER" && t.inTangent && t.outTangent)
          return this.evaluateBezierComponent(t, c, l, o, d, e);
        {
          const p = (e - o) / (d - o);
          return u + p * (h - u);
        }
      }
    }
    return n[n.length - 1];
  }
  evaluateBezierComponent(t, e, i, s, n, r) {
    const a = t.values, c = t.inTangent, l = t.outTangent, o = t.inTangentStride || 1, d = a[e], u = a[i];
    let h, m, p, f;
    o === 2 ? (h = l[e * 2], m = l[e * 2 + 1], p = c[i * 2], f = c[i * 2 + 1]) : (h = s + (n - s) / 3, m = l[e], p = n - (n - s) / 3, f = c[i]);
    let b = (r - s) / (n - s);
    for (let A = 0; A < 8; A++) {
      const v = b * b, L = v * b, S = 1 - b, P = S * S, F = P * S * s + 3 * P * b * h + 3 * S * v * p + L * n, V = 3 * P * (h - s) + 6 * S * b * (p - h) + 3 * v * (n - p);
      if (Math.abs(V) < 1e-10) break;
      const W = F - r;
      if (Math.abs(W) < 1e-10) break;
      b = b - W / V, b = Math.max(0, Math.min(1, b));
    }
    const g = b * b, k = g * b, y = 1 - b, N = y * y;
    return N * y * d + 3 * N * b * m + 3 * y * g * f + k * u;
  }
  getInterpolationInfo(t) {
    const e = ["X", "Y", "Z", "ANGLE", "default"];
    let i = null, s = !0;
    for (const n of e) {
      const r = t[n];
      if (!r || !r.interpolation) continue;
      const a = r.interpolation;
      for (let c = 0; c < a.length; c++) {
        const l = a[c];
        i === null ? i = l : l !== i && (s = !1);
      }
    }
    return {
      type: i || "LINEAR",
      uniform: s
    };
  }
  applyInterpolation(t, e, i = null) {
    if (e.type === "STEP" && e.uniform)
      t.setInterpolation(ne);
    else if (e.type === "BEZIER" && e.uniform && i) {
      const s = i.default;
      s && s.inTangent && s.outTangent && (t.setInterpolation(re), t.settings = {
        inTangents: new Float32Array(s.inTangent),
        outTangents: new Float32Array(s.outTangent)
      });
    }
  }
  prepareAnimationData(t, e) {
    const i = [];
    for (const s in t)
      i.push({ time: parseFloat(s), value: t[s] });
    i.sort((s, n) => s.time - n.time);
    for (let s = 0; s < 16; s++)
      this.transformAnimationData(i, s, e.elements[s]);
    return i;
  }
  createKeyframeTracks(t, e) {
    const i = t.keyframes, s = t.name, n = [], r = [], a = [], c = [], l = this.position, o = this.quaternion, d = this.scale, u = this.matrix;
    for (let h = 0, m = i.length; h < m; h++) {
      const p = i[h], f = p.time, b = p.value;
      u.fromArray(b).transpose(), u.decompose(l, o, d), n.push(f), r.push(l.x, l.y, l.z), a.push(o.x, o.y, o.z, o.w), c.push(d.x, d.y, d.z);
    }
    return r.length > 0 && e.push(new _(s + ".position", n, r)), a.length > 0 && e.push(new J(s + ".quaternion", n, a)), c.length > 0 && e.push(new _(s + ".scale", n, c)), e;
  }
  transformAnimationData(t, e, i) {
    let s, n = !0, r, a;
    for (r = 0, a = t.length; r < a; r++)
      s = t[r], s.value[e] === void 0 ? s.value[e] = null : n = !1;
    if (n === !0)
      for (r = 0, a = t.length; r < a; r++)
        s = t[r], s.value[e] = i;
    else
      this.createMissingKeyframes(t, e);
  }
  createMissingKeyframes(t, e) {
    let i, s;
    for (let n = 0, r = t.length; n < r; n++) {
      const a = t[n];
      if (a.value[e] === null) {
        if (i = this.getPrev(t, n, e), s = this.getNext(t, n, e), i === null) {
          a.value[e] = s.value[e];
          continue;
        }
        if (s === null) {
          a.value[e] = i.value[e];
          continue;
        }
        this.interpolate(a, i, s, e);
      }
    }
  }
  getPrev(t, e, i) {
    for (; e >= 0; ) {
      const s = t[e];
      if (s.value[i] !== null) return s;
      e--;
    }
    return null;
  }
  getNext(t, e, i) {
    for (; e < t.length; ) {
      const s = t[e];
      if (s.value[i] !== null) return s;
      e++;
    }
    return null;
  }
  interpolate(t, e, i, s) {
    if (i.time - e.time === 0) {
      t.value[s] = e.value[s];
      return;
    }
    t.value[s] = (t.time - e.time) * (i.value[s] - e.value[s]) / (i.time - e.time) + e.value[s];
  }
  buildAnimationClip(t) {
    const e = [], i = t.name, s = t.end - t.start || -1, n = t.animations;
    for (let r = 0, a = n.length; r < a; r++) {
      const c = this.getAnimation(n[r]);
      for (let l = 0, o = c.length; l < o; l++)
        e.push(c[l]);
    }
    return new Z(i, s, e);
  }
  getAnimationClip(t) {
    return this.getBuild(this.library.clips[t], this.buildAnimationClip.bind(this));
  }
  buildController(t) {
    const e = {
      id: t.id
    }, i = this.library.geometries[e.id];
    return t.skin !== void 0 && (e.skin = this.buildSkin(t.skin), i.sources.skinIndices = e.skin.indices, i.sources.skinWeights = e.skin.weights), e;
  }
  buildSkin(t) {
    const i = {
      joints: [],
      // this must be an array to preserve the joint order
      indices: {
        array: [],
        stride: 4
      },
      weights: {
        array: [],
        stride: 4
      }
    }, s = t.sources, n = t.vertexWeights, r = n.vcount, a = n.v, c = n.inputs.JOINT.offset, l = n.inputs.WEIGHT.offset, o = t.sources[t.joints.inputs.JOINT], d = t.sources[t.joints.inputs.INV_BIND_MATRIX], u = s[n.inputs.WEIGHT.id].array;
    let h = 0, m, p, f;
    for (m = 0, f = r.length; m < f; m++) {
      const g = r[m], k = [];
      for (p = 0; p < g; p++) {
        const y = a[h + c], N = a[h + l], T = u[N];
        k.push({ index: y, weight: T }), h += 2;
      }
      for (k.sort(b), p = 0; p < 4; p++) {
        const y = k[p];
        y !== void 0 ? (i.indices.array.push(y.index), i.weights.array.push(y.weight)) : (i.indices.array.push(0), i.weights.array.push(0));
      }
    }
    for (t.bindShapeMatrix ? i.bindMatrix = new M().fromArray(t.bindShapeMatrix).transpose() : i.bindMatrix = new M().identity(), m = 0, f = o.array.length; m < f; m++) {
      const g = o.array[m], k = new M().fromArray(d.array, m * d.stride).transpose();
      i.joints.push({ name: g, boneInverse: k });
    }
    return i;
    function b(g, k) {
      return k.weight - g.weight;
    }
  }
  getController(t) {
    return this.getBuild(this.library.controllers[t], this.buildController.bind(this));
  }
  buildImage(t) {
    return t.build !== void 0 ? t.build : t.init_from;
  }
  getImage(t) {
    const e = this.library.images[t];
    return e !== void 0 ? this.getBuild(e, this.buildImage.bind(this)) : (console.warn("THREE.ColladaLoader: Couldn't find image with ID:", t), null);
  }
  buildEffect(t) {
    return t;
  }
  getEffect(t) {
    return this.getBuild(this.library.effects[t], this.buildEffect.bind(this));
  }
  getTextureLoader(t) {
    let e, i = t.slice((t.lastIndexOf(".") - 1 >>> 0) + 2);
    return i = i.toLowerCase(), i === "tga" ? e = this.tgaLoader : e = this.textureLoader, e;
  }
  buildMaterial(t) {
    const e = this.getEffect(t.url), i = e.profile.technique;
    let s;
    switch (i.type) {
      case "phong":
      case "blinn":
        s = new Q();
        break;
      case "lambert":
        s = new ae();
        break;
      default:
        s = new Y();
        break;
    }
    s.name = t.name || "";
    const n = this;
    function r(o, d = null) {
      const u = e.profile.samplers[o.id];
      let h = null;
      if (u !== void 0) {
        const m = e.profile.surfaces[u.source];
        h = n.getImage(m.init_from);
      } else
        console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."), h = n.getImage(o.id);
      if (h !== null) {
        const m = n.getTextureLoader(h);
        if (m !== void 0) {
          const p = m.load(h), f = o.extra;
          if (f !== void 0 && f.technique !== void 0 && n.isEmpty(f.technique) === !1) {
            const b = f.technique;
            p.wrapS = b.wrapU ? H : te, p.wrapT = b.wrapV ? H : te, p.offset.set(b.offsetU || 0, b.offsetV || 0), p.repeat.set(b.repeatU || 1, b.repeatV || 1);
          } else
            p.wrapS = H, p.wrapT = H;
          return d !== null && (p.colorSpace = d), p;
        } else
          return console.warn("THREE.ColladaLoader: Loader for texture %s not found.", h), null;
      } else
        return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:", o.id), null;
    }
    const a = i.parameters;
    for (const o in a) {
      const d = a[o];
      switch (o) {
        case "diffuse":
          d.color && s.color.fromArray(d.color), d.texture && (s.map = r(d.texture, q));
          break;
        case "specular":
          d.color && s.specular && s.specular.fromArray(d.color), d.texture && (s.specularMap = r(d.texture));
          break;
        case "bump":
          d.texture && (s.normalMap = r(d.texture));
          break;
        case "ambient":
          d.texture && (s.lightMap = r(d.texture, q));
          break;
        case "shininess":
          d.float && s.shininess && (s.shininess = d.float);
          break;
        case "emission":
          d.color && s.emissive && s.emissive.fromArray(d.color), d.texture && (s.emissiveMap = r(d.texture, q));
          break;
      }
    }
    U.colorSpaceToWorking(s.color, q), s.specular && U.colorSpaceToWorking(s.specular, q), s.emissive && U.colorSpaceToWorking(s.emissive, q);
    let c = a.transparent, l = a.transparency;
    if (l === void 0 && c && (l = {
      float: 1
    }), c === void 0 && l && (c = {
      opaque: "A_ONE",
      data: {
        color: [1, 1, 1, 1]
      }
    }), c && l)
      if (c.data.texture)
        s.transparent = !0;
      else {
        const o = c.data.color;
        switch (c.opaque) {
          case "A_ONE":
            s.opacity = o[3] * l.float;
            break;
          case "RGB_ZERO":
            s.opacity = 1 - o[0] * l.float;
            break;
          case "A_ZERO":
            s.opacity = 1 - o[3] * l.float;
            break;
          case "RGB_ONE":
            s.opacity = o[0] * l.float;
            break;
          default:
            console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.', c.opaque);
        }
        s.opacity < 1 && (s.transparent = !0);
      }
    if (i.extra !== void 0 && i.extra.technique !== void 0) {
      const o = i.extra.technique;
      for (const d in o) {
        const u = o[d];
        switch (d) {
          case "double_sided":
            s.side = u === 1 ? oe : ce;
            break;
          case "bump":
            s.normalMap = r(u.texture), s.normalScale = new G(1, 1);
            break;
        }
      }
    }
    return s;
  }
  getMaterial(t) {
    return this.getBuild(this.library.materials[t], this.buildMaterial.bind(this));
  }
  buildCamera(t) {
    let e;
    switch (t.optics.technique) {
      case "perspective":
        e = new D(
          t.optics.parameters.yfov,
          t.optics.parameters.aspect_ratio,
          t.optics.parameters.znear,
          t.optics.parameters.zfar
        );
        break;
      case "orthographic":
        let i = t.optics.parameters.ymag, s = t.optics.parameters.xmag;
        const n = t.optics.parameters.aspect_ratio;
        s = s === void 0 ? i * n : s, i = i === void 0 ? s / n : i, s *= 0.5, i *= 0.5, e = new le(
          -s,
          s,
          i,
          -i,
          // left, right, top, bottom
          t.optics.parameters.znear,
          t.optics.parameters.zfar
        );
        break;
      default:
        e = new D();
        break;
    }
    return e.name = t.name || "", e;
  }
  getCamera(t) {
    const e = this.library.cameras[t];
    return e !== void 0 ? this.getBuild(e, this.buildCamera.bind(this)) : (console.warn("THREE.ColladaLoader: Couldn't find camera with ID:", t), null);
  }
  buildLight(t) {
    let e;
    switch (t.technique) {
      case "directional":
        e = new fe();
        break;
      case "point":
        e = new he();
        break;
      case "spot":
        e = new ue();
        break;
      case "ambient":
        e = new de();
        break;
    }
    return t.parameters.color && e.color.copy(t.parameters.color), t.parameters.distance && (e.distance = t.parameters.distance), t.parameters.falloffAngle && (e.angle = O.degToRad(t.parameters.falloffAngle)), e;
  }
  getLight(t) {
    const e = this.library.lights[t];
    return e !== void 0 ? this.getBuild(e, this.buildLight.bind(this)) : (console.warn("THREE.ColladaLoader: Couldn't find light with ID:", t), null);
  }
  groupPrimitives(t) {
    const e = {};
    for (let i = 0; i < t.length; i++) {
      const s = t[i];
      e[s.type] === void 0 && (e[s.type] = []), e[s.type].push(s);
    }
    return e;
  }
  checkUVCoordinates(t) {
    let e = 0;
    for (let i = 0, s = t.length; i < s; i++)
      t[i].hasUV === !0 && e++;
    e > 0 && e < t.length && (t.uvsNeedsFix = !0);
  }
  buildGeometry(t) {
    const e = {}, i = t.sources, s = t.vertices, n = t.primitives;
    if (n.length === 0) return {};
    const r = this.groupPrimitives(n);
    for (const a in r) {
      const c = r[a];
      this.checkUVCoordinates(c), e[a] = this.buildGeometryType(c, i, s);
    }
    return e;
  }
  buildGeometryType(t, e, i) {
    const s = {}, n = { array: [], stride: 0 }, r = { array: [], stride: 0 }, a = { array: [], stride: 0 }, c = { array: [], stride: 0 }, l = { array: [], stride: 0 }, o = { array: [], stride: 4 }, d = { array: [], stride: 4 }, u = new me(), h = [];
    let m = 0;
    for (let p = 0; p < t.length; p++) {
      const f = t[p], b = f.inputs;
      let g = 0;
      switch (f.type) {
        case "lines":
        case "linestrips":
          g = f.count * 2;
          break;
        case "triangles":
          g = f.count * 3;
          break;
        case "polygons":
        case "polylist":
          for (let k = 0; k < f.count; k++) {
            const y = f.vcount[k];
            switch (y) {
              case 3:
                g += 3;
                break;
              case 4:
                g += 6;
                break;
              default:
                g += (y - 2) * 3;
                break;
            }
          }
          break;
        default:
          console.warn("THREE.ColladaLoader: Unknown primitive type:", f.type);
      }
      u.addGroup(m, g, p), m += g, f.material && h.push(f.material);
      for (const k in b) {
        const y = b[k];
        switch (k) {
          case "VERTEX":
            for (const N in i) {
              const T = i[N];
              switch (N) {
                case "POSITION":
                  const A = n.array.length;
                  if (this.buildGeometryData(f, e[T], y.offset, n.array), n.stride = e[T].stride, e.skinWeights && e.skinIndices && (this.buildGeometryData(f, e.skinIndices, y.offset, o.array), this.buildGeometryData(f, e.skinWeights, y.offset, d.array)), f.hasUV === !1 && t.uvsNeedsFix === !0) {
                    const v = (n.array.length - A) / n.stride;
                    for (let L = 0; L < v; L++)
                      a.array.push(0, 0);
                  }
                  break;
                case "NORMAL":
                  this.buildGeometryData(f, e[T], y.offset, r.array), r.stride = e[T].stride;
                  break;
                case "COLOR":
                  this.buildGeometryData(f, e[T], y.offset, l.array), l.stride = e[T].stride;
                  break;
                case "TEXCOORD":
                  this.buildGeometryData(f, e[T], y.offset, a.array), a.stride = e[T].stride;
                  break;
                case "TEXCOORD1":
                  this.buildGeometryData(f, e[T], y.offset, c.array), a.stride = e[T].stride;
                  break;
                default:
                  console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.', N);
              }
            }
            break;
          case "NORMAL":
            this.buildGeometryData(f, e[y.id], y.offset, r.array), r.stride = e[y.id].stride;
            break;
          case "COLOR":
            this.buildGeometryData(f, e[y.id], y.offset, l.array, !0), l.stride = e[y.id].stride;
            break;
          case "TEXCOORD":
            this.buildGeometryData(f, e[y.id], y.offset, a.array), a.stride = e[y.id].stride;
            break;
          case "TEXCOORD1":
            this.buildGeometryData(f, e[y.id], y.offset, c.array), c.stride = e[y.id].stride;
            break;
        }
      }
    }
    return n.array.length > 0 && u.setAttribute("position", new R(n.array, n.stride)), r.array.length > 0 && u.setAttribute("normal", new R(r.array, r.stride)), l.array.length > 0 && u.setAttribute("color", new R(l.array, l.stride)), a.array.length > 0 && u.setAttribute("uv", new R(a.array, a.stride)), c.array.length > 0 && u.setAttribute("uv1", new R(c.array, c.stride)), o.array.length > 0 && u.setAttribute("skinIndex", new R(o.array, o.stride)), d.array.length > 0 && u.setAttribute("skinWeight", new R(d.array, d.stride)), s.data = u, s.type = t[0].type, s.materialKeys = h, s;
  }
  buildGeometryData(t, e, i, s, n = !1) {
    const r = t.p, a = t.stride, c = t.vcount, l = this.tempColor;
    function o(h) {
      let m = r[h + i] * u;
      const p = m + u;
      for (; m < p; m++)
        s.push(d[m]);
      if (n) {
        const f = s.length - u - 1;
        l.setRGB(
          s[f + 0],
          s[f + 1],
          s[f + 2],
          q
        ), s[f + 0] = l.r, s[f + 1] = l.g, s[f + 2] = l.b;
      }
    }
    const d = e.array, u = e.stride;
    if (t.vcount !== void 0) {
      let h = 0;
      for (let m = 0, p = c.length; m < p; m++) {
        const f = c[m];
        if (f === 4) {
          const b = h + a * 0, g = h + a * 1, k = h + a * 2, y = h + a * 3;
          o(b), o(g), o(y), o(g), o(k), o(y);
        } else if (f === 3) {
          const b = h + a * 0, g = h + a * 1, k = h + a * 2;
          o(b), o(g), o(k);
        } else if (f > 4) {
          const b = [];
          for (let A = 0; A < f; A++) {
            const v = h + a * A, L = r[v] * u, S = d[L], P = d[L + 1], B = d[L + 2];
            b.push(new I(S, P, B));
          }
          const g = new I(), k = new pe();
          k.a = b[0], k.b = b[1], k.c = b[2], k.getNormal(g);
          const y = [];
          if (Math.abs(g.x) > Math.abs(g.y) && Math.abs(g.x) > Math.abs(g.z))
            for (let A = 0; A < f; A++)
              y.push(new G(b[A].y, b[A].z));
          else if (Math.abs(g.y) > Math.abs(g.z))
            for (let A = 0; A < f; A++)
              y.push(new G(b[A].x, b[A].z));
          else
            for (let A = 0; A < f; A++)
              y.push(new G(b[A].x, b[A].y));
          const N = $.isClockWise(y);
          N === !0 && y.reverse();
          const T = $.triangulateShape(y, []);
          for (let A = 0; A < T.length; A++) {
            const v = T[A];
            let L, S, P;
            N === !1 ? (L = v[0], S = v[1], P = v[2]) : (L = f - 1 - v[0], S = f - 1 - v[2], P = f - 1 - v[1]);
            const B = h + a * L, F = h + a * S, V = h + a * P;
            o(B), o(F), o(V);
          }
        }
        h += a * f;
      }
    } else
      for (let h = 0, m = r.length; h < m; h += a)
        o(h);
  }
  getGeometry(t) {
    return this.getBuild(this.library.geometries[t], this.buildGeometry.bind(this));
  }
  buildKinematicsModel(t) {
    return t.build !== void 0 ? t.build : t;
  }
  getKinematicsModel(t) {
    return this.getBuild(this.library.kinematicsModels[t], this.buildKinematicsModel.bind(this));
  }
  buildKinematicsScene(t) {
    return t.build !== void 0 ? t.build : t;
  }
  getKinematicsScene(t) {
    return this.getBuild(this.library.kinematicsScenes[t], this.buildKinematicsScene.bind(this));
  }
  setupKinematics() {
    const t = Object.keys(this.library.kinematicsModels)[0], e = Object.keys(this.library.kinematicsScenes)[0], i = Object.keys(this.library.visualScenes)[0];
    if (t === void 0 || e === void 0) return;
    const s = this.getKinematicsModel(t), n = this.getKinematicsScene(e), r = this.getVisualScene(i), a = n.bindJointAxis, c = {}, l = this.collada, o = this;
    for (let m = 0, p = a.length; m < p; m++) {
      const f = a[m], b = l.querySelector('[sid="' + f.target + '"]');
      if (b) {
        const g = b.parentElement;
        d(f.jointIndex, g);
      }
    }
    function d(m, p) {
      const f = p.getAttribute("name"), b = s.joints[m], g = o.buildTransformList(p);
      r.traverse(function(k) {
        k.name === f && (c[m] = {
          object: k,
          transforms: g,
          joint: b,
          position: b.zeroPosition
        });
      });
    }
    const u = new M(), h = this.matrix;
    this.kinematics = {
      joints: s && s.joints,
      getJointValue: function(m) {
        const p = c[m];
        if (p)
          return p.position;
        console.warn("THREE.ColladaLoader: Joint " + m + " doesn't exist.");
      },
      setJointValue: function(m, p) {
        const f = c[m];
        if (f) {
          const b = f.joint;
          if (p > b.limits.max || p < b.limits.min)
            console.warn("THREE.ColladaLoader: Joint " + m + " value " + p + " outside of limits (min: " + b.limits.min + ", max: " + b.limits.max + ").");
          else if (b.static)
            console.warn("THREE.ColladaLoader: Joint " + m + " is static.");
          else {
            const g = f.object, k = b.axis, y = f.transforms;
            h.identity();
            for (let N = 0; N < y.length; N++) {
              const T = y[N];
              if (T.sid && T.sid.indexOf(m) !== -1)
                switch (b.type) {
                  case "revolute":
                    h.multiply(u.makeRotationAxis(k, O.degToRad(p)));
                    break;
                  case "prismatic":
                    h.multiply(u.makeTranslation(k.x * p, k.y * p, k.z * p));
                    break;
                  default:
                    console.warn("THREE.ColladaLoader: Unknown joint type: " + b.type);
                    break;
                }
              else
                switch (T.type) {
                  case "matrix":
                    h.multiply(T.obj);
                    break;
                  case "translate":
                    h.multiply(u.makeTranslation(T.obj.x, T.obj.y, T.obj.z));
                    break;
                  case "scale":
                    h.scale(T.obj);
                    break;
                  case "rotate":
                    h.multiply(u.makeRotationAxis(T.obj, T.angle));
                    break;
                }
            }
            g.matrix.copy(h), g.matrix.decompose(g.position, g.quaternion, g.scale), c[m].position = p;
          }
        } else
          console.warn("THREE.ColladaLoader: Joint " + m + " does not exist.");
      }
    };
  }
  buildTransformList(t) {
    const e = [], i = this.collada.querySelector('[id="' + t.id + '"]');
    for (let s = 0; s < i.childNodes.length; s++) {
      const n = i.childNodes[s];
      if (n.nodeType !== 1) continue;
      let r, a;
      switch (n.nodeName) {
        case "matrix":
          r = E(n.textContent);
          const c = new M().fromArray(r).transpose();
          e.push({
            sid: n.getAttribute("sid"),
            type: n.nodeName,
            obj: c
          });
          break;
        case "translate":
        case "scale":
          r = E(n.textContent), a = new I().fromArray(r), e.push({
            sid: n.getAttribute("sid"),
            type: n.nodeName,
            obj: a
          });
          break;
        case "rotate":
          r = E(n.textContent), a = new I().fromArray(r);
          const l = O.degToRad(r[3]);
          e.push({
            sid: n.getAttribute("sid"),
            type: n.nodeName,
            obj: a,
            angle: l
          });
          break;
      }
    }
    return e;
  }
  buildSkeleton(t, e) {
    const i = [], s = [];
    let n, r, a;
    for (n = 0; n < t.length; n++) {
      const o = t[n];
      let d;
      if (this.hasNode(o))
        d = this.getNode(o), this.buildBoneHierarchy(d, e, i);
      else if (this.hasVisualScene(o)) {
        const h = this.library.visualScenes[o].children;
        for (let m = 0; m < h.length; m++) {
          const p = h[m];
          if (p.type === "JOINT") {
            const f = this.getNode(p.id);
            this.buildBoneHierarchy(f, e, i);
          }
        }
      } else
        console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:", o);
    }
    for (n = 0; n < e.length; n++)
      for (r = 0; r < i.length; r++)
        if (a = i[r], a.bone.name === e[n].name) {
          s[n] = a, a.processed = !0;
          break;
        }
    for (n = 0; n < i.length; n++)
      a = i[n], a.processed === !1 && (s.push(a), a.processed = !0);
    const c = [], l = [];
    for (n = 0; n < s.length; n++)
      a = s[n], c.push(a.bone), l.push(a.boneInverse);
    return new be(c, l);
  }
  buildBoneHierarchy(t, e, i) {
    t.traverse(function(s) {
      if (s.isBone === !0) {
        let n;
        for (let r = 0; r < e.length; r++) {
          const a = e[r];
          if (a.name === s.name) {
            n = a.boneInverse;
            break;
          }
        }
        n === void 0 && (n = new M()), i.push({ bone: s, boneInverse: n, processed: !1 });
      }
    });
  }
  buildNode(t) {
    const e = [], i = t.matrix, s = t.nodes, n = t.type, r = t.instanceCameras, a = t.instanceControllers, c = t.instanceLights, l = t.instanceGeometries, o = t.instanceNodes;
    for (let u = 0, h = s.length; u < h; u++)
      e.push(this.getNode(s[u]));
    for (let u = 0, h = r.length; u < h; u++) {
      const m = this.getCamera(r[u]);
      m !== null && e.push(m.clone());
    }
    for (let u = 0, h = a.length; u < h; u++) {
      const m = a[u], p = this.getController(m.id), f = this.getGeometry(p.id), b = this.buildObjects(f, m.materials), g = m.skeletons, k = p.skin.joints, y = this.buildSkeleton(g, k);
      for (let N = 0, T = b.length; N < T; N++) {
        const A = b[N];
        A.isSkinnedMesh && (A.bind(y, p.skin.bindMatrix), A.normalizeSkinWeights()), e.push(A);
      }
    }
    for (let u = 0, h = c.length; u < h; u++) {
      const m = this.getLight(c[u]);
      m !== null && e.push(m.clone());
    }
    for (let u = 0, h = l.length; u < h; u++) {
      const m = l[u], p = this.getGeometry(m.id), f = this.buildObjects(p, m.materials);
      for (let b = 0, g = f.length; b < g; b++)
        e.push(f[b]);
    }
    for (let u = 0, h = o.length; u < h; u++)
      e.push(this.getNode(o[u]).clone());
    let d;
    if (s.length === 0 && e.length === 1)
      d = e[0];
    else {
      d = n === "JOINT" ? new ge() : new z();
      for (let u = 0; u < e.length; u++)
        d.add(e[u]);
    }
    return d.name = n === "JOINT" ? t.sid : t.name, n !== "JOINT" && this.hasPivotTransforms(t) ? this.wrapWithTransformHierarchy(d, t) : (d.matrix.copy(i), d.matrix.decompose(d.position, d.quaternion, d.scale), d);
  }
  wrapWithTransformHierarchy(t, e) {
    const i = e.id;
    this.transformNodes[i] = {};
    const s = e.transformOrder, n = e.transformData, r = new z();
    r.name = e.name;
    let a = r;
    for (let c = 0; c < s.length; c++) {
      const l = s[c], o = n[l], d = new z();
      switch (d.name = e.name + "_" + l, o.type) {
        case "translate":
          d.position.set(o.x, o.y, o.z);
          break;
        case "rotate": {
          const u = new I(o.axis[0], o.axis[1], o.axis[2]), h = O.degToRad(o.angle);
          d.quaternion.setFromAxisAngle(u, h), d.userData.rotationAxis = u;
          break;
        }
        case "scale":
          d.scale.set(o.x, o.y, o.z);
          break;
        case "matrix": {
          new M().fromArray(o.array).transpose().decompose(d.position, d.quaternion, d.scale);
          break;
        }
      }
      this.transformNodes[i][l] = d, a.add(d), a = d;
    }
    return a.add(t), r;
  }
  resolveMaterialBinding(t, e) {
    const i = [];
    for (let s = 0, n = t.length; s < n; s++) {
      const r = e[t[s]];
      r === void 0 ? (console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.", t[s]), i.push(this.fallbackMaterial)) : i.push(this.getMaterial(r));
    }
    return i;
  }
  get fallbackMaterial() {
    return this._fallbackMaterial === void 0 && (this._fallbackMaterial = new Y({
      name: ie.DEFAULT_MATERIAL_NAME,
      color: 16711935
    })), this._fallbackMaterial;
  }
  buildObjects(t, e) {
    const i = [];
    for (const s in t) {
      const n = t[s], r = this.resolveMaterialBinding(n.materialKeys, e);
      if (r.length === 0 && (s === "lines" || s === "linestrips" ? r.push(new ee()) : r.push(new Q())), s === "lines" || s === "linestrips")
        for (let o = 0, d = r.length; o < d; o++) {
          const u = r[o];
          if (u.isMeshPhongMaterial === !0 || u.isMeshLambertMaterial === !0) {
            const h = new ee();
            h.color.copy(u.color), h.opacity = u.opacity, h.transparent = u.transparent, r[o] = h;
          }
        }
      const a = n.data.attributes.skinIndex !== void 0, c = r.length === 1 ? r[0] : r;
      let l;
      switch (s) {
        case "lines":
          l = new Te(n.data, c);
          break;
        case "linestrips":
          l = new Ae(n.data, c);
          break;
        case "triangles":
        case "polygons":
        case "polylist":
          a ? l = new ye(n.data, c) : l = new ke(n.data, c);
          break;
      }
      i.push(l);
    }
    return i;
  }
  hasNode(t) {
    return this.library.nodes[t] !== void 0;
  }
  getNode(t) {
    return this.getBuild(this.library.nodes[t], this.buildNode.bind(this));
  }
  buildVisualScene(t) {
    const e = new z();
    e.name = t.name;
    const i = t.children;
    for (let s = 0; s < i.length; s++) {
      const n = i[s];
      e.add(this.getNode(n.id));
    }
    return e;
  }
  hasVisualScene(t) {
    return this.library.visualScenes[t] !== void 0;
  }
  getVisualScene(t) {
    return this.getBuild(this.library.visualScenes[t], this.buildVisualScene.bind(this));
  }
  parseScene(t) {
    const e = C(t, "instance_visual_scene")[0];
    return this.getVisualScene(this.parseId(e.getAttribute("url")));
  }
  parseId(t) {
    return t.substring(1);
  }
  setupAnimations() {
    const t = this.library.clips;
    if (this.isEmpty(t) === !0) {
      if (this.isEmpty(this.library.animations) === !1) {
        const e = [];
        for (const i in this.library.animations) {
          const s = this.getAnimation(i);
          for (let n = 0, r = s.length; n < r; n++)
            e.push(s[n]);
        }
        this.buildDeferredPivotAnimationTracks(e), this.animations.push(new Z("default", -1, e));
      }
    } else
      for (const e in t)
        this.animations.push(this.getAnimationClip(e));
  }
  buildDeferredPivotAnimationTracks(t) {
    for (const e in this.deferredPivotAnimations) {
      const i = this.library.nodes[e];
      if (!i) continue;
      const s = this.deferredPivotAnimations[e];
      this.buildTransformHierarchyTracks(e, s, i, t);
    }
  }
  buildTransformHierarchyTracks(t, e, i, s) {
    const n = this.transformNodes[t];
    if (!n) {
      console.warn("THREE.ColladaLoader: Transform hierarchy not found for node:", t);
      return;
    }
    for (const r in e) {
      const a = n[r];
      if (!a) continue;
      const c = i.transforms[r], l = i.transformData[r], o = e[r];
      switch (c) {
        case "translate":
          this.buildHierarchyTranslateTrack(a, o, l, s);
          break;
        case "rotate":
          this.buildHierarchyRotateTrack(a, o, l, s);
          break;
        case "scale":
          this.buildHierarchyScaleTrack(a, o, l, s);
          break;
      }
    }
  }
  buildHierarchyTranslateTrack(t, e, i, s) {
    if (e.default && e.default.stride === 3) {
      const l = e.default, o = new _(
        t.uuid + ".position",
        Array.from(l.times),
        Array.from(l.values)
      ), d = this.getInterpolationInfo(e);
      this.applyInterpolation(o, d, e), s.push(o);
      return;
    }
    const n = this.getTimesForAllAxes(e);
    if (n.length === 0) return;
    const r = [], a = this.getInterpolationInfo(e);
    for (let l = 0; l < n.length; l++) {
      const o = n[l], d = this.getValueAtTime(e.X, o, i.x), u = this.getValueAtTime(e.Y, o, i.y), h = this.getValueAtTime(e.Z, o, i.z);
      r.push(d, u, h);
    }
    const c = new _(
      t.uuid + ".position",
      n,
      r
    );
    this.applyInterpolation(c, a), s.push(c);
  }
  buildHierarchyRotateTrack(t, e, i, s) {
    const n = e.ANGLE || e.default;
    if (!n) return;
    const r = Array.from(n.times);
    if (r.length === 0) return;
    const a = t.userData.rotationAxis || new I(i.axis[0], i.axis[1], i.axis[2]), c = new j(), l = new j(), o = [], d = this.getInterpolationInfo(e);
    for (let h = 0; h < r.length; h++) {
      const m = r[h], p = this.getValueAtTime(n, m, i.angle), f = O.degToRad(p);
      c.setFromAxisAngle(a, f), h > 0 && l.dot(c) < 0 && (c.x = -c.x, c.y = -c.y, c.z = -c.z, c.w = -c.w), l.copy(c), o.push(c.x, c.y, c.z, c.w);
    }
    const u = new J(
      t.uuid + ".quaternion",
      r,
      o
    );
    this.applyInterpolation(u, d), s.push(u);
  }
  buildHierarchyScaleTrack(t, e, i, s) {
    if (e.default && e.default.stride === 3) {
      const l = e.default, o = new _(
        t.uuid + ".scale",
        Array.from(l.times),
        Array.from(l.values)
      ), d = this.getInterpolationInfo(e);
      this.applyInterpolation(o, d, e), s.push(o);
      return;
    }
    const n = this.getTimesForAllAxes(e);
    if (n.length === 0) return;
    const r = [], a = this.getInterpolationInfo(e);
    for (let l = 0; l < n.length; l++) {
      const o = n[l], d = this.getValueAtTime(e.X, o, i.x), u = this.getValueAtTime(e.Y, o, i.y), h = this.getValueAtTime(e.Z, o, i.z);
      r.push(d, u, h);
    }
    const c = new _(
      t.uuid + ".scale",
      n,
      r
    );
    this.applyInterpolation(c, a), s.push(c);
  }
}
class Me extends ie {
  /**
   * Starts loading from the given URL and passes the loaded Collada asset
   * to the `onLoad()` callback.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function({scene:Group,animations:Array<AnimationClip>,kinematics:Object})} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Executed while the loading is in progress.
   * @param {onErrorCallback} onError - Executed when errors occur.
   */
  load(t, e, i, s) {
    const n = this, r = n.path === "" ? Ne.extractUrlBase(t) : n.path, a = new we(n.manager);
    a.setPath(n.path), a.setRequestHeader(n.requestHeader), a.setWithCredentials(n.withCredentials), a.load(t, function(c) {
      try {
        e(n.parse(c, r));
      } catch (l) {
        s ? s(l) : console.error(l), n.manager.itemError(t);
      }
    }, i, s);
  }
  /**
   * Parses the given Collada data and returns a result object holding the parsed scene,
   * an array of animation clips and kinematics.
   *
   * @param {string} text - The raw Collada data as a string.
   * @param {string} [path] - The asset path.
   * @return {?{scene:Group,animations:Array<AnimationClip>,kinematics:Object}} An object representing the parsed asset.
   */
  parse(t, e) {
    if (t.length === 0)
      return { scene: new xe() };
    const s = new Ce().parse(t);
    if (s === null)
      return null;
    const { library: n, asset: r, collada: a } = s, c = new Ee(this.manager);
    c.setPath(this.resourcePath || e).setCrossOrigin(this.crossOrigin);
    let l;
    X && (l = new X(this.manager), l.setPath(this.resourcePath || e));
    const o = new Ie(n, a, c, l), { scene: d, animations: u, kinematics: h } = o.compose();
    return d.animations = u, r.upAxis === "Z_UP" && (console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."), d.rotation.set(-Math.PI / 2, 0, 0)), d.scale.multiplyScalar(r.unit), {
      get animations() {
        return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."), u;
      },
      kinematics: h,
      library: n,
      scene: d
    };
  }
}
export {
  Me as ColladaLoader
};
