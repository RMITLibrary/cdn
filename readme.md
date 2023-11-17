### RMIT Library Digital Learning Object Respository CDN

Place objects by type in folders by authoring mode and collection as appropriate. 

Please add a readme file for each folder explaining the folder contents. This could be a link to the relebvant DLOR page or metadata export.

## URL friendly content please.

Please convert folder and file names so they render consistently in browsers and work on servers. Suggested:
* lower case
* N0 $peçia1 Čharacter$!
* convert-spaces-to-hyphens

[This tool is good](http://rapid-tools.net/online-remove-all-special-characters-replace-spaces-with-hyphens)

## Analytics for objects

1. Paste this code as high in the `<head>` of the page as possible:
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KNVBSW6K');</script>
<!-- End Google Tag Manager -->
```

2. Paste this code immediately after the opening `<body>` tag:
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KNVBSW6K"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

## To do

* Include Google analytics tag in head of html files
* Apply open graph data in the `<head>` of interactives [Open Graph explainer](https://ogp.me) and [Open Graph Generator](https://smallseotools.com/open-graph-generator/)
