![Logo](../Slides/images/logo.png)

# Von Knockout zu AngularJS 

##### Table of Contents  
1. [Einleitung](#einleitung)  
2. [Schwerpunkte](#schwerpunkte)  
3. [MVVM](#MVVM)  
9. [Links](#links)  


<a name="einleitung"></a>
## 1. Einleitung

Das JavaScript-Framework Knockout.js konzentriert sich klar auf eine Aufgabe. Diese ist das Bereitstellen einer MVVM-Engine. Zusätzliche Funktionalitäten wie modularer Code oder clientseitiges Routing müssen durch weitere Bibliotheken hinzugefügt werden. Gerade für größere SinglePage Anwendungen sind zahlreiche weitere JavaScript-Libraries nach und nach hinzuzufügen. Wer auf Knockout.js als Technologie für eine SPA (Single-Page Application) gesetzt hat, kann durch den Zechnologie-Zoo mitunter etwas ernüchtert sein. 

Im Kontrast hierzu steht AngularJS. Dieses Framework bietet einen viel größeren Funktionsumfang. Es sind viele Funktionalitäten vorhanden, die für eine homogene SPA-Architektur verwendet werden können. AngularJS schickt sich an "Marktführer" für SPAs zu werden und diese Position dank der Unterstützung von Google auch zu behaupten.

In dieser Session (und mit dem Ihnen hier vorliegenden Handout) werden Knockout und AngularJS miteinander vergleichen. Anhand **ausgewählter Schwerpunkte**  sollen jeweilige Vorteile und Schwächen herausgearbeitet und mit Code-Beispielen belegt werden. Johannes Hoppe beleuchtet hierbei stets die Frage ob und wie ein Umstieg von Knockout auf Angular JS sinnvoll und machbar ist bzw. wäre. 

<a name="schwerpunkte"></a>
## 2. Schwerpunkte

Bei einer SPA-Architektur geht es im stets darum, möglichst viel Kontrollfluss- und Rendering-Logik vom Webserver auf den Browser zu bringen. Der Webserver liefert im Idealfall nur noch eine einziges HTML-Dokument aus, welches dann die Kontrolle übernimmt. Prinzipiell kann man die verschiedensten Entwurfsmuster (Pattern) auf diesem einzelnen HTML-Dokument anwenden. In der Praxis zeigt sich aber, dass das [MVC (Model-View-Controller)](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvc) Pattern die bevorzugte Umsetzung ist. Diese Enwurfsmuster hat sich auf dem Server als Standard durchgesetzt. Es ist keine schlechte Idee, bewährtes auf den Browser zu übertragen. Ebenso bieten die meisten SPA-Frameworks eine [MVVM (Model-View-ViewModel)](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvvm) Engine an. Diese beiden Prinzipien ergänzen sich gut. Durch ihre große inhaltliche Überschneidung bietet es sich an, beide Prinzipien in einen Topf zu werfen und kräftig umzurühren. Genauso sehen es auch die Macher von AngularJS, welche ihr Framework ganz pragmatisch ein [MVW (Model-View-Whatever (works for you))](https://plus.google.com/+AngularJS/posts/aZNVhj355G2) Framework nennen.       

Unter der Prämisse, das wir uns im Kontext einer **MVW** Anwendung bewegen, ist es legitim, folgende Schwerpunkte als Vergleichsgegenstand auszuwählen:

1. MVVM
2. Templating bzw. wiederverwendbarer Code
2. Routing
3. Modularer Code

<a name="MVVM"></a>
## 2. Schwerpunkte



```html
<b>
```


<a name="links"></a>
## 9. Links

MVC: http://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvc
MVVM: http://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvvm
MVW: https://plus.google.com/+AngularJS/posts/aZNVhj355G2

<hr>

_&copy; 2014, Johannes Hoppe_