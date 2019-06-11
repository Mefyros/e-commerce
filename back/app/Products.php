<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Photos;

class Products extends Model
{
    //
    protected $table = 'products';
    protected $fillable = [
        'description',
        'price',
        'specs',
        'quantity',
        'name',
        'photos'
    ];
}
