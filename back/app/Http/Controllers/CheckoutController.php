<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transporter;
use App\Product;

class CheckoutController extends Controller
{
    //
    public function getDelivery(Request $request){
        $transporters = $this->parseTransporter(Transporter::all());
        $products = $this->parseCart($request->cart);
        $credentials = $request->credential;
        $cost = $this->getFinalCost($credentials, $products, $transporters);
        return $cost;
    }
    public function parseCart($cart){
        $products = [];
        $total = 0;
        $total_weight = 0;
        foreach($cart as $product){
            $count = count($products) + 1;
            if($product['quantity'] <= 25){
                $quantity = intval($product['quantity']);
                $count++;
                $temp = Product::find($product['id']);
                $products[] = [
                    'id' => $temp->id,
                    'price' => $temp->price,
                    'weight' => $temp->weight,
                    'total_weight' => $temp->weight * $quantity,
                    'quantity' => $product['quantity']
                ];
                $total += $temp->price * $quantity;
                $total_weight += $temp->weight * $quantity;
            }
        }
        $products['total'] = $total;
        $products['total_weight'] = $total_weight;
        return $products;
    }
    public function parseTransporter($transporters){
        $temp = [];
        foreach($transporters as $transporter){
            $temp[] = [
                'name' => $transporter->name,
                'base_cost' => json_decode($transporter->base_cost),
                'extra' => json_decode($transporter->extra),
                'disponibility' => json_decode($transporter->disponibility),
                'per_product' => $transporter->per_product,
                'delivery_delay' => $transporter->delivery_delay
            ];
        }
        return $temp;
    }
    public function getFinalCost($credentials, $products, $transporters){
        $base_cost = $this->getBaseCost($products, $transporters);
        $extra = $this->getExtra($credentials, $transporters, $base_cost);
        $per_product = $this->addPerProduct($products, $transporters, $extra);
        return $per_product;
    }
    public function getBaseCost($products, $transporters){
        $temp = [];
        $temp['total_weight'] = $products['total_weight'];
        foreach($transporters as $transporter){
            $temp[$transporter['name']] = [];
            foreach($transporter['base_cost'] as $weight => $price ){
                if($products['total_weight'] <= $weight){
                    $temp[$transporter['name']]['delivery_delay'] = $transporter['delivery_delay'];
                    $temp[$transporter['name']]['price'] = $price;
                }
            }
        }
        return $temp;
    }
    public function getExtra($credentials, $transporters, $base_cost){
        $temp = $base_cost;
        foreach($transporters as $transporter){
            foreach($transporter['extra'] as $name => $value){
                if($credentials['departement'] === $name){
                    if(isset($temp[$transporter['name']]['price'])){
                        $price = $temp[$transporter['name']]['price'];
                        $temp[$transporter['name']]['price'] = $price * floatval($value);
                    }
                }
            }
        }
        return $temp;
    }
    public function addPerProduct($products, $transporters, $cost){
        $temp = $cost;
        foreach($transporters as $transporter){
            foreach($products as $product){
                $price = $transporter['per_product'] * $product['quantity'];
                if(isset($temp[$transporter['name']]['price'])){
                    $temp[$transporter['name']]['price'] += $price;
                }
            }
        }
        return $temp;
    }
}
// if($credential['pays'] !== 'France'){
//     if($transporter['disponibility'][0] !== "international" && isset($temp[$transporter['name']])){
//         unset($temp[$transporter['name']]);
//     }
// }
