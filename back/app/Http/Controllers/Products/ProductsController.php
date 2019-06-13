<?php

namespace App\Http\Controllers\Products;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Product;

class ProductsController extends Controller
{
    
    public function productCreate(Request $request){
        $validator = $this->formCreateValidator($request, [
            'name',
            'description',
            'specifications',
            'price',
            'specifications',
            'photos'
        ]);
        if($validator === true){
            $file = $this->getPhotos($request->photos);
            $inserted =
            Product::create([
                'name' => $request->name,
                // 'specs' => json_encode($request->specifications),
                'description' => $request->description,
                'price' => intval($request->price),
                'photos' => json_encode($file)
            ]);
            return response()->json(['response' => 'inserted']);
        } else {
            return response()->json(['ok' => 'ok']);
        }
    }
    public function formCreateValidator($request, $fields){
        $validity = 0;
        $errors = [];
        foreach($fields as $field){
            if(!isset($request[$field]) || null === $request[$field]){
                $validity = 1;
                $errors[$field] = 'manquant';
            }
        }
        if($validity === 0){
            return true;
        } else {
            return ['error' => $errors];
        }
    }
    public function getPhotos($files){
        if(is_array($files)){
            $paths = [];
            foreach($files as $file){
                if($file->isValid()){
                    $path = $file->store('public/productImages');
                    $path = str_replace('public', 'storage', asset($path));
                    $paths[] = asset($path);
                }
            }
            return $paths;
        } else {
            if($files->isValid()){
                $path = $files->store('public/productImages');
                $path = str_replace('public', 'storage', asset($path));
                return [asset($path)];
            }
        }
    }
    public function delete($id){
        $product = Product::find($id);
        if($product){
            $product->delete();
            return ["deletion" => true];
        } else {
            return ['error' => 'produit introuvable'];
        }
    }
    public function update(Request $request, $id){
        $product = Product::find($id);
        if($product){
            if($product->photos !== $request->photos){

            }
            $product->name = $request->name;
            $product->specs = json_encode($request->specifications);
            $product->description = $request->description;
            $product->price = intval($request->price);
            $product->save();
            return ['product' => $product];

        }
    }
    
}
