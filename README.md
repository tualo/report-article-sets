# report-article-sets

Dieses Paket verwaltet Datenstämme für Artikel-Positions-Vorgaben innerhalb der Tualo Office-Suite. Mit den Vorgaben (Sets) können Textbausteine und Positionen für Belege im Bezug zu Artikeln erstellt und verwaltet werden.

## Beschreibung

**report-article-sets** ist eine Komponente der Tualo Office-Suite, die es ermöglicht:

- **Artikel-Sets anzulegen**: Gruppierung von Artikeln mit vordefinieren Positionen
- **Belegpositionen zu verwalten**: Automatisierte Position-Vorgaben für verschiedene Belegartenzu definieren
- **Textbausteine zu nutzen**: Flexible Textbausteine für Belegpositionen basierend auf Artikeln
- **Kostenverteilung zu steuern**: Handwerker- und Materialanteile pro Position

## Features

- Verwaltung von Artikel-Position-Templates
- Verknüpfung mit Belegarten und Artikeln
- Flexible Bemerkungen und Positionen
- Kostenschlüsselverteilung (Handwerkeranteil, Materialanteil)
- CommandLine-Interface zur Datenverwaltung
- ExtJS-basiertes UI-Compiler-System

## Anforderungen

- PHP 7.4+
- `tualo/report` ^1.0 (Dependency)

## Installation

```bash
composer require tualo/report-article-sets
```

## Datenstruktur

### blg_sets
Definiert die Sets von Artikelpositionen für bestimmte Belegartenund Konfigurationen.

### blg_artikel_set  
Enthält die einzelnen Positionen eines Sets mit Artikelreferenz, Bemerkungen, Anzahl, Preisen und Kostenverteilung.

## Verwendung

Das Paket wird automatisch über den Composer Autoloader geladen und kann in der Tualo Office-Suite verwendet werden.

## Lizenz

MIT
