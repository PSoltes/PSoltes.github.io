---
layout: dokumentacia
doclink: "WPUB_Z2_DOC"
title: "Dokumentácia pre dokument v Docbook-u"
cviciaci: "doc. Ing. Marián Šimko, PhD."
predmet: "Webové Publikovanie"
rocnik: "tretí"
semester: "letný semester 2018/2019"
---

***Použité elementy***

Na vytvorenie hierarchie dokumentu som použil elementy ```<chapter>``` a do seba vnárajúce elementy ```<section>```. Prílohy a zoznamy boli automaticky generované Docbookom.

Na zvýraznenie textu som použil element ```<emphasis>``` a na zoznamy elementy ```<itemizedlist>``` a ```<listitem>```. Na tvorenie rovníc ```<subscript>``` a ```<superscript>```.

Poznámku pod čiarou som pridal pomocou ```<footnote>```, pričom táto poznámka bola umelo pridaná pre potreby tohoto projektu.

Odkazy na obrázky, rovnice a citácie som realizoval pomocou elementu ```<xref>```. Literatúru som zadefinoval pomocou elementov ```<bibliography>``` a ```<bibentry>```.

Tabuľky, obrázky a rovnice boli vložené pomocou elementov ```<figure>, <table>, <equation>``` respektíve.

Index bol vytvorený pomocou prázndného elementu ```<index/>``` a elementov ```<indexterm>```, ktoré obsahovali jednotlivé úrovne zaradenia.

***Úpravy šablóny***

V šablóne som odstránil z prvej strany neexistujúci obrázok a následne namiesto neho pridal kúsok prázdneho miesta.

Tiež som odstranil celé formátovanie nadpisov kapitol a príloh (chapappendix.title). Ktoré som nahradil ich osobitnými náhradami (appendix.title, chapter.title). A upravil som si zobrazovanie nadpisu kapitoly a referenciu sekcie.

```
<xsl:param name="local.l10n.xml" select="document('')"/> 

<l:i18n xmlns:l="http://docbook.sourceforge.net/xmlns/l10n/1.0">
  <l:l10n language="sk"> 
    <l:context name="xref-number-and-title"> 
      <l:template name="section" text="%n. %t"/> 
    </l:context>
    <l:context name="title-numbered"> 
      <l:template name="chapter" text="%n. %t"/> 
    </l:context>
  </l:l10n>
</l:i18n>
```

Tiež som povoli generáciu Zoznamu tabuliek a obrázkov

```
<xsl:param name="generate.toc">
 book      toc,title,figure,table
 </xsl:param>
```

A pridal template na oddelenie odstavcov a "centering" rovnice

```
<xsl:template match="processing-instruction('linebreak')">
  <fo:block/>
</xsl:template>

<xsl:template match="equation">
  <fo:block text-align="center">
    <xsl:apply-imports/>
  </fo:block>
</xsl:template>
```