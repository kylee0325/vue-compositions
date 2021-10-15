import{_ as s,r as t,c as p,a as e,b as n,o}from"./app.96448a19.js";const f='{"title":"useTimeoutFn","description":"","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api"},{"level":2,"title":"Params","slug":"params"},{"level":2,"title":"Result","slug":"result"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Code","slug":"code"}],"relativePath":"effects/useTimeoutFn.md","lastUpdated":1634283962756}',c={},u=n(`<h1 id="usetimeoutfn" tabindex="-1"><code>useTimeoutFn</code> <a class="header-anchor" href="#usetimeoutfn" aria-hidden="true">#</a></h1><hr><p>\u7528\u4E8E\u5728\u4E00\u6BB5\u65F6\u95F4\u540E\u6267\u884C\u56DE\u8C03</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><div class="language-typescript"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> start<span class="token punctuation">,</span> stop <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useTimeoutFn</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> delay<span class="token punctuation">,</span> immediate<span class="token punctuation">,</span> clearEffectWhenStop<span class="token punctuation">)</span>
</code></pre></div><h2 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>fn</td><td>\u56DE\u8C03</td><td>Function</td><td></td></tr><tr><td>delay</td><td>\u5B9A\u65F6\u65F6\u95F4</td><td>number</td><td></td></tr><tr><td>immediate</td><td>\u662F\u5426\u7ACB\u5373\u6CE8\u518C\u5B9A\u65F6\u5668</td><td>boolen</td><td>true</td></tr><tr><td>clearEffectWhenStop</td><td>\u8C03\u7528 <code>stop</code> \u65F6\u662F\u5426\u505C\u6B62\u5185\u90E8\u7684 <code>watch</code> \u76D1\u542C</td><td>boolean</td><td>false</td></tr></tbody></table><h2 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>start</td><td>\u5F00\u542F/\u91CD\u542F\u5B9A\u65F6\u5668</td><td>() =&gt; void</td></tr><tr><td>Stop</td><td>\u505C\u6B62\u5B9A\u65F6\u5668</td><td>() =&gt; void</td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>`,10),l=n(`<h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Is callback executed?: {{ executed }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>start<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>restart<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stop<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>stop<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useTimeoutFn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-compositions&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> executed <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> start<span class="token punctuation">,</span> stop <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useTimeoutFn</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      executed<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      executed<span class="token punctuation">,</span>
      <span class="token function-variable function">start</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        executed<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      stop
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2);function i(r,d,k,h,g,m){const a=t("UseTimeoutFn",!0);return o(),p("div",null,[u,e(a),l])}var b=s(c,[["render",i]]);export{f as __pageData,b as default};
