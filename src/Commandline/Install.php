<?php

namespace Tualo\Office\ReportArticleSets\Commandline;

use Tualo\Office\Basic\ICommandline;
use Tualo\Office\Basic\CommandLineInstallSQL;

class Install extends CommandLineInstallSQL  implements ICommandline
{
    public static function getDir(): string
    {
        return dirname(__DIR__, 1);
    }
    public static $shortName  = 'reportarticlesets';
    public static $files = [
        'blg_sets' => 'setup blg_sets',
        'blg_artikel_set' => 'setup blg_artikel_set',

        'blg_sets.ds' => 'setup ds blg_sets',
        'blg_artikel_set.ds' => 'setup ds blg_artikel_set',


    ];
}
