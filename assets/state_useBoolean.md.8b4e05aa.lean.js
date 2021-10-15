import{_ as s,r as t,c as e,d as p,e as a,o}from"./app.bba52c0c.js";const b='{"title":"useBoolean","description":"","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api"},{"level":2,"title":"Params","slug":"params"},{"level":2,"title":"Methods","slug":"methods"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Code","slug":"code"}],"relativePath":"state/useBoolean.md","lastUpdated":1634264537519}',c={},l=a(`__VP_STATIC_START__<h1 id="useboolean" tabindex="-1"><code>useBoolean</code> <a class="header-anchor" href="#useboolean" aria-hidden="true">#</a></h1><hr><p>\u7528\u4E8E\u7BA1\u7406 <code>Boolean</code> \u72B6\u6001\u7684 <code>Hook</code></p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><div class="language-typescript"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
  state<span class="token punctuation">,</span>
  toggle<span class="token punctuation">,</span>
  setTrue<span class="token punctuation">,</span>
  setFalse
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useBoolean</span><span class="token punctuation">(</span>defaultValue<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>defaultValue</td><td>\u521D\u59CB\u9ED8\u8BA4\u72B6\u6001</td><td>boolean</td><td>false</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><p>\u8BE5 Hook \u8FD4\u56DE\u4EE5\u4E0B\u51FD\u6570\uFF1A</p><table><thead><tr><th>\u51FD\u6570\u540D</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>toggle</td><td>(next?: boolean) =&gt; void</td><td>\u7528\u4E8E\u53CD\u8F6C\u72B6\u6001</td></tr><tr><td>setTrue</td><td>() =&gt; void</td><td>\u5C06\u72B6\u6001\u8BBE\u7F6E\u4E3A true</td></tr><tr><td>setFalse</td><td>() =&gt; void</td><td>\u5C06\u72B6\u6001\u8BBE\u7F6E\u4E3A false</td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>__VP_STATIC_END__`,11),u=a(`__VP_STATIC_START__<h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ state }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggle()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>toggle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setTrue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>True<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setFalse<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>False<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useBoolean <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-compositions&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">useBoolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>res<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>__VP_STATIC_END__`,2);function i(k,r,d,h,g,_){const n=t("UseBoolean",!0);return o(),e("div",null,[l,p(n),u])}var f=s(c,[["render",i]]);export{b as __pageData,f as default};
