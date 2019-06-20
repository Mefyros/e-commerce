<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Categorie;

class SearchController extends Controller
{
    //
    public function byKeyword($keyword, Request $request){
        $results = Product::where('name', 'REGEXP', $keyword)->paginate(10);
        if($results){
            $temp = [];
            if($request->specs){
                foreach($results as $product){
                    foreach($request->specs as $key => $spec){
                        if(isset(json_decode($product->specs)->$key)){
                            if(json_decode($product->specs)->$key === $spec){
                                $temp[] = $product;
                            }
                        }
                    }
                }
                return $temp;
            }
            return $results;
        }
    }
    public function byCategorie($id, $keyword, Request $request){
        $categorie = Categorie::find($id);
        if($categorie){
            $results = $categorie->products()->where('products.name', 'regexp', $keyword)->paginate(10);
            return $results;
        }
        if($request->specs){
            var_dump($request->specs);
        }
    }
    public function inDescript($keyword, Request $request){
        $result = Product::where(
            'description', 'REGEXP', '[^a-zA-Z]'.strval($keyword).'[^a-zA-Z]'
        )
        ->orWhere(
            'description', 'REGEXP', '^'.strval($keyword).'[^a-zA-Z]'
        )
        ->orWhere(
            'description', 'REGEXP', '[^a-zA-Z]'.strval($keyword).'$'
        )
        ->get();
        return($result);
    }
}
