---
layout: dokumentacia
doclink: "WPUB_Z3_DOC"
title: "Dokumentácia pre dokument v Docbook-u"
cviciaci: "doc. Ing. Marián Šimko, PhD."
predmet: "Webové Publikovanie"
rocnik: "tretí"
semester: "letný semester 2018/2019"
---

***Definícia elementov prezentácie***

Definícia je napísaná v RelaxNG a definuje jednoduchú a ľahko rozšíriteľnú štruktúru na tvorbu prezentácií. Obsahuje štruktúrne elementy ako typy slide-ov, stĺpce, tabuľku a zoznam ale aj sémantické elementy ako obrázok alebo paragraf. Štruktúra stĺpcov a obsahu, ktorý sa ukladá pod seba vytvára pre používateľa jednoduchý spôsob ako upraviť rozloženie jednotlivých slide-ov.

***Vhodnosť transformácií a parametrizácia***

Transformácie sú vo väčšine prípadov tvorené tak, aby sa pri prípadnom rozšírení definíce ľahko vkladali elementy dnu do nich, len pridaním template-u pre nový element. V transformáciách sa vyhýbam for cyklom a if podmienkam. Samotné transformácie ponúkajú možnosť parametrizácia a to zadaním: * hlavnej farby
            * vedľajšej farby
            * farby písma
            * inverznej farby písma
            * veľkosti písma
Niektoré elementy ako list umožňujú ich zmenu, cez ich atribúty.

***Ukážka vzorovej prezentácie a jej pdf výsledok***

Netransformované xml môžete nájsť [tu]("{{'prezentacia.xml'|prepend: site.baseurl}}") a jej [pdf výsledok]("{{'output.pdf'|prepend: site.baseurl}}") alebo [xhtml verzia]("{{'presentation/slide1.xhtml'|prepend: site.baseurl}}")