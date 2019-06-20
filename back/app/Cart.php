<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    //
    protected $table = 'user_cart';
    protected $fillable = [
        'product_id',
        'user_id',
        'quantity'
    ];
    public function product(){
        return $this->hasMany('App\Product', 'id', 'product_id');
    }
}
