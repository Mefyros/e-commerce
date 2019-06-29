<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Photos;

class Product extends Model
{
    //
    protected $table = 'products';
    protected $fillable = [
        'description',
        'price',
        'specs',
        'quantity',
        'name',
        'photos',
        'visit',
        'sub_categorie_id',
        'weight',
        'promo'
    ];
    public function subCategorie(){
        return $this->belongsTo('App\SubCategorie', 'sub_categorie_id');
    }
    public function Categorie(){
        return $this->hasOneThrough('App\Categorie', 'App\SubCategorie', 'id', 'id', 'categorie_id', 'sub_categorie_id');
    }
    public function Promo(){
        return $this->belongsTo('App\Promo', 'promo');
    }
}
