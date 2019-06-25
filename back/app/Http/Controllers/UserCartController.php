<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Cart;

class UserCartController extends Controller
{
    //
    public function saveCart(Request $request){
        $cart = Cart::firstOrCreate([
            'user_id' => Auth::user()->id,
        ]);
        $cart->cart = json_encode($request->cart);
        $cart->save();
        return json_decode($cart->cart);
    }
    public function getCart(){
        $cart = Cart::where('user_id', Auth::user()->id);
        return json_decode($cart->cart);
    }
    public function remove(){
        $cart = Cart::where('user_id', Auth::user()->id);
        if(null !== $cart){
            $cart->delete();
        }
    }
}
