delimiter;

CREATE TABLE IF NOT EXISTS `blg_artikel_set` (
  `id` int(11) NOT NULL,
  `blg_sets` int(11) NOT NULL,
  `belegart` int(11) NOT NULL,
  `artikel` varchar(255) NOT NULL,
  `bemerkung` varchar(4000) NOT NULL,
  `anzahl` int(11) DEFAULT 0,
  `epreis` decimal(12,5) DEFAULT 0.00000,
  `position` int(11) DEFAULT 0,
  `handwerkeranteil` decimal(15,6) DEFAULT 0.0,
  `materialanteil` decimal(15,6)  DEFAULT 1.0,
  PRIMARY KEY (`id`),
  KEY `fk_blg_artikel_set_blg_sets` (`blg_sets`),
  KEY `fk_blg_artikel_artikel` (`artikel`),
  KEY `fk_blg_config_belegart` (`belegart`),
  CONSTRAINT `fk_blg_artikel_artikel` FOREIGN KEY (`artikel`) REFERENCES `artikelgruppen` (`gruppe`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_blg_artikel_set_blg_sets` FOREIGN KEY (`blg_sets`) REFERENCES `blg_sets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_blg_config_belegart` FOREIGN KEY (`belegart`) REFERENCES `blg_config` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ;