## Uitleg

Voor opdracht 2 ga je proberen het Web te laten 'breken' door (browser) features bewust uit te zetten. Wat gebeurt er als images, custom fonts, JavaScript, kleur, breedband internet niet optimaal werken? En hoe ziet een website er uit met een screenreader?

- [Opdracht 2 - Breek het Web](course/Opdracht2.md)\

## Doel 
Het doel van deze opdracht is om erachter komen wat voor aannames er zijn die wel of niet kloppen, dit wil ik bevestigen door mij in te leven in de functionaliteit van deze features.

## Features
De features die ik gekozen heb zijn custom fonts. En de feature kleur. Ik zoek een aantal high end websites en een aantal beginners websites waarbij ik documenteer wat de impact is van kleur en custom fonts. Blijft het dan een bruikbare website of verandert de totale interface drastisch? Daarnaast ben ik benieuwd wat de impact is van mijn eigen website. 

* Custom fonts 
* Kleur
* 
## Onderzoek

### Custom fonts


Icons are Vector
There are big advantages to vector icons: resizable up and down without losing quality, extra sharp on retina displays, and small file size among them.

Icon Font	Inline SVG
Browsers consider it text, so the icons are anti-aliased as such. Can lead to icons not being as sharp as you might expect.	Straight up vector
In a recent personal example, while converting some icons from fonts to SVG on CodePen, some of the font icons were noticeably less sharp.

Winner
It all comes down to browser support. If you can go IE 9+ / Android 3+, inline SVG is better at pretty much everything than icon fonts. If you need the deeper browser support, I feel like an inline SVG fallback would be too big of a pain to be worth it (maintaining a PNG copy, inserting an additional element to display PNG version, hiding SVG element… it’s weighty).





## Criteria
- Onderzoek minimaal 2 features 
- Zoek uit welke problemen ze kunnen veroorzaken (verzamel cijfers, meningen, ervaringen)
- Zoek uit hoe je dit kunt testen (hoe kun je een feature ‘uitzetten’)
- Vind een aantal sites waar dit ook problemen oplevert (uit je directe omgeving)
- Beschrijf hoe je dit kan fiksen
- Neem je bevindingen en voorbeelden mee naar de les, de resultaten bespreken we in clubjes.


#### Website 1 Apple High-end

###### Impact

###### Oplossing


#### Website 2 Amazon High-end

###### Impact

###### Oplossing


#### Website 4 Useable Design Beginner

###### Impact

###### Oplossing


#### Website 5 Portfolio Beginner

###### Impact

###### Oplossing


#### Bronnen

https://css-tricks.com/icon-fonts-vs-svg/
https://css-tricks.com/snippets/css/using-font-face/
https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face
