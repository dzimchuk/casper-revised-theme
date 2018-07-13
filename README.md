# A fresh look on the classic 1.x [Casper](https://github.com/TryGhost/Casper) theme for [Ghost](https://github.com/TryGhost/Ghost).

## Features

- Floating top nav
- Disqus comments
- SVG icons
- More social links
- New footer

## Disqus

In order to enable [Disqus](https://disqus.com/) comments you need to provide your Disqus shortname by adding the following piece of code to the `Code Injection/Blog Header` section:

```
<script type="text/javascript">
     var disqus_shortname = 'your Disqus shortname';
</script>
```

## More social links in the footer

Ghost allows you to specify your Facebook and Twitter account in the General section of your blog's settings. These accounts will be displayed in the blog footer (next to the copyright statement). If you want more social accounts to be displayed there such as GitHub, LinkedIn or Google+ add their respective Urls to the `Code Injection/Blog Header` section:

```
<script type="text/javascript">
     var github_url = 'https://github.com/{your profile}';
     var linkedin_url = 'https://www.linkedin.com/in/{your profile}';
     var google_plus_url = 'https://plus.google.com/+{your profile}';
</script>
```

## Live reloading when developing a theme

If you're developing or updating a theme it may be useful to have Ghost automatically pick up changes as you copy your updated theme files to `content/themes/{your theme name}` directory. You can use [nodemon](https://github.com/remy/nodemon) to accomplish that.

```
npm install -g nodemon@latest

nodemon current/index.js --watch content/themes/casper-revised-theme --ext hbs,js,css
```

## Credits

SVG icons by [Font Awesome](https://fontawesome.com/), licensed under the [Creative Commons Attribution 4.0 International](https://fontawesome.com/license) license.