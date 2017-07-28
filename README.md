<h1>⧊︎ CSS Heritage Normaliser</h1>

<h2><em>It is NOT a "CSS Zero/Reset"!</em></h2>

<ul>
<li>
<strong>How to use it?</strong>
You copy the content of <code>css_heritage_normaliser.css</code> and put it at the very top of your first to load CSS file, and you put your existing "CSS Zero/Reset" code right after it.
</li>
<li>
<strong>What it does?</strong>
It includes fixing many of the nodes, to inherit the CSS-properties of their containers, allowing your to write minimum amount of CSS-code to effect your web-application. In-fact it will normalise most of the browser-specifc quirks you experience daily.
</li>
<li>
<strong>Why should I use it?</strong>
Heritage fixing will allow you to create a more professional looking CSS-rule set,
limiting to a constructive CSS-building, instead of quirk-fixing,
</li>
<li>
<strong>Why it is not a "CSS Zero/Reset", It Sounds Just Like It!</strong>
<em>CSS Heritage Normaliser</em> does not set any effective styles for any of the elements.
It is like adding borax to your washing-machine..
..it won't replace your good-old washing detergent, it simply makes it more effective!
</li>
</ul>


Notes:
once you've set rules to your top element (<code>html</code> for example)
they will effect the rest of the chain.

<code>font</code> is a good example:
if you set <code>font: 16pt "Segoe UI";</code> to the <code>html</code>, it will also effect <code>pre</code> elements below it, which might not be desirable. BUT it will also effect all of the <code>input</code> and <code>textarea</code> elements around the document, without directly overriding it, allowing a much faster page-rendering.
<sub><em>It is because of that the <code>inherit</code> rule acts slightly different than any other rule, it renderes much much faster!</em></sub>

So a good choice for a "CSS Zero/Reset" code will be
<pre>
/*css_heritage_normaliser by EladKarako*/
*,*:active,{....}

/*CSS Zero/Reset */
pre{
  font-family: "Courier New", monosace;
}

/*actual CSS for the page*/
html{
  font: 16pt "Segoe UI", sans-serif;
}
</pre>


<br/>

<a href="https://paypal.me/e1adkarak0"><img src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png" alt="PayPal Donation"></a>
