webpackJsonp([0x6802da96b8c4],{309:function(n,a){n.exports={data:{markdownRemark:{html:'<h1 id="mutations"><a href="#mutations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mutations</h1>\n<p>To perform a mutation you need to have a root Mutation object that is an <code class="language-text">ObjectGraphType</code>.  Mutations make modifications to data and return a result.  You can only have a single root Mutation object.</p>\n<ul>\n<li>See the <a href="https://github.com/graphql-dotnet/examples/tree/master/src/StarWars">StarWars example</a> for more details.</li>\n<li>See the <a href="http://graphql.org/learn/queries/#mutations">official GraphQL documentation on mutations</a>.</li>\n</ul>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StarWarsSchema</span> <span class="token punctuation">:</span> <span class="token class-name">Schema</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">StarWarsSchema</span><span class="token punctuation">(</span><span class="token class-name">IDependencyResolver</span> resolver<span class="token punctuation">)</span>\n    <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>resolver<span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    Query <span class="token operator">=</span> resolver<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token punctuation">&lt;</span><span class="token class-name">StarWarsQuery</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    Mutation <span class="token operator">=</span> resolver<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token punctuation">&lt;</span><span class="token class-name">StarWarsMutation</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/// &lt;example></span>\n<span class="token comment">/// This is an example JSON request for a mutation</span>\n<span class="token comment">/// {</span>\n<span class="token comment">///   "query": "mutation ($human:HumanInput!){ createHuman(human: $human) { id name } }",</span>\n<span class="token comment">///   "variables": {</span>\n<span class="token comment">///     "human": {</span>\n<span class="token comment">///       "name": "Boba Fett"</span>\n<span class="token comment">///     }</span>\n<span class="token comment">///   }</span>\n<span class="token comment">/// }</span>\n<span class="token comment">/// &lt;/example></span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StarWarsMutation</span> <span class="token punctuation">:</span> <span class="token class-name">ObjectGraphType</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">StarWarsMutation</span><span class="token punctuation">(</span><span class="token class-name">StarWarsData</span> data<span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    <span class="token generic-method"><span class="token function">Field</span><span class="token punctuation">&lt;</span><span class="token class-name">HumanType</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>\n      <span class="token string">"createHuman"</span><span class="token punctuation">,</span>\n      arguments<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">QueryArguments</span><span class="token punctuation">(</span>\n        <span class="token keyword">new</span> <span class="token class-name">QueryArgument</span><span class="token operator">&lt;</span>NonNullGraphType<span class="token operator">&lt;</span>HumanInputType<span class="token operator">></span><span class="token operator">></span> <span class="token punctuation">{</span>Name <span class="token operator">=</span> <span class="token string">"human"</span><span class="token punctuation">}</span>\n      <span class="token punctuation">)</span><span class="token punctuation">,</span>\n      resolve<span class="token punctuation">:</span> context <span class="token operator">=</span><span class="token operator">></span>\n      <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> human <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetArgument</span><span class="token punctuation">&lt;</span><span class="token class-name">Human</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token string">"human"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> data<span class="token punctuation">.</span><span class="token function">AddHuman</span><span class="token punctuation">(</span>human<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HumanInputType</span> <span class="token punctuation">:</span> <span class="token class-name">InputObjectGraphType</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">HumanInputType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    Name <span class="token operator">=</span> <span class="token string">"HumanInput"</span><span class="token punctuation">;</span>\n    Field<span class="token operator">&lt;</span>NonNullGraphType<span class="token operator">&lt;</span>StringGraphType<span class="token operator">></span><span class="token operator">></span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token generic-method"><span class="token function">Field</span><span class="token punctuation">&lt;</span><span class="token class-name">StringGraphType</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token string">"homePlanet"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// in-memory data store</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StarWarsData</span>\n<span class="token punctuation">{</span>\n  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\n  <span class="token keyword">public</span> <span class="token class-name">Human</span> <span class="token function">AddHuman</span><span class="token punctuation">(</span><span class="token class-name">Human</span> human<span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    human<span class="token punctuation">.</span>Id <span class="token operator">=</span> Guid<span class="token punctuation">.</span><span class="token function">NewGuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    _humans<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>human<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> human<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>'}},pathContext:{relativePath:"docs/getting-started/mutations.md"}}}});
//# sourceMappingURL=path---docs-getting-started-mutations-6374ab751d84d778c4a7.js.map