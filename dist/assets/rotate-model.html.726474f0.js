import{_ as a,o as t,c as p,b as e,a as n,d as o,e as c,r as l}from"../app.538f4fe4.mjs";const u={},i=n("h1",{id:"\u65CB\u8F6C\u6A21\u578B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u65CB\u8F6C\u6A21\u578B","aria-hidden":"true"},"#"),o(" \u65CB\u8F6C\u6A21\u578B")],-1),r=c(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue3dLoader</span>
    <span class="token attr-name">:rotation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rotation<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@load</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onLoad()<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">filePath</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/models/collada/elf/elf.dae<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> vue3dLoader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-3d-loader&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> rotation <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
rotation<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token operator">-</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>rotate<span class="token punctuation">)</span><span class="token punctuation">;</span>
  rotation<span class="token punctuation">.</span>value<span class="token punctuation">.</span>z <span class="token operator">-=</span> <span class="token number">0.01</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function k(d,v){const s=l("RotateModel");return t(),p("div",null,[i,e(s),r])}const b=a(u,[["render",k],["__file","rotate-model.html.vue"]]);export{b as default};
