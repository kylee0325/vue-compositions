import{_ as s,r as t,c as p,a as e,b as n,o}from"./app.3968e24d.js";const y='{"title":"arrayToTree","description":"","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api"},{"level":2,"title":"Params","slug":"params"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Code","slug":"code"}],"relativePath":"utils/arrayToTree.md","lastUpdated":1635402072667}',c={},r=n(`__VP_STATIC_START__<h1 id="arraytotree" tabindex="-1">arrayToTree <a class="header-anchor" href="#arraytotree" aria-hidden="true">#</a></h1><hr><p>\u6570\u7EC4\u8F6C\u6811\u5F62\u7ED3\u6784\u6570\u636E\u7684\u51FD\u6570\uFF0C\u53EF\u81EA\u5B9A\u4E49\u4F20\u5165\u7236\u7EA7\u7684\u5B57\u6BB5\u3001id \u7684\u5B57\u6BB5\u3001\u5B50\u7EA7\u7684\u5B57\u6BB5\u3002\u8BE5\u51FD\u6570\u6240\u7528\u7B97\u6CD5\u7684\u590D\u6742\u5EA6\u4E3A O(n)\u3002</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><div class="language-typescript"><pre><code><span class="token function">arrayToTree</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> rootId<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
</code></pre></div><h2 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>list</td><td>\u6570\u7EC4</td><td>any[]</td><td>[]</td></tr><tr><td>rootId</td><td>\u6839\u8282\u70B9 ID</td><td>string | number | null</td><td>null</td></tr><tr><td>options</td><td>\u914D\u7F6E\u5BF9\u5E94\u7684 key \u7684\u5B57\u6BB5\u540D</td><td>string</td><td><code>{ parentKey: &#39;parent_id&#39;, childrenKey: &#39;children&#39;, idKey: &#39;id&#39; }</code></td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>__VP_STATIC_END__`,8),l=n(`__VP_STATIC_START__<h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> arrayToTree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-compositions&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        parent_id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        id<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;10&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        parent_id<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        parent_id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;2&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        parent_id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;3&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        parent_id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        id<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;4&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        parent_id<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        id<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;5&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
    <span class="token keyword">const</span> finalTree <span class="token operator">=</span> <span class="token function">arrayToTree</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> childrenKey<span class="token operator">:</span> <span class="token string">&#39;child&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>__VP_STATIC_END__`,2);function u(i,k,d,h,_,m){const a=t("ArrayToTree",!0);return o(),p("div",null,[r,e(a),l])}var g=s(c,[["render",u]]);export{y as __pageData,g as default};
