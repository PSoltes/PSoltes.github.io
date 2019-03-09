---
layout: post
title: "Automatizácia odosielania údajov z elektromera"
categories: [Java]
datum: "letny semester 2018/2019"
skolsky_projekt: false
predmet: ""
gitodkaz: "[Github odkaz tu](https://github.com/PSoltes/AutomatizaciaSolar)"
doclink: ""
docurl: ""
tags: [XML, SOAP, Certifikát]
---
Tento projekt sa venuje automatizovanému zadávaniu vyrobených hodnôt solárnej elektrárne. Deje sa tak cez rozhranie poskytované spoločnosťou [isom](https://www.okte.sk/sk/zber-a-sprava-udajov/kontaktne-udaje-isom/). Rozhranie ponúka webové služby založené na SOAP správach obsahujúcich rôzne dátové štruktúry (tu je to MSCONS). Následne je táto SOAP správa podpísaná elektronickým certifikátom a odoslaná.