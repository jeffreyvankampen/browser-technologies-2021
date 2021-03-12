### Doel 
Het doel van deze opdracht is om erachter komen wat voor aannames er zijn die wel of niet kloppen, dit wil ik bevestigen door mij in te leven in de functionaliteit van deze features.

## Features
De features die ik gekozen heb zijn custom fonts. En de feature kleur. Ik zoek een aantal high end websites en een aantal beginners websites waarbij ik documenteer wat de impact is van kleur en custom fonts. Blijft het dan een bruikbare website of verandert de totale interface drastisch? Daarnaast ben ik benieuwd wat de impact is van mijn eigen website. 

* Custom fonts 
* Kleur

### Onderzoek

## Custom fonts

Icons are Vector
There are big advantages to vector icons: resizable up and down without losing quality, extra sharp on retina displays, and small file size among them.

Icon Font	Inline SVG
Browsers consider it text, so the icons are anti-aliased as such. Can lead to icons not being as sharp as you might expect.	Straight up vector
In a recent personal example, while converting some icons from fonts to SVG on CodePen, some of the font icons were noticeably less sharp.

Winner
It all comes down to browser support. If you can go IE 9+ / Android 3+, inline SVG is better at pretty much everything than icon fonts. If you need the deeper browser support, I feel like an inline SVG fallback would be too big of a pain to be worth it (maintaining a PNG copy, inserting an additional element to display PNG version, hiding SVG element… it’s weighty).

TTF: TrueType Fonts, that were originally developed by Apple
OFT: OpenType Fonts, a relatively newer font that has been based on the TrueType standard
Original TTF	298kb	100%
WOFF	126kb	42%
WOFF2	77kb	25%

* Het type font verandert de performance van je website
* Het type vectoren of iconen kan het kwa resolutie anders weergeven, vectoren- of anti-alias

### Browser compatibility

![Schermafbeelding 2021-03-11 205017](https://user-images.githubusercontent.com/48793364/110845972-84904d00-82ab-11eb-84f9-81121d00fead.png)


## Fonts in websites

<img width="1389" alt="Schermafbeelding 2021-03-12 om 11 09 58" src="https://user-images.githubusercontent.com/48793364/110925458-81d13e80-8323-11eb-8885-eae5ac636049.png">
<img width="1639" alt="Schermafbeelding 2021-03-12 om 11 11 41" src="https://user-images.githubusercontent.com/48793364/110925634-be049f00-8323-11eb-9c44-2fe2ef66d4b0.png">


## Importeren

![Schermafbeelding 2021-03-11 204531 (1)](https://user-images.githubusercontent.com/48793364/110925484-8bf33d00-8323-11eb-8ba0-6b5372d607d4.png)
![Schermafbeelding 2021-03-11 204551](https://user-images.githubusercontent.com/48793364/110925490-8c8bd380-8323-11eb-85e6-1d00a3226755.png)
![Schermafbeelding 2021-03-11 204603](https://user-images.githubusercontent.com/48793364/110925492-8d246a00-8323-11eb-9cce-c83720c9eb9d.png)


### Kleur 

## Colorblind types

<img width="286" alt="Schermafbeelding 2021-03-12 om 11 23 40" src="https://user-images.githubusercontent.com/48793364/110927279-ba721780-8325-11eb-9eb0-b515e7016ce8.png">

<img width="1679" alt="Schermafbeelding 2021-03-12 om 11 25 12" src="https://user-images.githubusercontent.com/48793364/110927287-bd6d0800-8325-11eb-88c7-d92b7d18bbbf.png">


#### Website 1 TransferWise High-end

###### Impact

<img width="1680" alt="Schermafbeelding 2021-03-12 om 11 19 14" src="https://user-images.githubusercontent.com/48793364/110926773-19835c80-8325-11eb-948e-a8976bb90670.png">

#### Website 2 Amazon High-end

###### Impact

<img width="1680" alt="Schermafbeelding 2021-03-12 om 11 20 02" src="https://user-images.githubusercontent.com/48793364/110926739-0ec8c780-8325-11eb-989a-86d71770afea.png">


#### Website 4 Useable Design Beginner

###### Impact

<img width="1671" alt="Schermafbeelding 2021-03-12 om 11 18 13" src="https://user-images.githubusercontent.com/48793364/110926711-07a1b980-8325-11eb-8e74-ab4f78ef7dde.png">


#### Website 5 Portfolio Beginner

###### Impact

<img width="1680" alt="Schermafbeelding 2021-03-12 om 11 20 44" src="https://user-images.githubusercontent.com/48793364/110926698-040e3280-8325-11eb-8ae6-c79d15a60f5e.png">

#### Website 5 States

###### Impact

<img width="1370" alt="Schermafbeelding 2021-03-12 om 11 21 56" src="https://user-images.githubusercontent.com/48793364/110926878-3881ee80-8325-11eb-83c6-43d9e593d564.png">

### Oplossing

* Emphasize
* Text Readability. ...
* Text Overlaid On Background Images. ...
* Link Recognition. ...
* Form Placeholders.
* Use non-web fonts
* Use system fonts
* Use inheriting different/system fonts
* Color management sRGB
* Monitor calibration

<img width="747" alt="Schermafbeelding 2021-03-12 om 11 40 53" src="https://user-images.githubusercontent.com/48793364/110929372-2d7c8d80-8328-11eb-8c6a-8ba7c268da6d.png">


#### Bronnen

- https://css-tricks.com/icon-fonts-vs-svg/
- https://css-tricks.com/snippets/css/using-font-face/
- https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face
