<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Cart;

class UserCartController extends Controller
{
    //
    public function addProduct(Request $request){
        return Cart::create([
            'user_id' => Auth::user()->id,
            'product_id' => $request->product_id,
            'quantity' => $request->quantity
        ]);
        
    }
    public function removeOneProduct(Request $request){
        $product = Cart::where('product_id', $request->product_id)->where('user_id', Auth::user()->id)->get();
        return $product;
    }
    public function getCart(){
        $cart = Cart::where('user_id', Auth::user()->id)->get();
        $temp = [];
        foreach($cart as $key => $product){
            $temp[] = $product->product[0];
            unset($temp[$key]['visit']);
            unset($temp[$key]['updated_at']);
            unset($temp[$key]['created_at']);
            unset($temp[$key]['description']);
            unset($temp[$key]['specs']);
            $temp[$key]['quantity'] = $product['quantity'];
            $temp[$key]['image'] = json_decode($product->product[0]['photos'])[0];
            unset($temp[$key]['photos']);
            unset($temp[$key]['sub_categorie_id']);
        }
        return $temp;
    }
}
