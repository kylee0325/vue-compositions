import{_ as s,r as t,c as e,a as p,b as a,o}from"./app.96448a19.js";const m='{"title":"useLocalStorage","description":"","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api"},{"level":2,"title":"Params","slug":"params"},{"level":2,"title":"Result","slug":"result"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Code","slug":"code"}],"relativePath":"storage/useLocalStorage.md","lastUpdated":1634283962756}',c={},l=a(`__VP_STATIC_START__<h1 id="uselocalstorage" tabindex="-1"><code>useLocalStorage</code> <a class="header-anchor" href="#uselocalstorage" aria-hidden="true">#</a></h1><p>\u5177\u5907\u54CD\u5E94\u5F0F\u529F\u80FD\u7684 <code>localStorage</code> \u72B6\u6001</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><div class="language-typescript"><pre><code><span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useLocalStorage</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
</code></pre></div><h2 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>key</td><td>\u5B58\u8FDB <code>localStorage</code> \u4E2D\u7684 <code>key</code></td><td>string</td><td></td></tr><tr><td>val</td><td>\u5B58\u8FDB <code>localStorage</code> \u4E2D\u7684 <code>val</code>,\u4F1A\u4F7F\u7528 <code>JSON.stringify</code> \u8FDB\u884C\u5E8F\u5217\u5316</td><td>any</td><td></td></tr></tbody></table><h2 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>state</td><td>\u5B58\u8FDB <code>localStorage</code> \u4E2D\u7684 <code>val</code>\uFF0C\u4ECE <code>localStorage</code> \u4E2D\u53D6\u51FA\u65F6\u4F1A\u8FDB\u884C <code>JSON.parse</code> \u53CD\u5E8F\u5217\u5316, \u53EA\u8BFB</td><td>DeepReadonly&lt;Ref&lt;T | null&gt;&gt;</td></tr><tr><td>setState</td><td>\u66F4\u65B0 <code>localStorage</code>\uFF0C\u540C\u65F6 <code>state</code> \u4E5F\u4F1A\u66F4\u65B0\uFF0C \u4E0D\u4F20\u53C2\u6570\u5219\u7B49\u540C\u4E8E <code>removeItem</code></td><td>(Val?: T) =&gt; void</td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>__VP_STATIC_END__`,9),u=a(`__VP_STATIC_START__<h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u5C06\u6570\u636E\u6301\u4E45\u5316\u5230 localStorage \u4E2D<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u5237\u65B0\u9875\u9762\u80FD\u62FF\u5230\u5B58\u5728 localStorage \u4E2D\u7684\u72B6\u6001<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update(value)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>update<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>remove<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> useLocalStorage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-compositions&#39;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> update<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useLocalStorage</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        value<span class="token punctuation">,</span>
        update
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>__VP_STATIC_END__`,2);function d(r,i,k,g,h,_){const n=t("UseLocalStorage",!0);return o(),e("div",null,[l,p(n),u])}var S=s(c,[["render",d]]);export{m as __pageData,S as default};
