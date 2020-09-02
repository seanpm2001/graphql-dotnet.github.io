webpackJsonp([33904618880309],{303:function(a,s){a.exports={data:{markdownRemark:{html:'<h1 id="objectfield-metadata"><a href="#objectfield-metadata" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Object/Field Metadata</h1>\n<p><code class="language-text">IGraphType</code> and <code class="language-text">FieldType</code> implement the <code class="language-text">IProvideMetadata</code> interface.  This allows you to add arbitrary information to a field or graph type.  This can be useful in combination with a validation rule or field middleware.</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IProvideMetadata</span>\n<span class="token punctuation">{</span>\n  <span class="token return-type class-name">IDictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">object</span><span class="token punctuation">></span></span> Metadata <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n  <span class="token return-type class-name">TType</span> <span class="token generic-method"><span class="token function">GetMetadata</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TType<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> key<span class="token punctuation">,</span> <span class="token class-name">TType</span> defaultValue <span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token type-expression class-name">TType</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">HasMetadata</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyGraphType</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ObjectGraphType</span></span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">MyGraphType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    Metadata<span class="token punctuation">[</span><span class="token string">"rule"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"value"</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',fields:{relativePath:"docs/getting-started/metadata.md"}},site:{siteMetadata:{githubEditUrl:"https://github.com/graphql-dotnet/graphql-dotnet/edit/master/docs2/site"}}},pathContext:{relativePath:"docs/getting-started/metadata.md"}}}});
//# sourceMappingURL=path---docs-getting-started-metadata-5bc64edd35be55467776.js.map