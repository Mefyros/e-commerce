<?php

namespace App\Http\Controllers\Products;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Support\Facades\Storage;


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
            $file;
            $inserted =
            Product::create([
                'name' => $request->name,
                'specs' => json_encode($request->specifications),
                'description' => $request->description,
                'price' => intval($request->price),
                'photos' => json_encode($file),
                'sub_categorie_id' => $request->sub_categorie_id
            ]);
            return response()->json(['response' => 'inserted']);
        } else {
            return $validator;
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
            if($request->delete){
                if(is_array($request->delete)){
                    $temp = [];
                    foreach($request->delete as $value){
                        $temp[] = $value = end(explode('/', $value));
                    }
                    Storage::delete($temp);
                } else {
                    $file = explode('/', $request->delete);
                    Storage::delete(end($file));
                }
            }
            // if(isset($request->photos[0])){
            //     $file = $this->getPhotos($request->photos);
            //     // foreach($file as $value){
            //     //     $product->photos
            //     // }
            // }
            $product->name = $request->name;
            $product->specs = json_encode($request->specifications);
            $product->description = $request->description;
            $product->price = intval($request->price);
            $product->save();
            return ['product' => $product];

        }
    }
    public function mostViewedProduct(){
        $products = Product::where(
            'visit',
            '>',
            0
        )
        ->orderBy('visit', 'DESC')
        ->get()
        ->take(4);
        return $products;
    }
    public function visit($id){
        $product = Product::find($id);
        if($product){
            $product->visit = $product->visit + 1;
            $product->save();
            return $product;
        }
    }
    public function setQuantity(Request $request, $id){
        $product = Product::find($id);
        if($request->quantity){
            $product->quantity = intval($request->quantity);
            $product->save();
            return $product;
        }
    }
    
}
