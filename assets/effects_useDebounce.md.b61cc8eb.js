import{_ as n,r as t,c as e,a as p,b as a,o}from"./app.3968e24d.js";const m='{"title":"useDebounce","description":"","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api"},{"level":2,"title":"Params","slug":"params"},{"level":2,"title":"Result","slug":"result"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Code","slug":"code"}],"relativePath":"effects/useDebounce.md","lastUpdated":1635402072667}',c={},l=a(`<h1 id="usedebounce" tabindex="-1"><code>useDebounce</code> <a class="header-anchor" href="#usedebounce" aria-hidden="true">#</a></h1><p>\u5E26\u9632\u6296\u529F\u80FD\u7684\u72B6\u6001</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><div class="language-typescript"><pre><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">useDebounce</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
</code></pre></div><h2 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value</td><td>\u9ED8\u8BA4\u72B6\u6001\u503C</td><td>any</td><td></td></tr><tr><td>delay</td><td>\u9632\u6296\u5EF6\u65F6\u65F6\u95F4</td><td>number</td><td>200</td></tr></tbody></table><h2 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>state</td><td>\u5E26\u9632\u6296\u529F\u80FD\u7684 <code>Ref</code></td><td>Ref&lt;T&gt;</td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>`,9),u=a(`<h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>state<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useDebounce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-compositions&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">useDebounce</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      state
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2);function d(r,i,k,h,_,g){const s=t("UseDebounce",!0);return o(),e("div",null,[l,p(s),u])}var f=n(c,[["render",d]]);export{m as __pageData,f as default};