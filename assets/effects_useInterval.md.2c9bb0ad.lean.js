import{_ as s,r as t,c as p,a as e,b as a,o}from"./app.3968e24d.js";const v='{"title":"useInterval","description":"","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api"},{"level":2,"title":"Params","slug":"params"},{"level":2,"title":"Result","slug":"result"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Code","slug":"code"}],"relativePath":"effects/useInterval.md","lastUpdated":1635402072667}',c={},l=a(`__VP_STATIC_START__<h1 id="useinterval" tabindex="-1">useInterval <a class="header-anchor" href="#useinterval" aria-hidden="true">#</a></h1><hr><p>\u5BF9 <code>setInterval</code> \u7684\u7B80\u5355\u5C01\u88C5</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5728\u7EC4\u4EF6 <code>mounted</code> \u65F6\u8BBE\u7F6E\u5B9A\u65F6\u5668\uFF0C\u5E76\u5728\u7EC4\u4EF6 <code>unmounted</code> \u65F6\u6E05\u9664\u5B9A\u65F6\u5668</p></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><div class="language-typescript"><pre><code><span class="token keyword">const</span> <span class="token punctuation">[</span>clear<span class="token punctuation">,</span> start<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useInterval</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> delay<span class="token punctuation">,</span> immediate<span class="token punctuation">)</span>
</code></pre></div><h2 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>fn</td><td>\u5B9A\u65F6\u5668\u56DE\u8C03</td><td>Function</td><td></td></tr><tr><td>delay</td><td>\u5EF6\u65F6\u65F6\u95F4</td><td>number</td><td></td></tr><tr><td>immediate</td><td>\u662F\u5426\u7ACB\u5373\u6267\u884C\u56DE\u8C03\u5728\u5F00\u542F\u5B9A\u65F6\u5668</td><td>boolean</td><td>false</td></tr></tbody></table><h2 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>clear</td><td>\u7528\u4E8E\u6E05\u9664\u5B9A\u65F6\u5668</td><td>() =&gt; void</td></tr><tr><td>start</td><td>\u7528\u4E8E\u542F\u52A8\u5B9A\u65F6\u5668</td><td>() =&gt; void</td></tr><tr><td></td><td></td><td></td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>__VP_STATIC_END__`,11),u=a(`__VP_STATIC_START__<h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clear<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>stop<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>start<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>restart<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useInterval <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-compositions&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>clear<span class="token punctuation">,</span> start<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      count<span class="token punctuation">.</span>value<span class="token operator">++</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      count<span class="token punctuation">,</span>
      clear<span class="token punctuation">,</span>
      start
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>__VP_STATIC_END__`,2);function r(i,d,k,h,g,_){const n=t("UseInterval",!0);return o(),p("div",null,[l,e(n),u])}var f=s(c,[["render",r]]);export{v as __pageData,f as default};