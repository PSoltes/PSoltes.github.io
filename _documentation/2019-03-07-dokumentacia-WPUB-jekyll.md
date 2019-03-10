---
layout: dokumentacia
doclink: "WPUB_Z1_DOC"
title: "Dokumentácia pre statické sídlo v Jekylle"
cviciaci: "doc. Ing. Marián Šimko, PhD."
predmet: "Webové Publikovanie"
rocnik: "tretí"
semester: "letný semester 2018/2019"
---

***Použité layouty***

V tomto projekte sú použité 4 rôzne layouty. Prvým je základný layout _default.html_, od ktorého dedia všetky ostatné. Obsahuje metadáta o stránke a navigáciu a footer.  
Ďalším je layout _post.html_, ktorý je layoutom opisu projektu. Obsahuje zoznam, v ktorom sú informácie o projekte a dovoľuje pridať fotku, ak je to potrebné.
Ďalším layoutom je _hobby.html_, ktorý je layoutom pre odstavce o mojich hobby. Tento layout je zložený z jednoduchého odseku textu ale dovoľuje pridať video a galériu fotiek.
Posledným layoutom je layout dokumentácie, ktorý zasa pomocou zoznamu na začiatku opisuje niektoré informácie o projekte. Tento layout by sa pravdepodobne dal zapísať aj len použitím markdownu.

***Použité prvky***

V tomto projekte sú použité kolekcie na oddelenie jednotlivých príspevkov o hobby. Konkrétne _hobbies, ktorá obsahuje jednotlivé md súbory obsahujúce opis mojich hobby.  
Čo sa týka filtrov a tagov, tak je v tomto projekte použité množstvo control flow tagov ako 'if' napríklad na zobrazenie voliteľného obsahu alebo pri použití rôznych druhov dokumentácie  
```
if page.doclink !="" 
 assign doc = site.documentation | where_exp:"documentation", "documentation.doclink == page.doclink" | first 
 assign docurl = doc.url
 else 
 assign docurl = page.docurl
 endif
```
Použité filtre sú hlavne filtre prepend a append na úpravu linkov. Taktiež som použil filter where_exp na selektovanie postov podľa atribútu.
Premenné sú použité pri vyššie spomínaných linkoch, kde linky môžu byť rôznych druhov a tiež napríklad na uloženie selektovaných postov. Tiež premenné sú použité na prenos niektorých dát o postoch ako sú názvy projektov, tagy, kategórie.

Použité pluginy sú pluginy site-map, ktorým si tvorím xml súbor, ktorý by som mohol ponúknuť vyhľadávacím nástrojom na lepšie hľadanie mojej stránky a jemoji na použitie emotikonov v texte. Taktiež by som mohol použiť plugin na embednutie youtube videa, avšak rozhodol som sa proti tomu, lebo som chcel, aby video fungovalo aj na github pages (ak je to potrebné pre splnenie podmienok zadania, veľmi rád ho tam doplním).

***Výzor stránky***

Pre výzor stránky som použil predpripravené komponenty [Bootstrapu 4](https://getbootstrap.com/). Galériu obrázkov som použil zo stránky [jekyll codex](https://jekyllcodex.org/without-plugin/image-gallery/), pričom som si trochu upravil nimi pridané css a vložil ho do spoločného súboru main.css.