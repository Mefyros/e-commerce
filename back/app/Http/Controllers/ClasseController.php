<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Classe;
use App\Categorie;
use App\SubCategorie;
use App\Product;

class ClasseController extends Controller
{
    //
    public function index(){
        $classes = Classe::all();
        $temp = [];
        foreach($classes as $key => $classe){
            $temp[] = $classe;
            $temp[$key]['categories'] = $classe->categories;
        }
        return $temp;
    }
    public function create(Request $request){
        return Classe::create([
            'name' => $request->name
        ]);
    }
    public function delete($id){
        $classe = Classe::find($id);
        if(null === $classe){
            return ['error' => 'classe not found'];
        }
        $this->DeleteRelation($classe);
        $classe->delete();
        return ['deleted' => true];
    }
    public function DeleteRelation($classe){
        foreach($classe->categories as $categorie){
            foreach($categorie->subCategorie as $sub){
                foreach($sub->products as $product){
                    $product->delete();
                }
                $sub->delete();
            }
            $categorie->delete();
        }
    }
}
