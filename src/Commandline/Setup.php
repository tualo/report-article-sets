<?php

namespace Tualo\Office\ReportArticleSets\Commandline;

use Garden\Cli\Cli;
use Garden\Cli\Args;


use Tualo\Office\DS\Commandline\Setup as BaseSetup;

class Setup extends BaseSetup
{

    public static function getHeadLine(): string
    {
        return 'ReportArticleSets Setup Command';
    }
    public static function getCommands(Args $args): array
    {
        $parentCommands = parent::getCommands($args);
        return [
            ...$parentCommands,

            'install-sql-reportarticlesets',

        ];
    }

    public static function getCommandName(): string
    {
        return 'reportarticlesets';
    }
    public static function getCommandDescription(): string
    {
        return 'perform a complete reportarticlesets setup';
    }
    public static function setup(Cli $cli)
    {
        $cli->command(self::getCommandName())
            ->description(self::getCommandDescription())
            ->opt('client', 'only use this client', true, 'string');
        // ->opt('user', 'only use this user', true, 'string');
    }
}
