<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Photos;

class Products extends Model
{
    //
    protected $table = 'products';
    protected $fillables = [
        'description',
        'price',
        'specs',
        'quantity',
        'name',
        'photos'
    ];
}
