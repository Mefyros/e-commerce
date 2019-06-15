<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Categorie;
use App\SubCategorie;
use App\Product;

class CategorieController extends Controller
{
    //
    public function create(Request $request){
        return Categorie::create([
            'name' => $request->name,
            'classe_id' => $request->classe_id,
        ]);
    }
    public function index(){
        $categories = Categorie::all();
        $temp = [];
        foreach ($categories as $key => $categorie){
            $temp[] = $categorie;
            $categorie->subCategorie;
            $temp[$key]['classe'] = $categorie->classe->name;
        }
        return $temp;
    }
    public function getCategorie($id){
        $cat = SubCategorie::where([
            'categorie_id' => $id,
        ])->get();
        return $cat;
    }
    public function delete($id){
        $categorie = Categorie::find($id);
        if(null === $categorie){
            return ['error' => 'classe not found'];
        }
        $this->DeleteRelation($categorie);
        $categorie->delete();
        return ['deleted' => true];
    }
    public function DeleteRelation($categorie){
        foreach($categorie->subCategorie as $sub){
            foreach($sub->products as $product){
                $product->delete();
            }
            $sub->delete();
        }
    }
}
