webpackJsonp([0x8269d3086757],{306:function(a,n){a.exports={data:{markdownRemark:{html:'<h1 id="queries"><a href="#queries" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Queries</h1>\n<p>To perform a query you need to have a root Query object that is an <code class="language-text">ObjectGraphType</code>.  Queries should only fetch data and never modify it.  You can only have a single root Query object.  Queries are executed in parallel.</p>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token keyword">query</span> <span class="token punctuation">{</span>\n  hero <span class="token punctuation">{</span>\n    id\n    name\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>If you have only a single query, you can use shorthand syntax.</p>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql">hero <span class="token punctuation">{</span>\n  id\n  name\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>To provide an <code class="language-text">Operation</code> name for your query, you add it after the <code class="language-text">query</code> keyword.  An <code class="language-text">Operation</code> name is optional if there is only a single operation in the request.</p>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token keyword">query</span> MyHeroQuery <span class="token punctuation">{</span>\n  hero <span class="token punctuation">{</span>\n    id\n    name\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>You can also provide that operation name to the <code class="language-text">ExecutionOptions</code>.</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token class-name"><span class="token keyword">var</span></span> schema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Schema</span> <span class="token punctuation">{</span> Query <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">StarWarsQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token class-name"><span class="token keyword">var</span></span> json <span class="token operator">=</span> <span class="token keyword">await</span> schema<span class="token punctuation">.</span><span class="token function">ExecuteAsync</span><span class="token punctuation">(</span>_ <span class="token operator">=></span>\n<span class="token punctuation">{</span>\n  _<span class="token punctuation">.</span>OperationName <span class="token operator">=</span> <span class="token string">"MyHeroQuery"</span><span class="token punctuation">;</span>\n  _<span class="token punctuation">.</span>Query <span class="token operator">=</span> <span class="token string">@"\n    query MyHeroQuery {\n      hero {\n        id\n        name\n      }\n    }\n  "</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StarWarsQuery</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ObjectGraphType</span></span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">StarWarsQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    <span class="token generic-method"><span class="token function">Field</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>DroidType<span class="token punctuation">></span></span></span><span class="token punctuation">(</span>\n      <span class="token string">"hero"</span><span class="token punctuation">,</span>\n      <span class="token named-parameter punctuation">resolve</span><span class="token punctuation">:</span> context <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Droid</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token string">"1"</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"R2-D2"</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',fields:{relativePath:"docs/getting-started/queries.md"}},site:{siteMetadata:{githubEditUrl:"https://github.com/graphql-dotnet/graphql-dotnet/edit/master/docs2/site"}}},pathContext:{relativePath:"docs/getting-started/queries.md"}}}});
//# sourceMappingURL=path---docs-getting-started-queries-098a243c7d34ec8e6e0a.js.map