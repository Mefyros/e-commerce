<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Categorie;

class SearchController extends Controller
{
    //
    public function byKeyword($keyword){
        $results = Product::where('name', 'REGEXP', $keyword)->paginate(10);
        if($results){
            return $results;
        }
    }
    public function byCategorie($id, $keyword){
        $categorie = Categorie::find($id);
        if($categorie){
            $results = $categorie->products()->where('sous_categorie.name', 'regexp', $keyword)->paginate(10);
            return $results;
        }
    }
}
