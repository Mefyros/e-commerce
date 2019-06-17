<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubCategorie extends Model
{
    //
    public $timestamps = false;
    protected $table = 'sous_categorie';
    protected $fillable = [
        'name',
        'categorie_id'
    ];
    public function categorie(){
        return $this->belongsTo('App\Categorie', 'categorie_id');
    }
    public function products(){
        return $this->hasMany('App\Product', 'sub_categorie_id', 'id');
    }
    public function specs(){
        return $this->hasManyThrough('App\Spec', 'App\CategorieSpec', 'categorie_id', 'id', 'id', 'spec_id');
    }
}
