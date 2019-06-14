<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SubCategorie;
use App\Product;

class SubCategorieController extends Controller
{
    //
    public function create(Request $request){
        return SubCategorie::create([
            'name' => $request->name,
            'categorie_id' => $request->categorie_id,
        ]);
    }
    public function index(){
        return SubCategorie::all();
    }
    public function getProducts($id){
        $products = Product::where([
            'sub_categorie_id' => $id
        ])->get();
        return $products;
    }
    public function delete($id){
        $sub = SubCategorie::find($id);
        if(null === $sub){
            return ['error' => 'classe not found'];
        }
        $this->DeleteRelation($sub);
        $sub->delete();
        return ['deleted' => true];
    }
    public function DeleteRelation($sub){
        foreach($sub->products as $product){
            $product->delete();
        }
    }
}
