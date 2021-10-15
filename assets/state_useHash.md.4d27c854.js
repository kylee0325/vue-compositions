import{_ as n,r as t,c as e,a as p,b as a,o}from"./app.96448a19.js";const f='{"title":"useHash","description":"","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api"},{"level":2,"title":"Result","slug":"result"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Code","slug":"code"}],"relativePath":"state/useHash.md","lastUpdated":1634283962756}',c={},l=a(`<h1 id="usehash" tabindex="-1"><code>useHash</code> <a class="header-anchor" href="#usehash" aria-hidden="true">#</a></h1><hr><p>\u8FFD\u8E2A <code>location.hash</code> \u7684\u53D8\u5316</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><div class="language-typescript"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> hash<span class="token punctuation">,</span> setHash <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>hash</td><td>\u4E00\u4E2A\u53EA\u8BFB\u72B6\u6001\uFF0C\u5BF9\u5E94\u5F53\u524D <code>location.hash</code> \u7684\u503C</td><td>DeepReadonly&lt;Ref&lt;string&gt;&gt;</td></tr><tr><td>setHash</td><td>\u7528\u4E8E\u8BBE\u7F6E\u65B0\u7684 <code>hash</code> \u503C</td><td>\uFF08hash: string) =&gt; void</td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>`,8),u=a(`<h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setHash(<span class="token punctuation">&#39;</span>api<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>set hash to params<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useHash <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-compositions&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">useHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2);function i(r,d,h,k,_,g){const s=t("UseHash",!0);return o(),e("div",null,[l,p(s),u])}var v=n(c,[["render",i]]);export{f as __pageData,v as default};
