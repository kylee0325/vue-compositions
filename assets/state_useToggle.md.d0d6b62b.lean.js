import{_ as s,r as t,c as p,a as o,b as n,o as e}from"./app.3968e24d.js";const f='{"title":"useToggle","description":"","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api"},{"level":2,"title":"Params","slug":"params"},{"level":2,"title":"Methods","slug":"methods"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Code","slug":"code"}],"relativePath":"state/useToggle.md","lastUpdated":1635402072667}',c={},l=n(`__VP_STATIC_START__<h1 id="usetoggle" tabindex="-1">useToggle <a class="header-anchor" href="#usetoggle" aria-hidden="true">#</a></h1><hr><p>\u7528\u4E8E\u5728\u4E24\u4E2A\u72B6\u6001\u4E4B\u95F4\u5207\u6362</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><div class="language-typescript"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> 
  state<span class="token punctuation">,</span> 
  toggle<span class="token punctuation">,</span> 
  setDefault<span class="token punctuation">,</span> 
  setRight 
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useToggle</span><span class="token punctuation">(</span>defaultValue<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> 
   state<span class="token punctuation">,</span> 
   toggle<span class="token punctuation">,</span> 
   setDefault<span class="token punctuation">,</span> 
   setRight 
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useToggle</span><span class="token punctuation">(</span>defaultValue<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> reverseValue<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>defaultValue</td><td>\u53EF\u9009\uFF0C\u4F20\u5165\u7684\u9ED8\u8BA4\u72B6\u6001\u503C</td><td>string | number | boolean | undefined | null</td><td>false</td></tr><tr><td>reverseValue</td><td>\u53EF\u9009\uFF0C\u4F20\u5165\u7684\u53D6\u53CD\u7684\u72B6\u6001\u503C</td><td>string | number | boolean | undefined | null</td><td></td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><p>\u8BE5 Hook \u8FD4\u56DE\u4EE5\u4E0B\u51FD\u6570\uFF1A</p><table><thead><tr><th>\u51FD\u6570\u540D</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>Toggle</td><td>\uFF08next?: any) =&gt; void</td><td>\u89E6\u53D1\u72B6\u6001\u66F4\u6539\u7684\u51FD\u6570\uFF0C\u63A5\u53D7\u4F20\u5165 <code>useToggle</code> \u7684\u4E24\u4E2A\u53C2\u6570\u503C\u4FEE\u6539\u72B6\u6001</td></tr><tr><td>setDefault</td><td>() =&gt; void</td><td>\u91CD\u7F6E\u56DE\u9ED8\u8BA4\u503C</td></tr><tr><td>setRight</td><td>() =&gt; void</td><td>\u8BBE\u7F6E\u4E3AreverseValue</td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>__VP_STATIC_END__`,11),u=n(`__VP_STATIC_START__<h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Boolean \u5207\u6362<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{state}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggle()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>toggle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setDefault<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>setDefault<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setRight<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>setRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u4EFB\u610F\u4E24\u503C\u76F4\u63A5\u5207\u6362<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{stringState}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggleString()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>toggle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggleString(<span class="token punctuation">&#39;</span>a<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>toggle a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggleString(<span class="token punctuation">&#39;</span>b<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>toggle b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setLeft<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>setDefault<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setAnother<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>setRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> useToggle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;composition-fn&#39;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">,</span>
        toggle<span class="token punctuation">,</span>
        setDefault<span class="token punctuation">,</span>
        setRight
      <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useToggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span>
        state<span class="token operator">:</span> stringState<span class="token punctuation">,</span>
        toggle<span class="token operator">:</span> toggleString<span class="token punctuation">,</span>
        setDefault<span class="token operator">:</span> setLeft<span class="token punctuation">,</span>
        setRight<span class="token operator">:</span> setAnother
      <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useToggle</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">,</span>
        toggle<span class="token punctuation">,</span>
        setDefault<span class="token punctuation">,</span>
        setRight<span class="token punctuation">,</span>
        stringState<span class="token punctuation">,</span>
        toggleString<span class="token punctuation">,</span>
        setLeft<span class="token punctuation">,</span>
        setAnother
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>__VP_STATIC_END__`,2);function k(i,g,r,d,h,b){const a=t("UseToggle",!0);return e(),p("div",null,[l,o(a),u])}var m=s(c,[["render",k]]);export{f as __pageData,m as default};