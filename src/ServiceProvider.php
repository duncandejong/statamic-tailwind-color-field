<?php

namespace DtailDesign\StatamicTailwindColorField;

use DtailDesign\StatamicTailwindColorField\FieldTypes\TailwindColor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $vite = [
        'input' => [
            'resources/js/tailwind_color-fieldtype.js',
        ],
        'publicDirectory' => 'resources/dist',
        'hotFile' => __DIR__.'/../resources/dist/hot',
    ];

    public function bootAddon(): void
    {
        TailwindColor::register();
    }
}
