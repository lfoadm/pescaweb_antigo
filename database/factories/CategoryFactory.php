<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Category;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Category::class, function (Faker $faker) {
    $word = $faker->word;
    $slug = Str::slug($word);
    return [
        'name' => $word,
        'slug' => $slug,
    ];
});
