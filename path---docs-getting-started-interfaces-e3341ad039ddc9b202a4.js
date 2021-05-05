webpackJsonp([0x79b9b90f62df],{321:function(n,a){n.exports={data:{markdownRemark:{html:'<h1 id="interfaces"><a href="#interfaces" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Interfaces</h1>\n<p>A GraphQL Interface is an abstract type that includes a certain set of fields that a type\nmust include to implement the interface.</p>\n<p>Here is an interface that represents a <code class="language-text">Character</code> in the StarWars universe.</p>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token keyword">interface</span> <span class="token class-name">Character</span> <span class="token punctuation">{</span>\n  <span class="token attr-name">id</span><span class="token punctuation">:</span> ID<span class="token operator">!</span>\n  <span class="token attr-name">name</span><span class="token punctuation">:</span> String<span class="token operator">!</span>\n  <span class="token attr-name">friends</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>Character<span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CharacterInterface</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">InterfaceGraphType<span class="token punctuation">&lt;</span>StarWarsCharacter<span class="token punctuation">></span></span></span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">CharacterInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    Name <span class="token operator">=</span> <span class="token string">"Character"</span><span class="token punctuation">;</span>\n    <span class="token function">Field</span><span class="token punctuation">(</span>d <span class="token operator">=></span> d<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Description</span><span class="token punctuation">(</span><span class="token string">"The id of the character."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">Field</span><span class="token punctuation">(</span>d <span class="token operator">=></span> d<span class="token punctuation">.</span>Name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Description</span><span class="token punctuation">(</span><span class="token string">"The name of the character."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token generic-method"><span class="token function">Field</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ListGraphType<span class="token punctuation">&lt;</span>CharacterInterface<span class="token punctuation">></span><span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token string">"friends"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Any type that implements <code class="language-text">Character</code> needs to have these exact fields, arguments, and return types.</p>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token keyword">type</span> <span class="token class-name">Droid</span> <span class="token keyword">implements</span> <span class="token class-name">Character</span> <span class="token punctuation">{</span>\n  <span class="token attr-name">id</span><span class="token punctuation">:</span> ID<span class="token operator">!</span>\n  <span class="token attr-name">name</span><span class="token punctuation">:</span> String<span class="token operator">!</span>\n  <span class="token attr-name">friends</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>Character<span class="token punctuation">]</span>\n  <span class="token attr-name">primaryFunction</span><span class="token punctuation">:</span> String\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DroidType</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ObjectGraphType<span class="token punctuation">&lt;</span>Droid<span class="token punctuation">></span></span></span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">DroidType</span><span class="token punctuation">(</span><span class="token class-name">IStarWarsData</span> data<span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    Name <span class="token operator">=</span> <span class="token string">"Droid"</span><span class="token punctuation">;</span>\n    Description <span class="token operator">=</span> <span class="token string">"A mechanical creature in the Star Wars universe."</span><span class="token punctuation">;</span>\n\n    <span class="token function">Field</span><span class="token punctuation">(</span>d <span class="token operator">=></span> d<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Description</span><span class="token punctuation">(</span><span class="token string">"The id of the droid."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">Field</span><span class="token punctuation">(</span>d <span class="token operator">=></span> d<span class="token punctuation">.</span>Name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Description</span><span class="token punctuation">(</span><span class="token string">"The name of the droid."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token generic-method"><span class="token function">Field</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ListGraphType<span class="token punctuation">&lt;</span>CharacterInterface<span class="token punctuation">></span><span class="token punctuation">></span></span></span><span class="token punctuation">(</span>\n      <span class="token string">"friends"</span><span class="token punctuation">,</span>\n      <span class="token named-parameter punctuation">resolve</span><span class="token punctuation">:</span> context <span class="token operator">=></span> data<span class="token punctuation">.</span><span class="token function">GetFriends</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Source<span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">Field</span><span class="token punctuation">(</span>d <span class="token operator">=></span> d<span class="token punctuation">.</span>PrimaryFunction<span class="token punctuation">,</span> <span class="token named-parameter punctuation">nullable</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Description</span><span class="token punctuation">(</span><span class="token string">"The primary function of the droid."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token generic-method"><span class="token function">Interface</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>CharacterInterface<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="registertype"><a href="#registertype" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>RegisterType</h2>\n<p>When the Schema is built, it looks at the "root" types (Query, Mutation, Subscription) and\ngathers all of the GraphTypes they expose. Often when you are working with an interface type\nthe concrete types are not exposed on the root types (or any of their children). Since those\nconcrete types are never exposed in the type graph the Schema doesn\'t know they exist. This\nis what the <code class="language-text">RegisterType&lt;&gt;</code> method on the Schema is for.  By using <code class="language-text">RegisterType&lt;&gt;</code>, it\ntells the Schema about the specific type and it will properly add it to the <code class="language-text">PossibleTypes</code>\ncollection on the interface type when the Schema is initialized.</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StarWarsSchema</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Schema</span></span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">StarWarsSchema</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    Query <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">StarWarsQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token generic-method"><span class="token function">RegisterType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>DroidType<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="istypeof"><a href="#istypeof" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>IsTypeOf</h2>\n<p><code class="language-text">IsTypeOf</code> is a function which helps resolve the implementing GraphQL type during execution.\nFor example, when you have a field that returns a GraphQL Interface the engine needs to know\nwhich concrete Graph Type to use.  So if you have a <code class="language-text">Character</code> interface that is implemented\nby both <code class="language-text">Human</code> and <code class="language-text">Droid</code> types, the engine needs to know which graph type to choose.\nThe data object being mapped is passed to the <code class="language-text">IsTypeOf</code> function which should return a boolean value.</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DroidType</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ObjectGraphType</span></span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">DroidType</span><span class="token punctuation">(</span><span class="token class-name">IStarWarsData</span> data<span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    Name <span class="token operator">=</span> <span class="token string">"Droid"</span><span class="token punctuation">;</span>\n\n    <span class="token range operator">..</span><span class="token punctuation">.</span>\n\n    <span class="token generic-method"><span class="token function">Interface</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>CharacterInterface<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    IsTypeOf <span class="token operator">=</span> obj <span class="token operator">=></span> obj <span class="token keyword">is</span> <span class="token class-name">Droid</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<blockquote>\n<p><code class="language-text">ObjectGraphType&lt;T&gt;</code> provides a default implementation of <code class="language-text">IsTypeOf</code> for you.</p>\n</blockquote>\n<p>An alternate to using <code class="language-text">IsTypeOf</code> is instead implementing <code class="language-text">ResolveType</code> on the Interface\nor Union. See the <code class="language-text">ResolveType</code> section for more details.</p>\n<h2 id="resolvetype"><a href="#resolvetype" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ResolveType</h2>\n<p>An alternate to using <code class="language-text">IsTypeOf</code> is implementing <code class="language-text">ResolveType</code> on the Interface or Union.\nThe major difference is <code class="language-text">ResolveType</code> is required to be exhaustive.  If you add another type\nthat implements an Interface you are required to alter the Interface for that new type to be resolved.</p>\n<blockquote>\n<p>If a type implements <code class="language-text">ResolveType</code> then any <code class="language-text">IsTypeOf</code> implementation is ignored.</p>\n</blockquote>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CharacterInterface</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">InterfaceGraphType<span class="token punctuation">&lt;</span>StarWarsCharacter<span class="token punctuation">></span></span></span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">CharacterInterface</span><span class="token punctuation">(</span>\n    <span class="token class-name">DroidType</span> droidType<span class="token punctuation">,</span>\n    <span class="token class-name">HumanType</span> humanType<span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    Name <span class="token operator">=</span> <span class="token string">"Character"</span><span class="token punctuation">;</span>\n\n    <span class="token range operator">..</span><span class="token punctuation">.</span>\n\n    ResolveType <span class="token operator">=</span> obj <span class="token operator">=></span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">is</span> <span class="token class-name">Droid</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> droidType<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">is</span> <span class="token class-name">Human</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> humanType<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ArgumentOutOfRangeException</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"Could not resolve graph type for </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">obj<span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Name</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',fields:{relativePath:"docs/getting-started/interfaces.md"}},site:{siteMetadata:{githubEditUrl:"https://github.com/graphql-dotnet/graphql-dotnet/edit/master/docs2/site"}}},pathContext:{relativePath:"docs/getting-started/interfaces.md"}}}});
//# sourceMappingURL=path---docs-getting-started-interfaces-e3341ad039ddc9b202a4.js.map