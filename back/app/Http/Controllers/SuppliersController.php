<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Suppliers;

class SuppliersController extends Controller
{
    //

    public function showAll () {
        return Suppliers::all();
    }

    public function create(Request $request){
        return Suppliers::create([
            'name' => $request->name,
        ]);
    }

    public function delete($id){
        $sup = Suppliers::find($id);
        if(null === $sub){
            return ['error' => 'Suppliers not found'];
        }
        $sup->delete();
        return ['deleted' => true];
    }

    public function update(Request $request, $id) {
        $sup = Suppliers::find($id);
        if($sup) {
            if($request->name){
                $sup->name = $request->name;
                $sup->save();
                return $sup;
            } else {
                return ['error' => 'Give me a name'];
            }
        } else {
            return ['error' => 'Suppliers not found'];
        }
    }
}
