<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Order;


class OrderController extends Controller
{
    //
    public function getAllByUser(){
        $orders = Order::where('user_id', Auth::user()->id)->get();
        // return $orders;
        $temp = [];
        foreach ($orders as $order){
            $temp[] = [
                'id' => $order->id,
                'cart' => $order->cart,
                'step' => $order->orderStep->step,
                'ordered' => $order->created_at
            ];
        }
        return $temp;
    }
    public function getAll(){
        $orders = Order::all();
        $temp = [];
        foreach ($orders as $order){
            $temp[] = [
                'id' => $order->id,
                'cart' => $order->cart,
                'step' => $order->orderStep->step,
                'ordered' => $order->created_at
            ];
        }
        return $temp;
    }
    public function delete($id){
        $order = Order::find($id);
        if(null !== $order){
            $order->delete();
            return ['order' => 'deleted'];
        } else {
            return ['err' => 'order not found'];
        }
    }
}
